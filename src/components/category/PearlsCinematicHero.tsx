"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { PearlIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const PEARLS_HERO_COPY: Record<
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
    eyebrow: "Pearls",
    title1: "Nature's",
    title2: "Most Patient",
    title3: "Jewel",
    description:
      "Created slowly, layer by layer, a pearl carries a beauty no machine can reproduce. No two are ever exactly alike. At LIDYA, we choose pearls for the depth of their lustre, the harmony of their colour and the quiet elegance that reveals itself the moment they meet the skin.",
    since: "LIDYA · SINCE 1989",
    statementEyebrow: "Quiet luxury",
    statementBefore: "Formed slowly by nature.",
    statementAccent: "Chosen carefully by hand.",
    imageAlt:
      "LIDYA pearl jewellery collection arranged on champagne silk",
  },

  de: {
    eyebrow: "Perlen",
    title1: "Der Natur",
    title2: "geduldigstes",
    title3: "Juwel",
    description:
      "Langsam, Schicht für Schicht entstanden, trägt jede Perle eine Schönheit in sich, die keine Maschine nachbilden kann. Keine zwei Perlen sind jemals vollkommen gleich. Bei LIDYA wählen wir Perlen nach der Tiefe ihres Lüsters, der Harmonie ihrer Farbe und jener stillen Eleganz aus, die sich in dem Moment zeigt, in dem sie die Haut berühren.",
    since: "LIDYA · SEIT 1989",
    statementEyebrow: "Stiller Luxus",
    statementBefore: "Langsam von der Natur geformt.",
    statementAccent: "Sorgfältig von Hand ausgewählt.",
    imageAlt:
      "LIDYA Perlenkollektion auf champagnerfarbener Seide arrangiert",
  },

  tr: {
    eyebrow: "İnciler",
    title1: "Doğanın",
    title2: "En Sabırlı",
    title3: "Mücevheri",
    description:
      "Yavaşça, katman katman oluşan bir inci, hiçbir makinenin taklit edemeyeceği bir güzellik taşır. Hiçbir iki inci birbirinin tamamen aynısı değildir. LIDYA’da incileri; parlaklıklarının derinliğine, renklerinin uyumuna ve tenle buluştukları anda ortaya çıkan zarif karakterlerine göre seçiyoruz.",
    since: "LIDYA · 1989'DAN BERİ",
    statementEyebrow: "Sessiz lüks",
    statementBefore: "Doğa tarafından yavaşça şekillendirildi.",
    statementAccent: "Özenle elde seçildi.",
    imageAlt:
      "Şampanya renkli ipek üzerinde düzenlenmiş LIDYA inci mücevher koleksiyonu",
  },

  sk: {
    eyebrow: "Perly",
    title1: "Prírodný",
    title2: "zázrak",
    title3: "trpezlivosti",
    description:
      "Perla vzniká pomaly, vrstvu po vrstve, a nesie v sebe krásu, ktorú nedokáže napodobniť žiadny stroj. Žiadne dve perly nie sú úplne rovnaké. V LIDYA vyberáme perly podľa hĺbky ich lesku, harmónie farby a tichej elegancie, ktorá sa naplno ukáže vo chvíli, keď sa dotknú pokožky.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Nenápadný luxus",
    statementBefore: "Pomaly formované prírodou.",
    statementAccent: "Starostlivo vybrané ručne.",
    imageAlt:
      "Kolekcia perlových šperkov LIDYA naaranžovaná na šampanskom hodvábe",
  },

  cs: {
    eyebrow: "Perly",
    title1: "Přírodní",
    title2: "zázrak",
    title3: "trpělivosti",
    description:
      "Perla vzniká pomalu, vrstvu po vrstvě, a nese v sobě krásu, kterou nedokáže napodobit žádný stroj. Žádné dvě perly nejsou zcela stejné. V LIDYA vybíráme perly podle hloubky jejich lesku, harmonie barvy a tiché elegance, která se naplno projeví ve chvíli, kdy se dotknou pokožky.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Nenápadný luxus",
    statementBefore: "Pomalu formované přírodou.",
    statementAccent: "Pečlivě vybírané ručně.",
    imageAlt:
      "Kolekce perlových šperků LIDYA naaranžovaná na šampaňském hedvábí",
  },

  hu: {
    eyebrow: "Gyöngyök",
    title1: "A természet",
    title2: "legtürelmesebb",
    title3: "ékszere",
    description:
      "A gyöngy lassan, rétegről rétegre születik, és olyan szépséget hordoz, amelyet egyetlen gép sem képes reprodukálni. Nincs két teljesen egyforma gyöngy. A LIDYA-nál a gyöngyöket fényük mélysége, színük harmóniája és az a visszafogott elegancia alapján választjuk ki, amely a bőrrel érintkezve válik igazán láthatóvá.",
    since: "LIDYA · 1989 ÓTA",
    statementEyebrow: "Csendes luxus",
    statementBefore: "Lassan formálja a természet.",
    statementAccent: "Gondosan, kézzel válogatva.",
    imageAlt:
      "LIDYA gyöngyékszer-kollekció pezsgőszínű selymen elrendezve",
  },

  pl: {
    eyebrow: "Perły",
    title1: "Najbardziej",
    title2: "cierpliwy klejnot",
    title3: "natury",
    description:
      "Perła powstaje powoli, warstwa po warstwie, i kryje w sobie piękno, którego nie potrafi odtworzyć żadna maszyna. Nie ma dwóch identycznych pereł. W LIDYA wybieramy perły ze względu na głębię ich połysku, harmonię koloru i subtelną elegancję, która ujawnia się w chwili, gdy dotykają skóry.",
    since: "LIDYA · OD 1989 ROKU",
    statementEyebrow: "Dyskretny luksus",
    statementBefore: "Powoli formowane przez naturę.",
    statementAccent: "Starannie wybierane ręcznie.",
    imageAlt:
      "Kolekcja biżuterii z pereł LIDYA ułożona na jedwabiu w kolorze szampana",
  },
};

export default function PearlsCinematicHero() {
  const { locale } = useLanguage();
  const copy = PEARLS_HERO_COPY[locale];

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

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

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
          alt={copy.imageAlt}
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
                {copy.eyebrow}
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
                  style={{ transitionDelay: "370ms" }}
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
                  style={{ transitionDelay: "460ms" }}
                >
                  {copy.title3}
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
                {copy.statementEyebrow}
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#1B0B20" }}
              >
                {copy.statementBefore}
                <span style={{ color: "#A98242" }}>
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