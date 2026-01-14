"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

type CarouselImage = {
  src: string;
  alt?: string;
};

type Props = {
  images?: CarouselImage[];
  className?: string;
  roundedClassName?: string;
};

export function ProjectCarousel({
  images,
  className = "",
  roundedClassName = "rounded-xl",
}: Props) {
  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images]);
  const hasSlides = safeImages.length > 0;

  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      if (!hasSlides) return;
      const last = safeImages.length - 1;
      if (next < 0) return setIndex(last);
      if (next > last) return setIndex(0);
      setIndex(next);
    },
    [hasSlides, safeImages.length]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!hasSlides || safeImages.length <= 1) return;
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  useEffect(() => {
    if (index > safeImages.length - 1) setIndex(0);
  }, [index, safeImages.length]);

  const frameClasses = [
    "relative w-full overflow-hidden",
    "aspect-[3/2]",
    roundedClassName,
    "border border-slate-200/70 bg-neutral-100/80",
    "outline-none focus:ring-2 focus:ring-secondary/40",
    "dark:border-slate-800/60 dark:bg-slate-900/80 dark:focus:ring-tertiary/30",
  ].join(" ");

  if (!hasSlides) {
    return (
      <div className={`relative w-full ${className}`}>
        <div
          tabIndex={0}
          onKeyDown={onKeyDown}
          className={frameClasses}
          aria-roledescription="carousel"
          aria-label="Project screenshots"
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-300">
              <ImageIcon className="h-6 w-6 opacity-70" />
              <span className="text-xs font-medium opacity-80">
                Capturas próximamente
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-tertiary/10" />
        </div>
      </div>
    );
  }

  const current = safeImages[index];

  return (
    <div className={`relative w-full ${className}`}>
      <div
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={frameClasses}
        aria-roledescription="carousel"
        aria-label="Project screenshots"
      >
        <Image
          src={current.src}
          alt={current.alt ?? "Project screenshot"}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="group absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 backdrop-blur-md transition
             bg-white/70 border border-secondary/25 shadow-sm
             hover:bg-secondary hover:border-secondary/60
             focus:outline-none focus:ring-2 focus:ring-secondary/40
             dark:bg-slate-50/10 dark:border-transparent dark:shadow-none
             dark:hover:bg-tertiary dark:focus:ring-tertiary/40"
              aria-label="Previous image"
            >
              <ChevronLeft
                className="h-4 w-4 text-secondary transition-colors
               group-hover:text-white
               dark:text-slate-100/80 dark:group-hover:text-slate-900"
              />
            </button>

            <button
              type="button"
              onClick={next}
              className="group absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 backdrop-blur-md transition
             bg-white/70 border border-secondary/25 shadow-sm
             hover:bg-secondary hover:border-secondary/60
             focus:outline-none focus:ring-2 focus:ring-secondary/40
             dark:bg-slate-50/10 dark:border-transparent dark:shadow-none
             dark:hover:bg-tertiary dark:focus:ring-tertiary/40"
              aria-label="Next image"
            >
              <ChevronRight
                className="h-4 w-4 text-secondary transition-colors
               group-hover:text-white
               dark:text-slate-100/80 dark:group-hover:text-slate-900"
              />
            </button>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {safeImages.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      active
                        ? "bg-secondary dark:bg-tertiary"
                        : "bg-slate-500/70 hover:bg-secondary/70 dark:bg-slate-500/50 dark:hover:bg-slate-400/70",
                    ].join(" ")}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={active}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
