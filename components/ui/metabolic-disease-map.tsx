import Link from "next/link";
import {
  conditionGuideListItems,
  type ConditionGuideGroup,
} from "@/lib/condition-guides";

const pillStylesByGroup: Record<
  ConditionGuideGroup,
  {
    border: string;
    text: string;
  }
> = {
  "Metabolic and hormonal": {
    border: "border-emerald-200 hover:border-emerald-400",
    text: "text-emerald-800",
  },
  "Heart, blood pressure, and kidney": {
    border: "border-sky-200 hover:border-sky-400",
    text: "text-sky-800",
  },
  "Mental health and neurology": {
    border: "border-amber-200 hover:border-amber-400",
    text: "text-amber-800",
  },
  "Whole-body, sleep, and inflammatory": {
    border: "border-slate-200 hover:border-slate-400",
    text: "text-slate-800",
  },
};

const mapLabelBySlug: Record<string, string> = {
  "type-2-diabetes": "Type 2 Diabetes",
  "type-1-diabetes": "Type 1 Diabetes",
  "low-testosterone": "Low Testosterone",
  hypertension: "Hypertension",
  "high-cholesterol": "Cholesterol",
  "depression-and-anxiety": "Depression / Anxiety",
  adhd: "ADHD",
  cancer: "Cancer",
  "heart-disease": "Heart Disease",
  "chronic-kidney-disease": "Kidney Disease",
  "fatty-liver": "Fatty Liver",
  "pcos-and-infertility": "PCOS / Infertility",
  gerd: "GERD",
  gout: "Gout",
  "obstructive-sleep-apnea": "Sleep Apnea",
  "alzheimers-disease": "Alzheimer's",
  "seizure-disorder-epilepsy": "Epilepsy",
  "parkinsons-disease": "Parkinson's",
  "bipolar-disorder": "Bipolar",
  "chronic-pain": "Chronic Pain",
  psoriasis: "Psoriasis",
  "osteoporosis-bone-health": "Bone Health",
  "autoimmune-diseases": "Autoimmune",
};

const orbitConditions = conditionGuideListItems
  .filter((guide) => guide.slug !== "obesity")
  .map((guide) => ({
    ...guide,
    mapLabel: mapLabelBySlug[guide.slug] ?? guide.title,
  }));

const outerOrbit = orbitConditions.filter((_, index) => index % 2 === 0);
const innerOrbit = orbitConditions.filter((_, index) => index % 2 === 1);

function getOrbitTransform(index: number, total: number, ring: "outer" | "inner") {
  const angleOffset = ring === "outer" ? -90 : -72;
  const angle = ((angleOffset + (360 / total) * index) * Math.PI) / 180;
  const radiusX = ring === "outer" ? 245 : 182;
  const radiusY = ring === "outer" ? 182 : 132;

  return `translate(-50%, -50%) translate(${Math.cos(angle) * radiusX}px, ${Math.sin(angle) * radiusY}px)`;
}

function ConditionPill({
  title,
  mapLabel,
  group,
  href,
}: (typeof orbitConditions)[number]) {
  const styles = pillStylesByGroup[group];

  return (
    <Link
      href={href}
      aria-label={`Open ${title} guide`}
      title={title}
      className={`inline-flex min-h-11 max-w-[12rem] items-center justify-center rounded-full border bg-white/92 px-4 py-2 text-center text-[0.78rem] font-semibold leading-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${styles.border} ${styles.text}`}
    >
      <span>{mapLabel}</span>
    </Link>
  );
}

export function MetabolicDiseaseMap() {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50/45 p-5 shadow-[0_20px_48px_-34px_rgba(15,23,42,0.55)] sm:p-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Downstream conditions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.3rem]">
            Obesity and insulin resistance
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            Many chronic conditions cluster around the same upstream metabolic load.
            Click any condition to open its simple-language resource page.
          </p>
        </div>

        <div className="mt-8 lg:hidden">
          <div className="flex justify-center">
            <div className="relative flex aspect-square w-full max-w-[19rem] items-center justify-center rounded-full border border-emerald-200 bg-[radial-gradient(circle_at_30%_30%,rgba(236,253,245,0.95),rgba(134,239,172,0.85),rgba(22,163,74,0.92))] p-7 text-center shadow-[0_32px_64px_-34px_rgba(22,101,52,0.75)]">
              <div className="absolute inset-4 rounded-full border border-white/40" />
              <div className="absolute inset-10 rounded-full border border-emerald-100/60" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-950/75">
                  Root driver
                </p>
                <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-[3.4rem]">
                  Obesity
                </h3>
                <p className="mt-3 text-xl font-medium text-emerald-50 sm:text-[1.85rem]">
                  Insulin Resistance
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {orbitConditions.map((guide) => (
              <ConditionPill key={guide.slug} {...guide} />
            ))}
          </div>
        </div>

        <div className="relative mt-8 hidden h-[34rem] lg:block">
          <div className="absolute left-1/2 top-1/2 flex aspect-square w-full max-w-[16.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200 bg-[radial-gradient(circle_at_30%_30%,rgba(236,253,245,0.95),rgba(134,239,172,0.85),rgba(22,163,74,0.92))] p-6 text-center shadow-[0_32px_64px_-34px_rgba(22,101,52,0.75)]">
            <div className="absolute inset-4 rounded-full border border-white/40" />
            <div className="absolute inset-8 rounded-full border border-emerald-100/60" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-950/75">
                Root driver
              </p>
              <h3 className="mt-3 text-[2.25rem] font-semibold tracking-tight text-white">
                Obesity
              </h3>
              <p className="mt-2 text-[1.35rem] font-medium text-emerald-50">
                Insulin Resistance
              </p>
              <p className="mx-auto mt-3 max-w-[12rem] text-xs leading-5 text-emerald-50/95">
                Improving the upstream metabolic picture can help many conditions at
                the same time.
              </p>
            </div>
          </div>

          {outerOrbit.map((guide, index) => (
            <div
              key={guide.slug}
              className="absolute left-1/2 top-1/2"
              style={{ transform: getOrbitTransform(index, outerOrbit.length, "outer") }}
            >
              <ConditionPill {...guide} />
            </div>
          ))}

          {innerOrbit.map((guide, index) => (
            <div
              key={guide.slug}
              className="absolute left-1/2 top-1/2"
              style={{ transform: getOrbitTransform(index, innerOrbit.length, "inner") }}
            >
              <ConditionPill {...guide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
