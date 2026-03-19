import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr Rajat Thapa",
  description: "About Dr Rajat Thapa and Airdrie Metabolic Health.",
  alternates: {
    canonical: "https://airdriemetabolichealth.org/about-dr-rajat-thapa",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden pb-16">
      <div className="mx-auto w-full max-w-3xl px-4 pt-20 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          About Dr Rajat Thapa
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          The canonical physician profile for Dr. Rajat Thapa is available on the dedicated page below.
        </p>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-slate-800">
            Visit the dedicated, SEO-optimized page to learn more:
          </p>
          <Link
            href="/about-dr-rajat-thapa"
            className="mt-4 inline-flex rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            View Physician Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
