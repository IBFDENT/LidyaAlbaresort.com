import Image from "next/image";
import type { ReactNode } from "react";

type CategoryHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  icon?: ReactNode;
  image: string;
  imageAlt: string;

  collectionLabel?: string;
  statementEyebrow?: string;
  statementText?: string;
  statementAccent?: string;
};

export default function CategoryHero({
  eyebrow,
  title,
  lead,
  icon,
  image,
  imageAlt,

  collectionLabel = "The Pearl Collection",
  statementEyebrow = "Quiet luxury",
  statementText = "Formed slowly by nature.",
  statementAccent = "Chosen carefully by hand.",
}: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-32 md:pt-36 lg:pt-40">
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-gold/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 pb-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:pb-24">
          {/* TEXT */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              {icon && (
                <span className="flex h-9 w-9 items-center justify-center text-gold">
                  {icon}
                </span>
              )}

              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                {eyebrow}
              </span>
            </div>

            <h1
              className="mt-7 max-w-[620px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.3rem]"
              style={{ color: "#1B0B20" }}
            >
              {title}
            </h1>

            <div className="mt-8 flex items-start gap-5">
              <span className="mt-[0.75rem] h-px w-12 shrink-0 bg-gold" />

              <p className="max-w-lg text-sm leading-7 text-grey md:text-base">
                {lead}
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/45">
                LIDYA · SINCE 1989
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="lg:col-span-7">
            <div className="group relative aspect-[5/4] overflow-hidden bg-plum-dark md:aspect-[16/11] lg:min-h-[620px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />

              {/* soft cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/20 via-transparent to-transparent" />

              {/* COLLECTION LABEL */}
              <div className="absolute bottom-6 left-6 flex items-center gap-4 md:bottom-8 md:left-8">
                <span className="h-px w-10 bg-brand-white/60" />

                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/80">
                  {collectionLabel}
                </span>
              </div>

              <span className="absolute right-6 top-6 text-[0.56rem] font-semibold tracking-[0.22em] text-brand-white/65 md:right-8 md:top-8">
                01
              </span>
            </div>
          </div>
        </div>

        {/* INTRO STATEMENT */}
        <div className="border-t border-plum-dark/10 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                {statementEyebrow}
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="max-w-[950px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#1B0B20" }}
              >
                {statementText}

                <span style={{ color: "#C8A96A" }}>
                  {" "}
                  {statementAccent}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}