import type { Metadata } from "next";
import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { getCollectionItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Working papers and metabolic health quality-improvement projects from Airdrie Metabolic Health.",
};

function statusClasses(status?: string) {
  if (status === "published") {
    return "border-slate-200 bg-slate-100 text-slate-900";
  }

  if (status === "submitted") {
    return "border-slate-200 bg-slate-100 text-slate-800";
  }

  return "border-slate-200 bg-slate-100 text-slate-800";
}

export default async function ResearchPage() {
  const projects = await getCollectionItems("research");

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Research
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Projects and working papers
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Track ongoing projects related to obesity medicine, metabolic disease,
          and implementation in a primary-care-adjacent setting.
        </p>
      </header>

      <section className="mt-10 space-y-4" aria-label="Research list">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-lg border border-slate-200 bg-white p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">
                <Link href={`/research/${project.slug}`} className="hover:text-slate-900 hover:underline">
                  {project.title}
                </Link>
              </h2>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusClasses(project.status)}`}
              >
                {project.status ?? "working paper"}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {project.abstract ?? project.description}
            </p>
            <Link
              href={`/research/${project.slug}`}
              className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 hover:underline"
            >
              View project details
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <CtaStrip
          title="Want to collaborate?"
          description="Use the contact pathways to discuss implementation studies, quality-improvement, or student projects."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Community"
          secondaryHref="/community"
        />
      </section>
    </main>
  );
}
