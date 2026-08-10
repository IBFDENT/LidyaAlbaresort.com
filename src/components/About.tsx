"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const ABOUT_BODY: Record<Locale, string[]> = {
  en: [
    "We want to be your personal advisor, whether you are looking for a special gift or wish to treat yourself to a new favourite piece.",
    "With handcraftsmanship as our standard of quality, we set the highest demands on design, material and execution.",
    "You will find jewellery and watches in a wide selection with us: white, yellow and rose gold, platinum, diamonds, precious stones and pearls — for every budget.",
    "We also offer creative designs for one-of-a-kind pieces, individually crafted to your wishes.",
    "Even if you own jewellery — older or inherited, out of fashion or with poorly set stones — we provide expert redesign.",
    "Buying a piece of jewellery is a matter of trust. Visit us. We put our knowledge, our experience and our service at your disposal.",
  ],

  de: [
    "Wir möchten Ihr persönlicher Berater sein – ganz gleich, ob Sie ein besonderes Geschenk suchen oder sich selbst mit einem neuen Lieblingsstück eine Freude machen möchten.",
    "Handwerkskunst ist für uns der Maßstab für Qualität. Deshalb stellen wir höchste Ansprüche an Design, Material und Ausführung.",
    "Bei uns finden Sie Schmuck und Uhren in großer Auswahl: Weiß-, Gelb- und Roségold, Platin, Diamanten, Edelsteine und Perlen – für jedes Budget.",
    "Darüber hinaus bieten wir kreative Entwürfe für einzigartige Einzelstücke, individuell nach Ihren Wünschen gefertigt.",
    "Auch wenn Sie bereits Schmuck besitzen – älter oder geerbt, aus der Mode gekommen oder mit schlecht gefassten Steinen – bieten wir fachgerechtes Redesign.",
    "Der Kauf eines Schmuckstücks ist Vertrauenssache. Besuchen Sie uns. Unser Wissen, unsere Erfahrung und unser Service stehen Ihnen zur Verfügung.",
  ],

  tr: [
    "İster özel bir hediye arıyor olun ister kendinizi yeni bir favori parçayla ödüllendirmek isteyin, kişisel danışmanınız olmak istiyoruz.",
    "El işçiliğini kalite standardımız olarak kabul ediyor; tasarım, malzeme ve uygulamada en yüksek beklentileri benimsiyoruz.",
    "Bizde beyaz, sarı ve rose altın, platin, elmas, değerli taşlar ve incilerden oluşan geniş bir mücevher ve saat seçkisi bulabilirsiniz — her bütçeye uygun.",
    "Ayrıca isteklerinize göre özel olarak üretilen, benzersiz parçalar için yaratıcı tasarımlar sunuyoruz.",
    "Eski, miras kalmış, modası geçmiş veya taşları iyi sabitlenmemiş mücevherleriniz varsa, uzman yeniden tasarım hizmeti de sunuyoruz.",
    "Mücevher satın almak bir güven meselesidir. Bizi ziyaret edin. Bilgimizi, deneyimimizi ve hizmetimizi sizinle paylaşalım.",
  ],

  sk: [
    "Chceme byť vaším osobným poradcom, či už hľadáte výnimočný darček, alebo si chcete dopriať nový obľúbený šperk.",
    "Ručnú remeselnú prácu považujeme za základ kvality a preto kladieme najvyššie nároky na dizajn, materiál aj spracovanie.",
    "Nájdete u nás široký výber šperkov a hodiniek: biele, žlté a ružové zlato, platinu, diamanty, drahé kamene a perly — pre každý rozpočet.",
    "Ponúkame aj kreatívne návrhy jedinečných kúskov, individuálne vyrobených podľa vašich predstáv.",
    "Ak vlastníte starší alebo zdedený šperk, ktorý vyšiel z módy alebo má zle osadené kamene, ponúkame odborný redizajn.",
    "Kúpa šperku je otázkou dôvery. Navštívte nás. Naše vedomosti, skúsenosti a servis sú vám k dispozícii.",
  ],

  cs: [
    "Chceme být vaším osobním poradcem, ať už hledáte výjimečný dárek, nebo si chcete dopřát nový oblíbený šperk.",
    "Ruční řemeslnou práci považujeme za základ kvality, proto klademe nejvyšší nároky na design, materiál i zpracování.",
    "Najdete u nás široký výběr šperků a hodinek: bílé, žluté a růžové zlato, platinu, diamanty, drahé kameny a perly — pro každý rozpočet.",
    "Nabízíme také kreativní návrhy jedinečných kusů, individuálně vyrobených podle vašich představ.",
    "Pokud vlastníte starší nebo zděděný šperk, který vyšel z módy nebo má špatně osazené kameny, nabízíme odborný redesign.",
    "Koupě šperku je otázkou důvěry. Navštivte nás. Naše znalosti, zkušenosti a servis jsou vám k dispozici.",
  ],

  hu: [
    "Személyes tanácsadója szeretnénk lenni, akár különleges ajándékot keres, akár egy új kedvenc ékszerrel szeretné meglepni magát.",
    "A kézműves munkát tekintjük minőségi mércénknek, ezért a tervezéssel, az anyagokkal és a kivitelezéssel szemben is a legmagasabb elvárásokat támasztjuk.",
    "Ékszerek és órák széles választékát kínáljuk: fehér-, sárga- és rozéaranyat, platinát, gyémántokat, drágaköveket és gyöngyöket — minden költségvetéshez.",
    "Kreatív terveket is készítünk egyedi darabokhoz, amelyeket személyre szabva, az Ön kívánságai szerint alkotunk meg.",
    "Ha régi vagy örökölt, divatjamúlt vagy nem megfelelően foglalt kövekkel készült ékszere van, szakértő újratervezést is kínálunk.",
    "Egy ékszer megvásárlása bizalom kérdése. Látogasson el hozzánk. Tudásunkat, tapasztalatunkat és szolgáltatásainkat az Ön rendelkezésére bocsátjuk.",
  ],

  pl: [
    "Chcemy być Twoim osobistym doradcą, niezależnie od tego, czy szukasz wyjątkowego prezentu, czy chcesz sprawić sobie nowy ulubiony element biżuterii.",
    "Rzemiosło ręczne jest dla nas standardem jakości, dlatego stawiamy najwyższe wymagania projektowi, materiałom i wykonaniu.",
    "Oferujemy szeroki wybór biżuterii i zegarków: białe, żółte i różowe złoto, platynę, diamenty, kamienie szlachetne i perły — na każdy budżet.",
    "Tworzymy również kreatywne projekty unikatowych egzemplarzy, wykonywanych indywidualnie według Twoich życzeń.",
    "Jeśli posiadasz starszą lub odziedziczoną biżuterię, niemodną lub z niewłaściwie osadzonymi kamieniami, oferujemy profesjonalny redesign.",
    "Zakup biżuterii to kwestia zaufania. Odwiedź nas. Oddajemy do Twojej dyspozycji naszą wiedzę, doświadczenie i obsługę.",
  ],

  ru: [
    "Мы хотим быть вашим персональным консультантом — независимо от того, ищете ли вы особенный подарок или хотите порадовать себя новым любимым украшением.",
    "Ручная работа является для нас стандартом качества, поэтому мы предъявляем самые высокие требования к дизайну, материалам и исполнению.",
    "У нас вы найдёте широкий выбор украшений и часов: белое, жёлтое и розовое золото, платину, бриллианты, драгоценные камни и жемчуг — для любого бюджета.",
    "Мы также создаём индивидуальные проекты уникальных украшений в соответствии с вашими пожеланиями.",
    "Если у вас есть старые или унаследованные украшения, вышедшие из моды или с плохо закреплёнными камнями, мы предлагаем профессиональный редизайн.",
    "Покупка украшения — это вопрос доверия. Посетите нас. Мы с удовольствием поделимся с вами нашими знаниями, опытом и сервисом.",
  ],

  nl: [
    "Wij willen uw persoonlijke adviseur zijn, of u nu op zoek bent naar een bijzonder cadeau of uzelf wilt verwennen met een nieuw favoriet sieraad.",
    "Vakmanschap is voor ons de maatstaf voor kwaliteit. Daarom stellen wij de hoogste eisen aan ontwerp, materiaal en uitvoering.",
    "Bij ons vindt u een ruime keuze aan sieraden en horloges: witgoud, geelgoud, roségoud, platina, diamanten, edelstenen en parels — voor ieder budget.",
    "Wij bieden ook creatieve ontwerpen voor unieke stukken, individueel vervaardigd volgens uw wensen.",
    "Ook wanneer u oudere of geërfde sieraden bezit, die uit de mode zijn geraakt of waarvan de stenen niet goed gezet zijn, bieden wij deskundig redesign.",
    "De aankoop van een sieraad is een kwestie van vertrouwen. Bezoek ons. Onze kennis, ervaring en service staan tot uw beschikking.",
  ],

  da: [
    "Vi ønsker at være din personlige rådgiver, uanset om du leder efter en særlig gave eller ønsker at forkæle dig selv med et nyt yndlingssmykke.",
    "Håndværk er vores kvalitetsstandard, og derfor stiller vi de højeste krav til design, materialer og udførelse.",
    "Hos os finder du et bredt udvalg af smykker og ure: hvidguld, gult guld, rosaguld, platin, diamanter, ædelsten og perler — til ethvert budget.",
    "Vi tilbyder også kreative designs til unikke smykker, individuelt fremstillet efter dine ønsker.",
    "Har du ældre eller arvede smykker, som er gået af mode eller har dårligt fattede sten, tilbyder vi professionelt redesign.",
    "At købe et smykke handler om tillid. Besøg os. Vi stiller vores viden, erfaring og service til din rådighed.",
  ],

  fi: [
    "Haluamme olla henkilökohtainen neuvonantajasi, etsitpä erityistä lahjaa tai haluat ilahduttaa itseäsi uudella suosikkikorulla.",
    "Käsityötaito on meille laadun mittari, ja siksi asetamme korkeimmat vaatimukset suunnittelulle, materiaaleille ja toteutukselle.",
    "Meiltä löydät laajan valikoiman koruja ja kelloja: valkokultaa, keltakultaa, ruusukultaa, platinaa, timantteja, jalokiviä ja helmiä — jokaiseen budjettiin.",
    "Tarjoamme myös luovia suunnitelmia ainutlaatuisiin koruihin, jotka valmistetaan yksilöllisesti toiveidesi mukaan.",
    "Jos omistat vanhoja tai perittyjä koruja, jotka ovat jääneet pois muodista tai joiden kivet on huonosti istutettu, tarjoamme asiantuntevaa uudelleensuunnittelua.",
    "Korun ostaminen on luottamuskysymys. Tule käymään. Tietomme, kokemuksemme ja palvelumme ovat käytettävissäsi.",
  ],

  sv: [
    "Vi vill vara din personliga rådgivare, oavsett om du söker en speciell gåva eller vill unna dig ett nytt favoritsmycke.",
    "Hantverk är vår kvalitetsstandard och därför ställer vi de högsta kraven på design, material och utförande.",
    "Hos oss hittar du ett brett urval av smycken och klockor: vitguld, gulguld, roséguld, platina, diamanter, ädelstenar och pärlor — för varje budget.",
    "Vi erbjuder också kreativa designer för unika smycken, individuellt tillverkade efter dina önskemål.",
    "Om du har äldre eller ärvda smycken, som gått ur modet eller har dåligt infattade stenar, erbjuder vi professionell redesign.",
    "Att köpa ett smycke handlar om förtroende. Besök oss. Vi ställer vår kunskap, erfarenhet och service till ditt förfogande.",
  ],

  fr: [
    "Nous souhaitons être votre conseiller personnel, que vous recherchiez un cadeau particulier ou que vous souhaitiez vous offrir un nouveau bijou préféré.",
    "Le savoir-faire artisanal constitue pour nous la référence en matière de qualité. Nous accordons donc la plus grande exigence au design, aux matériaux et à la réalisation.",
    "Vous trouverez chez nous un vaste choix de bijoux et de montres : or blanc, jaune et rose, platine, diamants, pierres précieuses et perles — pour tous les budgets.",
    "Nous proposons également des créations uniques, conçues et réalisées individuellement selon vos souhaits.",
    "Si vous possédez des bijoux anciens ou hérités, démodés ou comportant des pierres mal serties, nous proposons également un service professionnel de redesign.",
    "L’achat d’un bijou est une question de confiance. Venez nous rencontrer. Nous mettons à votre disposition notre savoir-faire, notre expérience et notre service.",
  ],

  it: [
    "Desideriamo essere il vostro consulente personale, sia che stiate cercando un regalo speciale, sia che vogliate concedervi un nuovo gioiello preferito.",
    "L’artigianalità rappresenta per noi lo standard della qualità, per questo poniamo la massima attenzione al design, ai materiali e alla realizzazione.",
    "Da noi troverete un’ampia selezione di gioielli e orologi: oro bianco, giallo e rosa, platino, diamanti, pietre preziose e perle — per ogni budget.",
    "Offriamo inoltre progetti creativi per pezzi unici, realizzati individualmente secondo i vostri desideri.",
    "Se possedete gioielli più datati o ereditati, fuori moda o con pietre non correttamente incastonate, offriamo anche un servizio professionale di redesign.",
    "Acquistare un gioiello è una questione di fiducia. Venite a trovarci. Mettiamo a vostra disposizione la nostra competenza, esperienza e assistenza.",
  ],

  es: [
    "Queremos ser su asesor personal, tanto si busca un regalo especial como si desea darse un capricho con una nueva joya favorita.",
    "La artesanía es nuestro estándar de calidad, por eso exigimos el máximo nivel en diseño, materiales y ejecución.",
    "Con nosotros encontrará una amplia selección de joyas y relojes: oro blanco, amarillo y rosa, platino, diamantes, piedras preciosas y perlas — para todos los presupuestos.",
    "También ofrecemos diseños creativos para piezas únicas, realizadas individualmente según sus deseos.",
    "Si posee joyas antiguas o heredadas, pasadas de moda o con piedras mal engastadas, ofrecemos un servicio profesional de rediseño.",
    "Comprar una joya es una cuestión de confianza. Visítenos. Ponemos a su disposición nuestros conocimientos, experiencia y servicio.",
  ],
};

const ABOUT_VALUES: Record<Locale, string[]> = {
  en: [
    "Tradition",
    "Craftsmanship",
    "Trust",
    "Individuality",
    "Lasting Value",
  ],
  de: [
    "Tradition",
    "Handwerkskunst",
    "Vertrauen",
    "Individualität",
    "Bleibender Wert",
  ],
  tr: [
    "Gelenek",
    "El İşçiliği",
    "Güven",
    "Özgünlük",
    "Kalıcı Değer",
  ],
  sk: [
    "Tradícia",
    "Remeselnosť",
    "Dôvera",
    "Individualita",
    "Trvalá hodnota",
  ],
  cs: [
    "Tradice",
    "Řemeslnost",
    "Důvěra",
    "Individualita",
    "Trvalá hodnota",
  ],
  hu: [
    "Hagyomány",
    "Kézművesség",
    "Bizalom",
    "Egyediség",
    "Tartós érték",
  ],
  pl: [
    "Tradycja",
    "Rzemiosło",
    "Zaufanie",
    "Indywidualność",
    "Trwała wartość",
  ],
  ru: [
    "Традиция",
    "Мастерство",
    "Доверие",
    "Индивидуальность",
    "Непреходящая ценность",
  ],
  nl: [
    "Traditie",
    "Vakmanschap",
    "Vertrouwen",
    "Individualiteit",
    "Blijvende waarde",
  ],
  da: [
    "Tradition",
    "Håndværk",
    "Tillid",
    "Individualitet",
    "Varig værdi",
  ],
  fi: [
    "Perinne",
    "Käsityötaito",
    "Luottamus",
    "Yksilöllisyys",
    "Pysyvä arvo",
  ],
  sv: [
    "Tradition",
    "Hantverk",
    "Förtroende",
    "Individualitet",
    "Bestående värde",
  ],
  fr: [
    "Tradition",
    "Savoir-faire",
    "Confiance",
    "Individualité",
    "Valeur durable",
  ],
  it: [
    "Tradizione",
    "Artigianalità",
    "Fiducia",
    "Individualità",
    "Valore duraturo",
  ],
  es: [
    "Tradición",
    "Artesanía",
    "Confianza",
    "Individualidad",
    "Valor duradero",
  ],
};

const ABOUT_COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    lead: string;
    signoff: string;
    role: string;
    since: string;
    craftsmanship: string;
    closingBefore: string;
    closingAccent: string;
  }
> = {
  en: {
    eyebrow: "Our Philosophy",
    title: "Things of lasting value in changing times",
    lead: "There are things that retain their value in times of change.",
    signoff: "Wishing you much pleasure browsing,",
    role: "General Manager",
    since: "Since",
    craftsmanship: "Craftsmanship",
    closingBefore: "Tradition gives jewellery meaning.",
    closingAccent: "Craftsmanship gives it permanence.",
  },

  de: {
    eyebrow: "Unsere Philosophie",
    title: "Bleibende Werte in Zeiten des Wandels",
    lead: "Es gibt Dinge, die auch in Zeiten des Wandels ihren Wert behalten.",
    signoff: "Wir wünschen Ihnen viel Freude beim Entdecken,",
    role: "Geschäftsführer",
    since: "Seit",
    craftsmanship: "Handwerkskunst",
    closingBefore: "Tradition gibt Schmuck Bedeutung.",
    closingAccent: "Handwerkskunst verleiht ihm Beständigkeit.",
  },

  tr: {
    eyebrow: "Felsefemiz",
    title: "Değişen zamanlarda kalıcı değerler",
    lead: "Değişim zamanlarında değerini koruyan şeyler vardır.",
    signoff: "Keyifli keşifler dileriz,",
    role: "Genel Müdür",
    since: "Beri",
    craftsmanship: "El İşçiliği",
    closingBefore: "Gelenek mücevhere anlam verir.",
    closingAccent: "El işçiliği ona kalıcılık kazandırır.",
  },

  sk: {
    eyebrow: "Naša filozofia",
    title: "Trvalé hodnoty v meniacich sa časoch",
    lead:
      "Existujú veci, ktoré si zachovávajú svoju hodnotu aj v časoch zmien.",
    signoff: "Prajeme vám príjemné objavovanie,",
    role: "Generálny manažér",
    since: "Od roku",
    craftsmanship: "Remeselnosť",
    closingBefore: "Tradícia dáva šperku význam.",
    closingAccent: "Remeselnosť mu dáva trvácnosť.",
  },

  cs: {
    eyebrow: "Naše filozofie",
    title: "Trvalé hodnoty v měnících se časech",
    lead:
      "Existují věci, které si zachovávají svou hodnotu i v dobách změn.",
    signoff: "Přejeme vám příjemné objevování,",
    role: "Generální manažer",
    since: "Od roku",
    craftsmanship: "Řemeslnost",
    closingBefore: "Tradice dává šperku význam.",
    closingAccent: "Řemeslnost mu dává trvalost.",
  },

  hu: {
    eyebrow: "Filozófiánk",
    title: "Maradandó értékek a változó időkben",
    lead:
      "Vannak dolgok, amelyek a változó időkben is megőrzik értéküket.",
    signoff: "Kellemes böngészést kívánunk,",
    role: "Ügyvezető igazgató",
    since: "Óta",
    craftsmanship: "Kézművesség",
    closingBefore: "A hagyomány jelentést ad az ékszernek.",
    closingAccent: "A kézművesség maradandóvá teszi.",
  },

  pl: {
    eyebrow: "Nasza filozofia",
    title: "Trwałe wartości w zmieniających się czasach",
    lead:
      "Są rzeczy, które zachowują swoją wartość nawet w czasach zmian.",
    signoff: "Życzymy przyjemnego odkrywania,",
    role: "Dyrektor Generalny",
    since: "Od",
    craftsmanship: "Rzemiosło",
    closingBefore: "Tradycja nadaje biżuterii znaczenie.",
    closingAccent: "Rzemiosło nadaje jej trwałość.",
  },

  ru: {
    eyebrow: "Наша философия",
    title: "Непреходящие ценности в меняющемся мире",
    lead:
      "Есть вещи, которые сохраняют свою ценность даже во времена перемен.",
    signoff: "Желаем вам приятного знакомства с нашим миром,",
    role: "Генеральный директор",
    since: "С",
    craftsmanship: "Мастерство",
    closingBefore: "Традиция придаёт украшению смысл.",
    closingAccent: "Мастерство делает его долговечным.",
  },

  nl: {
    eyebrow: "Onze filosofie",
    title: "Blijvende waarden in veranderende tijden",
    lead:
      "Er zijn dingen die hun waarde behouden, ook wanneer tijden veranderen.",
    signoff: "Wij wensen u veel plezier bij het ontdekken,",
    role: "Algemeen directeur",
    since: "Sinds",
    craftsmanship: "Vakmanschap",
    closingBefore: "Traditie geeft sieraden betekenis.",
    closingAccent: "Vakmanschap geeft ze blijvende waarde.",
  },

  da: {
    eyebrow: "Vores filosofi",
    title: "Varige værdier i en verden i forandring",
    lead:
      "Der findes ting, som bevarer deres værdi, selv når tiderne ændrer sig.",
    signoff: "Vi ønsker dig god fornøjelse med at udforske,",
    role: "Administrerende direktør",
    since: "Siden",
    craftsmanship: "Håndværk",
    closingBefore: "Tradition giver smykker betydning.",
    closingAccent: "Håndværk giver dem varighed.",
  },

  fi: {
    eyebrow: "Filosofiamme",
    title: "Pysyviä arvoja muuttuvina aikoina",
    lead:
      "On asioita, jotka säilyttävät arvonsa myös aikojen muuttuessa.",
    signoff: "Toivotamme miellyttäviä hetkiä tutustumiseen,",
    role: "Toimitusjohtaja",
    since: "Vuodesta",
    craftsmanship: "Käsityötaito",
    closingBefore: "Perinne antaa korulle merkityksen.",
    closingAccent: "Käsityötaito tekee siitä kestävän.",
  },

  sv: {
    eyebrow: "Vår filosofi",
    title: "Bestående värden i föränderliga tider",
    lead:
      "Det finns saker som behåller sitt värde även när tiderna förändras.",
    signoff: "Vi önskar dig mycket nöje när du utforskar,",
    role: "Verkställande direktör",
    since: "Sedan",
    craftsmanship: "Hantverk",
    closingBefore: "Tradition ger smycken mening.",
    closingAccent: "Hantverk ger dem beständighet.",
  },

  fr: {
    eyebrow: "Notre philosophie",
    title: "Des valeurs durables dans un monde en mouvement",
    lead:
      "Certaines choses conservent leur valeur, même lorsque les temps changent.",
    signoff: "Nous vous souhaitons une agréable découverte,",
    role: "Directeur général",
    since: "Depuis",
    craftsmanship: "Savoir-faire",
    closingBefore: "La tradition donne du sens aux bijoux.",
    closingAccent: "Le savoir-faire leur donne leur pérennité.",
  },

  it: {
    eyebrow: "La nostra filosofia",
    title: "Valori duraturi in tempi che cambiano",
    lead:
      "Ci sono cose che conservano il proprio valore anche quando i tempi cambiano.",
    signoff: "Vi auguriamo una piacevole scoperta,",
    role: "Direttore generale",
    since: "Dal",
    craftsmanship: "Artigianalità",
    closingBefore: "La tradizione dà significato ai gioielli.",
    closingAccent: "L’artigianalità li rende duraturi.",
  },

  es: {
    eyebrow: "Nuestra filosofía",
    title: "Valores duraderos en tiempos de cambio",
    lead:
      "Hay cosas que conservan su valor incluso cuando los tiempos cambian.",
    signoff: "Esperamos que disfrute descubriendo nuestro mundo,",
    role: "Director general",
    since: "Desde",
    craftsmanship: "Artesanía",
    closingBefore: "La tradición da significado a las joyas.",
    closingAccent: "La artesanía les da permanencia.",
  },
};

export default function About() {
  const { locale } = useLanguage();

  const body = ABOUT_BODY[locale];
  const values = ABOUT_VALUES[locale];
  const copy = ABOUT_COPY[locale];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-plum-dark py-24 md:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="max-w-[920px] font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ color: "#F5EFE6" }}
            >
              {copy.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <div className="flex items-end gap-5">
              <span
                className="font-display text-6xl leading-none md:text-7xl lg:text-8xl"
                style={{ color: "#E8D8B5" }}
              >
                1989
              </span>

              <span className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-brand-white/40">
                {copy.since}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="group relative min-h-[560px] overflow-hidden md:min-h-[680px] lg:min-h-[760px]">
              <Image
                src="/images/craftsmanship.jpg"
                alt="Goldsmith at work"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                  {copy.craftsmanship}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
            <p
              className="font-display text-2xl italic leading-snug md:text-3xl lg:text-4xl"
              style={{ color: "#E8D8B5" }}
            >
              {copy.lead}
            </p>

            <div className="mt-8 space-y-5">
              {body.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-xl text-sm leading-7 text-brand-white/68 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-brand-white/12 pt-8">
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                {copy.signoff}
              </span>

              <p
                className="mt-4 font-display text-3xl"
                style={{ color: "#F5EFE6" }}
              >
                Metin TANIR
              </p>

              <p className="mt-1 text-sm text-brand-white/45">
                {copy.role}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-brand-white/12 pt-7 md:mt-16">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
            {values.map((value, index) => (
              <div
                key={`${value}-${index}`}
                className="flex items-center gap-4"
              >
                <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-brand-white/65">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1000px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#F5EFE6" }}
          >
            {copy.closingBefore}
            <span style={{ color: "#E8D8B5" }}>
              {" "}
              {copy.closingAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}