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

  ru: {
    care: {
      title: "Уход за украшениями",
      note: "Чистка и полировка украшений бесплатно.",
      items: ["Чистка", "Полировка", "Осмотр", "Уход"],
    },
    repairs: {
      title: "Ремонт & корректировка",
      note: "Изменение размера колец и другие корректировки.",
      items: [
        "Изменение размера кольца",
        "Укорачивание цепочки",
        "Удлинение цепочки",
        "Регулировка браслета",
        "Замена застёжки",
        "Ремонт повреждённых украшений",
      ],
    },
    stones: {
      title: "Работа с камнями",
      note: "Закрепка бриллиантов и драгоценных камней всех видов.",
      items: [
        "Закрепка бриллианта",
        "Закрепка драгоценного камня",
        "Замена выпавших или отсутствующих камней",
        "Проверка закрепок",
      ],
    },
    bespoke: {
      title: "На заказ & редизайн",
      note: "Изготовление украшений по модели или образцу.",
      items: [
        "Новое украшение по модели",
        "Новое украшение по образцу",
        "Редизайн унаследованных украшений",
        "Модернизация старых украшений",
        "Повторное использование камней и драгоценных металлов",
      ],
    },
    watch: {
      title: "Сервис часов",
      note: "Ремонт часов всех видов.",
      items: [
        "Ремонт часов",
        "Замена батарейки",
        "Регулировка ремешка или браслета",
      ],
    },
    gold: {
      title: "Обмен золота",
      note: "Старое или ненужное золото можно использовать при обмене.",
      items: [
        "Покупка старого золота",
        "Обмен ненужного золота",
        "Использование золота клиента для нового изделия на заказ",
      ],
    },
  },

  nl: {
    care: {
      title: "Sieradenonderhoud",
      note: "Sieraden worden gratis gereinigd en gepolijst.",
      items: ["Reinigen", "Polijsten", "Inspectie", "Onderhoud"],
    },
    repairs: {
      title: "Reparaties & aanpassingen",
      note: "Ringmaat aanpassen en andere aanpassingen.",
      items: [
        "Ringmaat aanpassen",
        "Ketting inkorten",
        "Ketting verlengen",
        "Armband aanpassen",
        "Sluiting vervangen",
        "Beschadigde sieraden repareren",
      ],
    },
    stones: {
      title: "Edelsteenservice",
      note: "Zetten van diamanten en edelstenen van ieder type.",
      items: [
        "Diamant zetten",
        "Edelsteen zetten",
        "Losse of ontbrekende stenen vervangen",
        "Zettingen inspecteren",
      ],
    },
    bespoke: {
      title: "Maatwerk & redesign",
      note: "Maatwerk op basis van een model of referentie.",
      items: [
        "Nieuw sieraad volgens model",
        "Nieuw sieraad volgens referentie",
        "Redesign van geërfde sieraden",
        "Modernisering van oudere sieraden",
        "Hergebruik van stenen en edelmetalen",
      ],
    },
    watch: {
      title: "Horlogeservice",
      note: "Alle soorten horlogereparaties.",
      items: [
        "Horlogereparatie",
        "Batterij vervangen",
        "Band of armband aanpassen",
      ],
    },
    gold: {
      title: "Goud inruilen",
      note: "Oud of ongewenst goud kan worden ingeruild.",
      items: [
        "Aankoop van oud goud",
        "Inruilen van ongewenst goud",
        "Eigen goud gebruiken voor een nieuw maatwerkstuk",
      ],
    },
  },

  da: {
    care: {
      title: "Smykkepleje",
      note: "Smykker renses og poleres gratis.",
      items: ["Rensning", "Polering", "Eftersyn", "Vedligeholdelse"],
    },
    repairs: {
      title: "Reparationer & tilpasninger",
      note: "Ændring af ringstørrelse og andre tilpasninger.",
      items: [
        "Ændring af ringstørrelse",
        "Afkortning af kæde",
        "Forlængelse af kæde",
        "Tilpasning af armbånd",
        "Udskiftning af lås",
        "Reparation af beskadigede smykker",
      ],
    },
    stones: {
      title: "Stenservice",
      note: "Fattning af diamanter og ædelsten af enhver type.",
      items: [
        "Fattning af diamant",
        "Fattning af ædelsten",
        "Udskiftning af løse eller manglende sten",
        "Kontrol af fatninger",
      ],
    },
    bespoke: {
      title: "Skræddersyet & redesign",
      note: "Skræddersyede smykker efter model eller reference.",
      items: [
        "Nyt smykke efter model",
        "Nyt smykke efter reference",
        "Redesign af arvede smykker",
        "Modernisering af ældre smykker",
        "Genbrug af sten og ædelmetaller",
      ],
    },
    watch: {
      title: "Urservice",
      note: "Reparation af ure af enhver type.",
      items: [
        "Urreparation",
        "Batteriskift",
        "Tilpasning af rem eller armbånd",
      ],
    },
    gold: {
      title: "Guldbytte",
      note: "Gammelt eller uønsket guld kan indgå i en byttehandel.",
      items: [
        "Køb af gammelt guld",
        "Bytte af uønsket guld",
        "Brug af kundens eget guld til et nyt specialfremstillet smykke",
      ],
    },
  },

  fi: {
    care: {
      title: "Korujen hoito",
      note: "Korujen puhdistus ja kiillotus veloituksetta.",
      items: ["Puhdistus", "Kiillotus", "Tarkastus", "Huolto"],
    },
    repairs: {
      title: "Korjaukset & säädöt",
      note: "Sormusten koon muuttaminen ja muut säädöt.",
      items: [
        "Sormuksen koon muuttaminen",
        "Ketjun lyhentäminen",
        "Ketjun pidentäminen",
        "Rannekorun säätäminen",
        "Lukon vaihtaminen",
        "Vaurioituneen korun korjaus",
      ],
    },
    stones: {
      title: "Kivipalvelut",
      note: "Timanttien ja jalokivien istutus.",
      items: [
        "Timantin istutus",
        "Jalokiven istutus",
        "Irronneiden tai puuttuvien kivien korvaaminen",
        "Istutusten tarkastus",
      ],
    },
    bespoke: {
      title: "Mittatilaus & uudelleensuunnittelu",
      note: "Mittatilauskorut mallin tai esimerkin mukaan.",
      items: [
        "Uusi koru mallin mukaan",
        "Uusi koru esimerkin mukaan",
        "Perittyjen korujen uudelleensuunnittelu",
        "Vanhempien korujen modernisointi",
        "Kivien ja jalometallien uudelleenkäyttö",
      ],
    },
    watch: {
      title: "Kellohuolto",
      note: "Kaikenlaisten kellojen korjaukset.",
      items: [
        "Kellon korjaus",
        "Pariston vaihto",
        "Rannekkeen säätö",
      ],
    },
    gold: {
      title: "Kullan vaihto",
      note: "Vanha tai tarpeeton kulta voidaan käyttää vaihdossa.",
      items: [
        "Vanhan kullan osto",
        "Tarpeettoman kullan vaihto",
        "Asiakkaan oman kullan käyttö uudessa mittatilauskorussa",
      ],
    },
  },

  sv: {
    care: {
      title: "Smyckesvård",
      note: "Rengöring och polering av smycken utan kostnad.",
      items: ["Rengöring", "Polering", "Inspektion", "Underhåll"],
    },
    repairs: {
      title: "Reparationer & justeringar",
      note: "Storleksändring av ringar och andra justeringar.",
      items: [
        "Ändring av ringstorlek",
        "Förkortning av kedja",
        "Förlängning av kedja",
        "Justering av armband",
        "Byte av lås",
        "Reparation av skadade smycken",
      ],
    },
    stones: {
      title: "Stenservice",
      note: "Infattning av diamanter och ädelstenar av alla slag.",
      items: [
        "Infattning av diamant",
        "Infattning av ädelsten",
        "Byte av lösa eller saknade stenar",
        "Kontroll av infattningar",
      ],
    },
    bespoke: {
      title: "Skräddarsytt & redesign",
      note: "Skräddarsydda smycken efter modell eller referens.",
      items: [
        "Nytt smycke efter modell",
        "Nytt smycke efter referens",
        "Redesign av ärvda smycken",
        "Modernisering av äldre smycken",
        "Återanvändning av stenar och ädelmetaller",
      ],
    },
    watch: {
      title: "Klockservice",
      note: "Reparation av alla typer av klockor.",
      items: [
        "Klockreparation",
        "Batteribyte",
        "Justering av rem eller armband",
      ],
    },
    gold: {
      title: "Guldbyte",
      note: "Gammalt eller oönskat guld kan användas som delbetalning.",
      items: [
        "Köp av gammalt guld",
        "Inbyte av oönskat guld",
        "Användning av kundens eget guld till ett nytt specialtillverkat smycke",
      ],
    },
  },

  fr: {
    care: {
      title: "Entretien des bijoux",
      note: "Nettoyage et polissage des bijoux offerts.",
      items: ["Nettoyage", "Polissage", "Inspection", "Entretien"],
    },
    repairs: {
      title: "Réparations & ajustements",
      note: "Mise à taille des bagues et autres ajustements.",
      items: [
        "Mise à taille d’une bague",
        "Raccourcissement d’une chaîne",
        "Allongement d’une chaîne",
        "Ajustement d’un bracelet",
        "Remplacement d’un fermoir",
        "Réparation d’un bijou endommagé",
      ],
    },
    stones: {
      title: "Service des pierres",
      note: "Sertissage de diamants et pierres précieuses de toutes sortes.",
      items: [
        "Sertissage de diamant",
        "Sertissage de pierre précieuse",
        "Remplacement de pierres desserrées ou manquantes",
        "Inspection des sertissages",
      ],
    },
    bespoke: {
      title: "Sur mesure & redesign",
      note: "Créations sur mesure à partir d’un modèle ou d’une référence.",
      items: [
        "Nouveau bijou selon un modèle",
        "Nouveau bijou selon une référence",
        "Redesign d’un bijou hérité",
        "Modernisation d’un bijou ancien",
        "Réutilisation de pierres et métaux précieux",
      ],
    },
    watch: {
      title: "Service horlogerie",
      note: "Réparations de montres de tous types.",
      items: [
        "Réparation de montre",
        "Remplacement de pile",
        "Ajustement de bracelet",
      ],
    },
    gold: {
      title: "Échange d’or",
      note: "L’or ancien ou non désiré peut être repris.",
      items: [
        "Rachat d’or ancien",
        "Reprise d’or non désiré",
        "Utilisation de l’or du client pour une nouvelle création sur mesure",
      ],
    },
  },

  it: {
    care: {
      title: "Cura dei gioielli",
      note: "Pulizia e lucidatura dei gioielli gratuite.",
      items: ["Pulizia", "Lucidatura", "Controllo", "Manutenzione"],
    },
    repairs: {
      title: "Riparazioni & regolazioni",
      note: "Modifica della misura degli anelli e altre regolazioni.",
      items: [
        "Modifica misura anello",
        "Accorciamento catena",
        "Allungamento catena",
        "Regolazione bracciale",
        "Sostituzione chiusura",
        "Riparazione di gioielli danneggiati",
      ],
    },
    stones: {
      title: "Servizio pietre",
      note: "Incastonatura di diamanti e pietre preziose di ogni tipo.",
      items: [
        "Incastonatura diamante",
        "Incastonatura pietra preziosa",
        "Sostituzione di pietre allentate o mancanti",
        "Controllo delle incastonature",
      ],
    },
    bespoke: {
      title: "Su misura & redesign",
      note: "Gioielli su misura realizzati da modello o riferimento.",
      items: [
        "Nuovo gioiello secondo un modello",
        "Nuovo gioiello secondo un riferimento",
        "Redesign di gioielli ereditati",
        "Modernizzazione di gioielli più datati",
        "Riutilizzo di pietre e metalli preziosi",
      ],
    },
    watch: {
      title: "Servizio orologi",
      note: "Riparazioni di orologi di ogni tipo.",
      items: [
        "Riparazione orologio",
        "Sostituzione batteria",
        "Regolazione cinturino o bracciale",
      ],
    },
    gold: {
      title: "Permuta oro",
      note: "L’oro vecchio o indesiderato può essere dato in permuta.",
      items: [
        "Acquisto di oro usato",
        "Permuta di oro indesiderato",
        "Utilizzo dell’oro del cliente per un nuovo gioiello su misura",
      ],
    },
  },

  es: {
    care: {
      title: "Cuidado de joyas",
      note: "Limpieza y pulido de joyas sin coste.",
      items: ["Limpieza", "Pulido", "Inspección", "Mantenimiento"],
    },
    repairs: {
      title: "Reparaciones & ajustes",
      note: "Cambio de talla de anillos y otros ajustes.",
      items: [
        "Cambio de talla de anillo",
        "Acortar cadena",
        "Alargar cadena",
        "Ajuste de pulsera",
        "Sustitución de cierre",
        "Reparación de joyas dañadas",
      ],
    },
    stones: {
      title: "Servicio de piedras",
      note: "Engaste de diamantes y piedras preciosas de todo tipo.",
      items: [
        "Engaste de diamante",
        "Engaste de piedra preciosa",
        "Sustitución de piedras sueltas o faltantes",
        "Inspección de engastes",
      ],
    },
    bespoke: {
      title: "A medida & rediseño",
      note: "Piezas a medida realizadas según modelo o referencia.",
      items: [
        "Nueva joya según modelo",
        "Nueva joya según referencia",
        "Rediseño de joyas heredadas",
        "Modernización de joyas antiguas",
        "Reutilización de piedras y metales preciosos",
      ],
    },
    watch: {
      title: "Servicio de relojes",
      note: "Reparación de todo tipo de relojes.",
      items: [
        "Reparación de reloj",
        "Cambio de batería",
        "Ajuste de correa o brazalete",
      ],
    },
    gold: {
      title: "Cambio de oro",
      note: "El oro antiguo o no deseado puede entregarse como parte del pago.",
      items: [
        "Compra de oro antiguo",
        "Cambio de oro no deseado",
        "Uso del oro del cliente para una nueva pieza a medida",
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
    title:
      "Umfassende Pflege – von der Reinigung bis zum individuellen Redesign",
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
    title:
      "Kompletná starostlivosť od čistenia až po zákazkový redizajn",
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
    title:
      "Teljes körű gondoskodás a tisztítástól az egyedi újratervezésig",
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
    title:
      "Kompleksowa pielęgnacja od czyszczenia po indywidualny redesign",
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

  ru: {
    eyebrow: "Сервис украшений & часов",
    title: "Полный уход — от чистки до индивидуального редизайна",
    sub: "Наша мастерская предлагает полный спектр услуг. Окончательная стоимость всегда подтверждается после личного осмотра.",
    personalSince: "ПЕРСОНАЛЬНЫЙ СЕРВИС · С 1989 ГОДА",
    request: "Запрос на сервис",
    instruction:
      "Выберите одну или несколько услуг. Ваш запрос будет подготовлен автоматически.",
    serviceSingular: "услуга",
    servicePlural: "услуги",
    selected: "выбрано",
    yourRequest: "Ваш запрос на сервис",
    selectedServices: "Выбранные услуги",
    noSelection:
      "Услуги пока не выбраны. Выберите необходимые услуги из списка выше.",
    clear: "Очистить выбор",
    contactDetails: "Контактные данные",
    yourName: "Ваше имя",
    namePlaceholder: "Имя",
    contactPerson: "Контактное лицо",
    note: "Дополнительная информация",
    notePlaceholder:
      "Сообщите нам дополнительную информацию об украшении или запросе на сервис...",
    sentTo: "Запрос будет отправлен",
    whatsapp: "Отправить через WhatsApp",
    email: "Отправить по e-mail",
    noServiceAlert: "Пожалуйста, выберите хотя бы одну услугу.",
    disclaimer:
      "Отправка запроса не подтверждает окончательную стоимость. Украшение осматривается лично до подтверждения цены.",
    closingBefore: "Украшение — это личное.",
    closingAccent: "Сервис тоже должен быть личным.",
    messageHello: "Здравствуйте, LIDYA,",
    messageRequest: "Я хотел бы заказать сервис украшения.",
    messageName: "Имя",
    messageNotProvided: "Не указано",
    messageSelected: "Выбранные услуги",
    messageNone: "Услуги не выбраны",
    messageAdditional: "Дополнительная информация",
    messageNoNote: "Дополнительной информации нет",
    messagePreferred: "Предпочтительное контактное лицо",
    messageThanks: "Спасибо.",
    emailSubject: "Запрос на сервис LIDYA",
  },

  nl: {
    eyebrow: "Sieraden- & horlogeservice",
    title: "Volledige zorg, van reiniging tot maatwerk en redesign",
    sub: "Ons atelier biedt een volledig dienstenpakket. De definitieve prijs wordt altijd bevestigd na persoonlijke inspectie.",
    personalSince: "PERSOONLIJKE SERVICE · SINDS 1989",
    request: "Serviceaanvraag",
    instruction:
      "Selecteer hieronder één of meer diensten. Uw aanvraag wordt automatisch voorbereid.",
    serviceSingular: "dienst",
    servicePlural: "diensten",
    selected: "geselecteerd",
    yourRequest: "Uw serviceaanvraag",
    selectedServices: "Geselecteerde diensten",
    noSelection:
      "Er zijn nog geen diensten geselecteerd. Kies hierboven de gewenste diensten.",
    clear: "Selectie wissen",
    contactDetails: "Contactgegevens",
    yourName: "Uw naam",
    namePlaceholder: "Naam",
    contactPerson: "Contactpersoon",
    note: "Aanvullende opmerking",
    notePlaceholder:
      "Vertel ons wat we nog moeten weten over uw sieraad of serviceaanvraag...",
    sentTo: "Aanvraag wordt verstuurd naar",
    whatsapp: "Versturen via WhatsApp",
    email: "Versturen via e-mail",
    noServiceAlert: "Selecteer minimaal één dienst.",
    disclaimer:
      "Het versturen van een aanvraag bevestigt de definitieve prijs niet. Het sieraad wordt persoonlijk geïnspecteerd voordat de prijs wordt bevestigd.",
    closingBefore: "Sieraden zijn persoonlijk.",
    closingAccent: "Service hoort dat ook te zijn.",
    messageHello: "Hallo LIDYA,",
    messageRequest: "Ik wil graag een sieradenservice aanvragen.",
    messageName: "Naam",
    messageNotProvided: "Niet opgegeven",
    messageSelected: "Geselecteerde diensten",
    messageNone: "Geen dienst geselecteerd",
    messageAdditional: "Aanvullende opmerking",
    messageNoNote: "Geen aanvullende opmerking",
    messagePreferred: "Voorkeurscontact",
    messageThanks: "Dank u.",
    emailSubject: "LIDYA Serviceaanvraag",
  },

  da: {
    eyebrow: "Smykke- & urservice",
    title: "Komplet pleje fra rengøring til skræddersyet redesign",
    sub: "Vores værksted tilbyder et komplet udvalg af services. Den endelige pris bekræftes altid efter personlig vurdering.",
    personalSince: "PERSONLIG SERVICE · SIDEN 1989",
    request: "Serviceforespørgsel",
    instruction:
      "Vælg en eller flere services nedenfor. Din forespørgsel forberedes automatisk.",
    serviceSingular: "service",
    servicePlural: "services",
    selected: "valgt",
    yourRequest: "Din serviceforespørgsel",
    selectedServices: "Valgte services",
    noSelection:
      "Der er endnu ikke valgt nogen services. Vælg de ønskede services ovenfor.",
    clear: "Ryd valg",
    contactDetails: "Kontaktoplysninger",
    yourName: "Dit navn",
    namePlaceholder: "Navn",
    contactPerson: "Kontaktperson",
    note: "Ekstra bemærkning",
    notePlaceholder:
      "Fortæl os, hvad vi ellers bør vide om dit smykke eller din serviceforespørgsel...",
    sentTo: "Forespørgslen sendes til",
    whatsapp: "Send via WhatsApp",
    email: "Send via e-mail",
    noServiceAlert: "Vælg mindst én service.",
    disclaimer:
      "En serviceforespørgsel bekræfter ikke den endelige pris. Smykket undersøges personligt, før prisen bekræftes.",
    closingBefore: "Smykker er personlige.",
    closingAccent: "Det bør service også være.",
    messageHello: "Hej LIDYA,",
    messageRequest: "Jeg vil gerne anmode om smykkeservice.",
    messageName: "Navn",
    messageNotProvided: "Ikke angivet",
    messageSelected: "Valgte services",
    messageNone: "Ingen service valgt",
    messageAdditional: "Ekstra bemærkning",
    messageNoNote: "Ingen ekstra bemærkning",
    messagePreferred: "Foretrukken kontaktperson",
    messageThanks: "Tak.",
    emailSubject: "LIDYA Serviceforespørgsel",
  },

  fi: {
    eyebrow: "Koru- & kellohuolto",
    title: "Täydellinen huolenpito puhdistuksesta yksilölliseen uudelleensuunnitteluun",
    sub: "Verstaamme tarjoaa kattavan palveluvalikoiman. Lopullinen hinta vahvistetaan aina henkilökohtaisen tarkastuksen jälkeen.",
    personalSince: "HENKILÖKOHTAINEN PALVELU · VUODESTA 1989",
    request: "Huoltopyyntö",
    instruction:
      "Valitse yksi tai useampi palvelu alta. Pyyntö valmistellaan automaattisesti.",
    serviceSingular: "palvelu",
    servicePlural: "palvelua",
    selected: "valittu",
    yourRequest: "Huoltopyyntösi",
    selectedServices: "Valitut palvelut",
    noSelection:
      "Palveluita ei ole vielä valittu. Valitse tarvitsemasi palvelut yllä olevasta listasta.",
    clear: "Tyhjennä valinta",
    contactDetails: "Yhteystiedot",
    yourName: "Nimesi",
    namePlaceholder: "Nimi",
    contactPerson: "Yhteyshenkilö",
    note: "Lisätiedot",
    notePlaceholder:
      "Kerro meille muuta tärkeää korustasi tai huoltopyynnöstäsi...",
    sentTo: "Pyyntö lähetetään",
    whatsapp: "Lähetä WhatsAppilla",
    email: "Lähetä sähköpostilla",
    noServiceAlert: "Valitse vähintään yksi palvelu.",
    disclaimer:
      "Pyynnön lähettäminen ei vahvista lopullista hintaa. Koru tarkastetaan henkilökohtaisesti ennen hinnan vahvistamista.",
    closingBefore: "Koru on henkilökohtainen.",
    closingAccent: "Niin pitäisi palvelunkin olla.",
    messageHello: "Hei LIDYA,",
    messageRequest: "Haluaisin pyytää koruhuoltoa.",
    messageName: "Nimi",
    messageNotProvided: "Ei ilmoitettu",
    messageSelected: "Valitut palvelut",
    messageNone: "Palvelua ei valittu",
    messageAdditional: "Lisätiedot",
    messageNoNote: "Ei lisätietoja",
    messagePreferred: "Ensisijainen yhteyshenkilö",
    messageThanks: "Kiitos.",
    emailSubject: "LIDYA Huoltopyyntö",
  },

  sv: {
    eyebrow: "Smyckes- & klockservice",
    title: "Komplett omsorg från rengöring till skräddarsydd redesign",
    sub: "Vår verkstad erbjuder ett komplett utbud av tjänster. Slutpriset bekräftas alltid efter personlig inspektion.",
    personalSince: "PERSONLIG SERVICE · SEDAN 1989",
    request: "Serviceförfrågan",
    instruction:
      "Välj en eller flera tjänster nedan. Din förfrågan förbereds automatiskt.",
    serviceSingular: "tjänst",
    servicePlural: "tjänster",
    selected: "valda",
    yourRequest: "Din serviceförfrågan",
    selectedServices: "Valda tjänster",
    noSelection:
      "Inga tjänster har valts ännu. Välj de tjänster du behöver ovan.",
    clear: "Rensa val",
    contactDetails: "Kontaktuppgifter",
    yourName: "Ditt namn",
    namePlaceholder: "Namn",
    contactPerson: "Kontaktperson",
    note: "Ytterligare information",
    notePlaceholder:
      "Berätta vad vi mer bör känna till om ditt smycke eller din serviceförfrågan...",
    sentTo: "Förfrågan skickas till",
    whatsapp: "Skicka via WhatsApp",
    email: "Skicka via e-post",
    noServiceAlert: "Välj minst en tjänst.",
    disclaimer:
      "En serviceförfrågan bekräftar inte det slutliga priset. Smycket inspekteras personligen innan priset bekräftas.",
    closingBefore: "Smycken är personliga.",
    closingAccent: "Service bör också vara det.",
    messageHello: "Hej LIDYA,",
    messageRequest: "Jag vill gärna begära smyckeservice.",
    messageName: "Namn",
    messageNotProvided: "Ej angivet",
    messageSelected: "Valda tjänster",
    messageNone: "Ingen tjänst vald",
    messageAdditional: "Ytterligare information",
    messageNoNote: "Ingen ytterligare information",
    messagePreferred: "Önskad kontaktperson",
    messageThanks: "Tack.",
    emailSubject: "LIDYA Serviceförfrågan",
  },

  fr: {
    eyebrow: "Service bijoux & montres",
    title: "Un soin complet, du nettoyage au redesign sur mesure",
    sub: "Notre atelier propose une gamme complète de services. Le prix définitif est toujours confirmé après une inspection en personne.",
    personalSince: "SERVICE PERSONNALISÉ · DEPUIS 1989",
    request: "Demande de service",
    instruction:
      "Sélectionnez un ou plusieurs services ci-dessous. Votre demande sera préparée automatiquement.",
    serviceSingular: "service",
    servicePlural: "services",
    selected: "sélectionné",
    yourRequest: "Votre demande de service",
    selectedServices: "Services sélectionnés",
    noSelection:
      "Aucun service sélectionné pour le moment. Choisissez les services souhaités ci-dessus.",
    clear: "Effacer la sélection",
    contactDetails: "Coordonnées",
    yourName: "Votre nom",
    namePlaceholder: "Nom",
    contactPerson: "Personne de contact",
    note: "Information complémentaire",
    notePlaceholder:
      "Indiquez-nous toute information supplémentaire concernant votre bijou ou votre demande...",
    sentTo: "La demande sera envoyée à",
    whatsapp: "Envoyer via WhatsApp",
    email: "Envoyer par e-mail",
    noServiceAlert: "Veuillez sélectionner au moins un service.",
    disclaimer:
      "L’envoi d’une demande ne confirme pas le prix final. Le bijou est inspecté en personne avant confirmation du prix.",
    closingBefore: "Un bijou est personnel.",
    closingAccent: "Le service doit l’être aussi.",
    messageHello: "Bonjour LIDYA,",
    messageRequest: "Je souhaite demander un service pour mon bijou.",
    messageName: "Nom",
    messageNotProvided: "Non indiqué",
    messageSelected: "Services sélectionnés",
    messageNone: "Aucun service sélectionné",
    messageAdditional: "Information complémentaire",
    messageNoNote: "Aucune information complémentaire",
    messagePreferred: "Contact préféré",
    messageThanks: "Merci.",
    emailSubject: "Demande de service LIDYA",
  },

  it: {
    eyebrow: "Assistenza gioielli & orologi",
    title: "Cura completa, dalla pulizia al redesign su misura",
    sub: "Il nostro laboratorio offre una gamma completa di servizi. Il prezzo finale viene sempre confermato dopo un’ispezione di persona.",
    personalSince: "SERVIZIO PERSONALE · DAL 1989",
    request: "Richiesta di assistenza",
    instruction:
      "Seleziona uno o più servizi qui sotto. La richiesta sarà preparata automaticamente.",
    serviceSingular: "servizio",
    servicePlural: "servizi",
    selected: "selezionati",
    yourRequest: "La tua richiesta di assistenza",
    selectedServices: "Servizi selezionati",
    noSelection:
      "Nessun servizio selezionato. Scegli i servizi desiderati dall’elenco sopra.",
    clear: "Cancella selezione",
    contactDetails: "Dati di contatto",
    yourName: "Il tuo nome",
    namePlaceholder: "Nome",
    contactPerson: "Persona di contatto",
    note: "Nota aggiuntiva",
    notePlaceholder:
      "Indicaci qualsiasi altra informazione utile sul gioiello o sulla richiesta...",
    sentTo: "La richiesta sarà inviata a",
    whatsapp: "Invia via WhatsApp",
    email: "Invia via e-mail",
    noServiceAlert: "Seleziona almeno un servizio.",
    disclaimer:
      "L’invio della richiesta non conferma il prezzo finale. Il gioiello viene ispezionato di persona prima della conferma del prezzo.",
    closingBefore: "Un gioiello è personale.",
    closingAccent: "Anche il servizio dovrebbe esserlo.",
    messageHello: "Buongiorno LIDYA,",
    messageRequest: "Vorrei richiedere assistenza per un gioiello.",
    messageName: "Nome",
    messageNotProvided: "Non indicato",
    messageSelected: "Servizi selezionati",
    messageNone: "Nessun servizio selezionato",
    messageAdditional: "Nota aggiuntiva",
    messageNoNote: "Nessuna nota aggiuntiva",
    messagePreferred: "Contatto preferito",
    messageThanks: "Grazie.",
    emailSubject: "Richiesta assistenza LIDYA",
  },

  es: {
    eyebrow: "Servicio de joyería & relojería",
    title: "Cuidado completo, desde la limpieza hasta el rediseño a medida",
    sub: "Nuestro taller ofrece una gama completa de servicios. El precio final siempre se confirma después de una inspección presencial.",
    personalSince: "SERVICIO PERSONAL · DESDE 1989",
    request: "Solicitud de servicio",
    instruction:
      "Selecciona uno o varios servicios. Tu solicitud se preparará automáticamente.",
    serviceSingular: "servicio",
    servicePlural: "servicios",
    selected: "seleccionados",
    yourRequest: "Tu solicitud de servicio",
    selectedServices: "Servicios seleccionados",
    noSelection:
      "Todavía no has seleccionado ningún servicio. Elige los servicios que necesitas arriba.",
    clear: "Borrar selección",
    contactDetails: "Datos de contacto",
    yourName: "Tu nombre",
    namePlaceholder: "Nombre",
    contactPerson: "Persona de contacto",
    note: "Nota adicional",
    notePlaceholder:
      "Cuéntanos cualquier otra información relevante sobre tu joya o solicitud...",
    sentTo: "La solicitud se enviará a",
    whatsapp: "Enviar por WhatsApp",
    email: "Enviar por e-mail",
    noServiceAlert: "Selecciona al menos un servicio.",
    disclaimer:
      "Enviar una solicitud no confirma el precio final. La joya se inspecciona personalmente antes de confirmar el precio.",
    closingBefore: "Una joya es personal.",
    closingAccent: "El servicio también debería serlo.",
    messageHello: "Hola LIDYA,",
    messageRequest: "Me gustaría solicitar un servicio de joyería.",
    messageName: "Nombre",
    messageNotProvided: "No indicado",
    messageSelected: "Servicios seleccionados",
    messageNone: "Ningún servicio seleccionado",
    messageAdditional: "Nota adicional",
    messageNoNote: "Sin nota adicional",
    messagePreferred: "Contacto preferido",
    messageThanks: "Gracias.",
    emailSubject: "Solicitud de servicio LIDYA",
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