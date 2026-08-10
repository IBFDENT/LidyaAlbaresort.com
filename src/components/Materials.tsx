"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type MaterialKind =
  | "white-gold"
  | "yellow-gold"
  | "rose-gold"
  | "platinum"
  | "diamond"
  | "precious-stone"
  | "pearl";

type MaterialItem = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  kind: MaterialKind;
};

const MATERIALS: Record<Locale, MaterialItem[]> = {
  en: [
    {
      number: "01",
      title: "White Gold",
      subtitle: "Cool brilliance",
      description:
        "Timeless, elegant and versatile — chosen for its refined luminosity.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Yellow Gold",
      subtitle: "Warm heritage",
      description:
        "A classic expression of luxury with a rich, unmistakable warmth.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Rose Gold",
      subtitle: "Soft character",
      description:
        "A contemporary tone with a delicate warmth and distinctive presence.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platinum",
      subtitle: "Pure endurance",
      description:
        "Exceptional strength, rarity and a naturally refined white finish.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamonds",
      subtitle: "Enduring brilliance",
      description:
        "Selected for exceptional light, precision and lasting emotional value.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Precious Stones",
      subtitle: "Colour & individuality",
      description:
        "Distinctive stones chosen for their depth, colour and unique character.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Pearls",
      subtitle: "Natural elegance",
      description:
        "A timeless pleasure, celebrated for softness, lustre and quiet beauty.",
      kind: "pearl",
    },
  ],

  de: [
    {
      number: "01",
      title: "Weißgold",
      subtitle: "Kühle Brillanz",
      description:
        "Zeitlos, elegant und vielseitig — ausgewählt für seine edle Leuchtkraft.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Gelbgold",
      subtitle: "Warme Tradition",
      description:
        "Ein klassischer Ausdruck von Luxus mit unverwechselbarer Wärme.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Roségold",
      subtitle: "Sanfter Charakter",
      description:
        "Ein moderner Farbton mit feiner Wärme und unverwechselbarer Präsenz.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platin",
      subtitle: "Pure Beständigkeit",
      description:
        "Außergewöhnliche Stärke, Seltenheit und ein natürlich edles Weiß.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamanten",
      subtitle: "Bleibende Brillanz",
      description:
        "Ausgewählt für außergewöhnliches Licht, Präzision und bleibenden emotionalen Wert.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Edelsteine",
      subtitle: "Farbe & Individualität",
      description:
        "Ausdrucksstarke Steine, ausgewählt nach Tiefe, Farbe und einzigartigem Charakter.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perlen",
      subtitle: "Natürliche Eleganz",
      description:
        "Zeitlose Schönheit, geschätzt für Sanftheit, Lüster und stille Eleganz.",
      kind: "pearl",
    },
  ],

  tr: [
    {
      number: "01",
      title: "Beyaz Altın",
      subtitle: "Serin parlaklık",
      description:
        "Zamansız, zarif ve çok yönlü — rafine ışıltısı için seçilir.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Sarı Altın",
      subtitle: "Sıcak gelenek",
      description:
        "Zengin ve ayırt edici sıcaklığıyla lüksün klasik bir ifadesi.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Rose Altın",
      subtitle: "Yumuşak karakter",
      description:
        "Narin sıcaklığa ve kendine özgü bir duruşa sahip çağdaş bir ton.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platin",
      subtitle: "Saf dayanıklılık",
      description:
        "Olağanüstü dayanıklılık, nadirlik ve doğal olarak rafine beyaz görünüm.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Elmaslar",
      subtitle: "Kalıcı ışıltı",
      description:
        "Olağanüstü ışık, hassasiyet ve kalıcı duygusal değer için seçilir.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Değerli Taşlar",
      subtitle: "Renk & özgünlük",
      description:
        "Derinlikleri, renkleri ve benzersiz karakterleri için seçilen özel taşlar.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "İnciler",
      subtitle: "Doğal zarafet",
      description:
        "Yumuşaklığı, parlaklığı ve sakin güzelliğiyle zamansız bir zarafet.",
      kind: "pearl",
    },
  ],

  sk: [
    {
      number: "01",
      title: "Biele zlato",
      subtitle: "Chladný lesk",
      description:
        "Nadčasové, elegantné a univerzálne — vybrané pre svoj ušľachtilý jas.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Žlté zlato",
      subtitle: "Teplá tradícia",
      description:
        "Klasické vyjadrenie luxusu s bohatým a nezameniteľným teplým odtieňom.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Ružové zlato",
      subtitle: "Jemný charakter",
      description:
        "Moderný tón s jemným teplom a výraznou osobitosťou.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platina",
      subtitle: "Čistá odolnosť",
      description:
        "Výnimočná pevnosť, vzácnosť a prirodzene elegantný biely vzhľad.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamanty",
      subtitle: "Trvalý lesk",
      description:
        "Vyberané pre výnimočnú hru svetla, precíznosť a trvalú emocionálnu hodnotu.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Drahé kamene",
      subtitle: "Farba & jedinečnosť",
      description:
        "Výrazné kamene vybrané pre svoju hĺbku, farbu a jedinečný charakter.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perly",
      subtitle: "Prirodzená elegancia",
      description:
        "Nadčasová krása oceňovaná pre jemnosť, lesk a nenápadnú eleganciu.",
      kind: "pearl",
    },
  ],

  cs: [
    {
      number: "01",
      title: "Bílé zlato",
      subtitle: "Chladný lesk",
      description:
        "Nadčasové, elegantní a univerzální — vybrané pro svůj ušlechtilý jas.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Žluté zlato",
      subtitle: "Teplá tradice",
      description:
        "Klasické vyjádření luxusu s bohatým a nezaměnitelným teplým odstínem.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Růžové zlato",
      subtitle: "Jemný charakter",
      description:
        "Moderní tón s jemným teplem a výraznou osobitostí.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platina",
      subtitle: "Čistá odolnost",
      description:
        "Výjimečná pevnost, vzácnost a přirozeně elegantní bílý vzhled.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamanty",
      subtitle: "Trvalý lesk",
      description:
        "Vybrané pro výjimečnou hru světla, přesnost a trvalou emocionální hodnotu.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Drahé kameny",
      subtitle: "Barva & jedinečnost",
      description:
        "Výrazné kameny vybrané pro svou hloubku, barvu a jedinečný charakter.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perly",
      subtitle: "Přirozená elegance",
      description:
        "Nadčasová krása ceněná pro jemnost, lesk a nenápadnou eleganci.",
      kind: "pearl",
    },
  ],

  hu: [
    {
      number: "01",
      title: "Fehérarany",
      subtitle: "Hűvös ragyogás",
      description:
        "Időtlen, elegáns és sokoldalú — kifinomult fényéért választva.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Sárgaarany",
      subtitle: "Meleg hagyomány",
      description:
        "A luxus klasszikus kifejezése gazdag, összetéveszthetetlen melegséggel.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Rozéarany",
      subtitle: "Lágy karakter",
      description:
        "Kortárs árnyalat finom melegséggel és jellegzetes megjelenéssel.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platina",
      subtitle: "Tiszta tartósság",
      description:
        "Kivételes szilárdság, ritkaság és természetesen kifinomult fehér felület.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Gyémántok",
      subtitle: "Tartós ragyogás",
      description:
        "Kivételes fényük, pontosságuk és maradandó érzelmi értékük miatt választva.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Drágakövek",
      subtitle: "Szín & egyediség",
      description:
        "Karakteres kövek, amelyeket mélységük, színük és egyedi jellegük miatt választunk.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Gyöngyök",
      subtitle: "Természetes elegancia",
      description:
        "Időtlen szépség, amelyet lágysága, fénye és visszafogott eleganciája tesz különlegessé.",
      kind: "pearl",
    },
  ],

  pl: [
    {
      number: "01",
      title: "Białe złoto",
      subtitle: "Chłodny blask",
      description:
        "Ponadczasowe, eleganckie i wszechstronne — wybrane ze względu na szlachetny blask.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Żółte złoto",
      subtitle: "Ciepłe dziedzictwo",
      description:
        "Klasyczny wyraz luksusu o bogatym i niepowtarzalnym ciepłym odcieniu.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Różowe złoto",
      subtitle: "Subtelny charakter",
      description:
        "Współczesny odcień o delikatnym cieple i wyjątkowej osobowości.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platyna",
      subtitle: "Czysta trwałość",
      description:
        "Wyjątkowa wytrzymałość, rzadkość i naturalnie szlachetna biała barwa.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamenty",
      subtitle: "Trwały blask",
      description:
        "Wybrane ze względu na wyjątkową grę światła, precyzję i trwałą wartość emocjonalną.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Kamienie szlachetne",
      subtitle: "Kolor & indywidualność",
      description:
        "Wyraziste kamienie wybrane ze względu na głębię, kolor i unikalny charakter.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perły",
      subtitle: "Naturalna elegancja",
      description:
        "Ponadczasowe piękno cenione za subtelność, połysk i spokojną elegancję.",
      kind: "pearl",
    },
  ],

  ru: [
    {
      number: "01",
      title: "Белое золото",
      subtitle: "Холодное сияние",
      description:
        "Вневременное, элегантное и универсальное — выбрано за утончённое сияние.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Жёлтое золото",
      subtitle: "Тёплая традиция",
      description:
        "Классическое воплощение роскоши с насыщенным и узнаваемым тёплым оттенком.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Розовое золото",
      subtitle: "Мягкий характер",
      description:
        "Современный оттенок с деликатным теплом и выразительным присутствием.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Платина",
      subtitle: "Чистая прочность",
      description:
        "Исключительная прочность, редкость и естественный благородный белый оттенок.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Бриллианты",
      subtitle: "Непреходящее сияние",
      description:
        "Отобраны за исключительную игру света, точность и долговечную эмоциональную ценность.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Драгоценные камни",
      subtitle: "Цвет & индивидуальность",
      description:
        "Выразительные камни, выбранные за глубину, цвет и уникальный характер.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Жемчуг",
      subtitle: "Естественная элегантность",
      description:
        "Вневременная красота, ценимая за мягкость, блеск и утончённость.",
      kind: "pearl",
    },
  ],

  nl: [
    {
      number: "01",
      title: "Witgoud",
      subtitle: "Koele schittering",
      description:
        "Tijdloos, elegant en veelzijdig — gekozen om zijn verfijnde glans.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Geelgoud",
      subtitle: "Warme traditie",
      description:
        "Een klassieke uitdrukking van luxe met een rijke en herkenbare warmte.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Roségoud",
      subtitle: "Zacht karakter",
      description:
        "Een eigentijdse tint met subtiele warmte en een uitgesproken uitstraling.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platina",
      subtitle: "Pure duurzaamheid",
      description:
        "Uitzonderlijke sterkte, zeldzaamheid en een natuurlijk verfijnde witte uitstraling.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamanten",
      subtitle: "Blijvende schittering",
      description:
        "Geselecteerd om uitzonderlijk licht, precisie en blijvende emotionele waarde.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Edelstenen",
      subtitle: "Kleur & individualiteit",
      description:
        "Bijzondere stenen geselecteerd om hun diepte, kleur en unieke karakter.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Parels",
      subtitle: "Natuurlijke elegantie",
      description:
        "Tijdloze schoonheid, gewaardeerd om zachtheid, glans en ingetogen elegantie.",
      kind: "pearl",
    },
  ],

  da: [
    {
      number: "01",
      title: "Hvidguld",
      subtitle: "Kølig glans",
      description:
        "Tidløst, elegant og alsidigt — valgt for sin raffinerede glød.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Gult guld",
      subtitle: "Varm tradition",
      description:
        "Et klassisk udtryk for luksus med en rig og umiskendelig varme.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Rosaguld",
      subtitle: "Blød karakter",
      description:
        "En moderne tone med diskret varme og et karakteristisk udtryk.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platin",
      subtitle: "Ren holdbarhed",
      description:
        "Enestående styrke, sjældenhed og en naturligt raffineret hvid finish.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamanter",
      subtitle: "Varig glans",
      description:
        "Udvalgt for exceptionelt lys, præcision og varig følelsesmæssig værdi.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Ædelsten",
      subtitle: "Farve & individualitet",
      description:
        "Karakterfulde sten udvalgt for deres dybde, farve og unikke udtryk.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perler",
      subtitle: "Naturlig elegance",
      description:
        "Tidløs skønhed værdsat for blødhed, glans og diskret elegance.",
      kind: "pearl",
    },
  ],

  fi: [
    {
      number: "01",
      title: "Valkokulta",
      subtitle: "Viileä loisto",
      description:
        "Ajaton, elegantti ja monikäyttöinen — valittu hienostuneen hohteensa vuoksi.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Keltakulta",
      subtitle: "Lämmin perinne",
      description:
        "Klassinen ylellisyyden ilmentymä, jossa on täyteläinen ja tunnistettava lämpö.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Ruusukulta",
      subtitle: "Pehmeä luonne",
      description:
        "Moderni sävy, jossa yhdistyvät hienovarainen lämpö ja persoonallinen ilme.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platina",
      subtitle: "Puhdas kestävyys",
      description:
        "Poikkeuksellinen lujuus, harvinaisuus ja luonnollisen hienostunut vaalea pinta.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Timantit",
      subtitle: "Kestävä loisto",
      description:
        "Valittu poikkeuksellisen valon, tarkkuuden ja pysyvän tunne-arvon vuoksi.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Jalokivet",
      subtitle: "Väri & yksilöllisyys",
      description:
        "Persoonalliset kivet, jotka on valittu syvyyden, värin ja ainutlaatuisen luonteen vuoksi.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Helmet",
      subtitle: "Luonnollinen eleganssi",
      description:
        "Ajaton kauneus, jota arvostetaan pehmeyden, kiillon ja hillityn eleganssin vuoksi.",
      kind: "pearl",
    },
  ],

  sv: [
    {
      number: "01",
      title: "Vitguld",
      subtitle: "Kall glans",
      description:
        "Tidlöst, elegant och mångsidigt — valt för sin raffinerade lyster.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Gulguld",
      subtitle: "Varm tradition",
      description:
        "Ett klassiskt uttryck för lyx med en rik och omisskännlig värme.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Roséguld",
      subtitle: "Mjuk karaktär",
      description:
        "En modern ton med subtil värme och en tydlig personlighet.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platina",
      subtitle: "Ren hållbarhet",
      description:
        "Exceptionell styrka, sällsynthet och en naturligt elegant vit finish.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamanter",
      subtitle: "Bestående briljans",
      description:
        "Utvalda för exceptionellt ljus, precision och varaktigt emotionellt värde.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Ädelstenar",
      subtitle: "Färg & individualitet",
      description:
        "Karaktärsfulla stenar utvalda för sitt djup, sin färg och unika karaktär.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Pärlor",
      subtitle: "Naturlig elegans",
      description:
        "Tidlös skönhet uppskattad för mjukhet, lyster och diskret elegans.",
      kind: "pearl",
    },
  ],

  fr: [
    {
      number: "01",
      title: "Or blanc",
      subtitle: "Éclat frais",
      description:
        "Intemporel, élégant et polyvalent — choisi pour sa luminosité raffinée.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Or jaune",
      subtitle: "Chaleur classique",
      description:
        "Une expression classique du luxe avec une chaleur riche et reconnaissable.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Or rose",
      subtitle: "Caractère délicat",
      description:
        "Une teinte contemporaine à la chaleur subtile et à la présence distinctive.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platine",
      subtitle: "Résistance pure",
      description:
        "Une résistance exceptionnelle, une grande rareté et une finition blanche naturellement raffinée.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamants",
      subtitle: "Brillance durable",
      description:
        "Sélectionnés pour leur lumière exceptionnelle, leur précision et leur valeur émotionnelle durable.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Pierres précieuses",
      subtitle: "Couleur & personnalité",
      description:
        "Des pierres distinctives choisies pour leur profondeur, leur couleur et leur caractère unique.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perles",
      subtitle: "Élégance naturelle",
      description:
        "Une beauté intemporelle appréciée pour sa douceur, son lustre et son élégance discrète.",
      kind: "pearl",
    },
  ],

  it: [
    {
      number: "01",
      title: "Oro bianco",
      subtitle: "Brillantezza fredda",
      description:
        "Senza tempo, elegante e versatile — scelto per la sua luminosità raffinata.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Oro giallo",
      subtitle: "Calore della tradizione",
      description:
        "Un’espressione classica del lusso con un calore ricco e inconfondibile.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Oro rosa",
      subtitle: "Carattere delicato",
      description:
        "Una tonalità contemporanea con calore delicato e presenza distintiva.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platino",
      subtitle: "Resistenza pura",
      description:
        "Forza eccezionale, rarità e una finitura bianca naturalmente raffinata.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamanti",
      subtitle: "Brillantezza duratura",
      description:
        "Selezionati per luce eccezionale, precisione e valore emotivo duraturo.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Pietre preziose",
      subtitle: "Colore & individualità",
      description:
        "Pietre distintive scelte per profondità, colore e carattere unico.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perle",
      subtitle: "Eleganza naturale",
      description:
        "Una bellezza senza tempo apprezzata per morbidezza, lucentezza ed eleganza discreta.",
      kind: "pearl",
    },
  ],

  es: [
    {
      number: "01",
      title: "Oro blanco",
      subtitle: "Brillo frío",
      description:
        "Atemporal, elegante y versátil — elegido por su luminosidad refinada.",
      kind: "white-gold",
    },
    {
      number: "02",
      title: "Oro amarillo",
      subtitle: "Calidez clásica",
      description:
        "Una expresión clásica del lujo con una calidez rica e inconfundible.",
      kind: "yellow-gold",
    },
    {
      number: "03",
      title: "Oro rosa",
      subtitle: "Carácter suave",
      description:
        "Un tono contemporáneo con calidez delicada y una presencia distintiva.",
      kind: "rose-gold",
    },
    {
      number: "04",
      title: "Platino",
      subtitle: "Resistencia pura",
      description:
        "Fuerza excepcional, rareza y un acabado blanco naturalmente refinado.",
      kind: "platinum",
    },
    {
      number: "05",
      title: "Diamantes",
      subtitle: "Brillo duradero",
      description:
        "Seleccionados por su luz excepcional, precisión y valor emocional duradero.",
      kind: "diamond",
    },
    {
      number: "06",
      title: "Piedras preciosas",
      subtitle: "Color & individualidad",
      description:
        "Piedras distintivas elegidas por su profundidad, color y carácter único.",
      kind: "precious-stone",
    },
    {
      number: "07",
      title: "Perlas",
      subtitle: "Elegancia natural",
      description:
        "Una belleza atemporal apreciada por su suavidad, lustre y elegancia discreta.",
      kind: "pearl",
    },
  ],
};

const MATERIAL_COPY: Record<
  Locale,
  {
    intro: string;
    closingBefore: string;
    closingAccent: string;
    closingAfter: string;
  }
> = {
  en: {
    intro:
      "Precious materials are selected not only for beauty, but for integrity, longevity and the way they become part of a lifetime.",
    closingBefore: "Beauty begins with the material,",
    closingAccent: "value",
    closingAfter: "begins with how it is chosen.",
  },
  de: {
    intro:
      "Kostbare Materialien werden nicht nur nach ihrer Schönheit ausgewählt, sondern auch nach Qualität, Beständigkeit und ihrer Fähigkeit, ein Leben lang zu begleiten.",
    closingBefore: "Schönheit beginnt mit dem Material,",
    closingAccent: "Wert",
    closingAfter: "beginnt mit seiner Auswahl.",
  },
  tr: {
    intro:
      "Değerli malzemeler yalnızca güzellikleri için değil, bütünlükleri, dayanıklılıkları ve yaşamın bir parçası olma biçimleri için seçilir.",
    closingBefore: "Güzellik malzemeyle başlar,",
    closingAccent: "değer",
    closingAfter: "onun nasıl seçildiğiyle başlar.",
  },
  sk: {
    intro:
      "Vzácne materiály vyberáme nielen pre ich krásu, ale aj pre kvalitu, trvácnosť a schopnosť stať sa súčasťou celého života.",
    closingBefore: "Krása sa začína materiálom,",
    closingAccent: "hodnota",
    closingAfter: "spôsobom, akým je vybraný.",
  },
  cs: {
    intro:
      "Vzácné materiály vybíráme nejen pro jejich krásu, ale také pro kvalitu, trvanlivost a schopnost stát se součástí celého života.",
    closingBefore: "Krása začíná materiálem,",
    closingAccent: "hodnota",
    closingAfter: "způsobem, jakým je vybrán.",
  },
  hu: {
    intro:
      "Az értékes anyagokat nemcsak szépségükért választjuk, hanem minőségükért, tartósságukért és azért is, ahogyan egy élet részévé válhatnak.",
    closingBefore: "A szépség az anyaggal kezdődik,",
    closingAccent: "az érték",
    closingAfter: "pedig a választás módjával.",
  },
  pl: {
    intro:
      "Szlachetne materiały wybieramy nie tylko ze względu na piękno, lecz także jakość, trwałość i sposób, w jaki stają się częścią życia.",
    closingBefore: "Piękno zaczyna się od materiału,",
    closingAccent: "wartość",
    closingAfter: "od sposobu jego wyboru.",
  },
  ru: {
    intro:
      "Драгоценные материалы выбираются не только за красоту, но и за качество, долговечность и способность стать частью целой жизни.",
    closingBefore: "Красота начинается с материала,",
    closingAccent: "ценность",
    closingAfter: "— с того, как он выбран.",
  },
  nl: {
    intro:
      "Kostbare materialen worden niet alleen gekozen om hun schoonheid, maar ook om hun kwaliteit, duurzaamheid en de manier waarop ze deel worden van een leven.",
    closingBefore: "Schoonheid begint bij het materiaal,",
    closingAccent: "waarde",
    closingAfter: "begint bij de manier waarop het wordt gekozen.",
  },
  da: {
    intro:
      "Ædle materialer vælges ikke kun for deres skønhed, men også for kvalitet, holdbarhed og evnen til at blive en del af et helt liv.",
    closingBefore: "Skønhed begynder med materialet,",
    closingAccent: "værdi",
    closingAfter: "begynder med måden, det udvælges på.",
  },
  fi: {
    intro:
      "Arvokkaat materiaalit valitaan paitsi kauneutensa myös laatunsa, kestävyytensä ja elinikäisen merkityksensä vuoksi.",
    closingBefore: "Kauneus alkaa materiaalista,",
    closingAccent: "arvo",
    closingAfter: "siitä, miten se valitaan.",
  },
  sv: {
    intro:
      "Ädla material väljs inte bara för sin skönhet, utan också för sin kvalitet, hållbarhet och förmåga att bli en del av ett helt liv.",
    closingBefore: "Skönhet börjar med materialet,",
    closingAccent: "värde",
    closingAfter: "börjar med hur det väljs.",
  },
  fr: {
    intro:
      "Les matériaux précieux sont choisis non seulement pour leur beauté, mais aussi pour leur qualité, leur durabilité et leur capacité à accompagner toute une vie.",
    closingBefore: "La beauté commence par la matière,",
    closingAccent: "la valeur",
    closingAfter: "par la manière dont elle est choisie.",
  },
  it: {
    intro:
      "I materiali preziosi vengono scelti non solo per la loro bellezza, ma anche per qualità, durata e capacità di diventare parte di una vita.",
    closingBefore: "La bellezza inizia dal materiale,",
    closingAccent: "il valore",
    closingAfter: "da come viene scelto.",
  },
  es: {
    intro:
      "Los materiales preciosos se eligen no solo por su belleza, sino también por su calidad, durabilidad y capacidad de formar parte de toda una vida.",
    closingBefore: "La belleza comienza con el material,",
    closingAccent: "el valor",
    closingAfter: "con la forma en que se elige.",
  },
};

function MetallicMedallion({
  type,
}: {
  type: "white-gold" | "yellow-gold" | "rose-gold" | "platinum";
}) {
  const styles = {
    "white-gold": {
      background:
        "conic-gradient(from 25deg, #ffffff, #bfc2c6, #f7f7f5, #969ba1, #ffffff, #c7c9cc, #ffffff)",
      shadow: "0 0 26px rgba(235,238,240,0.22)",
      border: "rgba(255,255,255,0.55)",
    },
    "yellow-gold": {
      background:
        "conic-gradient(from 25deg, #fff1a8, #b98022, #f7d46c, #9c6817, #fff0a0, #c68d29, #f7d46c)",
      shadow: "0 0 30px rgba(200,169,106,0.32)",
      border: "rgba(241,211,141,0.62)",
    },
    "rose-gold": {
      background:
        "conic-gradient(from 25deg, #ffd4bd, #b87557, #efb69b, #9f5e48, #ffd0b7, #c98466, #f2bda3)",
      shadow: "0 0 28px rgba(226,155,125,0.25)",
      border: "rgba(255,200,177,0.52)",
    },
    platinum: {
      background:
        "conic-gradient(from 25deg, #ffffff, #92969a, #e7e7e5, #70757a, #ffffff, #a9adb0, #f0f0ee)",
      shadow: "0 0 28px rgba(224,227,228,0.2)",
      border: "rgba(255,255,255,0.48)",
    },
  } as const;

  const style = styles[type];

  return (
    <span
      className="relative block h-11 w-11 rounded-full transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[12deg] md:h-12 md:w-12"
      style={{
        background: style.background,
        boxShadow: style.shadow,
        border: `1px solid ${style.border}`,
      }}
    >
      <span
        className="absolute inset-[2px] rounded-full opacity-80"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 30%, transparent 60%, rgba(255,255,255,0.18) 100%)",
        }}
      />

      <span
        className="absolute left-1/2 top-1/2 h-[1px] w-[82%] -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] opacity-30"
        style={{ background: "rgba(255,255,255,0.95)" }}
      />
    </span>
  );
}

function DiamondMark() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-110">
      <span className="absolute inset-1 rounded-full bg-brand-white/5 blur-md transition-all duration-700 group-hover:bg-brand-white/15" />

      <svg
        viewBox="0 0 64 64"
        className="relative h-11 w-11 overflow-visible drop-shadow-[0_0_12px_rgba(255,255,255,0.18)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="diamond-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#D8E0E6" />
            <stop offset="100%" stopColor="#8F9BA5" />
          </linearGradient>

          <linearGradient id="diamond-left" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7F8F8" />
            <stop offset="100%" stopColor="#A8B2BA" />
          </linearGradient>

          <linearGradient id="diamond-right" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#BBC4CA" />
          </linearGradient>
        </defs>

        <polygon
          points="12,22 20,12 44,12 52,22 32,53"
          fill="url(#diamond-top)"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1"
        />

        <polygon
          points="12,22 25,22 32,53"
          fill="url(#diamond-left)"
          opacity="0.88"
        />

        <polygon
          points="25,22 39,22 32,53"
          fill="#EEF2F4"
          opacity="0.9"
        />

        <polygon
          points="39,22 52,22 32,53"
          fill="url(#diamond-right)"
          opacity="0.82"
        />

        <polyline
          points="20,12 25,22 32,12 39,22 44,12"
          fill="none"
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="1"
        />

        <line
          x1="12"
          y1="22"
          x2="52"
          y2="22"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1"
        />
      </svg>
    </span>
  );
}

function BrilliantMark() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center transition-all duration-700 ease-out group-hover:rotate-[18deg] group-hover:scale-110">
      <span className="absolute inset-1 rounded-full bg-brand-white/5 blur-md transition-all duration-700 group-hover:bg-brand-white/15" />

      <svg
        viewBox="0 0 64 64"
        className="relative h-11 w-11 drop-shadow-[0_0_12px_rgba(255,255,255,0.16)]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="brilliant-core">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor="#E9EEF1" />
            <stop offset="100%" stopColor="#9FAAB2" />
          </radialGradient>
        </defs>

        <circle
          cx="32"
          cy="32"
          r="23"
          fill="url(#brilliant-core)"
          stroke="rgba(255,255,255,0.75)"
        />

        <polygon points="32,9 40,18 32,32 24,18" fill="#FFFFFF" opacity="0.8" />
        <polygon points="55,32 46,40 32,32 46,24" fill="#BAC5CC" opacity="0.82" />
        <polygon points="32,55 24,46 32,32 40,46" fill="#E9EEF1" opacity="0.78" />
        <polygon points="9,32 18,24 32,32 18,40" fill="#A9B4BC" opacity="0.82" />
        <polygon points="18,18 32,32 24,18" fill="#CBD4D9" opacity="0.9" />
        <polygon points="46,18 40,18 32,32" fill="#F7F9FA" opacity="0.95" />
        <polygon points="46,46 32,32 40,46" fill="#AEB9C0" opacity="0.82" />
        <polygon points="18,46 24,46 32,32" fill="#F6F8F9" opacity="0.9" />

        <circle cx="32" cy="32" r="7" fill="#FFFFFF" opacity="0.7" />

        <circle
          cx="32"
          cy="32"
          r="22"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
        />
      </svg>
    </span>
  );
}

function PearlMark() {
  return (
    <span className="relative flex h-12 w-12 items-center justify-center transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-110">
      <span
        className="block h-10 w-10 rounded-full border border-white/40 md:h-11 md:w-11"
        style={{
          background:
            "radial-gradient(circle at 32% 27%, #ffffff 0%, #f6f1e9 22%, #d8d0c4 58%, #aaa196 82%, #7e776f 100%)",
          boxShadow:
            "0 0 28px rgba(255,248,235,0.22), inset -7px -8px 12px rgba(90,80,72,0.17), inset 7px 7px 12px rgba(255,255,255,0.55)",
        }}
      />

      <span className="absolute left-[13px] top-[11px] h-2.5 w-2.5 rounded-full bg-white/65 blur-[1px]" />
    </span>
  );
}

function MaterialSymbol({ kind }: { kind: MaterialKind }) {
  if (
    kind === "white-gold" ||
    kind === "yellow-gold" ||
    kind === "rose-gold" ||
    kind === "platinum"
  ) {
    return <MetallicMedallion type={kind} />;
  }

  if (kind === "diamond") {
    return <DiamondMark />;
  }

  if (kind === "precious-stone") {
    return <BrilliantMark />;
  }

  return <PearlMark />;
}

export default function Materials() {
  const { dictionary: dict, locale } = useLanguage();

  const materials = MATERIALS[locale];
  const copy = MATERIAL_COPY[locale];

  return (
    <section
      id="materials"
      className="relative overflow-hidden bg-plum-dark py-24 text-brand-white md:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-7 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {dict.materials.eyebrow}
            </span>

            <h2
              className="max-w-[850px] font-display text-5xl italic leading-[0.93] tracking-[-0.03em] md:text-6xl lg:text-[5.2rem]"
              style={{ color: "#E8D8B5" }}
            >
              {dict.materials.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-brand-white/65 md:text-base">
              {copy.intro}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-brand-white/45">
                LIDYA · {dict.strip.since}
              </span>
            </div>
          </div>
        </div>

        {/* MATERIALS LIST */}
        <div className="border-t border-brand-white/12">
          {materials.map((material) => (
            <div
              key={material.number}
              className="group relative grid gap-5 border-b border-brand-white/12 py-8 transition-all duration-500 hover:bg-brand-white/[0.035] md:grid-cols-12 md:items-center md:px-4 md:py-10"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/4 top-1/2 h-24 w-48 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

                <div className="absolute right-0 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-brand-white/[0.035] blur-2xl" />
              </div>

              <div className="relative md:col-span-1">
                <span className="text-[0.62rem] font-semibold tracking-[0.24em] text-gold/85">
                  {material.number}
                </span>
              </div>

              <div className="relative md:col-span-4">
                <h3
                  className="font-display text-3xl transition-all duration-500 group-hover:translate-x-1 md:text-4xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {material.title}
                </h3>
              </div>

              <div className="relative md:col-span-3">
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-white/45 transition-colors duration-500 group-hover:text-brand-white/70">
                  {material.subtitle}
                </span>
              </div>

              <div className="relative md:col-span-3">
                <p className="max-w-md text-sm leading-6 text-brand-white/60 transition-colors duration-500 group-hover:text-brand-white/80">
                  {material.description}
                </p>
              </div>

              <div className="relative hidden justify-end md:col-span-1 md:flex">
                <MaterialSymbol kind={material.kind} />
              </div>
            </div>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mx-auto mt-20 max-w-[980px] text-center md:mt-28">
          <span className="mx-auto mb-8 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#F5EFE6" }}
          >
            {copy.closingBefore}{" "}
            <span style={{ color: "#E8D8B5" }}>
              {copy.closingAccent}
            </span>{" "}
            {copy.closingAfter}
          </p>
        </div>
      </div>
    </section>
  );
}