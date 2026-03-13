const steps = [
  {
    title: "Step 1: Pick a protein first",
    examples:
      "Eggs, fish, chicken, lean beef, tofu, Greek yogurt, or cottage cheese.",
    nextStep: "Then move to Step 2",
  },
  {
    title: "Step 2: Add non-starchy vegetables and a side",
    examples:
      "Leafy salad, broccoli, cauliflower rice, zucchini, peppers, cucumber, avocado, olives, or nuts.",
    nextStep: "Then move to Step 3",
  },
  {
    title: "Step 3: Pick a low-carbohydrate drink and dessert",
    examples:
      "Water or sparkling water, unsweetened tea or coffee, berries with plain yogurt, sugar-free gelatin, or a small square of dark chocolate.",
  },
];

export function ThreeStepMealDecisionPanel() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/85 to-cyan-50/35 p-6 shadow-[0_20px_48px_-34px_rgba(15,23,42,0.45)] sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
          Practical template
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.2rem]">
          Three-Step Meal Decision Algorithm
        </h2>
      </div>

      <div className="mt-8 space-y-4">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-[1.6rem] border border-slate-200/90 bg-white/90 p-5 shadow-sm sm:p-6"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[2rem]">
              {step.title}
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              <span className="font-medium text-slate-900">Example options:</span>{" "}
              {step.examples}
            </p>
            {step.nextStep ? (
              <p className="mt-5 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900">
                ↓ {step.nextStep}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
