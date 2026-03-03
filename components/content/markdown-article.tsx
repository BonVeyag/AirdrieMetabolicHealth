import type { ReactNode } from "react";
import { ReferenceItem } from "@/lib/content";
import { ReferenceList } from "@/components/content/reference-list";

interface MarkdownArticleProps {
  title: string;
  description: string;
  bodyHtml: string;
  references: ReferenceItem[];
  eyebrow?: string;
  metadataLine?: string;
  leadMedia?: ReactNode;
}

export function MarkdownArticle({
  title,
  description,
  bodyHtml,
  references,
  eyebrow,
  metadataLine,
  leadMedia,
}: MarkdownArticleProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-900">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">{description}</p>
      {metadataLine ? (
        <p className="mt-2 text-sm text-slate-600">{metadataLine}</p>
      ) : null}

      {leadMedia ? <div className="mt-8">{leadMedia}</div> : null}

      <div
        className={`markdown ${leadMedia ? "mt-6" : "mt-8"}`}
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      <ReferenceList references={references} />
    </article>
  );
}
