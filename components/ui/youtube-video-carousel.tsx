"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import {
  type VideoRecommendation,
  videoRecommendations,
} from "@/lib/video-recommendations";
import { YouTubeThumbnail } from "@/components/ui/youtube-thumbnail";

const AUTO_ROTATE_MS = 6000;
const SWIPE_THRESHOLD = 40;

type YouTubeVideoCarouselProps = {
  videos?: VideoRecommendation[];
  title?: string;
  kicker?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  featuredLabel?: string;
  containerClassName?: string;
};

export function YouTubeVideoCarousel({
  videos = videoRecommendations,
  title = "Video recommendations",
  kicker = "Learning library",
  viewAllHref = "/resources/videos",
  viewAllLabel = "View full YouTube list",
  featuredLabel = "Featured YouTube video",
  containerClassName = "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8",
}: YouTubeVideoCarouselProps = {}) {
  const videoCount = videos.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    if (videoCount <= 1) {
      intervalRef.current = null;
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % videoCount);
    }, AUTO_ROTATE_MS);
  }, [videoCount]);

  const pauseAutoRotate = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (videoCount === 0) {
      return;
    }

    startAutoRotate();

    return () => {
      pauseAutoRotate();
    };
  }, [startAutoRotate, videoCount]);

  const nextSlide = () => {
    if (videoCount === 0) {
      return;
    }

    setActiveIndex((current) => (current + 1) % videoCount);
    startAutoRotate();
  };

  const previousSlide = () => {
    if (videoCount === 0) {
      return;
    }

    setActiveIndex(
      (current) => (current - 1 + videoCount) % videoCount,
    );
    startAutoRotate();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousSlide();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      return;
    }

    if (delta < 0) {
      nextSlide();
      return;
    }

    previousSlide();
  };

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;
    if (!relatedTarget || !event.currentTarget.contains(relatedTarget)) {
      startAutoRotate();
    }
  };

  if (videoCount === 0) {
    return null;
  }

  const safeActiveIndex = activeIndex % videoCount;
  const activeVideo = videos[safeActiveIndex];

  return (
    <section className={containerClassName}>
      <div className="rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-cyan-50/25 p-5 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.6)] sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
              {kicker}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
          </div>
          {viewAllHref && viewAllLabel ? (
            <Link
              href={viewAllHref}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {viewAllLabel}
            </Link>
          ) : null}
        </div>

        <div
          className="relative mx-auto mt-6 aspect-video w-full max-w-[920px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-950"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={pauseAutoRotate}
          onMouseLeave={startAutoRotate}
          onFocusCapture={pauseAutoRotate}
          onBlurCapture={handleBlurCapture}
        >
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className={`absolute inset-0 block transition-opacity duration-700 ${
                index === safeActiveIndex ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={index !== safeActiveIndex}
            >
              <YouTubeThumbnail
                videoId={video.id}
                alt={`YouTube preview: ${video.speaker} — ${video.title}`}
                width={1280}
                height={720}
                priority={index === 0}
                className="h-full w-full object-cover"
                sizes="(max-width: 960px) 100vw, 920px"
              />
            </a>
          ))}

          <div className="relative z-10 flex h-full items-end bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/5 px-6 pb-10 sm:px-10 sm:pb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                {featuredLabel}
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-white sm:text-3xl">
                {activeVideo.speaker}
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-100 sm:text-lg">
                {activeVideo.title}
              </p>
              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center rounded-full border border-white/70 bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={previousSlide}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/40 px-2 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous featured video"
          >
            &lt;
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/40 px-2 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next featured video"
          >
            &gt;
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                  index === safeActiveIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  startAutoRotate();
                }}
                aria-label={`Show featured video ${index + 1}`}
                aria-pressed={index === safeActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
