import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

export const DESIGN_TEXT: Record<string, LocalizedText> = {
  heroEyebrow: {
    de: "Design",
    en: "Design",
    tr: "Tasarım",
    sk: "Dizajn",
    cs: "Design",
    hu: "Design",
    pl: "Design",
  },
  heroTitle: {
    de: "Jede Saison eine neue Kollektion",
    en: "A New Collection, Every Season",
    tr: "Her Mevsim Yeni Bir Koleksiyon",
    sk: "Každú sezónu nová kolekcia",
    cs: "Každou sezónu nová kolekce",
    hu: "Minden évszakban új kollekció",
    pl: "Każdy sezon to nowa kolekcja",
  },
  heroLead: {
    de: "Jedes Stück bei LIDYA JEWELRY wird bei uns entworfen und von Hand gefertigt. Viermal im Jahr — mit jedem Jahreszeitenwechsel — stellen wir eine neue Kollektion vor, damit es immer etwas Neues zu entdecken, zu tragen und zu verschenken gibt.",
    en: "Every piece at LIDYA JEWELRY is designed and handcrafted in-house. Four times a year — with the turn of each season — we introduce a new collection, so there's always something new to discover, wear and give.",
    tr: "LIDYA JEWELRY'deki her parça bizzat tasarlanır ve elde işlenir. Yılda dört kez — her mevsim dönümünde — yeni bir koleksiyon sunuyoruz, böylece her zaman keşfedilecek, takılacak ve hediye edilecek yeni bir şey oluyor.",
    sk: "Každý kus v LIDYA JEWELRY navrhujeme a ručne vyrábame priamo u nás. Štyrikrát do roka — s príchodom každej sezóny — predstavujeme novú kolekciu, aby bolo vždy čo objavovať, nosiť a darovať.",
    cs: "Každý kus v LIDYA JEWELRY navrhujeme a ručně vyrábíme přímo u nás. Čtyřikrát do roka — s příchodem každé sezóny — představujeme novou kolekci, aby bylo vždy co objevovat, nosit a darovat.",
    hu: "A LIDYA JEWELRY minden darabját mi magunk tervezzük és kézzel készítjük. Évente négyszer — minden évszakváltáskor — új kollekciót mutatunk be, hogy mindig legyen mit felfedezni, viselni és ajándékozni.",
    pl: "Każdy element w LIDYA JEWELRY projektujemy i wykonujemy ręcznie we własnym atelier. Cztery razy w roku — wraz ze zmianą pory roku — prezentujemy nową kolekcję, dzięki czemu zawsze jest coś nowego do odkrycia, noszenia i podarowania.",
  },
  sectionEyebrow: {
    de: "Die vier Kollektionen",
    en: "The Four Collections",
    tr: "Dört Koleksiyon",
    sk: "Štyri kolekcie",
    cs: "Čtyři kolekce",
    hu: "A négy kollekció",
    pl: "Cztery kolekcje",
  },
  sectionTitle: {
    de: "Frühling, Sommer, Herbst, Winter",
    en: "Spring, Summer, Autumn, Winter",
    tr: "İlkbahar, Yaz, Sonbahar, Kış",
    sk: "Jar, leto, jeseň, zima",
    cs: "Jaro, léto, podzim, zima",
    hu: "Tavasz, nyár, ősz, tél",
    pl: "Wiosna, lato, jesień, zima",
  },
  ctaTitle: {
    de: "Entdecken Sie die aktuelle Kollektion",
    en: "Discover the Current Collection",
    tr: "Güncel Koleksiyonu Keşfedin",
    sk: "Objavte aktuálnu kolekciu",
    cs: "Objevte aktuální kolekci",
    hu: "Fedezze fel az aktuális kollekciót",
    pl: "Odkryj aktualną kolekcję",
  },
  ctaSub: {
    de: "Besuchen Sie eine unserer Boutiquen oder vereinbaren Sie einen privaten Termin, um die neueste Saisonkollektion in Person zu sehen.",
    en: "Visit one of our boutiques or book a private appointment to see the latest seasonal collection in person.",
    tr: "En son sezon koleksiyonunu birebir görmek için butiklerimizden birini ziyaret edin veya özel bir randevu alın.",
    sk: "Navštívte niektorý z našich butikov alebo si dohodnite súkromné stretnutie a pozrite si najnovšiu sezónnu kolekciu naživo.",
    cs: "Navštivte některý z našich butiků nebo si domluvte soukromou schůzku a prohlédněte si nejnovější sezónní kolekci naživo.",
    hu: "Látogasson el valamelyik butikunkba, vagy foglaljon privát időpontot, hogy személyesen is megtekinthesse a legújabb szezonális kollekciót.",
    pl: "Odwiedź jeden z naszych butików lub umów się na prywatne spotkanie, aby zobaczyć najnowszą kolekcję sezonową osobiście.",
  },
};

export type Season = {
  id: "spring" | "summer" | "autumn" | "winter";
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: string;
};

export const SEASONS: Season[] = [
  {
    id: "spring",
    image: "/images/design/spring.jpg",
    imageAlt: "Spring collection — floral-inspired jewellery moodboard",
    name: {
      de: "Frühlingskollektion",
      en: "Spring Collection",
      tr: "İlkbahar Koleksiyonu",
      sk: "Jarná kolekcia",
      cs: "Jarní kolekce",
      hu: "Tavaszi kollekció",
      pl: "Kolekcja wiosenna",
    },
    description: {
      de: "Leichte, frische Stücke, inspiriert von den ersten Farben der Saison — zarte Blütenmotive und sanfte Steine.",
      en: "Light, fresh pieces inspired by the first colours of the season — delicate florals and soft stones.",
      tr: "Sezonun ilk renklerinden ilham alan hafif, taze parçalar — narin çiçek motifleri ve yumuşak taşlar.",
      sk: "Ľahké, sviežе kúsky inšpirované prvými farbami sezóny — jemné kvetinové motívy a mäkké kamene.",
      cs: "Lehké, svěží kousky inspirované prvními barvami sezóny — jemné květinové motivy a měkké kameny.",
      hu: "Könnyed, friss darabok, a szezon első színei ihlették — finom virágmotívumok és lágy kövek.",
      pl: "Lekkie, świeże elementy inspirowane pierwszymi barwami sezonu — delikatne motywy kwiatowe i miękkie kamienie.",
    },
  },
  {
    id: "summer",
    image: "/images/design/summer.jpg",
    imageAlt: "Summer collection — beach and sea-inspired jewellery moodboard",
    name: {
      de: "Sommerkollektion",
      en: "Summer Collection",
      tr: "Yaz Koleksiyonu",
      sk: "Letná kolekcia",
      cs: "Letní kolekce",
      hu: "Nyári kollekció",
      pl: "Kolekcja letnia",
    },
    description: {
      de: "Strahlende, leuchtende Designs für lange Tage und warme Abende am Meer.",
      en: "Bright, radiant designs made for long days and warm evenings by the sea.",
      tr: "Uzun günler ve denizde geçen sıcak akşamlar için parlak, ışıltılı tasarımlar.",
      sk: "Žiarivé, výrazné dizajny stvorené pre dlhé dni a teplé večery pri mori.",
      cs: "Zářivé, výrazné designy stvořené pro dlouhé dny a teplé večery u moře.",
      hu: "Ragyogó, sugárzó dizájnok a hosszú napokra és a tengerparti meleg estékre.",
      pl: "Jasne, promienne wzory stworzone na długie dni i ciepłe wieczory nad morzem.",
    },
  },
  {
    id: "autumn",
    image: "/images/design/autumn.jpg",
    imageAlt: "Autumn collection — golden leaf-inspired jewellery moodboard",
    name: {
      de: "Herbstkollektion",
      en: "Autumn Collection",
      tr: "Sonbahar Koleksiyonu",
      sk: "Jesenná kolekcia",
      cs: "Podzimní kolekce",
      hu: "Őszi kollekció",
      pl: "Kolekcja jesienna",
    },
    description: {
      de: "Wärmere Töne und reichere Texturen, inspiriert von goldenem Licht und fallendem Laub.",
      en: "Warmer tones and richer textures, inspired by golden light and turning leaves.",
      tr: "Altın ışık ve renk değiştiren yapraklardan ilham alan daha sıcak tonlar ve daha zengin dokular.",
      sk: "Teplejšie tóny a bohatšie textúry, inšpirované zlatým svetlom a farbiacim sa lístím.",
      cs: "Teplejší tóny a bohatší textury, inspirované zlatým světlem a barvícím se listím.",
      hu: "Melegebb tónusok és gazdagabb textúrák, az aranyfény és a színesedő levelek ihlették.",
      pl: "Cieplejsze tony i bogatsze faktury, inspirowane złotym światłem i mieniącymi się liśćmi.",
    },
  },
  {
    id: "winter",
    image: "/images/design/winter.jpg",
    imageAlt: "Winter collection — snowflake-inspired jewellery moodboard",
    name: {
      de: "Winterkollektion",
      en: "Winter Collection",
      tr: "Kış Koleksiyonu",
      sk: "Zimná kolekcia",
      cs: "Zimní kolekce",
      hu: "Téli kollekció",
      pl: "Kolekcja zimowa",
    },
    description: {
      de: "Kühne, strahlende Stücke für die Festtage — Statement-Schmuck für besondere Anlässe.",
      en: "Bold, luminous pieces for the festive season — statement jewellery for celebration.",
      tr: "Bayram sezonu için cesur, ışıltılı parçalar — kutlamalar için iddialı mücevherler.",
      sk: "Odvážne, žiarivé kúsky pre sviatočné obdobie — výrazné šperky na oslavy.",
      cs: "Odvážné, zářivé kousky pro sváteční období — výrazné šperky na oslavy.",
      hu: "Merész, ragyogó darabok az ünnepi szezonra — feltűnő ékszerek az ünneplésekhez.",
      pl: "Odważne, lśniące elementy na okres świąteczny — biżuteria na wyjątkowe okazje.",
    },
  },
];
