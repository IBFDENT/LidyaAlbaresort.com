import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

export type Collection = {
  id:
    | "pearls"
    | "wedding"
    | "signature"
    | "brilliants"
    | "design"
    | "bespoke";
  image: string;
  name: LocalizedText;
  description: LocalizedText;
  /** Category filter used to jump into the catalogue once it exists. */
  catFilter: string;
};

export const COLLECTIONS: Collection[] = [
  {
    id: "pearls",
    image: "/images/collections/pearls.jpg",
    catFilter: "pearls",
    name: {
      de: "Perlen",
      en: "Pearls",
      tr: "İnciler",
      sk: "Perly",
      cs: "Perly",
      hu: "Gyöngyök",
      pl: "Perły",

      ru: "Жемчуг",
      nl: "Parels",
      da: "Perler",
      fi: "Helmet",
      sv: "Pärlor",
      fr: "Perles",
      it: "Perle",
      es: "Perlas",
    },
    description: {
      de: "Perlen in ihrer schönsten Form – ein zeitloses Vergnügen.",
      en: "Pearls in their most beautiful form – a timeless pleasure.",
      tr: "En güzel haliyle inciler – zamansız bir zevk.",
      sk: "Perly v ich najkrajšej podobe – nadčasové potešenie.",
      cs: "Perly v jejich nejkrásnější podobě – nadčasové potěšení.",
      hu: "Gyöngyök legszebb formájukban – időtlen élvezet.",
      pl: "Perły w ich najpiękniejszej formie – ponadczasowa przyjemność.",

      ru: "Жемчуг в своей прекраснейшей форме — удовольствие вне времени.",
      nl: "Parels in hun mooiste vorm – tijdloze elegantie.",
      da: "Perler i deres smukkeste form – en tidløs glæde.",
      fi: "Helmet kauneimmillaan – ajatonta iloa.",
      sv: "Pärlor i sin vackraste form – tidlös elegans.",
      fr: "Les perles dans leur plus belle expression – un plaisir intemporel.",
      it: "Perle nella loro forma più bella – un piacere senza tempo.",
      es: "Perlas en su expresión más bella – un placer atemporal.",
    },
  },

  {
    id: "wedding",
    image: "/images/collections/wedding.jpg",
    catFilter: "wedding",
    name: {
      de: "Trauringe",
      en: "Wedding Rings",
      tr: "Alyanslar",
      sk: "Obrúčky",
      cs: "Snubní prsteny",
      hu: "Karikagyűrűk",
      pl: "Obrączki",

      ru: "Обручальные кольца",
      nl: "Trouwringen",
      da: "Vielsesringe",
      fi: "Vihkisormukset",
      sv: "Vigselringar",
      fr: "Alliances",
      it: "Fedi nuziali",
      es: "Alianzas",
    },
    description: {
      de: "Trauringe – Schmuck für ein Leben lang.",
      en: "Wedding rings – jewellery for a lifetime.",
      tr: "Alyanslar – bir ömür boyu mücevher.",
      sk: "Obrúčky – šperk na celý život.",
      cs: "Snubní prsteny – šperk na celý život.",
      hu: "Karikagyűrűk – ékszer egy életre.",
      pl: "Obrączki – biżuteria na całe życie.",

      ru: "Обручальные кольца — украшения на всю жизнь.",
      nl: "Trouwringen – sieraden voor het leven.",
      da: "Vielsesringe – smykker for livet.",
      fi: "Vihkisormukset – koruja koko elämän ajaksi.",
      sv: "Vigselringar – smycken för livet.",
      fr: "Alliances – des bijoux pour toute une vie.",
      it: "Fedi nuziali – gioielli per tutta la vita.",
      es: "Alianzas – joyas para toda la vida.",
    },
  },

  {
    id: "signature",
    image: "/images/collections/signature.jpg",
    catFilter: "signature",
    name: {
      de: "Signature-Stil",
      en: "Signature Style",
      tr: "İmza Stili",
      sk: "Charakteristický štýl",
      cs: "Charakteristický styl",
      hu: "Jellegzetes stílus",
      pl: "Charakterystyczny styl",

      ru: "Фирменный стиль",
      nl: "Signatuurstijl",
      da: "Signaturstil",
      fi: "Tunnusomainen tyyli",
      sv: "Signaturstil",
      fr: "Style signature",
      it: "Stile distintivo",
      es: "Estilo distintivo",
    },
    description: {
      de: "Eigener, unverwechselbarer Stil.",
      en: "Your own unmistakable style.",
      tr: "Kendine özgü, eşsiz bir tarz.",
      sk: "Váš vlastný, nezameniteľný štýl.",
      cs: "Váš vlastní, nezaměnitelný styl.",
      hu: "Saját, egyedi stílusa.",
      pl: "Twój własny, niepowtarzalny styl.",

      ru: "Ваш собственный, неповторимый стиль.",
      nl: "Uw eigen onmiskenbare stijl.",
      da: "Din egen umiskendelige stil.",
      fi: "Oma, tunnistettava tyylisi.",
      sv: "Din egen omisskännliga stil.",
      fr: "Votre style unique et reconnaissable.",
      it: "Il vostro stile unico e inconfondibile.",
      es: "Su propio estilo único e inconfundible.",
    },
  },

  {
    id: "brilliants",
    image: "/images/collections/brilliants.jpg",
    catFilter: "brilliants",
    name: {
      de: "Brillanten",
      en: "Brilliants",
      tr: "Pırlantalar",
      sk: "Brilianty",
      cs: "Brilianty",
      hu: "Briliánsok",
      pl: "Brylanty",

      ru: "Бриллианты",
      nl: "Briljanten",
      da: "Brillanter",
      fi: "Briljantit",
      sv: "Briljanter",
      fr: "Brillants",
      it: "Brillanti",
      es: "Brillantes",
    },
    description: {
      de: "Brillant-geschliffene Stücke, für maximalen Glanz ausgewählt.",
      en: "Brilliant-cut pieces, chosen for maximum sparkle.",
      tr: "Maksimum parıltı için seçilmiş, brilliant kesim parçalar.",
      sk: "Kúsky s brúsom brilliant, vybrané pre maximálny lesk.",
      cs: "Kousky s brusem brilliant, vybrané pro maximální lesk.",
      hu: "Brilliáns csiszolású darabok, a maximális csillogásért válogatva.",
      pl: "Elementy o szlifie brylantowym, wybrane dla maksymalnego blasku.",

      ru: "Изделия с бриллиантовой огранкой, выбранные для максимального сияния.",
      nl: "Briljant geslepen stukken, geselecteerd voor maximale schittering.",
      da: "Brillantslebne smykker, udvalgt for maksimal glans.",
      fi: "Briljanttihiotut korut, valittu maksimaalisen säihkeen vuoksi.",
      sv: "Briljantslipade smycken, utvalda för maximal lyster.",
      fr: "Des pièces taillées en brillant, sélectionnées pour un éclat maximal.",
      it: "Pezzi con taglio brillante, scelti per la massima luminosità.",
      es: "Piezas de talla brillante, seleccionadas para ofrecer el máximo resplandor.",
    },
  },

  {
    id: "design",
    image: "/images/collections/design.jpg",
    catFilter: "design",
    name: {
      de: "Design",
      en: "Design",
      tr: "Tasarım",
      sk: "Dizajn",
      cs: "Design",
      hu: "Design",
      pl: "Design",

      ru: "Дизайн",
      nl: "Design",
      da: "Design",
      fi: "Design",
      sv: "Design",
      fr: "Design",
      it: "Design",
      es: "Diseño",
    },
    description: {
      de: "Design – Ausdruck Ihrer Persönlichkeit.",
      en: "Design – an expression of your personality.",
      tr: "Tasarım – kişiliğinizin bir ifadesi.",
      sk: "Dizajn – výraz vašej osobnosti.",
      cs: "Design – výraz vaší osobnosti.",
      hu: "Design – személyisége kifejezése.",
      pl: "Design – wyraz Twojej osobowości.",

      ru: "Дизайн — отражение вашей индивидуальности.",
      nl: "Design – een uitdrukking van uw persoonlijkheid.",
      da: "Design – et udtryk for din personlighed.",
      fi: "Design – persoonallisuutesi ilmentymä.",
      sv: "Design – ett uttryck för din personlighet.",
      fr: "Design – l’expression de votre personnalité.",
      it: "Design – espressione della vostra personalità.",
      es: "Diseño – una expresión de su personalidad.",
    },
  },

  {
    id: "bespoke",
    image: "/images/collections/bespoke.jpg",
    catFilter: "bespoke",
    name: {
      de: "Maßanfertigung",
      en: "Bespoke",
      tr: "Özel Tasarım",
      sk: "Na mieru",
      cs: "Na míru",
      hu: "Egyedi készítés",
      pl: "Na zamówienie",

      ru: "На заказ",
      nl: "Maatwerk",
      da: "Skræddersyet",
      fi: "Mittatilaus",
      sv: "Skräddarsytt",
      fr: "Sur mesure",
      it: "Su misura",
      es: "A medida",
    },
    description: {
      de: "Schmuck nach Ihren Wünschen gefertigt.",
      en: "Jewellery made to your requirements.",
      tr: "İsteklerinize göre üretilmiş mücevherler.",
      sk: "Šperky vyrobené podľa vašich predstáv.",
      cs: "Šperky vyrobené podle vašich přání.",
      hu: "Ékszerek az Ön kívánságai szerint készítve.",
      pl: "Biżuteria wykonana według Twoich życzeń.",

      ru: "Украшения, созданные в соответствии с вашими пожеланиями.",
      nl: "Sieraden gemaakt volgens uw persoonlijke wensen.",
      da: "Smykker fremstillet efter dine ønsker.",
      fi: "Toiveidesi mukaan valmistettuja koruja.",
      sv: "Smycken tillverkade efter dina önskemål.",
      fr: "Des bijoux réalisés selon vos souhaits.",
      it: "Gioielli realizzati secondo i vostri desideri.",
      es: "Joyas creadas según sus deseos.",
    },
  },
];

export type Material = {
  id:
    | "whitegold"
    | "yellowgold"
    | "rosegold"
    | "platinum"
    | "diamond"
    | "gem"
    | "pearl";
  icon: string;
  name: LocalizedText;
  description: LocalizedText;
};

export const MATERIALS: Material[] = [
  {
    id: "whitegold",
    icon: "◇",
    name: {
      de: "Weissgold",
      en: "White Gold",
      tr: "Beyaz Altın",
      sk: "Biele zlato",
      cs: "Bílé zlato",
      hu: "Fehérarany",
      pl: "Białe złoto",

      ru: "Белое золото",
      nl: "Witgoud",
      da: "Hvidguld",
      fi: "Valkokulta",
      sv: "Vitguld",
      fr: "Or blanc",
      it: "Oro bianco",
      es: "Oro blanco",
    },
    description: {
      de: "Zeitlos elegant und vielseitig kombinierbar.",
      en: "Timelessly elegant and versatile to combine.",
      tr: "Zamansız zarif ve çok yönlü.",
      sk: "Nadčasovo elegantné a všestranne kombinovateľné.",
      cs: "Nadčasově elegantní a všestranně kombinovatelné.",
      hu: "Időtlenül elegáns és sokoldalúan kombinálható.",
      pl: "Ponadczasowo eleganckie i wszechstronne w łączeniu.",

      ru: "Вневременная элегантность и универсальность.",
      nl: "Tijdloos elegant en veelzijdig te combineren.",
      da: "Tidløst elegant og alsidigt at kombinere.",
      fi: "Ajattoman elegantti ja monipuolisesti yhdisteltävä.",
      sv: "Tidlöst elegant och mångsidigt att kombinera.",
      fr: "Une élégance intemporelle et une grande polyvalence.",
      it: "Elegante senza tempo e versatile negli abbinamenti.",
      es: "Elegante, atemporal y versátil en cualquier combinación.",
    },
  },

  {
    id: "yellowgold",
    icon: "◆",
    name: {
      de: "Gelbgold",
      en: "Yellow Gold",
      tr: "Sarı Altın",
      sk: "Žlté zlato",
      cs: "Žluté zlato",
      hu: "Sárgaarany",
      pl: "Żółte złoto",

      ru: "Жёлтое золото",
      nl: "Geelgoud",
      da: "Gult guld",
      fi: "Keltakulta",
      sv: "Gult guld",
      fr: "Or jaune",
      it: "Oro giallo",
      es: "Oro amarillo",
    },
    description: {
      de: "Der klassische, warme Goldton.",
      en: "The classic, warm tone of gold.",
      tr: "Klasik, sıcak altın tonu.",
      sk: "Klasický, teplý odtieň zlata.",
      cs: "Klasický, teplý odstín zlata.",
      hu: "A klasszikus, meleg aranytónus.",
      pl: "Klasyczny, ciepły odcień złota.",

      ru: "Классический тёплый оттенок золота.",
      nl: "De klassieke, warme goudtint.",
      da: "Den klassiske, varme guldtone.",
      fi: "Klassinen, lämmin kullan sävy.",
      sv: "Den klassiska, varma guldtonen.",
      fr: "La teinte classique et chaleureuse de l’or.",
      it: "La classica tonalità calda dell’oro.",
      es: "El clásico tono cálido del oro.",
    },
  },

  {
    id: "rosegold",
    icon: "◈",
    name: {
      de: "Rotgold",
      en: "Rose Gold",
      tr: "Rose Altın",
      sk: "Ružové zlato",
      cs: "Růžové zlato",
      hu: "Rosé arany",
      pl: "Różowe złoto",

      ru: "Розовое золото",
      nl: "Roségoud",
      da: "Rosaguld",
      fi: "Ruusukulta",
      sv: "Roséguld",
      fr: "Or rose",
      it: "Oro rosa",
      es: "Oro rosa",
    },
    description: {
      de: "Ein sanfter, moderner Farbton.",
      en: "A soft, contemporary hue.",
      tr: "Yumuşak, modern bir renk tonu.",
      sk: "Jemný, moderný farebný tón.",
      cs: "Jemný, moderní barevný tón.",
      hu: "Lágy, modern árnyalat.",
      pl: "Delikatny, nowoczesny odcień.",

      ru: "Мягкий современный оттенок.",
      nl: "Een zachte, eigentijdse tint.",
      da: "En blød og moderne nuance.",
      fi: "Pehmeä ja moderni sävy.",
      sv: "En mjuk och modern nyans.",
      fr: "Une nuance douce et contemporaine.",
      it: "Una tonalità delicata e contemporanea.",
      es: "Un tono suave y contemporáneo.",
    },
  },

  {
    id: "platinum",
    icon: "⬖",
    name: {
      de: "Platin",
      en: "Platinum",
      tr: "Platin",
      sk: "Platina",
      cs: "Platina",
      hu: "Platina",
      pl: "Platyna",

      ru: "Платина",
      nl: "Platina",
      da: "Platin",
      fi: "Platina",
      sv: "Platina",
      fr: "Platine",
      it: "Platino",
      es: "Platino",
    },
    description: {
      de: "Ausserordentlich beständig und edel.",
      en: "Exceptionally durable and refined.",
      tr: "Olağanüstü dayanıklı ve zarif.",
      sk: "Mimoriadne odolná a ušľachtilá.",
      cs: "Mimořádně odolná a ušlechtilá.",
      hu: "Rendkívül tartós és nemes.",
      pl: "Wyjątkowo trwała i szlachetna.",

      ru: "Исключительно прочная и благородная.",
      nl: "Uitzonderlijk duurzaam en verfijnd.",
      da: "Exceptionelt holdbart og eksklusivt.",
      fi: "Poikkeuksellisen kestävä ja hienostunut.",
      sv: "Exceptionellt hållbart och exklusivt.",
      fr: "Exceptionnellement durable et raffiné.",
      it: "Eccezionalmente resistente e raffinato.",
      es: "Excepcionalmente resistente y refinado.",
    },
  },

  {
    id: "diamond",
    icon: "✦",
    name: {
      de: "Diamanten",
      en: "Diamonds",
      tr: "Pırlantalar",
      sk: "Diamanty",
      cs: "Diamanty",
      hu: "Gyémántok",
      pl: "Diamenty",

      ru: "Бриллианты",
      nl: "Diamanten",
      da: "Diamanter",
      fi: "Timantit",
      sv: "Diamanter",
      fr: "Diamants",
      it: "Diamanti",
      es: "Diamantes",
    },
    description: {
      de: "Für Augenblicke von bleibendem Wert.",
      en: "For moments of lasting value.",
      tr: "Kalıcı değere sahip anlar için.",
      sk: "Pre chvíle s trvalou hodnotou.",
      cs: "Pro chvíle s trvalou hodnotou.",
      hu: "Tartós értékű pillanatokért.",
      pl: "Dla chwil o trwałej wartości.",

      ru: "Для моментов непреходящей ценности.",
      nl: "Voor momenten van blijvende waarde.",
      da: "Til øjeblikke af varig værdi.",
      fi: "Hetkiin, joilla on pysyvää arvoa.",
      sv: "För ögonblick med bestående värde.",
      fr: "Pour des instants d’une valeur durable.",
      it: "Per momenti dal valore duraturo.",
      es: "Para momentos de valor duradero.",
    },
  },

  {
    id: "gem",
    icon: "●",
    name: {
      de: "Edelsteine",
      en: "Precious Stones",
      tr: "Değerli Taşlar",
      sk: "Drahé kamene",
      cs: "Drahé kameny",
      hu: "Drágakövek",
      pl: "Kamienie szlachetne",

      ru: "Драгоценные камни",
      nl: "Edelstenen",
      da: "Ædelsten",
      fi: "Jalokivet",
      sv: "Ädelstenar",
      fr: "Pierres précieuses",
      it: "Pietre preziose",
      es: "Piedras preciosas",
    },
    description: {
      de: "Eine grosse Auswahl an Farben und Formen.",
      en: "A wide selection of colours and shapes.",
      tr: "Geniş bir renk ve şekil seçeneği.",
      sk: "Široký výber farieb a tvarov.",
      cs: "Široký výběr barev a tvarů.",
      hu: "Széles szín- és formaválaszték.",
      pl: "Szeroki wybór kolorów i kształtów.",

      ru: "Широкий выбор цветов и форм.",
      nl: "Een ruime keuze aan kleuren en vormen.",
      da: "Et bredt udvalg af farver og former.",
      fi: "Laaja valikoima värejä ja muotoja.",
      sv: "Ett brett urval av färger och former.",
      fr: "Un large choix de couleurs et de formes.",
      it: "Un’ampia scelta di colori e forme.",
      es: "Una amplia selección de colores y formas.",
    },
  },

  {
    id: "pearl",
    icon: "○",
    name: {
      de: "Perlen",
      en: "Pearls",
      tr: "İnciler",
      sk: "Perly",
      cs: "Perly",
      hu: "Gyöngyök",
      pl: "Perły",

      ru: "Жемчуг",
      nl: "Parels",
      da: "Perler",
      fi: "Helmet",
      sv: "Pärlor",
      fr: "Perles",
      it: "Perle",
      es: "Perlas",
    },
    description: {
      de: "Ein zeitloses Vergnügen in ihrer schönsten Form.",
      en: "A timeless pleasure in its most beautiful form.",
      tr: "En güzel haliyle zamansız bir zevk.",
      sk: "Nadčasové potešenie v najkrajšej podobe.",
      cs: "Nadčasové potěšení v nejkrásnější podobě.",
      hu: "Időtlen élvezet legszebb formájában.",
      pl: "Ponadczasowa przyjemność w najpiękniejszej formie.",

      ru: "Вневременное удовольствие в своей прекраснейшей форме.",
      nl: "Tijdloze schoonheid in haar mooiste vorm.",
      da: "En tidløs glæde i sin smukkeste form.",
      fi: "Ajatonta kauneutta parhaimmillaan.",
      sv: "Tidlös elegans i sin vackraste form.",
      fr: "Un plaisir intemporel dans sa plus belle expression.",
      it: "Un piacere senza tempo nella sua forma più bella.",
      es: "Un placer atemporal en su expresión más bella.",
    },
  },
];

export function localized(
  text: LocalizedText,
  locale: Locale
): string {
  return text[locale] ?? text.en ?? "";
}

// ---------------------------------------------------------------------
// SERVICE STRUCTURE
// ---------------------------------------------------------------------
//
// Services.tsx already contains the complete translated text for all
// supported languages. This structure is kept here because Services.tsx
// uses SERVICE_GROUPS for the service-group keys and ordering.
//

export type ServiceGroup = {
  letter: string;
  key: string;
  title: LocalizedText;
  note: LocalizedText;
  items: string[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    letter: "A",
    key: "care",
    title: { en: "Jewellery Care" },
    note: { en: "Jewellery cleaned and polished free of charge." },
    items: ["Cleaning", "Polishing", "Inspection", "Maintenance"],
  },
  {
    letter: "B",
    key: "repairs",
    title: { en: "Repairs & Adjustments" },
    note: { en: "Ring resizing and other adjustments." },
    items: [
      "Ring resizing",
      "Chain shortening",
      "Chain extension",
      "Bracelet adjustment",
      "Clasp replacement",
      "Repair of damaged jewellery",
    ],
  },
  {
    letter: "C",
    key: "stones",
    title: { en: "Stone Services" },
    note: { en: "Setting of diamonds and gemstones of every kind." },
    items: [
      "Diamond setting",
      "Gemstone setting",
      "Replacement of loose or missing stones",
      "Inspection of settings",
    ],
  },
  {
    letter: "D",
    key: "bespoke",
    title: { en: "Bespoke & Redesign" },
    note: { en: "Bespoke pieces made to a model or reference." },
    items: [
      "New jewellery according to a model",
      "New jewellery according to a reference",
      "Redesign of inherited jewellery",
      "Modernisation of older jewellery",
      "Reuse of stones and precious metals",
    ],
  },
  {
    letter: "E",
    key: "watch",
    title: { en: "Watch Service" },
    note: { en: "Watch repairs of every kind." },
    items: [
      "Watch repairs",
      "Battery replacement",
      "Strap or bracelet adjustment",
    ],
  },
  {
    letter: "F",
    key: "gold",
    title: { en: "Gold Exchange" },
    note: { en: "Old and unwanted gold taken in part-exchange." },
    items: [
      "Old gold purchase",
      "Part-exchange of unwanted gold",
      "Use of customer gold for a new bespoke piece",
    ],
  },
];

// ---------------------------------------------------------------------
// LEGACY ABOUT DATA
// ---------------------------------------------------------------------
//
// About.tsx already contains its own complete multilingual translations.
// These exports are retained in case another part of the project still
// imports them.
//

export const ABOUT_BODY_EN: string[] = [
  "We want to be your personal advisor, whether you are looking for a special gift or wish to treat yourself to a new favourite piece.",
  "With handcraftsmanship as our standard of quality, we set the highest demands on design, material and execution.",
  "You will find jewellery and watches in a wide selection with us: white, yellow and rose gold, platinum, diamonds, precious stones and pearls — for every budget.",
  "We also offer creative designs for one-of-a-kind pieces, individually crafted to your wishes.",
  "Even if you own jewellery — older or inherited, out of fashion or with poorly set stones — we provide expert redesign.",
  "Buying a piece of jewellery is a matter of trust. Visit us. We put our knowledge, our experience and our service at your disposal.",
];

export const ABOUT_VALUES_EN: string[] = [
  "Tradition",
  "Craftsmanship",
  "Trust",
  "Individuality",
  "Lasting Value",
];

// ---------------------------------------------------------------------
// BOUTIQUES
// ---------------------------------------------------------------------
//
// Boutique names and addresses are proper names and therefore do not
// require language-specific variants.
//

export type Boutique = {
  id: "manavgat" | "resort" | "royal" | "queen";
  image: string;
  name: string;
  address?: string;
};

export const BOUTIQUES: Boutique[] = [
  {
    id: "manavgat",
    image: "/images/boutiques/manavgat.jpg",
    name: "LIDYA JEWELLERY — Manavgat",
    address:
      "Çolaklı, Tilkiler Mevkii, Erhan Demir Blv. No:4, P.K:07600 Manavgat / Türkiye",
  },
  {
    id: "resort",
    image: "/images/boutiques/resort.jpg",
    name: "Hotel Alba Resort",
  },
  {
    id: "royal",
    image: "/images/boutiques/royal-v2.jpg",
    name: "Hotel Alba Royal",
  },
  {
    id: "queen",
    image: "/images/boutiques/queen.jpg",
    name: "Hotel Alba Queen",
  },
];