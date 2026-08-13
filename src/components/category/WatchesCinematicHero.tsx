"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type WatchesHeroCopy = {
  eyebrow: string;
  title1: string;
  title2: string;
  description: string;
  since: string;
  statementEyebrow: string;
  statementBefore: string;
  statementAccent: string;
  imageAlt: string;
};

const WATCHES_HERO_COPY: Record<Locale, WatchesHeroCopy> = {
  de: {
    eyebrow: "Uhren",
    title1: "Zeit,",
    title2: "anders geschaffen",
    description:
      "Eine Uhr ist mehr als ein Instrument zur Messung der Zeit. Sie ist Ausdruck von Charakter, Handwerkskunst und persönlichem Stil — geschaffen für die Augenblicke, die zählen.",
    since: "LIDYA · SEIT 1989",
    statementEyebrow: "Die Kunst der Zeit",
    statementBefore: "Geschaffen, um Momente zu messen.",
    statementAccent: "Entworfen, um Teil davon zu werden.",
    imageAlt:
      "Luxuriöse LIDYA Uhr in einem eleganten Schmuckambiente",
  },

  en: {
    eyebrow: "Watches",
    title1: "Time,",
    title2: "Crafted Differently",
    description:
      "A watch is more than an instrument for measuring time. It is an expression of character, craftsmanship and personal style — created to accompany the moments that matter.",
    since: "LIDYA · SINCE 1989",
    statementEyebrow: "The Art of Time",
    statementBefore: "Made to measure moments.",
    statementAccent: "Created to become part of them.",
    imageAlt:
      "Luxury LIDYA watch presented in an elegant jewellery setting",
  },

  tr: {
    eyebrow: "Saatler",
    title1: "Zaman,",
    title2: "Farklı Tasarlandı",
    description:
      "Bir saat zamanı ölçen bir araçtan çok daha fazlasıdır. Karakterin, ustalığın ve kişisel tarzın bir ifadesidir — önemli anlara eşlik etmek için yaratılmıştır.",
    since: "LIDYA · 1989'DAN BERİ",
    statementEyebrow: "Zamanın Sanatı",
    statementBefore: "Anları ölçmek için üretildi.",
    statementAccent: "Onların bir parçası olmak için tasarlandı.",
    imageAlt:
      "Zarif bir mücevher ortamında sunulan lüks LIDYA saat",
  },

  sk: {
    eyebrow: "Hodinky",
    title1: "Čas,",
    title2: "vytvorený inak",
    description:
      "Hodinky sú viac než nástroj na meranie času. Sú vyjadrením charakteru, remesla a osobného štýlu — vytvorené tak, aby sprevádzali chvíle, na ktorých záleží.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Umenie času",
    statementBefore: "Vytvorené, aby merali okamihy.",
    statementAccent: "Navrhnuté, aby sa stali ich súčasťou.",
    imageAlt:
      "Luxusné hodinky LIDYA prezentované v elegantnom šperkárskom prostredí",
  },

  cs: {
    eyebrow: "Hodinky",
    title1: "Čas,",
    title2: "vytvořený jinak",
    description:
      "Hodinky jsou víc než nástroj k měření času. Jsou vyjádřením charakteru, řemesla a osobního stylu — vytvořené pro chvíle, na kterých záleží.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Umění času",
    statementBefore: "Vytvořeno k měření okamžiků.",
    statementAccent: "Navrženo, aby se stalo jejich součástí.",
    imageAlt:
      "Luxusní hodinky LIDYA prezentované v elegantním šperkařském prostředí",
  },

  hu: {
    eyebrow: "Órák",
    title1: "Az idő,",
    title2: "másképp megalkotva",
    description:
      "Egy óra több, mint az idő mérésére szolgáló eszköz. A karakter, a kézművesség és a személyes stílus kifejezése — azért készült, hogy elkísérje az igazán fontos pillanatokat.",
    since: "LIDYA · 1989 ÓTA",
    statementEyebrow: "Az idő művészete",
    statementBefore: "Azért készült, hogy mérje a pillanatokat.",
    statementAccent: "Azért alkották, hogy részévé váljon nekik.",
    imageAlt:
      "Luxus LIDYA óra elegáns ékszerkörnyezetben bemutatva",
  },

  pl: {
    eyebrow: "Zegarki",
    title1: "Czas,",
    title2: "stworzony inaczej",
    description:
      "Zegarek to coś więcej niż narzędzie do mierzenia czasu. Jest wyrazem charakteru, rzemiosła i osobistego stylu — stworzonym, by towarzyszyć chwilom, które naprawdę mają znaczenie.",
    since: "LIDYA · OD 1989 ROKU",
    statementEyebrow: "Sztuka czasu",
    statementBefore: "Stworzone, by mierzyć chwile.",
    statementAccent: "Zaprojektowane, by stać się ich częścią.",
    imageAlt:
      "Luksusowy zegarek LIDYA prezentowany w eleganckim otoczeniu jubilerskim",
  },

  ru: {
    eyebrow: "Часы",
    title1: "Время,",
    title2: "созданное иначе",
    description:
      "Часы — это больше, чем инструмент для измерения времени. Это выражение характера, мастерства и индивидуального стиля — созданное, чтобы сопровождать моменты, которые действительно важны.",
    since: "LIDYA · С 1989 ГОДА",
    statementEyebrow: "Искусство времени",
    statementBefore: "Созданы, чтобы измерять моменты.",
    statementAccent: "Созданы, чтобы становиться их частью.",
    imageAlt:
      "Роскошные часы LIDYA в элегантной ювелирной обстановке",
  },

  nl: {
    eyebrow: "Horloges",
    title1: "Tijd,",
    title2: "anders vormgegeven",
    description:
      "Een horloge is meer dan een instrument om tijd te meten. Het is een uitdrukking van karakter, vakmanschap en persoonlijke stijl — gemaakt om de momenten die ertoe doen te begeleiden.",
    since: "LIDYA · SINDS 1989",
    statementEyebrow: "De kunst van tijd",
    statementBefore: "Gemaakt om momenten te meten.",
    statementAccent: "Ontworpen om er deel van te worden.",
    imageAlt:
      "Luxueus LIDYA horloge gepresenteerd in een elegante juwelierssetting",
  },

  da: {
    eyebrow: "Ure",
    title1: "Tid,",
    title2: "skabt anderledes",
    description:
      "Et ur er mere end et instrument til at måle tid. Det er et udtryk for karakter, håndværk og personlig stil — skabt til at ledsage de øjeblikke, der betyder noget.",
    since: "LIDYA · SIDEN 1989",
    statementEyebrow: "Tidens kunst",
    statementBefore: "Skabt til at måle øjeblikke.",
    statementAccent: "Designet til at blive en del af dem.",
    imageAlt:
      "Luksuriøst LIDYA ur præsenteret i elegante smykkeomgivelser",
  },

  fi: {
    eyebrow: "Kellot",
    title1: "Aika,",
    title2: "luotu toisin",
    description:
      "Kello on enemmän kuin ajan mittaamisen väline. Se on luonteen, käsityötaidon ja henkilökohtaisen tyylin ilmaus — luotu kulkemaan mukana tärkeissä hetkissä.",
    since: "LIDYA · VUODESTA 1989",
    statementEyebrow: "Ajan taide",
    statementBefore: "Luotu mittaamaan hetkiä.",
    statementAccent: "Suunniteltu tulemaan osaksi niitä.",
    imageAlt:
      "Ylellinen LIDYA-kello esiteltynä elegantissa koruympäristössä",
  },

  sv: {
    eyebrow: "Klockor",
    title1: "Tid,",
    title2: "skapad på ett annat sätt",
    description:
      "En klocka är mer än ett instrument för att mäta tid. Den är ett uttryck för karaktär, hantverk och personlig stil — skapad för att följa de ögonblick som verkligen betyder något.",
    since: "LIDYA · SEDAN 1989",
    statementEyebrow: "Tidens konst",
    statementBefore: "Skapad för att mäta ögonblick.",
    statementAccent: "Formgiven för att bli en del av dem.",
    imageAlt:
      "Lyxig LIDYA-klocka presenterad i en elegant smyckesmiljö",
  },

  fr: {
    eyebrow: "Montres",
    title1: "Le temps,",
    title2: "créé autrement",
    description:
      "Une montre est bien plus qu'un instrument de mesure du temps. Elle exprime le caractère, le savoir-faire et le style personnel — créée pour accompagner les moments qui comptent.",
    since: "LIDYA · DEPUIS 1989",
    statementEyebrow: "L'art du temps",
    statementBefore: "Créée pour mesurer les instants.",
    statementAccent: "Pensée pour en faire partie.",
    imageAlt:
      "Montre LIDYA de luxe présentée dans un élégant univers joaillier",
  },

  it: {
    eyebrow: "Orologi",
    title1: "Il tempo,",
    title2: "creato diversamente",
    description:
      "Un orologio è molto più di uno strumento per misurare il tempo. È espressione di carattere, artigianalità e stile personale — creato per accompagnare i momenti che contano.",
    since: "LIDYA · DAL 1989",
    statementEyebrow: "L'arte del tempo",
    statementBefore: "Creato per misurare i momenti.",
    statementAccent: "Pensato per diventarne parte.",
    imageAlt:
      "Orologio LIDYA di lusso presentato in un elegante ambiente di gioielleria",
  },

  es: {
    eyebrow: "Relojes",
    title1: "El tiempo,",
    title2: "creado de otra manera",
    description:
      "Un reloj es mucho más que un instrumento para medir el tiempo. Es una expresión de carácter, artesanía y estilo personal — creado para acompañar los momentos que realmente importan.",
    since: "LIDYA · DESDE 1989",
    statementEyebrow: "El arte del tiempo",
    statementBefore: "Creado para medir momentos.",
    statementAccent: "Diseñado para formar parte de ellos.",
    imageAlt:
      "Reloj LIDYA de lujo presentado en un elegante entorno de joyería",
  },
};

function WatchIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M18 3h12l2 8H16l2-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M16 37h16l-2 8H18l-2-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="24"
        cy="24"
        r="13"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="24"
        cy="24"
        r="1.7"
        fill="currentColor"
      />

      <path
        d="M24 24V16M24 24l6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WatchesCinematicHero() {
  const { locale } = useLanguage();

  const copy =
    WATCHES_HERO_COPY[locale] ??
    WATCHES_HERO_COPY.en;

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const frameRef = useRef<number | null>(null);

  const pointerTarget = useRef({
    x: 0,
    y: 0,
  });

  const pointerCurrent = useRef({
    x: 0,
    y: 0,
  });

  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!section || !imageWrap || !content || !glow) {
      setLoaded(true);
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    if (reducedMotion || !finePointer) {
      setLoaded(true);
      return;
    }

    const updatePointer = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) /
          Math.max(rect.width, 1) -
          0.5) *
        2;

      const y =
        ((event.clientY - rect.top) /
          Math.max(rect.height, 1) -
          0.5) *
        2;

      pointerTarget.current.x = Math.max(
        -1,
        Math.min(1, x)
      );

      pointerTarget.current.y = Math.max(
        -1,
        Math.min(1, y)
      );
    };

    const resetPointer = () => {
      pointerTarget.current.x = 0;
      pointerTarget.current.y = 0;
    };

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();

      const total = Math.max(
        section.offsetHeight,
        1
      );

      scrollTarget.current = Math.max(
        0,
        Math.min(
          1,
          Math.abs(Math.min(rect.top, 0)) / total
        )
      );
    };

    const animate = () => {
      pointerCurrent.current.x +=
        (pointerTarget.current.x -
          pointerCurrent.current.x) *
        0.045;

      pointerCurrent.current.y +=
        (pointerTarget.current.y -
          pointerCurrent.current.y) *
        0.045;

      scrollCurrent.current +=
        (scrollTarget.current -
          scrollCurrent.current) *
        0.065;

      const x = pointerCurrent.current.x;
      const y = pointerCurrent.current.y;
      const scroll = scrollCurrent.current;

      const imageX = x * 10;
      const imageY = y * 6 - scroll * 20;
      const imageScale = 1.04 + scroll * 0.014;

      imageWrap.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(${imageScale})
      `;

      const contentX = x * -2.2;
      const contentY = y * -1.4 - scroll * 4;

      content.style.transform = `
        translate3d(${contentX}px, ${contentY}px, 0)
      `;

      const glowX = 50 + x * 8;
      const glowY = 42 + y * 6;

      glow.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(255,255,255,0.035) 0%,
          rgba(200,169,106,0.015) 24%,
          rgba(255,255,255,0) 48%
        )
      `;

      frameRef.current =
        requestAnimationFrame(animate);
    };

    section.addEventListener(
      "pointermove",
      updatePointer
    );

    section.addEventListener(
      "pointerleave",
      resetPointer
    );

    window.addEventListener(
      "scroll",
      updateScroll,
      {
        passive: true,
      }
    );

    updateScroll();

    frameRef.current =
      requestAnimationFrame(animate);

    const loadTimer = window.setTimeout(() => {
      setLoaded(true);
    }, 60);

    return () => {
      section.removeEventListener(
        "pointermove",
        updatePointer
      );

      section.removeEventListener(
        "pointerleave",
        resetPointer
      );

      window.removeEventListener(
        "scroll",
        updateScroll
      );

      if (frameRef.current !== null) {
        cancelAnimationFrame(
          frameRef.current
        );
      }

      window.clearTimeout(loadTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="watches-cinematic-hero"
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-ivory
        pt-[108px]
        md:min-h-[860px]
        md:pt-36
        lg:min-h-[940px]
        lg:pt-44
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        ref={imageWrapRef}
        className={`absolute inset-[-3%] will-change-transform transition-[opacity,filter,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded
            ? "opacity-100 blur-0"
            : "opacity-0 blur-[2px]"
        }`}
        style={{
          transform: loaded
            ? "translate3d(0,0,0) scale(1.04)"
            : "translate3d(0,0,0) scale(1.075)",
        }}
      >
        <Image
          src="/images/watches/watches-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[62%_50%]
            md:object-[58%_50%]
            lg:object-center
          "
        />
      </div>

      {/*
        DÔLEŽITÉ:
        Pôvodné veľké svetlé radial-gradient overlaye
        sú odstránené, takže stred obrázka už nebude
        mliečny / vyblednutý.
      */}

      {/* VERY SUBTLE GLOBAL TONE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#F7F3EB]/[0.015]
        "
      />

      {/* SUBTLE BOTTOM TRANSITION */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#F7F3EB]/[0.04]
          via-transparent
          to-transparent
        "
      />

      {/* INTERACTIVE LIGHT - VERY SUBTLE */}
      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute
          inset-0
        "
      />

      {/* SUBTLE VIGNETTE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_62%,rgba(35,18,28,0.04)_100%)]
        "
      />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-6
          will-change-transform
          md:px-10
          lg:px-16
          xl:px-20
        "
      >
        {/* MAIN HERO CONTENT */}
        <div
          className="
            grid
            gap-7
            pb-10
            md:gap-10
            md:pb-16
            lg:grid-cols-12
            lg:items-start
            lg:gap-14
            lg:pb-36
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              text-center
              lg:col-span-7
              lg:pt-2
              lg:text-left
            "
          >
            {/* EYEBROW */}
            <div
              className={`flex items-center justify-center gap-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-4 lg:justify-start ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: "140ms",
              }}
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  text-[#A98242]
                  md:h-10
                  md:w-10
                "
              >
                <WatchIcon />
              </span>

              <span
                className="
                  text-[0.6rem]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8D6B35]
                  md:text-[0.66rem]
                  md:tracking-[0.34em]
                "
              >
                {copy.eyebrow}
              </span>
            </div>

            {/* MAIN TITLE */}
            <h1
              className="
                mx-auto
                mt-5
                max-w-[860px]
                font-display
                text-[2.85rem]
                leading-[0.92]
                tracking-[-0.04em]
                text-[#1B0B20]
                sm:text-[3.2rem]
                md:mt-7
                md:text-6xl
                md:leading-[0.92]
                lg:mx-0
                lg:max-w-[760px]
                lg:text-[5.6rem]
              "
            >
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{
                    transitionDelay: "240ms",
                  }}
                >
                  {copy.title1}
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
                    transitionDelay: "340ms",
                  }}
                >
                  {copy.title2}
                </span>
              </span>
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:col-span-5 lg:pt-16 lg:pl-10 lg:text-left ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: "500ms",
            }}
          >
            <p
              className="
                mx-auto
                max-w-[650px]
                text-[0.8rem]
                font-medium
                leading-[1.65rem]
                text-[#352E2B]
                md:text-base
                md:leading-7
                lg:mx-0
                lg:max-w-[390px]
              "
            >
              {copy.description}
            </p>

            {/* SINCE */}
            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-4
                md:mt-7
                lg:justify-start
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#A98242]
                  md:w-12
                "
              />

              <span
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.21em]
                  text-[#3B2A37]/75
                  md:text-[0.58rem]
                  md:tracking-[0.24em]
                "
              >
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div
          className={`border-t border-[#1B0B20]/10 py-7 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:py-12 lg:mt-4 lg:py-16 lg:text-left ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{
            transitionDelay: "650ms",
          }}
        >
          <div
            className="
              grid
              gap-4
              md:gap-6
              lg:grid-cols-12
              lg:items-center
              lg:gap-8
            "
          >
            <div className="lg:col-span-3">
              <span
                className="
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.27em]
                  text-[#8D6B35]
                  md:text-[0.62rem]
                  md:tracking-[0.3em]
                "
              >
                {copy.statementEyebrow}
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="
                  mx-auto
                  max-w-[950px]
                  font-display
                  text-[1.7rem]
                  italic
                  leading-[1.12]
                  text-[#1B0B20]
                  md:text-4xl
                  md:leading-tight
                  lg:mx-0
                  lg:text-5xl
                "
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