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

  // Keep the hero visible in the server-rendered HTML as well. This prevents
  // blank first paint in slower/in-app mobile browsers when hydration is delayed.
  const [loaded, setLoaded] = useState(true);
  const [heroSrc, setHeroSrc] = useState("/images/hero.png");

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!section || !imageWrap || !content || !glow) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion) {
      setLoaded(true);
      return;
    }

    const updatePointer = (event: PointerEvent) => {
      if (!finePointer) return;
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      const y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
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
      scrollTarget.current = Math.max(0, Math.min(1, Math.abs(Math.min(rect.top, 0)) / total));
    };

    const animate = () => {
      pointerCurrent.current.x += (pointerTarget.current.x - pointerCurrent.current.x) * 0.045;
      pointerCurrent.current.y += (pointerTarget.current.y - pointerCurrent.current.y) * 0.045;
      scrollCurrent.current += (scrollTarget.current - scrollCurrent.current) * 0.065;

      const x = pointerCurrent.current.x;
      const y = pointerCurrent.current.y;
      const scroll = scrollCurrent.current;

      imageWrap.style.transform = `translate3d(${x * 10}px, ${y * 6 - scroll * 22}px, 0) scale(${1.035 + scroll * 0.016})`;
      content.style.transform = `translate3d(${x * -3.4}px, ${y * -2.2 - scroll * 6}px, 0)`;

      glow.style.background = `radial-gradient(circle at ${47 + x * 8}% ${42 + y * 6}%, rgba(232,216,181,0.15) 0%, rgba(232,216,181,0.06) 20%, rgba(27,11,32,0) 50%)`;
      frameRef.current = requestAnimationFrame(animate);
    };

    section.addEventListener("pointermove", updatePointer);
    section.addEventListener("pointerleave", resetPointer);
    window.addEventListener("scroll", updateScroll, { passive: true });

    updateScroll();
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("pointermove", updatePointer);
      section.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("scroll", updateScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero relative flex min-h-[100svh] items-center overflow-hidden bg-plum-dark"
    >
      <div
        ref={imageWrapRef}
        className={`absolute inset-[-2%] will-change-transform transition-[opacity,filter] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-[2px]"
        }`}
        style={{
          transform: loaded
            ? "translate3d(0,0,0) scale(1.035)"
            : "translate3d(0,0,0) scale(1.075)",
        }}
      >
        <Image
          src={heroSrc}
          alt="LIDYA Jewellery boutique"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[47%_center]"
          onError={() => {
            if (heroSrc !== "/images/hero.jpg") setHeroSrc("/images/hero.jpg");
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[#100913]/6" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#100913]/82 via-[#100913]/50 via-[46%] to-[#100913]/4" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#100913]/58 via-transparent to-[#100913]/22" />
      <div className="absolute inset-y-0 left-0 w-[64%] bg-[linear-gradient(90deg,rgba(9,5,11,0.46)_0%,rgba(16,9,19,0.22)_62%,transparent_100%)]" />
      <div ref={glowRef} className="pointer-events-none absolute inset-0" />
      <div className="hero-glint pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(14,7,16,0.18)_100%)]" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-28 text-center will-change-transform md:px-10 md:pb-14 md:pt-32 md:text-left lg:px-16 xl:px-20"
      >
        <div className="mx-auto max-w-[650px] md:mx-0">
          <div className="overflow-hidden">
            <span
              className={`block text-[0.67rem] font-semibold uppercase tracking-[0.38em] text-gold transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "160ms" }}
            >
              {dict.hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-7 font-display leading-[0.88]">
            <span className="block overflow-hidden">
              <span
                className={`block text-[4.6rem] tracking-[0.025em] text-gold transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[5.6rem] md:text-[6.2rem] lg:text-[6.7rem] ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-[34%] opacity-0"
                }`}
                style={{ transitionDelay: "260ms" }}
              >
                LIDYA
              </span>
            </span>

            <span className="mt-1 block overflow-hidden pb-2">
              <span
                className={`block text-[4.2rem] font-normal italic tracking-[-0.045em] text-brand-white transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[5.2rem] md:text-[6rem] lg:text-[6.9rem] ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-[36%] opacity-0"
                }`}
                style={{ transitionDelay: "370ms" }}
              >
                Jewellery
              </span>
            </span>
          </h1>

          <p
            className={`mx-auto mt-6 max-w-[520px] font-display text-xl italic leading-relaxed text-brand-white/95 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:mx-0 md:text-[1.55rem] ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "510ms" }}
          >
            {dict.hero.lead}
          </p>

          <p
            className={`mx-auto mt-3 max-w-[610px] text-[0.92rem] leading-7 text-brand-white/74 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:mx-0 md:text-base ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "620ms" }}
          >
            {dict.hero.sub}
          </p>

          <div
            className={`mt-8 flex flex-col items-center justify-center gap-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:flex-row sm:flex-wrap md:justify-start ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "730ms" }}
          >
            <Link
              href="/#collections"
              className="group inline-flex min-h-[52px] min-w-[275px] items-center justify-center gap-7 bg-gold px-8 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-plum-dark transition-all duration-500 hover:bg-gold-light"
            >
              {dict.hero.cta1}
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </Link>

            <Link
              href="/#contact"
              className="group inline-flex min-h-[52px] min-w-[300px] items-center justify-center gap-7 border border-brand-white/55 px-8 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-plum-dark"
            >
              {dict.hero.cta2}
              <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 right-6 z-10 hidden items-center gap-4 transition-all duration-[1200ms] md:flex lg:right-12 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: "920ms" }}
      >
        <span className="text-[0.58rem] uppercase tracking-[0.3em] text-brand-white/55">Scroll</span>
        <span className="relative block h-px w-16 overflow-hidden bg-brand-white/20">
          <span className="hero-scroll-line absolute left-0 top-0 h-full w-7 bg-gold" />
        </span>
      </div>
    </section>
  );
}
