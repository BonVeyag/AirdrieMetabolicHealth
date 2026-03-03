import type { Metadata } from "next";
import { CtaStrip } from "@/components/ui/cta-strip";
import {
  CLASS_NAME,
  CLASS_TIME_LABEL,
  CLASS_TIME_ZONE,
  getClassGoogleCalendarUrl,
  getUpcomingClassSessions,
} from "@/lib/class-program";
import { getClassZoomLink } from "@/lib/class-program-server";

export const metadata: Metadata = {
  title: "Weekly Classes",
  description:
    "Free weekly drop-in Zoom session for Community Metabolic Health. No registration required.",
};

export default function WeeklyClassPage() {
  const upcomingSessions = getUpcomingClassSessions({ count: 6 });
  const zoomLink = getClassZoomLink();
  const addToCalendarHref = getClassGoogleCalendarUrl({ zoomLink });

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Weekly Zoom Classes
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          {CLASS_NAME}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Drop in every Tuesday at {CLASS_TIME_LABEL} on Zoom for a 30-minute
          session. No registration is required. This is a free public-service class
          offered every week.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={zoomLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Join class on Zoom
          </a>
          <a
            href={addToCalendarHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Add to my calendar
          </a>
          <p className="text-sm font-medium text-slate-700">
            No registration needed. Just show up and join.
          </p>
        </div>
      </header>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <section className="space-y-6 rounded-lg border border-slate-200 bg-white p-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Drop-in format</h2>
            <p className="mt-2 text-sm text-slate-700">
              Join live each week for practical support you can apply right away.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>
                <strong>Class name:</strong> {CLASS_NAME}
              </li>
              <li>
                <strong>Schedule:</strong> Every Tuesday at {CLASS_TIME_LABEL} (
                {CLASS_TIME_ZONE})
              </li>
              <li>
                <strong>Meeting ID / Passcode:</strong> 786 8486 1758 / 2v4fVn
              </li>
              <li>
                <strong>No registration required:</strong> Click the Zoom button and
                join. This is a free drop-in session.
              </li>
              <li>
                <strong>What to bring:</strong> No forms are required to attend.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Weekly 30-minute format
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>5 min Medical lecture</li>
              <li>25 min Weekly wins and challenges discussion</li>
            </ul>
          </div>

        </section>

        <aside className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Upcoming class dates</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {upcomingSessions.map((session) => (
              <li key={session.dateKey} className="rounded-md bg-slate-50 px-3 py-2">
                <strong>{session.shortLabel}</strong>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Attend any week. No advance booking needed.
          </p>
        </aside>
      </section>

      <section className="mt-10">
        <CtaStrip
          title="Need a personalized plan first?"
          description="Book a consultation before joining a class to align your goals with your medical context."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Start Here"
          secondaryHref="/start"
        />
      </section>
    </main>
  );
}
