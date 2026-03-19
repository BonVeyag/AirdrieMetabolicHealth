import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recommended websites",
  description:
    "Trusted websites for evidence, practical implementation, and ongoing metabolic health education.",
};

const recommendedWebsites = [
  {
    name: "Metabolic Mind",
    href: "https://www.metabolicmind.org/",
    description:
      "Educational platform focused on metabolic psychiatry, clinical updates, and patient stories.",
    previewImageSrc: "/website-previews/metabolicmind.png",
  },
  {
    name: "Diet Doctor",
    href: "https://www.dietdoctor.com/",
    description:
      "Low-carbohydrate education library with clinician interviews and practical guides.",
    previewImageSrc: "/website-previews/dietdoctor.png",
  },
  {
    name: "Charlie Foundation Diet Plans",
    href: "https://charliefoundation.org/diet-plans/",
    description:
      "Foundational ketogenic therapy guidance, diet variations, and implementation resources.",
    previewImageSrc: "/website-previews/charlie-foundation.png",
  },
  {
    name: "Ruled.me",
    href: "https://www.ruled.me/?utm_source=chatgpt.com",
    description:
      "Keto guides, recipes, meal ideas, and practical low-carb implementation tools.",
    previewImageSrc: "/website-previews/ruled-me.png",
  },
  {
    name: "PHC UK Sugar Infographics",
    href: "https://phcuk.org/sugar/",
    description:
      "Dr David Unwin's sugar-equivalent infographics for common foods and beverages.",
    previewImageSrc: "/website-previews/phcuk-sugar.png",
  },
  {
    name: "Low Carb Down Under",
    href: "https://lowcarbdownunder.com.au/",
    description:
      "Conference talks and medical education resources from low-carb clinicians and researchers.",
    previewImageSrc: "/website-previews/low-carb-down-under.png",
  },
  {
    name: "Obesity Canada",
    href: "https://obesitycanada.ca",
    description:
      "Canadian clinical framework and patient-centered obesity management resources.",
    previewImageSrc: "/website-previews/obesity-canada.png",
  },
  {
    name: "Diabetes Canada Guidelines",
    href: "https://guidelines.diabetes.ca",
    description:
      "Clinical practice guidelines for diabetes prevention, management, and risk reduction.",
    previewImageSrc: "/website-previews/diabetes-canada-guidelines.png",
  },
  {
    name: "Newcastle Type 2 Diabetes Reversal",
    href: "https://www.ncl.ac.uk/magres/research/diabetes/reversal/#publicinformation",
    description:
      "Public information from Newcastle University on type 2 diabetes reversal, remission, and the underlying research program.",
    previewImageSrc: "/website-previews/newcastle-diabetes-reversal.jpg",
  },
];

export default function RecommendedWebsitesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Resource library
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Recommended websites
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Reliable web resources for ongoing evidence review and day-to-day practical learning.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        {recommendedWebsites.map((site) => (
          <article
            key={site.href}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <a href={site.href} target="_blank" rel="noreferrer" className="block">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                <Image
                  src={site.previewImageSrc}
                  alt={`${site.name} website preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition duration-300 hover:scale-[1.02]"
                />
              </div>
            </a>

            <div className="p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {site.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{site.description}</p>
              <a
                href={site.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-900 hover:underline"
              >
                Open website
              </a>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-10">
        <Link href="/resources" className="text-sm font-semibold text-slate-900 hover:underline">
          Back to resources
        </Link>
      </div>
    </main>
  );
}
