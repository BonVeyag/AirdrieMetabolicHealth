import type { Metadata } from "next";
import Image from "next/image";

const canonicalUrl = "https://airdriemetabolichealth.org/dr-rajat-thapa";
const headshotUrl = "/about/dr-rajat-thapa.jpg";

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

const pageContent = [
  "I am Dr. Rajat Thapa (MD, PhD, CCFP), a family physician in Airdrie, Alberta, practicing at One Health Associate Medical. I care for patients across the full scope of family medicine, and I am passionate about chronic disease management.",
  "A big part of why I am building this community, Airdrie Metabolic Health, is what I see every day in clinic. Many chronic conditions have a common root cause: insulin resistance. Obesity, hypertension, type 2 diabetes, fatty liver, gout, sleep problems, fatigue, PCOS, infertility, depression, anxiety, joint pain, and many more conditions are linked to metabolic dysfunction. When we improve metabolic health, we can often improve several health markers at the same time, not just the number on the scale.",
  "My approach is shaped by a growing body of metabolic research showing insulin resistance can sit upstream of many common modern diseases. In practice, that means focusing on fundamentals that truly move the needle: incorporating fasting in daily life, improving food quality and lowering carbohydrate load, meal timing when appropriate, strength and movement habits, sleep and stress recovery, and medications when they are truly useful, always with an emphasis on long-term maintenance over short-term extremes.",
  "This work is personal for me too. I have seen diabetes in my own family and the consequences it can bring. I also lived the lifestyle side myself: I once had an A1C of 6.6 (in the diabetic range), brought it down, and have kept it consistently under 5.6 with lifestyle changes. Everyone's situation is different, but that experience made me even more committed to building plans that are realistic, sustainable, and compassionate.",
  "Before studying medicine at the University of Calgary, I completed a PhD in behavioural neuroscience at the University of Lethbridge, investigating how reward circuits and learning shape habits and decision-making. That training shows up in my clinical work: lasting behavioural change is not about more willpower, it is about understanding the brain, the environment you live in, and creating a plan simple enough to repeat when life gets busy or stressful.",
  "I also enjoy the procedural and point-of-care side of family medicine. I use bedside ultrasound frequently to speed up assessment and decision-making when it is helpful, from evaluating possible pneumonia to musculoskeletal assessments. In clinic, I regularly perform in-office procedures such as joint and soft-tissue injections (including hip and carpal tunnel injections), minor skin procedures, toenail resections, suturing, and IUD insertions. For IUDs, I use a paracervical block to make the experience significantly more comfortable, and many patients report pain in the 2-3/10 range with this approach.",
  "I live in Airdrie with my family, and I care deeply about community and the small daily habits that keep people well. Outside of work, I enjoy time with family, biking, yoga, soccer, and software development (CentaurMD.ca).",
  "If you are here because you want a clearer path with weight loss, diabetes remission, or metabolic health, I hope this site feels like a supportive starting point. My goal is to help you feel understood, give you a plan that fits real life, and walk alongside you as you build durable health.",
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
