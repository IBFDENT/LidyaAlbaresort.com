import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { ABOUT_BODY_EN, ABOUT_VALUES_EN } from "@/lib/content";

const dict = getDictionary();

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-plum-dark py-24 md:py-32 lg:py-36"
    >
      {/* Ambient details */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* TOP INTRO */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {dict.about.eyebrow}
            </span>

            <h2
              className="max-w-[920px] font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ color: "#F5EFE6" }}
            >
              {dict.about.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <div className="flex items-end gap-5">
              <span
                className="font-display text-6xl leading-none md:text-7xl lg:text-8xl"
                style={{ color: "#E8D8B5" }}
              >
                1989
              </span>

              <span className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-brand-white/40">
                Since
              </span>
            </div>
          </div>
        </div>

        {/* EDITORIAL GRID */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* IMAGE */}
          <div className="lg:col-span-7">
            <div className="group relative min-h-[560px] overflow-hidden md:min-h-[680px] lg:min-h-[760px]">
              <Image
                src="/images/craftsmanship.jpg"
                alt="Goldsmith at work"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                  Craftsmanship
                </span>
              </div>
            </div>
          </div>

          {/* STORY */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
            <p
              className="font-display text-2xl italic leading-snug md:text-3xl lg:text-4xl"
              style={{ color: "#E8D8B5" }}
            >
              {dict.about.lead}
            </p>

            <div className="mt-8 space-y-5">
              {ABOUT_BODY_EN.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-xl text-sm leading-7 text-brand-white/68 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* SIGNOFF */}
            <div className="mt-10 border-t border-brand-white/12 pt-8">
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                {dict.about.signoff}
              </span>

              <p
                className="mt-4 font-display text-3xl"
                style={{ color: "#F5EFE6" }}
              >
                Metin TANIR
              </p>

              <p className="mt-1 text-sm text-brand-white/45">
                {dict.about.role}
              </p>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-14 border-t border-brand-white/12 pt-7 md:mt-16">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
            {ABOUT_VALUES_EN.map((value, index) => (
              <div
                key={value}
                className="flex items-center gap-4"
              >
                <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-brand-white/65">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CLOSING LINE */}
        <div className="mx-auto mt-14 max-w-[1000px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#F5EFE6" }}
          >
            Tradition gives jewellery meaning.
            <span style={{ color: "#E8D8B5" }}>
              {" "}
              Craftsmanship gives it permanence.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}