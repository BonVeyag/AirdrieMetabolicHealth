import { PillarImageCarousel, type PillarImageSlide } from "@/components/ui/pillar-image-carousel";

const infographicTopics = [
  "Breakfast cereals",
  "Common breakfast",
  "Chocolate",
  "Fruit",
  "Fruit and vegetables",
  "Legumes and flours",
] as const;

const infographicSlides: PillarImageSlide[] = [
  {
    imageSrc: "/tcr-slides/unwin-breakfast-cereals.jpg",
    imageAlt:
      "Dr David Unwin sugar infographic comparing breakfast cereals by glycaemic effect",
    fit: "contain",
    containPaddingClassName: "p-0 sm:p-1",
  },
  {
    imageSrc: "/tcr-slides/unwin-common-breakfast.png",
    imageAlt:
      "Dr David Unwin sugar infographic comparing a typical cereal, toast, and juice breakfast",
    fit: "contain",
    containPaddingClassName: "p-0 sm:p-1",
  },
  {
    imageSrc: "/tcr-slides/unwin-dark-chocolate.jpg",
    imageAlt:
      "Dr David Unwin sugar infographic comparing the sugar content of different chocolates",
    fit: "contain",
    containPaddingClassName: "p-0 sm:p-1",
  },
  {
    imageSrc: "/tcr-slides/unwin-fruits.jpg",
    imageAlt:
      "Dr David Unwin sugar infographic comparing fruit choices by glycaemic effect",
    fit: "contain",
    containPaddingClassName: "p-0 sm:p-1",
  },
  {
    imageSrc: "/tcr-slides/unwin-fruit-veg.jpg",
    imageAlt:
      "Dr David Unwin sugar infographic comparing fruits and vegetables by glycaemic effect",
    fit: "contain",
    containPaddingClassName: "p-0 sm:p-1",
  },
  {
    imageSrc: "/tcr-slides/unwin-legumes.jpg",
    imageAlt:
      "Dr David Unwin sugar infographic comparing legumes, flours, and eggs by glycaemic effect",
    fit: "contain",
    containPaddingClassName: "p-0 sm:p-1",
  },
];

export function DrUnwinSugarInfographicsPanel() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-amber-50/35 p-6 shadow-[0_20px_48px_-34px_rgba(15,23,42,0.45)] sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
          Sugar infographics
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.2rem]">
          Dr David Unwin&apos;s sugar infographics
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
          Low Carb GP Dr David Unwin has produced practical infographics showing how
          typical portions of common foods can create a surprisingly large blood
          glucose effect, often illustrated as teaspoons of sugar.
        </p>
      </div>

      <div className="mt-6">
        <PillarImageCarousel
          slides={infographicSlides}
          ariaLabel="Dr David Unwin sugar infographic carousel"
          viewportClassName="h-[20rem] sm:h-[26rem] lg:h-[30rem]"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {infographicTopics.map((topic) => (
          <span
            key={topic}
            className="inline-flex rounded-full border border-amber-200 bg-white/85 px-3 py-1.5 text-sm font-semibold text-slate-900"
          >
            {topic}
          </span>
        ))}
      </div>
    </section>
  );
}
