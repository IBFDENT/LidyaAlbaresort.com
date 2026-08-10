"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryCTA from "@/components/category/CategoryCTA";
import PlaceholderImage from "@/components/category/PlaceholderImage";

import {
  BlossomIcon,
  SunIcon,
  LeafIcon,
  SnowflakeIcon,
} from "@/components/category/icons";

import { useLanguage } from "@/components/LanguageProvider";
import { localized } from "@/lib/content";
import { SEASONS } from "@/lib/design";
import type { Locale } from "@/lib/i18n";

const SEASON_ICONS = {
  spring: BlossomIcon,
  summer: SunIcon,
  autumn: LeafIcon,
  winter: SnowflakeIcon,
} as const;

const SEASON_NUMBERS = {
  spring: "01",
  summer: "02",
  autumn: "03",
  winter: "04",
} as const;

type DesignCopy = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    since: string;
    statementEyebrow: string;
    statementBefore: string;
    statementAccent: string;
    imageAlt: string;
  };
  seasons: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    itemLabel: string;
    handmade: string;
    closingBefore: string;
    closingAccent: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    points: {
      title: string;
      text: string;
    }[];
  };
  cta: {
    title: string;
    sub: string;
  };
};

const DESIGN_COPY: Record<Locale, DesignCopy> = {
  en: {
    hero: {
      eyebrow: "Design",
      title: "Designed to change with the season",
      lead:
        "Every season brings a new LIDYA collection — designed and handcrafted in-house with its own mood, character and point of view.",
      since: "LIDYA · SINCE 1989",
      statementEyebrow: "Designed in-house",
      statementBefore: "One philosophy.",
      statementAccent: "Four seasonal expressions.",
      imageAlt:
        "LIDYA jewellery collection arranged on natural stone with rings, earrings, bracelets and necklaces",
    },
    seasons: {
      eyebrow: "Four Seasons",
      title: "Designed for the",
      titleAccent: "rhythm of the year.",
      description:
        "Each season brings a new mood, new details and a different expression of the same LIDYA craftsmanship.",
      itemLabel: "Seasonal Collection",
      handmade: "Designed & handcrafted by LIDYA",
      closingBefore: "Design changes with the season.",
      closingAccent: "Craftsmanship does not.",
    },
    philosophy: {
      eyebrow: "Our Design Philosophy",
      title: "Created to feel individual,",
      titleAccent: "never ordinary.",
      description:
        "Every LIDYA design begins with proportion, character and the desire to create jewellery that feels personal from the first moment it is worn.",
      points: [
        {
          title: "Original",
          text:
            "Designed in-house with its own identity and point of view.",
        },
        {
          title: "Handcrafted",
          text:
            "Created with attention to proportion, detail and finish.",
        },
        {
          title: "Personal",
          text:
            "Jewellery designed to become part of the person who wears it.",
        },
      ],
    },
    cta: {
      title: "Discover the latest LIDYA designs in person",
      sub:
        "Visit us privately and explore the seasonal collections, materials and details that make every LIDYA design individual.",
    },
  },

  de: {
    hero: {
      eyebrow: "Design",
      title: "Design, das sich mit den Jahreszeiten verändert",
      lead:
        "Jede Saison bringt eine neue LIDYA Kollektion — im eigenen Haus entworfen und handgefertigt, mit eigener Stimmung, eigenem Charakter und eigener Handschrift.",
      since: "LIDYA · SEIT 1989",
      statementEyebrow: "Im eigenen Haus entworfen",
      statementBefore: "Eine Philosophie.",
      statementAccent: "Vier saisonale Ausdrucksformen.",
      imageAlt:
        "LIDYA Schmuckkollektion mit Ringen, Ohrringen, Armbändern und Halsketten auf Naturstein",
    },
    seasons: {
      eyebrow: "Vier Jahreszeiten",
      title: "Entworfen für den",
      titleAccent: "Rhythmus des Jahres.",
      description:
        "Jede Saison bringt eine neue Stimmung, neue Details und einen anderen Ausdruck derselben LIDYA Handwerkskunst.",
      itemLabel: "Saisonale Kollektion",
      handmade: "Entworfen & handgefertigt von LIDYA",
      closingBefore: "Design verändert sich mit der Saison.",
      closingAccent: "Handwerkskunst nicht.",
    },
    philosophy: {
      eyebrow: "Unsere Designphilosophie",
      title: "Geschaffen, um individuell zu wirken,",
      titleAccent: "niemals gewöhnlich.",
      description:
        "Jedes LIDYA Design beginnt mit Proportion, Charakter und dem Wunsch, Schmuck zu schaffen, der sich vom ersten Moment des Tragens an persönlich anfühlt.",
      points: [
        {
          title: "Original",
          text:
            "Im eigenen Haus entworfen, mit eigener Identität und eigener Haltung.",
        },
        {
          title: "Handgefertigt",
          text:
            "Mit besonderer Aufmerksamkeit für Proportion, Detail und Verarbeitung gefertigt.",
        },
        {
          title: "Persönlich",
          text:
            "Schmuck, der dazu geschaffen ist, Teil der Persönlichkeit seines Trägers zu werden.",
        },
      ],
    },
    cta: {
      title: "Entdecken Sie die neuesten LIDYA Designs persönlich",
      sub:
        "Besuchen Sie uns zu einem privaten Termin und entdecken Sie saisonale Kollektionen, Materialien und Details, die jedes LIDYA Design einzigartig machen.",
    },
  },

  tr: {
    hero: {
      eyebrow: "Tasarım",
      title: "Mevsimlerle birlikte değişen tasarım",
      lead:
        "Her sezon yeni bir LIDYA koleksiyonu getirir — kendi bünyemizde tasarlanır ve el işçiliğiyle hazırlanır; her biri kendi ruhuna, karakterine ve bakış açısına sahiptir.",
      since: "LIDYA · 1989'DAN BERİ",
      statementEyebrow: "Kendi bünyemizde tasarlandı",
      statementBefore: "Tek bir felsefe.",
      statementAccent: "Dört mevsimsel ifade.",
      imageAlt:
        "Doğal taş üzerinde yüzük, küpe, bileklik ve kolyelerden oluşan LIDYA mücevher koleksiyonu",
    },
    seasons: {
      eyebrow: "Dört Mevsim",
      title: "Yılın",
      titleAccent: "ritmine göre tasarlandı.",
      description:
        "Her mevsim yeni bir ruh, yeni detaylar ve aynı LIDYA işçiliğinin farklı bir ifadesini getirir.",
      itemLabel: "Mevsim Koleksiyonu",
      handmade:
        "LIDYA tarafından tasarlandı & el işçiliğiyle üretildi",
      closingBefore: "Tasarım mevsimlerle değişir.",
      closingAccent: "İşçilik değişmez.",
    },
    philosophy: {
      eyebrow: "Tasarım Felsefemiz",
      title: "Kişisel hissettirmek için yaratıldı,",
      titleAccent: "asla sıradan değil.",
      description:
        "Her LIDYA tasarımı; oran, karakter ve ilk takıldığı andan itibaren kişisel hissettiren mücevherler yaratma isteğiyle başlar.",
      points: [
        {
          title: "Özgün",
          text:
            "Kendi kimliği ve bakış açısıyla LIDYA bünyesinde tasarlanır.",
        },
        {
          title: "El İşçiliği",
          text:
            "Oran, detay ve bitiş kalitesine özen gösterilerek hazırlanır.",
        },
        {
          title: "Kişisel",
          text:
            "Onu takan kişinin bir parçası olmak üzere tasarlanan mücevherler.",
        },
      ],
    },
    cta: {
      title: "En yeni LIDYA tasarımlarını yakından keşfedin",
      sub:
        "Özel bir randevuyla bizi ziyaret edin ve her LIDYA tasarımını özgün kılan mevsimsel koleksiyonları, malzemeleri ve detayları keşfedin.",
    },
  },

  sk: {
    hero: {
      eyebrow: "Dizajn",
      title: "Dizajn, ktorý sa mení s ročnými obdobiami",
      lead:
        "Každá sezóna prináša novú kolekciu LIDYA — navrhnutú a ručne vyrobenú u nás, s vlastnou náladou, charakterom a osobitým pohľadom.",
      since: "LIDYA · OD ROKU 1989",
      statementEyebrow: "Navrhnuté u nás",
      statementBefore: "Jedna filozofia.",
      statementAccent: "Štyri sezónne podoby.",
      imageAlt:
        "Kolekcia šperkov LIDYA s prsteňmi, náušnicami, náramkami a náhrdelníkmi na prírodnom kameni",
    },
    seasons: {
      eyebrow: "Štyri ročné obdobia",
      title: "Navrhnuté pre",
      titleAccent: "rytmus roka.",
      description:
        "Každé ročné obdobie prináša novú náladu, nové detaily a inú podobu tej istej remeselnej kvality LIDYA.",
      itemLabel: "Sezónna kolekcia",
      handmade: "Navrhnuté & ručne vyrobené LIDYA",
      closingBefore: "Dizajn sa mení s ročnými obdobiami.",
      closingAccent: "Remeselnosť zostáva.",
    },
    philosophy: {
      eyebrow: "Naša filozofia dizajnu",
      title: "Vytvorené tak, aby pôsobilo osobito,",
      titleAccent: "nikdy obyčajne.",
      description:
        "Každý dizajn LIDYA začína proporciou, charakterom a túžbou vytvárať šperky, ktoré pôsobia osobne od prvého momentu, keď si ich človek nasadí.",
      points: [
        {
          title: "Originálne",
          text:
            "Navrhnuté u nás s vlastnou identitou a osobitým pohľadom.",
        },
        {
          title: "Ručne vyrobené",
          text:
            "Vytvorené s dôrazom na proporcie, detail a precízne spracovanie.",
        },
        {
          title: "Osobné",
          text:
            "Šperky navrhnuté tak, aby sa stali súčasťou človeka, ktorý ich nosí.",
        },
      ],
    },
    cta: {
      title: "Objavte najnovšie dizajny LIDYA osobne",
      sub:
        "Navštívte nás počas súkromného termínu a objavte sezónne kolekcie, materiály a detaily, ktoré robia každý dizajn LIDYA jedinečným.",
    },
  },

  cs: {
    hero: {
      eyebrow: "Design",
      title: "Design, který se mění s ročními obdobími",
      lead:
        "Každá sezóna přináší novou kolekci LIDYA — navrženou a ručně vyrobenou u nás, s vlastní náladou, charakterem a osobitým pohledem.",
      since: "LIDYA · OD ROKU 1989",
      statementEyebrow: "Navrženo u nás",
      statementBefore: "Jedna filozofie.",
      statementAccent: "Čtyři sezónní podoby.",
      imageAlt:
        "Kolekce šperků LIDYA s prsteny, náušnicemi, náramky a náhrdelníky na přírodním kameni",
    },
    seasons: {
      eyebrow: "Čtyři roční období",
      title: "Navrženo pro",
      titleAccent: "rytmus roku.",
      description:
        "Každé roční období přináší novou náladu, nové detaily a jinou podobu stejné řemeslné kvality LIDYA.",
      itemLabel: "Sezónní kolekce",
      handmade: "Navrženo & ručně vyrobeno LIDYA",
      closingBefore: "Design se mění s ročními obdobími.",
      closingAccent: "Řemeslo zůstává.",
    },
    philosophy: {
      eyebrow: "Naše filozofie designu",
      title: "Vytvořeno tak, aby působilo osobitě,",
      titleAccent: "nikdy obyčejně.",
      description:
        "Každý design LIDYA začíná proporcí, charakterem a touhou vytvářet šperky, které působí osobně od prvního okamžiku, kdy si je člověk nasadí.",
      points: [
        {
          title: "Originální",
          text:
            "Navrženo u nás s vlastní identitou a osobitým pohledem.",
        },
        {
          title: "Ručně vyrobené",
          text:
            "Vytvořeno s důrazem na proporce, detail a precizní zpracování.",
        },
        {
          title: "Osobní",
          text:
            "Šperky navržené tak, aby se staly součástí člověka, který je nosí.",
        },
      ],
    },
    cta: {
      title: "Objevte nejnovější designy LIDYA osobně",
      sub:
        "Navštivte nás během soukromého termínu a objevte sezónní kolekce, materiály a detaily, které dělají každý design LIDYA jedinečným.",
    },
  },

  hu: {
    hero: {
      eyebrow: "Design",
      title: "Design, amely az évszakokkal változik",
      lead:
        "Minden évszak új LIDYA kollekciót hoz — saját műhelyünkben tervezve és kézzel készítve, önálló hangulattal, karakterrel és látásmóddal.",
      since: "LIDYA · 1989 ÓTA",
      statementEyebrow: "Házon belül tervezve",
      statementBefore: "Egy filozófia.",
      statementAccent: "Négy évszakos megjelenés.",
      imageAlt:
        "LIDYA ékszerkollekció gyűrűkkel, fülbevalókkal, karkötőkkel és nyakláncokkal természetes kövön",
    },
    seasons: {
      eyebrow: "Négy évszak",
      title: "Az év",
      titleAccent: "ritmusára tervezve.",
      description:
        "Minden évszak új hangulatot, új részleteket és ugyanazon LIDYA kézművesség másfajta kifejezését hozza.",
      itemLabel: "Szezonális kollekció",
      handmade: "A LIDYA tervezi & kézzel készíti",
      closingBefore: "A design változik az évszakokkal.",
      closingAccent: "A kézművesség nem.",
    },
    philosophy: {
      eyebrow: "Designfilozófiánk",
      title: "Egyedinek alkotva,",
      titleAccent: "soha nem hétköznapinak.",
      description:
        "Minden LIDYA design az arányokkal, a karakterrel és azzal a szándékkal kezdődik, hogy az ékszer már az első viselés pillanatától személyesnek érződjön.",
      points: [
        {
          title: "Eredeti",
          text:
            "Házon belül tervezve, saját identitással és önálló látásmóddal.",
        },
        {
          title: "Kézzel készített",
          text:
            "Az arányokra, részletekre és kidolgozásra fordított figyelemmel készül.",
        },
        {
          title: "Személyes",
          text:
            "Olyan ékszer, amely annak az embernek a részévé válik, aki viseli.",
        },
      ],
    },
    cta: {
      title: "Fedezze fel személyesen a legújabb LIDYA designokat",
      sub:
        "Látogasson el hozzánk privát időpontban, és fedezze fel a szezonális kollekciókat, anyagokat és részleteket, amelyek minden LIDYA designt egyedivé tesznek.",
    },
  },

  pl: {
    hero: {
      eyebrow: "Design",
      title: "Design, który zmienia się wraz z porami roku",
      lead:
        "Każdy sezon przynosi nową kolekcję LIDYA — projektowaną i wykonywaną ręcznie przez nas, z własnym nastrojem, charakterem i osobistym punktem widzenia.",
      since: "LIDYA · OD 1989 ROKU",
      statementEyebrow: "Projektowane przez LIDYA",
      statementBefore: "Jedna filozofia.",
      statementAccent: "Cztery sezonowe odsłony.",
      imageAlt:
        "Kolekcja biżuterii LIDYA z pierścionkami, kolczykami, bransoletkami i naszyjnikami na naturalnym kamieniu",
    },
    seasons: {
      eyebrow: "Cztery pory roku",
      title: "Projektowane zgodnie z",
      titleAccent: "rytmem roku.",
      description:
        "Każda pora roku przynosi nowy nastrój, nowe detale i inną odsłonę tego samego kunsztu LIDYA.",
      itemLabel: "Kolekcja sezonowa",
      handmade:
        "Projektowane & wykonywane ręcznie przez LIDYA",
      closingBefore: "Design zmienia się wraz z porami roku.",
      closingAccent: "Rzemiosło pozostaje.",
    },
    philosophy: {
      eyebrow: "Nasza filozofia designu",
      title: "Tworzone tak, aby było indywidualne,",
      titleAccent: "nigdy zwyczajne.",
      description:
        "Każdy projekt LIDYA zaczyna się od proporcji, charakteru i pragnienia tworzenia biżuterii, która od pierwszej chwili noszenia staje się osobista.",
      points: [
        {
          title: "Oryginalne",
          text:
            "Projektowane przez nas z własną tożsamością i punktem widzenia.",
        },
        {
          title: "Ręcznie wykonane",
          text:
            "Tworzone z dbałością o proporcje, detal i wykończenie.",
        },
        {
          title: "Osobiste",
          text:
            "Biżuteria zaprojektowana tak, aby stała się częścią osoby, która ją nosi.",
        },
      ],
    },
    cta: {
      title: "Odkryj najnowsze projekty LIDYA osobiście",
      sub:
        "Odwiedź nas podczas prywatnego spotkania i odkryj sezonowe kolekcje, materiały i detale, które nadają każdemu projektowi LIDYA indywidualny charakter.",
    },
  },

  ru: {
    hero: {
      eyebrow: "Дизайн",
      title: "Дизайн, который меняется вместе с сезонами",
      lead:
        "Каждый сезон приносит новую коллекцию LIDYA — разработанную и созданную вручную в нашей мастерской, со своим настроением, характером и индивидуальным взглядом.",
      since: "LIDYA · С 1989 ГОДА",
      statementEyebrow: "Создано в LIDYA",
      statementBefore: "Одна философия.",
      statementAccent: "Четыре сезонных выражения.",
      imageAlt:
        "Коллекция украшений LIDYA с кольцами, серьгами, браслетами и ожерельями на натуральном камне",
    },
    seasons: {
      eyebrow: "Четыре сезона",
      title: "Создано в",
      titleAccent: "ритме года.",
      description:
        "Каждый сезон приносит новое настроение, новые детали и новое выражение неизменного мастерства LIDYA.",
      itemLabel: "Сезонная коллекция",
      handmade: "Разработано и создано вручную LIDYA",
      closingBefore: "Дизайн меняется вместе с сезонами.",
      closingAccent: "Мастерство остаётся неизменным.",
    },
    philosophy: {
      eyebrow: "Наша философия дизайна",
      title: "Создано, чтобы быть индивидуальным,",
      titleAccent: "никогда не обычным.",
      description:
        "Каждый дизайн LIDYA начинается с пропорций, характера и желания создать украшение, которое ощущается личным с первого момента.",
      points: [
        {
          title: "Оригинальность",
          text:
            "Разработано внутри LIDYA с собственной идентичностью и характером.",
        },
        {
          title: "Ручная работа",
          text:
            "Создано с вниманием к пропорциям, деталям и качеству отделки.",
        },
        {
          title: "Личное",
          text:
            "Украшение, созданное для того, чтобы стать частью человека, который его носит.",
        },
      ],
    },
    cta: {
      title: "Откройте для себя новые дизайны LIDYA лично",
      sub:
        "Посетите нас по частной записи и познакомьтесь с сезонными коллекциями, материалами и деталями, которые делают каждый дизайн LIDYA индивидуальным.",
    },
  },

  nl: {
    hero: {
      eyebrow: "Design",
      title: "Design dat met de seizoenen verandert",
      lead:
        "Elk seizoen brengt een nieuwe LIDYA-collectie — in eigen huis ontworpen en met de hand vervaardigd, met een eigen sfeer, karakter en visie.",
      since: "LIDYA · SINDS 1989",
      statementEyebrow: "In eigen huis ontworpen",
      statementBefore: "Eén filosofie.",
      statementAccent: "Vier seizoensgebonden expressies.",
      imageAlt:
        "LIDYA-sieradencollectie met ringen, oorbellen, armbanden en kettingen op natuursteen",
    },
    seasons: {
      eyebrow: "Vier seizoenen",
      title: "Ontworpen voor het",
      titleAccent: "ritme van het jaar.",
      description:
        "Elk seizoen brengt een nieuwe sfeer, nieuwe details en een andere uitdrukking van hetzelfde LIDYA-vakmanschap.",
      itemLabel: "Seizoenscollectie",
      handmade: "Ontworpen & handgemaakt door LIDYA",
      closingBefore: "Design verandert met het seizoen.",
      closingAccent: "Vakmanschap niet.",
    },
    philosophy: {
      eyebrow: "Onze designfilosofie",
      title: "Gemaakt om persoonlijk te voelen,",
      titleAccent: "nooit gewoon.",
      description:
        "Elk LIDYA-design begint met verhouding, karakter en de wens om sieraden te creëren die vanaf het eerste moment persoonlijk aanvoelen.",
      points: [
        {
          title: "Origineel",
          text:
            "In eigen huis ontworpen met een eigen identiteit en visie.",
        },
        {
          title: "Handgemaakt",
          text:
            "Gemaakt met aandacht voor verhouding, detail en afwerking.",
        },
        {
          title: "Persoonlijk",
          text:
            "Sieraden ontworpen om onderdeel te worden van de persoon die ze draagt.",
        },
      ],
    },
    cta: {
      title: "Ontdek de nieuwste LIDYA-designs persoonlijk",
      sub:
        "Bezoek ons tijdens een privéafspraak en ontdek de seizoenscollecties, materialen en details die elk LIDYA-design uniek maken.",
    },
  },

  da: {
    hero: {
      eyebrow: "Design",
      title: "Design, der følger årstidernes skiften",
      lead:
        "Hver sæson bringer en ny LIDYA-kollektion — designet og håndlavet i vores eget værksted med sin egen stemning, karakter og identitet.",
      since: "LIDYA · SIDEN 1989",
      statementEyebrow: "Designet hos LIDYA",
      statementBefore: "Én filosofi.",
      statementAccent: "Fire sæsonbestemte udtryk.",
      imageAlt:
        "LIDYA-smykkekollektion med ringe, øreringe, armbånd og halskæder arrangeret på natursten",
    },
    seasons: {
      eyebrow: "Fire årstider",
      title: "Designet til",
      titleAccent: "årets rytme.",
      description:
        "Hver årstid bringer en ny stemning, nye detaljer og et nyt udtryk for det samme LIDYA-håndværk.",
      itemLabel: "Sæsonkollektion",
      handmade: "Designet & håndlavet af LIDYA",
      closingBefore: "Design ændrer sig med årstiderne.",
      closingAccent: "Håndværket gør ikke.",
    },
    philosophy: {
      eyebrow: "Vores designfilosofi",
      title: "Skabt til at føles individuelt,",
      titleAccent: "aldrig almindeligt.",
      description:
        "Hvert LIDYA-design begynder med proportioner, karakter og ønsket om at skabe smykker, der føles personlige fra det øjeblik, de bæres.",
      points: [
        {
          title: "Originalt",
          text:
            "Designet hos LIDYA med sin egen identitet og sit eget udtryk.",
        },
        {
          title: "Håndlavet",
          text:
            "Skabt med fokus på proportioner, detaljer og finish.",
        },
        {
          title: "Personligt",
          text:
            "Smykker designet til at blive en del af personen, der bærer dem.",
        },
      ],
    },
    cta: {
      title: "Oplev de nyeste LIDYA-designs personligt",
      sub:
        "Besøg os ved en privat aftale og oplev sæsonkollektionerne, materialerne og detaljerne, der gør hvert LIDYA-design individuelt.",
    },
  },

  fi: {
    hero: {
      eyebrow: "Design",
      title: "Vuodenaikojen mukana muuttuva design",
      lead:
        "Jokainen vuodenaika tuo uuden LIDYA-malliston — omassa työpajassamme suunnitellun ja käsintehdyn, omalla tunnelmallaan, luonteellaan ja näkemyksellään.",
      since: "LIDYA · VUODESTA 1989",
      statementEyebrow: "Suunniteltu LIDYAlla",
      statementBefore: "Yksi filosofia.",
      statementAccent: "Neljä vuodenaikojen ilmaisua.",
      imageAlt:
        "LIDYA-korumallisto, jossa on sormuksia, korvakoruja, rannekoruja ja kaulakoruja luonnonkivellä",
    },
    seasons: {
      eyebrow: "Neljä vuodenaikaa",
      title: "Suunniteltu vuoden",
      titleAccent: "rytmiin.",
      description:
        "Jokainen vuodenaika tuo uuden tunnelman, uusia yksityiskohtia ja uuden ilmaisun samasta LIDYA-käsityötaidosta.",
      itemLabel: "Sesonkimallisto",
      handmade: "LIDYAn suunnittelema & käsintekemä",
      closingBefore: "Design muuttuu vuodenaikojen mukana.",
      closingAccent: "Käsityötaito ei.",
    },
    philosophy: {
      eyebrow: "Designfilosofiamme",
      title: "Luotu tuntumaan yksilölliseltä,",
      titleAccent: "ei koskaan tavalliselta.",
      description:
        "Jokainen LIDYA-design alkaa mittasuhteista, luonteesta ja halusta luoda koruja, jotka tuntuvat henkilökohtaisilta heti ensimmäisestä käyttökerrasta.",
      points: [
        {
          title: "Omaperäinen",
          text:
            "Suunniteltu LIDYAlla omalla identiteetillä ja näkemyksellä.",
        },
        {
          title: "Käsintehty",
          text:
            "Valmistettu huomioiden mittasuhteet, yksityiskohdat ja viimeistely.",
        },
        {
          title: "Henkilökohtainen",
          text:
            "Koru, joka on suunniteltu osaksi sitä ihmistä, joka sitä kantaa.",
        },
      ],
    },
    cta: {
      title: "Tutustu uusimpiin LIDYA-designeihin henkilökohtaisesti",
      sub:
        "Varaa yksityinen tapaaminen ja tutustu sesonkimallistoihin, materiaaleihin ja yksityiskohtiin, jotka tekevät jokaisesta LIDYA-designista yksilöllisen.",
    },
  },

  sv: {
    hero: {
      eyebrow: "Design",
      title: "Design som förändras med årstiderna",
      lead:
        "Varje säsong kommer med en ny LIDYA-kollektion — designad och handgjord i vår egen verkstad, med sin egen känsla, karaktär och identitet.",
      since: "LIDYA · SEDAN 1989",
      statementEyebrow: "Designad hos LIDYA",
      statementBefore: "En filosofi.",
      statementAccent: "Fyra säsongsuttryck.",
      imageAlt:
        "LIDYA-smyckeskollektion med ringar, örhängen, armband och halsband arrangerade på natursten",
    },
    seasons: {
      eyebrow: "Fyra årstider",
      title: "Designad för",
      titleAccent: "årets rytm.",
      description:
        "Varje årstid ger en ny känsla, nya detaljer och ett nytt uttryck för samma LIDYA-hantverk.",
      itemLabel: "Säsongskollektion",
      handmade: "Designad & handgjord av LIDYA",
      closingBefore: "Design förändras med årstiderna.",
      closingAccent: "Hantverket gör det inte.",
    },
    philosophy: {
      eyebrow: "Vår designfilosofi",
      title: "Skapad för att kännas personlig,",
      titleAccent: "aldrig vanlig.",
      description:
        "Varje LIDYA-design börjar med proportioner, karaktär och viljan att skapa smycken som känns personliga från första ögonblicket.",
      points: [
        {
          title: "Original",
          text:
            "Designad hos LIDYA med en egen identitet och ett eget uttryck.",
        },
        {
          title: "Handgjord",
          text:
            "Skapad med omsorg om proportioner, detaljer och finish.",
        },
        {
          title: "Personlig",
          text:
            "Smycken designade för att bli en del av personen som bär dem.",
        },
      ],
    },
    cta: {
      title: "Upptäck de senaste LIDYA-designerna personligen",
      sub:
        "Besök oss vid ett privat möte och upptäck säsongskollektionerna, materialen och detaljerna som gör varje LIDYA-design unik.",
    },
  },

  fr: {
    hero: {
      eyebrow: "Design",
      title: "Un design qui évolue avec les saisons",
      lead:
        "Chaque saison apporte une nouvelle collection LIDYA — conçue et façonnée à la main dans notre propre atelier, avec son humeur, son caractère et son identité.",
      since: "LIDYA · DEPUIS 1989",
      statementEyebrow: "Conçu chez LIDYA",
      statementBefore: "Une philosophie.",
      statementAccent: "Quatre expressions saisonnières.",
      imageAlt:
        "Collection de bijoux LIDYA composée de bagues, boucles d’oreilles, bracelets et colliers sur pierre naturelle",
    },
    seasons: {
      eyebrow: "Quatre saisons",
      title: "Conçu au",
      titleAccent: "rythme de l’année.",
      description:
        "Chaque saison apporte une nouvelle atmosphère, de nouveaux détails et une nouvelle expression du même savoir-faire LIDYA.",
      itemLabel: "Collection saisonnière",
      handmade: "Conçu & façonné à la main par LIDYA",
      closingBefore: "Le design change avec les saisons.",
      closingAccent: "Le savoir-faire reste.",
    },
    philosophy: {
      eyebrow: "Notre philosophie du design",
      title: "Créé pour être individuel,",
      titleAccent: "jamais ordinaire.",
      description:
        "Chaque design LIDYA commence par les proportions, le caractère et l’envie de créer un bijou qui semble personnel dès le premier instant.",
      points: [
        {
          title: "Original",
          text:
            "Conçu chez LIDYA avec sa propre identité et sa propre vision.",
        },
        {
          title: "Fait main",
          text:
            "Créé avec une attention particulière aux proportions, aux détails et à la finition.",
        },
        {
          title: "Personnel",
          text:
            "Un bijou conçu pour devenir une partie de la personne qui le porte.",
        },
      ],
    },
    cta: {
      title: "Découvrez personnellement les dernières créations LIDYA",
      sub:
        "Rendez-nous visite sur rendez-vous privé et découvrez les collections saisonnières, les matériaux et les détails qui rendent chaque création LIDYA unique.",
    },
  },

  it: {
    hero: {
      eyebrow: "Design",
      title: "Un design che cambia con le stagioni",
      lead:
        "Ogni stagione porta una nuova collezione LIDYA — progettata e realizzata a mano nel nostro laboratorio, con un’atmosfera, un carattere e un’identità propri.",
      since: "LIDYA · DAL 1989",
      statementEyebrow: "Progettato da LIDYA",
      statementBefore: "Una filosofia.",
      statementAccent: "Quattro espressioni stagionali.",
      imageAlt:
        "Collezione di gioielli LIDYA con anelli, orecchini, bracciali e collane su pietra naturale",
    },
    seasons: {
      eyebrow: "Quattro stagioni",
      title: "Progettato per il",
      titleAccent: "ritmo dell’anno.",
      description:
        "Ogni stagione porta una nuova atmosfera, nuovi dettagli e una diversa espressione della stessa artigianalità LIDYA.",
      itemLabel: "Collezione stagionale",
      handmade: "Progettato & realizzato a mano da LIDYA",
      closingBefore: "Il design cambia con le stagioni.",
      closingAccent: "L’artigianalità no.",
    },
    philosophy: {
      eyebrow: "La nostra filosofia del design",
      title: "Creato per essere personale,",
      titleAccent: "mai ordinario.",
      description:
        "Ogni design LIDYA nasce dalle proporzioni, dal carattere e dal desiderio di creare gioielli che sembrino personali fin dal primo momento.",
      points: [
        {
          title: "Originale",
          text:
            "Progettato da LIDYA con una propria identità e una propria visione.",
        },
        {
          title: "Fatto a mano",
          text:
            "Creato con attenzione alle proporzioni, ai dettagli e alla finitura.",
        },
        {
          title: "Personale",
          text:
            "Un gioiello progettato per diventare parte della persona che lo indossa.",
        },
      ],
    },
    cta: {
      title: "Scoprite personalmente i più recenti design LIDYA",
      sub:
        "Visitateci con un appuntamento privato e scoprite le collezioni stagionali, i materiali e i dettagli che rendono ogni design LIDYA unico.",
    },
  },

  es: {
    hero: {
      eyebrow: "Diseño",
      title: "Diseño que cambia con las estaciones",
      lead:
        "Cada temporada trae una nueva colección LIDYA — diseñada y elaborada a mano en nuestro propio taller, con su propio ambiente, carácter e identidad.",
      since: "LIDYA · DESDE 1989",
      statementEyebrow: "Diseñado por LIDYA",
      statementBefore: "Una filosofía.",
      statementAccent: "Cuatro expresiones estacionales.",
      imageAlt:
        "Colección de joyas LIDYA con anillos, pendientes, pulseras y collares sobre piedra natural",
    },
    seasons: {
      eyebrow: "Cuatro estaciones",
      title: "Diseñado para el",
      titleAccent: "ritmo del año.",
      description:
        "Cada estación trae un nuevo ambiente, nuevos detalles y una expresión diferente de la misma artesanía LIDYA.",
      itemLabel: "Colección de temporada",
      handmade: "Diseñado & hecho a mano por LIDYA",
      closingBefore: "El diseño cambia con las estaciones.",
      closingAccent: "La artesanía no.",
    },
    philosophy: {
      eyebrow: "Nuestra filosofía de diseño",
      title: "Creado para sentirse individual,",
      titleAccent: "nunca ordinario.",
      description:
        "Cada diseño LIDYA comienza con las proporciones, el carácter y el deseo de crear joyas que se sientan personales desde el primer momento.",
      points: [
        {
          title: "Original",
          text:
            "Diseñado por LIDYA con identidad y visión propias.",
        },
        {
          title: "Hecho a mano",
          text:
            "Creado con atención a las proporciones, los detalles y el acabado.",
        },
        {
          title: "Personal",
          text:
            "Joyas diseñadas para convertirse en parte de la persona que las lleva.",
        },
      ],
    },
    cta: {
      title: "Descubra personalmente los últimos diseños LIDYA",
      sub:
        "Visítenos con cita privada y descubra las colecciones de temporada, los materiales y los detalles que hacen único cada diseño LIDYA.",
    },
  },
};

export default function DesignContent() {
  const { locale } = useLanguage();

  const copy =
    DESIGN_COPY[locale] ?? DESIGN_COPY.en;

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44">
          <Image
            src="/images/design/hero-design.png"
            alt={copy.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/88 via-[#F7F3EB]/34 to-transparent" />

          <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-brand-white/16 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center text-gold">
                    <BlossomIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    {copy.hero.eyebrow}
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[980px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.hero.title}
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
                  {copy.hero.lead}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/50">
                    {copy.hero.since}
                  </span>
                </div>
              </div>
            </div>

            {/* HERO STATEMENT */}
            <div className="border-t border-plum-dark/10 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-3">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    {copy.hero.statementEyebrow}
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    {copy.hero.statementBefore}

                    <span style={{ color: "#C8A96A" }}>
                      {" "}
                      {copy.hero.statementAccent}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEASONS */}
        <section className="bg-brand-white py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="mb-14 grid gap-8 border-b border-plum-dark/10 pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-gold">
                  {copy.seasons.eyebrow}
                </span>

                <h2
                  className="mt-6 max-w-[850px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.seasons.title}

                  <span
                    className="block italic"
                    style={{ color: "#C8A96A" }}
                  >
                    {copy.seasons.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-grey md:text-base">
                  {copy.seasons.description}
                </p>
              </div>
            </div>

            <div className="space-y-20 md:space-y-24 lg:space-y-32">
              {SEASONS.map((season, index) => {
                const Icon = SEASON_ICONS[season.id];
                const number = SEASON_NUMBERS[season.id];
                const reverse = index % 2 === 1;

                const seasonName =
                  localized(season.name, locale) ||
                  localized(season.name, "en");

                const seasonDescription =
                  localized(season.description, locale) ||
                  localized(season.description, "en");

                return (
                  <article
                    key={season.id}
                    className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
                  >
                    {/* IMAGE */}
                    <div
                      className={
                        reverse
                          ? "lg:order-2 lg:col-span-7"
                          : "lg:col-span-7"
                      }
                    >
                      <div className="group relative aspect-[5/4] overflow-hidden bg-ivory">
                        {season.image ? (
                          <Image
                            src={season.image}
                            alt={season.imageAlt || seasonName}
                            fill
                            sizes="(min-width: 1024px) 58vw, 100vw"
                            className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                          />
                        ) : (
                          <PlaceholderImage
                            icon={<Icon />}
                            className="h-full w-full"
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/35 via-transparent to-transparent" />

                        <span className="absolute right-6 top-6 text-[0.56rem] font-semibold tracking-[0.22em] text-brand-white/80">
                          {number}
                        </span>

                        <div className="absolute bottom-6 left-6 flex items-center gap-4">
                          <span className="h-px w-10 bg-brand-white/60" />

                          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/80">
                            {copy.seasons.itemLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* TEXT */}
                    <div
                      className={
                        reverse
                          ? "lg:order-1 lg:col-span-5"
                          : "lg:col-span-5"
                      }
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center text-gold">
                          <Icon />
                        </span>

                        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                          {number}
                        </span>
                      </div>

                      <h3
                        className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl"
                        style={{ color: "#1B0B20" }}
                      >
                        {seasonName}
                      </h3>

                      <p className="mt-6 max-w-md text-sm leading-7 text-grey md:text-base">
                        {seasonDescription}
                      </p>

                      <div className="mt-8 flex items-center gap-5">
                        <span className="h-px w-10 bg-gold" />

                        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/45">
                          {copy.seasons.handmade}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CLOSING STATEMENT */}
            <div className="mx-auto mt-24 max-w-[1000px] text-center md:mt-32">
              <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

              <p
                className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                style={{ color: "#1B0B20" }}
              >
                {copy.seasons.closingBefore}

                <span style={{ color: "#C8A96A" }}>
                  {" "}
                  {copy.seasons.closingAccent}
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* DARK DESIGN PHILOSOPHY */}
        <section className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-gold/8 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  {copy.philosophy.eyebrow}
                </span>

                <h2
                  className="max-w-[900px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.philosophy.title}

                  <span
                    className="block italic"
                    style={{ color: "#E8D8B5" }}
                  >
                    {copy.philosophy.titleAccent}
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  {copy.philosophy.description}
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-brand-white/12 md:grid-cols-3">
              {copy.philosophy.points.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="border-b border-brand-white/12 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="mt-7 font-display text-2xl md:text-3xl"
                    style={{ color: "#F5EFE6" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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