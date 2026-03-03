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

type Slide = {
  imageAlt: string;
  imageSrc: string;
  tagline: string;
};

const slides: Slide[] = [
  {
    imageAlt: "Doctor consulting with a patient",
    imageSrc: "/tagline-slides/remission.jpg",
    tagline: "Put Obesity, Diabetes, and Hypertension in remission",
  },
  {
    imageAlt: "Fresh fruit prepared in a kitchen",
    imageSrc: "/tagline-slides/kitchen.jpg",
    tagline: "Healthcare starts in the Kitchen",
  },
  {
    imageAlt: "A community support group",
    imageSrc: "/tagline-slides/community.jpg",
    tagline: "Health is communal, do not struggle alone",
  },
  {
    imageAlt: "People helping each other climb a mountain",
    imageSrc: "/tagline-slides/together.jpg",
    tagline: "Together we can achieve difficult things",
  },
];

const SWIPE_THRESHOLD = 40;
const AUTO_ROTATE_MS = 6000;

export function TaglineCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ROTATE_MS);
  }, []);

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

  return (
    <section
      aria-label="Health impact messages"
      className="overflow-hidden rounded-[2rem] border border-slate-200/90 bg-slate-900 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.85)]"
    >
      <div
        className="relative h-[21rem] sm:h-[26rem]"
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
            key={slide.tagline}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-900/45 to-slate-900/10" />

        <div className="relative z-10 flex h-full items-end px-6 pb-14 sm:px-10 sm:pb-16">
          <p
            className="max-w-3xl text-[1.05rem] font-semibold tracking-tight text-white sm:text-[1.575rem]"
            aria-live="polite"
          >
            {slides[activeIndex].tagline}
          </p>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/50 px-2 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous slide"
        >
          &lt;
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/50 px-2 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next slide"
        >
          &gt;
        </button>

        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.tagline}
              type="button"
              className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                index === activeIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
              onClick={() => {
                setActiveIndex(index);
                startAutoRotate();
              }}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
