"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { PearlIcon } from "@/components/category/icons";

export default function PearlsCinematicHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const frameRef = useRef<number | null>(null);

  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerCurrent = useRef({ x: 0, y: 0 });

  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!section || !imageWrap || !content || !glow) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion) {
      setLoaded(true);
      return;
    }

    const updatePointer = (event: PointerEvent) => {
      if (!finePointer) return;

      const rect = section.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;

      const y =
        ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;

      pointerTarget.current.x = Math.max(-1, Math.min(1, x));
      pointerTarget.current.y = Math.max(-1, Math.min(1, y));
    };

    const resetPointer = () => {
      pointerTarget.current.x = 0;
      pointerTarget.current.y = 0;
    };

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(section.offsetHeight, 1);

      const progress = Math.max(
        0,
        Math.min(1, Math.abs(Math.min(rect.top, 0)) / total)
      );

      scrollTarget.current = progress;
    };

    const animate = () => {
      pointerCurrent.current.x +=
        (pointerTarget.current.x - pointerCurrent.current.x) * 0.045;

      pointerCurrent.current.y +=
        (pointerTarget.current.y - pointerCurrent.current.y) * 0.045;

      scrollCurrent.current +=
        (scrollTarget.current - scrollCurrent.current) * 0.065;

      const x = pointerCurrent.current.x;
      const y = pointerCurrent.current.y;
      const scroll = scrollCurrent.current;

      /*
       * IMAGE
       * Slightly restrained compared with the homepage.
       */
      const imageX = x * 11;
      const imageY = y * 7 - scroll * 24;
      const imageScale = 1.045 + scroll * 0.016;

      imageWrap.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(${imageScale})
      `;

      /*
       * CONTENT
       * Counter movement creates the depth effect.
       */
      const contentX = x * -3.6;
      const contentY = y * -2.4 - scroll * 6;

      content.style.transform = `
        translate3d(${contentX}px, ${contentY}px, 0)
      `;

      /*
       * WARM LIGHT
       * Moves independently over the pearl scene.
       */
      const glowX = 48 + x * 9;
      const glowY = 42 + y * 7;

      glow.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(255, 244, 218, 0.23) 0%,
          rgba(225, 190, 126, 0.08) 20%,
          rgba(255, 255, 255, 0) 48%
        )
      `;

      frameRef.current = requestAnimationFrame(animate);
    };

    section.addEventListener("pointermove", updatePointer);
    section.addEventListener("pointerleave", resetPointer);

    window.addEventListener("scroll", updateScroll, { passive: true });

    updateScroll();

    frameRef.current = requestAnimationFrame(animate);

    const loadTimer = window.setTimeout(() => {
      setLoaded(true);
    }, 80);

    return () => {
      section.removeEventListener("pointermove", updatePointer);
      section.removeEventListener("pointerleave", resetPointer);

      window.removeEventListener("scroll", updateScroll);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      window.clearTimeout(loadTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44"
    >
      {/* CINEMATIC BACKGROUND */}
      <div
        ref={imageWrapRef}
        className={`absolute inset-[-3%] will-change-transform transition-[opacity,filter] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded
            ? "opacity-100 blur-0"
            : "opacity-0 blur-[2px]"
        }`}
        style={{
          transform: loaded
            ? "translate3d(0,0,0) scale(1.045)"
            : "translate3d(0,0,0) scale(1.085)",
        }}
      >
        <Image
          src="/images/pearls/hero-pearls.png"
          alt="LIDYA pearl jewellery collection arranged on champagne silk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* LEFT READABILITY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/92 via-[#F7F3EB]/42 to-transparent" />

      {/* LOWER SOFT VEIL */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EB]/24 via-transparent to-[#F7F3EB]/8" />

      {/* DYNAMIC WARM LIGHT */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
      />

      {/* VERY SUBTLE VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(84,52,27,0.08)_100%)]" />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative mx-auto max-w-[1440px] px-6 will-change-transform md:px-10 lg:px-16 xl:px-20"
      >
        {/* HERO CONTENT */}
        <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
          {/* LEFT */}
          <div className="lg:col-span-8">
            <div
              className={`flex items-center gap-4 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "180ms" }}
            >
              <span className="flex h-10 w-10 items-center justify-center text-gold">
                <PearlIcon />
              </span>

              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                Pearls
              </span>
            </div>

            <h1
              className="mt-7 max-w-[800px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
              style={{ color: "#1B0B20" }}
            >
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{ transitionDelay: "280ms" }}
                >
                  Nature&apos;s
                </span>
              </span>

              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{ transitionDelay: "370ms" }}
                >
                  Most Patient
                </span>
              </span>

              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{ transitionDelay: "460ms" }}
                >
                  Jewel
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
            style={{ transitionDelay: "590ms" }}
          >
            <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
              Created slowly, layer by layer, a pearl carries a beauty no
              machine can reproduce. No two are ever exactly alike. At LIDYA,
              we choose pearls for the depth of their lustre, the harmony of
              their colour and the quiet elegance that reveals itself the
              moment they meet the skin.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/50">
                LIDYA · SINCE 1989
              </span>
            </div>
          </div>
        </div>

        {/* HERO STATEMENT */}
        <div
          className={`border-t border-plum-dark/10 py-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:py-16 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "760ms" }}
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#A98242]">
                Quiet luxury
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#1B0B20" }}
              >
                Formed slowly by nature.
                <span style={{ color: "#A98242" }}>
                  {" "}
                  Chosen carefully by hand.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}