import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownArticle } from "@/components/content/markdown-article";
import { CtaStrip } from "@/components/ui/cta-strip";
import { getCollectionEntry, getCollectionSlugs } from "@/lib/content";

type ResearchPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getCollectionSlugs("research");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getCollectionEntry("research", slug);

  if (!project) {
    return {
      title: "Research item not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ResearchDetailPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const project = await getCollectionEntry("research", slug);

  if (!project) {
    notFound();
  }

  const metadataParts = [
    project.status ? `Status: ${project.status}` : "",
    project.date ? `Updated: ${project.date}` : "",
  ].filter(Boolean);

  return (
    <main>
      <MarkdownArticle
        title={project.title}
        description={project.abstract ?? project.description}
        bodyHtml={project.bodyHtml}
        references={project.references}
        eyebrow="Research"
        metadataLine={metadataParts.join(" • ") || undefined}
      />

      <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <CtaStrip
          title="From project to practice"
          description="Join the local program to apply evidence-informed strategies while research continues to evolve."
          primaryLabel="Join Weekly Classes"
          primaryHref="/class"
          secondaryLabel="Back to research"
          secondaryHref="/research"
        />
      </section>
    </main>
  );
}
