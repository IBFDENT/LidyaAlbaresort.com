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

type DiamondWatchesCopy = {
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

const DIAMOND_WATCHES_COPY: Record<
  Locale,
  DiamondWatchesCopy
> = {
  en: {
    hero: {
      eyebrow: "Diamond Watches",
      title: "Time transformed into",
      titleAccent: "a precious statement.",
      description:
        "Discover watches where exceptional diamonds, refined proportions and watchmaking precision come together. More than instruments of time, these pieces are created to be worn as jewellery.",
      since: "LIDYA · SINCE 1989",
      statementBefore: "Time gives the moment form.",
      statementAccent: "Diamonds give it permanence.",
      imageAlt:
        "Luxury diamond watch presented in a refined LIDYA setting",
    },

    gallery: {
      eyebrow: "The Diamond Watch Collection",
      title: "Timepieces chosen for",
      titleAccent: "exceptional presence.",
      description:
        "From diamond-set bezels to jewellery-inspired bracelets and refined dial details, each watch balances precision with precious craftsmanship.",
      itemLabel: "Diamond Watches",
      closingText: "Created to measure time.",
      closingAccent: "Designed to become jewellery.",
      captions: [
        "Diamond Signature",
        "Jewellery Timepiece",
        "Exceptional Setting",
        "Diamond Bezel",
        "Precious Presence",
        "Radiant Detail",
        "Diamond Architecture",
        "Refined Brilliance",
        "Statement Timepiece",
        "Timeless Diamonds",
      ],
      alts: [
        "Luxury diamond watch with refined proportions",
        "Jewellery-inspired diamond wristwatch",
        "Watch with exceptional diamond setting",
        "Luxury watch with diamond-set bezel",
        "Elegant diamond watch with precious presence",
        "Close detail of diamonds on a luxury watch",
        "Diamond watch with refined case architecture",
        "Luxury watch with brilliant diamond detailing",
        "Statement diamond timepiece",
        "Timeless luxury diamond watch",
      ],
    },

    craft: {
      eyebrow: "The Character of Diamonds",
      title:
        "A diamond watch is defined by the relationship between stone and time",
      description:
        "The finest diamond watches bring together stone selection, setting, proportion and finishing. Each element must support the architecture of the watch without overwhelming it.",
      closingText: "Precision creates balance.",
      closingAccent: "Diamonds create presence.",
      since: "LIDYA · SINCE 1989",
      points: [
        {
          title: "Selection",
          description:
            "Diamonds are considered for brilliance, colour, clarity and how naturally they belong within the architecture of the watch.",
        },
        {
          title: "Setting",
          description:
            "Precise setting creates security, alignment and continuity across bezels, cases, dials and bracelets.",
        },
        {
          title: "Proportion",
          description:
            "Stone size and placement must remain balanced with the case, dial and bracelet so the watch feels refined rather than excessive.",
        },
        {
          title: "Jewellery Character",
          description:
            "When craftsmanship, precious material and watchmaking meet, the result becomes more than a timepiece — it becomes jewellery.",
        },
      ],
    },

    cta: {
      title: "A diamond watch reveals itself on the wrist",
      sub:
        "Visit LIDYA and experience our diamond watches in person. Discover how proportion, light and precious stones transform a timepiece into something deeply personal.",
    },
  },

  de: {
    hero: {
      eyebrow: "Diamantuhren",
      title: "Zeit verwandelt in",
      titleAccent: "ein kostbares Statement.",
      description:
        "Entdecken Sie Uhren, in denen außergewöhnliche Diamanten, raffinierte Proportionen und uhrmacherische Präzision zusammenkommen. Mehr als Zeitmesser — Schmuckstücke für das Handgelenk.",
      since: "LIDYA · SEIT 1989",
      statementBefore: "Zeit gibt dem Moment Form.",
      statementAccent: "Diamanten verleihen ihm Beständigkeit.",
      imageAlt:
        "Luxuriöse Diamantuhr in einer eleganten LIDYA Umgebung",
    },

    gallery: {
      eyebrow: "Die Diamantuhrenkollektion",
      title: "Zeitmesser ausgewählt für",
      titleAccent: "außergewöhnliche Präsenz.",
      description:
        "Von diamantbesetzten Lünetten bis zu schmuckinspirierten Armbändern verbindet jede Uhr Präzision mit kostbarer Handwerkskunst.",
      itemLabel: "Diamantuhren",
      closingText: "Geschaffen, um Zeit zu messen.",
      closingAccent: "Entworfen, um Schmuck zu werden.",
      captions: [
        "Diamond Signature",
        "Schmuck-Zeitmesser",
        "Außergewöhnliche Fassung",
        "Diamantlünette",
        "Kostbare Präsenz",
        "Strahlendes Detail",
        "Diamantarchitektur",
        "Raffinierte Brillanz",
        "Statement-Zeitmesser",
        "Zeitlose Diamanten",
      ],
      alts: [
        "Luxuriöse Diamantuhr",
        "Schmuckinspirierte Diamantuhr",
        "Uhr mit außergewöhnlicher Diamantfassung",
        "Luxusuhr mit diamantbesetzter Lünette",
        "Elegante Diamantuhr",
        "Detail von Diamanten an einer Luxusuhr",
        "Diamantuhr mit raffinierter Gehäusearchitektur",
        "Luxusuhr mit Diamantdetails",
        "Ausdrucksstarke Diamantuhr",
        "Zeitlose Luxus-Diamantuhr",
      ],
    },

    craft: {
      eyebrow: "Der Charakter der Diamanten",
      title:
        "Eine Diamantuhr wird durch die Beziehung zwischen Stein und Zeit bestimmt",
      description:
        "Die feinsten Diamantuhren verbinden Auswahl, Fassung, Proportion und Verarbeitung zu einem harmonischen Ganzen.",
      closingText: "Präzision schafft Balance.",
      closingAccent: "Diamanten schaffen Präsenz.",
      since: "LIDYA · SEIT 1989",
      points: [
        {
          title: "Auswahl",
          description:
            "Diamanten werden nach Brillanz, Farbe, Reinheit und ihrer Wirkung innerhalb der Uhr ausgewählt.",
        },
        {
          title: "Fassung",
          description:
            "Eine präzise Fassung schafft Sicherheit, Ausrichtung und Kontinuität.",
        },
        {
          title: "Proportion",
          description:
            "Größe und Platzierung der Steine müssen mit Gehäuse, Zifferblatt und Armband im Gleichgewicht stehen.",
        },
        {
          title: "Schmuckcharakter",
          description:
            "Wenn Edelsteine, Handwerk und Uhrmacherkunst zusammentreffen, wird aus einem Zeitmesser ein Schmuckstück.",
        },
      ],
    },

    cta: {
      title: "Eine Diamantuhr entfaltet sich am Handgelenk",
      sub:
        "Besuchen Sie LIDYA und erleben Sie unsere Diamantuhren persönlich.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Elmas Saatler",
      title: "Zaman",
      titleAccent: "değerli bir ifadeye dönüşür.",
      description:
        "Olağanüstü elmasların, rafine oranların ve saatçilik hassasiyetinin buluştuğu saatleri keşfedin. Bunlar yalnızca zamanı gösteren araçlar değil, bilekte taşınan mücevherlerdir.",
      since: "LIDYA · 1989'DAN BERİ",
      statementBefore: "Zaman ana biçim verir.",
      statementAccent: "Elmaslar ona kalıcılık kazandırır.",
      imageAlt:
        "LIDYA ortamında sunulan lüks elmas saat",
    },

    gallery: {
      eyebrow: "Elmas Saat Koleksiyonu",
      title: "Olağanüstü",
      titleAccent: "duruş için seçilen saatler.",
      description:
        "Elmas bezellerden mücevher ilhamlı bileziklere kadar her saat hassasiyet ve değerli işçiliği bir araya getirir.",
      itemLabel: "Elmas Saatler",
      closingText: "Zamanı ölçmek için yaratıldı.",
      closingAccent: "Mücevhere dönüşmek için tasarlandı.",
      captions: [
        "Diamond Signature",
        "Mücevher Saat",
        "Olağanüstü Taş Yerleşimi",
        "Elmas Bezel",
        "Değerli Duruş",
        "Işıltılı Detay",
        "Elmas Mimari",
        "Rafine Parlaklık",
        "Statement Saat",
        "Zamansız Elmaslar",
      ],
      alts: [
        "Lüks elmas saat",
        "Mücevher ilhamlı elmas saat",
        "Olağanüstü taş yerleşimli saat",
        "Elmas bezelli lüks saat",
        "Zarif elmas saat",
        "Lüks saatte elmas detayı",
        "Rafine kasa mimarisine sahip elmas saat",
        "Elmas detaylı lüks saat",
        "Güçlü karakterli elmas saat",
        "Zamansız lüks elmas saat",
      ],
    },

    craft: {
      eyebrow: "Elmasın Karakteri",
      title:
        "Bir elmas saati taş ile zaman arasındaki ilişki tanımlar",
      description:
        "En iyi elmas saatlerde taş seçimi, yerleştirme, oran ve yüzey işçiliği kusursuz bir denge içinde buluşur.",
      closingText: "Hassasiyet denge yaratır.",
      closingAccent: "Elmaslar duruş yaratır.",
      since: "LIDYA · 1989'DAN BERİ",
      points: [
        {
          title: "Seçim",
          description:
            "Elmaslar parlaklık, renk, berraklık ve saatin mimarisiyle kurduğu ilişkiye göre değerlendirilir.",
        },
        {
          title: "Taş Yerleşimi",
          description:
            "Hassas yerleştirme güvenlik, hizalama ve görsel süreklilik sağlar.",
        },
        {
          title: "Oran",
          description:
            "Taşların boyutu ve konumu kasa, kadran ve bilezikle dengeli olmalıdır.",
        },
        {
          title: "Mücevher Karakteri",
          description:
            "Elmas, değerli malzeme ve saatçilik birleştiğinde saat gerçek bir mücevhere dönüşür.",
        },
      ],
    },

    cta: {
      title: "Elmas bir saat gerçek karakterini bilekte gösterir",
      sub:
        "LIDYA'yı ziyaret edin ve elmas saatlerimizi yakından deneyimleyin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Diamantové hodinky",
      title: "Čas premenený na",
      titleAccent: "vzácny šperk.",
      description:
        "Objavte hodinky, v ktorých sa výnimočné diamanty stretávajú s precíznymi proporciami a hodinárskou presnosťou. Nie sú iba nástrojom na meranie času — stávajú sa šperkom na zápästí.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Čas dáva okamihu formu.",
      statementAccent: "Diamanty mu dávajú trvácnosť.",
      imageAlt:
        "Luxusné diamantové hodinky prezentované v elegantnom prostredí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcia diamantových hodiniek",
      title: "Hodinky vybrané pre",
      titleAccent: "výnimočnú prítomnosť.",
      description:
        "Od diamantových luniet až po náramky inšpirované šperkárstvom — každý model spája hodinársku presnosť s charakterom vzácneho šperku.",
      itemLabel: "Diamantové hodinky",
      closingText: "Vytvorené na meranie času.",
      closingAccent: "Navrhnuté tak, aby sa stali šperkom.",
      captions: [
        "Diamond Signature",
        "Šperk na zápästie",
        "Výnimočné osadenie",
        "Diamantová luneta",
        "Vzácna prítomnosť",
        "Žiarivý detail",
        "Diamantová architektúra",
        "Rafinovaná brilancia",
        "Výrazný časomer",
        "Nadčasové diamanty",
      ],
      alts: [
        "Luxusné diamantové hodinky s rafinovanými proporciami",
        "Diamantové hodinky inšpirované šperkárstvom",
        "Hodinky s výnimočným diamantovým osadením",
        "Luxusné hodinky s diamantovou lunetou",
        "Elegantné diamantové hodinky",
        "Detail diamantov na luxusných hodinkách",
        "Diamantové hodinky s rafinovanou architektúrou puzdra",
        "Luxusné hodinky s diamantovými detailmi",
        "Výrazné diamantové hodinky",
        "Nadčasové luxusné diamantové hodinky",
      ],
    },

    craft: {
      eyebrow: "Charakter diamantov",
      title:
        "Diamantové hodinky určuje vzťah medzi vzácnym kameňom a časom",
      description:
        "Najvýnimočnejšie diamantové hodinky spájajú výber kameňov, precízne osadenie, správne proporcie a dokonalé spracovanie. Každý detail musí podporovať architektúru hodiniek.",
      closingText: "Presnosť vytvára rovnováhu.",
      closingAccent: "Diamanty vytvárajú prítomnosť.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Výber",
          description:
            "Diamanty sa posudzujú podľa brilancie, farby, čistoty a toho, ako prirodzene zapadajú do architektúry hodiniek.",
        },
        {
          title: "Osadenie",
          description:
            "Precízne osadenie zabezpečuje bezpečnosť, zarovnanie a vizuálnu kontinuitu na lunete, puzdre, ciferníku či náramku.",
        },
        {
          title: "Proporcie",
          description:
            "Veľkosť a umiestnenie diamantov musí zostať v rovnováhe s puzdrom, ciferníkom a náramkom.",
        },
        {
          title: "Šperkársky charakter",
          description:
            "Keď sa hodinárstvo stretne s diamantmi a šperkárskym remeslom, časomer sa mení na skutočný šperk.",
        },
      ],
    },

    cta: {
      title: "Diamantové hodinky treba zažiť na zápästí",
      sub:
        "Navštívte LIDYA a objavte naše diamantové hodinky osobne. Spoznajte, ako proporcie, svetlo a vzácne kamene premieňajú hodinky na niečo skutočne osobné.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Diamantové hodinky",
      title: "Čas proměněný v",
      titleAccent: "vzácný šperk.",
      description:
        "Objevte hodinky, v nichž se výjimečné diamanty setkávají s precizními proporcemi a hodinářskou přesností.",
      since: "LIDYA · OD ROKU 1989",
      statementBefore: "Čas dává okamžiku formu.",
      statementAccent: "Diamanty mu dávají trvalost.",
      imageAlt:
        "Luxusní diamantové hodinky v elegantním prostředí LIDYA",
    },

    gallery: {
      eyebrow: "Kolekce diamantových hodinek",
      title: "Hodinky vybrané pro",
      titleAccent: "výjimečnou přítomnost.",
      description:
        "Od diamantových lunet po šperkařsky pojaté náramky spojuje každý model přesnost s drahocenným řemeslem.",
      itemLabel: "Diamantové hodinky",
      closingText: "Vytvořené k měření času.",
      closingAccent: "Navržené, aby se staly šperkem.",
      captions: [
        "Diamond Signature",
        "Šperk na zápěstí",
        "Výjimečné osazení",
        "Diamantová luneta",
        "Vzácná přítomnost",
        "Zářivý detail",
        "Diamantová architektura",
        "Rafinovaná brilance",
        "Výrazné hodinky",
        "Nadčasové diamanty",
      ],
      alts: [
        "Luxusní diamantové hodinky",
        "Diamantové hodinky inspirované šperkařstvím",
        "Hodinky s výjimečným diamantovým osazením",
        "Luxusní hodinky s diamantovou lunetou",
        "Elegantní diamantové hodinky",
        "Detail diamantů na luxusních hodinkách",
        "Diamantové hodinky s rafinovanou architekturou",
        "Luxusní hodinky s diamantovými detaily",
        "Výrazné diamantové hodinky",
        "Nadčasové luxusní diamantové hodinky",
      ],
    },

    craft: {
      eyebrow: "Charakter diamantů",
      title:
        "Diamantové hodinky určuje vztah mezi drahým kamenem a časem",
      description:
        "Výběr kamenů, přesné osazení, proporce a zpracování musí vytvářet jeden vyvážený celek.",
      closingText: "Přesnost vytváří rovnováhu.",
      closingAccent: "Diamanty vytvářejí přítomnost.",
      since: "LIDYA · OD ROKU 1989",
      points: [
        {
          title: "Výběr",
          description:
            "Diamanty jsou posuzovány podle brilance, barvy, čistoty a vztahu k architektuře hodinek.",
        },
        {
          title: "Osazení",
          description:
            "Přesné osazení zajišťuje bezpečnost, zarovnání a kontinuitu.",
        },
        {
          title: "Proporce",
          description:
            "Velikost a umístění kamenů musí zůstat v rovnováze s pouzdrem a ciferníkem.",
        },
        {
          title: "Šperkařský charakter",
          description:
            "Spojení hodinářství a diamantů proměňuje hodinky ve skutečný šperk.",
        },
      ],
    },

    cta: {
      title: "Diamantové hodinky je třeba zažít na zápěstí",
      sub:
        "Navštivte LIDYA a objevte naše diamantové hodinky osobně.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Gyémánt órák",
      title: "Az idő",
      titleAccent: "értékes ékszerré válik.",
      description:
        "Fedezze fel az órákat, ahol a kivételes gyémántok, a kifinomult arányok és az órakészítés pontossága találkozik.",
      since: "LIDYA · 1989 ÓTA",
      statementBefore: "Az idő formát ad a pillanatnak.",
      statementAccent: "A gyémánt maradandóvá teszi.",
      imageAlt:
        "Luxus gyémánt óra elegáns LIDYA környezetben",
    },

    gallery: {
      eyebrow: "Gyémánt órakollekció",
      title: "Órák",
      titleAccent: "kivételes jelenléttel.",
      description:
        "A gyémánt lünettáktól az ékszer ihlette karkötőkig minden óra egyesíti a precizitást és az értékes kézművességet.",
      itemLabel: "Gyémánt órák",
      closingText: "Az idő mérésére alkotva.",
      closingAccent: "Ékszerré válásra tervezve.",
      captions: [
        "Diamond Signature",
        "Ékszeróra",
        "Kivételes foglalás",
        "Gyémánt lünetta",
        "Értékes jelenlét",
        "Ragyogó részlet",
        "Gyémánt architektúra",
        "Kifinomult ragyogás",
        "Karakteres óra",
        "Időtlen gyémántok",
      ],
      alts: [
        "Luxus gyémánt óra",
        "Ékszer ihlette gyémánt óra",
        "Kivételes gyémántfoglalású óra",
        "Gyémánt lünettás luxusóra",
        "Elegáns gyémánt óra",
        "Gyémánt részlet luxusórán",
        "Kifinomult tokarchitektúrájú gyémánt óra",
        "Luxusóra gyémánt részletekkel",
        "Karakteres gyémánt óra",
        "Időtlen luxus gyémánt óra",
      ],
    },

    craft: {
      eyebrow: "A gyémánt karaktere",
      title:
        "Egy gyémánt órát a drágakő és az idő kapcsolata határoz meg",
      description:
        "A kő kiválasztása, foglalása, az arányok és a kidolgozás együtt teremti meg a valódi egyensúlyt.",
      closingText: "A pontosság egyensúlyt teremt.",
      closingAccent: "A gyémánt jelenlétet ad.",
      since: "LIDYA · 1989 ÓTA",
      points: [
        {
          title: "Válogatás",
          description:
            "A gyémántokat ragyogás, szín, tisztaság és az óra architektúrájához való illeszkedés alapján választják.",
        },
        {
          title: "Foglalás",
          description:
            "A precíz foglalás biztonságot és vizuális folytonosságot teremt.",
        },
        {
          title: "Arányok",
          description:
            "A kövek méretének összhangban kell maradnia a tok és a számlap arányaival.",
        },
        {
          title: "Ékszerkarakter",
          description:
            "A gyémánt és az órakészítés találkozásából valódi ékszer születik.",
        },
      ],
    },

    cta: {
      title: "A gyémánt óra a csuklón mutatja meg igazi karakterét",
      sub:
        "Fedezze fel személyesen a LIDYA gyémánt óráit.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Zegarki z diamentami",
      title: "Czas przemieniony w",
      titleAccent: "szlachetny klejnot.",
      description:
        "Odkryj zegarki, w których wyjątkowe diamenty spotykają się z wyrafinowanymi proporcjami i precyzją zegarmistrzowską.",
      since: "LIDYA · OD 1989 ROKU",
      statementBefore: "Czas nadaje chwili formę.",
      statementAccent: "Diamenty nadają jej trwałość.",
      imageAlt:
        "Luksusowy zegarek z diamentami w eleganckim otoczeniu LIDYA",
    },

    gallery: {
      eyebrow: "Kolekcja zegarków z diamentami",
      title: "Zegarki wybrane dla",
      titleAccent: "wyjątkowej obecności.",
      description:
        "Od diamentowych bezeli po bransolety inspirowane biżuterią — każdy model łączy precyzję z jubilerskim charakterem.",
      itemLabel: "Zegarki z diamentami",
      closingText: "Stworzone do mierzenia czasu.",
      closingAccent: "Zaprojektowane, by stać się biżuterią.",
      captions: [
        "Diamond Signature",
        "Zegarek jubilerski",
        "Wyjątkowa oprawa",
        "Diamentowy bezel",
        "Szlachetna obecność",
        "Promienny detal",
        "Diamentowa architektura",
        "Rafinowany blask",
        "Wyrazisty zegarek",
        "Ponadczasowe diamenty",
      ],
      alts: [
        "Luksusowy zegarek z diamentami",
        "Jubilerski zegarek z diamentami",
        "Zegarek z wyjątkową oprawą diamentów",
        "Luksusowy zegarek z diamentowym bezelem",
        "Elegancki zegarek z diamentami",
        "Detal diamentów na luksusowym zegarku",
        "Diamentowy zegarek o dopracowanej architekturze",
        "Luksusowy zegarek z diamentowymi detalami",
        "Wyrazisty zegarek diamentowy",
        "Ponadczasowy luksusowy zegarek z diamentami",
      ],
    },

    craft: {
      eyebrow: "Charakter diamentów",
      title:
        "Zegarek diamentowy definiuje relacja między kamieniem a czasem",
      description:
        "Dobór diamentów, oprawa, proporcje i wykończenie muszą pozostawać w idealnej równowadze.",
      closingText: "Precyzja tworzy równowagę.",
      closingAccent: "Diamenty tworzą obecność.",
      since: "LIDYA · OD 1989 ROKU",
      points: [
        {
          title: "Selekcja",
          description:
            "Diamenty ocenia się pod względem blasku, koloru, czystości oraz harmonii z projektem zegarka.",
        },
        {
          title: "Oprawa",
          description:
            "Precyzyjna oprawa zapewnia bezpieczeństwo i wizualną ciągłość.",
        },
        {
          title: "Proporcje",
          description:
            "Rozmiar i rozmieszczenie kamieni muszą pozostać w równowadze z kopertą i tarczą.",
        },
        {
          title: "Charakter jubilerski",
          description:
            "Połączenie diamentów i zegarmistrzostwa zmienia czasomierz w prawdziwą biżuterię.",
        },
      ],
    },

    cta: {
      title: "Diamentowy zegarek odkrywa się na nadgarstku",
      sub:
        "Odwiedź LIDYA i poznaj nasze zegarki z diamentami osobiście.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Алмазные часы",
      title: "Время, превращённое в",
      titleAccent: "драгоценное украшение.",
      description:
        "Откройте часы, в которых исключительные драгоценные камни сочетаются с точными пропорциями и часовым мастерством.",
      since: "LIDYA · С 1989 ГОДА",
      statementBefore: "Время придаёт моменту форму.",
      statementAccent: "Драгоценные камни делают его вечным.",
      imageAlt:
        "Роскошные часы с драгоценными камнями в элегантной обстановке LIDYA",
    },

    gallery: {
      eyebrow: "Коллекция алмазных часов",
      title: "Часы с",
      titleAccent: "исключительным присутствием.",
      description:
        "От драгоценных безелей до браслетов в ювелирном стиле — каждая модель сочетает точность и искусство.",
      itemLabel: "Алмазные часы",
      closingText: "Созданы измерять время.",
      closingAccent: "Созданы стать украшением.",
      captions: [
        "Diamond Signature",
        "Ювелирные часы",
        "Исключительная закрепка",
        "Драгоценный безель",
        "Драгоценное присутствие",
        "Сияющая деталь",
        "Архитектура камней",
        "Утончённое сияние",
        "Выразительные часы",
        "Вечные драгоценности",
      ],
      alts: [
        "Роскошные часы с драгоценными камнями",
        "Ювелирные часы",
        "Часы с исключительной закрепкой камней",
        "Роскошные часы с драгоценным безелем",
        "Элегантные часы",
        "Деталь камней на роскошных часах",
        "Часы с утончённой архитектурой корпуса",
        "Роскошные часы с драгоценными деталями",
        "Выразительные драгоценные часы",
        "Вневременные роскошные часы",
      ],
    },

    craft: {
      eyebrow: "Характер драгоценных камней",
      title:
        "Характер часов определяется отношением между драгоценным камнем и временем",
      description:
        "Выбор камней, закрепка, пропорции и отделка должны создавать единое гармоничное целое.",
      closingText: "Точность создаёт баланс.",
      closingAccent: "Камни создают присутствие.",
      since: "LIDYA · С 1989 ГОДА",
      points: [
        {
          title: "Выбор",
          description:
            "Камни оцениваются по блеску, цвету, чистоте и гармонии с архитектурой часов.",
        },
        {
          title: "Закрепка",
          description:
            "Точная закрепка обеспечивает безопасность и визуальную целостность.",
        },
        {
          title: "Пропорции",
          description:
            "Размер и расположение камней должны быть сбалансированы с корпусом и циферблатом.",
        },
        {
          title: "Ювелирный характер",
          description:
            "Сочетание камней и часового мастерства превращает часы в украшение.",
        },
      ],
    },

    cta: {
      title: "Истинный характер драгоценных часов раскрывается на запястье",
      sub:
        "Познакомьтесь с часами LIDYA лично.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Diamanten horloges",
      title: "Tijd veranderd in",
      titleAccent: "een kostbaar juweel.",
      description:
        "Ontdek horloges waarin uitzonderlijke diamanten, verfijnde proporties en horlogeprecisie samenkomen.",
      since: "LIDYA · SINDS 1989",
      statementBefore: "Tijd geeft het moment vorm.",
      statementAccent: "Diamanten maken het blijvend.",
      imageAlt:
        "Luxe diamanten horloge in een elegante LIDYA omgeving",
    },

    gallery: {
      eyebrow: "De collectie diamanten horloges",
      title: "Horloges geselecteerd voor",
      titleAccent: "uitzonderlijke uitstraling.",
      description:
        "Van diamanten lunettes tot juweelachtige banden: elk horloge combineert precisie met kostbaar vakmanschap.",
      itemLabel: "Diamanten horloges",
      closingText: "Gemaakt om tijd te meten.",
      closingAccent: "Ontworpen om een juweel te worden.",
      captions: [
        "Diamond Signature",
        "Juweelhorloge",
        "Uitzonderlijke zetting",
        "Diamanten lunette",
        "Kostbare uitstraling",
        "Stralend detail",
        "Diamantarchitectuur",
        "Verfijnde schittering",
        "Statement-horloge",
        "Tijdloze diamanten",
      ],
      alts: [
        "Luxe diamanten horloge",
        "Juweelachtig diamanten horloge",
        "Horloge met uitzonderlijke diamantzetting",
        "Luxe horloge met diamanten lunette",
        "Elegant diamanten horloge",
        "Detail van diamanten op luxe horloge",
        "Diamanten horloge met verfijnde architectuur",
        "Luxe horloge met diamanten details",
        "Statement diamanten horloge",
        "Tijdloos luxe diamanten horloge",
      ],
    },

    craft: {
      eyebrow: "Het karakter van diamanten",
      title:
        "Een diamanten horloge wordt bepaald door de relatie tussen steen en tijd",
      description:
        "Selectie, zetting, proportie en afwerking moeten samen een verfijnd geheel vormen.",
      closingText: "Precisie creëert balans.",
      closingAccent: "Diamanten creëren uitstraling.",
      since: "LIDYA · SINDS 1989",
      points: [
        {
          title: "Selectie",
          description:
            "Diamanten worden beoordeeld op schittering, kleur, zuiverheid en harmonie met het ontwerp.",
        },
        {
          title: "Zetting",
          description:
            "Een nauwkeurige zetting zorgt voor veiligheid en visuele continuïteit.",
        },
        {
          title: "Proportie",
          description:
            "De grootte en plaatsing van de stenen moeten in balans blijven met kast en wijzerplaat.",
        },
        {
          title: "Juweelkarakter",
          description:
            "Wanneer diamant en horlogerie samenkomen, wordt het uurwerk een juweel.",
        },
      ],
    },

    cta: {
      title: "Een diamanten horloge ontdekt u om de pols",
      sub:
        "Bezoek LIDYA en ervaar onze diamanten horloges persoonlijk.",
    },
  },

  da: {
    hero: {
      eyebrow: "Diamanture",
      title: "Tid forvandlet til",
      titleAccent: "et kostbart smykke.",
      description:
        "Oplev ure, hvor exceptionelle diamanter møder raffinerede proportioner og urmagerpræcision.",
      since: "LIDYA · SIDEN 1989",
      statementBefore: "Tid giver øjeblikket form.",
      statementAccent: "Diamanter gør det varigt.",
      imageAlt:
        "Luksuriøst diamantur i elegante LIDYA omgivelser",
    },

    gallery: {
      eyebrow: "Kollektionen af diamanture",
      title: "Ure udvalgt for",
      titleAccent: "enestående tilstedeværelse.",
      description:
        "Fra diamantbesatte bezels til smykke-inspirerede armbånd kombinerer hvert ur præcision og kostbart håndværk.",
      itemLabel: "Diamanture",
      closingText: "Skabt til at måle tiden.",
      closingAccent: "Designet til at blive et smykke.",
      captions: [
        "Diamond Signature",
        "Smykkeur",
        "Enestående fatning",
        "Diamant bezel",
        "Kostbar tilstedeværelse",
        "Strålende detalje",
        "Diamantarkitektur",
        "Raffineret glans",
        "Statement-ur",
        "Tidløse diamanter",
      ],
      alts: [
        "Luksuriøst diamantur",
        "Smykkeinspireret diamantur",
        "Ur med enestående diamantfatning",
        "Luksusur med diamantbesat bezel",
        "Elegant diamantur",
        "Detalje af diamanter på luksusur",
        "Diamantur med raffineret arkitektur",
        "Luksusur med diamantdetaljer",
        "Markant diamantur",
        "Tidløst luksuriøst diamantur",
      ],
    },

    craft: {
      eyebrow: "Diamanternes karakter",
      title:
        "Et diamantur defineres af forholdet mellem sten og tid",
      description:
        "Udvælgelse, fatning, proportioner og finish skal arbejde sammen i en harmonisk helhed.",
      closingText: "Præcision skaber balance.",
      closingAccent: "Diamanter skaber tilstedeværelse.",
      since: "LIDYA · SIDEN 1989",
      points: [
        {
          title: "Udvælgelse",
          description:
            "Diamanter vurderes efter glans, farve, klarhed og harmoni med urets design.",
        },
        {
          title: "Fatning",
          description:
            "Præcis fatning sikrer sikkerhed og visuel kontinuitet.",
        },
        {
          title: "Proportioner",
          description:
            "Stenenes størrelse og placering skal balancere med kasse og urskive.",
        },
        {
          title: "Smykkekarakter",
          description:
            "Når diamanter og urmagerkunst mødes, bliver uret til et smykke.",
        },
      ],
    },

    cta: {
      title: "Et diamantur skal opleves på håndleddet",
      sub:
        "Besøg LIDYA og oplev vores diamanture personligt.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Timanttikellot",
      title: "Aika muuttuu",
      titleAccent: "arvokkaaksi koruksi.",
      description:
        "Tutustu kelloihin, joissa poikkeukselliset timantit, hienostuneet mittasuhteet ja kellonvalmistuksen tarkkuus kohtaavat.",
      since: "LIDYA · VUODESTA 1989",
      statementBefore: "Aika antaa hetkelle muodon.",
      statementAccent: "Timantit tekevät siitä pysyvän.",
      imageAlt:
        "Ylellinen timanttikello elegantissa LIDYA ympäristössä",
    },

    gallery: {
      eyebrow: "Timanttikellojen kokoelma",
      title: "Kelloja valittu",
      titleAccent: "poikkeuksellisen läsnäolon vuoksi.",
      description:
        "Timanttikehyksistä korumaisiin rannekkeisiin jokainen kello yhdistää tarkkuuden ja arvokkaan käsityön.",
      itemLabel: "Timanttikellot",
      closingText: "Luotu mittaamaan aikaa.",
      closingAccent: "Suunniteltu muuttumaan koruksi.",
      captions: [
        "Diamond Signature",
        "Korukello",
        "Poikkeuksellinen istutus",
        "Timanttikehä",
        "Arvokas läsnäolo",
        "Säteilevä yksityiskohta",
        "Timanttiarkkitehtuuri",
        "Hienostunut säihke",
        "Statement-kello",
        "Ajattomat timantit",
      ],
      alts: [
        "Ylellinen timanttikello",
        "Korumaailmasta inspiroitunut timanttikello",
        "Kello poikkeuksellisella timantti-istutuksella",
        "Luksuskello timanttikehällä",
        "Elegantti timanttikello",
        "Timanttien yksityiskohta luksuskellossa",
        "Timanttikello hienostuneella arkkitehtuurilla",
        "Luksuskello timanttiyksityiskohdilla",
        "Näyttävä timanttikello",
        "Ajaton ylellinen timanttikello",
      ],
    },

    craft: {
      eyebrow: "Timanttien luonne",
      title:
        "Timanttikellon määrittää jalokiven ja ajan välinen suhde",
      description:
        "Kivien valinta, istutus, mittasuhteet ja viimeistely muodostavat tasapainoisen kokonaisuuden.",
      closingText: "Tarkkuus luo tasapainon.",
      closingAccent: "Timantit luovat läsnäolon.",
      since: "LIDYA · VUODESTA 1989",
      points: [
        {
          title: "Valinta",
          description:
            "Timantit arvioidaan säihkeen, värin, puhtauden ja kellon muotoiluun sopivuuden perusteella.",
        },
        {
          title: "Istutus",
          description:
            "Tarkka istutus takaa turvallisuuden ja visuaalisen jatkuvuuden.",
        },
        {
          title: "Mittasuhteet",
          description:
            "Kivien koon ja sijoittelun tulee olla tasapainossa kuoren ja kellotaulun kanssa.",
        },
        {
          title: "Koruluonne",
          description:
            "Kun timantit ja kellonvalmistus kohtaavat, kellosta tulee koru.",
        },
      ],
    },

    cta: {
      title: "Timanttikello paljastuu parhaiten ranteessa",
      sub:
        "Tutustu LIDYA:n timanttikelloihin henkilökohtaisesti.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Diamantklockor",
      title: "Tid förvandlad till",
      titleAccent: "ett dyrbart smycke.",
      description:
        "Upptäck klockor där exceptionella diamanter möter raffinerade proportioner och urmakarprecision.",
      since: "LIDYA · SEDAN 1989",
      statementBefore: "Tiden ger ögonblicket form.",
      statementAccent: "Diamanter gör det bestående.",
      imageAlt:
        "Lyxig diamantklocka i elegant LIDYA miljö",
    },

    gallery: {
      eyebrow: "Kollektionen av diamantklockor",
      title: "Klockor valda för",
      titleAccent: "exceptionell närvaro.",
      description:
        "Från diamantbesatta bezels till smyckesinspirerade armband förenar varje klocka precision och exklusivt hantverk.",
      itemLabel: "Diamantklockor",
      closingText: "Skapade för att mäta tid.",
      closingAccent: "Designade för att bli smycken.",
      captions: [
        "Diamond Signature",
        "Smyckesklocka",
        "Exceptionell infattning",
        "Diamantbezel",
        "Dyrbar närvaro",
        "Strålande detalj",
        "Diamantarkitektur",
        "Raffinerad briljans",
        "Statement-klocka",
        "Tidlösa diamanter",
      ],
      alts: [
        "Lyxig diamantklocka",
        "Smyckesinspirerad diamantklocka",
        "Klocka med exceptionell diamantinfattning",
        "Lyxklocka med diamantbezel",
        "Elegant diamantklocka",
        "Detalj av diamanter på lyxklocka",
        "Diamantklocka med raffinerad arkitektur",
        "Lyxklocka med diamantdetaljer",
        "Karaktärsfull diamantklocka",
        "Tidlös lyxig diamantklocka",
      ],
    },

    craft: {
      eyebrow: "Diamanternas karaktär",
      title:
        "En diamantklocka definieras av relationen mellan sten och tid",
      description:
        "Urval, infattning, proportioner och finish måste skapa en balanserad helhet.",
      closingText: "Precision skapar balans.",
      closingAccent: "Diamanter skapar närvaro.",
      since: "LIDYA · SEDAN 1989",
      points: [
        {
          title: "Urval",
          description:
            "Diamanter bedöms efter briljans, färg, klarhet och harmoni med klockans design.",
        },
        {
          title: "Infattning",
          description:
            "Precisionsinfattning säkerställer trygghet och visuell kontinuitet.",
        },
        {
          title: "Proportioner",
          description:
            "Stenarnas storlek och placering måste balansera med boett och urtavla.",
        },
        {
          title: "Smyckeskaraktär",
          description:
            "När diamanter och urmakeri möts blir klockan ett smycke.",
        },
      ],
    },

    cta: {
      title: "En diamantklocka upptäcks på handleden",
      sub:
        "Besök LIDYA och upplev våra diamantklockor personligen.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Montres diamant",
      title: "Le temps transformé en",
      titleAccent: "un bijou précieux.",
      description:
        "Découvrez des montres où des diamants exceptionnels rencontrent des proportions raffinées et la précision horlogère.",
      since: "LIDYA · DEPUIS 1989",
      statementBefore: "Le temps donne forme à l'instant.",
      statementAccent: "Les diamants le rendent éternel.",
      imageAlt:
        "Montre diamant de luxe dans un univers élégant LIDYA",
    },

    gallery: {
      eyebrow: "La collection de montres diamant",
      title: "Des montres choisies pour",
      titleAccent: "une présence exceptionnelle.",
      description:
        "Des lunettes serties de diamants aux bracelets inspirés de la joaillerie, chaque montre unit précision et savoir-faire précieux.",
      itemLabel: "Montres diamant",
      closingText: "Créées pour mesurer le temps.",
      closingAccent: "Pensées pour devenir un bijou.",
      captions: [
        "Diamond Signature",
        "Montre joaillière",
        "Sertissage exceptionnel",
        "Lunette diamant",
        "Présence précieuse",
        "Détail rayonnant",
        "Architecture diamant",
        "Éclat raffiné",
        "Montre de caractère",
        "Diamants intemporels",
      ],
      alts: [
        "Montre diamant de luxe",
        "Montre diamant inspirée de la joaillerie",
        "Montre avec sertissage diamant exceptionnel",
        "Montre de luxe avec lunette diamant",
        "Montre diamant élégante",
        "Détail de diamants sur montre de luxe",
        "Montre diamant à architecture raffinée",
        "Montre de luxe avec détails diamant",
        "Montre diamant de caractère",
        "Montre diamant de luxe intemporelle",
      ],
    },

    craft: {
      eyebrow: "Le caractère du diamant",
      title:
        "Une montre diamant se définit par la relation entre la pierre et le temps",
      description:
        "Sélection, sertissage, proportions et finitions doivent former un ensemble parfaitement équilibré.",
      closingText: "La précision crée l'équilibre.",
      closingAccent: "Le diamant crée la présence.",
      since: "LIDYA · DEPUIS 1989",
      points: [
        {
          title: "Sélection",
          description:
            "Les diamants sont choisis pour leur éclat, leur couleur, leur pureté et leur harmonie avec la montre.",
        },
        {
          title: "Sertissage",
          description:
            "Un sertissage précis garantit sécurité et continuité visuelle.",
        },
        {
          title: "Proportions",
          description:
            "La taille et la position des pierres doivent rester équilibrées avec le boîtier et le cadran.",
        },
        {
          title: "Caractère joaillier",
          description:
            "Lorsque le diamant rencontre l'horlogerie, la montre devient un véritable bijou.",
        },
      ],
    },

    cta: {
      title: "Une montre diamant se révèle au poignet",
      sub:
        "Découvrez les montres diamant LIDYA lors d'une visite privée.",
    },
  },

  it: {
    hero: {
      eyebrow: "Orologi con diamanti",
      title: "Il tempo trasformato in",
      titleAccent: "un gioiello prezioso.",
      description:
        "Scoprite orologi in cui diamanti eccezionali incontrano proporzioni raffinate e precisione orologiera.",
      since: "LIDYA · DAL 1989",
      statementBefore: "Il tempo dà forma al momento.",
      statementAccent: "I diamanti lo rendono eterno.",
      imageAlt:
        "Orologio con diamanti di lusso in elegante ambiente LIDYA",
    },

    gallery: {
      eyebrow: "La collezione di orologi con diamanti",
      title: "Orologi scelti per",
      titleAccent: "una presenza eccezionale.",
      description:
        "Dalle lunette con diamanti ai bracciali ispirati alla gioielleria, ogni orologio unisce precisione e artigianato prezioso.",
      itemLabel: "Orologi con diamanti",
      closingText: "Creati per misurare il tempo.",
      closingAccent: "Disegnati per diventare gioielli.",
      captions: [
        "Diamond Signature",
        "Orologio gioiello",
        "Incastonatura eccezionale",
        "Lunetta con diamanti",
        "Presenza preziosa",
        "Dettaglio radioso",
        "Architettura diamantata",
        "Brillantezza raffinata",
        "Orologio statement",
        "Diamanti senza tempo",
      ],
      alts: [
        "Orologio con diamanti di lusso",
        "Orologio con diamanti ispirato alla gioielleria",
        "Orologio con incastonatura eccezionale",
        "Orologio di lusso con lunetta di diamanti",
        "Elegante orologio con diamanti",
        "Dettaglio di diamanti su orologio di lusso",
        "Orologio con diamanti e architettura raffinata",
        "Orologio di lusso con dettagli in diamanti",
        "Orologio statement con diamanti",
        "Orologio di lusso con diamanti senza tempo",
      ],
    },

    craft: {
      eyebrow: "Il carattere dei diamanti",
      title:
        "Un orologio con diamanti è definito dal rapporto tra pietra e tempo",
      description:
        "Selezione, incastonatura, proporzioni e finiture devono creare un equilibrio perfetto.",
      closingText: "La precisione crea equilibrio.",
      closingAccent: "I diamanti creano presenza.",
      since: "LIDYA · DAL 1989",
      points: [
        {
          title: "Selezione",
          description:
            "I diamanti vengono valutati per brillantezza, colore, purezza e armonia con l'orologio.",
        },
        {
          title: "Incastonatura",
          description:
            "Un'incastonatura precisa garantisce sicurezza e continuità visiva.",
        },
        {
          title: "Proporzioni",
          description:
            "Dimensione e posizione delle pietre devono rimanere in equilibrio con cassa e quadrante.",
        },
        {
          title: "Carattere gioiello",
          description:
            "Quando diamanti e orologeria si incontrano, l'orologio diventa un gioiello.",
        },
      ],
    },

    cta: {
      title: "Un orologio con diamanti si scopre al polso",
      sub:
        "Scoprite personalmente gli orologi con diamanti LIDYA.",
    },
  },

  es: {
    hero: {
      eyebrow: "Relojes con diamantes",
      title: "El tiempo transformado en",
      titleAccent: "una joya preciosa.",
      description:
        "Descubra relojes donde diamantes excepcionales se unen a proporciones refinadas y precisión relojera.",
      since: "LIDYA · DESDE 1989",
      statementBefore: "El tiempo da forma al momento.",
      statementAccent: "Los diamantes lo hacen eterno.",
      imageAlt:
        "Reloj de lujo con diamantes en elegante entorno LIDYA",
    },

    gallery: {
      eyebrow: "La colección de relojes con diamantes",
      title: "Relojes seleccionados por",
      titleAccent: "una presencia excepcional.",
      description:
        "Desde biseles con diamantes hasta brazaletes inspirados en la joyería, cada reloj combina precisión y artesanía preciosa.",
      itemLabel: "Relojes con diamantes",
      closingText: "Creados para medir el tiempo.",
      closingAccent: "Diseñados para convertirse en joyas.",
      captions: [
        "Diamond Signature",
        "Reloj joya",
        "Engaste excepcional",
        "Bisel con diamantes",
        "Presencia preciosa",
        "Detalle radiante",
        "Arquitectura de diamantes",
        "Brillo refinado",
        "Reloj statement",
        "Diamantes eternos",
      ],
      alts: [
        "Reloj de lujo con diamantes",
        "Reloj con diamantes inspirado en la joyería",
        "Reloj con engaste excepcional",
        "Reloj de lujo con bisel de diamantes",
        "Elegante reloj con diamantes",
        "Detalle de diamantes en reloj de lujo",
        "Reloj con diamantes y arquitectura refinada",
        "Reloj de lujo con detalles de diamantes",
        "Reloj statement con diamantes",
        "Reloj de lujo con diamantes atemporal",
      ],
    },

    craft: {
      eyebrow: "El carácter de los diamantes",
      title:
        "Un reloj con diamantes se define por la relación entre la piedra y el tiempo",
      description:
        "Selección, engaste, proporciones y acabado deben trabajar juntos en perfecto equilibrio.",
      closingText: "La precisión crea equilibrio.",
      closingAccent: "Los diamantes crean presencia.",
      since: "LIDYA · DESDE 1989",
      points: [
        {
          title: "Selección",
          description:
            "Los diamantes se valoran por su brillo, color, pureza y armonía con la arquitectura del reloj.",
        },
        {
          title: "Engaste",
          description:
            "Un engaste preciso garantiza seguridad y continuidad visual.",
        },
        {
          title: "Proporciones",
          description:
            "El tamaño y la posición de las piedras deben mantenerse equilibrados con caja y esfera.",
        },
        {
          title: "Carácter joyero",
          description:
            "Cuando los diamantes y la relojería se encuentran, el reloj se convierte en una auténtica joya.",
        },
      ],
    },

    cta: {
      title: "Un reloj con diamantes se descubre en la muñeca",
      sub:
        "Visite LIDYA y descubra personalmente nuestros relojes con diamantes.",
    },
  },
};

const DIAMOND_WATCH_IMAGES = [
  "/images/watches/diamond-category/diamond-watch1.png",
  "/images/watches/diamond-category/diamond-watch2.png",
  "/images/watches/diamond-category/diamond-watch3.png",
  "/images/watches/diamond-category/diamond-watch4.png",
  "/images/watches/diamond-category/diamond-watch5.png",
  "/images/watches/diamond-category/diamond-watch6.png",
  "/images/watches/diamond-category/diamond-watch7.png",
  "/images/watches/diamond-category/diamond-watch8.png",
  "/images/watches/diamond-category/diamond-watch9.png",
  "/images/watches/diamond-category/diamond-watch10.png",
];

function DiamondWatchIcon() {
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

      <path
        d="M35 7.5l4 4.5-4 5-4-5 4-4.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />

      <path
        d="M31.5 12h7"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function DiamondWatchesHero({
  copy,
}: {
  copy: DiamondWatchesCopy["hero"];
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
        bg-[#0C0A0F]
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
          src="/images/watches/diamond-category/diamond-watch-hero.png"
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[58%_center]
            md:object-[60%_center]
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
          from-[#09070D]/96
          via-[#100C14]/70
          to-[#100C14]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#08060B]/96
          via-[#100C14]/12
          to-[#100C14]/18
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_68%_37%,rgba(230,220,202,0.14)_0%,rgba(230,220,202,0.03)_30%,transparent_58%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24 xl:px-20">
        <div className="max-w-[920px]">
          <div
            className={`
              flex
              items-center
              gap-4
              text-[#D7BC78]
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
              <DiamondWatchIcon />
            </span>

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] md:text-[0.64rem]">
              {copy.eyebrow}
            </span>
          </div>

          <h1
            className="
              mt-6
              max-w-[980px]
              font-display
              text-[3.15rem]
              leading-[0.94]
              tracking-[-0.04em]
              sm:text-[4rem]
              md:text-[5.35rem]
              lg:text-[6.15rem]
            "
          >
            <span className="block overflow-hidden">
              <span
                className={`
                  block
                  !text-[#FAF7F2]
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
                  !text-[#D7BC78]
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
            <p className="max-w-[690px] text-sm leading-7 !text-white/75 md:text-base">
              {copy.description}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D7BC78]" />

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
              max-w-[1050px]
              font-display
              text-[1.8rem]
              italic
              leading-[1.08]
              !text-[#FAF7F2]
              md:text-4xl
              lg:text-5xl
            "
          >
            {copy.statementBefore}{" "}
            <span className="!text-[#D7BC78]">
              {copy.statementAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function DiamondWatchesContent() {
  const { locale } = useLanguage();

  const copy =
    DIAMOND_WATCHES_COPY[locale] ??
    DIAMOND_WATCHES_COPY.en;

  const galleryItems = DIAMOND_WATCH_IMAGES.map(
    (image, index) => ({
      image,

      caption:
        copy.gallery.captions[index] ??
        DIAMOND_WATCHES_COPY.en.gallery.captions[index] ??
        "",

      alt:
        copy.gallery.alts[index] ??
        DIAMOND_WATCHES_COPY.en.gallery.alts[index] ??
        "",
    })
  );

  return (
    <>
      <Header />

      <main>
        <DiamondWatchesHero copy={copy.hero} />

        <CategoryGallery
          icon={<DiamondWatchIcon />}
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