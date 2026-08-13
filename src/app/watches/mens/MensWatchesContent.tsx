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

type MensWatchesCopy = {
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
    captions: string[];
    alts: string[];
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

const MENS_WATCHES_COPY: Record<Locale, MensWatchesCopy> = {
  en: {
    hero: {
      eyebrow: "Men's Watches",
      title: "Timepieces with",
      titleAccent: "presence and character.",
      description:
        "From refined everyday watches to confident sport-inspired designs, discover men's timepieces selected for proportion, material, precision and the way they feel on the wrist.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Made to measure time.",
      statementAccent: "Chosen to express character.",
      imageAlt:
        "Luxury men's watches presented in a refined LIDYA setting",
    },

    gallery: {
      eyebrow: "The Men's Watch Collection",
      title: "Watches selected for",
      titleAccent: "individual character.",
      description:
        "Every watch has its own balance of proportion, material, dial architecture and presence. Explore timepieces chosen to complement personal style rather than follow a single definition of luxury.",
      itemLabel: "Men's Watches",
      closingText: "Precision gives time its rhythm.",
      closingAccent: "Character makes it personal.",
      captions: [
        "Chronograph",
        "Modern Classic",
        "Dark Dial",
        "Refined Sport",
        "Steel Presence",
        "Contemporary Design",
        "Performance Watch",
        "Everyday Elegance",
        "Statement Timepiece",
        "Signature Watch",
      ],
      alts: [
        "Luxury men's chronograph watch in a refined setting",
        "Elegant men's watch with classic proportions",
        "Men's watch with a dark dial and polished case",
        "Sport-inspired men's luxury watch",
        "Men's steel watch with confident proportions",
        "Contemporary men's watch with refined finishing",
        "Performance-inspired men's wristwatch",
        "Elegant men's everyday luxury watch",
        "Statement men's watch with distinctive dial",
        "Signature men's timepiece presented by LIDYA",
      ],
    },

    craft: {
      eyebrow: "The Character of a Fine Watch",
      title: "A men's watch is defined by more than its movement",
      description:
        "The relationship between case, dial, material, finishing and wrist presence determines how a watch feels long before its technical specifications are considered.",
      closingText: "Engineering measures time.",
      closingAccent: "Design gives it identity.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Proportion",
          description:
            "Diameter, thickness, lug profile and bracelet balance determine how naturally a watch sits on the wrist. The right proportions create presence without excess.",
        },
        {
          title: "Materials",
          description:
            "Steel, gold, leather, ceramic and modern technical materials each create a different expression, weight and relationship with light.",
        },
        {
          title: "Precision",
          description:
            "Behind every considered dial lies engineering designed to measure time reliably, consistently and with confidence.",
        },
        {
          title: "Character",
          description:
            "Dial architecture, colour, finishing and individual details transform a functional instrument into a personal signature.",
        },
      ],
    },

    cta: {
      title: "The right watch is discovered on the wrist",
      sub:
        "Visit LIDYA and experience our men's watches in person. Compare proportions, materials and details and discover the timepiece that feels naturally yours.",
    },
  },

  de: {
    hero: {
      eyebrow: "Herrenuhren",
      title: "Zeitmesser mit",
      titleAccent: "Präsenz und Charakter.",
      description:
        "Von raffinierten Alltagsuhren bis zu selbstbewussten sportlichen Designs — entdecken Sie Herrenuhren, ausgewählt nach Proportion, Material, Präzision und Tragegefühl.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Geschaffen, um Zeit zu messen.",
      statementAccent: "Ausgewählt, um Charakter auszudrücken.",
      imageAlt:
        "Luxuriöse Herrenuhren in einer eleganten LIDYA Umgebung",
    },

    gallery: {
      eyebrow: "Die Herrenuhrenkollektion",
      title: "Uhren ausgewählt für",
      titleAccent: "individuellen Charakter.",
      description:
        "Jede Uhr besitzt ihr eigenes Zusammenspiel aus Proportionen, Materialien, Zifferblattarchitektur und Präsenz. Entdecken Sie Zeitmesser, die persönlichen Stil unterstreichen.",
      itemLabel: "Herrenuhren",
      closingText: "Präzision gibt der Zeit ihren Rhythmus.",
      closingAccent: "Charakter macht sie persönlich.",
      captions: [
        "Chronograph",
        "Moderner Klassiker",
        "Dunkles Zifferblatt",
        "Sportliche Eleganz",
        "Stahlpräsenz",
        "Modernes Design",
        "Performance-Uhr",
        "Eleganz für jeden Tag",
        "Statement-Uhr",
        "Signature-Uhr",
      ],
      alts: [
        "Luxuriöser Herrenchronograph",
        "Elegante Herrenuhr mit klassischen Proportionen",
        "Herrenuhr mit dunklem Zifferblatt",
        "Sportlich inspirierte Luxusuhr für Herren",
        "Herrenuhr aus Stahl mit markanten Proportionen",
        "Moderne Herrenuhr mit raffinierter Verarbeitung",
        "Performance-inspirierte Herrenuhr",
        "Elegante Herrenuhr für jeden Tag",
        "Ausdrucksstarke Herrenuhr mit charakteristischem Zifferblatt",
        "Signature-Herrenuhr von LIDYA",
      ],
    },

    craft: {
      eyebrow: "Der Charakter einer feinen Uhr",
      title: "Eine Herrenuhr wird durch mehr als ihr Uhrwerk bestimmt",
      description:
        "Das Zusammenspiel von Gehäuse, Zifferblatt, Material, Verarbeitung und Präsenz am Handgelenk bestimmt den Charakter einer Uhr.",
      closingText: "Technik misst die Zeit.",
      closingAccent: "Design gibt ihr Identität.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Proportion",
          description:
            "Durchmesser, Höhe, Bandanstöße und Armbandbalance bestimmen, wie natürlich eine Uhr am Handgelenk sitzt.",
        },
        {
          title: "Materialien",
          description:
            "Stahl, Gold, Leder, Keramik und moderne technische Materialien schaffen jeweils eine eigene Wirkung und Haptik.",
        },
        {
          title: "Präzision",
          description:
            "Hinter jedem sorgfältig gestalteten Zifferblatt arbeitet Technik, die Zeit zuverlässig und konstant misst.",
        },
        {
          title: "Charakter",
          description:
            "Zifferblattarchitektur, Farbe, Verarbeitung und Details verwandeln ein funktionales Instrument in eine persönliche Signatur.",
        },
      ],
    },

    cta: {
      title: "Die richtige Uhr entdeckt man am Handgelenk",
      sub:
        "Besuchen Sie LIDYA und erleben Sie unsere Herrenuhren persönlich. Vergleichen Sie Proportionen, Materialien und Details und entdecken Sie den Zeitmesser, der wirklich zu Ihnen passt.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Erkek Saatleri",
      title: "Duruşu ve",
      titleAccent: "karakteri olan saatler.",
      description:
        "Rafine günlük modellerden güçlü sportif tasarımlara kadar, oranları, malzemeleri, hassasiyeti ve bilekteki hissiyle seçilen erkek saatlerini keşfedin.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Zamanı ölçmek için üretildi.",
      statementAccent: "Karakteri ifade etmek için seçildi.",
      imageAlt:
        "Şık LIDYA ortamında sunulan lüks erkek saatleri",
    },

    gallery: {
      eyebrow: "Erkek Saat Koleksiyonu",
      title: "Bireysel karakter için",
      titleAccent: "seçilmiş saatler.",
      description:
        "Her saatin oran, malzeme, kadran mimarisi ve duruş açısından kendine özgü bir dengesi vardır. Kişisel stile eşlik eden saatleri keşfedin.",
      itemLabel: "Erkek Saatleri",
      closingText: "Hassasiyet zamana ritim verir.",
      closingAccent: "Karakter onu kişisel kılar.",
      captions: [
        "Kronograf",
        "Modern Klasik",
        "Koyu Kadran",
        "Sportif Zarafet",
        "Çelik Duruş",
        "Çağdaş Tasarım",
        "Performans Saati",
        "Günlük Zarafet",
        "İddialı Saat",
        "İmza Saat",
      ],
      alts: [
        "Lüks erkek kronograf saati",
        "Klasik oranlara sahip zarif erkek saati",
        "Koyu kadranlı erkek saati",
        "Sportif lüks erkek saati",
        "Güçlü oranlara sahip çelik erkek saati",
        "Rafine yüzeylere sahip çağdaş erkek saati",
        "Performans odaklı erkek kol saati",
        "Zarif günlük erkek saati",
        "Belirgin kadranlı güçlü erkek saati",
        "LIDYA imza erkek saati",
      ],
    },

    craft: {
      eyebrow: "İyi Bir Saatin Karakteri",
      title: "Bir erkek saatini yalnızca mekanizması tanımlamaz",
      description:
        "Kasa, kadran, malzeme, yüzey işçiliği ve bilekteki duruş arasındaki ilişki saatin karakterini belirler.",
      closingText: "Mühendislik zamanı ölçer.",
      closingAccent: "Tasarım ona kimlik verir.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Oran",
          description:
            "Çap, kalınlık, boynuz yapısı ve bilezik dengesi saatin bileğe ne kadar doğal oturduğunu belirler.",
        },
        {
          title: "Malzemeler",
          description:
            "Çelik, altın, deri, seramik ve modern teknik malzemeler farklı bir görünüm, ağırlık ve ışık ilişkisi yaratır.",
        },
        {
          title: "Hassasiyet",
          description:
            "Her özenli kadranın arkasında zamanı güvenilir ve tutarlı şekilde ölçmek için geliştirilmiş mühendislik bulunur.",
        },
        {
          title: "Karakter",
          description:
            "Kadran mimarisi, renk, yüzey işçiliği ve detaylar işlevsel bir aracı kişisel bir imzaya dönüştürür.",
        },
      ],
    },

    cta: {
      title: "Doğru saat bilekte keşfedilir",
      sub:
        "LIDYA'yı ziyaret edin ve erkek saatlerimizi yakından deneyimleyin. Oranları, malzemeleri ve detayları karşılaştırarak size ait hissettiren saati keşfedin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Pánske hodinky",
      title: "Hodinky s",
      titleAccent: "prítomnosťou a charakterom.",
      description:
        "Od elegantných každodenných hodiniek až po sebavedomé športovo ladené modely — objavte pánske hodinky vybrané podľa proporcií, materiálu, presnosti a pocitu na zápästí.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Vytvorené na meranie času.",
      statementAccent: "Vybrané na vyjadrenie charakteru.",
      imageAlt:
        "Luxusné pánske hodinky prezentované v elegantnom prostredí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcia pánskych hodiniek",
      title: "Hodinky vybrané pre",
      titleAccent: "osobitý charakter.",
      description:
        "Každé hodinky majú vlastnú rovnováhu proporcií, materiálov, architektúry ciferníka a celkového výrazu. Objavte modely vybrané tak, aby dopĺňali osobný štýl.",
      itemLabel: "Pánske hodinky",
      closingText: "Presnosť dáva času rytmus.",
      closingAccent: "Charakter ho robí osobným.",
      captions: [
        "Chronograf",
        "Moderná klasika",
        "Tmavý ciferník",
        "Športová elegancia",
        "Oceľový charakter",
        "Súčasný dizajn",
        "Výkonnostné hodinky",
        "Každodenná elegancia",
        "Výrazné hodinky",
        "Signature hodinky",
      ],
      alts: [
        "Luxusný pánsky chronograf",
        "Elegantné pánske hodinky s klasickými proporciami",
        "Pánske hodinky s tmavým ciferníkom",
        "Športovo ladené luxusné pánske hodinky",
        "Oceľové pánske hodinky s výraznými proporciami",
        "Moderné pánske hodinky s precíznym spracovaním",
        "Pánske hodinky inšpirované výkonom",
        "Elegantné pánske hodinky na každý deň",
        "Výrazné pánske hodinky s charakteristickým ciferníkom",
        "Signature pánske hodinky LIDYA",
      ],
    },

    craft: {
      eyebrow: "Charakter výnimočných hodiniek",
      title: "Pánske hodinky neurčuje iba ich mechanizmus",
      description:
        "Vzťah medzi puzdrom, ciferníkom, materiálom, povrchovou úpravou a pocitom na zápästí určuje, ako hodinky pôsobia ešte predtým, než sa pozrieme na ich technické parametre.",
      closingText: "Technika meria čas.",
      closingAccent: "Dizajn mu dáva identitu.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Proporcie",
          description:
            "Priemer, hrúbka, tvar nožičiek a vyváženie náramku určujú, ako prirodzene hodinky sedia na zápästí.",
        },
        {
          title: "Materiály",
          description:
            "Oceľ, zlato, koža, keramika a moderné technické materiály vytvárajú odlišný výraz, hmotnosť aj spôsob práce so svetlom.",
        },
        {
          title: "Presnosť",
          description:
            "Za každým premysleným ciferníkom stojí technika navrhnutá tak, aby merala čas spoľahlivo a konzistentne.",
        },
        {
          title: "Charakter",
          description:
            "Architektúra ciferníka, farba, povrchové spracovanie a jednotlivé detaily premieňajú funkčný nástroj na osobný podpis.",
        },
      ],
    },

    cta: {
      title: "Tie správne hodinky treba cítiť na zápästí",
      sub:
        "Navštívte LIDYA a spoznajte naše pánske hodinky osobne. Porovnajte proporcie, materiály a detaily a objavte model, ktorý bude pôsobiť prirodzene ako váš.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Pánské hodinky",
      title: "Hodinky s",
      titleAccent: "přítomností a charakterem.",
      description:
        "Od elegantních každodenních hodinek po sebevědomé sportovně laděné modely — objevte pánské hodinky vybrané podle proporcí, materiálu, přesnosti a pocitu na zápěstí.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Vytvořené k měření času.",
      statementAccent: "Vybrané k vyjádření charakteru.",
      imageAlt:
        "Luxusní pánské hodinky prezentované v elegantním prostředí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekce pánských hodinek",
      title: "Hodinky vybrané pro",
      titleAccent: "osobitý charakter.",
      description:
        "Každé hodinky mají vlastní rovnováhu proporcí, materiálů, architektury ciferníku a celkového výrazu.",
      itemLabel: "Pánské hodinky",
      closingText: "Přesnost dává času rytmus.",
      closingAccent: "Charakter ho činí osobním.",
      captions: [
        "Chronograf",
        "Moderní klasika",
        "Tmavý ciferník",
        "Sportovní elegance",
        "Ocelový charakter",
        "Současný design",
        "Výkonnostní hodinky",
        "Každodenní elegance",
        "Výrazné hodinky",
        "Signature hodinky",
      ],
      alts: [
        "Luxusní pánský chronograf",
        "Elegantní pánské hodinky s klasickými proporcemi",
        "Pánské hodinky s tmavým ciferníkem",
        "Sportovně laděné luxusní pánské hodinky",
        "Ocelové pánské hodinky s výraznými proporcemi",
        "Moderní pánské hodinky s precizním zpracováním",
        "Pánské hodinky inspirované výkonem",
        "Elegantní pánské hodinky pro každý den",
        "Výrazné pánské hodinky s charakteristickým ciferníkem",
        "Signature pánské hodinky LIDYA",
      ],
    },

    craft: {
      eyebrow: "Charakter výjimečných hodinek",
      title: "Pánské hodinky neurčuje pouze jejich mechanismus",
      description:
        "Vztah mezi pouzdrem, ciferníkem, materiálem, povrchovou úpravou a pocitem na zápěstí určuje charakter hodinek.",
      closingText: "Technika měří čas.",
      closingAccent: "Design mu dává identitu.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Proporce",
          description:
            "Průměr, tloušťka, tvar nožek a vyvážení náramku určují, jak přirozeně hodinky sedí na zápěstí.",
        },
        {
          title: "Materiály",
          description:
            "Ocel, zlato, kůže, keramika a moderní technické materiály vytvářejí rozdílný výraz a pocit.",
        },
        {
          title: "Přesnost",
          description:
            "Za každým promyšleným ciferníkem stojí technika navržená tak, aby měřila čas spolehlivě a konzistentně.",
        },
        {
          title: "Charakter",
          description:
            "Architektura ciferníku, barva, povrchová úprava a detaily proměňují funkční nástroj v osobní podpis.",
        },
      ],
    },

    cta: {
      title: "Ty správné hodinky je třeba cítit na zápěstí",
      sub:
        "Navštivte LIDYA a poznejte naše pánské hodinky osobně. Porovnejte proporce, materiály a detaily a objevte model, který bude působit přirozeně jako váš.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Férfi órák",
      title: "Időmérők",
      titleAccent: "jelenléttel és karakterrel.",
      description:
        "A kifinomult hétköznapi modellektől a sportos kialakításig fedezze fel az arányok, anyagok, pontosság és csuklón nyújtott érzés alapján kiválasztott férfi órákat.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "Az idő mérésére alkotva.",
      statementAccent: "A karakter kifejezésére választva.",
      imageAlt:
        "Luxus férfi órák elegáns LIDYA környezetben",
    },

    gallery: {
      eyebrow: "Férfi órakollekció",
      title: "Órák",
      titleAccent: "egyéni karakterhez.",
      description:
        "Minden órának saját egyensúlya van az arányok, anyagok, számlapfelépítés és megjelenés között.",
      itemLabel: "Férfi órák",
      closingText: "A pontosság ritmust ad az időnek.",
      closingAccent: "A karakter személyessé teszi.",
      captions: [
        "Kronográf",
        "Modern klasszikus",
        "Sötét számlap",
        "Sportos elegancia",
        "Acél karakter",
        "Kortárs design",
        "Performance óra",
        "Mindennapi elegancia",
        "Karakteres óra",
        "Signature óra",
      ],
      alts: [
        "Luxus férfi kronográf",
        "Elegáns férfi óra klasszikus arányokkal",
        "Férfi óra sötét számlappal",
        "Sportos luxus férfi óra",
        "Acél férfi óra karakteres arányokkal",
        "Kortárs férfi óra kifinomult kidolgozással",
        "Teljesítmény ihlette férfi óra",
        "Elegáns mindennapi férfi óra",
        "Karakteres férfi óra különleges számlappal",
        "LIDYA signature férfi óra",
      ],
    },

    craft: {
      eyebrow: "Egy finom óra karaktere",
      title: "Egy férfi órát nem csupán a szerkezete határoz meg",
      description:
        "A tok, számlap, anyag, kidolgozás és csuklón való jelenlét együtt alakítja az óra karakterét.",
      closingText: "A mérnöki tudás méri az időt.",
      closingAccent: "A design identitást ad neki.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Arányok",
          description:
            "Az átmérő, vastagság, fülek és a szíj egyensúlya határozza meg, hogyan illeszkedik az óra a csuklóra.",
        },
        {
          title: "Anyagok",
          description:
            "Az acél, arany, bőr, kerámia és modern technikai anyagok mind saját karaktert adnak.",
        },
        {
          title: "Pontosság",
          description:
            "Minden gondosan megtervezett számlap mögött megbízható és következetes mérnöki megoldás dolgozik.",
        },
        {
          title: "Karakter",
          description:
            "A számlap felépítése, színe és részletei személyes aláírássá alakítják az órát.",
        },
      ],
    },

    cta: {
      title: "A megfelelő órát a csuklón lehet igazán felfedezni",
      sub:
        "Látogasson el a LIDYA-hoz, próbálja fel férfi óráinkat, és találja meg az Ön számára megfelelő arányokat, anyagokat és részleteket.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki męskie",
      title: "Czasomierze z",
      titleAccent: "obecnością i charakterem.",
      description:
        "Od eleganckich modeli codziennych po wyraziste projekty sportowe — odkryj zegarki męskie dobierane pod względem proporcji, materiałów i precyzji.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Stworzone do mierzenia czasu.",
      statementAccent: "Wybrane, by wyrażać charakter.",
      imageAlt:
        "Luksusowe zegarki męskie w eleganckim otoczeniu LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcja zegarków męskich",
      title: "Zegarki wybrane dla",
      titleAccent: "indywidualnego charakteru.",
      description:
        "Każdy zegarek ma własną równowagę proporcji, materiałów, architektury tarczy i obecności na nadgarstku.",
      itemLabel: "Zegarki męskie",
      closingText: "Precyzja nadaje czasowi rytm.",
      closingAccent: "Charakter czyni go osobistym.",
      captions: [
        "Chronograf",
        "Nowoczesna klasyka",
        "Ciemna tarcza",
        "Sportowa elegancja",
        "Charakter stali",
        "Współczesny design",
        "Zegarek performance",
        "Codzienna elegancja",
        "Wyrazisty zegarek",
        "Zegarek signature",
      ],
      alts: [
        "Luksusowy męski chronograf",
        "Elegancki zegarek męski o klasycznych proporcjach",
        "Zegarek męski z ciemną tarczą",
        "Sportowy luksusowy zegarek męski",
        "Stalowy zegarek męski o wyrazistych proporcjach",
        "Współczesny zegarek męski",
        "Męski zegarek inspirowany osiągami",
        "Elegancki zegarek męski na co dzień",
        "Wyrazisty zegarek męski",
        "Zegarek męski LIDYA signature",
      ],
    },

    craft: {
      eyebrow: "Charakter dobrego zegarka",
      title: "Zegarek męski definiuje coś więcej niż mechanizm",
      description:
        "Relacja pomiędzy kopertą, tarczą, materiałem, wykończeniem i obecnością na nadgarstku określa prawdziwy charakter zegarka.",
      closingText: "Inżynieria mierzy czas.",
      closingAccent: "Design nadaje mu tożsamość.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Proporcje",
          description:
            "Średnica, grubość, uszy koperty i balans bransolety decydują o tym, jak naturalnie zegarek leży na nadgarstku.",
        },
        {
          title: "Materiały",
          description:
            "Stal, złoto, skóra, ceramika i materiały techniczne nadają zegarkowi indywidualny charakter.",
        },
        {
          title: "Precyzja",
          description:
            "Za każdą dopracowaną tarczą stoi technika zaprojektowana do niezawodnego odmierzania czasu.",
        },
        {
          title: "Charakter",
          description:
            "Architektura tarczy, kolor i detale zmieniają funkcjonalny instrument w osobisty podpis.",
        },
      ],
    },

    cta: {
      title: "Właściwy zegarek odkrywa się na nadgarstku",
      sub:
        "Odwiedź LIDYA, poznaj nasze zegarki męskie osobiście i znajdź proporcje, materiały i detale, które najlepiej do Ciebie pasują.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Мужские часы",
      title: "Часы с",
      titleAccent: "характером и присутствием.",
      description:
        "От элегантных повседневных моделей до выразительных спортивных часов — откройте мужские часы, выбранные за пропорции, материалы, точность и ощущение на запястье.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "Созданы измерять время.",
      statementAccent: "Выбраны выражать характер.",
      imageAlt:
        "Роскошные мужские часы в элегантной обстановке LIDYA",
    },

    gallery: {
      eyebrow: "Коллекция мужских часов",
      title: "Часы, выбранные за",
      titleAccent: "индивидуальный характер.",
      description:
        "Каждая модель обладает собственным балансом пропорций, материалов, архитектуры циферблата и присутствия на запястье.",
      itemLabel: "Мужские часы",
      closingText: "Точность задаёт времени ритм.",
      closingAccent: "Характер делает его личным.",
      captions: [
        "Хронограф",
        "Современная классика",
        "Тёмный циферблат",
        "Спортивная элегантность",
        "Характер стали",
        "Современный дизайн",
        "Performance",
        "Повседневная элегантность",
        "Выразительные часы",
        "Signature",
      ],
      alts: [
        "Роскошный мужской хронограф",
        "Элегантные мужские часы классических пропорций",
        "Мужские часы с тёмным циферблатом",
        "Спортивные мужские часы класса люкс",
        "Стальные мужские часы",
        "Современные мужские часы",
        "Мужские часы в спортивном стиле",
        "Элегантные повседневные мужские часы",
        "Выразительные мужские часы",
        "Фирменные мужские часы LIDYA",
      ],
    },

    craft: {
      eyebrow: "Характер прекрасных часов",
      title: "Мужские часы определяются не только механизмом",
      description:
        "Соотношение корпуса, циферблата, материалов, отделки и ощущения на запястье формирует настоящий характер часов.",
      closingText: "Инженерия измеряет время.",
      closingAccent: "Дизайн придаёт ему индивидуальность.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Пропорции",
          description:
            "Диаметр, толщина корпуса и баланс браслета определяют естественность посадки часов.",
        },
        {
          title: "Материалы",
          description:
            "Сталь, золото, кожа, керамика и современные материалы создают различный характер.",
        },
        {
          title: "Точность",
          description:
            "За каждым продуманным циферблатом стоит инженерия, созданная для надёжного измерения времени.",
        },
        {
          title: "Характер",
          description:
            "Архитектура циферблата, цвет и детали превращают функциональный инструмент в личную подпись.",
        },
      ],
    },

    cta: {
      title: "Правильные часы раскрываются на запястье",
      sub:
        "Посетите LIDYA и познакомьтесь с мужскими часами лично, сравнивая пропорции, материалы и детали.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Herenhorloges",
      title: "Horloges met",
      titleAccent: "uitstraling en karakter.",
      description:
        "Van verfijnde dagelijkse horloges tot krachtige sportieve ontwerpen — ontdek herenhorloges geselecteerd op proportie, materiaal, precisie en draaggevoel.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Gemaakt om tijd te meten.",
      statementAccent: "Gekozen om karakter uit te drukken.",
      imageAlt:
        "Luxueuze herenhorloges gepresenteerd in een elegante LIDYA omgeving",
    },

    gallery: {
      eyebrow: "De herenhorlogecollectie",
      title: "Horloges geselecteerd voor",
      titleAccent: "individueel karakter.",
      description:
        "Elk horloge heeft zijn eigen balans van proporties, materialen, wijzerplaatarchitectuur en uitstraling.",
      itemLabel: "Herenhorloges",
      closingText: "Precisie geeft tijd ritme.",
      closingAccent: "Karakter maakt het persoonlijk.",
      captions: [
        "Chronograaf",
        "Moderne klassieker",
        "Donkere wijzerplaat",
        "Sportieve elegantie",
        "Stalen karakter",
        "Modern design",
        "Performance-horloge",
        "Dagelijkse elegantie",
        "Statement-horloge",
        "Signature-horloge",
      ],
      alts: [
        "Luxueuze herenchronograaf",
        "Elegant herenhorloge met klassieke proporties",
        "Herenhorloge met donkere wijzerplaat",
        "Sportief luxe herenhorloge",
        "Stalen herenhorloge",
        "Modern herenhorloge",
        "Performance-geïnspireerd herenhorloge",
        "Elegant dagelijks herenhorloge",
        "Statement herenhorloge",
        "LIDYA signature herenhorloge",
      ],
    },

    craft: {
      eyebrow: "Het karakter van een fijn horloge",
      title: "Een herenhorloge wordt door meer bepaald dan het uurwerk",
      description:
        "De relatie tussen kast, wijzerplaat, materiaal, afwerking en draaggevoel bepaalt de ware identiteit van een horloge.",
      closingText: "Techniek meet tijd.",
      closingAccent: "Design geeft identiteit.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Proportie",
          description:
            "Diameter, dikte en balans bepalen hoe natuurlijk het horloge om de pols zit.",
        },
        {
          title: "Materialen",
          description:
            "Staal, goud, leer, keramiek en moderne technische materialen creëren elk een eigen uitstraling.",
        },
        {
          title: "Precisie",
          description:
            "Achter elke doordachte wijzerplaat zit techniek ontwikkeld om tijd betrouwbaar te meten.",
        },
        {
          title: "Karakter",
          description:
            "Wijzerplaatarchitectuur, kleur en details maken van een instrument een persoonlijke signatuur.",
        },
      ],
    },

    cta: {
      title: "Het juiste horloge ontdekt u om de pols",
      sub:
        "Bezoek LIDYA, ervaar onze herenhorloges persoonlijk en ontdek welke proporties, materialen en details bij u passen.",
    },
  },

  da: {
    hero: {
      eyebrow: "Herreure",
      title: "Ure med",
      titleAccent: "tilstedeværelse og karakter.",
      description:
        "Fra raffinerede hverdagsure til markante sportsinspirerede designs — oplev herreure udvalgt efter proportioner, materialer, præcision og følelse på håndleddet.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Skabt til at måle tiden.",
      statementAccent: "Udvalgt til at udtrykke karakter.",
      imageAlt:
        "Luksuriøse herreure præsenteret i elegante LIDYA omgivelser",
    },

    gallery: {
      eyebrow: "Kollektionen af herreure",
      title: "Ure udvalgt for",
      titleAccent: "individuel karakter.",
      description:
        "Hvert ur har sin egen balance mellem proportioner, materialer, urskivearkitektur og tilstedeværelse.",
      itemLabel: "Herreure",
      closingText: "Præcision giver tiden rytme.",
      closingAccent: "Karakter gør den personlig.",
      captions: [
        "Kronograf",
        "Moderne klassiker",
        "Mørk urskive",
        "Sportslig elegance",
        "Stålkarakter",
        "Moderne design",
        "Performance-ur",
        "Hverdagselegance",
        "Statement-ur",
        "Signature-ur",
      ],
      alts: [
        "Luksuriøst kronograf herreur",
        "Elegant herreur med klassiske proportioner",
        "Herreur med mørk urskive",
        "Sportsinspireret luksusur",
        "Herreur i stål",
        "Moderne herreur",
        "Performance-inspireret herreur",
        "Elegant herreur til hverdagen",
        "Markant herreur",
        "LIDYA signature herreur",
      ],
    },

    craft: {
      eyebrow: "Karakteren af et fint ur",
      title: "Et herreur defineres af mere end dets mekanisme",
      description:
        "Forholdet mellem kasse, urskive, materialer, finish og følelse på håndleddet skaber urets identitet.",
      closingText: "Teknik måler tiden.",
      closingAccent: "Design giver den identitet.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Proportioner",
          description:
            "Diameter, tykkelse og balance afgør, hvordan uret naturligt sidder på håndleddet.",
        },
        {
          title: "Materialer",
          description:
            "Stål, guld, læder, keramik og tekniske materialer giver hvert ur sit eget udtryk.",
        },
        {
          title: "Præcision",
          description:
            "Bag hver gennemtænkt urskive ligger teknik udviklet til pålidelig tidtagning.",
        },
        {
          title: "Karakter",
          description:
            "Farve, urskivearkitektur og detaljer gør et funktionelt instrument personligt.",
        },
      ],
    },

    cta: {
      title: "Det rigtige ur opdages på håndleddet",
      sub:
        "Besøg LIDYA og oplev vores herreure personligt. Find de proportioner, materialer og detaljer, der føles rigtige for dig.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Miesten kellot",
      title: "Kelloja, joissa on",
      titleAccent: "läsnäoloa ja luonnetta.",
      description:
        "Hienostuneista arkikelloista vahvoihin urheilullisiin malleihin — tutustu miesten kelloihin, jotka on valittu mittasuhteiden, materiaalien ja tarkkuuden perusteella.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Luotu mittaamaan aikaa.",
      statementAccent: "Valittu ilmaisemaan luonnetta.",
      imageAlt:
        "Ylellisiä miesten kelloja elegantissa LIDYA ympäristössä",
    },

    gallery: {
      eyebrow: "Miesten kellomallisto",
      title: "Kelloja valittu",
      titleAccent: "yksilölliseen tyyliin.",
      description:
        "Jokaisessa kellossa on oma tasapainonsa mittasuhteiden, materiaalien, kellotaulun ja läsnäolon välillä.",
      itemLabel: "Miesten kellot",
      closingText: "Tarkkuus antaa ajalle rytmin.",
      closingAccent: "Luonne tekee siitä henkilökohtaisen.",
      captions: [
        "Kronografi",
        "Moderni klassikko",
        "Tumma kellotaulu",
        "Urheilullinen eleganssi",
        "Teräksen luonne",
        "Moderni design",
        "Performance-kello",
        "Arjen eleganssi",
        "Statement-kello",
        "Signature-kello",
      ],
      alts: [
        "Ylellinen miesten kronografi",
        "Elegantti miesten kello klassisilla mittasuhteilla",
        "Miesten kello tummalla kellotaululla",
        "Urheilullinen luksuskello",
        "Teräksinen miesten kello",
        "Moderni miesten kello",
        "Performance-henkinen miesten kello",
        "Elegantti arkikello miehille",
        "Näyttävä miesten kello",
        "LIDYA signature miesten kello",
      ],
    },

    craft: {
      eyebrow: "Hienon kellon luonne",
      title: "Miesten kello määrittyy paljon muustakin kuin koneistosta",
      description:
        "Kuoren, kellotaulun, materiaalien, viimeistelyn ja ranteessa tuntuvan tasapainon suhde määrittää kellon todellisen luonteen.",
      closingText: "Tekniikka mittaa aikaa.",
      closingAccent: "Muotoilu antaa sille identiteetin.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Mittasuhteet",
          description:
            "Halkaisija, paksuus ja tasapaino määrittävät, miten luonnollisesti kello asettuu ranteeseen.",
        },
        {
          title: "Materiaalit",
          description:
            "Teräs, kulta, nahka, keramiikka ja tekniset materiaalit antavat kellolle oman luonteensa.",
        },
        {
          title: "Tarkkuus",
          description:
            "Jokaisen harkitun kellotaulun takana on luotettavaa ajanmittausta varten suunniteltu tekniikka.",
        },
        {
          title: "Luonne",
          description:
            "Kellotaulun rakenne, väri ja yksityiskohdat muuttavat instrumentin henkilökohtaiseksi.",
        },
      ],
    },

    cta: {
      title: "Oikea kello löytyy ranteesta",
      sub:
        "Tutustu LIDYA:n miesten kelloihin henkilökohtaisesti ja löydä sinulle sopivat mittasuhteet, materiaalit ja yksityiskohdat.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Herrklockor",
      title: "Klockor med",
      titleAccent: "närvaro och karaktär.",
      description:
        "Från raffinerade vardagsklockor till självsäkra sportinspirerade modeller — upptäck herrklockor valda efter proportioner, material, precision och känsla på handleden.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Skapade för att mäta tid.",
      statementAccent: "Valda för att uttrycka karaktär.",
      imageAlt:
        "Lyxiga herrklockor presenterade i elegant LIDYA miljö",
    },

    gallery: {
      eyebrow: "Kollektionen av herrklockor",
      title: "Klockor valda för",
      titleAccent: "individuell karaktär.",
      description:
        "Varje klocka har sin egen balans mellan proportioner, material, urtavla och närvaro.",
      itemLabel: "Herrklockor",
      closingText: "Precision ger tiden rytm.",
      closingAccent: "Karaktär gör den personlig.",
      captions: [
        "Kronograf",
        "Modern klassiker",
        "Mörk urtavla",
        "Sportig elegans",
        "Stålkaraktär",
        "Modern design",
        "Performance-klocka",
        "Vardaglig elegans",
        "Statement-klocka",
        "Signature-klocka",
      ],
      alts: [
        "Lyxig herrkronograf",
        "Elegant herrklocka med klassiska proportioner",
        "Herrklocka med mörk urtavla",
        "Sportinspirerad lyxklocka",
        "Herrklocka i stål",
        "Modern herrklocka",
        "Performance-inspirerad herrklocka",
        "Elegant herrklocka för vardagen",
        "Karaktärsfull herrklocka",
        "LIDYA signature herrklocka",
      ],
    },

    craft: {
      eyebrow: "Karaktären hos en fin klocka",
      title: "En herrklocka definieras av mer än sitt urverk",
      description:
        "Relationen mellan boett, urtavla, material, finish och känslan på handleden formar klockans identitet.",
      closingText: "Teknik mäter tiden.",
      closingAccent: "Design ger den identitet.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Proportioner",
          description:
            "Diameter, tjocklek och balans avgör hur naturligt klockan sitter på handleden.",
        },
        {
          title: "Material",
          description:
            "Stål, guld, läder, keramik och tekniska material ger varje klocka sitt uttryck.",
        },
        {
          title: "Precision",
          description:
            "Bakom varje genomtänkt urtavla finns teknik utvecklad för tillförlitlig tidmätning.",
        },
        {
          title: "Karaktär",
          description:
            "Urtavla, färg, finish och detaljer gör ett instrument personligt.",
        },
      ],
    },

    cta: {
      title: "Den rätta klockan upptäcks på handleden",
      sub:
        "Besök LIDYA och upplev våra herrklockor personligen. Hitta proportionerna, materialen och detaljerna som känns rätt för dig.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres homme",
      title: "Des garde-temps avec",
      titleAccent: "présence et caractère.",
      description:
        "Des montres raffinées du quotidien aux créations sportives affirmées — découvrez des montres homme sélectionnées pour leurs proportions, leurs matériaux et leur précision.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "Créées pour mesurer le temps.",
      statementAccent: "Choisies pour exprimer le caractère.",
      imageAlt:
        "Montres homme de luxe présentées dans un élégant univers LIDYA",
    },

    gallery: {
      eyebrow: "La collection de montres homme",
      title: "Des montres choisies pour",
      titleAccent: "un caractère individuel.",
      description:
        "Chaque montre possède son propre équilibre entre proportions, matériaux, architecture du cadran et présence au poignet.",
      itemLabel: "Montres homme",
      closingText: "La précision donne son rythme au temps.",
      closingAccent: "Le caractère le rend personnel.",
      captions: [
        "Chronographe",
        "Classique moderne",
        "Cadran sombre",
        "Élégance sportive",
        "Caractère acier",
        "Design contemporain",
        "Montre performance",
        "Élégance quotidienne",
        "Montre de caractère",
        "Montre signature",
      ],
      alts: [
        "Chronographe homme de luxe",
        "Montre homme élégante aux proportions classiques",
        "Montre homme avec cadran sombre",
        "Montre homme sportive de luxe",
        "Montre homme en acier",
        "Montre homme contemporaine",
        "Montre homme inspirée de la performance",
        "Montre homme élégante du quotidien",
        "Montre homme de caractère",
        "Montre homme signature LIDYA",
      ],
    },

    craft: {
      eyebrow: "Le caractère d'une belle montre",
      title: "Une montre homme se définit par bien plus que son mouvement",
      description:
        "La relation entre le boîtier, le cadran, les matériaux, les finitions et la sensation au poignet définit son identité.",
      closingText: "L'ingénierie mesure le temps.",
      closingAccent: "Le design lui donne une identité.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Proportions",
          description:
            "Diamètre, épaisseur et équilibre déterminent la manière dont la montre repose naturellement au poignet.",
        },
        {
          title: "Matériaux",
          description:
            "Acier, or, cuir, céramique et matériaux techniques donnent à chaque montre une présence différente.",
        },
        {
          title: "Précision",
          description:
            "Derrière chaque cadran se trouve une ingénierie conçue pour mesurer le temps avec constance.",
        },
        {
          title: "Caractère",
          description:
            "Architecture du cadran, couleur, finition et détails transforment un instrument en signature personnelle.",
        },
      ],
    },

    cta: {
      title: "La bonne montre se découvre au poignet",
      sub:
        "Découvrez nos montres homme chez LIDYA et trouvez les proportions, matériaux et détails qui vous correspondent.",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi da uomo",
      title: "Segnatempo con",
      titleAccent: "presenza e carattere.",
      description:
        "Dagli orologi raffinati per ogni giorno ai modelli sportivi più decisi — scoprite orologi da uomo selezionati per proporzioni, materiali, precisione e sensazione al polso.",
      since: "LIDYA · DAL 1989",
      statementBefore: "Creati per misurare il tempo.",
      statementAccent: "Scelti per esprimere carattere.",
      imageAlt:
        "Orologi da uomo di lusso presentati in un elegante ambiente LIDYA",
    },

    gallery: {
      eyebrow: "La collezione di orologi da uomo",
      title: "Orologi scelti per",
      titleAccent: "un carattere individuale.",
      description:
        "Ogni orologio possiede un proprio equilibrio tra proporzioni, materiali, architettura del quadrante e presenza.",
      itemLabel: "Orologi da uomo",
      closingText: "La precisione dà ritmo al tempo.",
      closingAccent: "Il carattere lo rende personale.",
      captions: [
        "Cronografo",
        "Classico moderno",
        "Quadrante scuro",
        "Eleganza sportiva",
        "Carattere in acciaio",
        "Design contemporaneo",
        "Orologio performance",
        "Eleganza quotidiana",
        "Orologio statement",
        "Orologio signature",
      ],
      alts: [
        "Cronografo da uomo di lusso",
        "Orologio da uomo elegante con proporzioni classiche",
        "Orologio da uomo con quadrante scuro",
        "Orologio sportivo da uomo di lusso",
        "Orologio da uomo in acciaio",
        "Orologio da uomo contemporaneo",
        "Orologio da uomo ispirato alla performance",
        "Orologio elegante da uomo per tutti i giorni",
        "Orologio da uomo di carattere",
        "Orologio da uomo signature LIDYA",
      ],
    },

    craft: {
      eyebrow: "Il carattere di un grande orologio",
      title:
        "Un orologio da uomo è definito da molto più del suo movimento",
      description:
        "Il rapporto tra cassa, quadrante, materiali, finiture e sensazione al polso determina la vera identità dell'orologio.",
      closingText: "L'ingegneria misura il tempo.",
      closingAccent: "Il design gli dà identità.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Proporzioni",
          description:
            "Diametro, spessore e bilanciamento determinano come l'orologio si posa naturalmente sul polso.",
        },
        {
          title: "Materiali",
          description:
            "Acciaio, oro, pelle, ceramica e materiali tecnici danno a ogni orologio un carattere diverso.",
        },
        {
          title: "Precisione",
          description:
            "Dietro ogni quadrante si trova un'ingegneria progettata per misurare il tempo con affidabilità.",
        },
        {
          title: "Carattere",
          description:
            "Quadrante, colore, finiture e dettagli trasformano uno strumento funzionale in una firma personale.",
        },
      ],
    },

    cta: {
      title: "L'orologio giusto si scopre al polso",
      sub:
        "Scoprite gli orologi da uomo LIDYA di persona e trovate proporzioni, materiali e dettagli che sentite davvero vostri.",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes para hombre",
      title: "Relojes con",
      titleAccent: "presencia y carácter.",
      description:
        "Desde relojes refinados para el día a día hasta diseños deportivos de fuerte personalidad — descubra relojes para hombre seleccionados por sus proporciones, materiales y precisión.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "Creados para medir el tiempo.",
      statementAccent: "Elegidos para expresar carácter.",
      imageAlt:
        "Relojes de lujo para hombre presentados en un elegante entorno LIDYA",
    },

    gallery: {
      eyebrow: "La colección de relojes para hombre",
      title: "Relojes seleccionados por",
      titleAccent: "su carácter individual.",
      description:
        "Cada reloj tiene su propio equilibrio de proporciones, materiales, arquitectura de esfera y presencia.",
      itemLabel: "Relojes para hombre",
      closingText: "La precisión da ritmo al tiempo.",
      closingAccent: "El carácter lo hace personal.",
      captions: [
        "Cronógrafo",
        "Clásico moderno",
        "Esfera oscura",
        "Elegancia deportiva",
        "Carácter de acero",
        "Diseño contemporáneo",
        "Reloj performance",
        "Elegancia cotidiana",
        "Reloj statement",
        "Reloj signature",
      ],
      alts: [
        "Cronógrafo de lujo para hombre",
        "Reloj elegante para hombre con proporciones clásicas",
        "Reloj para hombre con esfera oscura",
        "Reloj deportivo de lujo para hombre",
        "Reloj de acero para hombre",
        "Reloj contemporáneo para hombre",
        "Reloj para hombre inspirado en el rendimiento",
        "Reloj elegante para hombre de uso diario",
        "Reloj para hombre de fuerte carácter",
        "Reloj signature LIDYA para hombre",
      ],
    },

    craft: {
      eyebrow: "El carácter de un gran reloj",
      title:
        "Un reloj para hombre se define por mucho más que su mecanismo",
      description:
        "La relación entre caja, esfera, materiales, acabados y sensación en la muñeca determina su verdadera identidad.",
      closingText: "La ingeniería mide el tiempo.",
      closingAccent: "El diseño le da identidad.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Proporciones",
          description:
            "Diámetro, grosor y equilibrio determinan cómo se adapta naturalmente el reloj a la muñeca.",
        },
        {
          title: "Materiales",
          description:
            "Acero, oro, cuero, cerámica y materiales técnicos aportan a cada reloj un carácter distinto.",
        },
        {
          title: "Precisión",
          description:
            "Detrás de cada esfera existe ingeniería diseñada para medir el tiempo de manera fiable.",
        },
        {
          title: "Carácter",
          description:
            "Arquitectura de esfera, color, acabado y detalles convierten un instrumento funcional en una firma personal.",
        },
      ],
    },

    cta: {
      title: "El reloj adecuado se descubre en la muñeca",
      sub:
        "Descubra personalmente los relojes para hombre de LIDYA y encuentre las proporciones, materiales y detalles que mejor se adapten a usted.",
    },
  },
};

const MEN_WATCH_IMAGES = [
  "/images/watches/men-category/men1.png",
  "/images/watches/men-category/men2.png",
  "/images/watches/men-category/men3.png",
  "/images/watches/men-category/men4.png",
  "/images/watches/men-category/men5.png",
  "/images/watches/men-category/men6.png",
  "/images/watches/men-category/men7.png",
  "/images/watches/men-category/men8.png",
  "/images/watches/men-category/men9.png",
  "/images/watches/men-category/men10.png",
];

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

function MensWatchesHero({
  copy,
}: {
  copy: MensWatchesCopy["hero"];
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
      window.removeEventListener(
        "scroll",
        onScroll
      );

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
        bg-[#120B0D]
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
          src="/images/watches/men-category/men-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[57%_50%]
            md:object-[58%_50%]
            lg:object-center
          "
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#10070C]/95
          via-[#120B0D]/62
          to-[#120B0D]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0E080A]/94
          via-[#120B0D]/12
          to-[#120B0D]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_68%_38%,rgba(210,174,103,0.10)_0%,rgba(210,174,103,0.025)_32%,transparent_58%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24 xl:px-20">
        <div className="max-w-[860px]">
          <div
            className={`
              flex
              items-center
              gap-4
              text-[#D2AE67]
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
              <WatchIcon />
            </span>

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] md:text-[0.64rem]">
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[900px]
              font-display
              text-[3.25rem]
              leading-[0.94]
              tracking-[-0.04em]
              sm:text-[4rem]
              md:text-[5.4rem]
              lg:text-[6.4rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
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
                  color: "#F8F4EC",
                  transitionDelay: "220ms",
                  textShadow:
                    "0 2px 28px rgba(0,0,0,0.22)",
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
                  color: "#D2AE67",
                  transitionDelay: "330ms",
                  textShadow:
                    "0 2px 24px rgba(0,0,0,0.18)",
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
            <p
              className="
                max-w-[650px]
                text-sm
                leading-7
                text-white/72
                md:text-base
              "
              style={{
                color: "rgba(255,255,255,0.76)",
              }}
            >
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C6A15B]" />

              <span
                className="text-[0.54rem] font-semibold uppercase tracking-[0.23em]"
                style={{
                  color: "rgba(255,255,255,0.58)",
                }}
              >
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
              max-w-[960px]
              font-display
              text-[1.8rem]
              italic
              leading-[1.08]
              md:text-4xl
              lg:text-5xl
            "
            style={{
              color: "#F8F4EC",
              textShadow:
                "0 2px 24px rgba(0,0,0,0.20)",
            }}
          >
            {copy.statementBefore}{" "}

            <span
              style={{
                color: "#D2AE67",
              }}
            >
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function MensWatchesContent() {
  const { locale } = useLanguage();

  const copy =
    MENS_WATCHES_COPY[locale] ??
    MENS_WATCHES_COPY.en;

  const galleryItems = MEN_WATCH_IMAGES.map(
    (image, index) => ({
      image,

      caption:
        copy.gallery.captions[index] ??
        MENS_WATCHES_COPY.en.gallery.captions[
          index
        ] ??
        "",

      alt:
        copy.gallery.alts[index] ??
        MENS_WATCHES_COPY.en.gallery.alts[
          index
        ] ??
        "",
    })
  );

  return (
    <>
      <Header />

      <main>
        <MensWatchesHero copy={copy.hero} />

        <CategoryGallery
          icon={<WatchIcon />}
          eyebrow={copy.gallery.eyebrow}
          title={copy.gallery.title}
          titleAccent={copy.gallery.titleAccent}
          description={copy.gallery.description}
          itemLabel={copy.gallery.itemLabel}
          closingText={copy.gallery.closingText}
          closingAccent={copy.gallery.closingAccent}
          items={galleryItems}
        />

        <CategoryCraft
          eyebrow={copy.craft.eyebrow}
          title={copy.craft.title}
          description={copy.craft.description}
          points={copy.craft.points}
          closingText={copy.craft.closingText}
          closingAccent={copy.craft.closingAccent}
          since={copy.craft.since}
        />

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