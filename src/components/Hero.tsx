import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary();

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative flex min-h-screen items-end overflow-hidden bg-plum-dark"
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="LIDYA Jewelry boutique"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-plum-dark/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/95 via-plum-dark/58 to-plum-dark/8" />

      <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/72 via-transparent to-plum-dark/18" />

      {/* Extra local contrast behind text */}
      <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-plum-dark/42 to-transparent" />

      {/* Subtle glow */}
      <div className="hero-glint pointer-events-none absolute inset-0 opacity-45" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 md:px-10 md:pb-24 lg:px-16 lg:pb-28 xl:px-20">
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <span className="mb-8 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
            {dict.hero.eyebrow}
          </span>

          {/* Headline */}
          <h1 className="font-display leading-[0.9]">
            <span className="block text-5xl tracking-[0.04em] text-gold md:text-7xl lg:text-8xl">
              LIDYA
            </span>

            <span className="mt-3 block text-6xl font-normal italic tracking-[-0.03em] text-brand-white md:text-7xl lg:text-[7.2rem]">
              Jewelry
            </span>
          </h1>

          {/* Lead */}
          <p className="mt-9 max-w-[520px] font-display text-xl italic leading-relaxed text-brand-white/90 md:text-2xl">
            {dict.hero.lead}
          </p>

          {/* Description */}
          <p className="mt-4 max-w-[680px] text-sm leading-7 text-brand-white/72 md:text-base md:whitespace-nowrap">
            {dict.hero.sub}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              href="/#collections"
              className="group inline-flex items-center gap-6 bg-gold px-9 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-plum-dark transition-all duration-500 hover:bg-gold-light"
            >
              {dict.hero.cta1}

              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </Link>

            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-white"
            >
              Private appointment

              <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>

              <span className="absolute bottom-1 left-0 h-px w-full origin-left bg-brand-white/35 transition-all duration-500 group-hover:bg-gold group-hover:scale-x-90" />
            </Link>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 md:flex lg:right-12">
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