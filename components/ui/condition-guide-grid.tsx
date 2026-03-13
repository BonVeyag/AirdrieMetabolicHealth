import Link from "next/link";
import { conditionGuideListItems } from "@/lib/condition-guides";

type ConditionGuideGridProps = {
  title?: string;
  description?: string;
};

export function ConditionGuideGrid({
  title = "Browse by condition",
  description = "Choose a condition guide for a simple overview and a curated list of starting resources.",
}: ConditionGuideGridProps) {
  return (
    <section id="condition-guides" className="mt-10">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
      </div>

      <div className="mt-8 space-y-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {conditionGuideListItems.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.href}
              className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-cyan-50/45 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_-24px_rgba(15,23,42,0.45)]">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                <p className="relative text-xs font-semibold uppercase tracking-[0.13em] text-cyan-700">
                  Resource guide
                </p>
                <h3 className="relative mt-3 text-xl font-semibold leading-7 text-slate-900">
                  {guide.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-slate-700">
                  {guide.cardDescription}
                </p>
                <p className="relative mt-4 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-900 transition group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                  Open guide
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
