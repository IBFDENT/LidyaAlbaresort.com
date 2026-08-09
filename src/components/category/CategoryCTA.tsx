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
};

export default function CategoryCTA({
  title,
  sub,
}: CategoryCTAProps) {
  const { locale } = useLanguage();

  const text = CTA_TEXT[locale];

  return (
    <section className="relative overflow-hidden bg-ivory py-20 md:py-24 lg:py-28">
      {/* Ambient detail */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 border-y border-plum-dark/10 py-14 md:py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          {/* TEXT */}
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
              {text.eyebrow}
            </span>

            <h2
              className="max-w-[820px] font-display text-4xl leading-[0.98] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-grey md:text-base">
              {sub}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="/#contact"
              className="inline-flex w-full items-center justify-between bg-gold px-7 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light md:w-auto md:min-w-[300px]"
            >
              {text.appointment}
              <span>→</span>
            </a>

            <div className="mt-5">
              <a
                href="/"
                className="inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/55 transition-colors hover:text-gold"
              >
                <span>←</span>
                {text.backHome}
              </a>
            </div>
          </div>
        </div>

        {/* CLOSING LINE */}
        <div className="mx-auto mt-14 max-w-[980px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
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