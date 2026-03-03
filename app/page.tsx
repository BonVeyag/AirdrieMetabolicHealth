import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookTicker } from "@/components/ui/book-ticker";
import { CtaStrip } from "@/components/ui/cta-strip";
import { FeatureCard } from "@/components/ui/feature-card";
import { TaglineCarousel } from "@/components/ui/tagline-carousel";
import { YouTubeVideoCarousel } from "@/components/ui/youtube-video-carousel";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Physician-led weight loss and metabolic health care pathway in Airdrie, Alberta.",
};

const tools = [
  {
    title: "Fasting",
    description:
      "Use structured meal timing to improve insulin sensitivity and hunger regulation.",
    href: "/pillars/fasting",
  },
  {
    title: "Therapeutic Carbohydrate Restriction (TCR)",
    description:
      "Build lower-glycemic nutrition strategies tailored to your metabolic goals.",
    href: "/pillars/carb-restriction",
  },
  {
    title: "Stress Management",
    description:
      "Address sleep, stress load, and recovery habits that impact weight and glucose.",
    href: "/pillars/stress",
  },
  {
    title: "Exercise",
    description:
      "Progress from sustainable movement to structured resistance and aerobic training.",
    href: "/pillars/exercise",
  },
  {
    title: "Substance Use",
    description:
      "Reduce alcohol and nicotine burden to support liver, cardiometabolic, and sleep health.",
    href: "/pillars/substance-use",
  },
  {
    title: "Weight Loss Medications",
    description:
      "Use evidence-based obesity medications when clinically indicated as part of a broader plan.",
    href: "/pillars/weight-loss-drugs",
  },
];

type PlanStep = {
  number: "1" | "2" | "3";
  badgeClassName: string;
  surfaceClassName: string;
  title: string;
  description?: string;
  bullets?: string[];
  cta?: {
    label: string;
    href: string;
    className: string;
  };
};

const planSteps: PlanStep[] = [
  {
    number: "1",
    badgeClassName: "bg-emerald-100 text-emerald-700",
    surfaceClassName: "from-emerald-50 via-white to-white",
    title: "Book an in-person visit for a comprehensive metabolic & obesity assessment",
    description:
      "We review your health history, medications, labs, and obesity-related conditions to build an individualized treatment plan.",
  },
  {
    number: "2",
    badgeClassName: "bg-cyan-100 text-cyan-700",
    surfaceClassName: "from-cyan-50 via-white to-white",
    title: "Structured treatment phase",
    bullets: [
      "Physician-led follow-up (in-person or virtual)",
      "Weekly group education sessions",
      "Multidisciplinary care team support\nRegistered dietitian, exercise specialist, pharmacist, behavioural health, psychology, and social work.",
      "24/7 web community resources",
    ],
  },
  {
    number: "3",
    badgeClassName: "bg-violet-100 text-violet-700",
    surfaceClassName: "from-violet-50 via-white to-white",
    title: "Long-term obesity remission & maintenance plan",
    description:
      "A sustainable maintenance plan is the cornerstone of lasting weight loss. Most programs focus on losing weight. We focus on keeping it off.",
  },
];

export default function HomePage() {
  const callHref = `tel:${siteConfig.clinic.phone.replace(/[^+\d]/g, "")}`;
  const websiteHref = "https://onehealthairdrie.ca";

  return (
    <main className="relative overflow-hidden pb-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-[30rem] h-[24rem] w-[24rem] rounded-full bg-emerald-200/20 blur-3xl" />

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <TaglineCarousel />
        <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-emerald-50/45 to-cyan-50/65 shadow-[0_22px_60px_-32px_rgba(2,132,199,0.35)]">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald-300/45 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" />

          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-emerald-700">
                  Airdrie Metabolic Health
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[3.2rem] lg:leading-[1.02]">
                  Reclaim Your Health
                </h1>
                <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-800 sm:text-2xl sm:leading-[1.5] lg:text-[1.9rem] lg:leading-[1.35]">
                  Comprehensive, physician-led weightloss program supported by an
                  integrated team of specialists in nutrition, movement, medication
                  optimization, behavioural health, psychology, and social care.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_-12px_rgba(5,150,105,0.75)] transition hover:-translate-y-0.5 hover:from-emerald-500 hover:to-cyan-500"
                  >
                    Book In-Person Consult
                  </Link>
                  <Link
                    href="/class"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-900/70 bg-white/90 px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Join Weekly Classes
                  </Link>
                </div>

              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_18px_34px_-24px_rgba(15,23,42,0.55)] backdrop-blur-sm sm:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Clinic
                </p>
                <Image
                  src="/one-health-logo.png"
                  alt="One Health Associate Medical logo"
                  width={420}
                  height={270}
                  className="mt-2 h-20 w-auto -ml-3"
                />

                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Address
                    </dt>
                    <dd className="mt-1 text-lg font-medium leading-snug text-slate-800">
                      <span className="block">{siteConfig.clinic.addressLine1}</span>
                      <span className="block">{siteConfig.clinic.addressLine2}</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={callHref}
                        className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1.5 text-lg font-semibold text-sky-700 transition hover:bg-sky-100 hover:text-sky-800"
                      >
                        {siteConfig.clinic.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Website
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={websiteHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800"
                      >
                        onehealthairdrie.ca
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-cyan-50/35 p-6 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.45)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.1rem]">
              Your 3-step plan
            </h2>
          </div>

          <ol className="mt-6 grid gap-4 lg:grid-cols-3">
            {planSteps.map((step) => (
              <li
                key={step.number}
                className={`group flex h-full flex-col rounded-2xl border border-slate-200 bg-gradient-to-br ${step.surfaceClassName} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${step.badgeClassName}`}
                >
                  {step.number}
                </span>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 [text-wrap:balance]">
                  {step.title}
                </h3>

                {step.description ? (
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {step.description}
                  </p>
                ) : null}

                {step.bullets ? (
                  <ul className="mt-4 space-y-2.5 text-base leading-7 text-slate-700">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span className="whitespace-pre-line">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {step.cta ? (
                  <Link href={step.cta.href} className={step.cta.className}>
                    {step.cta.label}
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-cyan-700">
              Practical care toolkit
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.1rem]">
              Tools for metabolic recovery
            </h2>
          </div>
          <Link
            href="/start"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Start here
          </Link>
        </div>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          Use these tools with your care team to personalize treatment, monitor progress,
          and build durable metabolic health habits.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((pillar) => (
            <FeatureCard
              key={pillar.href}
              title={pillar.title}
              description={pillar.description}
              href={pillar.href}
            />
          ))}
        </div>
      </section>

      <YouTubeVideoCarousel />

      <BookTicker />

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <CtaStrip
          title="Ready to begin your metabolic health plan?"
          description="Start with one phone call to book your consult, then use Weekly Zoom Classes and community support to stay consistent."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Join Weekly Classes"
          secondaryHref="/class"
        />
      </section>
    </main>
  );
}
