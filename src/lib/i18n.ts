// Translations for the site chrome (nav, hero, section intros).
// Source of truth extracted from the legacy index_6_2.html demo.
// Covers 7 of the planned 12 languages — RU, ZH, ES, IT, EL still to be added.
// For now the site renders a single locale (see LOCALE below); wiring the
// switcher + per-route locales is a follow-up step.

export type Locale = "de" | "en" | "tr" | "sk" | "cs" | "hu" | "pl";

export const LOCALES: Locale[] = ["de", "en", "tr", "sk", "cs", "hu", "pl"];

// Active locale for this build pass. Swap this (or wire real routing) once
// the language switcher is implemented.
export const LOCALE: Locale = "en";

type Dict = {
  nav: {
    home: string;
    collections: string;
    pearls: string;
    wedding: string;
    diamonds: string;
    design: string;
    bespoke: string;
    services: string;
    investment: string;
    brilliants: string;
    about: string;
    boutiques: string;
    contact: string;
    book: string;
  };
  hero: {
    eyebrow: string;
    lead: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  strip: {
    since: string;
    handcrafted: string;
    bespoke: string;
    service: string;
    hotels: string;
  };
  collections: {
    eyebrow: string;
    title: string;
    sub: string;
  };
  materials: {
    eyebrow: string;
    title: string;
  };
  services: {
    eyebrow: string;
    title: string;
    sub: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    signoff: string;
    role: string;
  };
  boutiques: {
    eyebrow: string;
    title: string;
    servicesLine: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    team: string;
    locations: string;
    call: string;
    email: string;
  };
  footer: {
    tagline: string;
    nav: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    contact: string;
    rights: string;
    since: string;
  };
};

export const dictionaries: Record<Locale, Dict> = {
  de: {
    nav: {
      home: "Home",
      collections: "Kollektionen",
      pearls: "Perlen",
      wedding: "Trauringe",
      diamonds: "Brillanten",
      design: "Design",
      bespoke: "Bespoke",
      services: "Service",
      investment: "Investmentgold",
      brilliants: "Brilliants",
      about: "Über uns",
      boutiques: "Boutiquen",
      contact: "Kontakt",
      book: "Service buchen",
    },
    hero: {
      eyebrow: "Seit 1989",
      lead: "Schmuck von bleibendem Wert.",
      sub: "Handgefertigter Schmuck, zeitloses Design und persönlicher Service seit 1989.",
      cta1: "Kollektion entdecken",
      cta2: "Privattermin buchen",
    },
    strip: {
      since: "Seit 1989",
      handcrafted: "Handarbeit",
      bespoke: "Maßanfertigung",
      service: "Professioneller Service",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Kollektionen",
      title: "Sechs Ausdrucksformen einer Philosophie",
      sub: "Jede Kollektion folgt demselben handwerklichen Anspruch – von zeitlosen Perlen bis zu einzigartigen Maßanfertigungen.",
    },
    materials: {
      eyebrow: "Materialien & Steine",
      title: "Ausgewählt für ihre bleibende Qualität",
    },
    services: {
      eyebrow: "Jewellery & Watch Service",
      title: "Complete care, from cleaning to bespoke redesign",
      sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    },
    about: {
      eyebrow: "Our Philosophy",
      title: "Things of lasting value in changing times",
      lead: "There are things that retain their value in times of change.",
      signoff: "Wishing you much pleasure browsing,",
      role: "General Manager",
    },
    boutiques: {
      eyebrow: "Our Boutiques",
      title: "Visit us at Alba Hotels",
      servicesLine: "Sales · Service · Consultation",
    },
    contact: {
      eyebrow: "Contact",
      title: "We would be glad to hear from you",
      team: "Our Team",
      locations: "Our Locations",
      call: "Call",
      email: "Email",
    },
    footer: {
      tagline: "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since: "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
  en: {
    nav: {
      home: "Home",
      collections: "Collections",
      pearls: "Pearls",
      wedding: "Wedding Rings",
      diamonds: "Diamonds",
      design: "Design",
      bespoke: "Bespoke",
      services: "Services",
      investment: "Investment Gold",
      brilliants: "Brilliants",
      about: "About",
      boutiques: "Boutiques",
      contact: "Contact",
      book: "Book Service",
    },
    hero: {
      eyebrow: "Since 1989",
      lead: "Jewellery of lasting value.",
      sub: "Handcrafted jewellery, timeless design and personal service since 1989.",
      cta1: "Explore the Collection",
      cta2: "Book a Private Appointment",
    },
    strip: {
      since: "Since 1989",
      handcrafted: "Handcrafted",
      bespoke: "Bespoke Jewellery",
      service: "Professional Service",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Collections",
      title: "Six expressions of a single philosophy",
      sub: "Each collection carries forward the same handcrafted standard, from timeless pearls to one-of-a-kind bespoke pieces.",
    },
    materials: {
      eyebrow: "Materials & Stones",
      title: "Chosen for their lasting quality",
    },
    services: {
      eyebrow: "Jewellery & Watch Service",
      title: "Complete care, from cleaning to bespoke redesign",
      sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    },
    about: {
      eyebrow: "Our Philosophy",
      title: "Things of lasting value in changing times",
      lead: "There are things that retain their value in times of change.",
      signoff: "Wishing you much pleasure browsing,",
      role: "General Manager",
    },
    boutiques: {
      eyebrow: "Our Boutiques",
      title: "Visit us at Alba Hotels",
      servicesLine: "Sales · Service · Consultation",
    },
    contact: {
      eyebrow: "Contact",
      title: "We would be glad to hear from you",
      team: "Our Team",
      locations: "Our Locations",
      call: "Call",
      email: "Email",
    },
    footer: {
      tagline: "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since: "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      collections: "Koleksiyonlar",
      pearls: "İnciler",
      wedding: "Alyanslar",
      diamonds: "Pırlantalar",
      design: "Tasarım",
      bespoke: "Özel Tasarım",
      services: "Hizmetler",
      investment: "Yatırım Altını",
      brilliants: "Brilliants",
      about: "Hakkımızda",
      boutiques: "Butikler",
      contact: "İletişim",
      book: "Servis Randevusu",
    },
    hero: {
      eyebrow: "1989'dan beri",
      lead: "Kalıcı değere sahip mücevherler.",
      sub: "1989'dan beri el yapımı mücevher, zamansız tasarım ve kişisel hizmet.",
      cta1: "Koleksiyonu Keşfedin",
      cta2: "Özel Randevu Alın",
    },
    strip: {
      since: "1989'dan beri",
      handcrafted: "El İşçiliği",
      bespoke: "Özel Tasarım Mücevher",
      service: "Profesyonel Hizmet",
      hotels: "Alba Otelleri",
    },
    collections: {
      eyebrow: "Koleksiyonlar",
      title: "Tek bir felsefenin altı ifadesi",
      sub: "Her koleksiyon, zamansız incilerden eşsiz özel tasarımlara kadar aynı el işçiliği standardını taşır.",
    },
    materials: {
      eyebrow: "Materyaller & Taşlar",
      title: "Kalıcı kaliteleri için seçildi",
    },
    services: {
      eyebrow: "Jewellery & Watch Service",
      title: "Complete care, from cleaning to bespoke redesign",
      sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    },
    about: {
      eyebrow: "Our Philosophy",
      title: "Things of lasting value in changing times",
      lead: "There are things that retain their value in times of change.",
      signoff: "Wishing you much pleasure browsing,",
      role: "General Manager",
    },
    boutiques: {
      eyebrow: "Our Boutiques",
      title: "Visit us at Alba Hotels",
      servicesLine: "Sales · Service · Consultation",
    },
    contact: {
      eyebrow: "Contact",
      title: "We would be glad to hear from you",
      team: "Our Team",
      locations: "Our Locations",
      call: "Call",
      email: "Email",
    },
    footer: {
      tagline: "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since: "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
  sk: {
    nav: {
      home: "Domov",
      collections: "Kolekcie",
      pearls: "Perly",
      wedding: "Obrúčky",
      diamonds: "Diamanty",
      design: "Dizajn",
      bespoke: "Zákazková výroba",
      services: "Servis",
      investment: "Investičné zlato",
      brilliants: "Brilliants",
      about: "O nás",
      boutiques: "Butiky",
      contact: "Kontakt",
      book: "Objednať servis",
    },
    hero: {
      eyebrow: "Od roku 1989",
      lead: "Šperky s trvalou hodnotou.",
      sub: "Ručne vyrábané šperky, nadčasový dizajn a osobný prístup od roku 1989.",
      cta1: "Objaviť kolekciu",
      cta2: "Rezervovať súkromný termín",
    },
    strip: {
      since: "Od roku 1989",
      handcrafted: "Ručná práca",
      bespoke: "Zákazková výroba",
      service: "Profesionálny servis",
      hotels: "Hotely Alba",
    },
    collections: {
      eyebrow: "Kolekcie",
      title: "Šesť výrazov jednej filozofie",
      sub: "Každá kolekcia nesie rovnaký remeselný štandard – od nadčasových perál až po jedinečné kúsky na mieru.",
    },
    materials: {
      eyebrow: "Materiály a kamene",
      title: "Vybrané pre svoju trvalú kvalitu",
    },
    services: {
      eyebrow: "Jewellery & Watch Service",
      title: "Complete care, from cleaning to bespoke redesign",
      sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    },
    about: {
      eyebrow: "Our Philosophy",
      title: "Things of lasting value in changing times",
      lead: "There are things that retain their value in times of change.",
      signoff: "Wishing you much pleasure browsing,",
      role: "General Manager",
    },
    boutiques: {
      eyebrow: "Our Boutiques",
      title: "Visit us at Alba Hotels",
      servicesLine: "Sales · Service · Consultation",
    },
    contact: {
      eyebrow: "Contact",
      title: "We would be glad to hear from you",
      team: "Our Team",
      locations: "Our Locations",
      call: "Call",
      email: "Email",
    },
    footer: {
      tagline: "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since: "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
  cs: {
    nav: {
      home: "Domů",
      collections: "Kolekce",
      pearls: "Perly",
      wedding: "Snubní prsteny",
      diamonds: "Diamanty",
      design: "Design",
      bespoke: "Zakázková výroba",
      services: "Servis",
      investment: "Investiční zlato",
      brilliants: "Brilliants",
      about: "O nás",
      boutiques: "Butiky",
      contact: "Kontakt",
      book: "Objednat servis",
    },
    hero: {
      eyebrow: "Od roku 1989",
      lead: "Šperky s trvalou hodnotou.",
      sub: "Ručně vyráběné šperky, nadčasový design a osobní přístup od roku 1989.",
      cta1: "Objevit kolekci",
      cta2: "Rezervovat soukromý termín",
    },
    strip: {
      since: "Od roku 1989",
      handcrafted: "Ruční práce",
      bespoke: "Zakázková výroba",
      service: "Profesionální servis",
      hotels: "Hotely Alba",
    },
    collections: {
      eyebrow: "Kolekce",
      title: "Šest výrazů jedné filozofie",
      sub: "Každá kolekce nese stejný řemeslný standard – od nadčasových perel až po jedinečné kusy na míru.",
    },
    materials: {
      eyebrow: "Materiály a kameny",
      title: "Vybrané pro svou trvalou kvalitu",
    },
    services: {
      eyebrow: "Jewellery & Watch Service",
      title: "Complete care, from cleaning to bespoke redesign",
      sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    },
    about: {
      eyebrow: "Our Philosophy",
      title: "Things of lasting value in changing times",
      lead: "There are things that retain their value in times of change.",
      signoff: "Wishing you much pleasure browsing,",
      role: "General Manager",
    },
    boutiques: {
      eyebrow: "Our Boutiques",
      title: "Visit us at Alba Hotels",
      servicesLine: "Sales · Service · Consultation",
    },
    contact: {
      eyebrow: "Contact",
      title: "We would be glad to hear from you",
      team: "Our Team",
      locations: "Our Locations",
      call: "Call",
      email: "Email",
    },
    footer: {
      tagline: "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since: "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
  hu: {
    nav: {
      home: "Kezdőlap",
      collections: "Kollekciók",
      pearls: "Gyöngyök",
      wedding: "Karikagyűrűk",
      diamonds: "Gyémántok",
      design: "Design",
      bespoke: "Egyedi készítés",
      services: "Szolgáltatások",
      investment: "Befektetési arany",
      brilliants: "Brilliants",
      about: "Rólunk",
      boutiques: "Butikok",
      contact: "Kapcsolat",
      book: "Szolgáltatás foglalása",
    },
    hero: {
      eyebrow: "1989 óta",
      lead: "Tartós értékű ékszerek.",
      sub: "Kézzel készített ékszerek, időtlen dizájn és személyre szabott szolgáltatás 1989 óta.",
      cta1: "Kollekció felfedezése",
      cta2: "Privát időpont foglalása",
    },
    strip: {
      since: "1989 óta",
      handcrafted: "Kézi munka",
      bespoke: "Egyedi ékszerek",
      service: "Professzionális szolgáltatás",
      hotels: "Alba Hotelek",
    },
    collections: {
      eyebrow: "Kollekciók",
      title: "Egy filozófia hat kifejezési formája",
      sub: "Minden kollekció ugyanazt a kézműves igényességet képviseli – az időtlen gyöngyöktől az egyedi darabokig.",
    },
    materials: {
      eyebrow: "Anyagok és kövek",
      title: "Tartós minőségük miatt választva",
    },
    services: {
      eyebrow: "Jewellery & Watch Service",
      title: "Complete care, from cleaning to bespoke redesign",
      sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    },
    about: {
      eyebrow: "Our Philosophy",
      title: "Things of lasting value in changing times",
      lead: "There are things that retain their value in times of change.",
      signoff: "Wishing you much pleasure browsing,",
      role: "General Manager",
    },
    boutiques: {
      eyebrow: "Our Boutiques",
      title: "Visit us at Alba Hotels",
      servicesLine: "Sales · Service · Consultation",
    },
    contact: {
      eyebrow: "Contact",
      title: "We would be glad to hear from you",
      team: "Our Team",
      locations: "Our Locations",
      call: "Call",
      email: "Email",
    },
    footer: {
      tagline: "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since: "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
  pl: {
    nav: {
      home: "Strona główna",
      collections: "Kolekcje",
      pearls: "Perły",
      wedding: "Obrączki",
      diamonds: "Diamenty",
      design: "Design",
      bespoke: "Na zamówienie",
      services: "Serwis",
      investment: "Złoto inwestycyjne",
      brilliants: "Brilliants",
      about: "O nas",
      boutiques: "Butiki",
      contact: "Kontakt",
      book: "Zarezerwuj serwis",
    },
    hero: {
      eyebrow: "Od 1989 roku",
      lead: "Biżuteria o trwałej wartości.",
      sub: "Ręcznie wykonana biżuteria, ponadczasowy design i osobiste podejście od 1989 roku.",
      cta1: "Odkryj kolekcję",
      cta2: "Zarezerwuj prywatne spotkanie",
    },
    strip: {
      since: "Od 1989 roku",
      handcrafted: "Ręczna robota",
      bespoke: "Biżuteria na zamówienie",
      service: "Profesjonalny serwis",
      hotels: "Hotele Alba",
    },
    collections: {
      eyebrow: "Kolekcje",
      title: "Sześć odsłon jednej filozofii",
      sub: "Każda kolekcja niesie ten sam rzemieślniczy standard – od ponadczasowych pereł po unikatowe egzemplarze na zamówienie.",
    },
    materials: {
      eyebrow: "Materiały i kamienie",
      title: "Wybrane ze względu na trwałą jakość",
    },
    services: {
      eyebrow: "Jewellery & Watch Service",
      title: "Complete care, from cleaning to bespoke redesign",
      sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    },
    about: {
      eyebrow: "Our Philosophy",
      title: "Things of lasting value in changing times",
      lead: "There are things that retain their value in times of change.",
      signoff: "Wishing you much pleasure browsing,",
      role: "General Manager",
    },
    boutiques: {
      eyebrow: "Our Boutiques",
      title: "Visit us at Alba Hotels",
      servicesLine: "Sales · Service · Consultation",
    },
    contact: {
      eyebrow: "Contact",
      title: "We would be glad to hear from you",
      team: "Our Team",
      locations: "Our Locations",
      call: "Call",
      email: "Email",
    },
    footer: {
      tagline: "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since: "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
};

export function getDictionary(locale: Locale = LOCALE): Dict {
  return dictionaries[locale];
}
