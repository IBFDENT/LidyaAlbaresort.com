"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { GemClusterIcon } from "@/components/category/icons";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type BrilliantsHeroCopy = {
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

const BRILLIANTS_HERO_COPY: Record<Locale, BrilliantsHeroCopy> = {
  de: {
    eyebrow: "Brillanten",
    title1: "Wo Licht",
    title2: "zu Schmuck wird",
    description:
      "Der Brillantschliff wurde für einen außergewöhnlichen Zweck geschaffen — Licht in Feuer zu verwandeln. Jeder Stein unserer Kollektion wird danach ausgewählt, wie lebendig er in Bewegung wirkt und bei jeder Bewegung neue Lichtblitze offenbart.",
    since: "LIDYA · SEIT 1989",
    statementEyebrow: "Die Kunst des Lichts",
    statementBefore: "Geschaffen, um Licht einzufangen.",
    statementAccent: "Gemacht, um es zu bewahren.",
    imageAlt:
      "LIDYA Brillantenschmuck-Kollektion auf champagnerfarbenem Stoff und Naturstein arrangiert",
  },

  en: {
    eyebrow: "Brilliants",
    title1: "Where Light",
    title2: "Becomes Jewellery",
    description:
      "The brilliant cut was created for one extraordinary purpose — to transform light into fire. Every stone in our collection is selected for the way it comes alive in motion, revealing flashes of brilliance with every movement.",
    since: "LIDYA · SINCE 1989",
    statementEyebrow: "The Art of Light",
    statementBefore: "Made to catch the light.",
    statementAccent: "Created to keep it.",
    imageAlt:
      "LIDYA Brilliants diamond jewellery collection arranged on champagne fabric and natural stone",
  },

  tr: {
    eyebrow: "Pırlantalar",
    title1: "Işığın",
    title2: "Mücevhere Dönüştüğü Yer",
    description:
      "Brilliant kesim tek bir olağanüstü amaç için geliştirildi — ışığı ateşe dönüştürmek. Koleksiyonumuzdaki her taş, hareket ettikçe nasıl canlandığına ve her açı değişiminde nasıl parlak ışık yansımaları sunduğuna göre seçilir.",
    since: "LIDYA · 1989'DAN BERİ",
    statementEyebrow: "Işığın Sanatı",
    statementBefore: "Işığı yakalamak için tasarlandı.",
    statementAccent: "Onu korumak için yaratıldı.",
    imageAlt:
      "Şampanya kumaşı ve doğal taş üzerinde düzenlenmiş LIDYA pırlanta mücevher koleksiyonu",
  },

  sk: {
    eyebrow: "Brilianty",
    title1: "Keď sa svetlo",
    title2: "mení na šperk",
    description:
      "Briliantový brus vznikol s jediným výnimočným cieľom — premeniť svetlo na oheň. Každý kameň v našej kolekcii vyberáme podľa toho, ako ožíva v pohybe a ako pri každom pohybe odhaľuje nové záblesky brilancie.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Umenie svetla",
    statementBefore: "Vytvorené, aby zachytili svetlo.",
    statementAccent: "Navrhnuté, aby si ho uchovali.",
    imageAlt:
      "Kolekcia briliantových šperkov LIDYA naaranžovaná na šampanskom textile a prírodnom kameni",
  },

  cs: {
    eyebrow: "Brilianty",
    title1: "Když se světlo",
    title2: "mění ve šperk",
    description:
      "Briliantový brus vznikl s jediným výjimečným cílem — proměnit světlo v oheň. Každý kámen v naší kolekci vybíráme podle toho, jak ožívá v pohybu a jak při každém pohybu odhaluje nové záblesky brilance.",
    since: "LIDYA · OD ROKU 1989",
    statementEyebrow: "Umění světla",
    statementBefore: "Vytvořeno, aby zachytilo světlo.",
    statementAccent: "Navrženo, aby si ho uchovalo.",
    imageAlt:
      "Kolekce briliantových šperků LIDYA naaranžovaná na šampaňské látce a přírodním kameni",
  },

  hu: {
    eyebrow: "Briliánsok",
    title1: "Ahol a fény",
    title2: "ékszerré válik",
    description:
      "A briliáns csiszolást egyetlen rendkívüli célra alkották meg — hogy a fényt tűzzé alakítsa. Kollekciónk minden kövét aszerint választjuk ki, hogyan kel életre mozgás közben, és miként villan fel minden egyes mozdulatnál.",
    since: "LIDYA · 1989 ÓTA",
    statementEyebrow: "A fény művészete",
    statementBefore: "Arra készül, hogy elkapja a fényt.",
    statementAccent: "Arra tervezve, hogy megőrizze.",
    imageAlt:
      "LIDYA briliáns ékszerkollekció pezsgőszínű anyagon és természetes kövön elrendezve",
  },

  pl: {
    eyebrow: "Brylanty",
    title1: "Tam, gdzie światło",
    title2: "staje się biżuterią",
    description:
      "Szlif brylantowy powstał w jednym niezwykłym celu — aby zamienić światło w ogień. Każdy kamień w naszej kolekcji wybieramy ze względu na to, jak ożywa w ruchu i jak przy każdym poruszeniu odsłania kolejne błyski światła.",
    since: "LIDYA · OD 1989 ROKU",
    statementEyebrow: "Sztuka światła",
    statementBefore: "Stworzone, by łapać światło.",
    statementAccent: "Zaprojektowane, by je zatrzymać.",
    imageAlt:
      "Kolekcja biżuterii z brylantami LIDYA ułożona na tkaninie w kolorze szampana i naturalnym kamieniu",
  },

  ru: {
    eyebrow: "Бриллианты",
    title1: "Где свет",
    title2: "становится украшением",
    description:
      "Бриллиантовая огранка была создана с одной исключительной целью — превратить свет в огонь. Каждый камень нашей коллекции выбирается за то, как он оживает в движении и раскрывает новые вспышки блеска при каждом повороте.",
    since: "LIDYA · С 1989 ГОДА",
    statementEyebrow: "Искусство света",
    statementBefore: "Создано, чтобы ловить свет.",
    statementAccent: "Создано, чтобы сохранять его.",
    imageAlt:
      "Коллекция украшений LIDYA с бриллиантами на ткани цвета шампанского и натуральном камне",
  },

  nl: {
    eyebrow: "Briljanten",
    title1: "Waar licht",
    title2: "sieraad wordt",
    description:
      "De briljantslijpvorm werd ontwikkeld met één uitzonderlijk doel — licht omzetten in vuur. Elke steen in onze collectie wordt gekozen om de manier waarop hij tot leven komt in beweging en bij iedere draai nieuwe flitsen van schittering laat zien.",
    since: "LIDYA · SINDS 1989",
    statementEyebrow: "De kunst van licht",
    statementBefore: "Gemaakt om het licht te vangen.",
    statementAccent: "Ontworpen om het vast te houden.",
    imageAlt:
      "LIDYA collectie met briljantgeslepen diamanten op champagnekleurige stof en natuursteen",
  },

  da: {
    eyebrow: "Brillanter",
    title1: "Hvor lys",
    title2: "bliver til smykker",
    description:
      "Brillantslibningen blev skabt med ét ekstraordinært formål — at forvandle lys til ild. Hver sten i vores kollektion udvælges efter, hvordan den bliver levende i bevægelse og afslører nye glimt af brilliance ved hver bevægelse.",
    since: "LIDYA · SIDEN 1989",
    statementEyebrow: "Lysets kunst",
    statementBefore: "Skabt til at fange lyset.",
    statementAccent: "Designet til at bevare det.",
    imageAlt:
      "LIDYA brillantkollektion arrangeret på champagnefarvet stof og natursten",
  },

  fi: {
    eyebrow: "Briljantit",
    title1: "Kun valo",
    title2: "muuttuu koruksi",
    description:
      "Briljanttihionta luotiin yhtä poikkeuksellista tarkoitusta varten — muuttamaan valo tuleksi. Jokainen kokoelmamme kivi valitaan sen perusteella, kuinka se herää eloon liikkeessä ja paljastaa uusia valon välähdyksiä jokaisella liikkeellä.",
    since: "LIDYA · VUODESTA 1989",
    statementEyebrow: "Valon taide",
    statementBefore: "Luotu vangitsemaan valo.",
    statementAccent: "Suunniteltu säilyttämään se.",
    imageAlt:
      "LIDYA briljanttikorukokoelma samppanjanvärisellä kankaalla ja luonnonkivellä",
  },

  sv: {
    eyebrow: "Briljanter",
    title1: "Där ljus",
    title2: "blir till smycken",
    description:
      "Briljantslipningen skapades med ett enda extraordinärt syfte — att förvandla ljus till eld. Varje sten i vår kollektion väljs ut för hur den vaknar till liv i rörelse och avslöjar nya glimtar av briljans vid varje rörelse.",
    since: "LIDYA · SEDAN 1989",
    statementEyebrow: "Ljusets konst",
    statementBefore: "Skapad för att fånga ljuset.",
    statementAccent: "Formgiven för att bevara det.",
    imageAlt:
      "LIDYA briljantkollektion arrangerad på champagnefärgat tyg och natursten",
  },

  fr: {
    eyebrow: "Brillants",
    title1: "Quand la lumière",
    title2: "devient un bijou",
    description:
      "La taille brillant a été créée dans un but extraordinaire — transformer la lumière en feu. Chaque pierre de notre collection est sélectionnée pour la manière dont elle prend vie en mouvement et révèle de nouveaux éclats de lumière à chaque geste.",
    since: "LIDYA · DEPUIS 1989",
    statementEyebrow: "L’art de la lumière",
    statementBefore: "Créé pour capter la lumière.",
    statementAccent: "Conçu pour la préserver.",
    imageAlt:
      "Collection de bijoux LIDYA ornés de brillants disposée sur un tissu couleur champagne et une pierre naturelle",
  },

  it: {
    eyebrow: "Brillanti",
    title1: "Dove la luce",
    title2: "diventa gioiello",
    description:
      "Il taglio brillante è stato creato per uno scopo straordinario — trasformare la luce in fuoco. Ogni pietra della nostra collezione viene scelta per il modo in cui prende vita nel movimento e rivela nuovi lampi di brillantezza a ogni gesto.",
    since: "LIDYA · DAL 1989",
    statementEyebrow: "L’arte della luce",
    statementBefore: "Creato per catturare la luce.",
    statementAccent: "Pensato per conservarla.",
    imageAlt:
      "Collezione di gioielli LIDYA con brillanti disposta su tessuto color champagne e pietra naturale",
  },

  es: {
    eyebrow: "Brillantes",
    title1: "Donde la luz",
    title2: "se convierte en joya",
    description:
      "La talla brillante fue creada con un propósito extraordinario — transformar la luz en fuego. Cada piedra de nuestra colección se selecciona por la forma en que cobra vida con el movimiento y revela nuevos destellos de brillo en cada gesto.",
    since: "LIDYA · DESDE 1989",
    statementEyebrow: "El arte de la luz",
    statementBefore: "Creado para atrapar la luz.",
    statementAccent: "Diseñado para conservarla.",
    imageAlt:
      "Colección de joyas LIDYA con brillantes dispuesta sobre tela color champán y piedra natural",
  },
};

export default function BrilliantsCinematicHero() {
  const { locale } = useLanguage();
  const copy = BRILLIANTS_HERO_COPY[locale];

  const [loaded, setLoaded] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaded(true);
    }, 80);

    const handleScroll = () => {
      const hero = document.getElementById(
        "brilliants-cinematic-hero"
      );

      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const height = Math.max(hero.offsetHeight, 1);

      const progress = Math.max(
        0,
        Math.min(1, -rect.top / height)
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

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

    setMouse({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  };

  const handleMouseLeave = () => {
    setMouse({
      x: 0,
      y: 0,
    });
  };

  const imageX = mouse.x * 24;
  const imageY =
    mouse.y * 16 - scrollProgress * 32;

  const imageScale =
    1.07 + scrollProgress * 0.02;

  const contentX = mouse.x * -5;
  const contentY =
    mouse.y * -3 - scrollProgress * 7;

  const lightX = 52 + mouse.x * 14;
  const lightY = 40 + mouse.y * 10;

  return (
    <section
      id="brilliants-cinematic-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44"
    >
      {/* CINEMATIC BACKGROUND */}
      <div
        className="absolute inset-[-6%] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `
            translate3d(${imageX}px, ${imageY}px, 0)
            scale(${imageScale})
          `,
        }}
      >
        <Image
          src="/images/brilliants/hero-brilliants.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* READABILITY OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/92 via-[#F7F3EB]/38 to-transparent" />

      {/* LOWER SOFT VEIL */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F7F3EB]/18 via-transparent to-[#F7F3EB]/6" />

      {/* MOVING DIAMOND LIGHT */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `
            radial-gradient(
              circle at ${lightX}% ${lightY}%,
              rgba(255,255,255,0.28) 0%,
              rgba(232,238,246,0.13) 17%,
              rgba(200,169,106,0.055) 31%,
              rgba(255,255,255,0) 53%
            )
          `,
        }}
      />

      {/* SUBTLE VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(65,54,46,0.08)_100%)]" />

      {/* CONTENT */}
      <div
        className="relative mx-auto max-w-[1440px] px-6 transition-transform duration-300 ease-out will-change-transform md:px-10 lg:px-16 xl:px-20"
        style={{
          transform: `
            translate3d(
              ${contentX}px,
              ${contentY}px,
              0
            )
          `,
        }}
      >
        {/* TOP HERO CONTENT */}
        <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
          {/* LEFT */}
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
                <GemClusterIcon />
              </span>

              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                {copy.eyebrow}
              </span>
            </div>

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
                  className={`block transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30%] opacity-0"
                  }`}
                  style={{
                    transitionDelay: "390ms",
                  }}
                >
                  {copy.title2}
                </span>
              </span>
            </h1>
          </div>

          {/* RIGHT */}
          <div
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:col-span-4 lg:pb-2 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: "560ms",
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
            transitionDelay: "740ms",
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