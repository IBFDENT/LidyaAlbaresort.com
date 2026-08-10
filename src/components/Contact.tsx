"use client";

import Image from "next/image";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const contacts = [
  {
    name: "Zafer (Victor)",
    phone: "+90 532 567 27 77",
    phoneHref: "tel:+905325672777",
    email: "albalidya@hotmail.com",
    whatsapp: "https://wa.me/905325672777",
    image: "/images/viktor.jpg",
    imageAlt: "Zafer Victor — LIDYA JEWELLERY",
    imagePosition: "object-[50%_28%]",
  },
  {
    name: "Vierka",
    phone: "+90 537 827 85 99",
    phoneHref: "tel:+905378278599",
    email: "vierakocaker@hotmail.com",
    whatsapp: "https://wa.me/905378278599",
    image: "/images/vierka.jpg",
    imageAlt: "Vierka — LIDYA JEWELLERY",
    imagePosition: "object-[50%_25%]",
  },
  {
    name: "Benny",
    phone: "+90 537 669 45 84",
    phoneHref: "tel:+905376694584",
    email: "bekirozdilberler@gmail.com",
    whatsapp: "https://wa.me/905376694584",
    image: "/images/benny.jpg",
    imageAlt: "Benny — LIDYA JEWELLERY",
    imagePosition: "object-[50%_24%]",
  },
];

const locations = [
  {
    name: "LIDYA JEWELLERY — Manavgat",
    detail:
      "Çolaklı, Tilkiler Mevkii, Erhan Demir Blv. No:4, P.K:07600 Manavgat / Türkiye",
  },
  {
    name: "Hotel Alba Resort",
    detail:
      "Çolaklı Mahallesi Tilkiler Mevkii Erhan Demir Bulvarı No:3 P.K:07600 Manavgat / Antalya / Türkiye",
    url: "https://www.albahotels.com.tr/en/resort-en/",
  },
  {
    name: "Hotel Alba Royal",
    detail:
      "Çolaklı Mahallesi Tilkiler Mevkii Erhan Demir Bulvarı No:3 P.K:07600 Manavgat / Antalya / Türkiye",
    url: "https://www.albahotels.com.tr/en/royal-en/",
  },
  {
    name: "Hotel Alba Queen",
    detail:
      "Çolaklı Mahallesi Tilkiler Mevkii Erhan Demir Bulvarı No:3-1 P.K:07600 Manavgat / Antalya / Türkiye",
    url: "https://www.albahotels.com.tr/en/queen-en/",
  },
];

const CONTACT_COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    call: string;
    email: string;
    visitUs: string;
    ourBoutiques: string;
    locationsIntro: string;
    visitAria: string;
    privateTitle: string;
    privateText: string;
    privateButton: string;
  }
> = {
  en: {
    eyebrow: "Contact",
    title: "We would be glad to hear from you",
    intro:
      "Personal assistance for jewellery, service, bespoke enquiries and private appointments.",
    call: "Call",
    email: "Email",
    visitUs: "Visit us",
    ourBoutiques: "Our boutiques",
    locationsIntro:
      "Discover LIDYA in Manavgat and at selected Alba Hotels.",
    visitAria: "Visit",
    privateTitle: "Prefer a private consultation?",
    privateText:
      "Arrange a personal appointment at a time that suits you.",
    privateButton: "Private appointment",
  },

  de: {
    eyebrow: "Kontakt",
    title: "Wir freuen uns, von Ihnen zu hören",
    intro:
      "Persönliche Beratung zu Schmuck, Service, Maßanfertigungen und privaten Terminen.",
    call: "Anrufen",
    email: "E-Mail",
    visitUs: "Besuchen Sie uns",
    ourBoutiques: "Unsere Boutiquen",
    locationsIntro:
      "Entdecken Sie LIDYA in Manavgat und in ausgewählten Alba Hotels.",
    visitAria: "Besuchen",
    privateTitle: "Bevorzugen Sie eine private Beratung?",
    privateText:
      "Vereinbaren Sie einen persönlichen Termin zu einer Zeit, die Ihnen passt.",
    privateButton: "Privattermin",
  },

  tr: {
    eyebrow: "İletişim",
    title: "Sizden haber almaktan memnuniyet duyarız",
    intro:
      "Mücevher, servis, özel tasarım talepleri ve özel randevular için kişisel destek.",
    call: "Ara",
    email: "E-posta",
    visitUs: "Bizi ziyaret edin",
    ourBoutiques: "Butiklerimiz",
    locationsIntro:
      "LIDYA’yı Manavgat’ta ve seçili Alba Otellerinde keşfedin.",
    visitAria: "Ziyaret et",
    privateTitle: "Özel danışmanlık mı tercih edersiniz?",
    privateText:
      "Size uygun bir zamanda kişisel randevu oluşturun.",
    privateButton: "Özel randevu",
  },

  sk: {
    eyebrow: "Kontakt",
    title: "Radi sa vám ozveme",
    intro:
      "Osobná pomoc pri výbere šperkov, servise, zákazkovej výrobe a súkromných termínoch.",
    call: "Zavolať",
    email: "E-mail",
    visitUs: "Navštívte nás",
    ourBoutiques: "Naše butiky",
    locationsIntro:
      "Objavte LIDYA v Manavgate a vo vybraných hoteloch Alba.",
    visitAria: "Navštíviť",
    privateTitle: "Uprednostňujete súkromnú konzultáciu?",
    privateText:
      "Dohodnite si osobný termín v čase, ktorý vám vyhovuje.",
    privateButton: "Súkromný termín",
  },

  cs: {
    eyebrow: "Kontakt",
    title: "Rádi se vám ozveme",
    intro:
      "Osobní pomoc při výběru šperků, servisu, zakázkové výrobě a soukromých termínech.",
    call: "Zavolat",
    email: "E-mail",
    visitUs: "Navštivte nás",
    ourBoutiques: "Naše butiky",
    locationsIntro:
      "Objevte LIDYA v Manavgatu a ve vybraných hotelech Alba.",
    visitAria: "Navštívit",
    privateTitle: "Dáváte přednost soukromé konzultaci?",
    privateText:
      "Domluvte si osobní termín v čase, který vám vyhovuje.",
    privateButton: "Soukromý termín",
  },

  hu: {
    eyebrow: "Kapcsolat",
    title: "Örömmel hallunk Önről",
    intro:
      "Személyes segítség ékszerekhez, szervizhez, egyedi igényekhez és privát időpontokhoz.",
    call: "Hívás",
    email: "E-mail",
    visitUs: "Látogasson el hozzánk",
    ourBoutiques: "Butikjaink",
    locationsIntro:
      "Fedezze fel a LIDYA üzleteit Manavgatban és a kiválasztott Alba szállodákban.",
    visitAria: "Megnyitás",
    privateTitle: "Privát konzultációt szeretne?",
    privateText:
      "Foglaljon személyes időpontot az Önnek megfelelő időpontra.",
    privateButton: "Privát időpont",
  },

  pl: {
    eyebrow: "Kontakt",
    title: "Chętnie się z Tobą skontaktujemy",
    intro:
      "Indywidualna pomoc w zakresie biżuterii, serwisu, zamówień specjalnych i prywatnych spotkań.",
    call: "Zadzwoń",
    email: "E-mail",
    visitUs: "Odwiedź nas",
    ourBoutiques: "Nasze butiki",
    locationsIntro:
      "Odkryj LIDYA w Manavgat oraz w wybranych hotelach Alba.",
    visitAria: "Odwiedź",
    privateTitle: "Wolisz prywatną konsultację?",
    privateText:
      "Umów osobiste spotkanie w dogodnym dla Ciebie terminie.",
    privateButton: "Prywatne spotkanie",
  },

  ru: {
    eyebrow: "Контакты",
    title: "Мы будем рады вашему обращению",
    intro:
      "Персональная помощь по вопросам ювелирных изделий, сервиса, индивидуальных заказов и личных встреч.",
    call: "Позвонить",
    email: "E-mail",
    visitUs: "Посетите нас",
    ourBoutiques: "Наши бутики",
    locationsIntro:
      "Откройте для себя LIDYA в Манавгате и в выбранных отелях Alba.",
    visitAria: "Посетить",
    privateTitle: "Предпочитаете личную консультацию?",
    privateText:
      "Запишитесь на персональную встречу в удобное для вас время.",
    privateButton: "Личная встреча",
  },

  nl: {
    eyebrow: "Contact",
    title: "We horen graag van u",
    intro:
      "Persoonlijke hulp bij sieraden, service, maatwerkvragen en privéafspraken.",
    call: "Bellen",
    email: "E-mail",
    visitUs: "Bezoek ons",
    ourBoutiques: "Onze boetieks",
    locationsIntro:
      "Ontdek LIDYA in Manavgat en bij geselecteerde Alba Hotels.",
    visitAria: "Bezoek",
    privateTitle: "Liever een persoonlijk adviesgesprek?",
    privateText:
      "Plan een persoonlijke afspraak op een moment dat u goed uitkomt.",
    privateButton: "Privéafspraak",
  },

  da: {
    eyebrow: "Kontakt",
    title: "Vi glæder os til at høre fra dig",
    intro:
      "Personlig hjælp med smykker, service, specialbestillinger og private aftaler.",
    call: "Ring",
    email: "E-mail",
    visitUs: "Besøg os",
    ourBoutiques: "Vores boutiques",
    locationsIntro:
      "Oplev LIDYA i Manavgat og på udvalgte Alba Hotels.",
    visitAria: "Besøg",
    privateTitle: "Foretrækker du en privat konsultation?",
    privateText:
      "Aftal et personligt møde på et tidspunkt, der passer dig.",
    privateButton: "Privat aftale",
  },

  fi: {
    eyebrow: "Yhteystiedot",
    title: "Kuulemme mielellämme sinusta",
    intro:
      "Henkilökohtaista apua koruihin, huoltoon, mittatilaustöihin ja yksityisiin tapaamisiin.",
    call: "Soita",
    email: "Sähköposti",
    visitUs: "Vieraile luonamme",
    ourBoutiques: "Myymälämme",
    locationsIntro:
      "Tutustu LIDYAan Manavgatissa ja valituissa Alba Hotels -hotelleissa.",
    visitAria: "Vieraile",
    privateTitle: "Haluatko yksityisen konsultoinnin?",
    privateText:
      "Varaa henkilökohtainen tapaaminen sinulle sopivaan aikaan.",
    privateButton: "Yksityinen tapaaminen",
  },

  sv: {
    eyebrow: "Kontakt",
    title: "Vi ser fram emot att höra från dig",
    intro:
      "Personlig hjälp med smycken, service, specialbeställningar och privata möten.",
    call: "Ring",
    email: "E-post",
    visitUs: "Besök oss",
    ourBoutiques: "Våra butiker",
    locationsIntro:
      "Upptäck LIDYA i Manavgat och på utvalda Alba Hotels.",
    visitAria: "Besök",
    privateTitle: "Föredrar du en privat konsultation?",
    privateText:
      "Boka ett personligt möte vid en tidpunkt som passar dig.",
    privateButton: "Privat möte",
  },

  fr: {
    eyebrow: "Contact",
    title: "Nous serons ravis de vous répondre",
    intro:
      "Assistance personnalisée pour les bijoux, le service, les demandes sur mesure et les rendez-vous privés.",
    call: "Appeler",
    email: "E-mail",
    visitUs: "Venez nous voir",
    ourBoutiques: "Nos boutiques",
    locationsIntro:
      "Découvrez LIDYA à Manavgat et dans une sélection d’Alba Hotels.",
    visitAria: "Visiter",
    privateTitle: "Vous préférez une consultation privée ?",
    privateText:
      "Organisez un rendez-vous personnel à l’heure qui vous convient.",
    privateButton: "Rendez-vous privé",
  },

  it: {
    eyebrow: "Contatti",
    title: "Saremo lieti di sentirvi",
    intro:
      "Assistenza personale per gioielli, servizi, richieste su misura e appuntamenti privati.",
    call: "Chiama",
    email: "E-mail",
    visitUs: "Venite a trovarci",
    ourBoutiques: "Le nostre boutique",
    locationsIntro:
      "Scoprite LIDYA a Manavgat e nei selezionati Alba Hotels.",
    visitAria: "Visita",
    privateTitle: "Preferite una consulenza privata?",
    privateText:
      "Prenotate un appuntamento personale nell’orario più adatto a voi.",
    privateButton: "Appuntamento privato",
  },

  es: {
    eyebrow: "Contacto",
    title: "Estaremos encantados de atenderle",
    intro:
      "Asistencia personalizada para joyería, servicio, encargos a medida y citas privadas.",
    call: "Llamar",
    email: "E-mail",
    visitUs: "Visítenos",
    ourBoutiques: "Nuestras boutiques",
    locationsIntro:
      "Descubra LIDYA en Manavgat y en una selección de Alba Hotels.",
    visitAria: "Visitar",
    privateTitle: "¿Prefiere una consulta privada?",
    privateText:
      "Concierte una cita personal en el horario que mejor le convenga.",
    privateButton: "Cita privada",
  },
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
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

export default function Contact() {
  const { locale } = useLanguage();
  const copy = CONTACT_COPY[locale];

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-ivory py-20 md:py-24 lg:py-28"
    >
      {/* AMBIENT DETAIL */}
      <div className="pointer-events-none absolute -left-44 top-10 h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="lg:col-span-7 lg:pr-6">
            <span className="mb-5 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="max-w-[760px] font-display text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl"
              style={{ color: "#1B0B20" }}
            >
              {copy.title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-grey md:text-base">
              {copy.intro}
            </p>

            {/* =================================================
                CONTACT PEOPLE
            ================================================== */}
            <div className="mt-10 border-t border-plum-dark/10">
              {contacts.map((contact, index) => (
                <div
                  key={contact.name}
                  className="group border-b border-plum-dark/10 py-7 transition-colors duration-500 hover:bg-brand-white/60 md:px-2"
                >
                  <div className="grid gap-6 md:grid-cols-12 md:items-center">
                    {/* NUMBER */}
                    <div className="hidden md:col-span-1 md:block">
                      <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* PHOTO + NAME */}
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-full border border-plum-dark/10 bg-brand-white shadow-[0_12px_35px_-20px_rgba(27,11,32,0.45)] md:h-[92px] md:w-[92px]">
                          <Image
                            src={contact.image}
                            alt={contact.imageAlt}
                            fill
                            sizes="92px"
                            className={`object-cover ${contact.imagePosition} transition-transform duration-700 group-hover:scale-[1.04]`}
                          />
                        </div>

                        <div className="min-w-0">
                          <span className="mb-1 block text-[0.54rem] font-semibold tracking-[0.22em] text-gold md:hidden">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3
                            className="font-display text-3xl leading-none md:text-[2.1rem]"
                            style={{ color: "#1B0B20" }}
                          >
                            {contact.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* PHONE + EMAIL */}
                    <div className="min-w-0 md:col-span-4">
                      <a
                        href={contact.phoneHref}
                        className="block text-sm text-plum-dark transition-colors duration-300 hover:text-gold"
                      >
                        {contact.phone}
                      </a>

                      <a
                        href={`mailto:${contact.email}`}
                        className="mt-1 block break-all text-sm text-grey transition-colors duration-300 hover:text-gold"
                      >
                        {contact.email}
                      </a>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-row flex-wrap gap-x-6 gap-y-3 md:col-span-3 md:flex-col md:items-center md:justify-center">
                      <a
                        href={contact.phoneHref}
                        className="group/action flex w-full max-w-[120px] items-center justify-between gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-colors hover:text-gold"
                      >
                        <span>{copy.call}</span>

                        <span className="h-px w-4 shrink-0 bg-plum-dark/15 transition-all duration-300 group-hover/action:w-6 group-hover/action:bg-gold" />
                      </a>

                      <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/action flex w-full max-w-[120px] items-center justify-between gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-colors hover:text-gold"
                      >
                        <span>WhatsApp</span>

                        <span className="h-px w-4 shrink-0 bg-plum-dark/15 transition-all duration-300 group-hover/action:w-6 group-hover/action:bg-gold" />
                      </a>

                      <a
                        href={`mailto:${contact.email}`}
                        className="group/action flex w-full max-w-[120px] items-center justify-between gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-colors hover:text-gold"
                      >
                        <span>{copy.email}</span>

                        <span className="h-px w-4 shrink-0 bg-plum-dark/15 transition-all duration-300 group-hover/action:w-6 group-hover/action:bg-gold" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-plum-dark px-7 py-8 md:px-9 md:py-10 lg:px-10 lg:py-11">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

              <div className="relative">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">
                  {copy.visitUs}
                </span>

                <h3
                  className="mt-4 font-display text-4xl leading-tight md:text-5xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.ourBoutiques}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-brand-white/55">
                  {copy.locationsIntro}
                </p>

                {/* LOCATIONS */}
                <div className="mt-8 border-t border-brand-white/12">
                  {locations.map((location, index) => {
                    const content = (
                      <>
                        <div className="flex min-w-0 items-start gap-4">
                          <span className="mt-1 shrink-0 text-[0.56rem] font-semibold tracking-[0.22em] text-gold">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="min-w-0">
                            <h4
                              className={`font-display text-lg md:text-xl ${
                                location.url
                                  ? "transition-colors duration-300 group-hover:text-gold-light"
                                  : ""
                              }`}
                              style={{ color: "#F5EFE6" }}
                            >
                              {location.name}
                            </h4>

                            <p className="mt-1 max-w-[340px] text-[0.72rem] leading-5 text-brand-white/40">
                              {location.detail}
                            </p>
                          </div>
                        </div>

                        {location.url ? (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-white/15 text-brand-white/45 transition-all duration-500 group-hover:translate-x-1 group-hover:border-gold group-hover:bg-gold group-hover:text-plum-dark">
                            <ArrowIcon />
                          </span>
                        ) : (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-white/8 text-brand-white/15">
                            <ArrowIcon />
                          </span>
                        )}
                      </>
                    );

                    if (location.url) {
                      return (
                        <a
                          key={location.name}
                          href={location.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${copy.visitAria} ${location.name}`}
                          className="group flex items-center justify-between gap-5 border-b border-brand-white/12 py-4 transition-colors duration-500 hover:bg-brand-white/[0.025]"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={location.name}
                        className="flex cursor-default items-center justify-between gap-5 border-b border-brand-white/12 py-4"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                {/* PRIVATE APPOINTMENT */}
                <div className="mt-8 border-t border-brand-white/12 pt-7">
                  <p
                    className="font-display text-2xl italic leading-snug md:text-3xl"
                    style={{ color: "#E8D8B5" }}
                  >
                    {copy.privateTitle}
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-brand-white/50">
                    {copy.privateText}
                  </p>

                  <a
                    href="tel:+905325672777"
                    className="mt-6 inline-flex w-full items-center justify-between bg-gold px-6 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light md:w-auto md:min-w-[260px]"
                  >
                    {copy.privateButton}

                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}