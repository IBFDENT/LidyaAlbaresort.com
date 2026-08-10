"use client";

import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type CoppaCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;

  experienceEyebrow: string;
  experienceTitle: string;

  beachTitle: string;
  beachText: string;

  foodTitle: string;
  foodText: string;

  eventsTitle: string;
  eventsText: string;

  atmosphereTitle: string;
  atmosphereText: string;

  eventsEyebrow: string;
  eventsHeading: string;
  eventsDescription: string;

  weddings: string;
  birthdays: string;
  anniversaries: string;
  privateEvents: string;

  socialEyebrow: string;
  instagram: string;
  facebook: string;

  closingBefore: string;
  closingAccent: string;

  imageAltBeach: string;
  imageAltEntrance: string;
  imageAltFood: string;
  imageAltTerrace: string;
  imageAltNight: string;
};

const COPPA_COPY: Record<Locale, CoppaCopy> = {
  en: {
    eyebrow: "Beyond Jewellery",
    title: "A place to slow down,",
    titleAccent: "by the Mediterranean.",
    intro:
      "For many LIDYA guests, Antalya is about more than jewellery. Coppa Beach Club offers a relaxed setting by the sea where you can enjoy good food, spend time together and experience another side of your stay in Türkiye.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "A Mediterranean experience beyond the boutique",

    beachTitle: "By the Sea",
    beachText:
      "Step away from the pace of the day and enjoy the Mediterranean atmosphere in a relaxed beach-club setting.",

    foodTitle: "Food & Hospitality",
    foodText:
      "Enjoy generous breakfasts, fresh dishes and relaxed dining prepared for long, unhurried moments with family and friends.",

    eventsTitle: "Celebrations",
    eventsText:
      "Coppa also welcomes weddings, birthdays, anniversaries and private celebrations, creating memorable occasions in a distinctive seaside atmosphere.",

    atmosphereTitle: "Day to Evening",
    atmosphereText:
      "From a quiet daytime visit to dinner and warm evenings outdoors, Coppa changes naturally with the rhythm of the day.",

    eventsEyebrow: "Celebrate at Coppa",
    eventsHeading: "Some moments deserve their own setting.",
    eventsDescription:
      "For weddings, birthdays, anniversaries and private occasions, Coppa offers a relaxed Mediterranean environment where guests can come together, dine and celebrate.",

    weddings: "Weddings",
    birthdays: "Birthdays",
    anniversaries: "Anniversaries",
    privateEvents: "Private events",

    socialEyebrow: "Discover Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Jewellery may bring you to us.",
    closingAccent: "Hospitality makes the experience stay with you.",

    imageAltBeach:
      "Coppa Beach Club by the Mediterranean coast in Antalya",
    imageAltEntrance:
      "Entrance to Coppa Beach Club in Antalya",
    imageAltFood:
      "Breakfast and fresh food served at Coppa Beach Club",
    imageAltTerrace:
      "Flower-covered terrace at Coppa Beach Club",
    imageAltNight:
      "Evening atmosphere and outdoor dining at Coppa Beach Club",
  },

  de: {
    eyebrow: "Mehr als Schmuck",
    title: "Ein Ort zum Ankommen,",
    titleAccent: "direkt am Mittelmeer.",
    intro:
      "Für viele Gäste von LIDYA bedeutet Antalya mehr als Schmuck. Der Coppa Beach Club bietet eine entspannte Atmosphäre am Meer, gutes Essen, gemeinsame Zeit und eine weitere besondere Seite Ihres Aufenthalts in Türkiye.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Ein mediterranes Erlebnis über die Boutique hinaus",

    beachTitle: "Am Meer",
    beachText:
      "Lassen Sie den Alltag hinter sich und genießen Sie die mediterrane Atmosphäre in einem entspannten Beach-Club-Ambiente.",

    foodTitle: "Küche & Gastfreundschaft",
    foodText:
      "Genießen Sie großzügige Frühstücke, frische Gerichte und entspanntes Essen für lange, ungezwungene Momente mit Familie und Freunden.",

    eventsTitle: "Feiern",
    eventsText:
      "Coppa heißt auch Hochzeiten, Geburtstage, Jubiläen und private Feiern willkommen und schafft besondere Erinnerungen in einer einzigartigen Atmosphäre am Meer.",

    atmosphereTitle: "Vom Tag bis zum Abend",
    atmosphereText:
      "Vom ruhigen Besuch tagsüber bis zum Abendessen unter freiem Himmel verändert sich Coppa ganz natürlich mit dem Rhythmus des Tages.",

    eventsEyebrow: "Feiern im Coppa",
    eventsHeading: "Besondere Momente verdienen einen besonderen Ort.",
    eventsDescription:
      "Für Hochzeiten, Geburtstage, Jubiläen und private Anlässe bietet Coppa eine entspannte mediterrane Umgebung zum Zusammenkommen, Genießen und Feiern.",

    weddings: "Hochzeiten",
    birthdays: "Geburtstage",
    anniversaries: "Jubiläen",
    privateEvents: "Private Feiern",

    socialEyebrow: "Coppa entdecken",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Schmuck bringt Sie vielleicht zu uns.",
    closingAccent: "Gastfreundschaft macht den Aufenthalt unvergesslich.",

    imageAltBeach:
      "Coppa Beach Club an der Mittelmeerküste von Antalya",
    imageAltEntrance:
      "Eingang des Coppa Beach Club in Antalya",
    imageAltFood:
      "Frühstück und frische Speisen im Coppa Beach Club",
    imageAltTerrace:
      "Mit Blumen geschmückte Terrasse des Coppa Beach Club",
    imageAltNight:
      "Abendliche Atmosphäre und Außengastronomie im Coppa Beach Club",
  },

  tr: {
    eyebrow: "Mücevherin Ötesinde",
    title: "Yavaşlamak için bir yer,",
    titleAccent: "Akdeniz'in kıyısında.",
    intro:
      "Birçok LIDYA misafiri için Antalya yalnızca mücevherden ibaret değildir. Coppa Beach Club deniz kenarında dinlenebileceğiniz, güzel yemeklerin tadını çıkarabileceğiniz ve Türkiye tatilinizin farklı bir yönünü yaşayabileceğiniz özel bir ortam sunar.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Butiğin ötesinde bir Akdeniz deneyimi",

    beachTitle: "Denizin Yanında",
    beachText:
      "Günün temposundan uzaklaşın ve rahat bir beach club ortamında Akdeniz atmosferinin keyfini çıkarın.",

    foodTitle: "Lezzet & Misafirperverlik",
    foodText:
      "Aileniz ve dostlarınızla uzun ve keyifli anlar için zengin kahvaltılar, taze yemekler ve rahat bir yemek deneyimi sizi bekliyor.",

    eventsTitle: "Kutlamalar",
    eventsText:
      "Coppa; düğün, doğum günü, yıldönümü ve özel organizasyonlara da ev sahipliği yaparak deniz kenarında unutulmaz anlar yaratır.",

    atmosphereTitle: "Gündüzden Geceye",
    atmosphereText:
      "Sakin bir gündüz ziyaretinden açık havada akşam yemeğine kadar Coppa günün ritmine doğal biçimde uyum sağlar.",

    eventsEyebrow: "Coppa'da Kutlayın",
    eventsHeading: "Bazı anlar kendine özel bir mekânı hak eder.",
    eventsDescription:
      "Düğünler, doğum günleri, yıldönümleri ve özel davetler için Coppa; bir araya gelmek, yemek yemek ve kutlamak üzere rahat bir Akdeniz atmosferi sunar.",

    weddings: "Düğünler",
    birthdays: "Doğum günleri",
    anniversaries: "Yıldönümleri",
    privateEvents: "Özel etkinlikler",

    socialEyebrow: "Coppa'yı keşfedin",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Sizi bize mücevher getirebilir.",
    closingAccent: "Deneyimi unutulmaz yapan ise misafirperverliktir.",

    imageAltBeach:
      "Antalya Akdeniz kıyısındaki Coppa Beach Club",
    imageAltEntrance:
      "Antalya Coppa Beach Club girişi",
    imageAltFood:
      "Coppa Beach Club'da servis edilen kahvaltı ve taze yemekler",
    imageAltTerrace:
      "Coppa Beach Club'ın çiçeklerle kaplı terası",
    imageAltNight:
      "Coppa Beach Club'da akşam atmosferi ve açık hava yemek alanı",
  },

  sk: {
    eyebrow: "Viac než šperky",
    title: "Miesto, kde môžete spomaliť,",
    titleAccent: "pri Stredozemnom mori.",
    intro:
      "Pre mnohých hostí LIDYA je Antalya viac než len miestom na výber šperkov. Coppa Beach Club ponúka príjemné prostredie pri mori, kde si môžete oddýchnuť, vychutnať dobré jedlo a zažiť ďalšiu stránku vášho pobytu v Turecku.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Stredomorský zážitok aj mimo butiku",

    beachTitle: "Pri mori",
    beachText:
      "Spomaľte tempo dňa a vychutnajte si stredomorskú atmosféru v uvoľnenom prostredí beach clubu.",

    foodTitle: "Jedlo & pohostinnosť",
    foodText:
      "Doprajte si bohaté raňajky, čerstvé jedlá a pokojné stolovanie vytvorené pre dlhé chvíle s rodinou a priateľmi.",

    eventsTitle: "Oslavy",
    eventsText:
      "Coppa ponúka priestor aj pre svadby, narodeniny, výročia a súkromné oslavy v jedinečnej atmosfére pri mori.",

    atmosphereTitle: "Od dňa do večera",
    atmosphereText:
      "Od pokojnej návštevy cez deň až po večeru a príjemné letné večery sa atmosféra Coppa prirodzene mení spolu s rytmom dňa.",

    eventsEyebrow: "Oslávte to v Coppa",
    eventsHeading: "Niektoré chvíle si zaslúžia vlastné miesto.",
    eventsDescription:
      "Pre svadby, narodeniny, výročia a súkromné udalosti ponúka Coppa príjemné stredomorské prostredie, kde môžete byť spolu, vychutnať si jedlo a oslavovať.",

    weddings: "Svadby",
    birthdays: "Narodeniny",
    anniversaries: "Výročia",
    privateEvents: "Súkromné oslavy",

    socialEyebrow: "Objavte Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Šperky vás možno privedú k nám.",
    closingAccent: "Pohostinnosť však zostane vo vašich spomienkach.",

    imageAltBeach:
      "Coppa Beach Club pri Stredozemnom mori v Antalyi",
    imageAltEntrance:
      "Vstup do Coppa Beach Club v Antalyi",
    imageAltFood:
      "Raňajky a čerstvé jedlo podávané v Coppa Beach Club",
    imageAltTerrace:
      "Kvetinová terasa v Coppa Beach Club",
    imageAltNight:
      "Večerná atmosféra a vonkajšie stolovanie v Coppa Beach Club",
  },

  cs: {
    eyebrow: "Více než šperky",
    title: "Místo, kde můžete zpomalit,",
    titleAccent: "u Středozemního moře.",
    intro:
      "Pro mnoho hostů LIDYA znamená Antalya více než výběr šperků. Coppa Beach Club nabízí příjemné prostředí u moře, kde si můžete odpočinout, vychutnat dobré jídlo a poznat další stránku svého pobytu v Turecku.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Středomořský zážitek i mimo butik",

    beachTitle: "U moře",
    beachText:
      "Zpomalte tempo dne a vychutnejte si středomořskou atmosféru v uvolněném prostředí beach clubu.",

    foodTitle: "Jídlo & pohostinnost",
    foodText:
      "Dopřejte si bohaté snídaně, čerstvá jídla a klidné stolování stvořené pro dlouhé chvíle s rodinou a přáteli.",

    eventsTitle: "Oslavy",
    eventsText:
      "Coppa nabízí prostor také pro svatby, narozeniny, výročí a soukromé oslavy v jedinečné atmosféře u moře.",

    atmosphereTitle: "Od dne do večera",
    atmosphereText:
      "Od klidné návštěvy přes den až po večeři a příjemné letní večery se atmosféra Coppa přirozeně mění s rytmem dne.",

    eventsEyebrow: "Oslavte to v Coppa",
    eventsHeading: "Některé chvíle si zaslouží vlastní místo.",
    eventsDescription:
      "Pro svatby, narozeniny, výročí a soukromé události nabízí Coppa příjemné středomořské prostředí pro společné chvíle, jídlo a oslavy.",

    weddings: "Svatby",
    birthdays: "Narozeniny",
    anniversaries: "Výročí",
    privateEvents: "Soukromé oslavy",

    socialEyebrow: "Objevte Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Šperky vás možná přivedou k nám.",
    closingAccent: "Pohostinnost však zůstane ve vašich vzpomínkách.",

    imageAltBeach:
      "Coppa Beach Club u Středozemního moře v Antalyi",
    imageAltEntrance:
      "Vstup do Coppa Beach Club v Antalyi",
    imageAltFood:
      "Snídaně a čerstvé jídlo podávané v Coppa Beach Club",
    imageAltTerrace:
      "Květinová terasa v Coppa Beach Club",
    imageAltNight:
      "Večerní atmosféra a venkovní stolování v Coppa Beach Club",
  },

  hu: {
    eyebrow: "Több mint ékszer",
    title: "Egy hely, ahol lelassulhat,",
    titleAccent: "a Földközi-tenger mellett.",
    intro:
      "Sok LIDYA-vendég számára Antalya többet jelent az ékszereknél. A Coppa Beach Club kellemes tengerparti környezetet kínál pihenéshez, jó ételekhez és tartalmas közös pillanatokhoz.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Mediterrán élmény a butik világán túl",

    beachTitle: "A tenger mellett",
    beachText:
      "Lassítson, és élvezze a mediterrán hangulatot egy nyugodt beach club környezetben.",

    foodTitle: "Gasztronómia & vendégszeretet",
    foodText:
      "Bőséges reggelik, friss fogások és nyugodt étkezések várják családdal és barátokkal.",

    eventsTitle: "Ünnepek",
    eventsText:
      "A Coppa esküvőknek, születésnapoknak, évfordulóknak és privát eseményeknek is különleges helyszínt kínál.",

    atmosphereTitle: "Nappaltól estig",
    atmosphereText:
      "A csendes nappali látogatástól az esti vacsoráig a Coppa hangulata természetesen követi a nap ritmusát.",

    eventsEyebrow: "Ünnepeljen a Coppában",
    eventsHeading: "Vannak pillanatok, amelyek különleges helyet érdemelnek.",
    eventsDescription:
      "Esküvők, születésnapok, évfordulók és privát események számára a Coppa nyugodt mediterrán környezetet biztosít.",

    weddings: "Esküvők",
    birthdays: "Születésnapok",
    anniversaries: "Évfordulók",
    privateEvents: "Privát események",

    socialEyebrow: "Fedezze fel a Coppát",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Lehet, hogy az ékszer hozza el hozzánk.",
    closingAccent: "A vendégszeretet teszi emlékezetessé az élményt.",

    imageAltBeach: "Coppa Beach Club Antalya mediterrán partján",
    imageAltEntrance: "A Coppa Beach Club bejárata Antalyában",
    imageAltFood: "Reggeli és friss ételek a Coppa Beach Clubban",
    imageAltTerrace: "Virágokkal díszített terasz a Coppa Beach Clubban",
    imageAltNight: "Esti hangulat a Coppa Beach Clubban",
  },

  pl: {
    eyebrow: "Więcej niż biżuteria",
    title: "Miejsce, w którym można zwolnić,",
    titleAccent: "nad Morzem Śródziemnym.",
    intro:
      "Dla wielu gości LIDYA Antalya to coś więcej niż biżuteria. Coppa Beach Club oferuje przyjemne miejsce nad morzem, dobre jedzenie oraz spokojne chwile z rodziną i przyjaciółmi.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Śródziemnomorskie doświadczenie poza butikiem",

    beachTitle: "Nad morzem",
    beachText:
      "Zwolnij tempo i ciesz się śródziemnomorską atmosferą w spokojnym otoczeniu beach clubu.",

    foodTitle: "Kuchnia & gościnność",
    foodText:
      "Bogate śniadania, świeże dania i spokojne posiłki tworzą idealne warunki do wspólnego spędzania czasu.",

    eventsTitle: "Uroczystości",
    eventsText:
      "Coppa organizuje także wesela, urodziny, rocznice i prywatne uroczystości w wyjątkowej atmosferze nad morzem.",

    atmosphereTitle: "Od dnia do wieczora",
    atmosphereText:
      "Od spokojnego dnia po kolację pod gołym niebem atmosfera Coppa zmienia się wraz z rytmem dnia.",

    eventsEyebrow: "Świętuj w Coppa",
    eventsHeading: "Niektóre chwile zasługują na wyjątkowe miejsce.",
    eventsDescription:
      "Wesela, urodziny, rocznice i prywatne wydarzenia mogą odbywać się w swobodnym śródziemnomorskim otoczeniu Coppa.",

    weddings: "Wesela",
    birthdays: "Urodziny",
    anniversaries: "Rocznice",
    privateEvents: "Prywatne wydarzenia",

    socialEyebrow: "Poznaj Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Biżuteria może przyprowadzić Cię do nas.",
    closingAccent: "Gościnność sprawia, że doświadczenie pozostaje na długo.",

    imageAltBeach:
      "Coppa Beach Club nad Morzem Śródziemnym w Antalyi",
    imageAltEntrance:
      "Wejście do Coppa Beach Club w Antalyi",
    imageAltFood:
      "Śniadanie i świeże potrawy w Coppa Beach Club",
    imageAltTerrace:
      "Taras pełen kwiatów w Coppa Beach Club",
    imageAltNight:
      "Wieczorna atmosfera w Coppa Beach Club",
  },

  ru: {
    eyebrow: "Больше, чем украшения",
    title: "Место, где можно замедлиться,",
    titleAccent: "у Средиземного моря.",
    intro:
      "Для многих гостей LIDYA Анталья — это не только украшения. Coppa Beach Club предлагает расслабляющую атмосферу у моря, хорошую кухню и приятное время с близкими.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Средиземноморский отдых за пределами бутика",

    beachTitle: "У моря",
    beachText:
      "Отдохните от ритма дня и насладитесь атмосферой Средиземноморья в спокойном beach club.",

    foodTitle: "Кухня и гостеприимство",
    foodText:
      "Щедрые завтраки, свежие блюда и неспешные трапезы созданы для приятного времени с семьёй и друзьями.",

    eventsTitle: "Праздники",
    eventsText:
      "Coppa также подходит для свадеб, дней рождения, годовщин и частных мероприятий у моря.",

    atmosphereTitle: "От дня к вечеру",
    atmosphereText:
      "От спокойного дневного отдыха до ужина на открытом воздухе атмосфера Coppa меняется вместе с ритмом дня.",

    eventsEyebrow: "Празднуйте в Coppa",
    eventsHeading: "Некоторые моменты заслуживают особого места.",
    eventsDescription:
      "Свадьбы, дни рождения, годовщины и частные события проходят здесь в расслабленной средиземноморской атмосфере.",

    weddings: "Свадьбы",
    birthdays: "Дни рождения",
    anniversaries: "Годовщины",
    privateEvents: "Частные мероприятия",

    socialEyebrow: "Откройте Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Украшения могут привести вас к нам.",
    closingAccent: "Но гостеприимство делает впечатление незабываемым.",

    imageAltBeach:
      "Coppa Beach Club на средиземноморском побережье Антальи",
    imageAltEntrance:
      "Вход в Coppa Beach Club в Анталье",
    imageAltFood:
      "Завтрак и свежая кухня в Coppa Beach Club",
    imageAltTerrace:
      "Цветочная терраса Coppa Beach Club",
    imageAltNight:
      "Вечерняя атмосфера Coppa Beach Club",
  },

  nl: {
    eyebrow: "Meer dan sieraden",
    title: "Een plek om tot rust te komen,",
    titleAccent: "aan de Middellandse Zee.",
    intro:
      "Voor veel LIDYA-gasten betekent Antalya meer dan sieraden. Coppa Beach Club biedt een ontspannen plek aan zee met goed eten en tijd voor familie en vrienden.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Een mediterrane ervaring buiten de boutique",

    beachTitle: "Aan zee",
    beachText:
      "Laat het tempo van de dag achter u en geniet van de mediterrane sfeer in een ontspannen beachclub.",

    foodTitle: "Eten & gastvrijheid",
    foodText:
      "Geniet van uitgebreide ontbijten, verse gerechten en ontspannen maaltijden met familie en vrienden.",

    eventsTitle: "Vieringen",
    eventsText:
      "Coppa verwelkomt ook bruiloften, verjaardagen, jubilea en privé-evenementen.",

    atmosphereTitle: "Van dag tot avond",
    atmosphereText:
      "Van een rustige dag tot een sfeervol diner buiten verandert Coppa mee met het ritme van de dag.",

    eventsEyebrow: "Vier het bij Coppa",
    eventsHeading: "Sommige momenten verdienen een bijzondere plek.",
    eventsDescription:
      "Bruiloften, verjaardagen, jubilea en privé-evenementen krijgen bij Coppa een ontspannen mediterrane setting.",

    weddings: "Bruiloften",
    birthdays: "Verjaardagen",
    anniversaries: "Jubilea",
    privateEvents: "Privé-evenementen",

    socialEyebrow: "Ontdek Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Sieraden brengen u misschien bij ons.",
    closingAccent: "Gastvrijheid zorgt dat de ervaring blijft.",

    imageAltBeach: "Coppa Beach Club aan de kust van Antalya",
    imageAltEntrance: "Ingang van Coppa Beach Club in Antalya",
    imageAltFood: "Ontbijt en verse gerechten bij Coppa Beach Club",
    imageAltTerrace: "Bloemenrijke terras van Coppa Beach Club",
    imageAltNight: "Avondsfeer bij Coppa Beach Club",
  },

  da: {
    eyebrow: "Mere end smykker",
    title: "Et sted at sænke tempoet,",
    titleAccent: "ved Middelhavet.",
    intro:
      "For mange LIDYA-gæster handler Antalya om mere end smykker. Coppa Beach Club tilbyder en afslappet ramme ved havet med god mad og tid sammen.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "En middelhavsoplevelse ud over boutiquen",

    beachTitle: "Ved havet",
    beachText:
      "Træd væk fra dagens tempo og nyd Middelhavets stemning i afslappede omgivelser.",

    foodTitle: "Mad & gæstfrihed",
    foodText:
      "Nyd store morgenmåltider, friske retter og afslappet spisning med familie og venner.",

    eventsTitle: "Fejringer",
    eventsText:
      "Coppa danner også ramme om bryllupper, fødselsdage, jubilæer og private arrangementer.",

    atmosphereTitle: "Fra dag til aften",
    atmosphereText:
      "Fra et roligt besøg om dagen til middag under åben himmel ændrer stemningen sig naturligt.",

    eventsEyebrow: "Fejr hos Coppa",
    eventsHeading: "Nogle øjeblikke fortjener deres egen ramme.",
    eventsDescription:
      "Bryllupper, fødselsdage, jubilæer og private arrangementer kan fejres i afslappede middelhavsomgivelser.",

    weddings: "Bryllupper",
    birthdays: "Fødselsdage",
    anniversaries: "Jubilæer",
    privateEvents: "Private arrangementer",

    socialEyebrow: "Oplev Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Smykker kan bringe dig til os.",
    closingAccent: "Gæstfriheden gør oplevelsen mindeværdig.",

    imageAltBeach: "Coppa Beach Club ved Antalyas kyst",
    imageAltEntrance: "Indgangen til Coppa Beach Club",
    imageAltFood: "Morgenmad og friske retter hos Coppa Beach Club",
    imageAltTerrace: "Blomsterterrassen hos Coppa Beach Club",
    imageAltNight: "Aftenstemning hos Coppa Beach Club",
  },

  fi: {
    eyebrow: "Enemmän kuin koruja",
    title: "Paikka hidastaa,",
    titleAccent: "Välimeren rannalla.",
    intro:
      "Monille LIDYAn vieraille Antalya merkitsee muutakin kuin koruja. Coppa Beach Club tarjoaa rentouttavan ympäristön meren äärellä hyvän ruoan ja yhteisen ajan merkeissä.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Välimerellinen kokemus myös putiikin ulkopuolella",

    beachTitle: "Meren äärellä",
    beachText:
      "Jätä päivän kiire taakse ja nauti Välimeren tunnelmasta rennossa beach clubissa.",

    foodTitle: "Ruoka & vieraanvaraisuus",
    foodText:
      "Runsaat aamiaiset, tuoreet annokset ja rauhalliset ateriat sopivat täydellisesti yhdessäoloon.",

    eventsTitle: "Juhlat",
    eventsText:
      "Coppa sopii myös häihin, syntymäpäiviin, vuosipäiviin ja yksityistilaisuuksiin.",

    atmosphereTitle: "Päivästä iltaan",
    atmosphereText:
      "Rauhallisesta päivästä ulkoillalliseen Coppa muuttuu luonnollisesti päivän mukana.",

    eventsEyebrow: "Juhli Coppassa",
    eventsHeading: "Jotkut hetket ansaitsevat oman paikkansa.",
    eventsDescription:
      "Häät, syntymäpäivät, vuosipäivät ja yksityistilaisuudet saavat Coppassa rennon välimerellisen ympäristön.",

    weddings: "Häät",
    birthdays: "Syntymäpäivät",
    anniversaries: "Vuosipäivät",
    privateEvents: "Yksityistilaisuudet",

    socialEyebrow: "Tutustu Coppaan",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Korut voivat tuoda sinut luoksemme.",
    closingAccent: "Vieraanvaraisuus tekee kokemuksesta pysyvän.",

    imageAltBeach: "Coppa Beach Club Antalyan rannikolla",
    imageAltEntrance: "Coppa Beach Clubin sisäänkäynti",
    imageAltFood: "Aamiainen ja tuoreet ruoat Coppa Beach Clubissa",
    imageAltTerrace: "Coppa Beach Clubin kukkaterassi",
    imageAltNight: "Coppa Beach Clubin iltatunnelma",
  },

  sv: {
    eyebrow: "Mer än smycken",
    title: "En plats att sakta ner,",
    titleAccent: "vid Medelhavet.",
    intro:
      "För många LIDYA-gäster handlar Antalya om mer än smycken. Coppa Beach Club erbjuder en avslappnad miljö vid havet med god mat och tid tillsammans.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "En medelhavsupplevelse bortom butiken",

    beachTitle: "Vid havet",
    beachText:
      "Lämna dagens tempo bakom dig och njut av medelhavsstämningen i en avslappnad beach club.",

    foodTitle: "Mat & gästfrihet",
    foodText:
      "Njut av generösa frukostar, färska rätter och avslappnade måltider med familj och vänner.",

    eventsTitle: "Firanden",
    eventsText:
      "Coppa välkomnar också bröllop, födelsedagar, jubileer och privata evenemang.",

    atmosphereTitle: "Från dag till kväll",
    atmosphereText:
      "Från en lugn dag till middag utomhus förändras Coppa naturligt med dagens rytm.",

    eventsEyebrow: "Fira på Coppa",
    eventsHeading: "Vissa ögonblick förtjänar en särskild plats.",
    eventsDescription:
      "Bröllop, födelsedagar, jubileer och privata evenemang får en avslappnad medelhavsmiljö på Coppa.",

    weddings: "Bröllop",
    birthdays: "Födelsedagar",
    anniversaries: "Jubileer",
    privateEvents: "Privata evenemang",

    socialEyebrow: "Upptäck Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Smycken kan föra dig till oss.",
    closingAccent: "Gästfriheten gör att upplevelsen stannar kvar.",

    imageAltBeach: "Coppa Beach Club vid Antalyas kust",
    imageAltEntrance: "Entrén till Coppa Beach Club",
    imageAltFood: "Frukost och färska rätter på Coppa Beach Club",
    imageAltTerrace: "Blomsterterrass på Coppa Beach Club",
    imageAltNight: "Kvällsstämning på Coppa Beach Club",
  },

  fr: {
    eyebrow: "Au-delà des bijoux",
    title: "Un lieu pour ralentir,",
    titleAccent: "au bord de la Méditerranée.",
    intro:
      "Pour de nombreux clients de LIDYA, Antalya ne se résume pas aux bijoux. Coppa Beach Club offre un cadre détendu en bord de mer, une cuisine généreuse et de beaux moments à partager.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Une expérience méditerranéenne au-delà de la boutique",

    beachTitle: "Au bord de la mer",
    beachText:
      "Laissez le rythme de la journée derrière vous et profitez de l’atmosphère méditerranéenne.",

    foodTitle: "Cuisine & hospitalité",
    foodText:
      "Profitez de généreux petits-déjeuners, de plats frais et de repas détendus avec famille et amis.",

    eventsTitle: "Célébrations",
    eventsText:
      "Coppa accueille également mariages, anniversaires et événements privés au bord de la mer.",

    atmosphereTitle: "Du jour à la soirée",
    atmosphereText:
      "D’une visite paisible en journée à un dîner en plein air, Coppa suit naturellement le rythme du jour.",

    eventsEyebrow: "Célébrez chez Coppa",
    eventsHeading: "Certains moments méritent un lieu à leur mesure.",
    eventsDescription:
      "Mariages, anniversaires et événements privés trouvent chez Coppa un cadre méditerranéen détendu et chaleureux.",

    weddings: "Mariages",
    birthdays: "Anniversaires",
    anniversaries: "Anniversaires de mariage",
    privateEvents: "Événements privés",

    socialEyebrow: "Découvrir Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Les bijoux peuvent vous conduire jusqu’à nous.",
    closingAccent: "L’hospitalité rend l’expérience inoubliable.",

    imageAltBeach: "Coppa Beach Club sur la côte d’Antalya",
    imageAltEntrance: "Entrée du Coppa Beach Club",
    imageAltFood: "Petit-déjeuner et cuisine fraîche au Coppa Beach Club",
    imageAltTerrace: "Terrasse fleurie du Coppa Beach Club",
    imageAltNight: "Ambiance du soir au Coppa Beach Club",
  },

  it: {
    eyebrow: "Oltre i gioielli",
    title: "Un luogo dove rallentare,",
    titleAccent: "sul Mediterraneo.",
    intro:
      "Per molti ospiti LIDYA, Antalya è molto più dei gioielli. Coppa Beach Club offre un ambiente rilassato sul mare, buon cibo e momenti piacevoli da condividere.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Un’esperienza mediterranea oltre la boutique",

    beachTitle: "Sul mare",
    beachText:
      "Lasciate alle spalle il ritmo della giornata e godetevi l’atmosfera mediterranea.",

    foodTitle: "Cucina & ospitalità",
    foodText:
      "Godetevi ricche colazioni, piatti freschi e pasti rilassati con famiglia e amici.",

    eventsTitle: "Celebrazioni",
    eventsText:
      "Coppa accoglie anche matrimoni, compleanni, anniversari ed eventi privati.",

    atmosphereTitle: "Dal giorno alla sera",
    atmosphereText:
      "Da una giornata tranquilla a una cena all’aperto, Coppa segue naturalmente il ritmo della giornata.",

    eventsEyebrow: "Festeggiate da Coppa",
    eventsHeading: "Alcuni momenti meritano un luogo speciale.",
    eventsDescription:
      "Matrimoni, compleanni, anniversari ed eventi privati trovano da Coppa un ambiente mediterraneo rilassato.",

    weddings: "Matrimoni",
    birthdays: "Compleanni",
    anniversaries: "Anniversari",
    privateEvents: "Eventi privati",

    socialEyebrow: "Scoprite Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "I gioielli possono portarvi da noi.",
    closingAccent: "L’ospitalità rende l’esperienza indimenticabile.",

    imageAltBeach: "Coppa Beach Club sulla costa di Antalya",
    imageAltEntrance: "Ingresso del Coppa Beach Club",
    imageAltFood: "Colazione e cucina fresca al Coppa Beach Club",
    imageAltTerrace: "Terrazza fiorita del Coppa Beach Club",
    imageAltNight: "Atmosfera serale al Coppa Beach Club",
  },

  es: {
    eyebrow: "Más allá de las joyas",
    title: "Un lugar para bajar el ritmo,",
    titleAccent: "junto al Mediterráneo.",
    intro:
      "Para muchos clientes de LIDYA, Antalya es mucho más que joyería. Coppa Beach Club ofrece un entorno relajado junto al mar, buena comida y tiempo de calidad para compartir.",

    experienceEyebrow: "Coppa Beach Club",
    experienceTitle: "Una experiencia mediterránea más allá de la boutique",

    beachTitle: "Junto al mar",
    beachText:
      "Deje atrás el ritmo del día y disfrute del ambiente mediterráneo en un beach club relajado.",

    foodTitle: "Gastronomía & hospitalidad",
    foodText:
      "Disfrute de desayunos generosos, platos frescos y comidas tranquilas con familia y amigos.",

    eventsTitle: "Celebraciones",
    eventsText:
      "Coppa también recibe bodas, cumpleaños, aniversarios y eventos privados junto al mar.",

    atmosphereTitle: "Del día a la noche",
    atmosphereText:
      "Desde una visita tranquila durante el día hasta una cena al aire libre, Coppa cambia naturalmente con el ritmo del día.",

    eventsEyebrow: "Celebre en Coppa",
    eventsHeading: "Algunos momentos merecen su propio lugar.",
    eventsDescription:
      "Bodas, cumpleaños, aniversarios y eventos privados encuentran en Coppa un entorno mediterráneo relajado.",

    weddings: "Bodas",
    birthdays: "Cumpleaños",
    anniversaries: "Aniversarios",
    privateEvents: "Eventos privados",

    socialEyebrow: "Descubra Coppa",
    instagram: "Instagram",
    facebook: "Facebook",

    closingBefore: "Las joyas pueden traerle hasta nosotros.",
    closingAccent: "La hospitalidad hace que la experiencia permanezca.",

    imageAltBeach: "Coppa Beach Club en la costa de Antalya",
    imageAltEntrance: "Entrada de Coppa Beach Club",
    imageAltFood: "Desayuno y cocina fresca en Coppa Beach Club",
    imageAltTerrace: "Terraza con flores en Coppa Beach Club",
    imageAltNight: "Ambiente nocturno en Coppa Beach Club",
  },
};

const INSTAGRAM_URL =
  "https://www.instagram.com/coppabeachclub?igsh=MXd0cGRnbGJ2cnl2";

const FACEBOOK_URL =
  "https://www.facebook.com/share/19NEnyzsQo/?mibextid=wwXIfr";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export default function CoppaBeachClub() {
  const { locale } = useLanguage();

  const copy = COPPA_COPY[locale] ?? COPPA_COPY.en;

  return (
    <section
      id="coppa"
      className="relative overflow-hidden bg-[#F7F3EB] py-24 md:py-28 lg:py-32"
    >
      {/* AMBIENT */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-gold/7 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-40 h-[460px] w-[460px] rounded-full bg-[#DBC3A1]/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* =====================================================
            INTRO
        ====================================================== */}
        <div className="grid gap-9 text-center lg:grid-cols-12 lg:items-end lg:gap-10 lg:text-left">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="mx-auto max-w-[950px] font-display text-5xl leading-[0.94] tracking-[-0.035em] md:text-6xl lg:mx-0 lg:text-7xl"
              style={{ color: "#1B0B20" }}
            >
              {copy.title}

              <span
                className="mt-2 block italic"
                style={{ color: "#C8A96A" }}
              >
                {copy.titleAccent}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="mx-auto max-w-md text-sm leading-7 text-grey md:text-base lg:mx-0">
              {copy.intro}
            </p>

            <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-12 bg-gold" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/45">
                COPPA BEACH CLUB
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN IMAGE COMPOSITION
        ====================================================== */}
        <div className="mt-16 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* MAIN BEACH IMAGE */}
          <div className="group relative min-h-[480px] overflow-hidden bg-plum-dark md:min-h-[620px] lg:col-span-8 lg:min-h-[720px]">
            <Image
              src="/images/coppa/coppa-beach.jpg"
              alt={copy.imageAltBeach}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/80 via-plum-dark/10 to-plum-dark/5" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-center md:p-10 lg:p-12 lg:text-left">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                {copy.experienceEyebrow}
              </span>

              <h3
                className="mx-auto mt-4 max-w-[700px] font-display text-4xl leading-[1] md:text-5xl lg:mx-0 lg:text-6xl"
                style={{ color: "#F5EFE6" }}
              >
                {copy.experienceTitle}
              </h3>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-5 md:grid-cols-2 lg:col-span-4 lg:grid-cols-1 lg:gap-6">
            <div className="group relative min-h-[290px] overflow-hidden bg-plum-dark lg:min-h-0">
              <Image
                src="/images/coppa/coppa-entrance.jpeg"
                alt={copy.imageAltEntrance}
                fill
                sizes="(min-width: 1024px) 34vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/55 via-transparent to-transparent" />
            </div>

            <div className="group relative min-h-[290px] overflow-hidden bg-plum-dark lg:min-h-0">
              <Image
                src="/images/coppa/coppa-food.jpeg"
                alt={copy.imageAltTerrace}
                fill
                sizes="(min-width: 1024px) 34vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* =====================================================
            EXPERIENCE POINTS — WITHOUT NUMBERING
        ====================================================== */}
        <div className="mt-16 grid border-y border-plum-dark/10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: copy.beachTitle,
              text: copy.beachText,
            },
            {
              title: copy.foodTitle,
              text: copy.foodText,
            },
            {
              title: copy.eventsTitle,
              text: copy.eventsText,
            },
            {
              title: copy.atmosphereTitle,
              text: copy.atmosphereText,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group border-b border-plum-dark/10 py-10 text-center md:border-r md:px-7 lg:border-b-0 lg:px-8 lg:text-left lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex justify-center lg:justify-end">
                <span className="h-px w-10 bg-plum-dark/10 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
              </div>

              <h3
                className="mt-7 font-display text-2xl md:text-3xl"
                style={{ color: "#1B0B20" }}
              >
                {item.title}
              </h3>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-grey lg:mx-0">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            EVENTS / WEDDING
        ====================================================== */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="group relative min-h-[440px] overflow-hidden lg:col-span-5 lg:min-h-[600px]">
            <Image
              src="/images/coppa/coppa-wedding.jpg"
              alt={copy.imageAltFood}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
            />
          </div>

          <div className="relative overflow-hidden bg-plum-dark px-6 py-10 text-center md:px-10 md:py-12 lg:col-span-7 lg:flex lg:min-h-[600px] lg:flex-col lg:justify-between lg:px-14 lg:py-14 lg:text-left">
            <div className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-gold/10 blur-3xl" />

            <div className="relative">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                {copy.eventsEyebrow}
              </span>

              <h3
                className="mx-auto mt-5 max-w-[700px] font-display text-4xl leading-[1] md:text-5xl lg:mx-0 lg:text-6xl"
                style={{ color: "#F5EFE6" }}
              >
                {copy.eventsHeading}
              </h3>

              <p className="mx-auto mt-7 max-w-[620px] text-sm leading-7 text-brand-white/55 md:text-base lg:mx-0">
                {copy.eventsDescription}
              </p>
            </div>

            {/* EVENT TYPES — WITHOUT NUMBERING */}
            <div className="relative mt-12 grid grid-cols-2 border-t border-brand-white/12 md:grid-cols-4">
              {[
                copy.weddings,
                copy.birthdays,
                copy.anniversaries,
                copy.privateEvents,
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-r border-brand-white/12 px-3 py-8 text-center last:border-r-0 md:border-b-0"
                >
                  <p
                    className="font-display text-lg md:text-xl"
                    style={{ color: "#F5EFE6" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="relative mt-10 text-center lg:text-left">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-brand-white/35">
                {copy.socialEyebrow}
              </span>

              <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social inline-flex min-h-[54px] flex-1 items-center justify-between gap-6 border border-brand-white/18 px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-plum-dark sm:max-w-[210px]"
                >
                  {copy.instagram}

                  <span className="transition-transform duration-300 group-hover/social:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social inline-flex min-h-[54px] flex-1 items-center justify-between gap-6 border border-brand-white/18 px-5 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-plum-dark sm:max-w-[210px]"
                >
                  {copy.facebook}

                  <span className="transition-transform duration-300 group-hover/social:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            NIGHT IMAGE
        ====================================================== */}
        <div className="group relative mt-6 min-h-[400px] overflow-hidden bg-plum-dark md:min-h-[520px]">
          <Image
            src="/images/coppa/coppa-night.png"
            alt={copy.imageAltNight}
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/35 via-transparent to-plum-dark/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/55 via-transparent to-transparent" />
        </div>

        {/* =====================================================
            CLOSING
        ====================================================== */}
        <div className="mx-auto mt-16 max-w-[1050px] text-center md:mt-20">
          <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
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