import Link from "next/link";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  children?: ReactNode;
}

export function FeatureCard({ title, description, href, children }: FeatureCardProps) {
  const cardBody = (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-cyan-50/35 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_-22px_rgba(15,23,42,0.6)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-100/70 blur-2xl transition duration-300 group-hover:scale-110" />
      <h3 className="relative text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="relative mt-2 text-base leading-7 text-slate-700">{description}</p>
      {children ? <div className="relative mt-4 text-sm text-slate-600">{children}</div> : null}
      {href ? (
        <p className="relative mt-5 inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-900 transition group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
          Learn more
        </p>
      ) : null}
    </article>
  );

  if (!href) {
    return cardBody;
  }

  return (
    <Link
      href={href}
      className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
    >
      {cardBody}
    </Link>
  );
}
