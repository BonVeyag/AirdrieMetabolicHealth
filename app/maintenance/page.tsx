import type { Metadata } from "next";
import { CtaStrip } from "@/components/ui/cta-strip";
import { maintenancePlanContent } from "@/lib/maintenance-plan-content";

export const metadata: Metadata = {
  title: "Health maintenance plan",
  description:
    "Understand what a lifelong health maintenance plan can look like after initial weight loss.",
};

export default function MaintenancePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          {maintenancePlanContent.kicker}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          {maintenancePlanContent.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          {maintenancePlanContent.introduction}
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {maintenancePlanContent.elements.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-100 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          {maintenancePlanContent.successTitle}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          {maintenancePlanContent.successCriteria.map((criterion) => (
            <li key={criterion}>{criterion}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <CtaStrip
          title={maintenancePlanContent.ctaTitle}
          description={maintenancePlanContent.ctaDescription}
          primaryLabel={maintenancePlanContent.ctaPrimaryLabel}
          primaryHref={maintenancePlanContent.ctaPrimaryHref}
          secondaryLabel={maintenancePlanContent.ctaSecondaryLabel}
          secondaryHref={maintenancePlanContent.ctaSecondaryHref}
        />
      </section>
    </main>
  );
}
