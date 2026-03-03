import type { Metadata } from "next";
import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Understand the care pathway from consult to individualized plan, Weekly Classes, and follow-up support.",
};

const stages = [
  {
    name: "1) Book consult",
    detail:
      "Schedule an in-person consultation at One Health (Airdrie). Intake focuses on goals, current medications, and practical barriers.",
  },
  {
    name: "2) Individualized plan",
    detail:
      "Receive a physician-led metabolic strategy that can include nutrition targets, fasting cadence, activity progression, and behavior supports.",
  },
  {
    name: "3) Weekly Classes",
    detail:
      "Attend weekly Zoom group sessions for skills, accountability, peer support, and plan troubleshooting.",
  },
  {
    name: "4) Resources + community",
    detail:
      "Use curated references and the community channel between visits to keep momentum.",
  },
  {
    name: "5) Maintenance plan",
    detail:
      "Regular check-ins refine targets over time with attention to long-term remission, relapse prevention, and measurable outcomes.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Care pathway
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          How the Airdrie pathway works
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Start with an in-person consult, then move through a structured
          physician-led plan supported by Weekly Classes and targeted resources.
        </p>
      </header>

      <section aria-labelledby="pathway" className="mt-10">
        <h2 id="pathway" className="sr-only">
          Pathway steps
        </h2>
        <ol className="space-y-4">
          {stages.map((stage) => (
            <li
              key={stage.name}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">{stage.name}</h3>
              <p className="mt-2 text-base leading-7 text-slate-700">{stage.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/book"
          className="rounded-xl border border-slate-200 bg-slate-100 p-5 text-base font-semibold text-slate-900 hover:bg-slate-100"
        >
          Book In-Person Consult
        </Link>
        <Link
          href="/class"
          className="rounded-xl border border-slate-200 bg-slate-100 p-5 text-base font-semibold text-slate-900 hover:bg-slate-100"
        >
          Join Weekly Classes
        </Link>
      </section>

      <section className="mt-10">
        <CtaStrip
          title="Planning long-term success?"
          description="Review what a lifelong maintenance strategy can look like, then personalize it with your care team."
          primaryLabel="Health Maintenance Plan"
          primaryHref="/maintenance"
          secondaryLabel="Start Here"
          secondaryHref="/start"
        />
      </section>
    </main>
  );
}
