import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Facebook communities",
  description:
    "Official page and discussion group links for ongoing accountability and shared implementation support.",
};

const facebookCommunities = [
  {
    name: "Airdrie Metabolic Health (Official Page)",
    description:
      "Clinic updates, practical implementation tips, and announcements.",
    href: siteConfig.community.facebookPageUrl,
    ctaLabel: "Open Facebook page",
  },
  {
    name: "Airdrie Metabolic Health Discussion Group",
    description:
      "Share your experiences, ask questions, and learn from others on a similar path.",
    href: siteConfig.community.facebookDiscussionGroupUrl,
    ctaLabel: "Open discussion group",
  },
];

export default function FacebookGroupsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Resource library
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Facebook communities
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Access both the official clinic page and the discussion group for
          between-visit support.
        </p>
      </header>

      <section className="mt-10 space-y-4">
        {facebookCommunities.map((group) => (
          <article
            key={group.name}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {group.name}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              {group.description}
            </p>
            <a
              href={group.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              {group.ctaLabel}
            </a>
          </article>
        ))}
      </section>

      <div className="mt-10">
        <Link href="/resources" className="text-sm font-semibold text-slate-900 hover:underline">
          Back to resources
        </Link>
      </div>
    </main>
  );
}
