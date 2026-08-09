"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { RingIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const WEDDING_HERO_COPY: Record<
  Locale,
  {
    eyebrow: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    since: string;
    statementEyebrow: string;
    statementBefore: string;
    statementAccent: string;
    imageAlt: string;
  }
> = {
  en: {
    eyebrow: "Wedding Rings",
    title1: "Made for One",
    title2: "Promise.",
    title3: "Worn for a Lifetime.",
    description:
      "A wedding ring becomes part of everyday life — worn through ordinary days, milestones and everything in between. At LIDYA, we focus on proportion, comfort and enduring craftsmanship, so the rings you choose together still feel right years from now.",
    since: "LIDYA · SINCE 1989",
    statementEyebrow: "A Lifetime Together",
    statementBefore: "Chosen together.",
    statementAccent: "Worn for a lifetime.",
    imageAlt:
      "LIDYA wedding ring collection arranged on champagne fabric and natural stone",
  },

  de: {
    eyebrow: "Trauringe",
    title1: "Für ein",
    title2: "Versprechen.",
    title3: "Für ein ganzes Leben.",
    description:
      "Ein Trauring wird Teil des täglichen Lebens — getragen an gewöhnlichen Tagen, bei besonderen Meilensteinen und in all den Momenten dazwischen. Bei LIDYA achten wir auf Proportion, Komfort und beständige Handwerkskunst, damit sich die gemeinsam gewählten Ringe auch nach vielen Jahren noch richtig anfühlen.",
    since: "LIDYA · SEIT 1989",
    statementEyebrow: "Ein gemeinsames Leben",
    statementBefore: "Gemeinsam gewählt.",
    statementAccent: "Ein Leben lang getragen.",
    imageAlt:
      "LIDYA Trauringkollektion auf champagnerfarbenem Stoff und Naturstein arrangiert",
  },

  tr: {
    eyebrow: "Alyanslar",
    title1: "Tek Bir",
    title2: "Söz İçin.",
    title3: "Bir Ömür Boyu.",
    description:
      "Bir alyans günlük hayatın parçası olur — sıradan günlerde, dönüm noktalarında ve aradaki tüm anlarda takılır. LIDYA’da oran, konfor ve kalıcı işçiliğe odaklanıyoruz; böylece birlikte seçtiğiniz alyanslar yıllar sonra da doğru hissettirsin.",
    since: "LIDYA · 1989'DAN BERİ",
    statementEyebrow: "Birlikte Bir Ömür",
    statementBefore: "Birlikte seçildi.",
    statementAccent: "Bir ömür boyu takıldı.",
    imageAlt:
      "Şampanya kumaşı ve doğal taş üzerinde düzenlenmiş LIDYA alyans koleksiyonu",
  },

  sk: {
    eyebrow: "Obrúčky",
    title1: "Pre jeden",
    title2: "sľub.",
    title3: "Na celý život.",
    description:
      "Obrúčka sa stáva súčasťou každodenného života — nosí sa počas obyčajných dní, veľkých míľnikov aj všetkého medzi tým. V LIDYA sa sústreďujeme na proporcie, pohodlie a trvalú remeselnosť, aby obrúčky, ktoré si vyberiete spolu, pôsobili správne aj po mnohých rokoch.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Celý život spolu",
    statementBefore: "Vybrané spolu.",
    statementAccent: "Nosené celý život.",
    imageAlt:
      "Kolekcia obrúčok LIDYA naaranžovaná na šampanskom textile a prírodnom kameni",
  },

  cs: {
    eyebrow: "Snubní prsteny",
    title1: "Pro jeden",
    title2: "slib.",
    title3: "Na celý život.",
    description:
      "Snubní prsten se stává součástí každodenního života — nosí se během obyčejných dnů, velkých milníků i všeho mezi tím. V LIDYA se zaměřujeme na proporce, pohodlí a trvalé řemeslo, aby prsteny, které si vyberete společně, působily správně i po mnoha letech.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Celý život spolu",
    statementBefore: "Vybrané společně.",
    statementAccent: "Nošené celý život.",
    imageAlt:
      "Kolekce snubních prstenů LIDYA naaranžovaná na šampaňské látce a přírodním kameni",
  },

  hu: {
    eyebrow: "Karikagyűrűk",
    title1: "Egyetlen",
    title2: "ígéretre.",
    title3: "Egy egész életre.",
    description:
      "A karikagyűrű a mindennapi élet részévé válik — egyszerű napokon, nagy mérföldköveknél és minden köztes pillanatban viseljük. A LIDYA-nál az arányokra, a kényelemre és az időtálló kézművességre figyelünk, hogy a közösen választott gyűrűk évekkel később is tökéletesen megfelelőnek érződjenek.",
    since: "LIDYA · 1989 ÓTA",
    statementEyebrow: "Egy élet együtt",
    statementBefore: "Együtt választva.",
    statementAccent: "Egy életen át viselve.",
    imageAlt:
      "LIDYA karikagyűrű-kollekció pezsgőszínű anyagon és természetes kövön elrendezve",
  },

  pl: {
    eyebrow: "Obrączki",
    title1: "Na jedną",
    title2: "obietnicę.",
    title3: "Na całe życie.",
    description:
      "Obrączka staje się częścią codziennego życia — noszona w zwykłe dni, podczas ważnych chwil i wszystkiego pomiędzy nimi. W LIDYA zwracamy uwagę na proporcje, wygodę i trwałe rzemiosło, aby obrączki wybrane razem nadal wydawały się właściwe nawet po wielu latach.",
    since: "LIDYA · OD 1989 ROKU",
    statementEyebrow: "Całe życie razem",
    statementBefore: "Wybrane razem.",
    statementAccent: "Noszone przez całe życie.",
    imageAlt:
      "Kolekcja obrączek LIDYA ułożona na tkaninie w kolorze szampana i naturalnym kamieniu",
  },
};

export default function WeddingRingsCinematicHero() {
  const { locale } = useLanguage();
  const copy = WEDDING_HERO_COPY[locale];

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

    const loadTimer = window.setTimeout(() => {
      setLoaded(true);
    }, 80);

    if (reducedMotion) {
      setLoaded(true);

      return () => {
        window.clearTimeout(loadTimer);
      };
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
        (pointerTarget.current.x - pointerCurrent.current.x) * 0.04;

      pointerCurrent.current.y +=
        (pointerTarget.current.y - pointerCurrent.current.y) * 0.04;

      scrollCurrent.current +=
        (scrollTarget.current - scrollCurrent.current) * 0.06;

      const x = pointerCurrent.current.x;
      const y = pointerCurrent.current.y;
      const scroll = scrollCurrent.current;

      const imageX = x * 10;
      const imageY = y * 6.5 - scroll * 22;
      const imageScale = 1.045 + scroll * 0.015;

      imageWrap.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(${imageScale})
      `;

      const contentX = x * -3.4;
      const contentY = y * -2.2 - scroll * 6;

      content.style.transform = `
        translate3d(${contentX}px, ${contentY}px, 0)
      `;

      const glowX = 50 + x * 8;
      const glowY = 42 + y * 6;

      glow.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(238, 205, 145, 0.20) 0%,
          rgba(204, 157, 82, 0.075) 22%,
          rgba(255, 255, 255, 0) 50%
        )
      `;

      frameRef.current = requestAnimationFrame(animate);
    };

    section.addEventListener("pointermove", updatePointer);
    section.addEventListener("pointerleave", resetPointer);

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    updateScroll();

    frameRef.current = requestAnimationFrame(animate);

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
        className="absolute inset-[-3%] will-change-transform"
        style={{
          transform: "translate3d(0,0,0) scale(1.045)",
        }}
      >
        <Image
          src="/images/wedding-rings/hero-weddingsrings.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* LEFT READABILITY OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/92 via-[#F7F3EB]/40 to-transparent" />

      {/* LOWER SOFT VEIL */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F7F3EB]/20 via-transparent to-[#F7F3EB]/8" />

      {/* DYNAMIC GOLD LIGHT */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
      />

      {/* SUBTLE VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(84,52,27,0.08)_100%)]" />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative mx-auto max-w-[1440px] px-6 will-change-transform md:px-10 lg:px-16 xl:px-20"
      >
        {/* TOP HERO CONTENT */}
        <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
          {/* LEFT SIDE */}
          <div className="lg:col-span-8">
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
                <RingIcon />
              </span>

              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                {copy.eyebrow}
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
                  {copy.title1}
                </span>
              </span>

              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{
                    transitionDelay: "370ms",
                  }}
                >
                  {copy.title2}
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
                    transitionDelay: "460ms",
                  }}
                >
                  {copy.title3}
                </span>
              </span>
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`lg:col-span-4 lg:pb-2 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: "590ms",
            }}
          >
            <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/50">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        {/* LOWER STATEMENT */}
        <div
          className={`border-t border-plum-dark/10 py-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:py-16 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: "760ms",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#A98242]">
                {copy.statementEyebrow}
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{
                  color: "#1B0B20",
                }}
              >
                {copy.statementBefore}
                <span
                  style={{
                    color: "#A98242",
                  }}
                >
                  {" "}
                  {copy.statementAccent}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}