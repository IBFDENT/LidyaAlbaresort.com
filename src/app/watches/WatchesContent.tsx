"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";
import WatchesCinematicHero from "@/components/category/WatchesCinematicHero";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type WatchesCopy = {
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoriesAccent: string;
  categoriesDescription: string;
  discover: string;
  since: string;

  categories: {
    title: string;
    description: string;
  }[];

  craft: {
    eyebrow: string;
    title: string;
    description: string;
    closingText: string;
    closingAccent: string;
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

const WATCHES_COPY: Record<Locale, WatchesCopy> = {
  de: {
    categoriesEyebrow: "Die Welt der Uhren",
    categoriesTitle: "Eine Uhr für jeden",
    categoriesAccent: "Moment und Charakter.",
    categoriesDescription:
      "Von zeitloser Eleganz über sportliche Präzision bis hin zu Gold, Brillanten und Diamanten — entdecken Sie Uhren, die passend zum persönlichen Stil ausgewählt und gestaltet werden.",
    discover: "Entdecken",
    since: "LIDYA · SEIT 1989",

    categories: [
      {
        title: "Herrenuhren",
        description:
          "Selbstbewusste Proportionen, raffinierte Details und bleibender Charakter.",
      },
      {
        title: "Damenuhren",
        description:
          "Elegante Zeitmesser an der Schnittstelle von Schmuck und Uhrmacherkunst.",
      },
      {
        title: "Kinderuhren",
        description:
          "Durchdachte, verspielte und langlebige Uhren für jüngere Träger.",
      },
      {
        title: "Golduhren",
        description:
          "Edelmetall, zeitlose Präsenz und die unverwechselbare Wärme von Gold.",
      },
      {
        title: "Sportuhren",
        description:
          "Dynamisches Design, Funktionalität und Leistung für jeden Tag.",
      },
      {
        title: "Uhren mit Brillanten",
        description:
          "Brillantgeschliffene Steine bringen Licht und Bewegung ans Handgelenk.",
      },
      {
        title: "Diamantuhren",
        description:
          "Außergewöhnliche Diamanten verwandeln Zeitmesser in Schmuckstücke.",
      },
      {
        title: "Uhren nach Maß",
        description:
          "Persönliche Uhren, gestaltet nach Ihren Vorstellungen, Materialien und Details.",
      },
    ],

    craft: {
      eyebrow: "Der Charakter der Zeit",
      title:
        "Eine feine Uhr wird durch mehr bestimmt als nur durch das, was sich unter dem Zifferblatt befindet",
      description:
        "Proportionen, Materialien, Verarbeitung und das Gefühl am Handgelenk sind ebenso wichtig wie das Uhrwerk selbst. Die richtige Uhr wird mit der Zeit persönlich.",
      closingText: "Zeit misst den Moment.",
      closingAccent: "Charakter verleiht ihm Bedeutung.",
      points: [
        {
          title: "Design",
          description:
            "Gehäuseproportionen, Zifferblattarchitektur und Details prägen den Charakter einer Uhr, noch bevor sie am Handgelenk getragen wird.",
        },
        {
          title: "Materialien",
          description:
            "Stahl, Gold, Edelsteine, Leder und moderne technische Materialien verleihen jedem Zeitmesser eine eigene Präsenz.",
        },
        {
          title: "Präzision",
          description:
            "Im Herzen jeder Uhr begegnen sich Technik, Zuverlässigkeit und der Rhythmus der Zeit.",
        },
        {
          title: "Personalisierung",
          description:
            "Steinbesatz, Materialien, Farben und individuelle Details können eine Uhr in etwas zutiefst Persönliches verwandeln.",
        },
      ],
    },

    cta: {
      title: "Die richtige Uhr entdeckt man am Handgelenk",
      sub:
        "Entdecken Sie unsere Uhren bei einem persönlichen Besuch bei LIDYA und finden Sie Proportionen, Materialien und Details, die wirklich zu Ihnen passen.",
    },
  },

  en: {
    categoriesEyebrow: "The World of Watches",
    categoriesTitle: "A watch for every",
    categoriesAccent: "moment and character.",
    categoriesDescription:
      "From timeless elegance to sport-inspired precision, precious metals and exceptional stone setting — discover watches selected and created around individual style.",
    discover: "Discover",
    since: "LIDYA · SINCE 1989",

    categories: [
      {
        title: "Men's Watches",
        description:
          "Confident proportions, refined details and enduring character.",
      },
      {
        title: "Women's Watches",
        description:
          "Elegant timepieces where jewellery and watchmaking meet.",
      },
      {
        title: "Children's Watches",
        description:
          "Thoughtful, playful and enduring watches for younger wearers.",
      },
      {
        title: "Gold Watches",
        description:
          "Precious metal, timeless presence and unmistakable warmth.",
      },
      {
        title: "Sport Watches",
        description:
          "Dynamic design, functionality and everyday performance.",
      },
      {
        title: "Brilliant-set Watches",
        description:
          "Brilliant-cut stones bring light and movement to the wrist.",
      },
      {
        title: "Diamond Watches",
        description:
          "Exceptional diamonds transform timepieces into jewellery.",
      },
      {
        title: "Bespoke Watches",
        description:
          "Personal watches created around your vision, materials and details.",
      },
    ],

    craft: {
      eyebrow: "The Character of Time",
      title:
        "A fine watch is defined by more than what happens beneath the dial",
      description:
        "Proportion, material, finishing and the way a watch feels on the wrist are just as important as its mechanism. The right watch becomes personal with time.",
      closingText: "Time measures the moment.",
      closingAccent: "Character gives it meaning.",
      points: [
        {
          title: "Design",
          description:
            "Case proportions, dial architecture and details determine the character of a watch before it is even placed on the wrist.",
        },
        {
          title: "Materials",
          description:
            "Steel, gold, precious stones, leather and modern technical materials each give a timepiece a distinct presence.",
        },
        {
          title: "Precision",
          description:
            "At the heart of every watch is the relationship between engineering, reliability and the rhythm of time.",
        },
        {
          title: "Personalisation",
          description:
            "Stone setting, materials, colours and individual details can transform a watch into something deeply personal.",
        },
      ],
    },

    cta: {
      title: "The right watch is discovered on the wrist",
      sub:
        "Explore our watches during a private visit to LIDYA and discover the proportions, materials and details that feel right for you.",
    },
  },

  tr: {
    categoriesEyebrow: "Saatler Dünyası",
    categoriesTitle: "Her",
    categoriesAccent: "ana ve karaktere uygun bir saat.",
    categoriesDescription:
      "Zamansız zarafetten sportif hassasiyete, altından pırlanta ve elmas detaylara kadar — kişisel stile göre seçilen ve yaratılan saatleri keşfedin.",
    discover: "Keşfet",
    since: "LIDYA · 1989'DAN BERİ",

    categories: [
      {
        title: "Erkek Saatleri",
        description:
          "Güçlü oranlar, rafine detaylar ve kalıcı karakter.",
      },
      {
        title: "Kadın Saatleri",
        description:
          "Mücevher ve saat ustalığının buluştuğu zarif saatler.",
      },
      {
        title: "Çocuk Saatleri",
        description:
          "Genç kullanıcılar için düşünülmüş, eğlenceli ve dayanıklı saatler.",
      },
      {
        title: "Altın Saatler",
        description:
          "Değerli metal, zamansız duruş ve altının eşsiz sıcaklığı.",
      },
      {
        title: "Spor Saatler",
        description:
          "Dinamik tasarım, işlevsellik ve günlük performans.",
      },
      {
        title: "Pırlantalı Saatler",
        description:
          "Pırlanta kesim taşlar bileğe ışık ve hareket kazandırır.",
      },
      {
        title: "Elmas Saatler",
        description:
          "Olağanüstü elmaslar saatleri gerçek bir mücevhere dönüştürür.",
      },
      {
        title: "Özel Tasarım Saatler",
        description:
          "Hayaliniz, malzemeleriniz ve detaylarınıza göre yaratılan kişisel saatler.",
      },
    ],

    craft: {
      eyebrow: "Zamanın Karakteri",
      title:
        "İyi bir saati yalnızca kadranın altında olan mekanizma tanımlamaz",
      description:
        "Oranlar, malzemeler, yüzey işçiliği ve saatin bilekte verdiği his, mekanizması kadar önemlidir. Doğru saat zamanla kişisel hale gelir.",
      closingText: "Zaman anı ölçer.",
      closingAccent: "Karakter ona anlam verir.",
      points: [
        {
          title: "Tasarım",
          description:
            "Kasa oranları, kadran mimarisi ve detaylar saatin karakterini daha bileğe takılmadan belirler.",
        },
        {
          title: "Malzemeler",
          description:
            "Çelik, altın, değerli taşlar, deri ve modern teknik malzemeler her saate kendine özgü bir duruş kazandırır.",
        },
        {
          title: "Hassasiyet",
          description:
            "Her saatin merkezinde mühendislik, güvenilirlik ve zamanın ritmi arasındaki ilişki bulunur.",
        },
        {
          title: "Kişiselleştirme",
          description:
            "Taş yerleştirme, malzemeler, renkler ve özel detaylar bir saati son derece kişisel hale getirebilir.",
        },
      ],
    },

    cta: {
      title: "Doğru saat bilekte keşfedilir",
      sub:
        "LIDYA'yı ziyaret ederek saatlerimizi yakından keşfedin ve size uygun oranları, malzemeleri ve detayları bulun.",
    },
  },

  sk: {
    categoriesEyebrow: "Svet hodiniek",
    categoriesTitle: "Hodinky pre každý",
    categoriesAccent: "okamih a charakter.",
    categoriesDescription:
      "Od nadčasovej elegancie cez športovú presnosť až po zlato, brilianty a diamanty — objavte hodinky vybrané a vytvorené podľa osobného štýlu.",
    discover: "Objaviť",
    since: "LIDYA · OD ROKU 1989",

    categories: [
      {
        title: "Pánske hodinky",
        description:
          "Sebavedomé proporcie, precízne detaily a nadčasový charakter.",
      },
      {
        title: "Dámske hodinky",
        description:
          "Elegantné hodinky na hranici hodinárstva a šperkárstva.",
      },
      {
        title: "Detské hodinky",
        description:
          "Premyslené, hravé a odolné hodinky pre mladších nositeľov.",
      },
      {
        title: "Zlaté hodinky",
        description:
          "Vzácny kov, nadčasová prítomnosť a nezameniteľná farba zlata.",
      },
      {
        title: "Športové hodinky",
        description:
          "Dynamický dizajn, funkčnosť a každodenný výkon.",
      },
      {
        title: "Hodinky s briliantmi",
        description:
          "Briliantový výbrus prináša na zápästie svetlo a pohyb.",
      },
      {
        title: "Diamantové hodinky",
        description:
          "Výnimočné diamanty premieňajú hodinky na skutočný šperk.",
      },
      {
        title: "Hodinky na zákazku",
        description:
          "Osobné hodinky vytvorené podľa vašej predstavy, materiálov a detailov.",
      },
    ],

    craft: {
      eyebrow: "Charakter času",
      title:
        "Výnimočné hodinky neurčuje iba to, čo sa ukrýva pod ciferníkom",
      description:
        "Proporcie, materiál, povrchová úprava a pocit na zápästí sú rovnako dôležité ako samotný mechanizmus. Správne hodinky sa časom stávajú osobnými.",
      closingText: "Čas meria okamih.",
      closingAccent: "Charakter mu dáva význam.",
      points: [
        {
          title: "Dizajn",
          description:
            "Proporcie puzdra, architektúra ciferníka a jednotlivé detaily určujú charakter hodiniek ešte predtým, než si ich nasadíte.",
        },
        {
          title: "Materiály",
          description:
            "Oceľ, zlato, drahé kamene, koža aj moderné technické materiály dávajú každým hodinkám vlastnú osobnosť.",
        },
        {
          title: "Presnosť",
          description:
            "V srdci každých hodiniek sa stretáva technika, spoľahlivosť a presný rytmus času.",
        },
        {
          title: "Personalizácia",
          description:
            "Osadenie kameňov, materiály, farby a individuálne detaily dokážu premeniť hodinky na niečo skutočne osobné.",
        },
      ],
    },

    cta: {
      title: "Tie správne hodinky treba cítiť na zápästí",
      sub:
        "Objavte svet hodiniek LIDYA počas osobnej návštevy a nájdite proporcie, materiály a detaily, ktoré budú patriť práve vám.",
    },
  },

  cs: {
    categoriesEyebrow: "Svět hodinek",
    categoriesTitle: "Hodinky pro každý",
    categoriesAccent: "okamžik a charakter.",
    categoriesDescription:
      "Od nadčasové elegance přes sportovní přesnost až po zlato, brilianty a diamanty — objevte hodinky vybrané a vytvořené podle osobního stylu.",
    discover: "Objevit",
    since: "LIDYA · OD ROKU 1989",

    categories: [
      {
        title: "Pánské hodinky",
        description:
          "Sebevědomé proporce, precizní detaily a nadčasový charakter.",
      },
      {
        title: "Dámské hodinky",
        description:
          "Elegantní hodinky na pomezí hodinářství a šperkařství.",
      },
      {
        title: "Dětské hodinky",
        description:
          "Promyšlené, hravé a odolné hodinky pro mladší nositele.",
      },
      {
        title: "Zlaté hodinky",
        description:
          "Vzácný kov, nadčasová přítomnost a nezaměnitelné teplo zlata.",
      },
      {
        title: "Sportovní hodinky",
        description:
          "Dynamický design, funkčnost a každodenní výkon.",
      },
      {
        title: "Hodinky s brilianty",
        description:
          "Briliantový brus přináší na zápěstí světlo a pohyb.",
      },
      {
        title: "Diamantové hodinky",
        description:
          "Výjimečné diamanty proměňují hodinky ve skutečný šperk.",
      },
      {
        title: "Hodinky na zakázku",
        description:
          "Osobní hodinky vytvořené podle vaší představy, materiálů a detailů.",
      },
    ],

    craft: {
      eyebrow: "Charakter času",
      title:
        "Výjimečné hodinky neurčuje pouze to, co se skrývá pod ciferníkem",
      description:
        "Proporce, materiál, povrchová úprava a pocit na zápěstí jsou stejně důležité jako samotný mechanismus. Správné hodinky se časem stávají osobními.",
      closingText: "Čas měří okamžik.",
      closingAccent: "Charakter mu dává význam.",
      points: [
        {
          title: "Design",
          description:
            "Proporce pouzdra, architektura ciferníku a jednotlivé detaily určují charakter hodinek ještě předtím, než si je nasadíte.",
        },
        {
          title: "Materiály",
          description:
            "Ocel, zlato, drahé kameny, kůže i moderní technické materiály dávají každým hodinkám vlastní osobnost.",
        },
        {
          title: "Přesnost",
          description:
            "V srdci každých hodinek se setkává technika, spolehlivost a přesný rytmus času.",
        },
        {
          title: "Personalizace",
          description:
            "Osazení kamenů, materiály, barvy a individuální detaily dokážou proměnit hodinky v něco skutečně osobního.",
        },
      ],
    },

    cta: {
      title: "Ty správné hodinky je třeba cítit na zápěstí",
      sub:
        "Objevte svět hodinek LIDYA při osobní návštěvě a najděte proporce, materiály a detaily, které budou patřit právě vám.",
    },
  },

  hu: {
    categoriesEyebrow: "Az órák világa",
    categoriesTitle: "Óra minden",
    categoriesAccent: "pillanathoz és karakterhez.",
    categoriesDescription:
      "Az időtlen eleganciától a sportos precizitáson át az aranyig, briliánsokig és gyémántokig — fedezze fel az egyéni stílushoz választott és készített órákat.",
    discover: "Felfedezés",
    since: "LIDYA · 1989 ÓTA",

    categories: [
      {
        title: "Férfi órák",
        description:
          "Magabiztos arányok, kifinomult részletek és időtálló karakter.",
      },
      {
        title: "Női órák",
        description:
          "Elegáns időmérők, ahol az ékszer és az órakészítés találkozik.",
      },
      {
        title: "Gyermekórák",
        description:
          "Átgondolt, játékos és tartós órák fiatalabb viselők számára.",
      },
      {
        title: "Aranyórák",
        description:
          "Nemesfém, időtlen jelenlét és az arany összetéveszthetetlen melegsége.",
      },
      {
        title: "Sportórák",
        description:
          "Dinamikus design, funkcionalitás és mindennapi teljesítmény.",
      },
      {
        title: "Briliáns órák",
        description:
          "A briliáns csiszolású kövek fényt és mozgást visznek a csuklóra.",
      },
      {
        title: "Gyémánt órák",
        description:
          "A kivételes gyémántok valódi ékszerré alakítják az órát.",
      },
      {
        title: "Egyedi órák",
        description:
          "Személyes órák az Ön elképzelései, anyagai és részletei alapján.",
      },
    ],

    craft: {
      eyebrow: "Az idő karaktere",
      title:
        "Egy különleges órát több határoz meg annál, mint ami a számlap alatt történik",
      description:
        "Az arányok, az anyagok, a kidolgozás és az érzés a csuklón éppolyan fontosak, mint maga a szerkezet. A megfelelő óra idővel személyessé válik.",
      closingText: "Az idő méri a pillanatot.",
      closingAccent: "A karakter jelentést ad neki.",
      points: [
        {
          title: "Design",
          description:
            "A tok arányai, a számlap felépítése és a részletek már azelőtt meghatározzák az óra karakterét, hogy csuklóra kerülne.",
        },
        {
          title: "Anyagok",
          description:
            "Az acél, arany, drágakövek, bőr és modern technikai anyagok mind külön jelenlétet adnak az órának.",
        },
        {
          title: "Pontosság",
          description:
            "Minden óra szívében a mérnöki tudás, a megbízhatóság és az idő ritmusa találkozik.",
        },
        {
          title: "Személyre szabás",
          description:
            "A kőfoglalás, az anyagok, a színek és az egyedi részletek mélyen személyessé tehetik az órát.",
        },
      ],
    },

    cta: {
      title: "A megfelelő órát a csuklón lehet igazán felfedezni",
      sub:
        "Fedezze fel a LIDYA óráit személyes látogatás során, és találja meg az Ön számára megfelelő arányokat, anyagokat és részleteket.",
    },
  },

  pl: {
    categoriesEyebrow: "Świat zegarków",
    categoriesTitle: "Zegarek na każdy",
    categoriesAccent: "moment i charakter.",
    categoriesDescription:
      "Od ponadczasowej elegancji przez sportową precyzję po złoto, brylanty i diamenty — odkryj zegarki wybierane i tworzone z myślą o indywidualnym stylu.",
    discover: "Odkryj",
    since: "LIDYA · OD 1989 ROKU",

    categories: [
      {
        title: "Zegarki męskie",
        description:
          "Wyraziste proporcje, dopracowane detale i ponadczasowy charakter.",
      },
      {
        title: "Zegarki damskie",
        description:
          "Eleganckie zegarki łączące jubilerstwo i sztukę zegarmistrzowską.",
      },
      {
        title: "Zegarki dziecięce",
        description:
          "Przemyślane, radosne i trwałe zegarki dla młodszych użytkowników.",
      },
      {
        title: "Zegarki złote",
        description:
          "Szlachetny metal, ponadczasowa obecność i wyjątkowe ciepło złota.",
      },
      {
        title: "Zegarki sportowe",
        description:
          "Dynamiczny design, funkcjonalność i codzienna wydajność.",
      },
      {
        title: "Zegarki z brylantami",
        description:
          "Brylantowo szlifowane kamienie wnoszą na nadgarstek światło i ruch.",
      },
      {
        title: "Zegarki z diamentami",
        description:
          "Wyjątkowe diamenty przemieniają zegarki w prawdziwą biżuterię.",
      },
      {
        title: "Zegarki na zamówienie",
        description:
          "Osobiste zegarki tworzone wokół Państwa wizji, materiałów i detali.",
      },
    ],

    craft: {
      eyebrow: "Charakter czasu",
      title:
        "Wyjątkowy zegarek definiuje coś więcej niż mechanizm ukryty pod tarczą",
      description:
        "Proporcje, materiały, wykończenie i odczucie na nadgarstku są równie ważne jak sam mechanizm. Właściwy zegarek z czasem staje się osobisty.",
      closingText: "Czas mierzy chwilę.",
      closingAccent: "Charakter nadaje jej znaczenie.",
      points: [
        {
          title: "Design",
          description:
            "Proporcje koperty, architektura tarczy i detale określają charakter zegarka jeszcze zanim trafi on na nadgarstek.",
        },
        {
          title: "Materiały",
          description:
            "Stal, złoto, kamienie szlachetne, skóra i nowoczesne materiały techniczne nadają każdemu zegarkowi wyjątkową obecność.",
        },
        {
          title: "Precyzja",
          description:
            "W sercu każdego zegarka spotykają się inżynieria, niezawodność i rytm czasu.",
        },
        {
          title: "Personalizacja",
          description:
            "Oprawa kamieni, materiały, kolory i indywidualne detale mogą przemienić zegarek w coś wyjątkowo osobistego.",
        },
      ],
    },

    cta: {
      title: "Właściwy zegarek odkrywa się na nadgarstku",
      sub:
        "Poznaj zegarki LIDYA podczas osobistej wizyty i odkryj proporcje, materiały i detale, które najlepiej do Ciebie pasują.",
    },
  },

  ru: {
    categoriesEyebrow: "Мир часов",
    categoriesTitle: "Часы для каждого",
    categoriesAccent: "момента и характера.",
    categoriesDescription:
      "От вневременной элегантности и спортивной точности до золота, бриллиантов и драгоценных камней — откройте часы, подобранные и созданные с учётом индивидуального стиля.",
    discover: "Открыть",
    since: "LIDYA · С 1989 ГОДА",

    categories: [
      {
        title: "Мужские часы",
        description:
          "Выразительные пропорции, точные детали и вневременной характер.",
      },
      {
        title: "Женские часы",
        description:
          "Элегантные часы на пересечении ювелирного искусства и часового мастерства.",
      },
      {
        title: "Детские часы",
        description:
          "Продуманные, яркие и долговечные часы для юных владельцев.",
      },
      {
        title: "Золотые часы",
        description:
          "Драгоценный металл, вневременное присутствие и неповторимое тепло золота.",
      },
      {
        title: "Спортивные часы",
        description:
          "Динамичный дизайн, функциональность и надёжность на каждый день.",
      },
      {
        title: "Часы с бриллиантами",
        description:
          "Бриллиантовая огранка наполняет запястье светом и движением.",
      },
      {
        title: "Алмазные часы",
        description:
          "Исключительные драгоценные камни превращают часы в настоящее украшение.",
      },
      {
        title: "Часы на заказ",
        description:
          "Индивидуальные часы, созданные вокруг ваших идей, материалов и деталей.",
      },
    ],

    craft: {
      eyebrow: "Характер времени",
      title:
        "Хорошие часы определяет не только то, что скрывается под циферблатом",
      description:
        "Пропорции, материал, отделка и ощущение часов на запястье не менее важны, чем сам механизм. Со временем правильные часы становятся личными.",
      closingText: "Время измеряет момент.",
      closingAccent: "Характер придаёт ему смысл.",
      points: [
        {
          title: "Дизайн",
          description:
            "Пропорции корпуса, архитектура циферблата и детали формируют характер часов ещё до того, как они окажутся на запястье.",
        },
        {
          title: "Материалы",
          description:
            "Сталь, золото, драгоценные камни, кожа и современные технические материалы придают часам особый характер.",
        },
        {
          title: "Точность",
          description:
            "В основе каждых часов лежит связь инженерии, надёжности и ритма времени.",
        },
        {
          title: "Персонализация",
          description:
            "Закрепка камней, материалы, цвета и индивидуальные детали способны сделать часы по-настоящему личными.",
        },
      ],
    },

    cta: {
      title: "Правильные часы раскрываются на запястье",
      sub:
        "Познакомьтесь с часами LIDYA во время личного визита и найдите пропорции, материалы и детали, которые подходят именно вам.",
    },
  },

  nl: {
    categoriesEyebrow: "De wereld van horloges",
    categoriesTitle: "Een horloge voor elk",
    categoriesAccent: "moment en karakter.",
    categoriesDescription:
      "Van tijdloze elegantie en sportieve precisie tot goud, briljanten en diamanten — ontdek horloges die rond persoonlijke stijl worden geselecteerd en gecreëerd.",
    discover: "Ontdek",
    since: "LIDYA · SINDS 1989",

    categories: [
      {
        title: "Herenhorloges",
        description:
          "Zelfverzekerde verhoudingen, verfijnde details en tijdloos karakter.",
      },
      {
        title: "Dameshorloges",
        description:
          "Elegante uurwerken waar juwelierskunst en horlogerie samenkomen.",
      },
      {
        title: "Kinderhorloges",
        description:
          "Doordachte, speelse en duurzame horloges voor jongere dragers.",
      },
      {
        title: "Gouden horloges",
        description:
          "Edelmetaal, tijdloze uitstraling en de onmiskenbare warmte van goud.",
      },
      {
        title: "Sporthorloges",
        description:
          "Dynamisch design, functionaliteit en prestaties voor elke dag.",
      },
      {
        title: "Horloges met briljanten",
        description:
          "Briljantgeslepen stenen brengen licht en beweging naar de pols.",
      },
      {
        title: "Diamanten horloges",
        description:
          "Uitzonderlijke diamanten veranderen uurwerken in juwelen.",
      },
      {
        title: "Horloges op maat",
        description:
          "Persoonlijke horloges gecreëerd rond uw visie, materialen en details.",
      },
    ],

    craft: {
      eyebrow: "Het karakter van tijd",
      title:
        "Een bijzonder horloge wordt bepaald door meer dan wat zich onder de wijzerplaat bevindt",
      description:
        "Verhoudingen, materiaal, afwerking en het gevoel om de pols zijn even belangrijk als het mechanisme. Het juiste horloge wordt met de tijd persoonlijk.",
      closingText: "Tijd meet het moment.",
      closingAccent: "Karakter geeft het betekenis.",
      points: [
        {
          title: "Design",
          description:
            "De proporties van de kast, de architectuur van de wijzerplaat en de details bepalen het karakter van een horloge nog voordat het wordt gedragen.",
        },
        {
          title: "Materialen",
          description:
            "Staal, goud, edelstenen, leer en moderne technische materialen geven elk uurwerk een eigen uitstraling.",
        },
        {
          title: "Precisie",
          description:
            "In het hart van elk horloge komen techniek, betrouwbaarheid en het ritme van de tijd samen.",
        },
        {
          title: "Personalisatie",
          description:
            "Steenzetting, materialen, kleuren en individuele details kunnen een horloge bijzonder persoonlijk maken.",
        },
      ],
    },

    cta: {
      title: "Het juiste horloge ontdekt u om de pols",
      sub:
        "Ontdek onze horloges tijdens een persoonlijk bezoek aan LIDYA en vind de verhoudingen, materialen en details die bij u passen.",
    },
  },

  da: {
    categoriesEyebrow: "Urenes verden",
    categoriesTitle: "Et ur til hvert",
    categoriesAccent: "øjeblik og enhver karakter.",
    categoriesDescription:
      "Fra tidløs elegance og sportslig præcision til guld, brillanter og diamanter — oplev ure udvalgt og skabt omkring personlig stil.",
    discover: "Oplev",
    since: "LIDYA · SIDEN 1989",

    categories: [
      {
        title: "Herreure",
        description:
          "Selvsikre proportioner, raffinerede detaljer og tidløs karakter.",
      },
      {
        title: "Dameure",
        description:
          "Elegante ure, hvor smykkekunst og urmageri mødes.",
      },
      {
        title: "Børneure",
        description:
          "Gennemtænkte, legende og holdbare ure til yngre brugere.",
      },
      {
        title: "Guldure",
        description:
          "Ædelmetal, tidløs tilstedeværelse og guldets karakteristiske varme.",
      },
      {
        title: "Sportsure",
        description:
          "Dynamisk design, funktionalitet og ydeevne til hverdagen.",
      },
      {
        title: "Ure med brillanter",
        description:
          "Brillantslebne sten bringer lys og bevægelse til håndleddet.",
      },
      {
        title: "Diamanture",
        description:
          "Enestående diamanter forvandler ure til ægte smykker.",
      },
      {
        title: "Skræddersyede ure",
        description:
          "Personlige ure skabt omkring din vision, dine materialer og detaljer.",
      },
    ],

    craft: {
      eyebrow: "Tidens karakter",
      title:
        "Et fint ur defineres af mere end det, der sker under urskiven",
      description:
        "Proportioner, materialer, finish og følelsen på håndleddet er lige så vigtige som selve mekanismen. Det rigtige ur bliver personligt med tiden.",
      closingText: "Tiden måler øjeblikket.",
      closingAccent: "Karakter giver det betydning.",
      points: [
        {
          title: "Design",
          description:
            "Kassens proportioner, urskivens arkitektur og detaljerne bestemmer urets karakter, før det overhovedet bæres.",
        },
        {
          title: "Materialer",
          description:
            "Stål, guld, ædelsten, læder og moderne tekniske materialer giver hvert ur sin egen tilstedeværelse.",
        },
        {
          title: "Præcision",
          description:
            "I hjertet af hvert ur mødes teknik, pålidelighed og tidens rytme.",
        },
        {
          title: "Personalisering",
          description:
            "Stenfatning, materialer, farver og individuelle detaljer kan gøre et ur dybt personligt.",
        },
      ],
    },

    cta: {
      title: "Det rigtige ur opdages på håndleddet",
      sub:
        "Oplev LIDYA's ure ved et personligt besøg og find de proportioner, materialer og detaljer, der føles rigtige for dig.",
    },
  },

  fi: {
    categoriesEyebrow: "Kellojen maailma",
    categoriesTitle: "Kello jokaiseen",
    categoriesAccent: "hetkeen ja luonteeseen.",
    categoriesDescription:
      "Ajattomasta eleganssista urheilulliseen tarkkuuteen, kullasta briljantteihin ja timantteihin — tutustu kelloihin, jotka valitaan ja luodaan yksilöllisen tyylin ympärille.",
    discover: "Tutustu",
    since: "LIDYA · VUODESTA 1989",

    categories: [
      {
        title: "Miesten kellot",
        description:
          "Vahvat mittasuhteet, hienostuneet yksityiskohdat ja ajaton luonne.",
      },
      {
        title: "Naisten kellot",
        description:
          "Elegantit kellot, joissa korutaide ja kellonvalmistus kohtaavat.",
      },
      {
        title: "Lasten kellot",
        description:
          "Harkitut, leikkisät ja kestävät kellot nuoremmille käyttäjille.",
      },
      {
        title: "Kultakellot",
        description:
          "Jalometalli, ajaton läsnäolo ja kullan tunnistettava lämpö.",
      },
      {
        title: "Urheilukellot",
        description:
          "Dynaaminen muotoilu, toiminnallisuus ja suorituskyky arkeen.",
      },
      {
        title: "Briljantein koristellut kellot",
        description:
          "Briljanttihiotut kivet tuovat ranteeseen valoa ja liikettä.",
      },
      {
        title: "Timanttikellot",
        description:
          "Poikkeukselliset timantit muuttavat kellon todelliseksi koruksi.",
      },
      {
        title: "Mittatilauskellot",
        description:
          "Henkilökohtaiset kellot, jotka luodaan vision, materiaalien ja yksityiskohtien ympärille.",
      },
    ],

    craft: {
      eyebrow: "Ajan luonne",
      title:
        "Hieno kello määrittyy paljon muustakin kuin siitä, mitä kellotaulun alla tapahtuu",
      description:
        "Mittasuhteet, materiaalit, viimeistely ja tunne ranteessa ovat yhtä tärkeitä kuin itse koneisto. Oikea kello muuttuu ajan myötä henkilökohtaiseksi.",
      closingText: "Aika mittaa hetken.",
      closingAccent: "Luonne antaa sille merkityksen.",
      points: [
        {
          title: "Muotoilu",
          description:
            "Kuoren mittasuhteet, kellotaulun rakenne ja yksityiskohdat määrittävät kellon luonteen jo ennen kuin se asetetaan ranteeseen.",
        },
        {
          title: "Materiaalit",
          description:
            "Teräs, kulta, jalokivet, nahka ja modernit tekniset materiaalit antavat jokaiselle kellolle oman ilmeensä.",
        },
        {
          title: "Tarkkuus",
          description:
            "Jokaisen kellon sydämessä kohtaavat tekniikka, luotettavuus ja ajan rytmi.",
        },
        {
          title: "Personointi",
          description:
            "Kivien istutus, materiaalit, värit ja yksilölliset yksityiskohdat voivat tehdä kellosta aidosti henkilökohtaisen.",
        },
      ],
    },

    cta: {
      title: "Oikea kello löytyy ranteesta",
      sub:
        "Tutustu LIDYA-kelloihin henkilökohtaisen vierailun aikana ja löydä sinulle sopivat mittasuhteet, materiaalit ja yksityiskohdat.",
    },
  },

  sv: {
    categoriesEyebrow: "Klockornas värld",
    categoriesTitle: "En klocka för varje",
    categoriesAccent: "ögonblick och karaktär.",
    categoriesDescription:
      "Från tidlös elegans och sportig precision till guld, briljanter och diamanter — upptäck klockor valda och skapade kring personlig stil.",
    discover: "Upptäck",
    since: "LIDYA · SEDAN 1989",

    categories: [
      {
        title: "Herrklockor",
        description:
          "Självsäkra proportioner, raffinerade detaljer och tidlös karaktär.",
      },
      {
        title: "Damklockor",
        description:
          "Eleganta klockor där smyckeskonst och urmakeri möts.",
      },
      {
        title: "Barnklockor",
        description:
          "Genomtänkta, lekfulla och hållbara klockor för yngre bärare.",
      },
      {
        title: "Guldklockor",
        description:
          "Ädelmetall, tidlös närvaro och guldets omisskännliga värme.",
      },
      {
        title: "Sportklockor",
        description:
          "Dynamisk design, funktionalitet och prestanda för vardagen.",
      },
      {
        title: "Klockor med briljanter",
        description:
          "Briljantslipade stenar för in ljus och rörelse på handleden.",
      },
      {
        title: "Diamantklockor",
        description:
          "Exceptionella diamanter förvandlar klockor till verkliga smycken.",
      },
      {
        title: "Skräddarsydda klockor",
        description:
          "Personliga klockor skapade kring din vision, material och detaljer.",
      },
    ],

    craft: {
      eyebrow: "Tidens karaktär",
      title:
        "En fin klocka definieras av mer än det som sker under urtavlan",
      description:
        "Proportioner, material, finish och känslan på handleden är lika viktiga som själva mekanismen. Den rätta klockan blir personlig med tiden.",
      closingText: "Tiden mäter ögonblicket.",
      closingAccent: "Karaktären ger det mening.",
      points: [
        {
          title: "Design",
          description:
            "Boettens proportioner, urtavlans arkitektur och detaljer avgör klockans karaktär innan den ens bärs på handleden.",
        },
        {
          title: "Material",
          description:
            "Stål, guld, ädelstenar, läder och moderna tekniska material ger varje klocka en egen närvaro.",
        },
        {
          title: "Precision",
          description:
            "I hjärtat av varje klocka möts teknik, tillförlitlighet och tidens rytm.",
        },
        {
          title: "Personalisering",
          description:
            "Steninfattning, material, färger och individuella detaljer kan göra en klocka djupt personlig.",
        },
      ],
    },

    cta: {
      title: "Den rätta klockan upptäcks på handleden",
      sub:
        "Upptäck LIDYA:s klockor vid ett personligt besök och hitta proportioner, material och detaljer som känns rätt för dig.",
    },
  },

  fr: {
    categoriesEyebrow: "L'univers des montres",
    categoriesTitle: "Une montre pour chaque",
    categoriesAccent: "instant et chaque caractère.",
    categoriesDescription:
      "De l'élégance intemporelle à la précision sportive, de l'or aux brillants et aux diamants — découvrez des montres sélectionnées et créées autour d'un style personnel.",
    discover: "Découvrir",
    since: "LIDYA · DEPUIS 1989",

    categories: [
      {
        title: "Montres homme",
        description:
          "Des proportions affirmées, des détails raffinés et un caractère durable.",
      },
      {
        title: "Montres femme",
        description:
          "Des garde-temps élégants à la rencontre de la joaillerie et de l'horlogerie.",
      },
      {
        title: "Montres enfant",
        description:
          "Des montres pensées, ludiques et durables pour les plus jeunes.",
      },
      {
        title: "Montres en or",
        description:
          "Métal précieux, présence intemporelle et chaleur incomparable de l'or.",
      },
      {
        title: "Montres sport",
        description:
          "Design dynamique, fonctionnalité et performance au quotidien.",
      },
      {
        title: "Montres serties de brillants",
        description:
          "Les pierres taille brillant apportent lumière et mouvement au poignet.",
      },
      {
        title: "Montres diamant",
        description:
          "Des diamants exceptionnels transforment les garde-temps en véritables bijoux.",
      },
      {
        title: "Montres sur mesure",
        description:
          "Des montres personnelles créées autour de votre vision, de vos matériaux et de vos détails.",
      },
    ],

    craft: {
      eyebrow: "Le caractère du temps",
      title:
        "Une belle montre se définit par bien plus que ce qui se cache sous son cadran",
      description:
        "Les proportions, les matériaux, les finitions et la sensation au poignet comptent autant que le mécanisme. Avec le temps, la bonne montre devient personnelle.",
      closingText: "Le temps mesure l'instant.",
      closingAccent: "Le caractère lui donne du sens.",
      points: [
        {
          title: "Design",
          description:
            "Les proportions du boîtier, l'architecture du cadran et les détails définissent le caractère d'une montre avant même qu'elle ne soit portée.",
        },
        {
          title: "Matériaux",
          description:
            "Acier, or, pierres précieuses, cuir et matériaux techniques modernes donnent à chaque montre une présence unique.",
        },
        {
          title: "Précision",
          description:
            "Au cœur de chaque montre se rencontrent l'ingénierie, la fiabilité et le rythme du temps.",
        },
        {
          title: "Personnalisation",
          description:
            "Le sertissage, les matériaux, les couleurs et les détails individuels peuvent rendre une montre profondément personnelle.",
        },
      ],
    },

    cta: {
      title: "La bonne montre se découvre au poignet",
      sub:
        "Découvrez les montres LIDYA lors d'une visite privée et trouvez les proportions, matériaux et détails qui vous correspondent.",
    },
  },

  it: {
    categoriesEyebrow: "Il mondo degli orologi",
    categoriesTitle: "Un orologio per ogni",
    categoriesAccent: "momento e carattere.",
    categoriesDescription:
      "Dall'eleganza senza tempo alla precisione sportiva, dall'oro ai brillanti e ai diamanti — scoprite orologi selezionati e creati intorno allo stile personale.",
    discover: "Scopri",
    since: "LIDYA · DAL 1989",

    categories: [
      {
        title: "Orologi da uomo",
        description:
          "Proporzioni decise, dettagli raffinati e carattere senza tempo.",
      },
      {
        title: "Orologi da donna",
        description:
          "Segnatempo eleganti dove gioielleria e orologeria si incontrano.",
      },
      {
        title: "Orologi per bambini",
        description:
          "Orologi pensati, giocosi e resistenti per i più giovani.",
      },
      {
        title: "Orologi in oro",
        description:
          "Metallo prezioso, presenza senza tempo e il calore inconfondibile dell'oro.",
      },
      {
        title: "Orologi sportivi",
        description:
          "Design dinamico, funzionalità e prestazioni quotidiane.",
      },
      {
        title: "Orologi con brillanti",
        description:
          "Le pietre taglio brillante portano luce e movimento al polso.",
      },
      {
        title: "Orologi con diamanti",
        description:
          "Diamanti eccezionali trasformano i segnatempo in veri gioielli.",
      },
      {
        title: "Orologi su misura",
        description:
          "Orologi personali creati intorno alla vostra visione, ai materiali e ai dettagli.",
      },
    ],

    craft: {
      eyebrow: "Il carattere del tempo",
      title:
        "Un orologio raffinato è definito da molto più di ciò che accade sotto il quadrante",
      description:
        "Proporzioni, materiali, finiture e sensazione al polso sono importanti quanto il meccanismo. L'orologio giusto diventa personale con il tempo.",
      closingText: "Il tempo misura il momento.",
      closingAccent: "Il carattere gli dà significato.",
      points: [
        {
          title: "Design",
          description:
            "Le proporzioni della cassa, l'architettura del quadrante e i dettagli determinano il carattere di un orologio prima ancora che venga indossato.",
        },
        {
          title: "Materiali",
          description:
            "Acciaio, oro, pietre preziose, pelle e materiali tecnici moderni conferiscono a ogni orologio una presenza distinta.",
        },
        {
          title: "Precisione",
          description:
            "Nel cuore di ogni orologio si incontrano ingegneria, affidabilità e ritmo del tempo.",
        },
        {
          title: "Personalizzazione",
          description:
            "Incastonatura, materiali, colori e dettagli individuali possono trasformare un orologio in qualcosa di profondamente personale.",
        },
      ],
    },

    cta: {
      title: "L'orologio giusto si scopre al polso",
      sub:
        "Scoprite gli orologi LIDYA durante una visita privata e trovate proporzioni, materiali e dettagli che sentite davvero vostri.",
    },
  },

  es: {
    categoriesEyebrow: "El mundo de los relojes",
    categoriesTitle: "Un reloj para cada",
    categoriesAccent: "momento y carácter.",
    categoriesDescription:
      "Desde la elegancia atemporal y la precisión deportiva hasta el oro, los brillantes y los diamantes — descubra relojes seleccionados y creados en torno al estilo personal.",
    discover: "Descubrir",
    since: "LIDYA · DESDE 1989",

    categories: [
      {
        title: "Relojes para hombre",
        description:
          "Proporciones firmes, detalles refinados y carácter duradero.",
      },
      {
        title: "Relojes para mujer",
        description:
          "Relojes elegantes donde la joyería y la relojería se encuentran.",
      },
      {
        title: "Relojes infantiles",
        description:
          "Relojes pensados, divertidos y resistentes para los más jóvenes.",
      },
      {
        title: "Relojes de oro",
        description:
          "Metal precioso, presencia atemporal y la calidez inconfundible del oro.",
      },
      {
        title: "Relojes deportivos",
        description:
          "Diseño dinámico, funcionalidad y rendimiento diario.",
      },
      {
        title: "Relojes con brillantes",
        description:
          "Las piedras talla brillante aportan luz y movimiento a la muñeca.",
      },
      {
        title: "Relojes con diamantes",
        description:
          "Diamantes excepcionales transforman los relojes en auténticas joyas.",
      },
      {
        title: "Relojes a medida",
        description:
          "Relojes personales creados en torno a su visión, materiales y detalles.",
      },
    ],

    craft: {
      eyebrow: "El carácter del tiempo",
      title:
        "Un gran reloj se define por mucho más que lo que sucede bajo la esfera",
      description:
        "Las proporciones, los materiales, los acabados y la sensación en la muñeca son tan importantes como el mecanismo. El reloj adecuado se vuelve personal con el tiempo.",
      closingText: "El tiempo mide el momento.",
      closingAccent: "El carácter le da significado.",
      points: [
        {
          title: "Diseño",
          description:
            "Las proporciones de la caja, la arquitectura de la esfera y los detalles determinan el carácter de un reloj incluso antes de llevarlo puesto.",
        },
        {
          title: "Materiales",
          description:
            "Acero, oro, piedras preciosas, cuero y materiales técnicos modernos aportan a cada reloj una presencia propia.",
        },
        {
          title: "Precisión",
          description:
            "En el corazón de cada reloj se encuentran la ingeniería, la fiabilidad y el ritmo del tiempo.",
        },
        {
          title: "Personalización",
          description:
            "El engaste de piedras, los materiales, los colores y los detalles individuales pueden transformar un reloj en algo profundamente personal.",
        },
      ],
    },

    cta: {
      title: "El reloj adecuado se descubre en la muñeca",
      sub:
        "Descubra los relojes LIDYA durante una visita privada y encuentre las proporciones, los materiales y los detalles que mejor se adapten a usted.",
    },
  },
};

const WATCH_CATEGORIES = [
  {
    image: "/images/watches/men-category/men-hero.png",
    key: "mens",
    href: "/watches/mens",
  },
  {
    image: "/images/watches/woman-category/woman-hero.png",
    key: "womens",
    href: "/watches/womens",
  },
  {
    image: "/images/watches/children-category/children-hero.png",
    key: "childrens",
    href: "/watches/childrens",
  },
  {
    image: "/images/watches/gold-category/gold-hero.png",
    key: "gold",
    href: "/watches/gold",
  },
  {
    image: "/images/watches/sport-category/sport-man/men-hero1.png",
    key: "sport",
    href: "/watches/sport",
  },
  {
    image:
      "/images/watches/brilliant-category/brilliant-watch-hero.png",
    key: "brilliants",
    href: "/watches/brilliants",
  },
  {
    image:
      "/images/watches/diamond-category/diamond-watch-hero.png",
    key: "diamonds",
    href: "/watches/diamonds",
  },
  {
    image:
      "/images/watches/bespoke-category/bespoke-watch1.png",
    key: "bespoke",
    href: "/watches/bespoke",
  },
];

export default function WatchesContent() {
  const { locale } = useLanguage();

  const copy = WATCHES_COPY[locale] ?? WATCHES_COPY.en;

  return (
    <>
      <Header />

      <main>
        <WatchesCinematicHero />

        <section className="bg-[#F7F3EB] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <div className="mx-auto max-w-[820px] text-center">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[#A98242] md:text-[0.64rem]">
                {copy.categoriesEyebrow}
              </span>

              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-0.03em] text-[#1B0B20] md:text-6xl">
                {copy.categoriesTitle}{" "}
                <span className="italic text-[#A98242]">
                  {copy.categoriesAccent}
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-[680px] text-sm leading-7 text-[#645E5A] md:text-base">
                {copy.categoriesDescription}
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 lg:gap-7">
              {WATCH_CATEGORIES.map((item, index) => {
                const category =
                  copy.categories[index] ??
                  WATCHES_COPY.en.categories[index];

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="
                      group
                      relative
                      block
                      min-h-[420px]
                      overflow-hidden
                      bg-[#1B0B20]
                      md:min-h-[520px]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="
                        object-cover
                        transition-transform
                        duration-[1600ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.045]
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#160919]/90 via-[#160919]/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                      <div className="mb-4 h-px w-10 bg-[#C6A15B]" />

                      <h3 className="font-display text-3xl text-white md:text-4xl">
                        {category.title}
                      </h3>

                      <p className="mt-3 max-w-[470px] text-sm leading-6 text-white/70 md:text-[0.95rem] md:leading-7">
                        {category.description}
                      </p>

                      <div className="mt-5 flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#D8B96B]">
                        <span>{copy.discover}</span>

                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CategoryCraft
          eyebrow={copy.craft.eyebrow}
          title={copy.craft.title}
          description={copy.craft.description}
          since={copy.since}
          closingText={copy.craft.closingText}
          closingAccent={copy.craft.closingAccent}
          points={copy.craft.points}
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