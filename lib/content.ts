import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentCollection = "pillars" | "resources" | "research";

const referenceSchema = z.object({
  title: z.string(),
  source: z.string().optional(),
  url: z.string().url().optional(),
});

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  references: z.array(referenceSchema).optional().default([]),
  status: z.enum(["working paper", "submitted", "published"]).optional(),
  abstract: z.string().optional(),
});

export type ReferenceItem = z.infer<typeof referenceSchema>;
export type ContentFrontmatter = z.infer<typeof frontmatterSchema>;

export interface ContentListItem extends ContentFrontmatter {
  slug: string;
  collection: ContentCollection;
}

export interface ContentEntry extends ContentListItem {
  body: string;
  bodyHtml: string;
}

const markdownProcessor = remark().use(remarkGfm).use(remarkHtml);

const byDateThenTitle = (a: ContentListItem, b: ContentListItem) => {
  if (a.date && b.date) {
    return b.date.localeCompare(a.date);
  }

  if (a.date && !b.date) {
    return -1;
  }

  if (!a.date && b.date) {
    return 1;
  }

  return a.title.localeCompare(b.title);
};

async function ensureDirectory(collection: ContentCollection) {
  const folder = path.join(CONTENT_DIR, collection);
  await fs.mkdir(folder, { recursive: true });
  return folder;
}

async function parseMarkdownFile(
  collection: ContentCollection,
  fileName: string,
  withHtml: boolean,
): Promise<ContentEntry> {
  const folder = await ensureDirectory(collection);
  const filePath = path.join(folder, fileName);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: ${parsed.error.flatten().formErrors.join(", ")}`,
    );
  }

  const bodyHtml = withHtml
    ? (await markdownProcessor.process(content)).toString()
    : "";

  return {
    ...parsed.data,
    slug: fileName.replace(/\.md$/, ""),
    collection,
    body: content,
    bodyHtml,
  };
}

export async function getCollectionSlugs(collection: ContentCollection) {
  const folder = await ensureDirectory(collection);
  const entries = await fs.readdir(folder, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.replace(/\.md$/, ""));
}

export async function getCollectionItems(collection: ContentCollection) {
  const folder = await ensureDirectory(collection);
  const entries = await fs.readdir(folder, { withFileTypes: true });
  const markdownFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.endsWith(".md"),
  );

  const parsed = await Promise.all(
    markdownFiles.map((file) => parseMarkdownFile(collection, file.name, false)),
  );

  return parsed
    .map((item) => ({
      title: item.title,
      description: item.description,
      date: item.date,
      tags: item.tags,
      references: item.references,
      status: item.status,
      abstract: item.abstract,
      slug: item.slug,
      collection: item.collection,
    }))
    .sort(byDateThenTitle);
}

export async function getCollectionEntry(
  collection: ContentCollection,
  slug: string,
): Promise<ContentEntry | null> {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-]/g, "");

  if (!safeSlug) {
    return null;
  }

  const fileName = `${safeSlug}.md`;

  try {
    return await parseMarkdownFile(collection, fileName, true);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";

    if (message.includes("ENOENT")) {
      return null;
    }

    throw error;
  }
}

export async function getResourceTags() {
  const resources = await getCollectionItems("resources");
  const tags = new Set<string>();

  for (const resource of resources) {
    for (const tag of resource.tags) {
      tags.add(tag);
    }
  }

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
