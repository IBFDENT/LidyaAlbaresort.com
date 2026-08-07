import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

export type Collection = {
  id: "pearls" | "wedding" | "signature" | "diamonds" | "design" | "bespoke";
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
    },
    description: {
      de: "Perlen in ihrer schönsten Form – ein zeitloses Vergnügen.",
      en: "Pearls in their most beautiful form – a timeless pleasure.",
      tr: "En güzel haliyle inciler – zamansız bir zevk.",
      sk: "Perly v ich najkrajšej podobe – nadčasové potešenie.",
      cs: "Perly v jejich nejkrásnější podobě – nadčasové potěšení.",
      hu: "Gyöngyök legszebb formájukban – időtlen élvezet.",
      pl: "Perły w ich najpiękniejszej formie – ponadczasowa przyjemność.",
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
    },
    description: {
      de: "Trauringe – Schmuck für ein Leben lang.",
      en: "Wedding rings – jewellery for a lifetime.",
      tr: "Alyanslar – bir ömür boyu mücevher.",
      sk: "Obrúčky – šperk na celý život.",
      cs: "Snubní prsteny – šperk na celý život.",
      hu: "Karikagyűrűk – ékszer egy életre.",
      pl: "Obrączki – biżuteria na całe życie.",
    },
  },
  {
    id: "signature",
    image: "/images/collections/signature.jpg",
    catFilter: "signature",
    name: {
      de: "Signature Style",
      en: "Signature Style",
      tr: "Signature Style",
      sk: "Signature Style",
      cs: "Signature Style",
      hu: "Signature Style",
      pl: "Signature Style",
    },
    description: {
      de: "Eigener, unverwechselbarer Stil.",
      en: "Your own unmistakable style.",
      tr: "Kendine özgü, eşsiz bir tarz.",
      sk: "Váš vlastný, nezameniteľný štýl.",
      cs: "Váš vlastní, nezaměnitelný styl.",
      hu: "Saját, egyedi stílusa.",
      pl: "Twój własny, niepowtarzalny styl.",
    },
  },
  {
    id: "diamonds",
    image: "/images/collections/diamonds.jpg",
    catFilter: "diamonds",
    name: {
      de: "Brillanten",
      en: "Diamonds",
      tr: "Pırlantalar",
      sk: "Diamanty",
      cs: "Diamanty",
      hu: "Gyémántok",
      pl: "Diamenty",
    },
    description: {
      de: "Brillanten – für Augenblicke von bleibendem Wert.",
      en: "Diamonds – for moments of lasting value.",
      tr: "Pırlantalar – kalıcı değere sahip anlar için.",
      sk: "Diamanty – pre chvíle s trvalou hodnotou.",
      cs: "Diamanty – pro chvíle s trvalou hodnotou.",
      hu: "Gyémántok – tartós értékű pillanatokért.",
      pl: "Diamenty – dla chwil o trwałej wartości.",
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
    },
    description: {
      de: "Design – Ausdruck Ihrer Persönlichkeit.",
      en: "Design – an expression of your personality.",
      tr: "Tasarım – kişiliğinizin bir ifadesi.",
      sk: "Dizajn – výraz vašej osobnosti.",
      cs: "Design – výraz vaší osobnosti.",
      hu: "Design – személyisége kifejezése.",
      pl: "Design – wyraz Twojej osobowości.",
    },
  },
  {
    id: "bespoke",
    image: "/images/collections/bespoke.jpg",
    catFilter: "bespoke",
    name: {
      de: "Bespoke",
      en: "Bespoke",
      tr: "Özel Tasarım",
      sk: "Bespoke",
      cs: "Bespoke",
      hu: "Bespoke",
      pl: "Bespoke",
    },
    description: {
      de: "Schmuck nach Ihren Wünschen gefertigt.",
      en: "Jewellery made to your requirements.",
      tr: "İsteklerinize göre üretilmiş mücevherler.",
      sk: "Šperky vyrobené podľa vašich predstáv.",
      cs: "Šperky vyrobené podle vašich přání.",
      hu: "Ékszerek az Ön kívánságai szerint készítve.",
      pl: "Biżuteria wykonana według Twoich życzeń.",
    },
  },
];

export type Material = {
  id: "whitegold" | "yellowgold" | "rosegold" | "platinum" | "diamond" | "gem" | "pearl";
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
    },
    description: {
      de: "Zeitlos elegant und vielseitig kombinierbar.",
      en: "Timelessly elegant and versatile to combine.",
      tr: "Zamansız zarif ve çok yönlü.",
      sk: "Nadčasovo elegantné a všestranne kombinovateľné.",
      cs: "Nadčasově elegantní a všestranně kombinovatelné.",
      hu: "Időtlenül elegáns és sokoldalúan kombinálható.",
      pl: "Ponadczasowo eleganckie i wszechstronne w łączeniu.",
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
    },
    description: {
      de: "Der klassische, warme Goldton.",
      en: "The classic, warm tone of gold.",
      tr: "Klasik, sıcak altın tonu.",
      sk: "Klasický, teplý odtieň zlata.",
      cs: "Klasický, teplý odstín zlata.",
      hu: "A klasszikus, meleg aranytónus.",
      pl: "Klasyczny, ciepły odcień złota.",
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
    },
    description: {
      de: "Ein sanfter, moderner Farbton.",
      en: "A soft, contemporary hue.",
      tr: "Yumuşak, modern bir renk tonu.",
      sk: "Jemný, moderný farebný tón.",
      cs: "Jemný, moderní barevný tón.",
      hu: "Lágy, modern árnyalat.",
      pl: "Delikatny, nowoczesny odcień.",
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
    },
    description: {
      de: "Ausserordentlich beständig und edel.",
      en: "Exceptionally durable and refined.",
      tr: "Olağanüstü dayanıklı ve zarif.",
      sk: "Mimoriadne odolná a ušľachtilá.",
      cs: "Mimořádně odolná a ušlechtilá.",
      hu: "Rendkívül tartós és nemes.",
      pl: "Wyjątkowo trwała i szlachetna.",
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
    },
    description: {
      de: "Für Augenblicke von bleibendem Wert.",
      en: "For moments of lasting value.",
      tr: "Kalıcı değere sahip anlar için.",
      sk: "Pre chvíle s trvalou hodnotou.",
      cs: "Pro chvíle s trvalou hodnotou.",
      hu: "Tartós értékű pillanatokért.",
      pl: "Dla chwil o trwałej wartości.",
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
    },
    description: {
      de: "Eine grosse Auswahl an Farben und Formen.",
      en: "A wide selection of colours and shapes.",
      tr: "Geniş bir renk ve şekil seçeneği.",
      sk: "Široký výber farieb a tvarov.",
      cs: "Široký výběr barev a tvarů.",
      hu: "Széles szín- és formaválaszték.",
      pl: "Szeroki wybór kolorów i kształtów.",
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
    },
    description: {
      de: "Ein zeitloses Vergnügen in ihrer schönsten Form.",
      en: "A timeless pleasure in its most beautiful form.",
      tr: "En güzel haliyle zamansız bir zevk.",
      sk: "Nadčasové potešenie v najkrajšej podobe.",
      cs: "Nadčasové potěšení v nejkrásnější podobě.",
      hu: "Időtlen élvezet legszebb formájában.",
      pl: "Ponadczasowa przyjemność w najpiękniejszej formie.",
    },
  },
];

export function localized(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text.en ?? "";
}

// --- Services, About, Boutiques content -------------------------------
// Currently English-only (LOCALE = "en"). The shape mirrors the rest of
// this file so translations can be filled in per-locale later.

export type ServiceGroup = {
  letter: string;
  key: string;
  title: LocalizedText;
  note: LocalizedText;
  items: string[]; // English only for now
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
    items: ["Watch repairs", "Battery replacement", "Strap or bracelet adjustment"],
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
    name: "LIDYA JEWELRY — Manavgat",
    address: "Antalya Caddesi No: 48, Manavgat / Antalya / Türkiye",
  },
  { id: "resort", image: "/images/boutiques/resort.jpg", name: "Hotel Alba Resort" },
  { id: "royal", image: "/images/boutiques/royal.jpg", name: "Hotel Alba Royal" },
  { id: "queen", image: "/images/boutiques/queen.jpg", name: "Hotel Alba Queen" },
];
