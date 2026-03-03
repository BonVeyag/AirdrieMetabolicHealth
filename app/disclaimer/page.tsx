import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical disclaimer",
  description:
    "Medical disclaimer for educational content and community resources on Airdrie Metabolic Health.",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Medical disclaimer
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Educational information only
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          The content on this website is provided for education and lifestyle
          support and is not a substitute for individualized medical advice,
          diagnosis, or treatment.
        </p>
      </header>

      <section className="markdown mt-8">
        <h2>No clinician-patient relationship</h2>
        <p>
          Browsing this website, joining the community, or reading resources does
          not establish a clinician-patient relationship.
        </p>

        <h2>Not for emergencies</h2>
        <p>
          This site is not monitored for urgent concerns. If you think you may have
          a medical emergency, call 911 or go to your nearest emergency department.
        </p>

        <h2>Individual variation</h2>
        <p>
          Nutrition, fasting, exercise, and behavior interventions may not be
          suitable for everyone. Decisions should be made with a licensed healthcare
          professional who knows your medical history.
        </p>

        <h2>Medication and treatment changes</h2>
        <p>
          Do not start, stop, or adjust medication based on website content alone.
          Discuss all treatment decisions with your clinician.
        </p>

        <h2>External links</h2>
        <p>
          Reference links are provided for transparency and learning. External
          content is maintained by third parties and may change over time.
        </p>
      </section>
    </main>
  );
}
