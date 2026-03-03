import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consult request received",
  description:
    "Your consultation request has been received. Review next steps and helpful links.",
};

export default function BookSuccessPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-slate-200 bg-slate-100 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Submission received
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Thank you, we received your consultation request.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Our team will contact you using your preferred method. In the meantime,
          you can review the start-here pathway and Weekly Classes schedule.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/class"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            View Weekly Classes
          </Link>
          <Link
            href="/start"
            className="rounded-md border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Start Here
          </Link>
        </div>
      </div>
    </main>
  );
}
