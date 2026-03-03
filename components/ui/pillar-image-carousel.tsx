"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type TouchEvent,
} from "react";

export type PillarImageSlide = {
  imageAlt: string;
  imageSrc: string;
  fit?: "cover" | "contain";
  containPaddingClassName?: string;
};

type PillarImageCarouselProps = {
  slides: PillarImageSlide[];
  ariaLabel?: string;
};

const SWIPE_THRESHOLD = 40;
const AUTO_ROTATE_MS = 6000;

export function PillarImageCarousel({
  slides,
  ariaLabel = "Pillar image carousel",
}: PillarImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    if (slides.length <= 1) {
      intervalRef.current = null;
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ROTATE_MS);
  }, [slides.length]);

  const pauseAutoRotate = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoRotate();

    return () => {
      pauseAutoRotate();
    };
  }, [startAutoRotate]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
    startAutoRotate();
  };

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
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

  if (slides.length === 0) {
    return null;
  }

  const safeActiveIndex = activeIndex % slides.length;
  const hasControls = slides.length > 1;

  return (
    <section
      aria-label={ariaLabel}
      className="overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_18px_42px_-30px_rgba(15,23,42,0.55)]"
    >
      <div
        className="relative h-[18rem] sm:h-[23rem]"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={pauseAutoRotate}
        onMouseLeave={startAutoRotate}
        onFocusCapture={pauseAutoRotate}
        onBlurCapture={handleBlurCapture}
      >
        {slides.map((slide, index) => (
          <div
            key={`${slide.imageSrc}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === safeActiveIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== safeActiveIndex}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 768px"
              className={
                slide.fit === "contain"
                  ? `object-contain bg-white ${slide.containPaddingClassName ?? "p-2 sm:p-3"}`
                  : "object-cover"
              }
            />
          </div>
        ))}

        {hasControls ? (
          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.imageSrc}
                type="button"
                className={`h-2.5 w-2.5 rounded-full border border-white/90 transition ${
                  index === safeActiveIndex ? "bg-white" : "bg-slate-900/35 hover:bg-slate-900/50"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  startAutoRotate();
                }}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={index === safeActiveIndex}
              />
            ))}
          </div>
        ) : null}

        {hasControls ? (
          <>
            <button
              type="button"
              onClick={previousSlide}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/50 px-2 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous image"
            >
              &lt;
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/50 px-2 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next image"
            >
              &gt;
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}
