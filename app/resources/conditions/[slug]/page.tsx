import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaStrip } from "@/components/ui/cta-strip";
import { YouTubeVideoCarousel } from "@/components/ui/youtube-video-carousel";
import { conditionGuides, getConditionGuide } from "@/lib/condition-guides";

type ConditionGuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return conditionGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: ConditionGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getConditionGuide(slug);

  if (!guide) {
    return {
      title: "Condition guide not found",
    };
  }

  return {
    title: `${guide.title} resources`,
    description: guide.cardDescription,
  };
}

export default async function ConditionGuidePage({
  params,
}: ConditionGuidePageProps) {
  const { slug } = await params;
  const guide = getConditionGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
          Condition guide
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          {guide.cardDescription}
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/45 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
            In simple language
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {guide.simpleDescription}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {guide.whyItMatters}
          </p>
        </article>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Focus points
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {guide.focusPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {guide.videos?.length ? (
        <YouTubeVideoCarousel
          videos={guide.videos}
          title={`${guide.title} video rotation`}
          kicker="Video rotation"
          featuredLabel={`Featured ${guide.title} talk`}
          viewAllHref=""
          viewAllLabel=""
          containerClassName="mt-10"
        />
      ) : null}

      <section className="mt-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Resources for {guide.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              A mix of site guides, learning collections, and trusted outside organizations.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {guide.resources.map((resource) => {
            const card = (
              <article className="group h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                  {resource.type}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-7 text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {resource.description}
                </p>
                <p className="mt-4 inline-flex rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-900 transition group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                  {resource.external ? "Open external resource" : "Open resource"}
                </p>
              </article>
            );

            if (resource.external) {
              return (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                  {card}
                </a>
              );
            }

            return (
              <Link
                key={resource.href}
                href={resource.href}
                className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                {card}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <CtaStrip
          title="Need help applying this to your case?"
          description="Use this page for education, then book care to review your medications, risks, and next steps in context."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Browse all conditions"
          secondaryHref="/resources#condition-guides"
        />
      </section>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
        <Link
          href="/resources#condition-guides"
          className="text-sm font-semibold text-slate-900 hover:underline"
        >
          Browse all condition guides
        </Link>
        <Link href="/resources" className="text-sm font-semibold text-slate-900 hover:underline">
          Back to resources
        </Link>
      </div>
    </main>
  );
}
