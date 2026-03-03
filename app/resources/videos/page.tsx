import type { Metadata } from "next";
import Link from "next/link";
import {
  topVideoRecommendations,
  videoRecommendations,
} from "@/lib/video-recommendations";
import { stressVideoRecommendations } from "@/lib/stress-video-recommendations";
import { YouTubeThumbnail } from "@/components/ui/youtube-thumbnail";

export const metadata: Metadata = {
  title: "Video recommendations",
  description:
    "YouTube lecture library for metabolic health, obesity medicine, and low-carbohydrate practice.",
};

export default function VideoRecommendationsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Resource library
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          YouTube recommendations
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Watch expert talks and conference sessions on metabolic disease reversal,
          insulin resistance, and low-carbohydrate clinical care.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Featured Videos
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topVideoRecommendations.map((video) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <YouTubeThumbnail
                videoId={video.id}
                alt={`YouTube preview: ${video.speaker} — ${video.title}`}
                width={480}
                height={360}
                quality={90}
                className="h-28 w-full rounded-md object-cover"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-900">
                {video.speaker}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section
        id="stress-management-videos"
        className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Stress management videos
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          Guided practices for stress regulation, mindfulness, sleep support, and
          emotional resilience.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {stressVideoRecommendations.map((video, index) => (
            <article
              key={video.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <a href={video.youtubeUrl} target="_blank" rel="noreferrer" className="block">
                <YouTubeThumbnail
                  videoId={video.id}
                  alt={`YouTube preview: ${video.speaker} — ${video.title}`}
                  width={640}
                  height={360}
                  quality={92}
                  className="h-44 w-full rounded-md object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                  Stress video {index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-7 text-slate-900">
                  {video.speaker}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{video.title}</p>
                <p className="mt-3 text-sm font-semibold text-slate-900 hover:underline">
                  Watch on YouTube
                </p>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Metabolic health videos
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {videoRecommendations.map((video, index) => (
            <article
              key={video.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <a href={video.youtubeUrl} target="_blank" rel="noreferrer" className="block">
                <YouTubeThumbnail
                  videoId={video.id}
                  alt={`YouTube preview: ${video.speaker} — ${video.title}`}
                  width={640}
                  height={360}
                  quality={92}
                  className="h-44 w-full rounded-md object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                  Video {index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-7 text-slate-900">
                  {video.speaker}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{video.title}</p>
                <p className="mt-3 text-sm font-semibold text-slate-900 hover:underline">
                  Watch on YouTube
                </p>
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <Link href="/resources" className="text-sm font-semibold text-slate-900 hover:underline">
          Back to resources
        </Link>
      </div>
    </main>
  );
}
