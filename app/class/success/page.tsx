import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weekly Classes",
  description:
    "Community Metabolic Health is a drop-in Zoom class. No registration required.",
};

export default function ClassSuccessPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-slate-200 bg-slate-100 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Weekly Classes
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Classes are now drop-in only.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          No registration form is needed. Use the Weekly Classes page to open the
          Zoom link directly and join.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/class"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Open Weekly Classes
          </Link>
          <Link
            href="/book"
            className="rounded-md border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Book Consult
          </Link>
        </div>
      </div>
    </main>
  );
}
