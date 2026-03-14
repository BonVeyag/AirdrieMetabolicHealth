"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  type CSSProperties,
  type FocusEvent,
} from "react";
import {
  conditionGuideListItems,
  type ConditionGuideGroup,
} from "@/lib/condition-guides";

type OrbitLane = "outer" | "middle" | "inner";
type PlanetSize = "xl" | "lg" | "md" | "sm";

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

// Approximate prevalence-weighted ordering for visual emphasis only.
const approximatePrevalenceOrder = [
  "high-cholesterol",
  "hypertension",
  "fatty-liver",
  "chronic-pain",
  "depression-and-anxiety",
  "gerd",
  "obstructive-sleep-apnea",
  "type-2-diabetes",
  "chronic-kidney-disease",
  "autoimmune-diseases",
  "heart-disease",
  "osteoporosis-bone-health",
  "adhd",
  "cancer",
  "pcos-and-infertility",
  "low-testosterone",
  "gout",
  "psoriasis",
  "bipolar-disorder",
  "alzheimers-disease",
  "seizure-disorder-epilepsy",
  "type-1-diabetes",
  "parkinsons-disease",
] as const;

const laneSettings: Record<
  OrbitLane,
  {
    radiusX: number;
    radiusY: number;
    startAngle: number;
    baseDurationMs: number;
    direction: 1 | -1;
    guideBorder: string;
  }
> = {
  outer: {
    radiusX: 246,
    radiusY: 255,
    startAngle: -90,
    baseDurationMs: 242_000,
    direction: 1,
    guideBorder: "border-emerald-100/70",
  },
  middle: {
    radiusX: 228,
    radiusY: 220,
    startAngle: -72,
    baseDurationMs: 198_000,
    direction: -1,
    guideBorder: "border-emerald-100/65",
  },
  inner: {
    radiusX: 214,
    radiusY: 186,
    startAngle: -54,
    baseDurationMs: 166_000,
    direction: 1,
    guideBorder: "border-emerald-100/60",
  },
};

const pillSizeClasses: Record<PlanetSize, string> = {
  xl: "min-h-[4rem] max-w-[13rem] px-6 py-3.5 text-[1.05rem] leading-[1.1]",
  lg: "min-h-[3.6rem] max-w-[12rem] px-5 py-3 text-[0.98rem] leading-[1.15]",
  md: "min-h-[3.25rem] max-w-[11rem] px-[1.05rem] py-2.5 text-[0.92rem] leading-[1.15]",
  sm: "min-h-[3rem] max-w-[10rem] px-4 py-2.5 text-[0.87rem] leading-[1.15]",
};

const guideLookup = new Map(
  conditionGuideListItems
    .filter((guide) => guide.slug !== "obesity")
    .map((guide) => [
      guide.slug,
      {
        ...guide,
        mapLabel: mapLabelBySlug[guide.slug] ?? guide.title,
      },
    ]),
);

const rankedBaseConditions = approximatePrevalenceOrder.flatMap((slug) => {
  const guide = guideLookup.get(slug);
  return guide ? [guide] : [];
});

const extraConditions = Array.from(guideLookup.values()).filter(
  (guide) => !approximatePrevalenceOrder.includes(guide.slug as (typeof approximatePrevalenceOrder)[number]),
);

const rankedOrbitConditions = [...rankedBaseConditions, ...extraConditions].map(
  (guide, rank) => ({
    ...guide,
    rank,
    lane: rank < 8 ? "outer" : rank < 16 ? "middle" : "inner",
    size:
      rank < 4 ? "xl" : rank < 9 ? "lg" : rank < 17 ? "md" : "sm",
  }),
);

const orbitConditions = (["outer", "middle", "inner"] as const).flatMap((lane) => {
  const laneGuides = rankedOrbitConditions.filter((guide) => guide.lane === lane);
  const laneConfig = laneSettings[lane];

  return laneGuides.map((guide, laneIndex) => {
    const angleStep = 360 / laneGuides.length;
    const sizeOffset =
      guide.size === "xl" ? 10 : guide.size === "lg" ? 5 : guide.size === "md" ? 0 : -8;
    const radiusJitterX = (laneIndex % 3) * 6 - 6;
    const radiusJitterY = ((laneIndex + 1) % 3) * 8 - 8;

    return {
      ...guide,
      initialAngle: laneConfig.startAngle + angleStep * laneIndex,
      radiusX: laneConfig.radiusX + sizeOffset + radiusJitterX,
      radiusY: laneConfig.radiusY + sizeOffset + radiusJitterY,
      durationMs:
        laneConfig.baseDurationMs + laneIndex * 11_000 + guide.rank * 3_200,
      direction: laneConfig.direction,
    };
  });
});

function getOrbitPositionStyle(
  condition: (typeof orbitConditions)[number],
  elapsedMs: number,
  prefersReducedMotion: boolean,
): CSSProperties {
  const progress = prefersReducedMotion ? 0 : (elapsedMs % condition.durationMs) / condition.durationMs;
  const degrees =
    condition.initialAngle + condition.direction * progress * 360;
  const radians = (degrees * Math.PI) / 180;
  const x = Math.cos(radians) * condition.radiusX;
  const y = Math.sin(radians) * condition.radiusY;

  return {
    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
    zIndex: Math.round(300 + condition.radiusY + y),
  };
}

function ConditionPill({
  title,
  mapLabel,
  group,
  href,
  size,
}: (typeof orbitConditions)[number]) {
  const styles = pillStylesByGroup[group];
  const sizeClassName = pillSizeClasses[size as PlanetSize];

  return (
    <Link
      href={href}
      aria-label={`Open ${title} guide`}
      title={title}
      className={`inline-flex items-center justify-center rounded-full border bg-white/95 text-center font-semibold tracking-tight whitespace-normal text-pretty shadow-[0_16px_34px_-24px_rgba(15,23,42,0.55)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${sizeClassName} ${styles.border} ${styles.text}`}
    >
      <span>{mapLabel}</span>
    </Link>
  );
}

export function MetabolicDiseaseMap() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isPointerPaused, setIsPointerPaused] = useState(false);
  const [isFocusPaused, setIsFocusPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPointerPaused || isFocusPaused) {
      return;
    }

    let frameId = 0;
    let lastTimestamp: number | null = null;

    const tick = (timestamp: number) => {
      const previousTimestamp = lastTimestamp;
      if (previousTimestamp !== null) {
        setElapsedMs((current) => current + (timestamp - previousTimestamp));
      }

      lastTimestamp = timestamp;
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isFocusPaused, isPointerPaused, prefersReducedMotion]);

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;
    if (!relatedTarget || !event.currentTarget.contains(relatedTarget)) {
      setIsFocusPaused(false);
    }
  };

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

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {orbitConditions.map((guide) => (
              <ConditionPill key={guide.slug} {...guide} />
            ))}
          </div>
        </div>

        <div
          className="relative mt-8 hidden h-[40rem] lg:block"
          onMouseEnter={() => setIsPointerPaused(true)}
          onMouseLeave={() => setIsPointerPaused(false)}
          onFocusCapture={() => setIsFocusPaused(true)}
          onBlurCapture={handleBlurCapture}
        >
          {(Object.entries(laneSettings) as Array<[OrbitLane, (typeof laneSettings)[OrbitLane]]>).map(
            ([lane, config]) => (
              <div
                key={lane}
                className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${config.guideBorder}`}
                style={{
                  width: `${config.radiusX * 2}px`,
                  height: `${config.radiusY * 2}px`,
                }}
              />
            ),
          )}

          <div className="absolute left-1/2 top-1/2 flex aspect-square w-full max-w-[15rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200 bg-[radial-gradient(circle_at_30%_30%,rgba(236,253,245,0.95),rgba(134,239,172,0.85),rgba(22,163,74,0.92))] p-6 text-center shadow-[0_32px_64px_-34px_rgba(22,101,52,0.75)]">
            <div className="absolute inset-4 rounded-full border border-white/40" />
            <div className="absolute inset-8 rounded-full border border-emerald-100/60" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-950/75">
                Root driver
              </p>
              <h3 className="mt-3 text-[2.1rem] font-semibold tracking-tight text-white">
                Obesity
              </h3>
              <p className="mt-2 text-[1.32rem] font-medium text-emerald-50">
                Insulin Resistance
              </p>
              <p className="mx-auto mt-3 max-w-[10.75rem] text-[0.74rem] leading-5 text-emerald-50/95">
                Improving the upstream metabolic picture can help many conditions at
                the same time.
              </p>
            </div>
          </div>

          {orbitConditions.map((guide) => (
            <div
              key={guide.slug}
              className="absolute left-1/2 top-1/2"
              style={getOrbitPositionStyle(guide, elapsedMs, prefersReducedMotion)}
            >
              <ConditionPill {...guide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
