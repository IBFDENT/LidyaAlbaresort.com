"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { GemClusterIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type SignatureStyleHeroCopy = {
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
};

const SIGNATURE_STYLE_HERO_COPY: Record<
  Locale,
  SignatureStyleHeroCopy
> = {
  en: {
    eyebrow: "Signature Style",
    title1: "Style That",
    title2: "Needs No",
    title3: "Introduction",
    description:
      "Character is not found in what happens to be in fashion. It lives in the details we return to again and again — in jewellery that becomes a natural extension of the person who wears it.",
    since: "LIDYA · SINCE 1989",
    statementEyebrow: "Personal by nature",
    statementBefore: "Not defined by trends.",
    statementAccent: "Defined by you.",
    imageAlt:
      "LIDYA Signature Style jewellery collection in gold and diamonds",
  },

  de: {
    eyebrow: "Signature-Stil",
    title1: "Stil, der",
    title2: "keine Erklärung",
    title3: "braucht",
    description:
      "Charakter entsteht nicht durch das, was gerade im Trend liegt. Er lebt in den Details, zu denen wir immer wieder zurückkehren — in Schmuck, der zu einem natürlichen Teil der Person wird, die ihn trägt.",
    since: "LIDYA · SEIT 1989",
    statementEyebrow: "Persönlich von Natur aus",
    statementBefore: "Nicht von Trends bestimmt.",
    statementAccent: "Von Ihnen definiert.",
    imageAlt:
      "LIDYA Signature-Stil Schmuckkollektion aus Gold und Diamanten",
  },

  tr: {
    eyebrow: "İmza Stili",
    title1: "Tanıtıma",
    title2: "İhtiyaç Duymayan",
    title3: "Bir Stil",
    description:
      "Karakter, o an moda olan şeylerde bulunmaz. Tekrar tekrar döndüğümüz detaylarda yaşar — mücevheri takan kişinin doğal bir parçasına dönüşen tasarımlarda.",
    since: "LIDYA · 1989'DAN BERİ",
    statementEyebrow: "Doğası gereği kişisel",
    statementBefore: "Trendlerle tanımlanmaz.",
    statementAccent: "Sizinle tanımlanır.",
    imageAlt:
      "Altın ve pırlantalardan oluşan LIDYA İmza Stili mücevher koleksiyonu",
  },

  sk: {
    eyebrow: "Charakteristický štýl",
    title1: "Štýl, ktorý",
    title2: "nepotrebuje",
    title3: "predstavenie",
    description:
      "Charakter sa neskrýva v tom, čo je práve trendom. Je v detailoch, ktoré si vyberáme znova a znova — v šperku, ktorý sa stane prirodzenou súčasťou človeka, ktorý ho nosí.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Osobitosť",
    statementBefore: "Nie podľa trendov.",
    statementAccent: "Podľa vás.",
    imageAlt:
      "Kolekcia Charakteristický štýl LIDYA zo zlata a diamantov",
  },

  cs: {
    eyebrow: "Charakteristický styl",
    title1: "Styl, který",
    title2: "nepotřebuje",
    title3: "představení",
    description:
      "Charakter se neskrývá v tom, co je právě trendem. Žije v detailech, ke kterým se vracíme znovu a znovu — ve šperku, který se stane přirozenou součástí člověka, který ho nosí.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Osobitost",
    statementBefore: "Ne podle trendů.",
    statementAccent: "Podle vás.",
    imageAlt:
      "Kolekce Charakteristický styl LIDYA ze zlata a diamantů",
  },

  hu: {
    eyebrow: "Jellegzetes stílus",
    title1: "Stílus, amelynek",
    title2: "nincs szüksége",
    title3: "bemutatásra",
    description:
      "A karakter nem abban rejlik, ami éppen divatos. Azokban a részletekben él, amelyekhez újra és újra visszatérünk — olyan ékszerekben, amelyek viselőjük természetes részévé válnak.",
    since: "LIDYA · 1989 ÓTA",
    statementEyebrow: "Természeténél fogva személyes",
    statementBefore: "Nem trendek határozzák meg.",
    statementAccent: "Ön határozza meg.",
    imageAlt:
      "LIDYA Jellegzetes stílus ékszerkollekció aranyból és gyémántokkal",
  },

  pl: {
    eyebrow: "Charakterystyczny styl",
    title1: "Styl, który",
    title2: "nie potrzebuje",
    title3: "przedstawienia",
    description:
      "Charakter nie kryje się w tym, co akurat jest modne. Żyje w detalach, do których wracamy raz po raz — w biżuterii, która staje się naturalnym przedłużeniem osoby, która ją nosi.",
    since: "LIDYA · OD 1989 ROKU",
    statementEyebrow: "Osobisty z natury",
    statementBefore: "Nie definiują go trendy.",
    statementAccent: "Definiujesz go Ty.",
    imageAlt:
      "Kolekcja LIDYA Charakterystyczny styl ze złota i diamentów",
  },

  ru: {
    eyebrow: "Фирменный стиль",
    title1: "Стиль, который",
    title2: "не требует",
    title3: "представления",
    description:
      "Характер не определяется тем, что сейчас в моде. Он живёт в деталях, к которым мы возвращаемся снова и снова — в украшениях, которые становятся естественным продолжением человека, который их носит.",
    since: "LIDYA · С 1989 ГОДА",
    statementEyebrow: "Личный по своей природе",
    statementBefore: "Не определяется трендами.",
    statementAccent: "Определяется вами.",
    imageAlt:
      "Коллекция украшений LIDYA Фирменный стиль из золота и бриллиантов",
  },

  nl: {
    eyebrow: "Signatuurstijl",
    title1: "Stijl die",
    title2: "geen introductie",
    title3: "nodig heeft",
    description:
      "Karakter zit niet in wat toevallig in de mode is. Het leeft in de details waar we steeds opnieuw naar terugkeren — in sieraden die een natuurlijk verlengstuk worden van degene die ze draagt.",
    since: "LIDYA · SINDS 1989",
    statementEyebrow: "Van nature persoonlijk",
    statementBefore: "Niet bepaald door trends.",
    statementAccent: "Bepaald door u.",
    imageAlt:
      "LIDYA Signatuurstijl sieradencollectie in goud en diamanten",
  },

  da: {
    eyebrow: "Signaturstil",
    title1: "Stil, der",
    title2: "ikke behøver",
    title3: "en introduktion",
    description:
      "Karakter findes ikke i det, der tilfældigvis er på mode. Den lever i de detaljer, vi vender tilbage til igen og igen — i smykker, der bliver en naturlig forlængelse af personen, der bærer dem.",
    since: "LIDYA · SIDEN 1989",
    statementEyebrow: "Personlig af natur",
    statementBefore: "Ikke defineret af trends.",
    statementAccent: "Defineret af dig.",
    imageAlt:
      "LIDYA Signaturstil smykkekollektion i guld og diamanter",
  },

  fi: {
    eyebrow: "Tunnusomainen tyyli",
    title1: "Tyyli, joka",
    title2: "ei tarvitse",
    title3: "esittelyä",
    description:
      "Luonne ei löydy siitä, mikä sattuu olemaan muodissa. Se elää yksityiskohdissa, joihin palaamme yhä uudelleen — koruissa, joista tulee luonnollinen osa käyttäjäänsä.",
    since: "LIDYA · VUODESTA 1989",
    statementEyebrow: "Luonnostaan henkilökohtainen",
    statementBefore: "Ei trendien määrittelemä.",
    statementAccent: "Sinun määrittelemäsi.",
    imageAlt:
      "LIDYA Tunnusomainen tyyli -korukokoelma kullasta ja timanteista",
  },

  sv: {
    eyebrow: "Signaturstil",
    title1: "Stil som",
    title2: "inte behöver",
    title3: "en presentation",
    description:
      "Karaktär finns inte i det som råkar vara modernt. Den lever i detaljerna vi återvänder till om och om igen — i smycken som blir en naturlig förlängning av personen som bär dem.",
    since: "LIDYA · SEDAN 1989",
    statementEyebrow: "Personlig av natur",
    statementBefore: "Inte definierad av trender.",
    statementAccent: "Definierad av dig.",
    imageAlt:
      "LIDYA Signaturstil smyckeskollektion i guld och diamanter",
  },

  fr: {
    eyebrow: "Style signature",
    title1: "Un style",
    title2: "qui n’a besoin",
    title3: "d’aucune présentation",
    description:
      "Le caractère ne se trouve pas dans ce qui est simplement à la mode. Il vit dans les détails auxquels nous revenons encore et encore — dans des bijoux qui deviennent une extension naturelle de la personne qui les porte.",
    since: "LIDYA · DEPUIS 1989",
    statementEyebrow: "Personnel par nature",
    statementBefore: "Pas défini par les tendances.",
    statementAccent: "Défini par vous.",
    imageAlt:
      "Collection de bijoux LIDYA Style signature en or et diamants",
  },

  it: {
    eyebrow: "Stile distintivo",
    title1: "Uno stile",
    title2: "che non ha bisogno",
    title3: "di presentazioni",
    description:
      "Il carattere non si trova in ciò che in quel momento è di moda. Vive nei dettagli a cui torniamo ancora e ancora — in gioielli che diventano un’estensione naturale della persona che li indossa.",
    since: "LIDYA · DAL 1989",
    statementEyebrow: "Personale per natura",
    statementBefore: "Non definito dalle tendenze.",
    statementAccent: "Definito da voi.",
    imageAlt:
      "Collezione di gioielli LIDYA Stile distintivo in oro e diamanti",
  },

  es: {
    eyebrow: "Estilo distintivo",
    title1: "Un estilo",
    title2: "que no necesita",
    title3: "presentación",
    description:
      "El carácter no se encuentra en lo que simplemente está de moda. Vive en los detalles a los que volvemos una y otra vez — en joyas que se convierten en una extensión natural de la persona que las lleva.",
    since: "LIDYA · DESDE 1989",
    statementEyebrow: "Personal por naturaleza",
    statementBefore: "No definido por las tendencias.",
    statementAccent: "Definido por usted.",
    imageAlt:
      "Colección de joyas LIDYA Estilo distintivo en oro y diamantes",
  },
};

export default function SignatureStyleCinematicHero() {
  const { locale } = useLanguage();

  const copy: SignatureStyleHeroCopy =
    SIGNATURE_STYLE_HERO_COPY[locale] ??
    SIGNATURE_STYLE_HERO_COPY.en;

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

    if (!section || !imageWrap || !content || !glow) {
      setLoaded(true);
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion || !finePointer) {
      setLoaded(true);
      return;
    }

    const updatePointer = (event: PointerEvent) => {
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

      const imageX = x * 10;
      const imageY = y * 6 - scroll * 20;
      const imageScale = 1.04 + scroll * 0.014;

      imageWrap.style.transform = `
        translate3d(${imageX}px, ${imageY}px, 0)
        scale(${imageScale})
      `;

      const contentX = x * -3;
      const contentY = y * -2 - scroll * 5;

      content.style.transform = `
        translate3d(${contentX}px, ${contentY}px, 0)
      `;

      const glowX = 48 + x * 8;
      const glowY = 42 + y * 6;

      glow.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(255, 236, 198, 0.24) 0%,
          rgba(214, 167, 91, 0.09) 22%,
          rgba(255, 255, 255, 0) 52%
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
    }, 60);

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
          src="/images/signature-style/imagesignature-style-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[62%_50%]
            md:object-[60%_50%]
            lg:object-center
          "
        />
      </div>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#F7F3EB]/97
          via-[#F7F3EB]/78
          to-[#F7F3EB]/12
          md:from-[#F7F3EB]/94
          md:via-[#F7F3EB]/50
          md:to-transparent
          lg:from-[#F7F3EB]/92
          lg:via-[#F7F3EB]/40
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#F7F3EB]/38
          via-transparent
          to-[#F7F3EB]/8
          md:from-[#F7F3EB]/22
        "
      />

      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_52%,rgba(84,52,27,0.07)_100%)]" />

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
        <div
          className="
            grid
            gap-7
            pb-10
            md:gap-10
            md:pb-16
            lg:grid-cols-12
            lg:items-end
            lg:gap-12
            lg:pb-28
          "
        >
          <div className="text-center lg:col-span-8 lg:text-left">
            <div
              className={`flex items-center justify-center gap-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-4 lg:justify-start ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "140ms" }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gold md:h-10 md:w-10">
                <GemClusterIcon />
              </span>

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.66rem] md:tracking-[0.34em]">
                {copy.eyebrow}
              </span>
            </div>

            <h1
              className="
                mx-auto
                mt-5
                max-w-[800px]
                font-display
                text-[2.85rem]
                leading-[0.91]
                tracking-[-0.04em]
                sm:text-[3.15rem]
                md:mt-7
                md:text-6xl
                md:leading-[0.92]
                lg:mx-0
                lg:text-[5.8rem]
              "
              style={{ color: "#1B0B20" }}
            >
              <span className="block overflow-hidden">
                <span
                  className={`block transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{ transitionDelay: "240ms" }}
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
                  style={{ transitionDelay: "320ms" }}
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
                  style={{ transitionDelay: "400ms" }}
                >
                  {copy.title3}
                </span>
              </span>
            </h1>
          </div>

          <div
            className={`text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:col-span-4 lg:pb-2 lg:text-left ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "520ms" }}
          >
            <p
              className="
                mx-auto
                max-w-[340px]
                text-[0.78rem]
                leading-[1.65rem]
                text-[#645E5A]
                sm:max-w-md
                md:text-base
                md:leading-7
                lg:mx-0
              "
            >
              {copy.description}
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 md:mt-7 md:gap-4 lg:justify-start">
              <span className="h-px w-9 bg-gold md:w-12" />

              <span className="text-[0.52rem] font-semibold uppercase tracking-[0.21em] text-plum-dark/50 md:text-[0.58rem] md:tracking-[0.24em]">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`border-t border-plum-dark/10 py-7 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:py-12 lg:py-16 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "660ms" }}
        >
          <div className="grid gap-4 text-center md:gap-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:text-left">
            <div className="lg:col-span-3">
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.27em] text-[#A98242] md:text-[0.62rem] md:tracking-[0.3em]">
                {copy.statementEyebrow}
              </span>
            </div>

            <div className="lg:col-span-9">
              <p
                className="
                  mx-auto
                  max-w-[900px]
                  font-display
                  text-[1.65rem]
                  italic
                  leading-[1.12]
                  md:text-4xl
                  md:leading-tight
                  lg:mx-0
                  lg:text-5xl
                "
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