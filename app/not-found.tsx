import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 text-base text-slate-700">
        The page you requested is unavailable or may have moved.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Go home
        </Link>
        <Link
          href="/resources"
          className="rounded-md border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
        >
          Browse resources
        </Link>
      </div>
    </main>
  );
}
