import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy practices for information submitted through Airdrie Metabolic Health forms.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Privacy
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Privacy notice
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          We collect only the minimum information needed for clinic intake and
          record matching.
        </p>
      </header>

      <section className="markdown mt-8">
        <h2>What we collect</h2>
        <ul>
          <li>Name</li>
          <li>Alberta Health Care Number</li>
        </ul>

        <h2>Data transfer and deletion</h2>
        <p>
          Website form data is deleted from the server once the information is
          transferred to the clinic&apos;s secure electronic health record.
        </p>
      </section>
    </main>
  );
}
