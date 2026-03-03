import Image from "next/image";

type MedicationPanel = {
  brand: string;
  generic: string;
  route: string;
  imageSrc: string;
  imageAlt: string;
  efficacySummary: string;
  monthlyCostCad: string;
  commonSideEffects: string[];
  contraindications: string[];
  healthCanadaUrl: string;
  monographUrl: string;
  trialLabel: string;
  trialUrl: string;
};

const medicationPanels: MedicationPanel[] = [
  {
    brand: "Wegovy",
    generic: "semaglutide 2.4 mg once weekly",
    route: "Injection pen",
    imageSrc: "/medication-cards/wegovy.jpg",
    imageAlt: "Wegovy patient image with injection pen",
    efficacySummary:
      "In the STEP 1 trial (68 weeks), average weight loss was about 14.9% of starting body weight versus 2.4% with placebo.",
    monthlyCostCad: "About CAD $480-$550/month",
    commonSideEffects: [
      "Nausea, vomiting, constipation, or diarrhea",
      "Fullness, reduced appetite, or reflux",
      "Possible gallbladder symptoms",
    ],
    contraindications: [
      "Pregnancy",
      "Personal or family history of medullary thyroid carcinoma",
      "Multiple endocrine neoplasia syndrome type 2 (MEN2)",
      "Caution with prior pancreatitis",
    ],
    healthCanadaUrl: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=101765",
    monographUrl: "https://pdf.hres.ca/dpd_pm/00082777.PDF",
    trialLabel: "STEP 1 (NEJM 2021)",
    trialUrl: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
  },
  {
    brand: "Zepbound",
    generic: "tirzepatide once weekly",
    route: "Injection pen",
    imageSrc: "/medication-cards/zepbound.png",
    imageAlt: "Zepbound injection pen product image",
    efficacySummary:
      "In SURMOUNT-1 (72 weeks), average weight loss was around 15% to 21% depending on dose, compared with about 3% with placebo.",
    monthlyCostCad: "About CAD $350-$510/month",
    commonSideEffects: [
      "Nausea, diarrhea, constipation, and reduced appetite",
      "Abdominal discomfort or reflux",
      "Possible gallbladder or dehydration-related symptoms",
    ],
    contraindications: [
      "Pregnancy",
      "Personal or family history of medullary thyroid carcinoma",
      "Multiple endocrine neoplasia syndrome type 2 (MEN2)",
      "Caution with prior pancreatitis",
    ],
    healthCanadaUrl: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=106082",
    monographUrl: "https://pdf.hres.ca/dpd_pm/00083504.PDF",
    trialLabel: "SURMOUNT-1 (NEJM 2022)",
    trialUrl: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    brand: "Saxenda",
    generic: "liraglutide 3.0 mg daily",
    route: "Daily injection pen",
    imageSrc: "/medication-cards/saxenda.jpg",
    imageAlt: "Saxenda daily injection being used on upper arm",
    efficacySummary:
      "In the SCALE trial (56 weeks), average weight loss was about 8.0% versus 2.6% with placebo when combined with lifestyle support.",
    monthlyCostCad: "About CAD $420-$560/month",
    commonSideEffects: [
      "Nausea, vomiting, constipation, or diarrhea",
      "Injection-site irritation",
      "Headache or fatigue during dose escalation",
    ],
    contraindications: [
      "Pregnancy",
      "Personal or family history of medullary thyroid carcinoma",
      "Multiple endocrine neoplasia syndrome type 2 (MEN2)",
      "Caution with prior pancreatitis",
    ],
    healthCanadaUrl: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=92226",
    monographUrl: "https://pdf.hres.ca/dpd_pm/00081736.PDF",
    trialLabel: "SCALE (NEJM 2015)",
    trialUrl: "https://www.nejm.org/doi/full/10.1056/NEJMoa1411892",
  },
  {
    brand: "Contrave",
    generic: "naltrexone / bupropion extended release",
    route: "Oral tablets",
    imageSrc: "/medication-cards/contrave.jpg",
    imageAlt: "Contrave patient starter kit and pill bottle image",
    efficacySummary:
      "In COR-I (56 weeks), average weight loss was about 6.1% versus 1.3% with placebo. Nearly half of patients reached at least 5% weight loss.",
    monthlyCostCad: "About CAD $250-$390/month",
    commonSideEffects: [
      "Nausea, constipation, headache, or dry mouth",
      "Insomnia or jitteriness",
      "Possible increase in blood pressure or heart rate",
    ],
    contraindications: [
      "Uncontrolled high blood pressure",
      "Seizure disorder or eating disorder history",
      "Current opioid use or opioid withdrawal",
      "Concurrent MAOI use",
      "Pregnancy",
    ],
    healthCanadaUrl: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=96230",
    monographUrl: "https://pdf.hres.ca/dpd_pm/00081854.PDF",
    trialLabel: "COR-I (Lancet 2010)",
    trialUrl: "https://pubmed.ncbi.nlm.nih.gov/20673995/",
  },
];

export function WeightLossMedicationPanels() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Health Canada approved weight loss medications
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-700">
        These are currently marketed anti-obesity medications in Canada that may be
        considered for eligible adults. Your clinician helps match medication choice
        to your medical history, goals, and tolerability.
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {medicationPanels.map((medication) => (
          <article
            key={medication.brand}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/9] border-b border-slate-200 bg-slate-100">
              <Image
                src={medication.imageSrc}
                alt={medication.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain bg-white p-3"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                {medication.route}
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                {medication.brand}
              </h3>
              <p className="mt-1 text-sm text-slate-700">{medication.generic}</p>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Typical efficacy</h4>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    {medication.efficacySummary}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Estimated monthly cost (CAD)
                  </h4>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    {medication.monthlyCostCad}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Common side effects</h4>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                    {medication.commonSideEffects.map((effect) => (
                      <li key={effect}>{effect}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Important contraindications
                  </h4>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                    {medication.contraindications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
                <a href={medication.healthCanadaUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  Health Canada page
                </a>
                <a href={medication.monographUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  Product monograph
                </a>
                <a href={medication.trialUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {medication.trialLabel}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-5 text-xs leading-6 text-slate-600">
        Cost ranges are cash-pay estimates from Canadian listings and may vary by dose,
        pharmacy, province, and insurance coverage. Data reviewed on February 23, 2026.
      </p>
    </section>
  );
}
