import type { Metadata } from "next";
import { FeatureCard } from "@/components/ui/feature-card";
import { CtaStrip } from "@/components/ui/cta-strip";
import { getCollectionItems } from "@/lib/content";
import { maintenancePlanContent } from "@/lib/maintenance-plan-content";

export const metadata: Metadata = {
  title: "Start here",
  description:
    "Begin with six core tools for metabolic recovery, including weight loss medications.",
};

const expectedPillars = [
  {
    slug: "fasting",
    fallbackTitle: "Fasting",
    fallbackDescription: "Meal timing strategies and safety considerations.",
  },
  {
    slug: "carb-restriction",
    fallbackTitle: "Therapeutic Carbohydrate Restriction (TCR)",
    fallbackDescription: "Lower-glycemic nutrition for insulin resistance.",
  },
  {
    slug: "stress",
    fallbackTitle: "Stress Management",
    fallbackDescription: "Stress and sleep strategies that support recovery.",
  },
  {
    slug: "exercise",
    fallbackTitle: "Exercise",
    fallbackDescription: "Strength and cardio programming for metabolic health.",
  },
  {
    slug: "substance-use",
    fallbackTitle: "Substance Use",
    fallbackDescription: "Reduce alcohol and nicotine burden for better outcomes.",
  },
  {
    slug: "weight-loss-drugs",
    fallbackTitle: "Weight Loss Medications",
    fallbackDescription:
      "Evidence-based obesity pharmacotherapy when clinically appropriate.",
  },
];

export default async function StartPage() {
  const pillarItems = await getCollectionItems("pillars");
  const pillarMap = new Map(pillarItems.map((item) => [item.slug, item]));

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Start here
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Tools for metabolic recovery
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          These six tools provide structured, evidence-based starting points you can
          discuss with your clinician and personalize over time.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expectedPillars.map((pillar) => {
          const content = pillarMap.get(pillar.slug);

          return (
            <FeatureCard
              key={pillar.slug}
              href={`/pillars/${pillar.slug}`}
              title={content?.title ?? pillar.fallbackTitle}
              description={content?.description ?? pillar.fallbackDescription}
            />
          );
        })}
      </section>

      <section className="mt-14">
        <header className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
            {maintenancePlanContent.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {maintenancePlanContent.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {maintenancePlanContent.introduction}
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {maintenancePlanContent.elements.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
            {maintenancePlanContent.successTitle}
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            {maintenancePlanContent.successCriteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <CtaStrip
            title={maintenancePlanContent.ctaTitle}
            description={maintenancePlanContent.ctaDescription}
            primaryLabel={maintenancePlanContent.ctaPrimaryLabel}
            primaryHref={maintenancePlanContent.ctaPrimaryHref}
            secondaryLabel={maintenancePlanContent.ctaSecondaryLabel}
            secondaryHref={maintenancePlanContent.ctaSecondaryHref}
          />
        </div>
      </section>
    </main>
  );
}
