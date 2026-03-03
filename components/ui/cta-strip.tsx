import Link from "next/link";

interface CtaStripProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaStrip({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaStripProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-6 text-white shadow-[0_24px_54px_-36px_rgba(15,23,42,0.9)] sm:p-10">
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl" />

      <p className="relative text-xs font-semibold uppercase tracking-[0.17em] text-cyan-200">
        Next step
      </p>
      <h2 className="relative mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="relative mt-3 max-w-3xl text-base leading-7 text-slate-100 sm:text-lg">
        {description}
      </p>
      <div className="relative mt-7 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-cyan-400"
        >
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-xl border border-white/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
