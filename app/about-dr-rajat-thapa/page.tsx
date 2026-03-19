import type { Metadata } from "next";
import Image from "next/image";

const siteUrl = "https://airdriemetabolichealth.org";
const canonicalUrl = `${siteUrl}/about-dr-rajat-thapa`;
const headshotUrl = "/about/dr-rajat-thapa.jpg";

export const metadata: Metadata = {
  title: "Dr. Rajat Thapa | Family Physician and Metabolic Health in Airdrie, Alberta",
  description:
    "Dr. Rajat Thapa, also searched as Rajat Thapa MD or Dr Rajat Thapa Airdrie, is a Family Physician focused on metabolic health in Airdrie, Alberta.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "profile",
    title: "Dr. Rajat Thapa | Family Physician and Metabolic Health in Airdrie, Alberta",
    description:
      "Dr. Rajat Thapa, also searched as Rajat Thapa MD or Dr Rajat Thapa Airdrie, is a Family Physician focused on metabolic health in Airdrie, Alberta.",
    url: canonicalUrl,
    siteName: "Airdrie Metabolic Health",
    locale: "en_CA",
    images: [
      {
        url: `${siteUrl}${headshotUrl}`,
        width: 1200,
        height: 1200,
        alt: "Dr. Rajat Thapa, Family Physician and metabolic health physician in Airdrie, Alberta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rajat Thapa | Family Physician and Metabolic Health in Airdrie, Alberta",
    description:
      "Dr. Rajat Thapa, also searched as Rajat Thapa MD or Dr Rajat Thapa Airdrie, is a Family Physician focused on metabolic health in Airdrie, Alberta.",
    images: [`${siteUrl}${headshotUrl}`],
  },
};

const identityFacts = [
  { label: "Full name", value: "Dr. Rajat Thapa" },
  { label: "Variation", value: "Rajat Thapa MD" },
  { label: "Variation", value: "Dr Rajat Thapa Airdrie" },
  { label: "Location", value: "Airdrie, Alberta" },
  { label: "Roles", value: "Family Physician, Metabolic Health" },
];

const pageContent = [
  "Dr. Rajat Thapa is a Family Physician in Airdrie, Alberta and the physician behind Airdrie Metabolic Health. He practices full-scope family medicine and has a focused clinical interest in metabolic health, obesity, insulin resistance, and sustainable chronic disease care.",
  "Patients often find this page by searching for Dr. Rajat Thapa, Rajat Thapa MD, or Dr Rajat Thapa Airdrie. The core of his work is helping people understand why weight gain, rising blood sugar, high blood pressure, fatty liver, sleep disruption, gout, PCOS, and other cardiometabolic problems often cluster together around insulin resistance.",
  "His metabolic health approach emphasizes realistic treatment plans that can be maintained in daily life: food quality, therapeutic carbohydrate reduction when appropriate, meal timing and fasting, strength and movement habits, sleep, stress recovery, and evidence-based medication use when it is truly useful.",
  "Before medicine, Dr. Rajat Thapa completed a PhD in behavioural neuroscience at the University of Lethbridge. That training continues to shape how he approaches habit change: durable health improvement usually comes from making the environment and routine easier to repeat, not from relying on short-term willpower.",
  "Outside the clinic, he lives in Airdrie with his family and continues to build practical health tools and software. He is also the founder of CentaurMD.ca, reflecting an ongoing interest in using technology to support better care and better decisions.",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Rajat Thapa",
  url: canonicalUrl,
  sameAs: [
    "https://centaurmd.ca",
    "https://airdriemetabolichealth.org",
    "https://www.facebook.com/people/Airdrie-Metabolic-Health/61585687289863/",
  ],
  jobTitle: "Family Physician",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Airdrie",
    addressRegion: "AB",
    addressCountry: "CA",
  },
};

export default function AboutDrRajatThapaPage() {
  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 h-[24rem] w-[24rem] rounded-full bg-emerald-200/20 blur-3xl" />

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Physician Profile
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
          Dr. Rajat Thapa
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-medium text-slate-800">
          Family Physician, Metabolic Health in Airdrie, Alberta
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/45 p-6 shadow-[0_24px_56px_-34px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200/85 bg-slate-900/5 shadow-[0_26px_40px_-30px_rgba(15,23,42,0.8)]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-sky-100/20" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src={headshotUrl}
                    alt="Dr. Rajat Thapa, Family Physician in Airdrie, Alberta"
                    fill
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover object-[50%_42%] scale-[1.02]"
                  />
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-slate-200/90 bg-white/90 p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Exact-Match Details
                </h2>
                <dl className="mt-4 space-y-3">
                  {identityFacts.map((fact) => (
                    <div key={`${fact.label}-${fact.value}`}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-base font-medium text-slate-900">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div>
              <div className="space-y-4 text-[1.02rem] leading-8 text-slate-700">
                {pageContent.map((paragraph) => {
                  if (!paragraph.includes("CentaurMD.ca")) {
                    return <p key={paragraph}>{paragraph}</p>;
                  }

                  const [before, after] = paragraph.split("CentaurMD.ca");

                  return (
                    <p key={paragraph}>
                      {before}
                      <a
                        href="https://centaurmd.ca"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-cyan-700 underline decoration-cyan-300 underline-offset-2 transition hover:text-cyan-900"
                      >
                        CentaurMD.ca
                      </a>
                      {after}
                    </p>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-cyan-200/80 bg-cyan-50/70 p-5">
                <h2 className="text-lg font-semibold text-slate-900">Professional Links</h2>
                <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                  <a
                    href="https://centaurmd.ca"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-cyan-700 shadow-sm transition hover:text-cyan-900"
                  >
                    CentaurMD.ca
                  </a>
                  <a
                    href="https://airdriemetabolichealth.org"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-cyan-700 shadow-sm transition hover:text-cyan-900"
                  >
                    Airdrie Metabolic Health
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
    </main>
  );
}
