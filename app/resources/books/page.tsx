import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bookTickerItems } from "@/lib/book-ticker-data";

export const metadata: Metadata = {
  title: "Book recommendations",
  description:
    "Curated reading recommendations for metabolic health, obesity medicine, and low-carbohydrate care.",
};

export default function BookRecommendationsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Resource library
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Reading recommendations
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Build a deeper foundation with these books on obesity, metabolism,
          nutrition, and long-term behavior change.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bookTickerItems.map((book) => (
          <article
            key={book.slug}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <a
              href={book.accessUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Amazon listing for ${book.title} by ${book.author}`}
              className="block overflow-hidden rounded-md border border-slate-200 transition hover:border-slate-300"
            >
              <Image
                src={book.coverSrc}
                alt={`Book cover: ${book.title} by ${book.author}`}
                width={320}
                height={480}
                className="h-[230px] w-full object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </a>
            <h2 className="mt-3 text-base font-semibold leading-6 text-slate-900">
              <a
                href={book.accessUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {book.title}
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-600">{book.author}</p>
          </article>
        ))}
      </section>

      <div className="mt-10">
        <Link href="/resources" className="text-sm font-semibold text-slate-900 hover:underline">
          Back to resources
        </Link>
      </div>
    </main>
  );
}
