"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SERVICE_GROUPS } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const serviceContacts = {
  victor: {
    name: "Zafer (Victor)",
    phone: "905325672777",
    email: "albalidya@hotmail.com",
  },
  vierka: {
    name: "Vierka",
    phone: "905378278599",
    email: "vierakocaker@hotmail.com",
  },
};

type ContactKey = keyof typeof serviceContacts;

type SelectedService = {
  id: string;
  groupKey: string;
  itemIndex: number;
};

type ServiceTranslation = {
  title: string;
  note: string;
  items: string[];
};

const SERVICE_TRANSLATIONS: Record<
  Locale,
  Record<string, ServiceTranslation>
> = {
  en: {
    care: {
      title: "Jewellery Care",
      note: "Jewellery cleaned and polished free of charge.",
      items: ["Cleaning", "Polishing", "Inspection", "Maintenance"],
    },
    repairs: {
      title: "Repairs & Adjustments",
      note: "Ring resizing and other adjustments.",
      items: [
        "Ring resizing",
        "Chain shortening",
        "Chain extension",
        "Bracelet adjustment",
        "Clasp replacement",
        "Repair of damaged jewellery",
      ],
    },
    stones: {
      title: "Stone Services",
      note: "Setting of diamonds and gemstones of every kind.",
      items: [
        "Diamond setting",
        "Gemstone setting",
        "Replacement of loose or missing stones",
        "Inspection of settings",
      ],
    },
    bespoke: {
      title: "Bespoke & Redesign",
      note: "Bespoke pieces made to a model or reference.",
      items: [
        "New jewellery according to a model",
        "New jewellery according to a reference",
        "Redesign of inherited jewellery",
        "Modernisation of older jewellery",
        "Reuse of stones and precious metals",
      ],
    },
    watch: {
      title: "Watch Service",
      note: "Watch repairs of every kind.",
      items: [
        "Watch repairs",
        "Battery replacement",
        "Strap or bracelet adjustment",
      ],
    },
    gold: {
      title: "Gold Exchange",
      note: "Old and unwanted gold taken in part-exchange.",
      items: [
        "Old gold purchase",
        "Part-exchange of unwanted gold",
        "Use of customer gold for a new bespoke piece",
      ],
    },
  },

  de: {
    care: {
      title: "Schmuckpflege",
      note: "Reinigung und Politur Ihres Schmucks kostenlos.",
      items: ["Reinigung", "Politur", "Kontrolle", "Pflege"],
    },
    repairs: {
      title: "Reparaturen & Anpassungen",
      note: "Ringgrößenänderungen und weitere Anpassungen.",
      items: [
        "Ringgrößenänderung",
        "Kette kürzen",
        "Kette verlängern",
        "Armband anpassen",
        "Verschluss ersetzen",
        "Reparatur beschädigter Schmuckstücke",
      ],
    },
    stones: {
      title: "Steinservice",
      note: "Fassen von Diamanten und Edelsteinen aller Art.",
      items: [
        "Diamanten fassen",
        "Edelsteine fassen",
        "Lose oder fehlende Steine ersetzen",
        "Fassungen kontrollieren",
      ],
    },
    bespoke: {
      title: "Maßanfertigung & Redesign",
      note: "Individuelle Schmuckstücke nach Vorlage oder Referenz.",
      items: [
        "Neues Schmuckstück nach Modell",
        "Neues Schmuckstück nach Referenz",
        "Redesign von geerbtem Schmuck",
        "Modernisierung älterer Schmuckstücke",
        "Wiederverwendung von Steinen und Edelmetallen",
      ],
    },
    watch: {
      title: "Uhrenservice",
      note: "Uhrenreparaturen aller Art.",
      items: [
        "Uhrenreparatur",
        "Batteriewechsel",
        "Armband- oder Bandanpassung",
      ],
    },
    gold: {
      title: "Goldankauf & Tausch",
      note: "Altes oder nicht mehr gewünschtes Gold wird angerechnet.",
      items: [
        "Ankauf von Altgold",
        "Inzahlungnahme von nicht gewünschtem Gold",
        "Verwendung von Kundengold für eine neue Maßanfertigung",
      ],
    },
  },

  tr: {
    care: {
      title: "Mücevher Bakımı",
      note: "Mücevher temizliği ve parlatma ücretsizdir.",
      items: ["Temizleme", "Parlatma", "Kontrol", "Bakım"],
    },
    repairs: {
      title: "Onarım & Ayarlamalar",
      note: "Yüzük ölçüsü ve diğer ayarlamalar.",
      items: [
        "Yüzük ölçüsü ayarlama",
        "Zincir kısaltma",
        "Zincir uzatma",
        "Bileklik ayarlama",
        "Kilit değiştirme",
        "Hasarlı mücevher onarımı",
      ],
    },
    stones: {
      title: "Taş Hizmetleri",
      note: "Her türlü elmas ve değerli taş mıhlama hizmeti.",
      items: [
        "Elmas mıhlama",
        "Değerli taş mıhlama",
        "Gevşek veya eksik taşların değiştirilmesi",
        "Taş yuvalarının kontrolü",
      ],
    },
    bespoke: {
      title: "Özel Tasarım & Yeniden Tasarım",
      note: "Model veya referansa göre özel üretim.",
      items: [
        "Modele göre yeni mücevher",
        "Referansa göre yeni mücevher",
        "Miras mücevherlerin yeniden tasarımı",
        "Eski mücevherlerin modernizasyonu",
        "Taşların ve değerli metallerin yeniden kullanımı",
      ],
    },
    watch: {
      title: "Saat Servisi",
      note: "Her türlü saat onarımı.",
      items: [
        "Saat onarımı",
        "Pil değişimi",
        "Kayış veya bilezik ayarlama",
      ],
    },
    gold: {
      title: "Altın Değişimi",
      note: "Eski veya kullanılmayan altınlar takasta değerlendirilebilir.",
      items: [
        "Eski altın alımı",
        "Kullanılmayan altının takası",
        "Müşteri altınının yeni özel tasarımda kullanılması",
      ],
    },
  },

  sk: {
    care: {
      title: "Starostlivosť o šperky",
      note: "Čistenie a leštenie šperkov zdarma.",
      items: ["Čistenie", "Leštenie", "Kontrola", "Údržba"],
    },
    repairs: {
      title: "Opravy & úpravy",
      note: "Úprava veľkosti prsteňov a ďalšie úpravy.",
      items: [
        "Úprava veľkosti prsteňa",
        "Skrátenie retiazky",
        "Predĺženie retiazky",
        "Úprava náramku",
        "Výmena zapínania",
        "Oprava poškodeného šperku",
      ],
    },
    stones: {
      title: "Servis kameňov",
      note: "Osádzanie diamantov a drahých kameňov všetkých druhov.",
      items: [
        "Osadenie diamantu",
        "Osadenie drahého kameňa",
        "Výmena uvoľnených alebo chýbajúcich kameňov",
        "Kontrola osadenia kameňov",
      ],
    },
    bespoke: {
      title: "Výroba na mieru & redizajn",
      note: "Šperky na mieru podľa modelu alebo predlohy.",
      items: [
        "Nový šperk podľa modelu",
        "Nový šperk podľa predlohy",
        "Redizajn zdedeného šperku",
        "Modernizácia starších šperkov",
        "Opätovné použitie kameňov a drahých kovov",
      ],
    },
    watch: {
      title: "Servis hodiniek",
      note: "Opravy hodiniek všetkých druhov.",
      items: [
        "Oprava hodiniek",
        "Výmena batérie",
        "Úprava remienka alebo náramku",
      ],
    },
    gold: {
      title: "Výkup & výmena zlata",
      note: "Staré alebo nechcené zlato je možné použiť na protihodnotu.",
      items: [
        "Výkup starého zlata",
        "Výmena nechceného zlata",
        "Použitie zlata zákazníka na nový šperk na mieru",
      ],
    },
  },

  cs: {
    care: {
      title: "Péče o šperky",
      note: "Čištění a leštění šperků zdarma.",
      items: ["Čištění", "Leštění", "Kontrola", "Údržba"],
    },
    repairs: {
      title: "Opravy & úpravy",
      note: "Úprava velikosti prstenů a další úpravy.",
      items: [
        "Úprava velikosti prstenu",
        "Zkrácení řetízku",
        "Prodloužení řetízku",
        "Úprava náramku",
        "Výměna zapínání",
        "Oprava poškozeného šperku",
      ],
    },
    stones: {
      title: "Servis kamenů",
      note: "Osazování diamantů a drahých kamenů všech druhů.",
      items: [
        "Osazení diamantu",
        "Osazení drahého kamene",
        "Výměna uvolněných nebo chybějících kamenů",
        "Kontrola osazení kamenů",
      ],
    },
    bespoke: {
      title: "Výroba na míru & redesign",
      note: "Šperky na míru podle modelu nebo předlohy.",
      items: [
        "Nový šperk podle modelu",
        "Nový šperk podle předlohy",
        "Redesign zděděného šperku",
        "Modernizace starších šperků",
        "Opětovné použití kamenů a drahých kovů",
      ],
    },
    watch: {
      title: "Servis hodinek",
      note: "Opravy hodinek všech druhů.",
      items: [
        "Oprava hodinek",
        "Výměna baterie",
        "Úprava řemínku nebo náramku",
      ],
    },
    gold: {
      title: "Výkup & výměna zlata",
      note: "Staré nebo nechtěné zlato lze použít jako protihodnotu.",
      items: [
        "Výkup starého zlata",
        "Výměna nechtěného zlata",
        "Použití zlata zákazníka na nový šperk na míru",
      ],
    },
  },

  hu: {
    care: {
      title: "Ékszerápolás",
      note: "Az ékszerek tisztítása és polírozása díjmentes.",
      items: ["Tisztítás", "Polírozás", "Ellenőrzés", "Karbantartás"],
    },
    repairs: {
      title: "Javítás & igazítás",
      note: "Gyűrűméret-módosítás és egyéb igazítások.",
      items: [
        "Gyűrűméret módosítása",
        "Lánc rövidítése",
        "Lánc hosszabbítása",
        "Karkötő igazítása",
        "Kapocs cseréje",
        "Sérült ékszer javítása",
      ],
    },
    stones: {
      title: "Kőszerviz",
      note: "Gyémántok és drágakövek foglalása minden típusban.",
      items: [
        "Gyémánt foglalása",
        "Drágakő foglalása",
        "Laza vagy hiányzó kövek pótlása",
        "Foglalatok ellenőrzése",
      ],
    },
    bespoke: {
      title: "Egyedi készítés & újratervezés",
      note: "Egyedi ékszer készítése modell vagy referencia alapján.",
      items: [
        "Új ékszer modell alapján",
        "Új ékszer referencia alapján",
        "Örökölt ékszer újratervezése",
        "Régebbi ékszer modernizálása",
        "Kövek és nemesfémek újrafelhasználása",
      ],
    },
    watch: {
      title: "Óraszerviz",
      note: "Mindenféle órajavítás.",
      items: [
        "Órajavítás",
        "Elemcsere",
        "Szíj vagy fémcsat igazítása",
      ],
    },
    gold: {
      title: "Aranycsere",
      note: "Régi vagy nem kívánt arany beszámítása.",
      items: [
        "Régi arany felvásárlása",
        "Nem kívánt arany beszámítása",
        "Saját arany felhasználása új egyedi ékszerhez",
      ],
    },
  },

  pl: {
    care: {
      title: "Pielęgnacja biżuterii",
      note: "Czyszczenie i polerowanie biżuterii bez opłat.",
      items: ["Czyszczenie", "Polerowanie", "Kontrola", "Konserwacja"],
    },
    repairs: {
      title: "Naprawy & dopasowanie",
      note: "Zmiana rozmiaru pierścionków i inne dopasowania.",
      items: [
        "Zmiana rozmiaru pierścionka",
        "Skrócenie łańcuszka",
        "Przedłużenie łańcuszka",
        "Dopasowanie bransoletki",
        "Wymiana zapięcia",
        "Naprawa uszkodzonej biżuterii",
      ],
    },
    stones: {
      title: "Serwis kamieni",
      note: "Oprawianie diamentów i kamieni szlachetnych każdego rodzaju.",
      items: [
        "Oprawienie diamentu",
        "Oprawienie kamienia szlachetnego",
        "Wymiana luźnych lub brakujących kamieni",
        "Kontrola oprawy kamieni",
      ],
    },
    bespoke: {
      title: "Na zamówienie & redesign",
      note: "Biżuteria wykonywana na podstawie modelu lub wzoru.",
      items: [
        "Nowa biżuteria według modelu",
        "Nowa biżuteria według wzoru",
        "Redesign odziedziczonej biżuterii",
        "Modernizacja starszej biżuterii",
        "Ponowne wykorzystanie kamieni i metali szlachetnych",
      ],
    },
    watch: {
      title: "Serwis zegarków",
      note: "Naprawy zegarków każdego rodzaju.",
      items: [
        "Naprawa zegarka",
        "Wymiana baterii",
        "Dopasowanie paska lub bransolety",
      ],
    },
    gold: {
      title: "Wymiana złota",
      note: "Stare lub niechciane złoto może zostać rozliczone w wymianie.",
      items: [
        "Skup starego złota",
        "Wymiana niechcianego złota",
        "Wykorzystanie złota klienta do nowej biżuterii na zamówienie",
      ],
    },
  },
};

type UiCopy = {
  eyebrow: string;
  title: string;
  sub: string;
  personalSince: string;

  request: string;
  instruction: string;
  serviceSingular: string;
  servicePlural: string;
  selected: string;

  yourRequest: string;
  selectedServices: string;
  noSelection: string;
  clear: string;

  contactDetails: string;
  yourName: string;
  namePlaceholder: string;
  contactPerson: string;
  note: string;
  notePlaceholder: string;
  sentTo: string;

  whatsapp: string;
  email: string;
  noServiceAlert: string;

  disclaimer: string;

  closingBefore: string;
  closingAccent: string;

  messageHello: string;
  messageRequest: string;
  messageName: string;
  messageNotProvided: string;
  messageSelected: string;
  messageNone: string;
  messageAdditional: string;
  messageNoNote: string;
  messagePreferred: string;
  messageThanks: string;

  emailSubject: string;
};

const UI_COPY: Record<Locale, UiCopy> = {
  en: {
    eyebrow: "Jewellery & Watch Service",
    title: "Complete care, from cleaning to bespoke redesign",
    sub: "Our workshop offers a full range of services. The final price is always confirmed after an in-person inspection.",
    personalSince: "PERSONAL SERVICE · SINCE 1989",

    request: "Service request",
    instruction:
      "Select one or more services below. Your request will be prepared automatically.",
    serviceSingular: "service",
    servicePlural: "services",
    selected: "selected",

    yourRequest: "Your Service Request",
    selectedServices: "Selected services",
    noSelection:
      "No services selected yet. Choose the services you need from the list above.",
    clear: "Clear selection",

    contactDetails: "Contact details",
    yourName: "Your name",
    namePlaceholder: "Name",
    contactPerson: "Contact person",
    note: "Additional note",
    notePlaceholder:
      "Tell us anything else we should know about your jewellery or service request...",
    sentTo: "Request will be sent to",

    whatsapp: "Send via WhatsApp",
    email: "Send via Email",
    noServiceAlert: "Please select at least one service.",

    disclaimer:
      "Sending a request does not confirm the final service price. Jewellery is inspected in person before the final price is confirmed.",

    closingBefore: "Jewellery is personal.",
    closingAccent: "Service should be too.",

    messageHello: "Hello LIDYA,",
    messageRequest: "I would like to request jewellery service.",
    messageName: "Name",
    messageNotProvided: "Not provided",
    messageSelected: "Selected services",
    messageNone: "No service selected",
    messageAdditional: "Additional note",
    messageNoNote: "No additional note",
    messagePreferred: "Preferred contact",
    messageThanks: "Thank you.",
    emailSubject: "LIDYA Service Request",
  },

  de: {
    eyebrow: "Schmuck- & Uhrenservice",
    title: "Umfassende Pflege – von der Reinigung bis zum individuellen Redesign",
    sub: "Unsere Werkstatt bietet ein umfassendes Serviceangebot. Der endgültige Preis wird immer nach persönlicher Begutachtung bestätigt.",
    personalSince: "PERSÖNLICHER SERVICE · SEIT 1989",

    request: "Serviceanfrage",
    instruction:
      "Wählen Sie einen oder mehrere Services aus. Ihre Anfrage wird automatisch vorbereitet.",
    serviceSingular: "Service",
    servicePlural: "Services",
    selected: "ausgewählt",

    yourRequest: "Ihre Serviceanfrage",
    selectedServices: "Ausgewählte Services",
    noSelection:
      "Noch keine Services ausgewählt. Wählen Sie oben die gewünschten Leistungen aus.",
    clear: "Auswahl löschen",

    contactDetails: "Kontaktdaten",
    yourName: "Ihr Name",
    namePlaceholder: "Name",
    contactPerson: "Ansprechpartner",
    note: "Zusätzliche Nachricht",
    notePlaceholder:
      "Teilen Sie uns weitere Informationen zu Ihrem Schmuck oder Servicewunsch mit...",
    sentTo: "Anfrage wird gesendet an",

    whatsapp: "Per WhatsApp senden",
    email: "Per E-Mail senden",
    noServiceAlert: "Bitte wählen Sie mindestens einen Service aus.",

    disclaimer:
      "Das Absenden einer Anfrage bestätigt keinen endgültigen Servicepreis. Der Schmuck wird vor der Preisbestätigung persönlich begutachtet.",

    closingBefore: "Schmuck ist persönlich.",
    closingAccent: "Service sollte es auch sein.",

    messageHello: "Hallo LIDYA,",
    messageRequest: "Ich möchte einen Schmuckservice anfragen.",
    messageName: "Name",
    messageNotProvided: "Nicht angegeben",
    messageSelected: "Ausgewählte Services",
    messageNone: "Kein Service ausgewählt",
    messageAdditional: "Zusätzliche Nachricht",
    messageNoNote: "Keine zusätzliche Nachricht",
    messagePreferred: "Bevorzugter Ansprechpartner",
    messageThanks: "Vielen Dank.",
    emailSubject: "LIDYA Serviceanfrage",
  },

  tr: {
    eyebrow: "Mücevher & Saat Servisi",
    title: "Temizlikten özel yeniden tasarıma kadar eksiksiz bakım",
    sub: "Atölyemiz kapsamlı hizmet sunar. Nihai fiyat her zaman ürünün yerinde incelenmesinden sonra onaylanır.",
    personalSince: "KİŞİSEL HİZMET · 1989'DAN BERİ",

    request: "Servis talebi",
    instruction:
      "Aşağıdan bir veya daha fazla hizmet seçin. Talebiniz otomatik olarak hazırlanacaktır.",
    serviceSingular: "hizmet",
    servicePlural: "hizmet",
    selected: "seçildi",

    yourRequest: "Servis Talebiniz",
    selectedServices: "Seçilen hizmetler",
    noSelection:
      "Henüz hizmet seçilmedi. İhtiyacınız olan hizmetleri yukarıdaki listeden seçin.",
    clear: "Seçimi temizle",

    contactDetails: "İletişim bilgileri",
    yourName: "Adınız",
    namePlaceholder: "Ad",
    contactPerson: "İlgili kişi",
    note: "Ek not",
    notePlaceholder:
      "Mücevheriniz veya servis talebiniz hakkında bilmemiz gereken diğer detayları yazın...",
    sentTo: "Talep gönderilecek kişi",

    whatsapp: "WhatsApp ile gönder",
    email: "E-posta ile gönder",
    noServiceAlert: "Lütfen en az bir hizmet seçin.",

    disclaimer:
      "Talep göndermek nihai servis fiyatını onaylamaz. Nihai fiyat, mücevher yerinde incelendikten sonra belirlenir.",

    closingBefore: "Mücevher kişiseldir.",
    closingAccent: "Hizmeti de öyle olmalıdır.",

    messageHello: "Merhaba LIDYA,",
    messageRequest: "Mücevher servisi talep etmek istiyorum.",
    messageName: "İsim",
    messageNotProvided: "Belirtilmedi",
    messageSelected: "Seçilen hizmetler",
    messageNone: "Hizmet seçilmedi",
    messageAdditional: "Ek not",
    messageNoNote: "Ek not yok",
    messagePreferred: "Tercih edilen iletişim kişisi",
    messageThanks: "Teşekkür ederim.",
    emailSubject: "LIDYA Servis Talebi",
  },

  sk: {
    eyebrow: "Servis šperkov & hodiniek",
    title: "Kompletná starostlivosť od čistenia až po zákazkový redizajn",
    sub: "Naša dielňa ponúka kompletný servis. Konečná cena je vždy potvrdená až po osobnej kontrole šperku.",
    personalSince: "OSOBNÝ SERVIS · OD ROKU 1989",

    request: "Požiadavka na servis",
    instruction:
      "Vyberte jednu alebo viac služieb. Vaša požiadavka sa pripraví automaticky.",
    serviceSingular: "služba",
    servicePlural: "služby",
    selected: "vybrané",

    yourRequest: "Vaša požiadavka na servis",
    selectedServices: "Vybrané služby",
    noSelection:
      "Zatiaľ nemáte vybranú žiadnu službu. Vyberte si služby zo zoznamu vyššie.",
    clear: "Zrušiť výber",

    contactDetails: "Kontaktné údaje",
    yourName: "Vaše meno",
    namePlaceholder: "Meno",
    contactPerson: "Kontaktná osoba",
    note: "Doplňujúca poznámka",
    notePlaceholder:
      "Napíšte nám ďalšie informácie o vašom šperku alebo požiadavke na servis...",
    sentTo: "Požiadavka bude odoslaná",

    whatsapp: "Odoslať cez WhatsApp",
    email: "Odoslať e-mailom",
    noServiceAlert: "Vyberte prosím aspoň jednu službu.",

    disclaimer:
      "Odoslanie požiadavky nepotvrdzuje konečnú cenu servisu. Šperk je pred potvrdením ceny osobne skontrolovaný.",

    closingBefore: "Šperk je osobná záležitosť.",
    closingAccent: "Taký by mal byť aj servis.",

    messageHello: "Dobrý deň LIDYA,",
    messageRequest: "Mám záujem o servis šperku.",
    messageName: "Meno",
    messageNotProvided: "Neuvedené",
    messageSelected: "Vybrané služby",
    messageNone: "Nebola vybraná žiadna služba",
    messageAdditional: "Doplňujúca poznámka",
    messageNoNote: "Bez doplňujúcej poznámky",
    messagePreferred: "Preferovaná kontaktná osoba",
    messageThanks: "Ďakujem.",
    emailSubject: "LIDYA požiadavka na servis",
  },

  cs: {
    eyebrow: "Servis šperků & hodinek",
    title: "Kompletní péče od čištění až po zakázkový redesign",
    sub: "Naše dílna nabízí kompletní servis. Konečná cena je vždy potvrzena až po osobní kontrole šperku.",
    personalSince: "OSOBNÍ SERVIS · OD ROKU 1989",

    request: "Požadavek na servis",
    instruction:
      "Vyberte jednu nebo více služeb. Váš požadavek bude připraven automaticky.",
    serviceSingular: "služba",
    servicePlural: "služby",
    selected: "vybráno",

    yourRequest: "Váš požadavek na servis",
    selectedServices: "Vybrané služby",
    noSelection:
      "Zatím nemáte vybranou žádnou službu. Vyberte služby ze seznamu výše.",
    clear: "Zrušit výběr",

    contactDetails: "Kontaktní údaje",
    yourName: "Vaše jméno",
    namePlaceholder: "Jméno",
    contactPerson: "Kontaktní osoba",
    note: "Doplňující poznámka",
    notePlaceholder:
      "Napište nám další informace o vašem šperku nebo požadavku na servis...",
    sentTo: "Požadavek bude odeslán",

    whatsapp: "Odeslat přes WhatsApp",
    email: "Odeslat e-mailem",
    noServiceAlert: "Vyberte prosím alespoň jednu službu.",

    disclaimer:
      "Odeslání požadavku nepotvrzuje konečnou cenu servisu. Šperk je před potvrzením ceny osobně zkontrolován.",

    closingBefore: "Šperk je osobní záležitost.",
    closingAccent: "Takový by měl být i servis.",

    messageHello: "Dobrý den LIDYA,",
    messageRequest: "Mám zájem o servis šperku.",
    messageName: "Jméno",
    messageNotProvided: "Neuvedeno",
    messageSelected: "Vybrané služby",
    messageNone: "Nebyla vybrána žádná služba",
    messageAdditional: "Doplňující poznámka",
    messageNoNote: "Bez doplňující poznámky",
    messagePreferred: "Preferovaná kontaktní osoba",
    messageThanks: "Děkuji.",
    emailSubject: "LIDYA požadavek na servis",
  },

  hu: {
    eyebrow: "Ékszer- & óraszerviz",
    title: "Teljes körű gondoskodás a tisztítástól az egyedi újratervezésig",
    sub: "Műhelyünk teljes körű szolgáltatást kínál. A végleges árat minden esetben személyes vizsgálat után erősítjük meg.",
    personalSince: "SZEMÉLYES SZOLGÁLTATÁS · 1989 ÓTA",

    request: "Szervizigény",
    instruction:
      "Válasszon ki egy vagy több szolgáltatást. Az igény automatikusan elkészül.",
    serviceSingular: "szolgáltatás",
    servicePlural: "szolgáltatás",
    selected: "kiválasztva",

    yourRequest: "Az Ön szervizigénye",
    selectedServices: "Kiválasztott szolgáltatások",
    noSelection:
      "Még nincs kiválasztott szolgáltatás. Válasszon a fenti listából.",
    clear: "Kiválasztás törlése",

    contactDetails: "Kapcsolati adatok",
    yourName: "Az Ön neve",
    namePlaceholder: "Név",
    contactPerson: "Kapcsolattartó",
    note: "További megjegyzés",
    notePlaceholder:
      "Írjon le minden további információt az ékszerről vagy a szervizigényről...",
    sentTo: "Az igény címzettje",

    whatsapp: "Küldés WhatsAppon",
    email: "Küldés e-mailben",
    noServiceAlert: "Válasszon ki legalább egy szolgáltatást.",

    disclaimer:
      "Az igény elküldése nem jelenti a végleges szervizár megerősítését. Az ékszert az ár meghatározása előtt személyesen megvizsgáljuk.",

    closingBefore: "Az ékszer személyes.",
    closingAccent: "A szolgáltatásnak is annak kell lennie.",

    messageHello: "Üdvözlöm LIDYA,",
    messageRequest: "Ékszerszervizt szeretnék igényelni.",
    messageName: "Név",
    messageNotProvided: "Nincs megadva",
    messageSelected: "Kiválasztott szolgáltatások",
    messageNone: "Nincs kiválasztott szolgáltatás",
    messageAdditional: "További megjegyzés",
    messageNoNote: "Nincs további megjegyzés",
    messagePreferred: "Kiválasztott kapcsolattartó",
    messageThanks: "Köszönöm.",
    emailSubject: "LIDYA szervizigény",
  },

  pl: {
    eyebrow: "Serwis biżuterii & zegarków",
    title: "Kompleksowa pielęgnacja od czyszczenia po indywidualny redesign",
    sub: "Nasz warsztat oferuje pełen zakres usług. Ostateczna cena jest zawsze potwierdzana po osobistych oględzinach.",
    personalSince: "INDYWIDUALNA OBSŁUGA · OD 1989 ROKU",

    request: "Zapytanie serwisowe",
    instruction:
      "Wybierz jedną lub więcej usług. Twoje zapytanie zostanie przygotowane automatycznie.",
    serviceSingular: "usługa",
    servicePlural: "usługi",
    selected: "wybrano",

    yourRequest: "Twoje zapytanie serwisowe",
    selectedServices: "Wybrane usługi",
    noSelection:
      "Nie wybrano jeszcze żadnej usługi. Wybierz potrzebne usługi z listy powyżej.",
    clear: "Wyczyść wybór",

    contactDetails: "Dane kontaktowe",
    yourName: "Twoje imię",
    namePlaceholder: "Imię",
    contactPerson: "Osoba kontaktowa",
    note: "Dodatkowa wiadomość",
    notePlaceholder:
      "Napisz nam wszystko, co powinniśmy wiedzieć o Twojej biżuterii lub zapytaniu serwisowym...",
    sentTo: "Zapytanie zostanie wysłane do",

    whatsapp: "Wyślij przez WhatsApp",
    email: "Wyślij e-mailem",
    noServiceAlert: "Wybierz co najmniej jedną usługę.",

    disclaimer:
      "Wysłanie zapytania nie potwierdza ostatecznej ceny usługi. Biżuteria jest osobiście sprawdzana przed potwierdzeniem ceny.",

    closingBefore: "Biżuteria jest osobista.",
    closingAccent: "Obsługa również powinna taka być.",

    messageHello: "Dzień dobry LIDYA,",
    messageRequest: "Chciałbym poprosić o serwis biżuterii.",
    messageName: "Imię",
    messageNotProvided: "Nie podano",
    messageSelected: "Wybrane usługi",
    messageNone: "Nie wybrano żadnej usługi",
    messageAdditional: "Dodatkowa wiadomość",
    messageNoNote: "Brak dodatkowej wiadomości",
    messagePreferred: "Preferowana osoba kontaktowa",
    messageThanks: "Dziękuję.",
    emailSubject: "LIDYA zapytanie serwisowe",
  },
};

export default function Services() {
  const { locale } = useLanguage();

  const copy = UI_COPY[locale];

  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    []
  );

  const [customerName, setCustomerName] = useState("");
  const [customerNote, setCustomerNote] = useState("");
  const [contactPerson, setContactPerson] =
    useState<ContactKey>("victor");

  const selectedContact = serviceContacts[contactPerson];

  const toggleService = (groupKey: string, itemIndex: number) => {
    const id = `${groupKey}-${itemIndex}`;

    setSelectedServices((current) => {
      const exists = current.some((service) => service.id === id);

      if (exists) {
        return current.filter((service) => service.id !== id);
      }

      return [
        ...current,
        {
          id,
          groupKey,
          itemIndex,
        },
      ];
    });
  };

  const removeService = (id: string) => {
    setSelectedServices((current) =>
      current.filter((service) => service.id !== id)
    );
  };

  const clearServices = () => {
    setSelectedServices([]);
  };

  const getTranslatedService = (service: SelectedService) => {
    const group = SERVICE_TRANSLATIONS[locale][service.groupKey];

    return {
      group: group?.title ?? service.groupKey,
      item: group?.items[service.itemIndex] ?? "",
    };
  };

  const buildMessage = () => {
    const groupedServices = SERVICE_GROUPS.map((group) => {
      const selected = selectedServices.filter(
        (service) => service.groupKey === group.key
      );

      if (selected.length === 0) {
        return null;
      }

      const translation = SERVICE_TRANSLATIONS[locale][group.key];

      return `${translation.title}:\n${selected
        .map(
          (service) =>
            `• ${translation.items[service.itemIndex] ?? ""}`
        )
        .join("\n")}`;
    })
      .filter(Boolean)
      .join("\n\n");

    return `${copy.messageHello}

${copy.messageRequest}

${copy.messageName}: ${
      customerName || copy.messageNotProvided
    }

${copy.messageSelected}:

${groupedServices || copy.messageNone}

${copy.messageAdditional}:
${customerNote || copy.messageNoNote}

${copy.messagePreferred}: ${selectedContact.name}

${copy.messageThanks}`;
  };

  const sendWhatsApp = () => {
    if (selectedServices.length === 0) {
      alert(copy.noServiceAlert);
      return;
    }

    const message = encodeURIComponent(buildMessage());

    window.open(
      `https://wa.me/${selectedContact.phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendEmail = () => {
    if (selectedServices.length === 0) {
      alert(copy.noServiceAlert);
      return;
    }

    const subject = encodeURIComponent(
      `${copy.emailSubject}${
        customerName ? ` — ${customerName}` : ""
      }`
    );

    const body = encodeURIComponent(buildMessage());

    window.location.href = `mailto:${selectedContact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-white py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-48 top-10 h-[380px] w-[380px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="relative mb-10 overflow-hidden lg:mb-14">
          <Image
            src="/images/services-intro.png"
            alt="LIDYA jewellery and watch service"
            fill
            sizes="(min-width: 1024px) 1440px, 100vw"
            className="object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F8F4ED]/98 via-[#F8F4ED]/74 to-[#F8F4ED]/5" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F4ED]/16 via-transparent to-transparent" />

          <div className="relative z-10 grid min-h-[420px] gap-8 py-12 md:min-h-[470px] md:py-16 lg:min-h-[500px] lg:grid-cols-12 lg:items-end lg:py-20">
            <div className="lg:col-span-8">
              <span className="mb-4 block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#A98242]">
                {copy.eyebrow}
              </span>

              <h2
                className="max-w-[820px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
                style={{ color: "#1B0B20" }}
              >
                {copy.title}
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <div className="max-w-md bg-[#F8F4ED]/50 p-5 backdrop-blur-[2px] md:p-6 lg:bg-[#F8F4ED]/44">
                <p className="text-sm leading-6 text-grey md:text-[0.95rem]">
                  {copy.sub}
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#A98242]" />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/55">
                    {copy.personalSince}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INSTRUCTION */}
        <div className="mb-7 flex flex-col justify-between gap-4 border-y border-plum-dark/10 py-5 md:flex-row md:items-center">
          <div>
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-gold">
              {copy.request}
            </span>

            <p className="mt-1 text-sm text-grey">
              {copy.instruction}
            </p>
          </div>

          {selectedServices.length > 0 && (
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark">
              {selectedServices.length}{" "}
              {selectedServices.length === 1
                ? copy.serviceSingular
                : copy.servicePlural}{" "}
              {copy.selected}
            </span>
          )}
        </div>

        {/* SERVICES */}
        <div className="border-t border-plum-dark/10">
          {SERVICE_GROUPS.map((group, index) => {
            const translation =
              SERVICE_TRANSLATIONS[locale][group.key];

            return (
              <div
                key={group.letter}
                className="group grid gap-5 border-b border-plum-dark/10 py-6 transition-colors duration-500 hover:bg-ivory/60 md:grid-cols-12 md:items-start md:px-3 md:py-7"
              >
                <div className="md:col-span-1">
                  <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <span className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
                    {group.letter}
                  </span>

                  <h3
                    className="font-display text-[2rem] leading-tight transition-transform duration-500 group-hover:translate-x-1 md:text-[2.15rem] lg:text-[2.3rem]"
                    style={{ color: "#1B0B20" }}
                  >
                    {translation.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-[0.82rem] leading-5 text-grey">
                    {translation.note}
                  </p>
                </div>

                <div className="md:col-span-7 md:pl-3">
                  <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {translation.items.map((item, itemIndex) => {
                      const id = `${group.key}-${itemIndex}`;

                      const selected = selectedServices.some(
                        (service) => service.id === id
                      );

                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() =>
                            toggleService(group.key, itemIndex)
                          }
                          className={`group/item flex w-full items-center justify-between gap-4 border-b px-1 py-3 text-left text-[0.82rem] leading-5 transition-all duration-300 ${
                            selected
                              ? "border-gold bg-gold/[0.08] text-plum-dark"
                              : "border-plum-dark/8 text-ink hover:border-gold/50 hover:bg-ivory"
                          }`}
                        >
                          <span className="flex items-start gap-3">
                            <span
                              className={`mt-[0.58rem] h-px shrink-0 transition-all duration-300 ${
                                selected
                                  ? "w-6 bg-gold"
                                  : "w-4 bg-gold/70"
                              }`}
                            />

                            <span>{item}</span>
                          </span>

                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.65rem] transition-all duration-300 ${
                              selected
                                ? "border-gold bg-gold text-plum-dark"
                                : "border-plum-dark/15 text-plum-dark/30 group-hover/item:border-gold group-hover/item:text-gold"
                            }`}
                          >
                            {selected ? "✓" : "+"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* REQUEST BUILDER */}
        <div className="mt-16 overflow-hidden border border-plum-dark/10 bg-ivory md:mt-20">
          <div className="grid lg:grid-cols-12">
            {/* LEFT */}
            <div className="border-b border-plum-dark/10 p-6 md:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                {copy.yourRequest}
              </span>

              <h3
                className="mt-4 font-display text-3xl leading-tight md:text-4xl"
                style={{ color: "#1B0B20" }}
              >
                {copy.selectedServices}
              </h3>

              {selectedServices.length === 0 ? (
                <div className="mt-7 border-t border-plum-dark/10 pt-6">
                  <p className="max-w-sm text-sm leading-6 text-grey">
                    {copy.noSelection}
                  </p>
                </div>
              ) : (
                <>
                  <div className="mt-7 space-y-2 border-t border-plum-dark/10 pt-6">
                    {selectedServices.map((service) => {
                      const translated =
                        getTranslatedService(service);

                      return (
                        <div
                          key={service.id}
                          className="flex items-center justify-between gap-4 border-b border-plum-dark/8 py-3"
                        >
                          <div>
                            <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-gold">
                              {translated.group}
                            </span>

                            <span className="mt-1 block text-sm text-plum-dark">
                              {translated.item}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeService(service.id)
                            }
                            aria-label={`Remove ${translated.item}`}
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-plum-dark/15 text-xs text-plum-dark/50 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-plum-dark"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={clearServices}
                    className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/45 transition-colors duration-300 hover:text-gold"
                  >
                    {copy.clear}
                  </button>
                </>
              )}

              <div className="mt-9 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
                  LIDYA · {copy.request}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-6 md:p-8 lg:col-span-7 lg:p-10">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                {copy.contactDetails}
              </span>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="service-name"
                    className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/55"
                  >
                    {copy.yourName}
                  </label>

                  <input
                    id="service-name"
                    type="text"
                    value={customerName}
                    onChange={(event) =>
                      setCustomerName(event.target.value)
                    }
                    placeholder={copy.namePlaceholder}
                    className="w-full border-b border-plum-dark/20 bg-transparent px-0 py-3 text-sm text-plum-dark outline-none transition-colors duration-300 placeholder:text-grey/50 focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service-contact"
                    className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/55"
                  >
                    {copy.contactPerson}
                  </label>

                  <select
                    id="service-contact"
                    value={contactPerson}
                    onChange={(event) =>
                      setContactPerson(
                        event.target.value as ContactKey
                      )
                    }
                    className="w-full border-b border-plum-dark/20 bg-transparent px-0 py-3 text-sm text-plum-dark outline-none transition-colors duration-300 focus:border-gold"
                  >
                    <option value="victor">
                      Zafer (Victor)
                    </option>

                    <option value="vierka">
                      Vierka
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-7">
                <label
                  htmlFor="service-note"
                  className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/55"
                >
                  {copy.note}
                </label>

                <textarea
                  id="service-note"
                  value={customerNote}
                  onChange={(event) =>
                    setCustomerNote(event.target.value)
                  }
                  placeholder={copy.notePlaceholder}
                  rows={4}
                  className="w-full resize-none border border-plum-dark/15 bg-brand-white/60 p-4 text-sm leading-6 text-plum-dark outline-none transition-colors duration-300 placeholder:text-grey/50 focus:border-gold"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-plum-dark/10 py-4">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/40">
                  {copy.sentTo}
                </span>

                <span className="text-sm text-plum-dark">
                  {selectedContact.name}
                </span>

                <span className="text-sm text-grey">
                  {selectedContact.email}
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="group inline-flex min-h-[54px] flex-1 items-center justify-between bg-gold px-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light"
                >
                  {copy.whatsapp}

                  <span className="text-base transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={sendEmail}
                  className="group inline-flex min-h-[54px] flex-1 items-center justify-between border border-plum-dark/20 px-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:border-plum-dark hover:bg-plum-dark hover:text-brand-white"
                >
                  {copy.email}

                  <span className="text-base transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              <p className="mt-4 text-[0.7rem] leading-5 text-grey">
                {copy.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* CLOSING */}
        <div className="mx-auto mt-14 max-w-[900px] text-center">
          <span className="mx-auto mb-6 block h-px w-12 bg-gold" />

          <p
            className="font-display text-2xl italic leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "#1B0B20" }}
          >
            {copy.closingBefore}
            <span style={{ color: "#C8A96A" }}>
              {" "}
              {copy.closingAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}