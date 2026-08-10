"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const TRANSFER_COPY: Record<
  Locale,
  {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    intro: string;

    flightsTitle: string;
    flightsText: string;
    flightsCta: string;

    transferTitle: string;
    transferText: string;
    transferCta: string;
    qrAria: string;
    qrAlt: string;
    qrLabel: string;

    hotelTitle: string;
    hotelText: string;

    privateTitle: string;
    privateText: string;
    privateCta: string;

    closingBefore: string;
    closingAccent: string;
  }
> = {
  en: {
    eyebrow: "Plan Your Visit",
    titleBefore: "Your journey to LIDYA,",
    titleAccent: "made effortless.",
    intro:
      "Visiting from abroad? We can help make the journey simple — from flights to Antalya and private airport transfer, to your hotel stay and boutique appointment.",

    flightsTitle: "Flights",
    flightsText:
      "Plan your journey to Antalya and choose the connection that best suits your visit.",
    flightsCta: "Find Flights",

    transferTitle: "VIP Transfer",
    transferText:
      "Private airport pickup from Antalya Airport to Manavgat or your selected Alba Hotel.",
    transferCta: "Contact Driver",
    qrAria: "Open VIP transfer QR code",
    qrAlt: "VIP transfer QR code",
    qrLabel: "Scan to contact",

    hotelTitle: "Hotel Stay",
    hotelText:
      "Stay at one of the selected Alba Hotels and keep your visit to LIDYA close, comfortable and effortless.",

    privateTitle: "Private Visit",
    privateText:
      "Arrange a personal boutique appointment and we will prepare your visit around you.",
    privateCta: "Book a Visit",

    closingBefore: "From flight to boutique,",
    closingAccent: "every detail of your visit can be arranged.",
  },

  de: {
    eyebrow: "Planen Sie Ihren Besuch",
    titleBefore: "Ihre Reise zu LIDYA,",
    titleAccent: "ganz unkompliziert.",
    intro:
      "Sie reisen aus dem Ausland an? Wir helfen Ihnen, Ihre Reise einfach zu gestalten — von Flügen nach Antalya über privaten Flughafentransfer bis hin zu Hotelaufenthalt und Boutique-Termin.",

    flightsTitle: "Flüge",
    flightsText:
      "Planen Sie Ihre Reise nach Antalya und wählen Sie die Verbindung, die am besten zu Ihrem Besuch passt.",
    flightsCta: "Flüge finden",

    transferTitle: "VIP-Transfer",
    transferText:
      "Privater Flughafentransfer vom Flughafen Antalya nach Manavgat oder zu Ihrem ausgewählten Alba Hotel.",
    transferCta: "Fahrer kontaktieren",
    qrAria: "QR-Code für VIP-Transfer öffnen",
    qrAlt: "QR-Code für VIP-Transfer",
    qrLabel: "Scannen für Kontakt",

    hotelTitle: "Hotelaufenthalt",
    hotelText:
      "Übernachten Sie in einem der ausgewählten Alba Hotels und genießen Sie einen komfortablen und unkomplizierten Besuch bei LIDYA.",

    privateTitle: "Privater Besuch",
    privateText:
      "Vereinbaren Sie einen persönlichen Boutique-Termin und wir gestalten Ihren Besuch individuell.",
    privateCta: "Besuch buchen",

    closingBefore: "Vom Flug bis zur Boutique,",
    closingAccent: "jedes Detail Ihres Besuchs kann organisiert werden.",
  },

  tr: {
    eyebrow: "Ziyaretinizi Planlayın",
    titleBefore: "LIDYA’ya yolculuğunuz,",
    titleAccent: "zahmetsiz olsun.",
    intro:
      "Yurt dışından mı geliyorsunuz? Antalya uçuşlarından özel havaalanı transferine, otel konaklamasından butik randevusuna kadar yolculuğunuzu kolaylaştırabiliriz.",

    flightsTitle: "Uçuşlar",
    flightsText:
      "Antalya yolculuğunuzu planlayın ve ziyaretinize en uygun bağlantıyı seçin.",
    flightsCta: "Uçuş Bul",

    transferTitle: "VIP Transfer",
    transferText:
      "Antalya Havalimanı’ndan Manavgat’a veya seçtiğiniz Alba Oteline özel transfer.",
    transferCta: "Şoförle İletişime Geç",
    qrAria: "VIP transfer QR kodunu aç",
    qrAlt: "VIP transfer QR kodu",
    qrLabel: "İletişim için tara",

    hotelTitle: "Otel Konaklaması",
    hotelText:
      "Seçili Alba Otellerinden birinde konaklayın ve LIDYA ziyaretinizi konforlu, yakın ve zahmetsiz hale getirin.",

    privateTitle: "Özel Ziyaret",
    privateText:
      "Kişisel butik randevunuzu oluşturun, ziyaretinizi size göre hazırlayalım.",
    privateCta: "Ziyaret Rezervasyonu",

    closingBefore: "Uçuştan butiğe kadar,",
    closingAccent: "ziyaretinizin her detayı planlanabilir.",
  },

  sk: {
    eyebrow: "Naplánujte si návštevu",
    titleBefore: "Vaša cesta do LIDYA,",
    titleAccent: "jednoducho a pohodlne.",
    intro:
      "Prichádzate zo zahraničia? Pomôžeme vám zjednodušiť cestu — od letu do Antalye a súkromného transferu z letiska až po pobyt v hoteli a termín v butiku.",

    flightsTitle: "Lety",
    flightsText:
      "Naplánujte si cestu do Antalye a vyberte si spojenie, ktoré vám najviac vyhovuje.",
    flightsCta: "Nájsť lety",

    transferTitle: "VIP transfer",
    transferText:
      "Súkromný transfer z letiska Antalya do Manavgatu alebo do vybraného hotela Alba.",
    transferCta: "Kontaktovať vodiča",
    qrAria: "Otvoriť QR kód VIP transferu",
    qrAlt: "QR kód VIP transferu",
    qrLabel: "Naskenujte pre kontakt",

    hotelTitle: "Pobyt v hoteli",
    hotelText:
      "Ubytujte sa v jednom z vybraných hotelov Alba a majte návštevu LIDYA blízko, pohodlne a bez starostí.",

    privateTitle: "Súkromná návšteva",
    privateText:
      "Dohodnite si osobný termín v butiku a my pripravíme návštevu podľa vás.",
    privateCta: "Rezervovať návštevu",

    closingBefore: "Od letu až po butik,",
    closingAccent: "každý detail vašej návštevy môžeme zabezpečiť.",
  },

  cs: {
    eyebrow: "Naplánujte si návštěvu",
    titleBefore: "Vaše cesta do LIDYA,",
    titleAccent: "jednoduše a pohodlně.",
    intro:
      "Přijíždíte ze zahraničí? Pomůžeme vám cestu zjednodušit — od letu do Antalye a soukromého transferu z letiště až po pobyt v hotelu a termín v butiku.",

    flightsTitle: "Lety",
    flightsText:
      "Naplánujte si cestu do Antalye a vyberte spojení, které nejlépe vyhovuje vaší návštěvě.",
    flightsCta: "Najít lety",

    transferTitle: "VIP transfer",
    transferText:
      "Soukromý transfer z letiště Antalya do Manavgatu nebo do vybraného hotelu Alba.",
    transferCta: "Kontaktovat řidiče",
    qrAria: "Otevřít QR kód VIP transferu",
    qrAlt: "QR kód VIP transferu",
    qrLabel: "Naskenujte pro kontakt",

    hotelTitle: "Pobyt v hotelu",
    hotelText:
      "Ubytujte se v jednom z vybraných hotelů Alba a mějte návštěvu LIDYA blízko, pohodlně a bez starostí.",

    privateTitle: "Soukromá návštěva",
    privateText:
      "Domluvte si osobní termín v butiku a my připravíme návštěvu podle vás.",
    privateCta: "Rezervovat návštěvu",

    closingBefore: "Od letu až po butik,",
    closingAccent: "každý detail vaší návštěvy můžeme zajistit.",
  },

  hu: {
    eyebrow: "Tervezze meg látogatását",
    titleBefore: "Utazása a LIDYA-hoz,",
    titleAccent: "egyszerűen és kényelmesen.",
    intro:
      "Külföldről érkezik? Segítünk egyszerűvé tenni az utazást — az antalyai repülőjárattól és privát reptéri transzfertől a szállodai tartózkodásig és a butik időpontjáig.",

    flightsTitle: "Repülőjáratok",
    flightsText:
      "Tervezze meg antalyai utazását, és válassza ki a látogatásához leginkább megfelelő járatot.",
    flightsCta: "Járatok keresése",

    transferTitle: "VIP transzfer",
    transferText:
      "Privát reptéri transzfer az antalyai repülőtérről Manavgatba vagy a kiválasztott Alba szállodába.",
    transferCta: "Kapcsolat a sofőrrel",
    qrAria: "VIP transzfer QR-kód megnyitása",
    qrAlt: "VIP transzfer QR-kód",
    qrLabel: "Beolvasás kapcsolathoz",

    hotelTitle: "Szállodai tartózkodás",
    hotelText:
      "Szálljon meg a kiválasztott Alba szállodák egyikében, és tegye kényelmessé és egyszerűvé LIDYA-látogatását.",

    privateTitle: "Privát látogatás",
    privateText:
      "Foglaljon személyes butikidőpontot, és mi az Ön igényeihez igazítjuk a látogatást.",
    privateCta: "Látogatás foglalása",

    closingBefore: "A repülőúttól a butikig,",
    closingAccent: "látogatása minden részletét megszervezhetjük.",
  },

  pl: {
    eyebrow: "Zaplanuj wizytę",
    titleBefore: "Twoja podróż do LIDYA,",
    titleAccent: "prosta i komfortowa.",
    intro:
      "Przyjeżdżasz z zagranicy? Pomożemy uprościć podróż — od lotu do Antalyi i prywatnego transferu z lotniska po pobyt w hotelu i wizytę w butiku.",

    flightsTitle: "Loty",
    flightsText:
      "Zaplanuj podróż do Antalyi i wybierz połączenie najlepiej dopasowane do Twojej wizyty.",
    flightsCta: "Znajdź loty",

    transferTitle: "Transfer VIP",
    transferText:
      "Prywatny odbiór z lotniska w Antalyi do Manavgat lub wybranego hotelu Alba.",
    transferCta: "Skontaktuj się z kierowcą",
    qrAria: "Otwórz kod QR transferu VIP",
    qrAlt: "Kod QR transferu VIP",
    qrLabel: "Zeskanuj, aby się skontaktować",

    hotelTitle: "Pobyt w hotelu",
    hotelText:
      "Zatrzymaj się w jednym z wybranych hoteli Alba i ciesz się wygodną, bliską i bezproblemową wizytą w LIDYA.",

    privateTitle: "Prywatna wizyta",
    privateText:
      "Umów indywidualną wizytę w butiku, a my przygotujemy ją zgodnie z Twoimi potrzebami.",
    privateCta: "Umów wizytę",

    closingBefore: "Od lotu aż po butik,",
    closingAccent: "każdy szczegół Twojej wizyty może zostać zorganizowany.",
  },

  ru: {
    eyebrow: "Спланируйте визит",
    titleBefore: "Ваше путешествие в LIDYA,",
    titleAccent: "легко и комфортно.",
    intro:
      "Приезжаете из-за границы? Мы поможем сделать поездку проще — от перелёта в Анталью и частного трансфера из аэропорта до проживания в отеле и визита в бутик.",

    flightsTitle: "Авиабилеты",
    flightsText:
      "Спланируйте поездку в Анталью и выберите рейс, который лучше всего подходит для вашего визита.",
    flightsCta: "Найти рейсы",

    transferTitle: "VIP-трансфер",
    transferText:
      "Частный трансфер из аэропорта Антальи в Манавгат или выбранный вами отель Alba.",
    transferCta: "Связаться с водителем",
    qrAria: "Открыть QR-код VIP-трансфера",
    qrAlt: "QR-код VIP-трансфера",
    qrLabel: "Сканируйте для связи",

    hotelTitle: "Проживание в отеле",
    hotelText:
      "Остановитесь в одном из выбранных отелей Alba и сделайте свой визит в LIDYA комфортным, удобным и без лишних забот.",

    privateTitle: "Частный визит",
    privateText:
      "Запишитесь на персональную встречу в бутике, и мы подготовим ваш визит с учётом ваших пожеланий.",
    privateCta: "Записаться на визит",

    closingBefore: "От перелёта до бутика,",
    closingAccent: "каждую деталь вашего визита можно организовать.",
  },

  nl: {
    eyebrow: "Plan uw bezoek",
    titleBefore: "Uw reis naar LIDYA,",
    titleAccent: "zorgeloos geregeld.",
    intro:
      "Komt u uit het buitenland? Wij helpen uw reis eenvoudig te maken — van vluchten naar Antalya en privétransfer vanaf de luchthaven tot uw hotelverblijf en afspraak in de boetiek.",

    flightsTitle: "Vluchten",
    flightsText:
      "Plan uw reis naar Antalya en kies de verbinding die het beste bij uw bezoek past.",
    flightsCta: "Vluchten zoeken",

    transferTitle: "VIP-transfer",
    transferText:
      "Privétransfer van Antalya Airport naar Manavgat of het door u gekozen Alba Hotel.",
    transferCta: "Contact met chauffeur",
    qrAria: "QR-code voor VIP-transfer openen",
    qrAlt: "QR-code voor VIP-transfer",
    qrLabel: "Scan voor contact",

    hotelTitle: "Hotelverblijf",
    hotelText:
      "Verblijf in een van de geselecteerde Alba Hotels en maak uw bezoek aan LIDYA comfortabel, dichtbij en zorgeloos.",

    privateTitle: "Privébezoek",
    privateText:
      "Maak een persoonlijke afspraak in de boetiek en wij stemmen uw bezoek volledig op u af.",
    privateCta: "Bezoek boeken",

    closingBefore: "Van vlucht tot boetiek,",
    closingAccent: "elk detail van uw bezoek kan worden geregeld.",
  },

  da: {
    eyebrow: "Planlæg dit besøg",
    titleBefore: "Din rejse til LIDYA,",
    titleAccent: "nemt og ubesværet.",
    intro:
      "Kommer du fra udlandet? Vi hjælper med at gøre rejsen enkel — fra fly til Antalya og privat lufthavnstransfer til hotelophold og aftale i butikken.",

    flightsTitle: "Fly",
    flightsText:
      "Planlæg din rejse til Antalya og vælg den forbindelse, der passer bedst til dit besøg.",
    flightsCta: "Find fly",

    transferTitle: "VIP-transfer",
    transferText:
      "Privat afhentning fra Antalya Lufthavn til Manavgat eller dit valgte Alba Hotel.",
    transferCta: "Kontakt chauffør",
    qrAria: "Åbn QR-kode til VIP-transfer",
    qrAlt: "QR-kode til VIP-transfer",
    qrLabel: "Scan for kontakt",

    hotelTitle: "Hotelophold",
    hotelText:
      "Bo på et af de udvalgte Alba Hotels og gør dit besøg hos LIDYA komfortabelt, nært og ubesværet.",

    privateTitle: "Privat besøg",
    privateText:
      "Book en personlig aftale i butikken, så tilrettelægger vi besøget efter dine ønsker.",
    privateCta: "Book et besøg",

    closingBefore: "Fra fly til boutique,",
    closingAccent: "kan hver detalje af dit besøg arrangeres.",
  },

  fi: {
    eyebrow: "Suunnittele vierailusi",
    titleBefore: "Matkasi LIDYAan,",
    titleAccent: "helposti ja vaivattomasti.",
    intro:
      "Saavutko ulkomailta? Autamme tekemään matkasta helpon — lennoista Antalyaan ja yksityisestä lentokenttäkuljetuksesta hotellimajoitukseen ja myymälävierailuun.",

    flightsTitle: "Lennot",
    flightsText:
      "Suunnittele matkasi Antalyaan ja valitse vierailuusi parhaiten sopiva yhteys.",
    flightsCta: "Etsi lentoja",

    transferTitle: "VIP-kuljetus",
    transferText:
      "Yksityinen kuljetus Antalyan lentoasemalta Manavgatiin tai valitsemaasi Alba-hotelliin.",
    transferCta: "Ota yhteyttä kuljettajaan",
    qrAria: "Avaa VIP-kuljetuksen QR-koodi",
    qrAlt: "VIP-kuljetuksen QR-koodi",
    qrLabel: "Skannaa yhteydenottoa varten",

    hotelTitle: "Hotellimajoitus",
    hotelText:
      "Majoitu yhdessä valituista Alba Hotels -hotelleista ja tee LIDYA-vierailustasi mukava, helppo ja vaivaton.",

    privateTitle: "Yksityinen vierailu",
    privateText:
      "Varaa henkilökohtainen aika myymälään, niin valmistelemme vierailusi toiveidesi mukaan.",
    privateCta: "Varaa vierailu",

    closingBefore: "Lennolta myymälään,",
    closingAccent: "vierailusi jokainen yksityiskohta voidaan järjestää.",
  },

  sv: {
    eyebrow: "Planera ditt besök",
    titleBefore: "Din resa till LIDYA,",
    titleAccent: "enkelt och bekvämt.",
    intro:
      "Kommer du från utlandet? Vi hjälper dig att göra resan enkel — från flyg till Antalya och privat flygplatstransfer till hotellvistelse och besök i butiken.",

    flightsTitle: "Flyg",
    flightsText:
      "Planera din resa till Antalya och välj den förbindelse som passar bäst för ditt besök.",
    flightsCta: "Hitta flyg",

    transferTitle: "VIP-transfer",
    transferText:
      "Privat upphämtning från Antalya flygplats till Manavgat eller ditt valda Alba Hotel.",
    transferCta: "Kontakta chauffören",
    qrAria: "Öppna QR-kod för VIP-transfer",
    qrAlt: "QR-kod för VIP-transfer",
    qrLabel: "Skanna för kontakt",

    hotelTitle: "Hotellvistelse",
    hotelText:
      "Bo på ett av de utvalda Alba Hotels och gör ditt besök hos LIDYA bekvämt, nära och enkelt.",

    privateTitle: "Privat besök",
    privateText:
      "Boka ett personligt möte i butiken så förbereder vi ditt besök efter dina önskemål.",
    privateCta: "Boka ett besök",

    closingBefore: "Från flyg till butik,",
    closingAccent: "varje detalj av ditt besök kan ordnas.",
  },

  fr: {
    eyebrow: "Planifiez votre visite",
    titleBefore: "Votre voyage vers LIDYA,",
    titleAccent: "en toute simplicité.",
    intro:
      "Vous venez de l’étranger ? Nous pouvons simplifier votre voyage — des vols vers Antalya au transfert privé depuis l’aéroport, jusqu’à votre séjour à l’hôtel et votre rendez-vous en boutique.",

    flightsTitle: "Vols",
    flightsText:
      "Planifiez votre voyage vers Antalya et choisissez la liaison qui convient le mieux à votre visite.",
    flightsCta: "Trouver des vols",

    transferTitle: "Transfert VIP",
    transferText:
      "Transfert privé depuis l’aéroport d’Antalya vers Manavgat ou l’Alba Hotel de votre choix.",
    transferCta: "Contacter le chauffeur",
    qrAria: "Ouvrir le QR code du transfert VIP",
    qrAlt: "QR code du transfert VIP",
    qrLabel: "Scanner pour contacter",

    hotelTitle: "Séjour à l’hôtel",
    hotelText:
      "Séjournez dans l’un des Alba Hotels sélectionnés et profitez d’une visite chez LIDYA confortable, proche et sans contrainte.",

    privateTitle: "Visite privée",
    privateText:
      "Organisez un rendez-vous personnel en boutique et nous préparerons votre visite selon vos souhaits.",
    privateCta: "Réserver une visite",

    closingBefore: "Du vol à la boutique,",
    closingAccent: "chaque détail de votre visite peut être organisé.",
  },

  it: {
    eyebrow: "Organizza la tua visita",
    titleBefore: "Il tuo viaggio verso LIDYA,",
    titleAccent: "semplice e senza pensieri.",
    intro:
      "Arrivi dall’estero? Possiamo rendere il viaggio più semplice — dai voli per Antalya e dal trasferimento privato dall’aeroporto fino al soggiorno in hotel e all’appuntamento in boutique.",

    flightsTitle: "Voli",
    flightsText:
      "Pianifica il viaggio verso Antalya e scegli il collegamento più adatto alla tua visita.",
    flightsCta: "Trova voli",

    transferTitle: "Transfer VIP",
    transferText:
      "Trasferimento privato dall’aeroporto di Antalya a Manavgat o all’Alba Hotel scelto.",
    transferCta: "Contatta l’autista",
    qrAria: "Apri il codice QR del transfer VIP",
    qrAlt: "Codice QR del transfer VIP",
    qrLabel: "Scansiona per contattare",

    hotelTitle: "Soggiorno in hotel",
    hotelText:
      "Soggiorna in uno degli Alba Hotels selezionati e rendi la visita a LIDYA comoda, vicina e senza pensieri.",

    privateTitle: "Visita privata",
    privateText:
      "Prenota un appuntamento personale in boutique e prepareremo la visita secondo le tue esigenze.",
    privateCta: "Prenota una visita",

    closingBefore: "Dal volo alla boutique,",
    closingAccent: "ogni dettaglio della tua visita può essere organizzato.",
  },

  es: {
    eyebrow: "Planifique su visita",
    titleBefore: "Su viaje a LIDYA,",
    titleAccent: "fácil y sin complicaciones.",
    intro:
      "¿Nos visita desde el extranjero? Podemos facilitarle el viaje — desde los vuelos a Antalya y el traslado privado desde el aeropuerto hasta su estancia en el hotel y su cita en la boutique.",

    flightsTitle: "Vuelos",
    flightsText:
      "Planifique su viaje a Antalya y elija la conexión que mejor se adapte a su visita.",
    flightsCta: "Buscar vuelos",

    transferTitle: "Traslado VIP",
    transferText:
      "Traslado privado desde el aeropuerto de Antalya hasta Manavgat o el Alba Hotel que haya elegido.",
    transferCta: "Contactar con el conductor",
    qrAria: "Abrir el código QR del traslado VIP",
    qrAlt: "Código QR del traslado VIP",
    qrLabel: "Escanee para contactar",

    hotelTitle: "Estancia en hotel",
    hotelText:
      "Alójese en uno de los Alba Hotels seleccionados y disfrute de una visita a LIDYA cómoda, cercana y sin complicaciones.",

    privateTitle: "Visita privada",
    privateText:
      "Reserve una cita personal en la boutique y prepararemos su visita de acuerdo con sus preferencias.",
    privateCta: "Reservar una visita",

    closingBefore: "Desde el vuelo hasta la boutique,",
    closingAccent: "cada detalle de su visita puede organizarse.",
  },
};

function PlaneIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 27.5 21 22V9.5c0-2.3 1.3-4.5 3-5.5 1.7 1 3 3.2 3 5.5V22l16 5.5v4L27 29v9l5 3v3l-8-2-8 2v-3l5-3v-9L5 31.5v-4Z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 31h28" />
      <path d="M12 31 15.5 20h17L36 31" />
      <path d="M15.5 20 19 14h10l3.5 6" />
      <path d="M9 31v6h4" />
      <path d="M39 31v6h-4" />
      <circle cx="16" cy="34" r="2.5" />
      <circle cx="32" cy="34" r="2.5" />
      <path d="M7 23h5" />
      <path d="M36 23h5" />
    </svg>
  );
}

function HotelIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 42V11h26v31" />
      <path d="M7 42h34" />
      <path d="M17 17h4" />
      <path d="M27 17h4" />
      <path d="M17 23h4" />
      <path d="M27 23h4" />
      <path d="M17 29h4" />
      <path d="M27 29h4" />
      <path d="M21 42V35h6v7" />
      <path d="M18 11V7h12v4" />
    </svg>
  );
}

function BoutiqueIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 21h28" />
      <path d="M12 21v20h24V21" />
      <path d="M9 21 13 10h22l4 11" />
      <path d="M16 21c0 3 2 5 4 5s4-2 4-5" />
      <path d="M24 21c0 3 2 5 4 5s4-2 4-5" />
      <path d="M20 41V31h8v10" />
    </svg>
  );
}

export default function Transfer() {
  const { locale } = useLanguage();
  const copy = TRANSFER_COPY[locale];

  return (
    <section
      id="transfer"
      className="relative overflow-hidden bg-plum-dark py-20 text-brand-white md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="grid gap-10 border-b border-brand-white/12 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="max-w-[900px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#F5EFE6" }}
            >
              {copy.titleBefore}
              <span
                className="block italic"
                style={{ color: "#E8D8B5" }}
              >
                {copy.titleAccent}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
              {copy.intro}
            </p>
          </div>
        </div>

        {/* 4-STEP JOURNEY */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {/* 01 — FLIGHTS */}
          <div className="group border-b border-brand-white/12 py-9 md:border-r md:px-8 md:first:pl-0 xl:min-h-[390px]">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                01
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <PlaneIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              {copy.flightsTitle}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              {copy.flightsText}
            </p>

            <a
              href="https://www.google.com/travel/flights"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-7 inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
            >
              {copy.flightsCta}

              <span className="transition-transform duration-500 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* 02 — VIP TRANSFER */}
          <div className="group border-b border-brand-white/12 py-9 md:px-8 xl:min-h-[390px] xl:border-r">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                02
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <CarIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              {copy.transferTitle}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              {copy.transferText}
            </p>

            <div className="mt-7">
              <a
                href="/images/QR.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
              >
                {copy.transferCta}

                <span className="transition-transform duration-500 group-hover/link:translate-x-1">
                  →
                </span>
              </a>

              <div className="mt-7 flex flex-col items-center">
                <span className="mb-4 h-px w-8 bg-gold/30" />

                <a
                  href="/images/QR.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.qrAria}
                  title={copy.qrAria}
                  className="group/qr relative h-16 w-16 overflow-hidden border border-gold/35 bg-brand-white p-1.5 transition-all duration-500 hover:scale-[1.05] hover:border-gold"
                >
                  <Image
                    src="/images/QR.jpg"
                    alt={copy.qrAlt}
                    fill
                    sizes="64px"
                    className="object-contain p-1.5"
                  />
                </a>

                <span className="mt-3 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-brand-white/35">
                  {copy.qrLabel}
                </span>
              </div>
            </div>
          </div>

          {/* 03 — HOTEL STAY */}
          <div className="group border-b border-brand-white/12 py-9 md:border-r md:px-8 xl:min-h-[390px]">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                03
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <HotelIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              {copy.hotelTitle}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              {copy.hotelText}
            </p>

            <div className="mt-6 flex flex-col items-start gap-2.5">
              <a
                href="https://www.albahotels.com.tr/en/resort-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/hotel inline-flex items-center gap-3 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Alba Resort
                <span className="transition-transform duration-500 group-hover/hotel:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.albahotels.com.tr/en/royal-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/hotel inline-flex items-center gap-3 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Alba Royal
                <span className="transition-transform duration-500 group-hover/hotel:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.albahotels.com.tr/en/queen-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/hotel inline-flex items-center gap-3 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Alba Queen
                <span className="transition-transform duration-500 group-hover/hotel:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* 04 — PRIVATE VISIT */}
          <div className="group border-b border-brand-white/12 py-9 md:px-8 md:last:pr-0 xl:min-h-[390px]">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                04
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <BoutiqueIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              {copy.privateTitle}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              {copy.privateText}
            </p>

            <a
              href="/#contact"
              className="group/link mt-7 inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
            >
              {copy.privateCta}

              <span className="transition-transform duration-500 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="hidden items-center px-4 pt-7 md:flex">
          <span className="h-2 w-2 rounded-full border border-gold/60" />
          <span className="h-px flex-1 bg-gradient-to-r from-gold/35 via-gold/15 to-gold/35" />
          <span className="h-2 w-2 rounded-full border border-gold/60" />
          <span className="h-px flex-1 bg-gradient-to-r from-gold/35 via-gold/15 to-gold/35" />
          <span className="h-2 w-2 rounded-full border border-gold/60" />
          <span className="h-px flex-1 bg-gradient-to-r from-gold/35 via-gold/15 to-gold/35" />
          <span className="h-2 w-2 rounded-full border border-gold/60" />
        </div>

        {/* CLOSING LINE */}
        <div className="mx-auto mt-14 max-w-[900px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-2xl italic leading-tight md:text-3xl lg:text-4xl"
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