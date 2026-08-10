// Main translations for the site chrome, navigation and core section intros.
// Supported languages: DE, EN, TR, SK, CS, HU, PL, RU, NL, DA, FI, SV, FR, IT, ES.

export type Locale =
  | "de"
  | "en"
  | "tr"
  | "sk"
  | "cs"
  | "hu"
  | "pl"
  | "ru"
  | "nl"
  | "da"
  | "fi"
  | "sv"
  | "fr"
  | "it"
  | "es";

export const LOCALES: Locale[] = [
  "de",
  "en",
  "tr",
  "sk",
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
    investmentMenu: string;
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
      investmentMenu: "Investment",
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
      tagline:
        "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since:
        "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
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
      investmentMenu: "Investment",
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
      tagline:
        "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since:
        "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
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
      investmentMenu: "Yatırım",
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
      tagline:
        "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since:
        "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
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
      investmentMenu: "Investície",
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
      tagline:
        "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since:
        "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
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
      investmentMenu: "Investice",
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
      tagline:
        "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since:
        "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
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
      investmentMenu: "Befektetés",
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
      tagline:
        "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since:
        "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
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
      investmentMenu: "Inwestycje",
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
      tagline:
        "Jewellery of lasting value, handcrafted with knowledge, experience and trust.",
      nav: "Navigate",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookie Settings",
      contact: "Contact",
      rights: "All rights reserved.",
      since:
        "Since 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      collections: "Коллекции",
      pearls: "Жемчуг",
      wedding: "Обручальные кольца",
      diamonds: "Бриллианты",
      design: "Дизайн",
      bespoke: "На заказ",
      services: "Сервис",
      investment: "Инвестиционное золото",
      investmentMenu: "Инвестиции",
      brilliants: "Бриллианты",
      about: "О нас",
      boutiques: "Бутики",
      contact: "Контакты",
      book: "Записаться на сервис",
    },
    hero: {
      eyebrow: "С 1989 года",
      lead: "Украшения непреходящей ценности.",
      sub: "Ювелирные изделия ручной работы, вневременной дизайн и персональный сервис с 1989 года.",
      cta1: "Открыть коллекцию",
      cta2: "Записаться на личную встречу",
    },
    strip: {
      since: "С 1989 года",
      handcrafted: "Ручная работа",
      bespoke: "Украшения на заказ",
      service: "Профессиональный сервис",
      hotels: "Отели Alba",
    },
    collections: {
      eyebrow: "Коллекции",
      title: "Шесть воплощений одной философии",
      sub: "Каждая коллекция отражает единый стандарт мастерства — от вечной классики жемчуга до уникальных изделий на заказ.",
    },
    materials: {
      eyebrow: "Материалы и камни",
      title: "Выбраны за их непреходящее качество",
    },
    services: {
      eyebrow: "Сервис украшений и часов",
      title: "Полный уход — от чистки до индивидуального редизайна",
      sub: "Наша мастерская предлагает полный спектр услуг. Окончательная стоимость всегда подтверждается после личного осмотра.",
    },
    about: {
      eyebrow: "Наша философия",
      title: "Непреходящие ценности в меняющемся мире",
      lead: "Есть вещи, которые сохраняют свою ценность даже во времена перемен.",
      signoff: "Желаем вам приятного знакомства с нашей коллекцией,",
      role: "Генеральный директор",
    },
    boutiques: {
      eyebrow: "Наши бутики",
      title: "Посетите нас в отелях Alba",
      servicesLine: "Продажа · Сервис · Консультации",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Мы будем рады вашему обращению",
      team: "Наша команда",
      locations: "Наши адреса",
      call: "Позвонить",
      email: "E-mail",
    },
    footer: {
      tagline:
        "Украшения непреходящей ценности, созданные вручную с мастерством, опытом и доверием.",
      nav: "Навигация",
      legal: "Правовая информация",
      privacy: "Конфиденциальность",
      terms: "Условия",
      cookies: "Настройки cookies",
      contact: "Контакты",
      rights: "Все права защищены.",
      since:
        "С 1989 года — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  nl: {
    nav: {
      home: "Home",
      collections: "Collecties",
      pearls: "Parels",
      wedding: "Trouwringen",
      diamonds: "Diamanten",
      design: "Design",
      bespoke: "Maatwerk",
      services: "Service",
      investment: "Beleggingsgoud",
      investmentMenu: "Investeringen",
      brilliants: "Briljanten",
      about: "Over ons",
      boutiques: "Boetieks",
      contact: "Contact",
      book: "Service boeken",
    },
    hero: {
      eyebrow: "Sinds 1989",
      lead: "Sieraden van blijvende waarde.",
      sub: "Handgemaakte sieraden, tijdloos design en persoonlijke service sinds 1989.",
      cta1: "Ontdek de collectie",
      cta2: "Boek een privéafspraak",
    },
    strip: {
      since: "Sinds 1989",
      handcrafted: "Handgemaakt",
      bespoke: "Sieraden op maat",
      service: "Professionele service",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Collecties",
      title: "Zes uitingen van één filosofie",
      sub: "Elke collectie volgt dezelfde ambachtelijke standaard, van tijdloze parels tot unieke sieraden op maat.",
    },
    materials: {
      eyebrow: "Materialen & stenen",
      title: "Geselecteerd om hun blijvende kwaliteit",
    },
    services: {
      eyebrow: "Sieraden- & horlogeservice",
      title: "Volledige verzorging, van reiniging tot maatwerk en redesign",
      sub: "Ons atelier biedt een volledig aanbod aan diensten. De definitieve prijs wordt altijd bevestigd na een persoonlijke inspectie.",
    },
    about: {
      eyebrow: "Onze filosofie",
      title: "Blijvende waarde in veranderende tijden",
      lead: "Er zijn dingen die hun waarde behouden, ook wanneer tijden veranderen.",
      signoff: "Wij wensen u veel plezier bij het ontdekken,",
      role: "Algemeen directeur",
    },
    boutiques: {
      eyebrow: "Onze boetieks",
      title: "Bezoek ons bij Alba Hotels",
      servicesLine: "Verkoop · Service · Advies",
    },
    contact: {
      eyebrow: "Contact",
      title: "We horen graag van u",
      team: "Ons team",
      locations: "Onze locaties",
      call: "Bellen",
      email: "E-mail",
    },
    footer: {
      tagline:
        "Sieraden van blijvende waarde, met de hand vervaardigd met kennis, ervaring en vertrouwen.",
      nav: "Navigatie",
      legal: "Juridisch",
      privacy: "Privacy",
      terms: "Voorwaarden",
      cookies: "Cookie-instellingen",
      contact: "Contact",
      rights: "Alle rechten voorbehouden.",
      since:
        "Sinds 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  da: {
    nav: {
      home: "Forside",
      collections: "Kollektioner",
      pearls: "Perler",
      wedding: "Vielsesringe",
      diamonds: "Diamanter",
      design: "Design",
      bespoke: "Skræddersyet",
      services: "Service",
      investment: "Investeringsguld",
      investmentMenu: "Investering",
      brilliants: "Brillanter",
      about: "Om os",
      boutiques: "Boutiques",
      contact: "Kontakt",
      book: "Book service",
    },
    hero: {
      eyebrow: "Siden 1989",
      lead: "Smykker af varig værdi.",
      sub: "Håndlavede smykker, tidløst design og personlig service siden 1989.",
      cta1: "Udforsk kollektionen",
      cta2: "Book en privat aftale",
    },
    strip: {
      since: "Siden 1989",
      handcrafted: "Håndlavet",
      bespoke: "Skræddersyede smykker",
      service: "Professionel service",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Kollektioner",
      title: "Seks udtryk for én filosofi",
      sub: "Hver kollektion følger den samme håndværksmæssige standard – fra tidløse perler til unikke, skræddersyede smykker.",
    },
    materials: {
      eyebrow: "Materialer & sten",
      title: "Udvalgt for deres varige kvalitet",
    },
    services: {
      eyebrow: "Smykke- & urservice",
      title: "Komplet pleje, fra rengøring til individuelt redesign",
      sub: "Vores værksted tilbyder et komplet udvalg af services. Den endelige pris bekræftes altid efter en personlig vurdering.",
    },
    about: {
      eyebrow: "Vores filosofi",
      title: "Varige værdier i en verden i forandring",
      lead: "Der findes ting, som bevarer deres værdi, selv når tiderne ændrer sig.",
      signoff: "Vi ønsker dig god fornøjelse med at udforske vores univers,",
      role: "Administrerende direktør",
    },
    boutiques: {
      eyebrow: "Vores boutiques",
      title: "Besøg os på Alba Hotels",
      servicesLine: "Salg · Service · Rådgivning",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Vi glæder os til at høre fra dig",
      team: "Vores team",
      locations: "Vores lokationer",
      call: "Ring",
      email: "E-mail",
    },
    footer: {
      tagline:
        "Smykker af varig værdi, håndlavet med viden, erfaring og tillid.",
      nav: "Navigation",
      legal: "Juridisk",
      privacy: "Privatliv",
      terms: "Vilkår",
      cookies: "Cookieindstillinger",
      contact: "Kontakt",
      rights: "Alle rettigheder forbeholdes.",
      since:
        "Siden 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  fi: {
    nav: {
      home: "Etusivu",
      collections: "Mallistot",
      pearls: "Helmet",
      wedding: "Vihkisormukset",
      diamonds: "Timantit",
      design: "Design",
      bespoke: "Mittatilaus",
      services: "Palvelut",
      investment: "Sijoituskulta",
      investmentMenu: "Sijoittaminen",
      brilliants: "Briljantit",
      about: "Meistä",
      boutiques: "Myymälät",
      contact: "Yhteystiedot",
      book: "Varaa huolto",
    },
    hero: {
      eyebrow: "Vuodesta 1989",
      lead: "Koruja, joilla on pysyvää arvoa.",
      sub: "Käsintehtyjä koruja, ajatonta muotoilua ja henkilökohtaista palvelua vuodesta 1989.",
      cta1: "Tutustu mallistoon",
      cta2: "Varaa yksityinen tapaaminen",
    },
    strip: {
      since: "Vuodesta 1989",
      handcrafted: "Käsintehty",
      bespoke: "Mittatilauskorut",
      service: "Ammattitaitoinen palvelu",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Mallistot",
      title: "Kuusi ilmaisua yhdestä filosofiasta",
      sub: "Jokainen mallisto noudattaa samaa käsityötaidon tasoa – ajattomista helmistä ainutlaatuisiin mittatilauskoruihin.",
    },
    materials: {
      eyebrow: "Materiaalit & kivet",
      title: "Valittu kestävän laadun perusteella",
    },
    services: {
      eyebrow: "Korujen & kellojen huolto",
      title: "Täydellinen huolenpito puhdistuksesta yksilölliseen uudelleensuunnitteluun",
      sub: "Verstaamme tarjoaa kattavan valikoiman palveluita. Lopullinen hinta vahvistetaan aina henkilökohtaisen tarkastuksen jälkeen.",
    },
    about: {
      eyebrow: "Filosofiamme",
      title: "Pysyviä arvoja muuttuvina aikoina",
      lead: "On asioita, jotka säilyttävät arvonsa myös aikojen muuttuessa.",
      signoff: "Toivotamme miellyttäviä hetkiä valikoimaamme tutustuessa,",
      role: "Toimitusjohtaja",
    },
    boutiques: {
      eyebrow: "Myymälämme",
      title: "Vieraile luonamme Alba Hotels -hotelleissa",
      servicesLine: "Myynti · Huolto · Neuvonta",
    },
    contact: {
      eyebrow: "Yhteystiedot",
      title: "Kuulemme mielellämme sinusta",
      team: "Tiimimme",
      locations: "Toimipisteemme",
      call: "Soita",
      email: "Sähköposti",
    },
    footer: {
      tagline:
        "Koruja, joilla on pysyvää arvoa – käsintehtynä tiedolla, kokemuksella ja luottamuksella.",
      nav: "Navigointi",
      legal: "Lakiasiat",
      privacy: "Tietosuoja",
      terms: "Ehdot",
      cookies: "Evästeasetukset",
      contact: "Yhteystiedot",
      rights: "Kaikki oikeudet pidätetään.",
      since:
        "Vuodesta 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  sv: {
    nav: {
      home: "Hem",
      collections: "Kollektioner",
      pearls: "Pärlor",
      wedding: "Vigselringar",
      diamonds: "Diamanter",
      design: "Design",
      bespoke: "Skräddarsytt",
      services: "Service",
      investment: "Investeringsguld",
      investmentMenu: "Investering",
      brilliants: "Briljanter",
      about: "Om oss",
      boutiques: "Butiker",
      contact: "Kontakt",
      book: "Boka service",
    },
    hero: {
      eyebrow: "Sedan 1989",
      lead: "Smycken med bestående värde.",
      sub: "Handgjorda smycken, tidlös design och personlig service sedan 1989.",
      cta1: "Utforska kollektionen",
      cta2: "Boka ett privat möte",
    },
    strip: {
      since: "Sedan 1989",
      handcrafted: "Handgjort",
      bespoke: "Skräddarsydda smycken",
      service: "Professionell service",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Kollektioner",
      title: "Sex uttryck för en och samma filosofi",
      sub: "Varje kollektion följer samma hantverksmässiga standard – från tidlösa pärlor till unika skräddarsydda smycken.",
    },
    materials: {
      eyebrow: "Material & stenar",
      title: "Utvalda för sin bestående kvalitet",
    },
    services: {
      eyebrow: "Smyckes- & klockservice",
      title: "Komplett omsorg, från rengöring till skräddarsydd redesign",
      sub: "Vår verkstad erbjuder ett komplett utbud av tjänster. Slutpriset bekräftas alltid efter en personlig inspektion.",
    },
    about: {
      eyebrow: "Vår filosofi",
      title: "Bestående värden i föränderliga tider",
      lead: "Det finns saker som behåller sitt värde även när tiderna förändras.",
      signoff: "Vi önskar dig mycket nöje när du utforskar vårt utbud,",
      role: "Verkställande direktör",
    },
    boutiques: {
      eyebrow: "Våra butiker",
      title: "Besök oss på Alba Hotels",
      servicesLine: "Försäljning · Service · Rådgivning",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Vi ser fram emot att höra från dig",
      team: "Vårt team",
      locations: "Våra platser",
      call: "Ring",
      email: "E-post",
    },
    footer: {
      tagline:
        "Smycken med bestående värde, handgjorda med kunskap, erfarenhet och förtroende.",
      nav: "Navigering",
      legal: "Juridiskt",
      privacy: "Integritet",
      terms: "Villkor",
      cookies: "Cookieinställningar",
      contact: "Kontakt",
      rights: "Alla rättigheter förbehållna.",
      since:
        "Sedan 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      collections: "Collections",
      pearls: "Perles",
      wedding: "Alliances",
      diamonds: "Diamants",
      design: "Design",
      bespoke: "Sur mesure",
      services: "Services",
      investment: "Or d’investissement",
      investmentMenu: "Investissement",
      brilliants: "Brillants",
      about: "À propos",
      boutiques: "Boutiques",
      contact: "Contact",
      book: "Réserver un service",
    },
    hero: {
      eyebrow: "Depuis 1989",
      lead: "Des bijoux d’une valeur durable.",
      sub: "Des bijoux faits main, un design intemporel et un service personnalisé depuis 1989.",
      cta1: "Découvrir la collection",
      cta2: "Réserver un rendez-vous privé",
    },
    strip: {
      since: "Depuis 1989",
      handcrafted: "Fait main",
      bespoke: "Bijoux sur mesure",
      service: "Service professionnel",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Collections",
      title: "Six expressions d’une même philosophie",
      sub: "Chaque collection perpétue le même niveau d’exigence artisanale, des perles intemporelles aux pièces uniques réalisées sur mesure.",
    },
    materials: {
      eyebrow: "Matériaux & pierres",
      title: "Sélectionnés pour leur qualité durable",
    },
    services: {
      eyebrow: "Service bijoux & montres",
      title: "Un soin complet, du nettoyage à la transformation sur mesure",
      sub: "Notre atelier propose une gamme complète de services. Le prix définitif est toujours confirmé après une inspection en personne.",
    },
    about: {
      eyebrow: "Notre philosophie",
      title: "Des valeurs durables dans un monde en mouvement",
      lead: "Certaines choses conservent leur valeur, même lorsque les temps changent.",
      signoff: "Nous vous souhaitons une agréable découverte,",
      role: "Directeur général",
    },
    boutiques: {
      eyebrow: "Nos boutiques",
      title: "Retrouvez-nous dans les Alba Hotels",
      servicesLine: "Vente · Service · Conseil",
    },
    contact: {
      eyebrow: "Contact",
      title: "Nous serons ravis de vous répondre",
      team: "Notre équipe",
      locations: "Nos adresses",
      call: "Appeler",
      email: "E-mail",
    },
    footer: {
      tagline:
        "Des bijoux d’une valeur durable, façonnés à la main avec savoir-faire, expérience et confiance.",
      nav: "Navigation",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      terms: "Conditions",
      cookies: "Paramètres des cookies",
      contact: "Contact",
      rights: "Tous droits réservés.",
      since:
        "Depuis 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  it: {
    nav: {
      home: "Home",
      collections: "Collezioni",
      pearls: "Perle",
      wedding: "Fedi nuziali",
      diamonds: "Diamanti",
      design: "Design",
      bespoke: "Su misura",
      services: "Servizi",
      investment: "Oro da investimento",
      investmentMenu: "Investimento",
      brilliants: "Brillanti",
      about: "Chi siamo",
      boutiques: "Boutique",
      contact: "Contatti",
      book: "Prenota assistenza",
    },
    hero: {
      eyebrow: "Dal 1989",
      lead: "Gioielli dal valore duraturo.",
      sub: "Gioielli realizzati a mano, design senza tempo e servizio personale dal 1989.",
      cta1: "Scopri la collezione",
      cta2: "Prenota un appuntamento privato",
    },
    strip: {
      since: "Dal 1989",
      handcrafted: "Fatto a mano",
      bespoke: "Gioielli su misura",
      service: "Servizio professionale",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Collezioni",
      title: "Sei espressioni di un’unica filosofia",
      sub: "Ogni collezione segue lo stesso standard artigianale, dalle perle senza tempo ai pezzi unici realizzati su misura.",
    },
    materials: {
      eyebrow: "Materiali & pietre",
      title: "Scelti per la loro qualità duratura",
    },
    services: {
      eyebrow: "Assistenza gioielli & orologi",
      title: "Cura completa, dalla pulizia al redesign su misura",
      sub: "Il nostro laboratorio offre una gamma completa di servizi. Il prezzo finale viene sempre confermato dopo un’ispezione di persona.",
    },
    about: {
      eyebrow: "La nostra filosofia",
      title: "Valori duraturi in tempi che cambiano",
      lead: "Ci sono cose che conservano il proprio valore anche quando i tempi cambiano.",
      signoff: "Vi auguriamo una piacevole scoperta,",
      role: "Direttore generale",
    },
    boutiques: {
      eyebrow: "Le nostre boutique",
      title: "Venite a trovarci negli Alba Hotels",
      servicesLine: "Vendita · Assistenza · Consulenza",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Saremo lieti di sentirvi",
      team: "Il nostro team",
      locations: "Le nostre sedi",
      call: "Chiama",
      email: "E-mail",
    },
    footer: {
      tagline:
        "Gioielli dal valore duraturo, realizzati a mano con competenza, esperienza e fiducia.",
      nav: "Navigazione",
      legal: "Informazioni legali",
      privacy: "Privacy",
      terms: "Termini",
      cookies: "Impostazioni cookie",
      contact: "Contatti",
      rights: "Tutti i diritti riservati.",
      since:
        "Dal 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      collections: "Colecciones",
      pearls: "Perlas",
      wedding: "Alianzas",
      diamonds: "Diamantes",
      design: "Diseño",
      bespoke: "A medida",
      services: "Servicios",
      investment: "Oro de inversión",
      investmentMenu: "Inversión",
      brilliants: "Brillantes",
      about: "Nosotros",
      boutiques: "Boutiques",
      contact: "Contacto",
      book: "Reservar servicio",
    },
    hero: {
      eyebrow: "Desde 1989",
      lead: "Joyas de valor duradero.",
      sub: "Joyas hechas a mano, diseño atemporal y servicio personalizado desde 1989.",
      cta1: "Descubrir la colección",
      cta2: "Reservar una cita privada",
    },
    strip: {
      since: "Desde 1989",
      handcrafted: "Hecho a mano",
      bespoke: "Joyería a medida",
      service: "Servicio profesional",
      hotels: "Alba Hotels",
    },
    collections: {
      eyebrow: "Colecciones",
      title: "Seis expresiones de una misma filosofía",
      sub: "Cada colección mantiene el mismo estándar artesanal, desde perlas atemporales hasta piezas únicas creadas a medida.",
    },
    materials: {
      eyebrow: "Materiales & piedras",
      title: "Seleccionados por su calidad duradera",
    },
    services: {
      eyebrow: "Servicio de joyería & relojería",
      title: "Cuidado completo, desde la limpieza hasta el rediseño a medida",
      sub: "Nuestro taller ofrece una gama completa de servicios. El precio final siempre se confirma después de una inspección presencial.",
    },
    about: {
      eyebrow: "Nuestra filosofía",
      title: "Valores duraderos en tiempos de cambio",
      lead: "Hay cosas que conservan su valor incluso cuando los tiempos cambian.",
      signoff: "Esperamos que disfrute descubriendo nuestras colecciones,",
      role: "Director general",
    },
    boutiques: {
      eyebrow: "Nuestras boutiques",
      title: "Visítenos en los Alba Hotels",
      servicesLine: "Venta · Servicio · Asesoramiento",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Estaremos encantados de atenderle",
      team: "Nuestro equipo",
      locations: "Nuestras ubicaciones",
      call: "Llamar",
      email: "E-mail",
    },
    footer: {
      tagline:
        "Joyas de valor duradero, elaboradas a mano con conocimiento, experiencia y confianza.",
      nav: "Navegación",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Configuración de cookies",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      since:
        "Desde 1989 — Hotel Alba Resort · Hotel Alba Royal · Hotel Alba Queen",
    },
  },
};

export function getDictionary(locale: Locale = LOCALE): Dict {
  return dictionaries[locale];
}