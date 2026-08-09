"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { GemClusterIcon } from "@/components/category/icons";

export default function BrilliantsCinematicHero() {
  const [loaded, setLoaded] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaded(true);
    }, 80);

    const handleScroll = () => {
      const hero = document.getElementById("brilliants-cinematic-hero");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const height = Math.max(hero.offsetHeight, 1);

      const progress = Math.max(
        0,
        Math.min(1, -rect.top / height)
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;

    setMouse({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleMouseLeave = () => {
    setMouse({
      x: 0,
      y: 0,
    });
  };

  /*
   * IMAGE MOVEMENT
   *
   * This version is deliberately visible enough
   * that we can clearly confirm the effect works.
   */
  const imageX = mouse.x * 24;
  const imageY = mouse.y * 16 - scrollProgress * 32;
  const imageScale = 1.07 + scrollProgress * 0.02;

  /*
   * CONTENT MOVES AGAINST THE IMAGE
   */
  const contentX = mouse.x * -5;
  const contentY = mouse.y * -3 - scrollProgress * 7;

  /*
   * MOVING LIGHT
   */
  const lightX = 52 + mouse.x * 14;
  const lightY = 40 + mouse.y * 10;

  return (
    <section
      id="brilliants-cinematic-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44"
    >
      {/* =========================================================
          CINEMATIC BACKGROUND
      ========================================================== */}
      <div
        className="absolute inset-[-6%] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `
            translate3d(${imageX}px, ${imageY}px, 0)
            scale(${imageScale})
          `,
        }}
      >
        <Image
          src="/images/brilliants/hero-brilliants.png"
          alt="LIDYA Brilliants diamond jewellery collection arranged on champagne fabric and natural stone"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =========================================================
          READABILITY OVERLAY
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/92 via-[#F7F3EB]/38 to-transparent" />

      {/* =========================================================
          LOWER SOFT VEIL
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F7F3EB]/18 via-transparent to-[#F7F3EB]/6" />

      {/* =========================================================
          MOVING DIAMOND LIGHT
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `
            radial-gradient(
              circle at ${lightX}% ${lightY}%,
              rgba(255,255,255,0.28) 0%,
              rgba(232,238,246,0.13) 17%,
              rgba(200,169,106,0.055) 31%,
              rgba(255,255,255,0) 53%
            )
          `,
        }}
      />

      {/* =========================================================
          SUBTLE VIGNETTE
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(65,54,46,0.08)_100%)]" />

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div
        className="relative mx-auto max-w-[1440px] px-6 transition-transform duration-300 ease-out will-change-transform md:px-10 lg:px-16 xl:px-20"
        style={{
          transform: `
            translate3d(
              ${contentX}px,
              ${contentY}px,
              0
            )
          `,
        }}
      >
        {/* TOP HERO CONTENT */}
        <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
          {/* LEFT */}
          <div className="lg:col-span-8">
            {/* EYEBROW */}
            <div
              className={`flex items-center gap-4 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: "180ms",
              }}
            >
              <span className="flex h-10 w-10 items-center justify-center text-gold">
                <GemClusterIcon />
              </span>

              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                Brilliants
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="mt-7 max-w-[900px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
              style={{
                color: "#1B0B20",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{
                    transitionDelay: "280ms",
                  }}
                >
                  Where Light
                </span>
              </span>

              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{
                    transitionDelay: "390ms",
                  }}
                >
                  Becomes Jewellery
                </span>
              </span>
            </h1>
          </div>

          {/* RIGHT */}
          <div
            className={`lg:col-span-4 lg:pb-2 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: "560ms",
            }}
          >
            <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
              The brilliant cut was created for one extraordinary purpose — to
              transform light into fire. Every stone in our collection is
              selected for the way it comes alive in motion, revealing flashes
              of brilliance with every movement.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/50">
                LIDYA · SINCE 1989
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            LOWER STATEMENT
        ========================================================== */}
        <div
          className={`border-t border-plum-dark/10 py-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:py-16 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: "740ms",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#A98242]">
                The Art of Light
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{
                  color: "#1B0B20",
                }}
              >
                Made to catch the light.

                <span
                  style={{
                    color: "#A98242",
                  }}
                >
                  {" "}
                  Created to keep it.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}