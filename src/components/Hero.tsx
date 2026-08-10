"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { dictionary: dict } = useLanguage();

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

      const imageX = x * 13;
      const imageY = y * 8 - scroll * 26;
      const imageScale = 1.045 + scroll * 0.018;

      imageWrap.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(${imageScale})
      `;

      const contentX = x * -4.2;
      const contentY = y * -2.8 - scroll * 7;

      content.style.transform = `
        translate3d(${contentX}px, ${contentY}px, 0)
      `;

      const glowX = 50 + x * 8;
      const glowY = 44 + y * 6;

      glow.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(232, 216, 181, 0.14) 0%,
          rgba(232, 216, 181, 0.065) 20%,
          rgba(27, 11, 32, 0) 50%
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
      id="home"
      className="hero relative flex min-h-screen items-end overflow-hidden bg-plum-dark"
    >
      <div
        ref={imageWrapRef}
        className={`absolute inset-[-3%] will-change-transform transition-[opacity,filter] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-[2px]"
        }`}
        style={{
          transform: loaded
            ? "translate3d(0,0,0) scale(1.045)"
            : "translate3d(0,0,0) scale(1.085)",
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="LIDYA Jewellery boutique"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
      </div>

      <div className="absolute inset-0 bg-plum-dark/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/95 via-plum-dark/58 to-plum-dark/8" />

      <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/72 via-transparent to-plum-dark/18" />

      <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-plum-dark/42 to-transparent" />

      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-700"
      />

      <div className="hero-glint pointer-events-none absolute inset-0 opacity-35" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(27,11,32,0.20)_100%)]" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 text-center will-change-transform md:px-10 md:pb-24 md:text-left lg:px-16 lg:pb-28 xl:px-20"
      >
        <div className="mx-auto max-w-[760px] md:mx-0">
          <div className="overflow-hidden">
            <span
              className={`block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "180ms" }}
            >
              {dict.hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-8 font-display leading-[0.9]">
            <span className="block overflow-hidden">
              <span
                className={`block text-5xl tracking-[0.04em] text-gold transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-7xl lg:text-8xl ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[34%] opacity-0"
                }`}
                style={{ transitionDelay: "280ms" }}
              >
                LIDYA
              </span>
            </span>

            <span className="mt-3 block overflow-hidden">
              <span
                className={`block text-6xl font-normal italic tracking-[-0.03em] text-brand-white transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:text-7xl lg:text-[7.2rem] ${
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[36%] opacity-0"
                }`}
                style={{ transitionDelay: "390ms" }}
              >
                Jewellery
              </span>
            </span>
          </h1>

          <p
            className={`mx-auto mt-9 max-w-[520px] font-display text-xl italic leading-relaxed text-brand-white/90 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:mx-0 md:text-2xl ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "540ms" }}
          >
            {dict.hero.lead}
          </p>

          <p
            className={`mx-auto mt-4 max-w-[680px] text-sm leading-7 text-brand-white/72 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:mx-0 md:text-base md:whitespace-nowrap ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            {dict.hero.sub}
          </p>

          <div
            className={`mt-10 flex flex-col items-center justify-center gap-5 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:flex-row sm:flex-wrap md:justify-start md:gap-x-8 md:gap-y-5 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "760ms" }}
          >
            <Link
              href="/#collections"
              className="group inline-flex items-center justify-center gap-6 bg-gold px-9 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-plum-dark transition-all duration-500 hover:bg-gold-light"
            >
              {dict.hero.cta1}

              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </Link>

            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center gap-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-white"
            >
              {dict.hero.cta2}

              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>

              <span className="absolute bottom-1 left-0 h-px w-full origin-center bg-brand-white/35 transition-all duration-500 group-hover:scale-x-90 group-hover:bg-gold md:origin-left" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 right-6 z-10 hidden items-center gap-4 transition-all duration-[1200ms] md:flex lg:right-12 ${
          loaded
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: "950ms" }}
      >
        <span className="text-[0.58rem] uppercase tracking-[0.3em] text-brand-white/50">
          Scroll
        </span>

        <span className="relative block h-px w-16 overflow-hidden bg-brand-white/20">
          <span className="hero-scroll-line absolute left-0 top-0 h-full w-7 bg-gold" />
        </span>
      </div>
    </section>
  );
}