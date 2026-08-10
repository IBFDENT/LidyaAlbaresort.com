"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type CategoryCTAProps = {
  title: string;
  sub: string;
};

type CategoryCTATranslations = {
  eyebrow: string;
  appointment: string;
  backHome: string;
  closingBefore: string;
  closingAccent: string;
};

const CTA_TEXT: Record<Locale, CategoryCTATranslations> = {
  en: {
    eyebrow: "Private Viewing",
    appointment: "Book a Private Appointment",
    backHome: "Back to Home",
    closingBefore: "Some pieces are chosen.",
    closingAccent: "Others simply feel meant for you.",
  },

  de: {
    eyebrow: "Private Besichtigung",
    appointment: "Privaten Termin vereinbaren",
    backHome: "Zurück zur Startseite",
    closingBefore: "Manche Schmuckstücke wählt man.",
    closingAccent: "Andere fühlen sich einfach wie für Sie gemacht an.",
  },

  tr: {
    eyebrow: "Özel Görüşme",
    appointment: "Özel Randevu Alın",
    backHome: "Ana Sayfaya Dön",
    closingBefore: "Bazı parçalar seçilir.",
    closingAccent: "Bazıları ise sanki sizin için yaratılmış gibi hissettirir.",
  },

  sk: {
    eyebrow: "Súkromná prehliadka",
    appointment: "Dohodnúť súkromné stretnutie",
    backHome: "Späť na domovskú stránku",
    closingBefore: "Niektoré šperky si vyberiete.",
    closingAccent: "Iné jednoducho cítite, že sú stvorené pre vás.",
  },

  cs: {
    eyebrow: "Soukromá prohlídka",
    appointment: "Domluvit soukromou schůzku",
    backHome: "Zpět na domovskou stránku",
    closingBefore: "Některé šperky si vyberete.",
    closingAccent: "U jiných jednoduše cítíte, že jsou stvořené pro vás.",
  },

  hu: {
    eyebrow: "Privát bemutató",
    appointment: "Privát időpont foglalása",
    backHome: "Vissza a főoldalra",
    closingBefore: "Vannak ékszerek, amelyeket kiválasztunk.",
    closingAccent: "Másokról egyszerűen érezzük, hogy nekünk készültek.",
  },

  pl: {
    eyebrow: "Prywatna prezentacja",
    appointment: "Umów prywatne spotkanie",
    backHome: "Powrót do strony głównej",
    closingBefore: "Niektóre klejnoty wybieramy.",
    closingAccent: "Przy innych po prostu czujemy, że zostały stworzone dla nas.",
  },

  ru: {
    eyebrow: "Частный просмотр",
    appointment: "Записаться на личную встречу",
    backHome: "Вернуться на главную",
    closingBefore: "Некоторые украшения мы выбираем.",
    closingAccent: "Другие словно изначально были созданы для вас.",
  },

  nl: {
    eyebrow: "Privébezichtiging",
    appointment: "Boek een privéafspraak",
    backHome: "Terug naar home",
    closingBefore: "Sommige sieraden kiest u.",
    closingAccent: "Andere voelen alsof ze speciaal voor u zijn gemaakt.",
  },

  da: {
    eyebrow: "Privat fremvisning",
    appointment: "Book en privat aftale",
    backHome: "Tilbage til forsiden",
    closingBefore: "Nogle smykker vælger man.",
    closingAccent: "Andre føles ganske enkelt som skabt til dig.",
  },

  fi: {
    eyebrow: "Yksityinen esittely",
    appointment: "Varaa yksityinen tapaaminen",
    backHome: "Takaisin etusivulle",
    closingBefore: "Jotkut korut valitaan.",
    closingAccent: "Toiset tuntuvat yksinkertaisesti olevan juuri sinulle tarkoitettuja.",
  },

  sv: {
    eyebrow: "Privat visning",
    appointment: "Boka ett privat möte",
    backHome: "Tillbaka till startsidan",
    closingBefore: "Vissa smycken väljer man.",
    closingAccent: "Andra känns helt enkelt som om de vore skapade för dig.",
  },

  fr: {
    eyebrow: "Présentation privée",
    appointment: "Réserver un rendez-vous privé",
    backHome: "Retour à l’accueil",
    closingBefore: "Certaines pièces se choisissent.",
    closingAccent: "D’autres semblent simplement avoir été créées pour vous.",
  },

  it: {
    eyebrow: "Presentazione privata",
    appointment: "Prenota un appuntamento privato",
    backHome: "Torna alla home",
    closingBefore: "Alcuni gioielli si scelgono.",
    closingAccent: "Altri sembrano semplicemente essere stati creati per voi.",
  },

  es: {
    eyebrow: "Presentación privada",
    appointment: "Reservar una cita privada",
    backHome: "Volver al inicio",
    closingBefore: "Algunas joyas se eligen.",
    closingAccent: "Otras simplemente parecen haber sido creadas para usted.",
  },
};

export default function CategoryCTA({
  title,
  sub,
}: CategoryCTAProps) {
  const { locale } = useLanguage();

  const text = CTA_TEXT[locale] ?? CTA_TEXT.en;

  return (
    <section className="relative overflow-hidden bg-ivory py-16 md:py-22 lg:py-24">
      {/* AMBIENT */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* =====================================================
            MAIN CTA
        ====================================================== */}
        <div className="border-y border-plum-dark/10 py-14 text-center md:py-16 lg:py-20">
          <div className="mx-auto max-w-[900px]">
            <span className="mb-5 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold md:text-[0.62rem]">
              {text.eyebrow}
            </span>

            <h2
              className="mx-auto max-w-[820px] font-display text-[2.35rem] leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {title}
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-7 text-grey md:text-base">
              {sub}
            </p>

            {/* ACTIONS */}
            <div className="mt-9 flex flex-col items-center justify-center gap-5">
              <a
                href="/#contact"
                className="group inline-flex w-full max-w-[390px] items-center justify-center gap-5 bg-gold px-7 py-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark transition-all duration-500 hover:bg-gold-light md:w-auto md:min-w-[330px] md:text-[0.66rem] md:tracking-[0.2em]"
              >
                <span>{text.appointment}</span>

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/"
                className="group inline-flex items-center justify-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/50 transition-colors duration-300 hover:text-gold md:text-[0.62rem]"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                <span>{text.backHome}</span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}
        <div className="mx-auto mt-14 max-w-[980px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-[1.9rem] italic leading-[1.12] md:text-4xl lg:text-5xl"
            style={{ color: "#1B0B20" }}
          >
            {text.closingBefore}

            <span style={{ color: "#C8A96A" }}>
              {" "}
              {text.closingAccent}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}