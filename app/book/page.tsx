import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book consult",
  description:
    "Book an in-person metabolic health consultation by phone at One Health Associate Medical in Airdrie.",
};

export default function BookPage() {
  const callHref = `tel:${siteConfig.clinic.phone.replace(/[^+\d]/g, "")}`;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Book consult
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Call the clinic to book your consultation
        </h1>
      </header>

      <section className="mt-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Clinic details
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              <strong>{siteConfig.clinic.name}</strong>
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{siteConfig.clinic.address}</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{siteConfig.clinic.phone}</p>
          </div>

          <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-xl font-semibold text-slate-900">One simple way to start</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Call the clinic, request a metabolic consultation, and the team will
              help you book the next available appointment.
            </p>
            <a
              href={callHref}
              className="mx-auto mt-4 flex w-full max-w-lg items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Call {siteConfig.clinic.phone}
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
