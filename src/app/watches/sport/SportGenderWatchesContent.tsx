"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

/* =========================================================
   TYPES
   ========================================================= */

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

type GalleryCaptions = {
  mens: string[];
  womens: string[];
};

type SportGalleryImage = {
  image: string;
  objectPosition?: string;
  scale?: number;
};

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const SPORT_GENDER_COPY: Record<Locale, SportGenderCopy> = {
  /* =======================================================
     GERMAN
     ======================================================= */

  de: {
    mens: {
      hero: {
        eyebrow: "Sportuhren für Herren",
        title: "Performance mit",
        titleAccent: "Selbstbewusstsein und Charakter.",
        description:
          "Entdecken Sie Herrensportuhren, ausgewählt für Präzision, Haltbarkeit, starke Proportionen und zuverlässige Performance im Alltag.",
        since: "LIDYA · SEIT 1989",
        statementBefore: "Für Bewegung geschaffen.",
        statementAccent: "Für Charakter ausgewählt.",
        imageAlt: "Luxuriöse Herrensportuhren von LIDYA",
      },

      gallery: {
        eyebrow: "Kollektion der Herrensportuhren",
        title: "Performance ausgewählt für",
        titleAccent: "individuellen Charakter.",
        description:
          "Von technischen Chronographen bis zu markanten modernen Designs — entdecken Sie Herrensportuhren, die Funktion, Komfort und Präsenz verbinden.",
        itemLabel: "Herrensportuhren",
        closingText: "Präzision treibt Performance an.",
        closingAccent: "Charakter macht sie persönlich.",
      },

      craft: {
        eyebrow: "Der Charakter der Performance",
        title:
          "Eine Sportuhr wird durch mehr als technische Leistung bestimmt",
        description:
          "Proportionen, Komfort, Materialien und Ablesbarkeit wirken zusammen und schaffen eine Uhr für Bewegung und Alltag.",
        closingText: "Performance folgt der Funktion.",
        closingAccent: "Design macht sie persönlich.",
        since: "LIDYA · SEIT 1989",

        points: [
          {
            title: "Proportion",
            description:
              "Gehäusegröße und Armbandbalance schaffen Präsenz, ohne den Tragekomfort zu beeinträchtigen.",
          },
          {
            title: "Materialien",
            description:
              "Stahl, Keramik, Kautschuk und technische Materialien unterstützen Robustheit und modernen Charakter.",
          },
          {
            title: "Präzision",
            description:
              "Klare Anzeigen und zuverlässige Technik ermöglichen eine sichere und präzise Zeitmessung.",
          },
          {
            title: "Performance",
            description:
              "Jedes Detail trägt zu Komfort, Ablesbarkeit und Zuverlässigkeit im Alltag bei.",
          },
        ],
      },

      cta: {
        title: "Herrensportuhren am Handgelenk entdecken",
        sub:
          "Besuchen Sie LIDYA und vergleichen Sie Proportionen, Materialien und Details persönlich.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Sportuhren für Damen",
        title: "Performance mit",
        titleAccent: "Energie und Eleganz.",
        description:
          "Entdecken Sie Damensportuhren, in denen dynamisches Design, angenehme Proportionen und raffinierte Details auf Performance im Alltag treffen.",
        since: "LIDYA · SEIT 1989",
        statementBefore: "Für Bewegung geschaffen.",
        statementAccent: "Für Individualität verfeinert.",
        imageAlt: "Luxuriöse Damensportuhren von LIDYA",
      },

      gallery: {
        eyebrow: "Kollektion der Damensportuhren",
        title: "Dynamische Uhren für",
        titleAccent: "individuellen Ausdruck.",
        description:
          "Entdecken Sie Damensportuhren, die ausdrucksstarke Farben, raffinierte Proportionen, Komfort und moderne Performance verbinden.",
        itemLabel: "Damensportuhren",
        closingText: "Bewegung schafft Energie.",
        closingAccent: "Stil macht sie persönlich.",
      },

      craft: {
        eyebrow: "Performance mit Eleganz",
        title: "Eine Damensportuhr verbindet Bewegung und Raffinesse",
        description:
          "Komfort, Proportionen, Farbe, Materialien und Klarheit verbinden sich in Uhren für einen aktiven Alltag.",
        closingText: "Funktion schafft Selbstvertrauen.",
        closingAccent: "Design schafft Identität.",
        since: "LIDYA · SEIT 1989",

        points: [
          {
            title: "Proportion",
            description:
              "Ausgewogene Dimensionen schaffen eine selbstbewusste und zugleich angenehme Präsenz am Handgelenk.",
          },
          {
            title: "Materialien",
            description:
              "Stahl, Keramik, Kautschuk und raffinierte Oberflächen verleihen jedem Modell einen eigenen Charakter.",
          },
          {
            title: "Farbe",
            description:
              "Farben von Zifferblatt, Armband und Gehäuse bringen Energie in das Design und bewahren zugleich Harmonie.",
          },
          {
            title: "Komfort",
            description:
              "Das richtige Verhältnis von Gewicht, Form und Material unterstützt natürliche Bewegung über den ganzen Tag.",
          },
        ],
      },

      cta: {
        title: "Damensportuhren persönlich entdecken",
        sub:
          "Besuchen Sie LIDYA und erleben Sie Proportionen, Farben und Details direkt am Handgelenk.",
      },
    },
  },

  /* =======================================================
     ENGLISH
     ======================================================= */

  en: {
    mens: {
      hero: {
        eyebrow: "Men's Sport Watches",
        title: "Performance with",
        titleAccent: "confidence and character.",
        description:
          "Discover men's sport watches selected for precision, durability, strong proportions and confident everyday performance.",
        since: "LIDYA · SINCE 1989",
        statementBefore: "Built for movement.",
        statementAccent: "Chosen for character.",
        imageAlt: "Luxury men's sport watches by LIDYA",
      },

      gallery: {
        eyebrow: "Men's Sport Watch Collection",
        title: "Performance selected for",
        titleAccent: "individual character.",
        description:
          "From technical chronographs to bold contemporary designs, discover men's sport watches balancing function, comfort and presence.",
        itemLabel: "Men's Sport Watches",
        closingText: "Precision drives performance.",
        closingAccent: "Character makes it personal.",
      },

      craft: {
        eyebrow: "The Character of Performance",
        title: "A sport watch is defined by more than technical ability",
        description:
          "Proportion, comfort, materials and legibility work together to create a watch ready for movement and everyday life.",
        closingText: "Performance follows function.",
        closingAccent: "Design makes it personal.",
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
        title: "Discover men's sport watches on the wrist",
        sub:
          "Visit LIDYA and compare proportions, materials and performance in person.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Women's Sport Watches",
        title: "Performance with",
        titleAccent: "energy and elegance.",
        description:
          "Discover women's sport watches where dynamic design, comfortable proportions and refined details meet everyday performance.",
        since: "LIDYA · SINCE 1989",
        statementBefore: "Made for movement.",
        statementAccent: "Refined for individuality.",
        imageAlt: "Luxury women's sport watches by LIDYA",
      },

      gallery: {
        eyebrow: "Women's Sport Watch Collection",
        title: "Dynamic watches selected for",
        titleAccent: "individual expression.",
        description:
          "Explore women's sport watches combining confident colour, refined proportions, comfort and modern performance.",
        itemLabel: "Women's Sport Watches",
        closingText: "Movement creates energy.",
        closingAccent: "Style makes it personal.",
      },

      craft: {
        eyebrow: "Performance with Elegance",
        title: "A women's sport watch balances movement and refinement",
        description:
          "Comfort, proportion, colour, materials and clarity come together in watches designed for active everyday life.",
        closingText: "Function creates confidence.",
        closingAccent: "Design creates identity.",
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
        title: "Discover women's sport watches in person",
        sub:
          "Visit LIDYA and experience the proportions, colours and details that feel naturally yours.",
      },
    },
  },

  /* =======================================================
     TURKISH
     ======================================================= */

  tr: {
    mens: {
      hero: {
        eyebrow: "Erkek Spor Saatleri",
        title: "Performans ve",
        titleAccent: "güçlü karakter.",
        description:
          "Hassasiyet, dayanıklılık, güçlü oranlar ve günlük kullanım performansı için seçilen erkek spor saatlerini keşfedin.",
        since: "LIDYA · 1989'DAN BERİ",
        statementBefore: "Hareket için üretildi.",
        statementAccent: "Karakter için seçildi.",
        imageAlt: "LIDYA erkek spor saatleri",
      },

      gallery: {
        eyebrow: "Erkek Spor Saat Koleksiyonu",
        title: "Performans",
        titleAccent: "kişisel karakterle buluşuyor.",
        description:
          "Teknik kronograflardan güçlü çağdaş tasarımlara kadar işlev, konfor ve duruşu bir araya getiren erkek spor saatlerini keşfedin.",
        itemLabel: "Erkek Spor Saatleri",
        closingText: "Hassasiyet performansı yönlendirir.",
        closingAccent: "Karakter onu kişisel kılar.",
      },

      craft: {
        eyebrow: "Performansın Karakteri",
        title:
          "Bir spor saatini yalnızca teknik özellikleri tanımlamaz",
        description:
          "Oranlar, konfor, malzemeler ve okunabilirlik hareket ve günlük kullanım için dengeli bir bütün oluşturur.",
        closingText: "Performans işlevi izler.",
        closingAccent: "Tasarım onu kişisel kılar.",
        since: "LIDYA · 1989'DAN BERİ",

        points: [
          {
            title: "Oran",
            description:
              "Kasa ölçüleri ve bilezik dengesi konfordan ödün vermeden güçlü bir duruş yaratır.",
          },
          {
            title: "Malzemeler",
            description:
              "Çelik, seramik, kauçuk ve teknik malzemeler dayanıklılığı ve modern karakteri destekler.",
          },
          {
            title: "Hassasiyet",
            description:
              "Net göstergeler ve güvenilir teknik yapı zamanı emin bir şekilde ölçmeye yardımcı olur.",
          },
          {
            title: "Performans",
            description:
              "Her detay konfor, okunabilirlik ve günlük güvenilirliğe katkıda bulunur.",
          },
        ],
      },

      cta: {
        title: "Erkek spor saatlerini bileğinizde keşfedin",
        sub:
          "LIDYA'yı ziyaret edin ve oranları, malzemeleri ve detayları yakından karşılaştırın.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Kadın Spor Saatleri",
        title: "Performans,",
        titleAccent: "enerji ve zarafetle.",
        description:
          "Dinamik tasarım, rahat oranlar ve rafine detayları günlük performansla buluşturan kadın spor saatlerini keşfedin.",
        since: "LIDYA · 1989'DAN BERİ",
        statementBefore: "Hareket için üretildi.",
        statementAccent: "Kişisellik için rafine edildi.",
        imageAlt: "LIDYA kadın spor saatleri",
      },

      gallery: {
        eyebrow: "Kadın Spor Saat Koleksiyonu",
        title: "Dinamik saatler",
        titleAccent: "kişisel ifade için.",
        description:
          "Güçlü renkleri, rafine oranları, konforu ve modern performansı bir araya getiren kadın spor saatlerini keşfedin.",
        itemLabel: "Kadın Spor Saatleri",
        closingText: "Hareket enerji yaratır.",
        closingAccent: "Stil onu kişisel kılar.",
      },

      craft: {
        eyebrow: "Zarif Performans",
        title:
          "Kadın spor saatleri hareket ile zarafeti dengeler",
        description:
          "Konfor, oran, renk, malzeme ve okunabilirlik aktif günlük yaşam için bir araya gelir.",
        closingText: "İşlev güven verir.",
        closingAccent: "Tasarım kimlik yaratır.",
        since: "LIDYA · 1989'DAN BERİ",

        points: [
          {
            title: "Oran",
            description:
              "Dengeli ölçüler bilekte güçlü fakat rahat bir duruş yaratır.",
          },
          {
            title: "Malzemeler",
            description:
              "Çelik, seramik, kauçuk ve rafine yüzeyler her modele özgün bir karakter kazandırır.",
          },
          {
            title: "Renk",
            description:
              "Kadran, kayış ve kasa renkleri görsel dengeyi korurken tasarıma enerji katar.",
          },
          {
            title: "Konfor",
            description:
              "Ağırlık, form ve malzeme dengesi gün boyunca doğal hareketi destekler.",
          },
        ],
      },

      cta: {
        title: "Kadın spor saatlerini yakından keşfedin",
        sub:
          "LIDYA'yı ziyaret edin ve size doğal gelen renkleri, oranları ve detayları keşfedin.",
      },
    },
  },

  /* =======================================================
     SLOVAK
     ======================================================= */

  sk: {
    mens: {
      hero: {
        eyebrow: "Pánske športové hodinky",
        title: "Výkon so",
        titleAccent: "sebavedomím a charakterom.",
        description:
          "Objavte pánske športové hodinky vybrané pre presnosť, odolnosť, výrazné proporcie a sebavedomý každodenný výkon.",
        since: "LIDYA · OD ROKU 1989",
        statementBefore: "Vytvorené pre pohyb.",
        statementAccent: "Vybrané pre charakter.",
        imageAlt: "Luxusné pánske športové hodinky LIDYA",
      },

      gallery: {
        eyebrow: "Kolekcia pánskych športových hodiniek",
        title: "Výkon vybraný pre",
        titleAccent: "osobitý charakter.",
        description:
          "Od technických chronografov po výrazné moderné modely — objavte športové hodinky spájajúce funkčnosť, pohodlie a prítomnosť.",
        itemLabel: "Pánske športové hodinky",
        closingText: "Presnosť poháňa výkon.",
        closingAccent: "Charakter ho robí osobným.",
      },

      craft: {
        eyebrow: "Charakter výkonu",
        title:
          "Športové hodinky neurčuje iba ich technická schopnosť",
        description:
          "Proporcie, pohodlie, materiály a čitateľnosť vytvárajú hodinky pripravené na pohyb aj každodenný život.",
        closingText: "Výkon nasleduje funkciu.",
        closingAccent: "Dizajn ho robí osobným.",
        since: "LIDYA · OD ROKU 1989",

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
        title: "Objavte pánske športové hodinky na zápästí",
        sub:
          "Navštívte LIDYA a osobne porovnajte proporcie, materiály a charakter jednotlivých modelov.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Dámske športové hodinky",
        title: "Výkon s",
        titleAccent: "energiou a eleganciou.",
        description:
          "Objavte dámske športové hodinky, v ktorých sa dynamický dizajn, pohodlné proporcie a rafinované detaily stretávajú s každodenným výkonom.",
        since: "LIDYA · OD ROKU 1989",
        statementBefore: "Vytvorené pre pohyb.",
        statementAccent: "Zdokonalené pre individualitu.",
        imageAlt: "Luxusné dámske športové hodinky LIDYA",
      },

      gallery: {
        eyebrow: "Kolekcia dámskych športových hodiniek",
        title: "Dynamické hodinky vybrané pre",
        titleAccent: "osobitý výraz.",
        description:
          "Objavte dámske športové hodinky spájajúce výrazné farby, rafinované proporcie, pohodlie a moderný výkon.",
        itemLabel: "Dámske športové hodinky",
        closingText: "Pohyb vytvára energiu.",
        closingAccent: "Štýl ju robí osobnou.",
      },

      craft: {
        eyebrow: "Výkon s eleganciou",
        title:
          "Dámske športové hodinky spájajú pohyb a rafinovanosť",
        description:
          "Pohodlie, proporcie, farba, materiály a čitateľnosť sa spájajú v hodinkách navrhnutých pre aktívny každodenný život.",
        closingText: "Funkcia vytvára sebavedomie.",
        closingAccent: "Dizajn vytvára identitu.",
        since: "LIDYA · OD ROKU 1989",

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
        title: "Objavte dámske športové hodinky osobne",
        sub:
          "Navštívte LIDYA a spoznajte proporcie, farby a detaily, ktoré vám budú prirodzene patriť.",
      },
    },
  },

  /* =======================================================
     CZECH
     ======================================================= */

  cs: {
    mens: {
      hero: {
        eyebrow: "Pánské sportovní hodinky",
        title: "Výkon se",
        titleAccent: "sebevědomím a charakterem.",
        description:
          "Objevte pánské sportovní hodinky vybrané pro přesnost, odolnost, výrazné proporce a sebevědomý každodenní výkon.",
        since: "LIDYA · OD ROKU 1989",
        statementBefore: "Vytvořené pro pohyb.",
        statementAccent: "Vybrané pro charakter.",
        imageAlt: "Luxusní pánské sportovní hodinky LIDYA",
      },

      gallery: {
        eyebrow: "Kolekce pánských sportovních hodinek",
        title: "Výkon vybraný pro",
        titleAccent: "osobitý charakter.",
        description:
          "Od technických chronografů po výrazné moderní modely — objevte sportovní hodinky spojující funkčnost, pohodlí a výraz.",
        itemLabel: "Pánské sportovní hodinky",
        closingText: "Přesnost pohání výkon.",
        closingAccent: "Charakter ho činí osobním.",
      },

      craft: {
        eyebrow: "Charakter výkonu",
        title:
          "Sportovní hodinky neurčuje pouze jejich technická schopnost",
        description:
          "Proporce, pohodlí, materiály a čitelnost vytvářejí hodinky připravené na pohyb i každodenní život.",
        closingText: "Výkon následuje funkci.",
        closingAccent: "Design ho činí osobním.",
        since: "LIDYA · OD ROKU 1989",

        points: [
          {
            title: "Proporce",
            description:
              "Rozměry pouzdra a vyvážení náramku vytvářejí sebevědomý vzhled bez ztráty pohodlí.",
          },
          {
            title: "Materiály",
            description:
              "Ocel, keramika, kaučuk a technické materiály podporují odolnost a moderní charakter.",
          },
          {
            title: "Přesnost",
            description:
              "Čitelný ciferník a spolehlivá technika podporují přesné měření času.",
          },
          {
            title: "Výkon",
            description:
              "Každý detail přispívá k pohodlí, čitelnosti a každodenní spolehlivosti.",
          },
        ],
      },

      cta: {
        title: "Objevte pánské sportovní hodinky na zápěstí",
        sub:
          "Navštivte LIDYA a osobně porovnejte proporce, materiály a charakter jednotlivých modelů.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Dámské sportovní hodinky",
        title: "Výkon s",
        titleAccent: "energií a elegancí.",
        description:
          "Objevte dámské sportovní hodinky, ve kterých se dynamický design, pohodlné proporce a rafinované detaily setkávají s každodenním výkonem.",
        since: "LIDYA · OD ROKU 1989",
        statementBefore: "Vytvořené pro pohyb.",
        statementAccent: "Zdokonalené pro individualitu.",
        imageAlt: "Luxusní dámské sportovní hodinky LIDYA",
      },

      gallery: {
        eyebrow: "Kolekce dámských sportovních hodinek",
        title: "Dynamické hodinky vybrané pro",
        titleAccent: "osobitý výraz.",
        description:
          "Objevte dámské sportovní hodinky spojující výrazné barvy, rafinované proporce, pohodlí a moderní výkon.",
        itemLabel: "Dámské sportovní hodinky",
        closingText: "Pohyb vytváří energii.",
        closingAccent: "Styl ji činí osobní.",
      },

      craft: {
        eyebrow: "Výkon s elegancí",
        title:
          "Dámské sportovní hodinky spojují pohyb a rafinovanost",
        description:
          "Pohodlí, proporce, barva, materiály a čitelnost se spojují v hodinkách navržených pro aktivní každodenní život.",
        closingText: "Funkce vytváří sebevědomí.",
        closingAccent: "Design vytváří identitu.",
        since: "LIDYA · OD ROKU 1989",

        points: [
          {
            title: "Proporce",
            description:
              "Vyvážené rozměry vytvářejí sebevědomou, ale pohodlnou přítomnost na zápěstí.",
          },
          {
            title: "Materiály",
            description:
              "Ocel, keramika, kaučuk a rafinované povrchy dávají každému modelu vlastní charakter.",
          },
          {
            title: "Barva",
            description:
              "Barva ciferníku, řemínku a pouzdra přináší energii při zachování vizuální harmonie.",
          },
          {
            title: "Pohodlí",
            description:
              "Správná rovnováha hmotnosti, tvaru a materiálu podporuje přirozený pohyb během celého dne.",
          },
        ],
      },

      cta: {
        title: "Objevte dámské sportovní hodinky osobně",
        sub:
          "Navštivte LIDYA a poznejte proporce, barvy a detaily, které vám budou přirozeně vyhovovat.",
      },
    },
  },

  /* =======================================================
     HUNGARIAN
     ======================================================= */

  hu: {
    mens: {
      hero: {
        eyebrow: "Férfi sportórák",
        title: "Teljesítmény",
        titleAccent: "magabiztossággal és karakterrel.",
        description:
          "Fedezze fel a pontosság, tartósság, határozott arányok és megbízható mindennapi teljesítmény alapján kiválasztott férfi sportórákat.",
        since: "LIDYA · 1989 ÓTA",
        statementBefore: "Mozgásra tervezve.",
        statementAccent: "Karakterre választva.",
        imageAlt: "Luxus férfi sportórák a LIDYA kínálatából",
      },

      gallery: {
        eyebrow: "Férfi sportóra kollekció",
        title: "Teljesítmény",
        titleAccent: "egyéni karakterhez.",
        description:
          "A technikai kronográfoktól a karakteres modern modellekig fedezze fel a funkciót, kényelmet és jelenlétet ötvöző sportórákat.",
        itemLabel: "Férfi sportórák",
        closingText: "A pontosság hajtja a teljesítményt.",
        closingAccent: "A karakter személyessé teszi.",
      },

      craft: {
        eyebrow: "A teljesítmény karaktere",
        title:
          "Egy sportórát több határoz meg, mint pusztán a technikai képessége",
        description:
          "Az arányok, a kényelem, az anyagok és az olvashatóság együtt teszik alkalmassá az órát mozgásra és mindennapi használatra.",
        closingText: "A teljesítmény követi a funkciót.",
        closingAccent: "A design személyessé teszi.",
        since: "LIDYA · 1989 ÓTA",

        points: [
          {
            title: "Arányok",
            description:
              "A tok méretei és a szíj egyensúlya magabiztos jelenlétet teremt a kényelem feláldozása nélkül.",
          },
          {
            title: "Anyagok",
            description:
              "Az acél, kerámia, gumi és technikai anyagok támogatják a tartósságot és a modern karaktert.",
          },
          {
            title: "Pontosság",
            description:
              "A jól olvasható kijelzés és megbízható mérnöki kialakítás biztos időmérést tesz lehetővé.",
          },
          {
            title: "Teljesítmény",
            description:
              "Minden részlet hozzájárul a kényelemhez, olvashatósághoz és mindennapi megbízhatósághoz.",
          },
        ],
      },

      cta: {
        title: "Fedezze fel a férfi sportórákat a csuklóján",
        sub:
          "Látogasson el a LIDYA-hoz, és hasonlítsa össze személyesen az arányokat, anyagokat és részleteket.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Női sportórák",
        title: "Teljesítmény",
        titleAccent: "energiával és eleganciával.",
        description:
          "Fedezze fel a női sportórákat, ahol a dinamikus design, kényelmes arányok és kifinomult részletek találkoznak a mindennapi teljesítménnyel.",
        since: "LIDYA · 1989 ÓTA",
        statementBefore: "Mozgásra tervezve.",
        statementAccent: "Egyéniségre finomítva.",
        imageAlt: "Luxus női sportórák a LIDYA kínálatából",
      },

      gallery: {
        eyebrow: "Női sportóra kollekció",
        title: "Dinamikus órák",
        titleAccent: "egyéni kifejezéshez.",
        description:
          "Fedezze fel a karakteres színeket, kifinomult arányokat, kényelmet és modern teljesítményt ötvöző női sportórákat.",
        itemLabel: "Női sportórák",
        closingText: "A mozgás energiát teremt.",
        closingAccent: "A stílus személyessé teszi.",
      },

      craft: {
        eyebrow: "Teljesítmény eleganciával",
        title:
          "A női sportóra egyensúlyt teremt mozgás és kifinomultság között",
        description:
          "A kényelem, arányok, színek, anyagok és olvashatóság egyesülnek az aktív mindennapokra tervezett órákban.",
        closingText: "A funkció magabiztosságot ad.",
        closingAccent: "A design identitást teremt.",
        since: "LIDYA · 1989 ÓTA",

        points: [
          {
            title: "Arányok",
            description:
              "A kiegyensúlyozott méretek magabiztos, mégis kényelmes jelenlétet teremtenek a csuklón.",
          },
          {
            title: "Anyagok",
            description:
              "Az acél, kerámia, gumi és kifinomult felületek minden modellnek saját karaktert adnak.",
          },
          {
            title: "Szín",
            description:
              "A számlap, szíj és tok színei energiát adnak, miközben megőrzik a vizuális harmóniát.",
          },
          {
            title: "Kényelem",
            description:
              "A megfelelő súly-, forma- és anyagegyensúly egész nap támogatja a természetes mozgást.",
          },
        ],
      },

      cta: {
        title: "Fedezze fel személyesen a női sportórákat",
        sub:
          "Látogasson el a LIDYA-hoz, és találja meg az Önnek természetesen megfelelő arányokat, színeket és részleteket.",
      },
    },
  },

  /* =======================================================
     POLISH
     ======================================================= */

  pl: {
    mens: {
      hero: {
        eyebrow: "Męskie zegarki sportowe",
        title: "Wydajność z",
        titleAccent: "pewnością siebie i charakterem.",
        description:
          "Odkryj męskie zegarki sportowe wybrane ze względu na precyzję, trwałość, zdecydowane proporcje i niezawodną codzienną wydajność.",
        since: "LIDYA · OD 1989 ROKU",
        statementBefore: "Stworzone do ruchu.",
        statementAccent: "Wybrane dla charakteru.",
        imageAlt: "Luksusowe męskie zegarki sportowe LIDYA",
      },

      gallery: {
        eyebrow: "Kolekcja męskich zegarków sportowych",
        title: "Wydajność wybrana dla",
        titleAccent: "indywidualnego charakteru.",
        description:
          "Od technicznych chronografów po wyraziste współczesne modele — odkryj zegarki sportowe łączące funkcję, komfort i obecność.",
        itemLabel: "Męskie zegarki sportowe",
        closingText: "Precyzja napędza wydajność.",
        closingAccent: "Charakter czyni ją osobistą.",
      },

      craft: {
        eyebrow: "Charakter wydajności",
        title:
          "Zegarek sportowy definiuje coś więcej niż możliwości techniczne",
        description:
          "Proporcje, komfort, materiały i czytelność współpracują ze sobą, tworząc zegarek gotowy na ruch i codzienność.",
        closingText: "Wydajność podąża za funkcją.",
        closingAccent: "Design czyni ją osobistą.",
        since: "LIDYA · OD 1989 ROKU",

        points: [
          {
            title: "Proporcje",
            description:
              "Wymiary koperty i balans bransolety tworzą zdecydowaną obecność bez utraty komfortu.",
          },
          {
            title: "Materiały",
            description:
              "Stal, ceramika, guma i materiały techniczne wspierają trwałość oraz nowoczesny charakter.",
          },
          {
            title: "Precyzja",
            description:
              "Czytelne wskazania i niezawodna konstrukcja pomagają pewnie odmierzać czas.",
          },
          {
            title: "Wydajność",
            description:
              "Każdy detal wspiera komfort, czytelność i codzienną niezawodność.",
          },
        ],
      },

      cta: {
        title: "Odkryj męskie zegarki sportowe na nadgarstku",
        sub:
          "Odwiedź LIDYA i porównaj osobiście proporcje, materiały i detale.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Damskie zegarki sportowe",
        title: "Wydajność z",
        titleAccent: "energią i elegancją.",
        description:
          "Odkryj damskie zegarki sportowe, w których dynamiczny design, komfortowe proporcje i dopracowane detale spotykają się z codzienną wydajnością.",
        since: "LIDYA · OD 1989 ROKU",
        statementBefore: "Stworzone do ruchu.",
        statementAccent: "Dopracowane dla indywidualności.",
        imageAlt: "Luksusowe damskie zegarki sportowe LIDYA",
      },

      gallery: {
        eyebrow: "Kolekcja damskich zegarków sportowych",
        title: "Dynamiczne zegarki wybrane dla",
        titleAccent: "indywidualnego wyrazu.",
        description:
          "Odkryj damskie zegarki sportowe łączące wyraziste kolory, dopracowane proporcje, komfort i nowoczesną wydajność.",
        itemLabel: "Damskie zegarki sportowe",
        closingText: "Ruch tworzy energię.",
        closingAccent: "Styl czyni ją osobistą.",
      },

      craft: {
        eyebrow: "Wydajność z elegancją",
        title:
          "Damski zegarek sportowy łączy ruch z wyrafinowaniem",
        description:
          "Komfort, proporcje, kolor, materiały i czytelność łączą się w zegarkach stworzonych do aktywnej codzienności.",
        closingText: "Funkcja buduje pewność siebie.",
        closingAccent: "Design tworzy tożsamość.",
        since: "LIDYA · OD 1989 ROKU",

        points: [
          {
            title: "Proporcje",
            description:
              "Wyważone wymiary zapewniają zdecydowaną, ale wygodną obecność na nadgarstku.",
          },
          {
            title: "Materiały",
            description:
              "Stal, ceramika, guma i dopracowane wykończenia nadają każdemu modelowi własny charakter.",
          },
          {
            title: "Kolor",
            description:
              "Kolory tarczy, paska i koperty wprowadzają energię, zachowując wizualną harmonię.",
          },
          {
            title: "Komfort",
            description:
              "Odpowiednia równowaga masy, formy i materiału wspiera naturalny ruch przez cały dzień.",
          },
        ],
      },

      cta: {
        title: "Odkryj damskie zegarki sportowe osobiście",
        sub:
          "Odwiedź LIDYA i poznaj proporcje, kolory oraz detale, które najlepiej do Ciebie pasują.",
      },
    },
  },

  /* =======================================================
     RUSSIAN
     ======================================================= */

  ru: {
    mens: {
      hero: {
        eyebrow: "Мужские спортивные часы",
        title: "Производительность с",
        titleAccent: "уверенностью и характером.",
        description:
          "Откройте мужские спортивные часы, выбранные за точность, надёжность, выразительные пропорции и уверенную ежедневную функциональность.",
        since: "LIDYA · С 1989 ГОДА",
        statementBefore: "Созданы для движения.",
        statementAccent: "Выбраны за характер.",
        imageAlt: "Роскошные мужские спортивные часы LIDYA",
      },

      gallery: {
        eyebrow: "Коллекция мужских спортивных часов",
        title: "Производительность для",
        titleAccent: "индивидуального характера.",
        description:
          "От технических хронографов до выразительных современных моделей — откройте часы, объединяющие функциональность, комфорт и присутствие.",
        itemLabel: "Мужские спортивные часы",
        closingText: "Точность движет производительностью.",
        closingAccent: "Характер делает её личной.",
      },

      craft: {
        eyebrow: "Характер производительности",
        title:
          "Спортивные часы определяются не только техническими возможностями",
        description:
          "Пропорции, комфорт, материалы и читаемость создают часы, готовые к движению и повседневной жизни.",
        closingText: "Производительность следует функции.",
        closingAccent: "Дизайн делает её личной.",
        since: "LIDYA · С 1989 ГОДА",

        points: [
          {
            title: "Пропорции",
            description:
              "Размер корпуса и баланс браслета создают уверенное присутствие без потери комфорта.",
          },
          {
            title: "Материалы",
            description:
              "Сталь, керамика, каучук и технические материалы поддерживают надёжность и современный характер.",
          },
          {
            title: "Точность",
            description:
              "Чёткая индикация и надёжная инженерия обеспечивают уверенное измерение времени.",
          },
          {
            title: "Производительность",
            description:
              "Каждая деталь способствует комфорту, читаемости и ежедневной надёжности.",
          },
        ],
      },

      cta: {
        title: "Откройте мужские спортивные часы на запястье",
        sub:
          "Посетите LIDYA и лично сравните пропорции, материалы и детали.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Женские спортивные часы",
        title: "Производительность с",
        titleAccent: "энергией и элегантностью.",
        description:
          "Откройте женские спортивные часы, где динамичный дизайн, комфортные пропорции и утончённые детали сочетаются с повседневной функциональностью.",
        since: "LIDYA · С 1989 ГОДА",
        statementBefore: "Созданы для движения.",
        statementAccent: "Утончены для индивидуальности.",
        imageAlt: "Роскошные женские спортивные часы LIDYA",
      },

      gallery: {
        eyebrow: "Коллекция женских спортивных часов",
        title: "Динамичные часы для",
        titleAccent: "индивидуального выражения.",
        description:
          "Откройте женские спортивные часы, объединяющие выразительные цвета, утончённые пропорции, комфорт и современную функциональность.",
        itemLabel: "Женские спортивные часы",
        closingText: "Движение создаёт энергию.",
        closingAccent: "Стиль делает её личной.",
      },

      craft: {
        eyebrow: "Производительность с элегантностью",
        title:
          "Женские спортивные часы объединяют движение и утончённость",
        description:
          "Комфорт, пропорции, цвет, материалы и читаемость объединяются в часах для активной повседневной жизни.",
        closingText: "Функция создаёт уверенность.",
        closingAccent: "Дизайн создаёт индивидуальность.",
        since: "LIDYA · С 1989 ГОДА",

        points: [
          {
            title: "Пропорции",
            description:
              "Сбалансированные размеры создают выразительное и одновременно комфортное ощущение на запястье.",
          },
          {
            title: "Материалы",
            description:
              "Сталь, керамика, каучук и утончённая отделка придают каждой модели собственный характер.",
          },
          {
            title: "Цвет",
            description:
              "Цвет циферблата, ремешка и корпуса привносит энергию, сохраняя визуальную гармонию.",
          },
          {
            title: "Комфорт",
            description:
              "Правильный баланс веса, формы и материалов поддерживает естественное движение в течение дня.",
          },
        ],
      },

      cta: {
        title: "Откройте женские спортивные часы лично",
        sub:
          "Посетите LIDYA и найдите пропорции, цвета и детали, которые естественно подходят именно вам.",
      },
    },
  },

  /* =======================================================
     DUTCH
     ======================================================= */

  nl: {
    mens: {
      hero: {
        eyebrow: "Sporthorloges voor heren",
        title: "Prestaties met",
        titleAccent: "zelfvertrouwen en karakter.",
        description:
          "Ontdek sporthorloges voor heren geselecteerd op precisie, duurzaamheid, krachtige proporties en betrouwbare dagelijkse prestaties.",
        since: "LIDYA · SINDS 1989",
        statementBefore: "Gemaakt voor beweging.",
        statementAccent: "Gekozen voor karakter.",
        imageAlt: "Luxueuze sporthorloges voor heren van LIDYA",
      },

      gallery: {
        eyebrow: "Collectie sporthorloges voor heren",
        title: "Prestaties geselecteerd voor",
        titleAccent: "individueel karakter.",
        description:
          "Van technische chronografen tot krachtige moderne ontwerpen — ontdek sporthorloges die functionaliteit, comfort en uitstraling combineren.",
        itemLabel: "Sporthorloges voor heren",
        closingText: "Precisie drijft prestaties aan.",
        closingAccent: "Karakter maakt het persoonlijk.",
      },

      craft: {
        eyebrow: "Het karakter van prestaties",
        title:
          "Een sporthorloge wordt door meer bepaald dan technische mogelijkheden",
        description:
          "Proportie, comfort, materialen en leesbaarheid werken samen in een horloge voor beweging en dagelijks gebruik.",
        closingText: "Prestaties volgen functie.",
        closingAccent: "Design maakt het persoonlijk.",
        since: "LIDYA · SINDS 1989",

        points: [
          {
            title: "Proportie",
            description:
              "Kastafmetingen en balans van de band creëren uitstraling zonder comfort te verliezen.",
          },
          {
            title: "Materialen",
            description:
              "Staal, keramiek, rubber en technische materialen ondersteunen duurzaamheid en modern karakter.",
          },
          {
            title: "Precisie",
            description:
              "Heldere displays en betrouwbare techniek ondersteunen nauwkeurige tijdmeting.",
          },
          {
            title: "Prestaties",
            description:
              "Elk detail draagt bij aan comfort, leesbaarheid en dagelijkse betrouwbaarheid.",
          },
        ],
      },

      cta: {
        title: "Ontdek sporthorloges voor heren om de pols",
        sub:
          "Bezoek LIDYA en vergelijk proporties, materialen en details persoonlijk.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Sporthorloges voor dames",
        title: "Prestaties met",
        titleAccent: "energie en elegantie.",
        description:
          "Ontdek sporthorloges voor dames waarin dynamisch design, comfortabele proporties en verfijnde details samenkomen met dagelijkse prestaties.",
        since: "LIDYA · SINDS 1989",
        statementBefore: "Gemaakt voor beweging.",
        statementAccent: "Verfijnd voor individualiteit.",
        imageAlt: "Luxueuze sporthorloges voor dames van LIDYA",
      },

      gallery: {
        eyebrow: "Collectie sporthorloges voor dames",
        title: "Dynamische horloges voor",
        titleAccent: "individuele expressie.",
        description:
          "Ontdek sporthorloges voor dames met krachtige kleuren, verfijnde proporties, comfort en moderne prestaties.",
        itemLabel: "Sporthorloges voor dames",
        closingText: "Beweging creëert energie.",
        closingAccent: "Stijl maakt het persoonlijk.",
      },

      craft: {
        eyebrow: "Prestaties met elegantie",
        title:
          "Een sporthorloge voor dames balanceert beweging en verfijning",
        description:
          "Comfort, proportie, kleur, materialen en helderheid komen samen in horloges voor een actieve dagelijkse levensstijl.",
        closingText: "Functie creëert vertrouwen.",
        closingAccent: "Design creëert identiteit.",
        since: "LIDYA · SINDS 1989",

        points: [
          {
            title: "Proportie",
            description:
              "Gebalanceerde afmetingen zorgen voor een krachtige maar comfortabele aanwezigheid om de pols.",
          },
          {
            title: "Materialen",
            description:
              "Staal, keramiek, rubber en verfijnde afwerkingen geven elk model een eigen karakter.",
          },
          {
            title: "Kleur",
            description:
              "Kleuren van wijzerplaat, band en kast geven energie zonder de visuele harmonie te verliezen.",
          },
          {
            title: "Comfort",
            description:
              "De juiste balans van gewicht, vorm en materiaal ondersteunt natuurlijke beweging gedurende de dag.",
          },
        ],
      },

      cta: {
        title: "Ontdek sporthorloges voor dames persoonlijk",
        sub:
          "Bezoek LIDYA en ervaar de proporties, kleuren en details die natuurlijk bij u passen.",
      },
    },
  },

  /* =======================================================
     DANISH
     ======================================================= */

  da: {
    mens: {
      hero: {
        eyebrow: "Sportsure til mænd",
        title: "Performance med",
        titleAccent: "selvtillid og karakter.",
        description:
          "Oplev sportsure til mænd udvalgt for præcision, holdbarhed, markante proportioner og sikker performance i hverdagen.",
        since: "LIDYA · SIDEN 1989",
        statementBefore: "Skabt til bevægelse.",
        statementAccent: "Udvalgt for karakter.",
        imageAlt: "Luksuriøse sportsure til mænd fra LIDYA",
      },

      gallery: {
        eyebrow: "Kollektion af sportsure til mænd",
        title: "Performance udvalgt for",
        titleAccent: "individuel karakter.",
        description:
          "Fra tekniske kronografer til markante moderne designs — oplev sportsure, der kombinerer funktion, komfort og tilstedeværelse.",
        itemLabel: "Sportsure til mænd",
        closingText: "Præcision driver performance.",
        closingAccent: "Karakter gør den personlig.",
      },

      craft: {
        eyebrow: "Karakteren af performance",
        title:
          "Et sportsur defineres af mere end tekniske egenskaber",
        description:
          "Proportioner, komfort, materialer og læsbarhed arbejder sammen i et ur klar til bevægelse og hverdagsliv.",
        closingText: "Performance følger funktion.",
        closingAccent: "Design gør den personlig.",
        since: "LIDYA · SIDEN 1989",

        points: [
          {
            title: "Proportioner",
            description:
              "Kassens dimensioner og balancen i remmen skaber styrke uden at ofre komfort.",
          },
          {
            title: "Materialer",
            description:
              "Stål, keramik, gummi og tekniske materialer understøtter holdbarhed og moderne karakter.",
          },
          {
            title: "Præcision",
            description:
              "Tydelige visninger og pålidelig teknik sikrer sikker tidtagning.",
          },
          {
            title: "Performance",
            description:
              "Hver detalje bidrager til komfort, læsbarhed og daglig pålidelighed.",
          },
        ],
      },

      cta: {
        title: "Oplev sportsure til mænd på håndleddet",
        sub:
          "Besøg LIDYA og sammenlign proportioner, materialer og detaljer personligt.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Sportsure til kvinder",
        title: "Performance med",
        titleAccent: "energi og elegance.",
        description:
          "Oplev sportsure til kvinder, hvor dynamisk design, behagelige proportioner og raffinerede detaljer møder performance i hverdagen.",
        since: "LIDYA · SIDEN 1989",
        statementBefore: "Skabt til bevægelse.",
        statementAccent: "Raffineret til individualitet.",
        imageAlt: "Luksuriøse sportsure til kvinder fra LIDYA",
      },

      gallery: {
        eyebrow: "Kollektion af sportsure til kvinder",
        title: "Dynamiske ure til",
        titleAccent: "individuelt udtryk.",
        description:
          "Oplev sportsure til kvinder, der kombinerer stærke farver, raffinerede proportioner, komfort og moderne performance.",
        itemLabel: "Sportsure til kvinder",
        closingText: "Bevægelse skaber energi.",
        closingAccent: "Stil gør den personlig.",
      },

      craft: {
        eyebrow: "Performance med elegance",
        title:
          "Et sportsur til kvinder balancerer bevægelse og raffinement",
        description:
          "Komfort, proportioner, farve, materialer og klarhed mødes i ure til et aktivt hverdagsliv.",
        closingText: "Funktion skaber selvtillid.",
        closingAccent: "Design skaber identitet.",
        since: "LIDYA · SIDEN 1989",

        points: [
          {
            title: "Proportioner",
            description:
              "Afbalancerede dimensioner giver en stærk, men behagelig tilstedeværelse på håndleddet.",
          },
          {
            title: "Materialer",
            description:
              "Stål, keramik, gummi og raffinerede overflader giver hvert ur sit eget udtryk.",
          },
          {
            title: "Farve",
            description:
              "Farver på skive, rem og kasse tilfører energi og bevarer samtidig visuel harmoni.",
          },
          {
            title: "Komfort",
            description:
              "Den rette balance mellem vægt, form og materialer understøtter naturlig bevægelse gennem dagen.",
          },
        ],
      },

      cta: {
        title: "Oplev sportsure til kvinder personligt",
        sub:
          "Besøg LIDYA og find de proportioner, farver og detaljer, der føles naturlige for dig.",
      },
    },
  },

  /* =======================================================
     FINNISH
     ======================================================= */

  fi: {
    mens: {
      hero: {
        eyebrow: "Miesten urheilukellot",
        title: "Suorituskykyä",
        titleAccent: "varmuudella ja luonteella.",
        description:
          "Tutustu miesten urheilukelloihin, jotka on valittu tarkkuuden, kestävyyden, vahvojen mittasuhteiden ja luotettavan arkisuorituskyvyn perusteella.",
        since: "LIDYA · VUODESTA 1989",
        statementBefore: "Luotu liikkeeseen.",
        statementAccent: "Valittu luonteen vuoksi.",
        imageAlt: "LIDYA:n ylelliset miesten urheilukellot",
      },

      gallery: {
        eyebrow: "Miesten urheilukellomallisto",
        title: "Suorituskykyä",
        titleAccent: "yksilölliseen luonteeseen.",
        description:
          "Teknisistä kronografeista rohkeisiin moderneihin malleihin — tutustu kelloihin, joissa yhdistyvät toimivuus, mukavuus ja läsnäolo.",
        itemLabel: "Miesten urheilukellot",
        closingText: "Tarkkuus vie suorituskykyä eteenpäin.",
        closingAccent: "Luonne tekee siitä henkilökohtaisen.",
      },

      craft: {
        eyebrow: "Suorituskyvyn luonne",
        title:
          "Urheilukelloa määrittää paljon muukin kuin tekninen suorituskyky",
        description:
          "Mittasuhteet, mukavuus, materiaalit ja luettavuus muodostavat kokonaisuuden, joka on valmis liikkeeseen ja arkeen.",
        closingText: "Suorituskyky seuraa toimintoa.",
        closingAccent: "Muotoilu tekee siitä henkilökohtaisen.",
        since: "LIDYA · VUODESTA 1989",

        points: [
          {
            title: "Mittasuhteet",
            description:
              "Kuoren mitat ja rannekkeen tasapaino luovat vahvan vaikutelman ilman mukavuuden menetystä.",
          },
          {
            title: "Materiaalit",
            description:
              "Teräs, keramiikka, kumi ja tekniset materiaalit tukevat kestävyyttä ja modernia luonnetta.",
          },
          {
            title: "Tarkkuus",
            description:
              "Selkeät näytöt ja luotettava tekniikka tukevat varmaa ajanmittausta.",
          },
          {
            title: "Suorituskyky",
            description:
              "Jokainen yksityiskohta tukee mukavuutta, luettavuutta ja päivittäistä luotettavuutta.",
          },
        ],
      },

      cta: {
        title: "Tutustu miesten urheilukelloihin ranteessa",
        sub:
          "Vieraile LIDYA:ssa ja vertaa mittasuhteita, materiaaleja ja yksityiskohtia henkilökohtaisesti.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Naisten urheilukellot",
        title: "Suorituskykyä",
        titleAccent: "energialla ja eleganssilla.",
        description:
          "Tutustu naisten urheilukelloihin, joissa dynaaminen muotoilu, mukavat mittasuhteet ja hienostuneet yksityiskohdat kohtaavat arjen suorituskyvyn.",
        since: "LIDYA · VUODESTA 1989",
        statementBefore: "Luotu liikkeeseen.",
        statementAccent: "Viimeistelty yksilöllisyyttä varten.",
        imageAlt: "LIDYA:n ylelliset naisten urheilukellot",
      },

      gallery: {
        eyebrow: "Naisten urheilukellomallisto",
        title: "Dynaamisia kelloja",
        titleAccent: "yksilölliseen ilmaisuun.",
        description:
          "Tutustu naisten urheilukelloihin, joissa yhdistyvät rohkeat värit, hienostuneet mittasuhteet, mukavuus ja moderni suorituskyky.",
        itemLabel: "Naisten urheilukellot",
        closingText: "Liike luo energiaa.",
        closingAccent: "Tyyli tekee siitä henkilökohtaisen.",
      },

      craft: {
        eyebrow: "Suorituskykyä eleganssilla",
        title:
          "Naisten urheilukello tasapainottaa liikkeen ja hienostuneisuuden",
        description:
          "Mukavuus, mittasuhteet, värit, materiaalit ja selkeys yhdistyvät aktiiviseen arkeen suunnitelluissa kelloissa.",
        closingText: "Toimivuus luo varmuutta.",
        closingAccent: "Muotoilu luo identiteetin.",
        since: "LIDYA · VUODESTA 1989",

        points: [
          {
            title: "Mittasuhteet",
            description:
              "Tasapainoiset mitat luovat vahvan mutta mukavan läsnäolon ranteessa.",
          },
          {
            title: "Materiaalit",
            description:
              "Teräs, keramiikka, kumi ja hienostuneet viimeistelyt antavat jokaiselle mallille oman luonteensa.",
          },
          {
            title: "Väri",
            description:
              "Kellotaulun, rannekkeen ja kuoren värit tuovat energiaa säilyttäen visuaalisen tasapainon.",
          },
          {
            title: "Mukavuus",
            description:
              "Painon, muodon ja materiaalien oikea tasapaino tukee luonnollista liikettä koko päivän ajan.",
          },
        ],
      },

      cta: {
        title: "Tutustu naisten urheilukelloihin henkilökohtaisesti",
        sub:
          "Vieraile LIDYA:ssa ja löydä mittasuhteet, värit ja yksityiskohdat, jotka tuntuvat omiltasi.",
      },
    },
  },

  /* =======================================================
     SWEDISH
     ======================================================= */

  sv: {
    mens: {
      hero: {
        eyebrow: "Sportklockor för män",
        title: "Prestanda med",
        titleAccent: "självsäkerhet och karaktär.",
        description:
          "Upptäck sportklockor för män utvalda för precision, hållbarhet, tydliga proportioner och pålitlig prestanda i vardagen.",
        since: "LIDYA · SEDAN 1989",
        statementBefore: "Skapade för rörelse.",
        statementAccent: "Valda för karaktär.",
        imageAlt: "Lyxiga sportklockor för män från LIDYA",
      },

      gallery: {
        eyebrow: "Kollektionen av sportklockor för män",
        title: "Prestanda utvald för",
        titleAccent: "individuell karaktär.",
        description:
          "Från tekniska kronografer till djärva moderna modeller — upptäck sportklockor som förenar funktion, komfort och närvaro.",
        itemLabel: "Sportklockor för män",
        closingText: "Precision driver prestanda.",
        closingAccent: "Karaktär gör den personlig.",
      },

      craft: {
        eyebrow: "Prestandans karaktär",
        title:
          "En sportklocka definieras av mer än teknisk förmåga",
        description:
          "Proportioner, komfort, material och läsbarhet samverkar i en klocka skapad för rörelse och vardag.",
        closingText: "Prestanda följer funktion.",
        closingAccent: "Design gör den personlig.",
        since: "LIDYA · SEDAN 1989",

        points: [
          {
            title: "Proportioner",
            description:
              "Boettens mått och armbandets balans skapar självsäker närvaro utan att offra komfort.",
          },
          {
            title: "Material",
            description:
              "Stål, keramik, gummi och tekniska material stödjer hållbarhet och modern karaktär.",
          },
          {
            title: "Precision",
            description:
              "Tydliga visningar och pålitlig teknik möjliggör säker tidmätning.",
          },
          {
            title: "Prestanda",
            description:
              "Varje detalj bidrar till komfort, läsbarhet och pålitlighet i vardagen.",
          },
        ],
      },

      cta: {
        title: "Upptäck sportklockor för män på handleden",
        sub:
          "Besök LIDYA och jämför proportioner, material och detaljer personligen.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Sportklockor för kvinnor",
        title: "Prestanda med",
        titleAccent: "energi och elegans.",
        description:
          "Upptäck sportklockor för kvinnor där dynamisk design, bekväma proportioner och raffinerade detaljer möter vardagens prestanda.",
        since: "LIDYA · SEDAN 1989",
        statementBefore: "Skapade för rörelse.",
        statementAccent: "Förfinade för individualitet.",
        imageAlt: "Lyxiga sportklockor för kvinnor från LIDYA",
      },

      gallery: {
        eyebrow: "Kollektionen av sportklockor för kvinnor",
        title: "Dynamiska klockor för",
        titleAccent: "individuellt uttryck.",
        description:
          "Upptäck sportklockor för kvinnor som kombinerar starka färger, raffinerade proportioner, komfort och modern prestanda.",
        itemLabel: "Sportklockor för kvinnor",
        closingText: "Rörelse skapar energi.",
        closingAccent: "Stil gör den personlig.",
      },

      craft: {
        eyebrow: "Prestanda med elegans",
        title:
          "En sportklocka för kvinnor balanserar rörelse och förfining",
        description:
          "Komfort, proportioner, färg, material och tydlighet möts i klockor för ett aktivt vardagsliv.",
        closingText: "Funktion skapar självförtroende.",
        closingAccent: "Design skapar identitet.",
        since: "LIDYA · SEDAN 1989",

        points: [
          {
            title: "Proportioner",
            description:
              "Balanserade mått skapar en självsäker men bekväm närvaro på handleden.",
          },
          {
            title: "Material",
            description:
              "Stål, keramik, gummi och raffinerade ytor ger varje modell en egen karaktär.",
          },
          {
            title: "Färg",
            description:
              "Färger på urtavla, band och boett tillför energi samtidigt som visuell harmoni bevaras.",
          },
          {
            title: "Komfort",
            description:
              "Rätt balans mellan vikt, form och material stödjer naturlig rörelse genom hela dagen.",
          },
        ],
      },

      cta: {
        title: "Upptäck sportklockor för kvinnor personligen",
        sub:
          "Besök LIDYA och hitta proportionerna, färgerna och detaljerna som känns naturliga för dig.",
      },
    },
  },

  /* =======================================================
     FRENCH
     ======================================================= */

  fr: {
    mens: {
      hero: {
        eyebrow: "Montres sport homme",
        title: "La performance avec",
        titleAccent: "assurance et caractère.",
        description:
          "Découvrez des montres sport homme sélectionnées pour leur précision, leur résistance, leurs proportions affirmées et leur performance au quotidien.",
        since: "LIDYA · DEPUIS 1989",
        statementBefore: "Créées pour le mouvement.",
        statementAccent: "Choisies pour leur caractère.",
        imageAlt: "Montres sport homme de luxe LIDYA",
      },

      gallery: {
        eyebrow: "Collection de montres sport homme",
        title: "La performance choisie pour",
        titleAccent: "un caractère individuel.",
        description:
          "Des chronographes techniques aux créations contemporaines affirmées, découvrez des montres qui réunissent fonction, confort et présence.",
        itemLabel: "Montres sport homme",
        closingText: "La précision entraîne la performance.",
        closingAccent: "Le caractère la rend personnelle.",
      },

      craft: {
        eyebrow: "Le caractère de la performance",
        title:
          "Une montre sport se définit par bien plus que ses capacités techniques",
        description:
          "Proportions, confort, matériaux et lisibilité s'associent pour créer une montre prête pour le mouvement et le quotidien.",
        closingText: "La performance suit la fonction.",
        closingAccent: "Le design la rend personnelle.",
        since: "LIDYA · DEPUIS 1989",

        points: [
          {
            title: "Proportions",
            description:
              "Les dimensions du boîtier et l'équilibre du bracelet créent une présence affirmée sans sacrifier le confort.",
          },
          {
            title: "Matériaux",
            description:
              "Acier, céramique, caoutchouc et matériaux techniques favorisent résistance et caractère contemporain.",
          },
          {
            title: "Précision",
            description:
              "Des indications claires et une mécanique fiable assurent une lecture précise du temps.",
          },
          {
            title: "Performance",
            description:
              "Chaque détail contribue au confort, à la lisibilité et à la fiabilité quotidienne.",
          },
        ],
      },

      cta: {
        title: "Découvrez les montres sport homme au poignet",
        sub:
          "Visitez LIDYA et comparez personnellement proportions, matériaux et détails.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Montres sport femme",
        title: "La performance avec",
        titleAccent: "énergie et élégance.",
        description:
          "Découvrez des montres sport femme où design dynamique, proportions confortables et détails raffinés rencontrent la performance du quotidien.",
        since: "LIDYA · DEPUIS 1989",
        statementBefore: "Créées pour le mouvement.",
        statementAccent: "Raffinées pour l'individualité.",
        imageAlt: "Montres sport femme de luxe LIDYA",
      },

      gallery: {
        eyebrow: "Collection de montres sport femme",
        title: "Des montres dynamiques pour",
        titleAccent: "une expression individuelle.",
        description:
          "Découvrez des montres sport femme associant couleurs affirmées, proportions raffinées, confort et performance moderne.",
        itemLabel: "Montres sport femme",
        closingText: "Le mouvement crée l'énergie.",
        closingAccent: "Le style la rend personnelle.",
      },

      craft: {
        eyebrow: "Performance avec élégance",
        title:
          "Une montre sport femme équilibre mouvement et raffinement",
        description:
          "Confort, proportions, couleur, matériaux et lisibilité se réunissent dans des montres pensées pour un quotidien actif.",
        closingText: "La fonction crée la confiance.",
        closingAccent: "Le design crée l'identité.",
        since: "LIDYA · DEPUIS 1989",

        points: [
          {
            title: "Proportions",
            description:
              "Des dimensions équilibrées créent une présence affirmée tout en restant confortable au poignet.",
          },
          {
            title: "Matériaux",
            description:
              "Acier, céramique, caoutchouc et finitions raffinées donnent à chaque modèle son propre caractère.",
          },
          {
            title: "Couleur",
            description:
              "Les couleurs du cadran, du bracelet et du boîtier apportent de l'énergie tout en préservant l'harmonie.",
          },
          {
            title: "Confort",
            description:
              "Le juste équilibre entre poids, forme et matériaux accompagne naturellement le mouvement toute la journée.",
          },
        ],
      },

      cta: {
        title: "Découvrez les montres sport femme en personne",
        sub:
          "Visitez LIDYA et découvrez les proportions, couleurs et détails qui vous correspondent naturellement.",
      },
    },
  },

  /* =======================================================
     ITALIAN
     ======================================================= */

  it: {
    mens: {
      hero: {
        eyebrow: "Orologi sportivi da uomo",
        title: "Performance con",
        titleAccent: "sicurezza e carattere.",
        description:
          "Scoprite orologi sportivi da uomo selezionati per precisione, resistenza, proporzioni decise e prestazioni affidabili nella vita quotidiana.",
        since: "LIDYA · DAL 1989",
        statementBefore: "Creati per il movimento.",
        statementAccent: "Scelti per il carattere.",
        imageAlt: "Orologi sportivi da uomo di lusso LIDYA",
      },

      gallery: {
        eyebrow: "Collezione di orologi sportivi da uomo",
        title: "Performance scelta per",
        titleAccent: "un carattere individuale.",
        description:
          "Dai cronografi tecnici ai modelli contemporanei più decisi, scoprite orologi che uniscono funzione, comfort e presenza.",
        itemLabel: "Orologi sportivi da uomo",
        closingText: "La precisione guida la performance.",
        closingAccent: "Il carattere la rende personale.",
      },

      craft: {
        eyebrow: "Il carattere della performance",
        title:
          "Un orologio sportivo è definito da molto più delle sue capacità tecniche",
        description:
          "Proporzioni, comfort, materiali e leggibilità lavorano insieme per creare un orologio pronto al movimento e alla vita quotidiana.",
        closingText: "La performance segue la funzione.",
        closingAccent: "Il design la rende personale.",
        since: "LIDYA · DAL 1989",

        points: [
          {
            title: "Proporzioni",
            description:
              "Dimensioni della cassa ed equilibrio del cinturino creano presenza senza sacrificare il comfort.",
          },
          {
            title: "Materiali",
            description:
              "Acciaio, ceramica, gomma e materiali tecnici sostengono resistenza e carattere contemporaneo.",
          },
          {
            title: "Precisione",
            description:
              "Indicazioni chiare e tecnica affidabile garantiscono una misurazione sicura del tempo.",
          },
          {
            title: "Performance",
            description:
              "Ogni dettaglio contribuisce a comfort, leggibilità e affidabilità quotidiana.",
          },
        ],
      },

      cta: {
        title: "Scoprite gli orologi sportivi da uomo al polso",
        sub:
          "Visitate LIDYA e confrontate personalmente proporzioni, materiali e dettagli.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Orologi sportivi da donna",
        title: "Performance con",
        titleAccent: "energia ed eleganza.",
        description:
          "Scoprite orologi sportivi da donna dove design dinamico, proporzioni confortevoli e dettagli raffinati incontrano le prestazioni quotidiane.",
        since: "LIDYA · DAL 1989",
        statementBefore: "Creati per il movimento.",
        statementAccent: "Raffinati per l'individualità.",
        imageAlt: "Orologi sportivi da donna di lusso LIDYA",
      },

      gallery: {
        eyebrow: "Collezione di orologi sportivi da donna",
        title: "Orologi dinamici per",
        titleAccent: "un'espressione individuale.",
        description:
          "Scoprite orologi sportivi da donna che combinano colori decisi, proporzioni raffinate, comfort e performance moderna.",
        itemLabel: "Orologi sportivi da donna",
        closingText: "Il movimento crea energia.",
        closingAccent: "Lo stile la rende personale.",
      },

      craft: {
        eyebrow: "Performance con eleganza",
        title:
          "Un orologio sportivo da donna bilancia movimento e raffinatezza",
        description:
          "Comfort, proporzioni, colore, materiali e leggibilità si uniscono in orologi pensati per una vita quotidiana attiva.",
        closingText: "La funzione crea sicurezza.",
        closingAccent: "Il design crea identità.",
        since: "LIDYA · DAL 1989",

        points: [
          {
            title: "Proporzioni",
            description:
              "Dimensioni equilibrate creano una presenza decisa ma confortevole al polso.",
          },
          {
            title: "Materiali",
            description:
              "Acciaio, ceramica, gomma e finiture raffinate donano a ogni modello un carattere proprio.",
          },
          {
            title: "Colore",
            description:
              "I colori di quadrante, cinturino e cassa introducono energia mantenendo armonia visiva.",
          },
          {
            title: "Comfort",
            description:
              "Il giusto equilibrio tra peso, forma e materiali sostiene il movimento naturale durante tutta la giornata.",
          },
        ],
      },

      cta: {
        title: "Scoprite gli orologi sportivi da donna di persona",
        sub:
          "Visitate LIDYA e scoprite proporzioni, colori e dettagli che sentite naturalmente vostri.",
      },
    },
  },

  /* =======================================================
     SPANISH
     ======================================================= */

  es: {
    mens: {
      hero: {
        eyebrow: "Relojes deportivos para hombre",
        title: "Rendimiento con",
        titleAccent: "confianza y carácter.",
        description:
          "Descubra relojes deportivos para hombre seleccionados por su precisión, resistencia, proporciones firmes y rendimiento seguro para el día a día.",
        since: "LIDYA · DESDE 1989",
        statementBefore: "Creados para el movimiento.",
        statementAccent: "Elegidos por su carácter.",
        imageAlt: "Relojes deportivos de lujo para hombre LIDYA",
      },

      gallery: {
        eyebrow: "Colección de relojes deportivos para hombre",
        title: "Rendimiento seleccionado para",
        titleAccent: "un carácter individual.",
        description:
          "Desde cronógrafos técnicos hasta diseños contemporáneos de fuerte presencia, descubra relojes que combinan función, comodidad y personalidad.",
        itemLabel: "Relojes deportivos para hombre",
        closingText: "La precisión impulsa el rendimiento.",
        closingAccent: "El carácter lo hace personal.",
      },

      craft: {
        eyebrow: "El carácter del rendimiento",
        title:
          "Un reloj deportivo se define por mucho más que su capacidad técnica",
        description:
          "Proporciones, comodidad, materiales y legibilidad trabajan juntos para crear un reloj preparado para el movimiento y la vida diaria.",
        closingText: "El rendimiento sigue a la función.",
        closingAccent: "El diseño lo hace personal.",
        since: "LIDYA · DESDE 1989",

        points: [
          {
            title: "Proporciones",
            description:
              "Las dimensiones de la caja y el equilibrio de la correa crean presencia sin sacrificar comodidad.",
          },
          {
            title: "Materiales",
            description:
              "Acero, cerámica, caucho y materiales técnicos aportan resistencia y carácter contemporáneo.",
          },
          {
            title: "Precisión",
            description:
              "Indicaciones claras y una ingeniería fiable permiten medir el tiempo con seguridad.",
          },
          {
            title: "Rendimiento",
            description:
              "Cada detalle contribuye a la comodidad, la legibilidad y la fiabilidad cotidiana.",
          },
        ],
      },

      cta: {
        title: "Descubra los relojes deportivos para hombre en la muñeca",
        sub:
          "Visite LIDYA y compare personalmente proporciones, materiales y detalles.",
      },
    },

    womens: {
      hero: {
        eyebrow: "Relojes deportivos para mujer",
        title: "Rendimiento con",
        titleAccent: "energía y elegancia.",
        description:
          "Descubra relojes deportivos para mujer donde el diseño dinámico, las proporciones cómodas y los detalles refinados se unen al rendimiento cotidiano.",
        since: "LIDYA · DESDE 1989",
        statementBefore: "Creados para el movimiento.",
        statementAccent: "Refinados para la individualidad.",
        imageAlt: "Relojes deportivos de lujo para mujer LIDYA",
      },

      gallery: {
        eyebrow: "Colección de relojes deportivos para mujer",
        title: "Relojes dinámicos seleccionados para",
        titleAccent: "una expresión individual.",
        description:
          "Descubra relojes deportivos para mujer que combinan colores seguros, proporciones refinadas, comodidad y rendimiento moderno.",
        itemLabel: "Relojes deportivos para mujer",
        closingText: "El movimiento crea energía.",
        closingAccent: "El estilo la hace personal.",
      },

      craft: {
        eyebrow: "Rendimiento con elegancia",
        title:
          "Un reloj deportivo para mujer equilibra movimiento y refinamiento",
        description:
          "Comodidad, proporciones, color, materiales y legibilidad se unen en relojes diseñados para una vida cotidiana activa.",
        closingText: "La función crea confianza.",
        closingAccent: "El diseño crea identidad.",
        since: "LIDYA · DESDE 1989",

        points: [
          {
            title: "Proporciones",
            description:
              "Las dimensiones equilibradas crean una presencia segura y cómoda en la muñeca.",
          },
          {
            title: "Materiales",
            description:
              "Acero, cerámica, caucho y acabados refinados aportan a cada modelo un carácter propio.",
          },
          {
            title: "Color",
            description:
              "Los colores de esfera, correa y caja introducen energía manteniendo la armonía visual.",
          },
          {
            title: "Comodidad",
            description:
              "El equilibrio adecuado de peso, forma y materiales favorece el movimiento natural durante todo el día.",
          },
        ],
      },

      cta: {
        title: "Descubra personalmente los relojes deportivos para mujer",
        sub:
          "Visite LIDYA y descubra las proporciones, colores y detalles que se sienten naturalmente suyos.",
      },
    },
  },
};

/* =========================================================
   GALLERY CAPTIONS — ALL 15 LANGUAGES
   ========================================================= */

const SPORT_CAPTIONS: Record<Locale, GalleryCaptions> = {
  de: {
    mens: [
      "Performance-Chronograph",
      "Technisches Schwarz",
      "Präzisionssport",
      "Stahl-Performance",
      "Dynamisches Zifferblatt",
      "Raffinierter Sport",
      "Technische Präsenz",
      "Aktiver Charakter",
      "Markante Performance",
      "Sport-Signature",
    ],
    womens: [
      "Aktive Eleganz",
      "Sportliche Farbe",
      "Raffinierte Performance",
      "Dynamischer Ausdruck",
      "Moderner Sport",
      "Elegante Präzision",
      "Warmer Sport",
      "Markante Farbe",
      "Leichte Performance",
      "Sport-Signature",
    ],
  },

  en: {
    mens: [
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
    ],
    womens: [
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
    ],
  },

  tr: {
    mens: [
      "Performans Kronografı",
      "Teknik Siyah",
      "Hassas Spor",
      "Çelik Performans",
      "Dinamik Kadran",
      "Rafine Spor",
      "Teknik Duruş",
      "Aktif Karakter",
      "Güçlü Performans",
      "Spor İmzası",
    ],
    womens: [
      "Aktif Zarafet",
      "Spor Rengi",
      "Rafine Performans",
      "Dinamik İfade",
      "Çağdaş Spor",
      "Zarif Hassasiyet",
      "Sıcak Spor",
      "Güçlü Renk",
      "Hafif Performans",
      "Spor İmzası",
    ],
  },

  sk: {
    mens: [
      "Výkonnostný chronograf",
      "Technická čierna",
      "Športová presnosť",
      "Oceľový výkon",
      "Dynamický ciferník",
      "Rafinovaný šport",
      "Technická prítomnosť",
      "Aktívny charakter",
      "Výrazný výkon",
      "Športový podpis",
    ],
    womens: [
      "Aktívna elegancia",
      "Športová farba",
      "Rafinovaný výkon",
      "Dynamický výraz",
      "Súčasný šport",
      "Elegantná presnosť",
      "Teplý športový tón",
      "Výrazná farba",
      "Ľahký výkon",
      "Športový podpis",
    ],
  },

  cs: {
    mens: [
      "Výkonnostní chronograf",
      "Technická černá",
      "Sportovní přesnost",
      "Ocelový výkon",
      "Dynamický ciferník",
      "Rafinovaný sport",
      "Technická přítomnost",
      "Aktivní charakter",
      "Výrazný výkon",
      "Sportovní podpis",
    ],
    womens: [
      "Aktivní elegance",
      "Sportovní barva",
      "Rafinovaný výkon",
      "Dynamický výraz",
      "Současný sport",
      "Elegantní přesnost",
      "Teplý sportovní tón",
      "Výrazná barva",
      "Lehký výkon",
      "Sportovní podpis",
    ],
  },

  hu: {
    mens: [
      "Performance kronográf",
      "Technikai fekete",
      "Precíz sport",
      "Acél teljesítmény",
      "Dinamikus számlap",
      "Kifinomult sport",
      "Technikai jelenlét",
      "Aktív karakter",
      "Erőteljes teljesítmény",
      "Sport signature",
    ],
    womens: [
      "Aktív elegancia",
      "Sportos szín",
      "Kifinomult teljesítmény",
      "Dinamikus kifejezés",
      "Kortárs sport",
      "Elegáns pontosság",
      "Meleg sport",
      "Karakteres szín",
      "Könnyed teljesítmény",
      "Sport signature",
    ],
  },

  pl: {
    mens: [
      "Chronograf performance",
      "Techniczna czerń",
      "Sportowa precyzja",
      "Stalowa wydajność",
      "Dynamiczna tarcza",
      "Wyrafinowany sport",
      "Techniczna obecność",
      "Aktywny charakter",
      "Wyrazista wydajność",
      "Sportowa sygnatura",
    ],
    womens: [
      "Aktywna elegancja",
      "Sportowy kolor",
      "Wyrafinowana wydajność",
      "Dynamiczny wyraz",
      "Nowoczesny sport",
      "Elegancka precyzja",
      "Ciepły sport",
      "Wyrazisty kolor",
      "Lekka wydajność",
      "Sportowa sygnatura",
    ],
  },

  ru: {
    mens: [
      "Спортивный хронограф",
      "Технический чёрный",
      "Спортивная точность",
      "Стальная производительность",
      "Динамичный циферблат",
      "Утончённый спорт",
      "Техническое присутствие",
      "Активный характер",
      "Выразительная производительность",
      "Спортивная подпись",
    ],
    womens: [
      "Активная элегантность",
      "Спортивный цвет",
      "Утончённая производительность",
      "Динамичное выражение",
      "Современный спорт",
      "Элегантная точность",
      "Тёплый спорт",
      "Выразительный цвет",
      "Лёгкая производительность",
      "Спортивная подпись",
    ],
  },

  nl: {
    mens: [
      "Performance Chronograaf",
      "Technisch Zwart",
      "Precisiesport",
      "Stalen Performance",
      "Dynamische Wijzerplaat",
      "Verfijnde Sport",
      "Technische Uitstraling",
      "Actief Karakter",
      "Krachtige Performance",
      "Sport Signature",
    ],
    womens: [
      "Actieve Elegantie",
      "Sportkleur",
      "Verfijnde Performance",
      "Dynamische Expressie",
      "Moderne Sport",
      "Elegante Precisie",
      "Warme Sport",
      "Krachtige Kleur",
      "Lichte Performance",
      "Sport Signature",
    ],
  },

  da: {
    mens: [
      "Performance-kronograf",
      "Teknisk sort",
      "Præcisionssport",
      "Stålperformance",
      "Dynamisk urskive",
      "Raffineret sport",
      "Teknisk tilstedeværelse",
      "Aktiv karakter",
      "Markant performance",
      "Sportssignatur",
    ],
    womens: [
      "Aktiv elegance",
      "Sportsfarve",
      "Raffineret performance",
      "Dynamisk udtryk",
      "Moderne sport",
      "Elegant præcision",
      "Varm sport",
      "Markant farve",
      "Let performance",
      "Sportssignatur",
    ],
  },

  fi: {
    mens: [
      "Performance-kronografi",
      "Tekninen musta",
      "Tarkkuussportti",
      "Terässuorituskyky",
      "Dynaaminen kellotaulu",
      "Hienostunut sportti",
      "Tekninen läsnäolo",
      "Aktiivinen luonne",
      "Vahva suorituskyky",
      "Sport Signature",
    ],
    womens: [
      "Aktiivinen eleganssi",
      "Sporttinen väri",
      "Hienostunut suorituskyky",
      "Dynaaminen ilmaisu",
      "Moderni sportti",
      "Elegantti tarkkuus",
      "Lämmin sportti",
      "Vahva väri",
      "Kevyt suorituskyky",
      "Sport Signature",
    ],
  },

  sv: {
    mens: [
      "Performance-kronograf",
      "Tekniskt svart",
      "Precisionssport",
      "Stålprestanda",
      "Dynamisk urtavla",
      "Raffinerad sport",
      "Teknisk närvaro",
      "Aktiv karaktär",
      "DjÃ¤rv prestanda".replace("Ã¤", "ä"),
      "Sportsignatur",
    ],
    womens: [
      "Aktiv elegans",
      "Sportfärg",
      "Raffinerad prestanda",
      "Dynamiskt uttryck",
      "Modern sport",
      "Elegant precision",
      "Varm sport",
      "DjÃ¤rv färg".replace("Ã¤", "ä"),
      "Lätt prestanda",
      "Sportsignatur",
    ],
  },

  fr: {
    mens: [
      "Chronographe Performance",
      "Noir Technique",
      "Précision Sport",
      "Performance Acier",
      "Cadran Dynamique",
      "Sport Raffiné",
      "Présence Technique",
      "Caractère Actif",
      "Performance Affirmée",
      "Signature Sport",
    ],
    womens: [
      "Élégance Active",
      "Couleur Sport",
      "Performance Raffinée",
      "Expression Dynamique",
      "Sport Contemporain",
      "Précision Élégante",
      "Sport Chaleureux",
      "Couleur Affirmée",
      "Performance Légère",
      "Signature Sport",
    ],
  },

  it: {
    mens: [
      "Cronografo Performance",
      "Nero Tecnico",
      "Precisione Sport",
      "Performance in Acciaio",
      "Quadrante Dinamico",
      "Sport Raffinato",
      "Presenza Tecnica",
      "Carattere Attivo",
      "Performance Decisa",
      "Firma Sportiva",
    ],
    womens: [
      "Eleganza Attiva",
      "Colore Sport",
      "Performance Raffinata",
      "Espressione Dinamica",
      "Sport Contemporaneo",
      "Precisione Elegante",
      "Sport Caldo",
      "Colore Deciso",
      "Performance Leggera",
      "Firma Sportiva",
    ],
  },

  es: {
    mens: [
      "Cronógrafo Performance",
      "Negro Técnico",
      "Precisión Deportiva",
      "Rendimiento en Acero",
      "Esfera Dinámica",
      "Deporte Refinado",
      "Presencia Técnica",
      "Carácter Activo",
      "Rendimiento Audaz",
      "Firma Deportiva",
    ],
    womens: [
      "Elegancia Activa",
      "Color Deportivo",
      "Rendimiento Refinado",
      "Expresión Dinámica",
      "Deporte Contemporáneo",
      "Precisión Elegante",
      "Deporte Cálido",
      "Color Audaz",
      "Rendimiento Ligero",
      "Firma Deportiva",
    ],
  },
};

/* =========================================================
   GALLERY IMAGES
   ========================================================= */

const MEN_IMAGES: SportGalleryImage[] = [
  {
    image: "/images/watches/sport-category/sport-man/sport1.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport2.png",
    objectPosition: "54% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport3.png",
    objectPosition: "55% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport4.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport5.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport6.png",
    objectPosition: "54% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport7.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport8.png",
    objectPosition: "55% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport9.png",
    objectPosition: "54% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-man/sport10.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
];

const WOMEN_IMAGES: SportGalleryImage[] = [
  {
    image: "/images/watches/sport-category/sport-woman/sport-w1.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w2.png",
    objectPosition: "52% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w3.png",
    objectPosition: "54% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w4.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w5.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w6.png",
    objectPosition: "54% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w7.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w8.png",
    objectPosition: "55% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w9.png",
    objectPosition: "54% 50%",
    scale: 1,
  },
  {
    image: "/images/watches/sport-category/sport-woman/sport-w10.png",
    objectPosition: "50% 50%",
    scale: 1,
  },
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
   HERO
   ========================================================= */

function SportGenderHero({
  copy,
  gender,
}: {
  copy: GenderCopy["hero"];
  gender: Gender;
}) {
  const [loaded, setLoaded] = useState(false);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const imageRef =
    useRef<HTMLDivElement | null>(null);

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

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    let frame: number | null = null;

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
        requestAnimationFrame(update);
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
      {/* HERO IMAGE */}
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

      {/* LEFT READABILITY */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(5,12,18,0.94)_0%,rgba(5,12,18,0.82)_22%,rgba(5,12,18,0.55)_43%,rgba(5,12,18,0.18)_68%,rgba(5,12,18,0.02)_100%)]
        "
      />

      {/* BOTTOM DEPTH */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(0deg,rgba(3,8,12,0.88)_0%,rgba(3,8,12,0.38)_23%,rgba(3,8,12,0.07)_48%,transparent_70%)]
        "
      />

      {/* HEADER READABILITY */}
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

      {/* GOLD GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_40%,rgba(213,176,95,0.095)_0%,rgba(213,176,95,0.025)_30%,transparent_57%)]
        "
      />

      {/* COOL SPORT TONE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_42%_38%,rgba(44,79,101,0.10)_0%,rgba(44,79,101,0.025)_34%,transparent_60%)]
        "
      />

      {/* CONTENT */}
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
          {/* EYEBROW */}
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
              transitionDelay: "120ms",
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

          {/* TITLE */}
          <h1
            className="
              mt-6
              max-w-[780px]
              font-display
              text-[3.1rem]
              leading-[0.92]
              tracking-[-0.042em]
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
                  transitionDelay: "330ms",
                }}
              >
                {copy.titleAccent}
              </span>
            </span>
          </h1>

          {/* DESCRIPTION */}
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

        {/* STATEMENT */}
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
            transitionDelay: "680ms",
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
  const { locale } = useLanguage();

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
      ? SPORT_CAPTIONS[locale].mens
      : SPORT_CAPTIONS[locale].womens;

  const galleryItems = images.map(
    (item, index) => ({
      image: item.image,

      caption:
        captions[index] ?? "",

      alt: `${copy.gallery.itemLabel} ${
        index + 1
      }`,

      objectPosition:
        item.objectPosition ??
        "50% 50%",

      scale:
        item.scale ?? 1,
    })
  );

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <SportGenderHero
          gender={gender}
          copy={copy.hero}
        />

        {/* GALLERY */}
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
            copy.gallery.closingAccent
          }
          items={galleryItems}
        />

        {/* CRAFT */}
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
            copy.craft.closingAccent
          }
          since={
            copy.craft.since
          }
        />

        {/* CTA */}
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