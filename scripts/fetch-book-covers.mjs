import fs from "node:fs/promises";
import path from "node:path";

const books = [
  { slug: "obesity-code", title: "The Obesity Code", author: "Jason Fung" },
  { slug: "diabetes-code", title: "The Diabetes Code", author: "Jason Fung" },
  { slug: "why-we-get-sick", title: "Why We Get Sick", author: "Benjamin Bikman" },
  { slug: "complete-guide-to-fasting", title: "The Complete Guide to Fasting", author: "Jason Fung" },
  { slug: "brain-energy", title: "Brain Energy", author: "Christopher M. Palmer" },
  { slug: "carnivore-diet", title: "The Carnivore Diet", author: "Shawn Baker" },
  { slug: "atkins-new-diet-revolution", title: "Dr. Atkins' New Diet Revolution", author: "Robert C. Atkins" },
  { slug: "protein-power", title: "Protein Power", author: "Michael R. Eades" },
  { slug: "why-we-get-fat", title: "Why We Get Fat", author: "Gary Taubes" },
  { slug: "good-calories-bad-calories", title: "Good Calories, Bad Calories", author: "Gary Taubes" },
  { slug: "art-and-science-low-carb-living", title: "The Art and Science of Low Carbohydrate Living", author: "Jeff S. Volek" },
  { slug: "fast-feast-repeat", title: "Fast. Feast. Repeat.", author: "Gin Stephens" },
  { slug: "oldest-cure-in-the-world", title: "The Oldest Cure in the World", author: "Steve Hendricks" },
  { slug: "eat-fat-and-grow-slim", title: "Eat Fat and Grow Slim", author: "Richard Mackarness" },
  { slug: "high-fat-nutrition", title: "High Fat Nutrition", author: "Frederick J. Stare" },
  { slug: "fasting-cure", title: "The Fasting Cure", author: "Upton Sinclair" },
  { slug: "letter-on-corpulence", title: "Letter on Corpulence", author: "William Banting" },
];

const outDir = path.join(process.cwd(), "public", "book-covers");

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "AirdrieMetabolicHealth/1.0 (book cover fetch)" },
  });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${url}`);
  }
  return response.json();
}

async function fetchOpenLibraryCover(book) {
  const query = new URLSearchParams({
    title: book.title,
    author: book.author,
    limit: "10",
  });

  const search = await fetchJson(`https://openlibrary.org/search.json?${query.toString()}`);
  const docs = Array.isArray(search.docs) ? search.docs : [];

  for (const doc of docs) {
    if (!doc.cover_i) {
      continue;
    }

    const url = `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
    const image = await fetch(url);
    if (!image.ok) {
      continue;
    }

    const data = Buffer.from(await image.arrayBuffer());
    if (data.length < 5000) {
      continue;
    }

    return { data, source: url, provider: "openlibrary" };
  }

  return null;
}

function normalizeGoogleImageUrl(url) {
  if (!url) {
    return null;
  }
  let normalized = url.replace(/^http:/, "https:");
  normalized = normalized.replace(/&zoom=\d+/g, "");
  normalized = normalized.replace(/&edge=curl/g, "");
  return normalized;
}

async function fetchGoogleBooksCover(book) {
  const query = encodeURIComponent(`intitle:${book.title} inauthor:${book.author}`);
  const search = await fetchJson(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);
  const items = Array.isArray(search.items) ? search.items : [];

  for (const item of items) {
    const links = item?.volumeInfo?.imageLinks;
    const candidate =
      normalizeGoogleImageUrl(links?.extraLarge) ||
      normalizeGoogleImageUrl(links?.large) ||
      normalizeGoogleImageUrl(links?.medium) ||
      normalizeGoogleImageUrl(links?.small) ||
      normalizeGoogleImageUrl(links?.thumbnail) ||
      normalizeGoogleImageUrl(links?.smallThumbnail);

    if (!candidate) {
      continue;
    }

    const image = await fetch(candidate);
    if (!image.ok) {
      continue;
    }

    const data = Buffer.from(await image.arrayBuffer());
    if (data.length < 5000) {
      continue;
    }

    return { data, source: candidate, provider: "google-books" };
  }

  return null;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  const manifest = [];

  for (const book of books) {
    let result = null;

    try {
      result = await fetchOpenLibraryCover(book);
    } catch (error) {
      console.warn(`OpenLibrary lookup failed for ${book.slug}:`, error.message);
    }

    if (!result) {
      try {
        result = await fetchGoogleBooksCover(book);
      } catch (error) {
        console.warn(`Google Books lookup failed for ${book.slug}:`, error.message);
      }
    }

    if (!result) {
      console.error(`No cover found for ${book.title} (${book.author})`);
      manifest.push({ ...book, coverSrc: null, source: null, provider: null });
      continue;
    }

    const outPath = path.join(outDir, `${book.slug}.jpg`);
    await fs.writeFile(outPath, result.data);
    console.log(`Saved ${book.slug}.jpg via ${result.provider}`);

    manifest.push({
      ...book,
      coverSrc: `/book-covers/${book.slug}.jpg`,
      source: result.source,
      provider: result.provider,
    });
  }

  await fs.writeFile(
    path.join(outDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8",
  );

  const missing = manifest.filter((book) => !book.coverSrc);
  if (missing.length) {
    console.error("Missing covers:");
    for (const book of missing) {
      console.error(`- ${book.title} (${book.author})`);
    }
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
