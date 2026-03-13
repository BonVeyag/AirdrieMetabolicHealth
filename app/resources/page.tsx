import type { Metadata } from "next";
import { CtaStrip } from "@/components/ui/cta-strip";
import { ConditionGuideGrid } from "@/components/ui/condition-guide-grid";
import { FeatureCard } from "@/components/ui/feature-card";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Evidence-based metabolic health resource library with references and practical guidance.",
};

export default function ResourcesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Resource library
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Evidence-based resources
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Browse curated learning channels and topic summaries with practical takeaways.
        </p>
      </header>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Curated collections
          </h2>
          <p className="text-sm text-slate-600">Books, videos, communities, and websites</p>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Books"
            description="Reading recommendations with cover previews and direct reference sources."
            href="/resources/books"
          />
          <FeatureCard
            title="Videos"
            description="YouTube lecture list with preview thumbnails and direct watch links."
            href="/resources/videos"
          />
          <FeatureCard
            title="Facebook Community"
            description="Official page plus discussion group for updates and shared experiences."
            href="/resources/facebook-groups"
          />
          <FeatureCard
            title="Websites"
            description="Trusted websites for evidence summaries, guidelines, and practical tools."
            href="/resources/websites"
          />
        </div>
      </section>

      <ConditionGuideGrid />

      <section className="mt-10">
        <CtaStrip
          title="Need a personalized approach?"
          description="Use these resources as education, then book in-person care for individualized recommendations."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Join Weekly Classes"
          secondaryHref="/class"
        />
      </section>
    </main>
  );
}
