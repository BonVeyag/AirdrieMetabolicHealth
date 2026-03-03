import type { Metadata } from "next";
import Image from "next/image";
import { CtaStrip } from "@/components/ui/cta-strip";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dr. Rajat Thapa and the clinical approach behind Airdrie Metabolic Health.",
};

const aboutSummary = [
  "I am Dr. Rajat Thapa (MD, PhD, CCFP), a family physician in Airdrie, Alberta, practicing at One Health Associate Medical. I care for patients across the full scope of family medicine, and I am passionate about chronic disease management.",
  "A big part of why I am building this community, Airdrie Metabolic Health, is what I see every day in clinic. Many chronic conditions have a common root cause: insulin resistance. Obesity, hypertension, type 2 diabetes, fatty liver, gout, sleep problems, fatigue, PCOS, infertility, depression, anxiety, joint pain, and many more conditions are linked to metabolic dysfunction. When we improve metabolic health, we can often improve several health markers at the same time, not just the number on the scale.",
  "My approach is shaped by a growing body of metabolic research showing insulin resistance can sit upstream of many common modern diseases. In practice, that means focusing on fundamentals that truly move the needle: incorporating fasting in daily life, improving food quality and lowering carbohydrate load, meal timing when appropriate, strength and movement habits, sleep and stress recovery, and medications when they are truly useful, always with an emphasis on long-term maintenance over short-term extremes.",
  "This work is personal for me too. I have seen diabetes in my own family and the consequences it can bring. I also lived the lifestyle side myself: I once had an A1C of 6.6 (in the diabetic range), brought it down, and have kept it consistently under 5.6 with lifestyle changes. Everyone's situation is different, but that experience made me even more committed to building plans that are realistic, sustainable, and compassionate.",
  "Before studying medicine at the University of Calgary, I completed a PhD in behavioural neuroscience at the University of Lethbridge, investigating how reward circuits and learning shape habits and decision-making. That training shows up in my clinical work: lasting behavioural change is not about more willpower, it is about understanding the brain, the environment you live in, and creating a plan simple enough to repeat when life gets busy or stressful.",
  "I also enjoy the procedural and point-of-care side of family medicine. I use bedside ultrasound frequently to speed up assessment and decision-making when it is helpful, from evaluating possible pneumonia to musculoskeletal assessments. In clinic, I regularly perform in-office procedures such as joint and soft-tissue injections (including hip and carpal tunnel injections), minor skin procedures, toenail resections, suturing, and IUD insertions. For IUDs, I use a paracervical block to make the experience significantly more comfortable, and many patients report pain in the 2-3/10 range with this approach.",
  "I live in Airdrie with my family, and I care deeply about community and the small daily habits that keep people well. Outside of work, I enjoy time with family, biking, yoga, soccer, and software development (CentaurMD.ca).",
  "If you are here because you want a clearer path with weight loss, diabetes remission, or metabolic health, I hope this site feels like a supportive starting point. My goal is to help you feel understood, give you a plan that fits real life, and walk alongside you as you build durable health.",
];

const centaurParagraph =
  "I live in Airdrie with my family, and I care deeply about community and the small daily habits that keep people well. Outside of work, I enjoy time with family, biking, yoga, soccer, and software development (CentaurMD.ca).";

export default function AboutPage() {
  const callHref = `tel:${siteConfig.clinic.phone.replace(/[^+\d]/g, "")}`;
  const websiteHref = "https://onehealthairdrie.ca";

  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 h-[24rem] w-[24rem] rounded-full bg-emerald-200/20 blur-3xl" />

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.19em] text-cyan-700">About</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
          Dr. Rajat Thapa
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Physician-led metabolic care rooted in practical, sustainable change.
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
                    src="/about/dr-rajat-thapa.jpg"
                    alt="Dr. Rajat Thapa standing on a scenic lookout"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover object-[50%_42%] scale-[1.02]"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-200/70 bg-gradient-to-r from-emerald-50 to-cyan-50 px-5 py-5 shadow-[0_20px_40px_-34px_rgba(5,150,105,0.7)]">
                <p className="text-sm font-semibold text-emerald-800">
                  I am accepting new patients.
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight text-slate-900">
                  {siteConfig.clinic.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {siteConfig.clinic.addressLine1}
                  <br />
                  {siteConfig.clinic.addressLine2}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={callHref}
                    className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    Call {siteConfig.clinic.phone}
                  </a>
                  <a
                    href={websiteHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-emerald-700/35 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100/60"
                  >
                    onehealthairdrie.ca
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4 text-[1.02rem] leading-8 text-slate-700">
                {aboutSummary.map((paragraph) => {
                  if (paragraph === centaurParagraph) {
                    return (
                      <p key={paragraph}>
                        I live in Airdrie with my family, and I care deeply about community and
                        the small daily habits that keep people well. Outside of work, I enjoy
                        time with family, biking, yoga, soccer, and software development (
                        <a
                          href="https://centaurmd.ca"
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-cyan-800 underline decoration-cyan-300 underline-offset-4 transition hover:text-cyan-900"
                        >
                          CentaurMD.ca
                        </a>
                        ).
                      </p>
                    );
                  }

                  return <p key={paragraph}>{paragraph}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <CtaStrip
          title="Ready to begin your metabolic health plan?"
          description="Book your in-person consult or join weekly classes to build consistency with physician-guided support."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Join Weekly Classes"
          secondaryHref="/class"
        />
      </section>
    </main>
  );
}
