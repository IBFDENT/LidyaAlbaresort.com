"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type SportLandingCopy = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    since: string;
    statementBefore: string;
    statementAccent: string;
  };

  selection: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;

    mensTitle: string;
    mensDescription: string;
    mensCta: string;

    womensTitle: string;
    womensDescription: string;
    womensCta: string;
  };
};

const SPORT_LANDING_COPY: Record<Locale, SportLandingCopy> = {
  en: {
    hero: {
      eyebrow: "Sport Watches",
      title: "Designed for",
      titleAccent: "movement and character.",
      description:
        "Discover sport watches created around precision, comfort and confident design. From performance-driven men's models to refined women's timepieces, every watch brings function and individuality together.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Performance gives time purpose.",
      statementAccent: "Character makes it personal.",
    },

    selection: {
      eyebrow: "Explore Sport Watches",
      title: "Two expressions of",
      titleAccent: "performance.",
      description:
        "Discover sport watches selected around different proportions, materials and styles. Choose the collection that feels naturally yours.",

      mensTitle: "Men's Sport Watches",
      mensDescription:
        "Confident proportions, technical character and strong everyday performance.",
      mensCta: "Discover Men's Sport Watches",

      womensTitle: "Women's Sport Watches",
      womensDescription:
        "Dynamic design, refined proportions and an elegant approach to performance.",
      womensCta: "Discover Women's Sport Watches",
    },
  },

  de: {
    hero: {
      eyebrow: "Sportuhren",
      title: "Geschaffen für",
      titleAccent: "Bewegung und Charakter.",
      description:
        "Entdecken Sie Sportuhren, die Präzision, Komfort und selbstbewusstes Design verbinden. Von leistungsorientierten Herrenuhren bis zu raffinierten Damenuhren.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Leistung gibt der Zeit einen Zweck.",
      statementAccent: "Charakter macht sie persönlich.",
    },

    selection: {
      eyebrow: "Sportuhren entdecken",
      title: "Zwei Ausdrucksformen von",
      titleAccent: "Performance.",
      description:
        "Entdecken Sie Sportuhren mit unterschiedlichen Proportionen, Materialien und Stilrichtungen.",

      mensTitle: "Sportuhren für Herren",
      mensDescription:
        "Selbstbewusste Proportionen, technische Präsenz und starke Performance.",
      mensCta: "Herrenuhren entdecken",

      womensTitle: "Sportuhren für Damen",
      womensDescription:
        "Dynamisches Design, raffinierte Proportionen und elegante Performance.",
      womensCta: "Damenuhren entdecken",
    },
  },

  tr: {
    hero: {
      eyebrow: "Spor Saatler",
      title: "Hareket için",
      titleAccent: "tasarlandı, karakterle tanımlandı.",
      description:
        "Hassasiyet, konfor ve güçlü tasarım etrafında oluşturulan spor saatleri keşfedin. Erkek ve kadın koleksiyonları performans ile kişisel stili bir araya getirir.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Performans zamana amaç verir.",
      statementAccent: "Karakter onu kişisel kılar.",
    },

    selection: {
      eyebrow: "Spor Saatleri Keşfedin",
      title: "Performansın",
      titleAccent: "iki farklı yorumu.",
      description:
        "Farklı oranlar, malzemeler ve tasarım karakterleriyle seçilen spor saatleri keşfedin.",

      mensTitle: "Erkek Spor Saatleri",
      mensDescription:
        "Güçlü oranlar, teknik karakter ve günlük performans.",
      mensCta: "Erkek Spor Saatlerini Keşfet",

      womensTitle: "Kadın Spor Saatleri",
      womensDescription:
        "Dinamik tasarım, zarif oranlar ve rafine performans.",
      womensCta: "Kadın Spor Saatlerini Keşfet",
    },
  },

  sk: {
    hero: {
      eyebrow: "Športové hodinky",
      title: "Navrhnuté pre",
      titleAccent: "pohyb a charakter.",
      description:
        "Objavte športové hodinky vytvorené pre presnosť, pohodlie a sebavedomý dizajn. Od výkonnostne ladených pánskych modelov až po elegantnejšie dámske hodinky — každý model spája funkčnosť s osobitým charakterom.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Výkon dáva času účel.",
      statementAccent: "Charakter ho robí osobným.",
    },

    selection: {
      eyebrow: "Objavte športové hodinky",
      title: "Dva výrazy",
      titleAccent: "výkonu.",
      description:
        "Vyberte si športové hodinky podľa proporcií, materiálu, charakteru a spôsobu, akým ich chcete nosiť.",

      mensTitle: "Pánske športové hodinky",
      mensDescription:
        "Sebavedomé proporcie, technický charakter a silný každodenný výkon.",
      mensCta: "Objaviť pánske športové hodinky",

      womensTitle: "Dámske športové hodinky",
      womensDescription:
        "Dynamický dizajn, elegantnejšie proporcie a rafinovaný pohľad na výkon.",
      womensCta: "Objaviť dámske športové hodinky",
    },
  },

  cs: {
    hero: {
      eyebrow: "Sportovní hodinky",
      title: "Navrženy pro",
      titleAccent: "pohyb a charakter.",
      description:
        "Objevte sportovní hodinky vytvořené kolem přesnosti, pohodlí a sebevědomého designu. Od výkonnostních pánských modelů po elegantnější dámské hodinky.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Výkon dává času účel.",
      statementAccent: "Charakter ho činí osobním.",
    },

    selection: {
      eyebrow: "Objevte sportovní hodinky",
      title: "Dva výrazy",
      titleAccent: "výkonu.",
      description:
        "Vyberte si sportovní hodinky podle proporcí, materiálu a osobního charakteru.",

      mensTitle: "Pánské sportovní hodinky",
      mensDescription:
        "Sebevědomé proporce, technický charakter a každodenní výkon.",
      mensCta: "Objevit pánské sportovní hodinky",

      womensTitle: "Dámské sportovní hodinky",
      womensDescription:
        "Dynamický design, elegantní proporce a rafinovaný výkon.",
      womensCta: "Objevit dámské sportovní hodinky",
    },
  },

  hu: {
    hero: {
      eyebrow: "Sportórák",
      title: "Mozgásra",
      titleAccent: "tervezve, karakterrel.",
      description:
        "Fedezze fel a pontosság, kényelem és határozott design köré épülő sportórákat férfi és női kivitelben.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "A teljesítmény célt ad az időnek.",
      statementAccent: "A karakter személyessé teszi.",
    },

    selection: {
      eyebrow: "Sportórák",
      title: "A teljesítmény",
      titleAccent: "két arca.",
      description:
        "Válasszon eltérő arányok, anyagok és stílusok közül.",

      mensTitle: "Férfi sportórák",
      mensDescription:
        "Határozott arányok, technikai karakter és erős teljesítmény.",
      mensCta: "Férfi sportórák",

      womensTitle: "Női sportórák",
      womensDescription:
        "Dinamikus design, kifinomult arányok és elegáns teljesítmény.",
      womensCta: "Női sportórák",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki sportowe",
      title: "Stworzone do",
      titleAccent: "ruchu i charakteru.",
      description:
        "Odkryj zegarki sportowe stworzone wokół precyzji, komfortu i zdecydowanego designu.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Wydajność nadaje czasowi cel.",
      statementAccent: "Charakter czyni go osobistym.",
    },

    selection: {
      eyebrow: "Odkryj zegarki sportowe",
      title: "Dwa oblicza",
      titleAccent: "wydajności.",
      description:
        "Wybierz zegarki sportowe dopasowane do proporcji, materiałów i indywidualnego stylu.",

      mensTitle: "Męskie zegarki sportowe",
      mensDescription:
        "Wyraziste proporcje, techniczny charakter i codzienna wydajność.",
      mensCta: "Odkryj męskie zegarki",

      womensTitle: "Damskie zegarki sportowe",
      womensDescription:
        "Dynamiczny design, subtelniejsze proporcje i elegancka wydajność.",
      womensCta: "Odkryj damskie zegarki",
    },
  },

  ru: {
    hero: {
      eyebrow: "Спортивные часы",
      title: "Созданы для",
      titleAccent: "движения и характера.",
      description:
        "Откройте спортивные часы, созданные вокруг точности, комфорта и уверенного дизайна.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "Производительность придаёт времени цель.",
      statementAccent: "Характер делает его личным.",
    },

    selection: {
      eyebrow: "Спортивные часы",
      title: "Два выражения",
      titleAccent: "динамики.",
      description:
        "Выберите коллекцию с подходящими пропорциями, материалами и характером.",

      mensTitle: "Мужские спортивные часы",
      mensDescription:
        "Выразительные пропорции, технический характер и высокая функциональность.",
      mensCta: "Мужская коллекция",

      womensTitle: "Женские спортивные часы",
      womensDescription:
        "Динамичный дизайн, утончённые пропорции и элегантная функциональность.",
      womensCta: "Женская коллекция",
    },
  },

  nl: {
    hero: {
      eyebrow: "Sporthorloges",
      title: "Ontworpen voor",
      titleAccent: "beweging en karakter.",
      description:
        "Ontdek sporthorloges die precisie, comfort en krachtig design combineren.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Prestaties geven tijd een doel.",
      statementAccent: "Karakter maakt het persoonlijk.",
    },

    selection: {
      eyebrow: "Ontdek sporthorloges",
      title: "Twee vormen van",
      titleAccent: "performance.",
      description:
        "Kies uit verschillende proporties, materialen en stijlen.",

      mensTitle: "Sporthorloges voor heren",
      mensDescription:
        "Krachtige proporties, technisch karakter en dagelijkse prestaties.",
      mensCta: "Ontdek heren",

      womensTitle: "Sporthorloges voor dames",
      womensDescription:
        "Dynamisch design, verfijnde proporties en elegante prestaties.",
      womensCta: "Ontdek dames",
    },
  },

  da: {
    hero: {
      eyebrow: "Sportsure",
      title: "Designet til",
      titleAccent: "bevægelse og karakter.",
      description:
        "Oplev sportsure skabt omkring præcision, komfort og selvsikkert design.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Performance giver tiden formål.",
      statementAccent: "Karakter gør den personlig.",
    },

    selection: {
      eyebrow: "Oplev sportsure",
      title: "To udtryk for",
      titleAccent: "performance.",
      description:
        "Vælg mellem forskellige proportioner, materialer og udtryk.",

      mensTitle: "Sportsure til mænd",
      mensDescription:
        "Markante proportioner, teknisk karakter og stærk performance.",
      mensCta: "Oplev herreure",

      womensTitle: "Sportsure til kvinder",
      womensDescription:
        "Dynamisk design, raffinerede proportioner og elegant performance.",
      womensCta: "Oplev dameure",
    },
  },

  fi: {
    hero: {
      eyebrow: "Urheilukellot",
      title: "Suunniteltu",
      titleAccent: "liikkeeseen ja luonteeseen.",
      description:
        "Tutustu urheilukelloihin, joissa yhdistyvät tarkkuus, mukavuus ja itsevarma muotoilu.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Suorituskyky antaa ajalle tarkoituksen.",
      statementAccent: "Luonne tekee siitä henkilökohtaisen.",
    },

    selection: {
      eyebrow: "Tutustu urheilukelloihin",
      title: "Kaksi tapaa",
      titleAccent: "ilmentää suorituskykyä.",
      description:
        "Valitse mittasuhteiden, materiaalien ja tyylin mukaan.",

      mensTitle: "Miesten urheilukellot",
      mensDescription:
        "Vahvat mittasuhteet, tekninen luonne ja suorituskyky.",
      mensCta: "Tutustu miesten kelloihin",

      womensTitle: "Naisten urheilukellot",
      womensDescription:
        "Dynaaminen design, hienostuneet mittasuhteet ja elegantti suorituskyky.",
      womensCta: "Tutustu naisten kelloihin",
    },
  },

  sv: {
    hero: {
      eyebrow: "Sportklockor",
      title: "Designade för",
      titleAccent: "rörelse och karaktär.",
      description:
        "Upptäck sportklockor skapade kring precision, komfort och självsäker design.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Prestanda ger tiden syfte.",
      statementAccent: "Karaktär gör den personlig.",
    },

    selection: {
      eyebrow: "Upptäck sportklockor",
      title: "Två uttryck för",
      titleAccent: "prestanda.",
      description:
        "Välj mellan olika proportioner, material och uttryck.",

      mensTitle: "Sportklockor för män",
      mensDescription:
        "Självsäkra proportioner, teknisk karaktär och stark prestanda.",
      mensCta: "Upptäck herrklockor",

      womensTitle: "Sportklockor för kvinnor",
      womensDescription:
        "Dynamisk design, raffinerade proportioner och elegant prestanda.",
      womensCta: "Upptäck damklockor",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres sport",
      title: "Conçues pour",
      titleAccent: "le mouvement et le caractère.",
      description:
        "Découvrez des montres sport pensées autour de la précision, du confort et d'un design affirmé.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "La performance donne un sens au temps.",
      statementAccent: "Le caractère le rend personnel.",
    },

    selection: {
      eyebrow: "Découvrez les montres sport",
      title: "Deux expressions de",
      titleAccent: "la performance.",
      description:
        "Choisissez selon les proportions, les matériaux et le style.",

      mensTitle: "Montres sport homme",
      mensDescription:
        "Proportions affirmées, caractère technique et performance quotidienne.",
      mensCta: "Découvrir homme",

      womensTitle: "Montres sport femme",
      womensDescription:
        "Design dynamique, proportions raffinées et performance élégante.",
      womensCta: "Découvrir femme",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi sportivi",
      title: "Progettati per",
      titleAccent: "movimento e carattere.",
      description:
        "Scoprite orologi sportivi creati intorno a precisione, comfort e design deciso.",
      since: "LIDYA · DAL 1989",
      statementBefore: "La performance dà uno scopo al tempo.",
      statementAccent: "Il carattere lo rende personale.",
    },

    selection: {
      eyebrow: "Scoprite gli orologi sportivi",
      title: "Due espressioni della",
      titleAccent: "performance.",
      description:
        "Scegliete tra diverse proporzioni, materiali e stili.",

      mensTitle: "Orologi sportivi da uomo",
      mensDescription:
        "Proporzioni decise, carattere tecnico e prestazioni quotidiane.",
      mensCta: "Scopri uomo",

      womensTitle: "Orologi sportivi da donna",
      womensDescription:
        "Design dinamico, proporzioni raffinate e performance elegante.",
      womensCta: "Scopri donna",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes deportivos",
      title: "Diseñados para",
      titleAccent: "el movimiento y el carácter.",
      description:
        "Descubra relojes deportivos creados en torno a la precisión, la comodidad y un diseño seguro.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "El rendimiento da propósito al tiempo.",
      statementAccent: "El carácter lo hace personal.",
    },

    selection: {
      eyebrow: "Descubra relojes deportivos",
      title: "Dos expresiones del",
      titleAccent: "rendimiento.",
      description:
        "Elija entre diferentes proporciones, materiales y estilos.",

      mensTitle: "Relojes deportivos para hombre",
      mensDescription:
        "Proporciones firmes, carácter técnico y rendimiento diario.",
      mensCta: "Descubrir hombre",

      womensTitle: "Relojes deportivos para mujer",
      womensDescription:
        "Diseño dinámico, proporciones refinadas y rendimiento elegante.",
      womensCta: "Descubrir mujer",
    },
  },
};

function SportWatchIcon() {
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
        d="M24 24V15M24 24l7 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SportHero({
  copy,
}: {
  copy: SportLandingCopy["hero"];
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaded(true);
    }, 60);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      return;
    }

    let frame: number | null = null;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewport - rect.top) /
            Math.max(viewport + rect.height, 1)
        )
      );

      const translateY = (progress - 0.5) * 18;
      const scale = 1.045 + progress * 0.012;

      image.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
      `;

      frame = null;
    };

    const onScroll = () => {
      if (frame !== null) {
        return;
      }

      frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        min-h-[760px]
        items-end
        overflow-hidden
        bg-[#071018]
        pt-[100px]
        md:min-h-[860px]
        lg:min-h-[920px]
      "
    >
      <div
        ref={imageRef}
        className={`
          absolute
          inset-[-2%]
          will-change-transform
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            loaded
              ? "opacity-100 blur-0"
              : "opacity-0 blur-[2px]"
          }
        `}
        style={{
          transform: loaded
            ? "translate3d(0,0,0) scale(1.045)"
            : "translate3d(0,0,0) scale(1.08)",
        }}
      >
        <Image
          src="/images/watches/sport-category/sport-watch-hero.png"
          alt="LIDYA sport watches"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#04101A]/96
          via-[#07131D]/70
          to-[#07131D]/12
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#040A0F]/96
          via-[#07131D]/10
          to-[#07131D]/24
        "
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(213,176,95,0.08)_0%,transparent_48%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24 xl:px-20">
        <div className="max-w-[880px]">
          <div
            className={`
              flex
              items-center
              gap-4
              !text-[#D5B05F]
              transition-all
              duration-[1000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "120ms",
            }}
          >
            <span className="flex h-9 w-9 items-center justify-center md:h-10 md:w-10">
              <SportWatchIcon />
            </span>

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] md:text-[0.64rem]">
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[930px]
              font-display
              text-[3.15rem]
              leading-[0.94]
              tracking-[-0.04em]
              sm:text-[4rem]
              md:text-[5.35rem]
              lg:text-[6.25rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  !text-[#F8F4EC]
                  transition-all
                  duration-[1200ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[34%] opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "220ms",
                }}
              >
                {copy.title}
              </span>
            </span>

            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  italic
                  !text-[#D5B05F]
                  transition-all
                  duration-[1300ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[34%] opacity-0"
                  }
                `}
                style={{
                  transitionDelay: "330ms",
                }}
              >
                {copy.titleAccent}
              </span>
            </span>
          </h1>

          <div
            className={`
              mt-7
              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "500ms",
            }}
          >
            <p className="max-w-[680px] text-sm leading-7 !text-white/75 md:text-base">
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D5B05F]" />

              <span className="text-[0.54rem] font-semibold uppercase tracking-[0.23em] !text-white/55">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`
            mt-14
            border-t
            border-white/15
            pt-8
            transition-all
            duration-[1250ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:mt-20
            md:pt-10
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
          style={{
            transitionDelay: "680ms",
          }}
        >
          <p
            className="
              max-w-[1000px]
              font-display
              text-[1.8rem]
              italic
              leading-[1.08]
              !text-[#F8F4EC]
              md:text-4xl
              lg:text-5xl
            "
          >
            {copy.statementBefore}{" "}
            <span className="!text-[#D5B05F]">
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function SportWatchesContent() {
  const { locale } = useLanguage();

  const copy =
    SPORT_LANDING_COPY[locale] ??
    SPORT_LANDING_COPY.en;

  return (
    <>
      <Header />

      <main>
        <SportHero copy={copy.hero} />

        <section className="bg-[#F7F3EB] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-[820px] text-center">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[#A98242] md:text-[0.64rem]">
                {copy.selection.eyebrow}
              </span>

              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-0.03em] text-[#1B0B20] md:text-6xl">
                {copy.selection.title}{" "}
                <span className="italic text-[#A98242]">
                  {copy.selection.titleAccent}
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-[680px] text-sm leading-7 text-[#645E5A] md:text-base">
                {copy.selection.description}
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 lg:gap-8">
              <Link
                href="/watches/sport/mens"
                className="
                  group
                  relative
                  block
                  min-h-[520px]
                  overflow-hidden
                  bg-[#071018]
                  sm:min-h-[560px]
                  md:min-h-[600px]
                "
              >
                <Image
                  src="/images/watches/sport-category/sport-man/men-hero1.png"
                  alt={copy.selection.mensTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-[1600ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.045]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061018]/95 via-[#061018]/32 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                  <div className="mb-4 h-px w-12 bg-[#D5B05F]" />

                  <h3 className="font-display text-3xl !text-white md:text-4xl lg:text-[2.8rem]">
                    {copy.selection.mensTitle}
                  </h3>

                  <p className="mt-4 max-w-[480px] text-sm leading-7 !text-white/75">
                    {copy.selection.mensDescription}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#D5B05F]">
                    <span>{copy.selection.mensCta}</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/watches/sport/womens"
                className="
                  group
                  relative
                  block
                  min-h-[520px]
                  overflow-hidden
                  bg-[#191016]
                  sm:min-h-[560px]
                  md:min-h-[600px]
                "
              >
                <Image
                  src="/images/watches/sport-category/sport-woman/woman-hero.png"
                  alt={copy.selection.womensTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    object-[32%_center]
                    sm:object-[34%_center]
                    md:object-[32%_center]
                    lg:object-[34%_center]
                    xl:object-[36%_center]
                    transition-transform
                    duration-[1600ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.045]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#180C15]/95 via-[#180C15]/28 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                  <div className="mb-4 h-px w-12 bg-[#D5B05F]" />

                  <h3 className="font-display text-3xl !text-white md:text-4xl lg:text-[2.8rem]">
                    {copy.selection.womensTitle}
                  </h3>

                  <p className="mt-4 max-w-[480px] text-sm leading-7 !text-white/75">
                    {copy.selection.womensDescription}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#D5B05F]">
                    <span>{copy.selection.womensCta}</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}