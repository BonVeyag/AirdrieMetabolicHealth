import Image from "next/image";
import Link from "next/link";
import { bookTickerItems } from "@/lib/book-ticker-data";

const duplicatedItems = [...bookTickerItems, ...bookTickerItems];

export function BookTicker() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-emerald-50/25 p-5 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.55)] sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Self-paced learning
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Reading recommendations
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/resources/books"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Open books page
            </Link>
          </div>
        </div>

        <div className="book-ticker-wrap mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-white px-3 py-5 sm:px-4">
          <ul className="book-ticker-track flex w-max items-start gap-4">
            {duplicatedItems.map((book, index) => (
              <li key={`${book.slug}-${index}`} className="w-[150px] shrink-0">
                <a
                  href={book.accessUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-slate-200 bg-white/90 p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  aria-label={`${book.accessLabel}: ${book.title} by ${book.author}`}
                >
                  <article>
                    <div className="relative overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                      <Image
                        src={book.coverSrc}
                        alt={`Cover: ${book.title} by ${book.author}`}
                        width={280}
                        height={420}
                        className="h-[190px] w-[134px] object-cover"
                        sizes="134px"
                      />
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-5 text-slate-900">
                      {book.title}
                    </p>
                    <p className="text-[11px] leading-4 text-slate-600">{book.author}</p>
                  </article>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
