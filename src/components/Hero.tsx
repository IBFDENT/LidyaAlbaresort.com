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
  const frameRef = useRef<number | null>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerCurrent = useRef({ x: 0, y: 0 });
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const [heroSrc, setHeroSrc] = useState("/images/hero.png");

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const content = contentRef.current;
    if (!section || !imageWrap || !content) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reducedMotion) { setLoaded(true); return; }
    const updatePointer = (event: PointerEvent) => {
      if (!finePointer) return;
      const rect = section.getBoundingClientRect();
      pointerTarget.current.x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2));
      pointerTarget.current.y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2));
    };
    const resetPointer = () => { pointerTarget.current = { x: 0, y: 0 }; };
    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      scrollTarget.current = Math.max(0, Math.min(1, Math.abs(Math.min(rect.top, 0)) / Math.max(section.offsetHeight, 1)));
    };
    const animate = () => {
      pointerCurrent.current.x += (pointerTarget.current.x - pointerCurrent.current.x) * 0.045;
      pointerCurrent.current.y += (pointerTarget.current.y - pointerCurrent.current.y) * 0.045;
      scrollCurrent.current += (scrollTarget.current - scrollCurrent.current) * 0.065;
      const { x, y } = pointerCurrent.current;
      const scroll = scrollCurrent.current;
      imageWrap.style.transform = `translate3d(${x * 8}px, ${y * 5 - scroll * 18}px, 0) scale(${1.025 + scroll * 0.012})`;
      content.style.transform = `translate3d(${x * -3}px, ${y * -2 - scroll * 5}px, 0)`;
      frameRef.current = requestAnimationFrame(animate);
    };
    section.addEventListener("pointermove", updatePointer);
    section.addEventListener("pointerleave", resetPointer);
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    frameRef.current = requestAnimationFrame(animate);
    const timer = window.setTimeout(() => setLoaded(true), 60);
    return () => {
      section.removeEventListener("pointermove", updatePointer);
      section.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("scroll", updateScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="hero relative flex min-h-[100svh] items-center overflow-hidden bg-plum-dark">
      <div ref={imageWrapRef} className={`absolute inset-[-1.5%] will-change-transform transition-opacity duration-[1400ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Image src={heroSrc} alt="LIDYA Jewellery boutique" fill priority sizes="100vw" className="object-cover object-center" onError={() => { if (heroSrc !== "/images/hero.jpg") setHeroSrc("/images/hero.jpg"); }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,5,12,0.68)_0%,rgba(13,7,15,0.48)_25%,rgba(16,9,19,0.24)_48%,rgba(16,9,19,0.06)_72%,rgba(16,9,19,0.02)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,5,11,0.22)_0%,transparent_30%,transparent_68%,rgba(9,5,11,0.30)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_50%,rgba(20,10,22,0.10),transparent_48%)]" />

      <div ref={contentRef} className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-28 text-center will-change-transform md:px-10 md:pb-14 md:pt-32 md:text-left lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[650px] md:mx-0">
          <span className={`block text-[0.67rem] font-semibold uppercase tracking-[0.38em] text-gold transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>{dict.hero.eyebrow}</span>
          <h1 className="mt-7 font-display leading-[0.88]">
            <span className={`block text-[4.6rem] tracking-[0.025em] text-gold transition-all duration-1000 sm:text-[5.6rem] md:text-[6.2rem] lg:text-[6.7rem] ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>LIDYA</span>
            <span className={`mt-1 block pb-2 text-[4.2rem] font-normal italic tracking-[-0.045em] text-brand-white transition-all duration-1000 sm:text-[5.2rem] md:text-[6rem] lg:text-[6.9rem] ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>Jewellery</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[520px] font-display text-xl italic leading-relaxed text-brand-white/95 md:mx-0 md:text-[1.55rem]">{dict.hero.lead}</p>
          <p className="mx-auto mt-3 max-w-[610px] text-[0.92rem] leading-7 text-brand-white/78 md:mx-0 md:text-base">{dict.hero.sub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            <Link href="/#collections" className="group inline-flex min-h-[52px] min-w-[275px] items-center justify-center gap-7 bg-gold px-8 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-plum-dark transition-all duration-500 hover:bg-gold-light">{dict.hero.cta1}<span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span></Link>
            <Link href="/#contact" className="group inline-flex min-h-[52px] min-w-[300px] items-center justify-center gap-7 border border-brand-white/55 px-8 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-plum-dark">{dict.hero.cta2}<span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span></Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 md:flex lg:right-12"><span className="text-[0.58rem] uppercase tracking-[0.3em] text-brand-white/55">Scroll</span><span className="relative block h-px w-16 overflow-hidden bg-brand-white/20"><span className="hero-scroll-line absolute left-0 top-0 h-full w-7 bg-gold" /></span></div>
    </section>
  );
}
