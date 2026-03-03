import { ReferenceItem } from "@/lib/content";

interface ReferenceListProps {
  references: ReferenceItem[];
}

export function ReferenceList({ references }: ReferenceListProps) {
  if (!references.length) {
    return null;
  }

  return (
    <section aria-labelledby="references" className="mt-12 border-t border-slate-200 pt-8">
      <h2 id="references" className="text-xl font-semibold text-slate-900">
        References
      </h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
        {references.map((reference) => (
          <li key={`${reference.title}${reference.url ?? ""}`}>
            <span className="font-medium text-slate-900">{reference.title}</span>
            {reference.source ? <span> ({reference.source})</span> : null}
            {reference.url ? (
              <span>
                {" "}
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-900 underline-offset-2 hover:underline"
                >
                  Link
                </a>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
