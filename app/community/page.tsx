import type { Metadata } from "next";
import { CtaStrip } from "@/components/ui/cta-strip";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Use the official Facebook page and discussion group for updates, peer support, and shared experiences.",
};

const guidelines = [
  "Be respectful and kind.",
  "This group is for education and peer support, not urgent medical care.",
  "Do not post private health information you are not comfortable sharing.",
  "No spam, unsolicited promotions, or unverified cure claims.",
  "If you have concerning symptoms, contact your clinician or emergency services.",
];

export default function CommunityPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Community
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Community support between visits
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Follow the official Facebook page for updates, and join the discussion
          group to share experiences with others on a similar path.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Official Facebook page</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Clinic updates, practical tips, and announcements.
          </p>
          <a
            href={siteConfig.community.facebookPageUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Open Facebook Page
          </a>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Discussion group</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Share your experience, ask questions, and support others.
          </p>
          <a
            href={siteConfig.community.facebookDiscussionGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            Open Discussion Group
          </a>
        </article>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Community guidelines</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          {guidelines.map((guideline) => (
            <li key={guideline}>{guideline}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <CtaStrip
          title="Use community as support, not replacement care"
          description="For individualized decisions, book a consultation and continue follow-up with your care team."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Join Weekly Classes"
          secondaryHref="/class"
        />
      </section>
    </main>
  );
}
