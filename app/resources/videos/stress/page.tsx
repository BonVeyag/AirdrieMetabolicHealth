import type { Metadata } from "next";
import Link from "next/link";
import { YouTubeThumbnail } from "@/components/ui/youtube-thumbnail";
import { stressVideoRecommendations } from "@/lib/stress-video-recommendations";

export const metadata: Metadata = {
  title: "Stress management videos",
  description:
    "Guided stress-management videos, mindfulness practices, and behavioral tools.",
};

export default function StressVideoRecommendationsPage() {
  const [featuredVideo, ...otherVideos] = stressVideoRecommendations;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
          Resource library
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          Stress management videos
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          A focused list of guided practices for stress regulation, sleep support, and
          emotional resilience.
        </p>
      </header>

      {featuredVideo ? (
        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Featured stress management video
          </h2>
          <a
            href={featuredVideo.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <YouTubeThumbnail
              videoId={featuredVideo.id}
              alt={`YouTube preview: ${featuredVideo.speaker} — ${featuredVideo.title}`}
              width={1280}
              height={720}
              quality={90}
              className="h-56 w-full rounded-lg object-cover sm:h-72"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">
              Featured
            </p>
            <h2 className="mt-1 text-2xl font-semibold leading-8 text-slate-900">
              {featuredVideo.speaker}
            </h2>
            <p className="mt-1 text-base leading-7 text-slate-700">{featuredVideo.title}</p>
            <p className="mt-3 text-sm font-semibold text-slate-900 hover:underline">
              Watch on YouTube
            </p>
          </a>
        </section>
      ) : null}

      {otherVideos.length > 0 ? (
        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {otherVideos.map((video, index) => (
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
                  Video {index + 2}
                </p>
                <h2 className="mt-1 text-lg font-semibold leading-7 text-slate-900">
                  {video.speaker}
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-700">{video.title}</p>
                <p className="mt-3 text-sm font-semibold text-slate-900 hover:underline">
                  Watch on YouTube
                </p>
              </a>
            </article>
          ))}
        </section>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
        <Link
          href="/resources/videos"
          className="text-sm font-semibold text-slate-900 hover:underline"
        >
          Browse all videos
        </Link>
        <Link href="/resources" className="text-sm font-semibold text-slate-900 hover:underline">
          Back to resources
        </Link>
      </div>
    </main>
  );
}
