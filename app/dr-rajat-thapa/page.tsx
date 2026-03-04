import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const canonicalUrl = "https://airdriemetabolichealth.org/dr-rajat-thapa";
const headshotUrl = "/about/dr-rajat-thapa.jpg";
const centaurUrl = "https://centaurmd.ca";

export const metadata: Metadata = {
  title: "Dr Rajat Thapa MD PhD CCFP | Family Physician in Airdrie, Alberta",
  description:
    "Dr Rajat Thapa is a family physician in Airdrie, Alberta, and founder of Airdrie Metabolic Health, offering practical physician-led metabolic support and coaching.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "profile",
    title: "Dr Rajat Thapa MD PhD CCFP | Family Physician in Airdrie, Alberta",
    description:
      "Dr Rajat Thapa is a family physician in Airdrie, Alberta, and founder of Airdrie Metabolic Health, offering practical physician-led metabolic support and coaching.",
    url: canonicalUrl,
    siteName: "Airdrie Metabolic Health",
    locale: "en_CA",
    images: [
      {
        url: `${canonicalUrl}${headshotUrl}`,
        width: 1200,
        height: 1200,
        alt: "Dr Rajat Thapa, family physician in Airdrie, Alberta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Rajat Thapa MD PhD CCFP | Family Physician in Airdrie, Alberta",
    description:
      "Dr Rajat Thapa is a family physician in Airdrie, Alberta, and founder of Airdrie Metabolic Health, offering practical physician-led metabolic support and coaching.",
    images: [`${canonicalUrl}${headshotUrl}`],
  },
};

const programsLinks = [
  {
    label: "Airdrie Metabolic Health",
    href: "/",
  },
  {
    label: "CentaurMD",
    href: centaurUrl,
  },
];

const pageContent = [
  "Dr Rajat Thapa MD PhD CCFP is a family physician in Airdrie, Alberta who focuses on practical metabolic medicine rooted in long-term outcomes. Through Airdrie Metabolic Health, he helps patients improve weight, glucose, blood pressure, and overall health through sustained lifestyle change and careful medication support when appropriate.",
  "After years in family medicine and internal medicine-adjacent care, Dr Rajat Thapa MD PhD CCFP is known for translating metabolic science into simple daily habits that patients can keep. In Airdrie, Alberta, he combines prevention-focused education with clinical follow-up to address the common drivers of chronic disease and to support people in building systems they can actually sustain.",
  "At the center of this care model is care continuity. Dr Rajat Thapa MD PhD CCFP builds plans around nutrition, sleep, stress resilience, movement, and follow-up. He helps people understand why habits matter, how insulin resistance contributes to many modern health concerns, and where supportive interventions such as structured weight programs and medication can fit.",
  "His clinical background includes behavioral science training from a behavioral neuroscience doctorate, which informs how he counsels people through real-life barriers and setbacks. In Airdrie, Alberta, patients can meet Dr Rajat Thapa MD PhD CCFP in person, where he emphasizes realistic, collaborative care rather than one-size-fits-all prescriptions.",
  "Outside direct care, Dr Rajat Thapa MD PhD CCFP is active in education and community support, advocating for clear, evidence-informed pathways that are compassionate and scalable. Airdrie Metabolic Health reflects this mission: to make physician-led metabolic support feel human, practical, and accessible.",
  "Dr Rajat Thapa MD PhD CCFP also co-founded CentaurMD to explore how software and care teams can improve access and adherence. If you are based in Alberta and searching for care that aligns medical expertise with daily habits, this approach is designed to meet people where they are and move them forward step by step.",
  "Across every visit and program in Airdrie, Alberta, the focus remains the same: clear communication, practical goals, and measurable progress. Dr Rajat Thapa MD PhD CCFP encourages patients to partner in decision-making and to treat metabolic health as a long-term practice, not a short-lived campaign.",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Rajat Thapa",
  jobTitle: "Family Physician",
  url: canonicalUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Airdrie",
    addressRegion: "Alberta",
    addressCountry: "Canada",
  },
  sameAs: [
    "https://www.facebook.com/people/Airdrie-Metabolic-Health/61585687289863/",
  ],
};

export default function DrRajatThapaPage() {
  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 h-[24rem] w-[24rem] rounded-full bg-emerald-200/20 blur-3xl" />

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
          Dr Rajat Thapa MD PhD CCFP
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-medium text-slate-800">
          Family Physician – Airdrie, Alberta
        </p>
        <p className="mt-2 max-w-3xl text-base leading-7 text-slate-700">
          Founder – Airdrie Metabolic Health
        </p>
        <p className="mt-2 max-w-3xl text-base leading-7 text-slate-700">
          Founder – CentaurMD
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/45 p-6 shadow-[0_24px_56px_-34px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
            <div>
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200/85 bg-slate-900/5 shadow-[0_26px_40px_-30px_rgba(15,23,42,0.8)]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-sky-100/20" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src={headshotUrl}
                    alt="Dr Rajat Thapa, family physician in Airdrie, Alberta"
                    fill
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover object-[50%_42%] scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4 text-[1.02rem] leading-8 text-slate-700">
                {pageContent.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-cyan-50/35 p-6 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.45)] sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Programs/Links</h2>
          <ul className="mt-5 space-y-3 text-sm sm:text-base">
            {programsLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="font-semibold text-cyan-800 underline decoration-cyan-300 underline-offset-4 transition hover:text-cyan-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
