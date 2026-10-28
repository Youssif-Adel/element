"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, buttonStyles } from "@/components/ui/button";
import { ArrowIcon, PauseIcon, PlayIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { heroSlides } from "@/lib/hero-slides";

const SLIDE_MS = 10_000;

/** Border geometry — matches the 4:5 thumbnail viewBox. */
const FRAME = { x: 0.75, y: 0.75, w: 78.5, h: 98.5, r: 4 };

export function Hero() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [holding, setHolding] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const frameRef = useRef<SVGRectElement | null>(null);
  const elapsedRef = useRef(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startLeft: 0,
    moved: false,
  });

  const total = heroSlides.length;
  const slide = heroSlides[active];
  const paused = holding || userPaused || tabHidden;

  const go = useCallback(
    (next: number) => {
      elapsedRef.current = 0;
      setActive(((next % total) + total) % total);
    },
    [total],
  );

  /* Autoplay: one rAF loop grows the border and advances the slide. Elapsed
     time lives in a ref, so pausing and resuming never restarts the 10s count
     and the component only re-renders when the slide actually changes. */
  useEffect(() => {
    if (paused) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      elapsedRef.current += now - last;
      last = now;

      const progress = Math.min(1, elapsedRef.current / SLIDE_MS);
      if (frameRef.current) {
        frameRef.current.style.strokeDasharray = `${progress * 100} 100`;
      }

      if (progress >= 1) {
        elapsedRef.current = 0;
        setActive((current) => (current + 1) % total);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, total]);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  /* Let the first frame paint at scale 1 so the opening slide drifts too. */
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Keep the active preview visible when the strip holds more than four. */
  useEffect(() => {
    const strip = stripRef.current;
    const card = strip?.children[active] as HTMLElement | undefined;
    if (!strip || !card) return;

    const left = card.offsetLeft;
    const right = left + card.offsetWidth;
    const behaviour = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";

    if (left < strip.scrollLeft) {
      strip.scrollTo({ left, behavior: behaviour });
    } else if (right > strip.scrollLeft + strip.clientWidth) {
      strip.scrollTo({
        left: right - strip.clientWidth,
        behavior: behaviour,
      });
    }
  }, [active]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const update = () =>
      setHasOverflow(strip.scrollWidth > strip.clientWidth + 1);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(strip);
    return () => observer.disconnect();
  }, []);

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const strip = stripRef.current;
    if (!strip) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startLeft: strip.scrollLeft,
      moved: false,
    };
  };

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const strip = stripRef.current;
    if (!strip || !dragRef.current.active) return;

    const delta = event.clientX - dragRef.current.startX;
    if (!dragRef.current.moved && Math.abs(delta) > 4) {
      dragRef.current.moved = true;
      strip.setPointerCapture(event.pointerId);
    }
    if (dragRef.current.moved) {
      strip.scrollLeft = dragRef.current.startLeft - delta;
    }
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const strip = stripRef.current;
    dragRef.current.active = false;
    if (strip?.hasPointerCapture(event.pointerId)) {
      strip.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured interiors"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950"
    >
      {/* ----------------------------------------------------------- backdrop */}
      <div aria-hidden="true" className="absolute inset-0">
        {heroSlides.map((item, index) => {
          const current = index === active;

          return (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-[1400ms] ease-silk",
                current ? "opacity-100" : "opacity-0",
              )}
            >
              <div
                className={cn(
                  "relative size-full motion-safe:transition-transform motion-safe:duration-[13000ms] motion-safe:ease-linear",
                  current && mounted ? "motion-safe:scale-[1.12]" : "scale-100",
                )}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}

        {/* Legibility: ink at the foot, a lighter wash at the head. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/55 via-transparent to-transparent" />
        <div className="noise absolute inset-0" />
      </div>

      {/* ------------------------------------------------------ oversized word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[30%] z-0 flex -translate-y-1/2 justify-center overflow-x-clip px-4 sm:top-[34%]"
      >
        <span
          key={slide.id}
          className="animate-hero-word whitespace-nowrap font-display text-hero-word uppercase leading-none tracking-[-0.02em] text-cream/10"
        >
          {slide.style}
        </span>
      </div>

      {/* -------------------------------------------------------------- content */}
      <div className="relative z-10 mx-auto flex w-full max-w-page flex-1 flex-col px-6 pb-7 pt-28 sm:pb-10 sm:pt-32">
        <div className="flex justify-end">
          <p className="hidden items-center gap-2 font-mono text-[11px] text-subtle sm:flex">
            <span className="text-cream" aria-hidden="true">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-5 bg-line-strong" aria-hidden="true" />
            <span aria-hidden="true">{String(total).padStart(2, "0")}</span>
            <span className="sr-only">
              Slide {active + 1} of {total}
            </span>
          </p>
        </div>

        <div className="mt-auto grid gap-9 pt-10 sm:pt-24 lg:grid-cols-12 lg:items-end lg:gap-8">
          {/* ------------------------------------------------ headline + action */}
          <div className="lg:col-span-7">
            <h1
              key={slide.id}
              className="intro max-w-xl text-display-xl text-cream"
            >
              {slide.headline}
            </h1>

            <p className="mt-6 max-w-md text-body text-mist">
              Element is an interior studio shaping calm, considered spaces —
              where proportion, texture and daylight do the talking.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/#contact" className={buttonStyles({ size: "md" })}>
                Start a project
                <ArrowIcon />
              </Link>
              <Link
                href="/#work"
                className={buttonStyles({ variant: "outline", size: "md" })}
              >
                View the work
              </Link>
            </div>
          </div>

          {/* ------------------------------------------------------- lookbook */}
          <div className="max-w-md lg:col-span-5 lg:max-w-none">
            <div
              className="flex items-center justify-between gap-4"
              onMouseEnter={() => setHolding(true)}
              onMouseLeave={() => setHolding(false)}
              onFocusCapture={() => setHolding(true)}
              onBlurCapture={() => setHolding(false)}
            >
              <p className="eyebrow text-mist">The lookbook</p>

              <div className="flex items-center gap-2">
                <Button
                  variant="glass"
                  size="icon-sm"
                  aria-label="Previous look"
                  onClick={() => go(active - 1)}
                  className="sm:size-11"
                >
                  <ArrowIcon className="rotate-180" />
                </Button>
                <Button
                  variant="glass"
                  size="icon-sm"
                  aria-label="Next look"
                  onClick={() => go(active + 1)}
                  className="sm:size-11"
                >
                  <ArrowIcon />
                </Button>
                <Button
                  variant="glass"
                  size="icon-sm"
                  aria-pressed={userPaused}
                  aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
                  onClick={() => setUserPaused((value) => !value)}
                  className="sm:size-11"
                >
                  {userPaused ? <PlayIcon /> : <PauseIcon />}
                </Button>
              </div>
            </div>

            <div className="relative mt-4">
              <div
                ref={stripRef}
                role="group"
                aria-label="Choose a look"
                className="no-scrollbar -mx-1 flex snap-x snap-mandatory scroll-px-1 gap-2 overflow-x-auto px-1 pb-1 sm:gap-3"
                onPointerDown={startDrag}
                onPointerMove={moveDrag}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onMouseEnter={() => setHolding(true)}
                onMouseLeave={() => setHolding(false)}
                onFocusCapture={() => setHolding(true)}
                onBlurCapture={() => setHolding(false)}
              >
                {heroSlides.map((item, index) => {
                  const current = index === active;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        if (dragRef.current.moved) {
                          dragRef.current.moved = false;
                          return;
                        }
                        go(index);
                      }}
                      aria-label={`${item.style} — ${item.project}`}
                      aria-current={current ? "true" : undefined}
                      className="group relative block aspect-[4/5] w-[calc((100%-1.5rem)/4)] shrink-0 cursor-pointer snap-start overflow-hidden rounded-md sm:w-[calc((100%-2.25rem)/4)]"
                    >
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 22vw, (max-width: 1024px) 20vw, 150px"
                        className={cn(
                          "object-cover transition-[opacity,filter,transform] duration-700 ease-luxe",
                          current
                            ? "opacity-100"
                            : "opacity-65 saturate-[0.7] group-hover:opacity-95 group-hover:saturate-100 group-focus-visible:opacity-95",
                        )}
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                      <span className="absolute inset-x-0 bottom-0 truncate px-1.5 pb-1.5 text-left text-[8px] font-semibold uppercase tracking-[0.12em] text-cream/85 sm:px-2 sm:text-[9px] sm:tracking-[0.14em]">
                        {item.style}
                      </span>

                      {/* The frame is the timer: one border, drawn over time. */}
                      <svg
                        viewBox="0 0 80 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 size-full"
                      >
                        {current ? (
                          <rect
                            ref={frameRef}
                            x={FRAME.x}
                            y={FRAME.y}
                            width={FRAME.w}
                            height={FRAME.h}
                            rx={FRAME.r}
                            pathLength={100}
                            fill="none"
                            stroke="var(--color-gold-300)"
                            strokeWidth={1.1}
                            strokeDasharray="0 100"
                          />
                        ) : (
                          <rect
                            x={FRAME.x}
                            y={FRAME.y}
                            width={FRAME.w}
                            height={FRAME.h}
                            rx={FRAME.r}
                            fill="none"
                            stroke="var(--color-line-strong)"
                            strokeWidth={1}
                            vectorEffect="non-scaling-stroke"
                          />
                        )}
                      </svg>
                    </button>
                  );
                })}
              </div>

              {hasOverflow ? (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-ink-950 to-transparent"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {slide.style} — {slide.project}, {slide.location}. Slide {active + 1} of{" "}
        {total}.
      </p>
    </section>
  );
}
