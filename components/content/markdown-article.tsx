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
  bodyReplacements?: Array<{
    pattern: RegExp;
    node: ReactNode;
  }>;
}

export function MarkdownArticle({
  title,
  description,
  bodyHtml,
  references,
  eyebrow,
  metadataLine,
  leadMedia,
  bodyReplacements,
}: MarkdownArticleProps) {
  const resolvedReplacements =
    bodyReplacements
      ?.map((replacement, index) => {
        const match = bodyHtml.match(replacement.pattern);
        const anchor = match?.[0];

        if (!anchor) {
          return null;
        }

        const start = bodyHtml.indexOf(anchor);
        if (start < 0) {
          return null;
        }

        return {
          ...replacement,
          index,
          start,
          end: start + anchor.length,
        };
      })
      .filter((replacement) => replacement !== null)
      .sort((left, right) => left.start - right.start) ?? [];

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

      {resolvedReplacements.length > 0 ? (
        <div className={leadMedia ? "mt-6" : "mt-8"}>
          {(() => {
            const blocks: ReactNode[] = [];
            let cursor = 0;
            let hasRenderedBlock = false;

            for (const replacement of resolvedReplacements) {
              if (replacement.start < cursor) {
                continue;
              }

              const htmlBeforeReplacement = bodyHtml.slice(cursor, replacement.start);
              if (htmlBeforeReplacement) {
                blocks.push(
                  <div
                    key={`html-${replacement.index}`}
                    className={`markdown ${hasRenderedBlock ? "mt-10" : ""}`.trim()}
                    dangerouslySetInnerHTML={{ __html: htmlBeforeReplacement }}
                  />,
                );
                hasRenderedBlock = true;
              }

              blocks.push(
                <div
                  key={`node-${replacement.index}`}
                  className={hasRenderedBlock ? "mt-10" : undefined}
                >
                  {replacement.node}
                </div>,
              );
              hasRenderedBlock = true;
              cursor = replacement.end;
            }

            const remainingBodyHtml = bodyHtml.slice(cursor);
            if (remainingBodyHtml) {
              blocks.push(
                <div
                  key="html-tail"
                  className={`markdown ${hasRenderedBlock ? "mt-10" : ""}`.trim()}
                  dangerouslySetInnerHTML={{ __html: remainingBodyHtml }}
                />,
              );
            }

            return blocks;
          })()}
        </div>
      ) : (
        <div
          className={`markdown ${leadMedia ? "mt-6" : "mt-8"}`}
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      )}

      <ReferenceList references={references} />
    </article>
  );
}
