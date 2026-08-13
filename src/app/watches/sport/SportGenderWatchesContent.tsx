"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type Gender = "mens" | "womens";

type GenderCopy = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    since: string;
    statementBefore: string;
    statementAccent: string;
    imageAlt: string;
  };

  gallery: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    itemLabel: string;
    closingText: string;
    closingAccent: string;
  };

  craft: {
    eyebrow: string;
    title: string;
    description: string;
    closingText: string;
    closingAccent: string;
    since: string;

    points: {
      title: string;
      description: string;
    }[];
  };

  cta: {
    title: string;
    sub: string;
  };
};

type SportGenderCopy = {
  mens: GenderCopy;
  womens: GenderCopy;
};

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const SPORT_GENDER_COPY: Record<
  Locale,
  SportGenderCopy
> = {
  /* =======================================================
     ENGLISH
     ======================================================= */

  en: {
    mens: {
      hero: {
        eyebrow: "Men's Sport Watches",
        title: "Performance with",
        titleAccent:
          "confidence and character.",
        description:
          "Discover men's sport watches selected for precision, durability, strong proportions and confident everyday performance.",
        since: "LIDYA · SINCE 1989",
        statementBefore:
          "Built for movement.",
        statementAccent:
          "Chosen for character.",
        imageAlt:
          "Luxury men's sport watches by LIDYA",
      },

      gallery: {
        eyebrow:
          "Men's Sport Watch Collection",
        title:
          "Performance selected for",
        titleAccent:
          "individual character.",
        description:
          "From technical chronographs to bold contemporary designs, discover men's sport watches balancing function, comfort and presence.",
        itemLabel:
          "Men's Sport Watches",
        closingText:
          "Precision drives performance.",
        closingAccent:
          "Character defines the wearer.",
      },

      craft: {
        eyebrow:
          "The Character of Performance",
        title:
          "A sport watch is defined by more than technical ability",
        description:
          "Proportion, comfort, materials and legibility work together to create a watch ready for movement and everyday life.",
        closingText:
          "Performance follows function.",
        closingAccent:
          "Design makes it personal.",
        since: "LIDYA · SINCE 1989",

        points: [
          {
            title: "Proportion",
            description:
              "Case dimensions and bracelet balance create confidence without sacrificing comfort.",
          },
          {
            title: "Materials",
            description:
              "Steel, ceramic, rubber and technical materials support durability and modern character.",
          },
          {
            title: "Precision",
            description:
              "Clear displays and dependable engineering support confident timekeeping.",
          },
          {
            title: "Performance",
            description:
              "Every detail contributes to comfort, readability and daily reliability.",
          },
        ],
      },

      cta: {
        title:
          "Discover men's sport watches on the wrist",
        sub:
          "Visit LIDYA and compare proportions, materials and performance in person.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Women's Sport Watches",
        title: "Performance with",
        titleAccent:
          "energy and elegance.",
        description:
          "Discover women's sport watches where dynamic design, comfortable proportions and refined details meet everyday performance.",
        since: "LIDYA · SINCE 1989",
        statementBefore:
          "Made for movement.",
        statementAccent:
          "Refined for individuality.",
        imageAlt:
          "Luxury women's sport watches by LIDYA",
      },

      gallery: {
        eyebrow:
          "Women's Sport Watch Collection",
        title:
          "Dynamic watches selected for",
        titleAccent:
          "individual expression.",
        description:
          "Explore women's sport watches combining confident colour, refined proportions, comfort and modern performance.",
        itemLabel:
          "Women's Sport Watches",
        closingText:
          "Movement creates energy.",
        closingAccent:
          "Style makes it personal.",
      },

      craft: {
        eyebrow:
          "Performance with Elegance",
        title:
          "A women's sport watch balances movement and refinement",
        description:
          "Comfort, proportion, colour, materials and clarity come together in watches designed for active everyday life.",
        closingText:
          "Function creates confidence.",
        closingAccent:
          "Design creates identity.",
        since: "LIDYA · SINCE 1989",

        points: [
          {
            title: "Proportion",
            description:
              "Balanced dimensions create a confident yet comfortable presence on the wrist.",
          },
          {
            title: "Materials",
            description:
              "Steel, ceramic, rubber and refined finishes give each watch its individual character.",
          },
          {
            title: "Colour",
            description:
              "Dial, strap and case colours introduce energy while maintaining visual harmony.",
          },
          {
            title: "Comfort",
            description:
              "The right balance of weight, shape and materials supports movement throughout the day.",
          },
        ],
      },

      cta: {
        title:
          "Discover women's sport watches in person",
        sub:
          "Visit LIDYA and experience the proportions, colours and details that feel naturally yours.",
      },
    },
  },

  /* =======================================================
     GERMAN
     ======================================================= */

  de: {
    mens: {
      hero: {
        eyebrow:
          "Sportuhren für Herren",
        title: "Performance mit",
        titleAccent:
          "Selbstbewusstsein und Charakter.",
        description:
          "Entdecken Sie Herrensportuhren, ausgewählt für Präzision, Haltbarkeit, starke Proportionen und zuverlässige Performance.",
        since: "LIDYA · SEIT 1989",
        statementBefore:
          "Für Bewegung geschaffen.",
        statementAccent:
          "Für Charakter ausgewählt.",
        imageAlt:
          "Luxuriöse Herrensportuhren von LIDYA",
      },

      gallery: {
        eyebrow:
          "Herrensportuhren",
        title:
          "Performance ausgewählt für",
        titleAccent:
          "individuellen Charakter.",
        description:
          "Entdecken Sie sportliche Herrenuhren zwischen Technik, Komfort und Präsenz.",
        itemLabel:
          "Herrensportuhren",
        closingText:
          "Präzision treibt Leistung an.",
        closingAccent:
          "Charakter definiert den Träger.",
      },

      craft: {
        eyebrow:
          "Der Charakter der Performance",
        title:
          "Eine Sportuhr ist mehr als technische Leistung",
        description:
          "Proportion, Komfort, Materialien und Ablesbarkeit bestimmen gemeinsam ihre Qualität.",
        closingText:
          "Performance folgt der Funktion.",
        closingAccent:
          "Design macht sie persönlich.",
        since: "LIDYA · SEIT 1989",

        points: [
          {
            title: "Proportion",
            description:
              "Gehäusegröße und Armbandbalance verbinden Präsenz und Komfort.",
          },
          {
            title: "Materialien",
            description:
              "Stahl, Keramik, Kautschuk und technische Materialien schaffen Robustheit.",
          },
          {
            title: "Präzision",
            description:
              "Klare Anzeigen und zuverlässige Technik unterstützen präzise Zeitmessung.",
          },
          {
            title: "Performance",
            description:
              "Jedes Detail trägt zu Komfort, Ablesbarkeit und Zuverlässigkeit bei.",
          },
        ],
      },

      cta: {
        title:
          "Herrensportuhren am Handgelenk entdecken",
        sub:
          "Besuchen Sie LIDYA und vergleichen Sie Proportionen und Materialien persönlich.",
      },
    },

    womens: {
      hero: {
        eyebrow:
          "Sportuhren für Damen",
        title: "Performance mit",
        titleAccent:
          "Energie und Eleganz.",
        description:
          "Entdecken Sie Damensportuhren, in denen dynamisches Design und raffinierte Proportionen zusammentreffen.",
        since: "LIDYA · SEIT 1989",
        statementBefore:
          "Für Bewegung geschaffen.",
        statementAccent:
          "Für Individualität verfeinert.",
        imageAlt:
          "Luxuriöse Damensportuhren von LIDYA",
      },

      gallery: {
        eyebrow:
          "Damensportuhren",
        title:
          "Dynamische Uhren für",
        titleAccent:
          "individuellen Ausdruck.",
        description:
          "Entdecken Sie Damensportuhren mit Farbe, Komfort und moderner Performance.",
        itemLabel:
          "Damensportuhren",
        closingText:
          "Bewegung schafft Energie.",
        closingAccent:
          "Stil macht sie persönlich.",
      },

      craft: {
        eyebrow:
          "Performance mit Eleganz",
        title:
          "Eine Damensportuhr verbindet Bewegung und Raffinesse",
        description:
          "Komfort, Proportion, Farbe und Materialien bestimmen ihren Charakter.",
        closingText:
          "Funktion schafft Vertrauen.",
        closingAccent:
          "Design schafft Identität.",
        since: "LIDYA · SEIT 1989",

        points: [
          {
            title: "Proportion",
            description:
              "Ausgewogene Dimensionen verbinden Präsenz und Komfort.",
          },
          {
            title: "Materialien",
            description:
              "Stahl, Keramik und technische Materialien schaffen individuellen Charakter.",
          },
          {
            title: "Farbe",
            description:
              "Zifferblatt, Band und Gehäuse bringen Energie in das Design.",
          },
          {
            title: "Komfort",
            description:
              "Gewicht, Form und Material unterstützen natürliche Bewegung.",
          },
        ],
      },

      cta: {
        title:
          "Damensportuhren persönlich entdecken",
        sub:
          "Besuchen Sie LIDYA und erleben Sie Farben, Proportionen und Details am Handgelenk.",
      },
    },
  },

  /* =======================================================
     SLOVAK
     ======================================================= */

  sk: {
    mens: {
      hero: {
        eyebrow:
          "Pánske športové hodinky",
        title: "Výkon so",
        titleAccent:
          "sebavedomím a charakterom.",
        description:
          "Objavte pánske športové hodinky vybrané pre presnosť, odolnosť, výrazné proporcie a sebavedomý každodenný výkon.",
        since:
          "LIDYA · OD ROKU 1989",
        statementBefore:
          "Vytvorené pre pohyb.",
        statementAccent:
          "Vybrané pre charakter.",
        imageAlt:
          "Luxusné pánske športové hodinky LIDYA",
      },

      gallery: {
        eyebrow:
          "Kolekcia pánskych športových hodiniek",
        title:
          "Výkon vybraný pre",
        titleAccent:
          "osobitý charakter.",
        description:
          "Od technických chronografov po výrazné moderné modely — objavte športové hodinky spájajúce funkčnosť, pohodlie a prítomnosť.",
        itemLabel:
          "Pánske športové hodinky",
        closingText:
          "Presnosť poháňa výkon.",
        closingAccent:
          "Charakter definuje nositeľa.",
      },

      craft: {
        eyebrow:
          "Charakter výkonu",
        title:
          "Športové hodinky neurčuje iba technická schopnosť",
        description:
          "Proporcie, pohodlie, materiály a čitateľnosť vytvárajú hodinky pripravené na pohyb aj každodenný život.",
        closingText:
          "Výkon nasleduje funkciu.",
        closingAccent:
          "Dizajn ho robí osobným.",
        since:
          "LIDYA · OD ROKU 1989",

        points: [
          {
            title: "Proporcie",
            description:
              "Rozmery puzdra a vyváženie náramku vytvárajú sebavedomý vzhľad bez straty pohodlia.",
          },
          {
            title: "Materiály",
            description:
              "Oceľ, keramika, kaučuk a technické materiály podporujú odolnosť a moderný charakter.",
          },
          {
            title: "Presnosť",
            description:
              "Čitateľný ciferník a spoľahlivá technika podporujú presné meranie času.",
          },
          {
            title: "Výkon",
            description:
              "Každý detail prispieva k pohodliu, čitateľnosti a každodennej spoľahlivosti.",
          },
        ],
      },

      cta: {
        title:
          "Objavte pánske športové hodinky na zápästí",
        sub:
          "Navštívte LIDYA a osobne porovnajte proporcie, materiály a charakter jednotlivých modelov.",
      },
    },

    womens: {
      hero: {
        eyebrow:
          "Dámske športové hodinky",
        title: "Výkon s",
        titleAccent:
          "energiou a eleganciou.",
        description:
          "Objavte dámske športové hodinky, v ktorých sa dynamický dizajn, pohodlné proporcie a rafinované detaily stretávajú s každodenným výkonom.",
        since:
          "LIDYA · OD ROKU 1989",
        statementBefore:
          "Vytvorené pre pohyb.",
        statementAccent:
          "Zdokonalené pre individualitu.",
        imageAlt:
          "Luxusné dámske športové hodinky LIDYA",
      },

      gallery: {
        eyebrow:
          "Kolekcia dámskych športových hodiniek",
        title:
          "Dynamické hodinky vybrané pre",
        titleAccent:
          "osobitý výraz.",
        description:
          "Objavte dámske športové hodinky spájajúce výrazné farby, rafinované proporcie, pohodlie a moderný výkon.",
        itemLabel:
          "Dámske športové hodinky",
        closingText:
          "Pohyb vytvára energiu.",
        closingAccent:
          "Štýl ju robí osobnou.",
      },

      craft: {
        eyebrow:
          "Výkon s eleganciou",
        title:
          "Dámske športové hodinky spájajú pohyb a rafinovanosť",
        description:
          "Pohodlie, proporcie, farba, materiály a čitateľnosť sa spájajú v hodinkách navrhnutých pre aktívny každodenný život.",
        closingText:
          "Funkcia vytvára sebavedomie.",
        closingAccent:
          "Dizajn vytvára identitu.",
        since:
          "LIDYA · OD ROKU 1989",

        points: [
          {
            title: "Proporcie",
            description:
              "Vyvážené rozmery vytvárajú sebavedomú, ale pohodlnú prítomnosť na zápästí.",
          },
          {
            title: "Materiály",
            description:
              "Oceľ, keramika, kaučuk a rafinované povrchy dávajú každému modelu vlastný charakter.",
          },
          {
            title: "Farba",
            description:
              "Farba ciferníka, remienka a puzdra prináša energiu pri zachovaní vizuálnej harmónie.",
          },
          {
            title: "Pohodlie",
            description:
              "Správna rovnováha hmotnosti, tvaru a materiálu podporuje prirodzený pohyb počas celého dňa.",
          },
        ],
      },

      cta: {
        title:
          "Objavte dámske športové hodinky osobne",
        sub:
          "Navštívte LIDYA a spoznajte proporcie, farby a detaily, ktoré vám budú prirodzene patriť.",
      },
    },
  },

  /* =======================================================
     TURKISH
     ======================================================= */

  tr: {
    mens: {
      hero: {
        eyebrow:
          "Erkek Spor Saatleri",
        title: "Güçlü",
        titleAccent:
          "performans ve karakter.",
        description:
          "Hassasiyet, dayanıklılık ve güçlü oranlarla seçilen erkek spor saatlerini keşfedin.",
        since:
          "LIDYA · 1989'DAN BERİ",
        statementBefore:
          "Hareket için üretildi.",
        statementAccent:
          "Karakter için seçildi.",
        imageAlt:
          "LIDYA erkek spor saatleri",
      },

      gallery: {
        eyebrow:
          "Erkek Spor Saat Koleksiyonu",
        title: "Performans",
        titleAccent:
          "kişisel karakterle buluşuyor.",
        description:
          "Teknik kronograflardan güçlü modern tasarımlara kadar spor saatleri keşfedin.",
        itemLabel:
          "Erkek Spor Saatleri",
        closingText:
          "Hassasiyet performansı yönlendirir.",
        closingAccent:
          "Karakter kullanıcıyı tanımlar.",
      },

      craft: {
        eyebrow:
          "Performansın Karakteri",
        title:
          "Bir spor saatini yalnızca teknik özellikleri tanımlamaz",
        description:
          "Oranlar, konfor, malzemeler ve okunabilirlik birlikte gerçek performansı oluşturur.",
        closingText:
          "Performans işlevi izler.",
        closingAccent:
          "Tasarım onu kişisel kılar.",
        since:
          "LIDYA · 1989'DAN BERİ",

        points: [
          {
            title: "Oran",
            description:
              "Kasa ve bilezik dengesi konfor ve güçlü bir duruş yaratır.",
          },
          {
            title: "Malzemeler",
            description:
              "Çelik, seramik ve teknik malzemeler dayanıklılık sağlar.",
          },
          {
            title: "Hassasiyet",
            description:
              "Net kadran ve güvenilir mekanizma zamanı doğru ölçer.",
          },
          {
            title: "Performans",
            description:
              "Her detay günlük kullanım ve rahatlığı destekler.",
          },
        ],
      },

      cta: {
        title:
          "Erkek spor saatlerini bilekte keşfedin",
        sub:
          "LIDYA'yı ziyaret ederek modelleri yakından deneyimleyin.",
      },
    },

    womens: {
      hero: {
        eyebrow:
          "Kadın Spor Saatleri",
        title: "Enerji ve",
        titleAccent:
          "zarafetle performans.",
        description:
          "Dinamik tasarım, konfor ve rafine detayları bir araya getiren kadın spor saatlerini keşfedin.",
        since:
          "LIDYA · 1989'DAN BERİ",
        statementBefore:
          "Hareket için üretildi.",
        statementAccent:
          "Kişisellik için rafine edildi.",
        imageAlt:
          "LIDYA kadın spor saatleri",
      },

      gallery: {
        eyebrow:
          "Kadın Spor Saat Koleksiyonu",
        title:
          "Dinamik saatler",
        titleAccent:
          "kişisel ifade için.",
        description:
          "Renk, konfor ve modern performansı birleştiren kadın spor saatlerini keşfedin.",
        itemLabel:
          "Kadın Spor Saatleri",
        closingText:
          "Hareket enerji yaratır.",
        closingAccent:
          "Stil onu kişisel kılar.",
      },

      craft: {
        eyebrow:
          "Zarif Performans",
        title:
          "Kadın spor saatleri hareket ve zarafeti dengeler",
        description:
          "Konfor, oran, renk ve malzeme aktif günlük yaşam için bir araya gelir.",
        closingText:
          "İşlev güven verir.",
        closingAccent:
          "Tasarım kimlik yaratır.",
        since:
          "LIDYA · 1989'DAN BERİ",

        points: [
          {
            title: "Oran",
            description:
              "Dengeli ölçüler rahat ve güçlü bir duruş sağlar.",
          },
          {
            title: "Malzemeler",
            description:
              "Çelik, seramik ve teknik malzemeler özgün karakter yaratır.",
          },
          {
            title: "Renk",
            description:
              "Kadran ve kasa renkleri tasarıma enerji katar.",
          },
          {
            title: "Konfor",
            description:
              "Ağırlık ve form gün boyu doğal hareketi destekler.",
          },
        ],
      },

      cta: {
        title:
          "Kadın spor saatlerini yakından keşfedin",
        sub:
          "LIDYA'yı ziyaret edin ve size uygun renk ve oranları bulun.",
      },
    },
  },

  /*
   * Tieto jazyky momentálne používajú anglickú
   * športovú copy ako bezpečný fallback nižšie.
   */

  cs: {} as SportGenderCopy,
  hu: {} as SportGenderCopy,
  pl: {} as SportGenderCopy,
  ru: {} as SportGenderCopy,
  nl: {} as SportGenderCopy,
  da: {} as SportGenderCopy,
  fi: {} as SportGenderCopy,
  sv: {} as SportGenderCopy,
  fr: {} as SportGenderCopy,
  it: {} as SportGenderCopy,
  es: {} as SportGenderCopy,
};

/* =========================================================
   LANGUAGE FALLBACKS
   ========================================================= */

const FALLBACK_LOCALES: Locale[] = [
  "cs",
  "hu",
  "pl",
  "ru",
  "nl",
  "da",
  "fi",
  "sv",
  "fr",
  "it",
  "es",
];

FALLBACK_LOCALES.forEach((locale) => {
  SPORT_GENDER_COPY[locale] =
    SPORT_GENDER_COPY.en;
});

/* =========================================================
   GALLERY IMAGES
   ========================================================= */

const MEN_IMAGES = Array.from(
  {
    length: 10,
  },
  (_, index) =>
    `/images/watches/sport-category/sport-man/sport${
      index + 1
    }.png`
);

const WOMEN_IMAGES = Array.from(
  {
    length: 10,
  },
  (_, index) =>
    `/images/watches/sport-category/sport-woman/sport-w${
      index + 1
    }.png`
);

/* =========================================================
   GALLERY CAPTIONS
   ========================================================= */

const MEN_CAPTIONS = [
  "Performance Chronograph",
  "Technical Black",
  "Precision Sport",
  "Steel Performance",
  "Dynamic Dial",
  "Refined Sport",
  "Technical Presence",
  "Active Character",
  "Bold Performance",
  "Sport Signature",
];

const WOMEN_CAPTIONS = [
  "Active Elegance",
  "Sport Colour",
  "Refined Performance",
  "Dynamic Expression",
  "Contemporary Sport",
  "Elegant Precision",
  "Warm Sport",
  "Bold Colour",
  "Light Performance",
  "Sport Signature",
];

/* =========================================================
   SPORT ICON
   ========================================================= */

function SportIcon() {
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

/* =========================================================
   SPORT GENDER HERO
   ========================================================= */

function SportGenderHero({
  copy,
  gender,
}: {
  copy: GenderCopy["hero"];
  gender: Gender;
}) {
  const [loaded, setLoaded] =
    useState(false);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const imageRef =
    useRef<HTMLDivElement | null>(null);

  /* =======================================================
     ENTRANCE ANIMATION
     ======================================================= */

  useEffect(() => {
    const timer =
      window.setTimeout(() => {
        setLoaded(true);
      }, 60);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /* =======================================================
     SUBTLE HERO PARALLAX
     ======================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    const image =
      imageRef.current;

    if (!section || !image) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    let frame: number | null =
      null;

    const update = () => {
      const rect =
        section.getBoundingClientRect();

      const viewport =
        window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewport - rect.top) /
            Math.max(
              viewport + rect.height,
              1
            )
        )
      );

      const translateY =
        (progress - 0.5) * 12;

      const scale =
        1.035 + progress * 0.009;

      image.style.transform = `
        translate3d(
          0,
          ${translateY}px,
          0
        )
        scale(${scale})
      `;

      frame = null;
    };

    const onScroll = () => {
      if (frame !== null) {
        return;
      }

      frame =
        requestAnimationFrame(
          update
        );
    };

    update();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const heroImage =
    gender === "mens"
      ? "/images/watches/sport-category/sport-man/men-hero1.png"
      : "/images/watches/sport-category/sport-woman/woman-hero.png";

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
        pt-[96px]
        md:min-h-[840px]
        lg:min-h-[900px]
      "
    >
      {/* =================================================
          HERO IMAGE
          ================================================= */}

      <div
        ref={imageRef}
        className={`
          absolute
          inset-[-1.5%]
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
            ? "translate3d(0,0,0) scale(1.035)"
            : "translate3d(0,0,0) scale(1.065)",
        }}
      >
        <Image
          src={heroImage}
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className={
            gender === "mens"
              ? `
                  object-cover
                  object-[62%_50%]
                  sm:object-[61%_50%]
                  md:object-[60%_50%]
                  lg:object-[58%_50%]
                  xl:object-center
                `
              : `
                  object-cover
                  object-[61%_50%]
                  sm:object-[60%_50%]
                  md:object-[59%_50%]
                  lg:object-[58%_50%]
                  xl:object-center
                `
          }
        />
      </div>

      {/* =================================================
          COPY READABILITY
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(5,12,18,0.94)_0%,rgba(5,12,18,0.82)_22%,rgba(5,12,18,0.55)_43%,rgba(5,12,18,0.18)_68%,rgba(5,12,18,0.02)_100%)]
        "
      />

      {/* =================================================
          BOTTOM CINEMATIC DEPTH
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(0deg,rgba(3,8,12,0.88)_0%,rgba(3,8,12,0.38)_23%,rgba(3,8,12,0.07)_48%,transparent_70%)]
        "
      />

      {/* =================================================
          HEADER READABILITY
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-52
          bg-[linear-gradient(180deg,rgba(3,9,14,0.52)_0%,rgba(3,9,14,0.14)_52%,transparent_100%)]
        "
      />

      {/* =================================================
          WARM LIDYA GOLD GLOW
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_40%,rgba(213,176,95,0.095)_0%,rgba(213,176,95,0.025)_30%,transparent_57%)]
        "
      />

      {/* =================================================
          SUBTLE COOL SPORT TONE
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_42%_38%,rgba(44,79,101,0.10)_0%,rgba(44,79,101,0.025)_34%,transparent_60%)]
        "
      />

      {/* =================================================
          CONTENT
          ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          pb-14
          md:px-10
          md:pb-16
          lg:px-16
          lg:pb-20
          xl:px-20
        "
      >
        <div className="max-w-[780px]">
          {/* ===============================================
              EYEBROW
              =============================================== */}

          <div
            className={`
              flex
              items-center
              gap-4
              text-[#D8B66E]
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
              transitionDelay:
                "120ms",
            }}
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                md:h-9
                md:w-9
              "
            >
              <SportIcon />
            </span>

            <span
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.31em]
                md:text-[0.62rem]
              "
            >
              {copy.eyebrow}
            </span>
          </div>

          {/* ===============================================
              TITLE
              =============================================== */}

          <h1
            className="
              mt-6
              max-w-[780px]
              font-display
              text-[3.1rem]
              leading-[0.92]
              tracking-[-0.042em]
              text-[#F8F2E9]
              sm:text-[3.7rem]
              md:text-[4.75rem]
              lg:text-[5.65rem]
              xl:text-[6rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  !text-[#F8F2E9]
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
                  transitionDelay:
                    "220ms",
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
                  !text-[#D8B66E]
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
                  transitionDelay:
                    "330ms",
                }}
              >
                {copy.titleAccent}
              </span>
            </span>
          </h1>

          {/* ===============================================
              DESCRIPTION
              =============================================== */}

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
              transitionDelay:
                "500ms",
            }}
          >
            <p
              className="
                max-w-[600px]
                text-[0.82rem]
                leading-6
                text-[#F8F2E9]/72
                md:text-[0.95rem]
                md:leading-7
              "
            >
              {copy.description}
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#C6A15B]
                "
              />

              <span
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#F8F2E9]/50
                "
              >
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        {/* ===============================================
            STATEMENT
            =============================================== */}

        <div
          className={`
            mt-12
            max-w-[840px]
            border-t
            border-[#F8F2E9]/12
            pt-6
            transition-all
            duration-[1250ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:mt-14
            md:pt-7
            ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
          style={{
            transitionDelay:
              "680ms",
          }}
        >
          <p
            className="
              max-w-[800px]
              font-display
              text-[1.45rem]
              italic
              leading-[1.12]
              tracking-[-0.015em]
              !text-[#F8F2E9]
              sm:text-[1.7rem]
              md:text-[2.15rem]
              lg:text-[2.55rem]
            "
          >
            {copy.statementBefore}{" "}

            <span className="!text-[#D8B66E]">
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function SportGenderWatchesContent({
  gender,
}: {
  gender: Gender;
}) {
  const { locale } =
    useLanguage();

  const localeCopy =
    SPORT_GENDER_COPY[locale] ??
    SPORT_GENDER_COPY.en;

  const copy =
    localeCopy[gender];

  const images =
    gender === "mens"
      ? MEN_IMAGES
      : WOMEN_IMAGES;

  const captions =
    gender === "mens"
      ? MEN_CAPTIONS
      : WOMEN_CAPTIONS;

  const galleryItems =
    images.map(
      (image, index) => ({
        image,

        caption:
          captions[index] ?? "",

        alt: `${copy.gallery.itemLabel} ${
          index + 1
        }`,
      })
    );

  return (
    <>
      <Header />

      <main>
        {/* ===============================================
            HERO
            =============================================== */}

        <SportGenderHero
          gender={gender}
          copy={copy.hero}
        />

        {/* ===============================================
            GALLERY
            =============================================== */}

        <CategoryGallery
          icon={<SportIcon />}
          eyebrow={
            copy.gallery.eyebrow
          }
          title={
            copy.gallery.title
          }
          titleAccent={
            copy.gallery.titleAccent
          }
          description={
            copy.gallery.description
          }
          itemLabel={
            copy.gallery.itemLabel
          }
          closingText={
            copy.gallery.closingText
          }
          closingAccent={
            copy.gallery
              .closingAccent
          }
          items={galleryItems}
        />

        {/* ===============================================
            CRAFT
            =============================================== */}

        <CategoryCraft
          eyebrow={
            copy.craft.eyebrow
          }
          title={
            copy.craft.title
          }
          description={
            copy.craft.description
          }
          points={
            copy.craft.points
          }
          closingText={
            copy.craft.closingText
          }
          closingAccent={
            copy.craft
              .closingAccent
          }
          since={
            copy.craft.since
          }
        />

        {/* ===============================================
            CTA
            =============================================== */}

        <CategoryCTA
          title={copy.cta.title}
          sub={copy.cta.sub}
        />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}