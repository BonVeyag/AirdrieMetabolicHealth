import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownArticle } from "@/components/content/markdown-article";
import { CtaStrip } from "@/components/ui/cta-strip";
import { getCollectionEntry, getCollectionSlugs } from "@/lib/content";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getCollectionSlugs("resources");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getCollectionEntry("resources", slug);

  if (!resource) {
    return {
      title: "Resource not found",
    };
  }

  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = await getCollectionEntry("resources", slug);

  if (!resource) {
    notFound();
  }

  return (
    <main>
      <MarkdownArticle
        title={resource.title}
        description={resource.description}
        bodyHtml={resource.bodyHtml}
        references={resource.references}
        eyebrow="Resource"
        metadataLine={
          resource.tags.length
            ? `Tags: ${resource.tags.join(" • ")}`
            : undefined
        }
      />

      <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <CtaStrip
          title="Turn reading into action"
          description="Book an in-person consultation to tailor these strategies safely to your health profile."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Back to resources"
          secondaryHref="/resources"
        />
      </section>
    </main>
  );
}
