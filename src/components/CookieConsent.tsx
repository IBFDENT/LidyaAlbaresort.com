"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "lidya-cookie-consent";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const COOKIE_COPY: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    reject: string;
    settings: string;
    accept: string;

    necessaryTitle: string;
    necessaryText: string;
    alwaysOn: string;

    analyticsTitle: string;
    analyticsText: string;

    marketingTitle: string;
    marketingText: string;

    save: string;
  }
> = {
  en: {
    eyebrow: "Privacy & Cookies",
    title: "Your privacy, your choice.",
    description:
      "We use necessary technologies to make this website work. With your permission, optional analytics and marketing technologies may also be used to help us understand website usage and improve our services.",
    reject: "Reject non-essential",
    settings: "Cookie settings",
    accept: "Accept all",

    necessaryTitle: "Necessary",
    necessaryText:
      "Required for essential website functionality and cannot be switched off.",
    alwaysOn: "Always on",

    analyticsTitle: "Analytics",
    analyticsText:
      "Helps us understand how visitors use the website.",

    marketingTitle: "Marketing",
    marketingText:
      "Allows marketing technologies when these services are added to the website.",

    save: "Save preferences",
  },

  de: {
    eyebrow: "Datenschutz & Cookies",
    title: "Ihre Privatsphäre, Ihre Entscheidung.",
    description:
      "Wir verwenden notwendige Technologien, damit diese Website funktioniert. Mit Ihrer Zustimmung können zusätzlich Analyse- und Marketingtechnologien eingesetzt werden, um die Nutzung der Website besser zu verstehen und unsere Services zu verbessern.",
    reject: "Optionale ablehnen",
    settings: "Cookie-Einstellungen",
    accept: "Alle akzeptieren",

    necessaryTitle: "Notwendig",
    necessaryText:
      "Für wesentliche Funktionen der Website erforderlich und nicht deaktivierbar.",
    alwaysOn: "Immer aktiv",

    analyticsTitle: "Analyse",
    analyticsText:
      "Hilft uns zu verstehen, wie Besucher die Website nutzen.",

    marketingTitle: "Marketing",
    marketingText:
      "Ermöglicht Marketingtechnologien, sobald diese Dienste auf der Website eingesetzt werden.",

    save: "Einstellungen speichern",
  },

  tr: {
    eyebrow: "Gizlilik & Çerezler",
    title: "Gizliliğiniz, seçiminiz.",
    description:
      "Bu web sitesinin çalışması için gerekli teknolojileri kullanıyoruz. İzninizle, site kullanımını anlamamıza ve hizmetlerimizi geliştirmemize yardımcı olacak analiz ve pazarlama teknolojileri de kullanılabilir.",
    reject: "Gerekli olmayanları reddet",
    settings: "Çerez ayarları",
    accept: "Tümünü kabul et",

    necessaryTitle: "Gerekli",
    necessaryText:
      "Web sitesinin temel işlevleri için gereklidir ve kapatılamaz.",
    alwaysOn: "Her zaman açık",

    analyticsTitle: "Analiz",
    analyticsText:
      "Ziyaretçilerin web sitesini nasıl kullandığını anlamamıza yardımcı olur.",

    marketingTitle: "Pazarlama",
    marketingText:
      "Bu hizmetler eklendiğinde pazarlama teknolojilerinin kullanılmasına izin verir.",

    save: "Tercihleri kaydet",
  },

  sk: {
    eyebrow: "Súkromie & cookies",
    title: "Vaše súkromie, vaša voľba.",
    description:
      "Používame nevyhnutné technológie, aby táto webová stránka správne fungovala. S vaším súhlasom môžeme používať aj analytické a marketingové technológie, ktoré nám pomáhajú lepšie porozumieť používaniu webu a zlepšovať naše služby.",
    reject: "Odmietnuť voliteľné",
    settings: "Nastavenia cookies",
    accept: "Prijať všetko",

    necessaryTitle: "Nevyhnutné",
    necessaryText:
      "Sú potrebné pre základné fungovanie webovej stránky a nie je možné ich vypnúť.",
    alwaysOn: "Vždy aktívne",

    analyticsTitle: "Analytické",
    analyticsText:
      "Pomáhajú nám pochopiť, ako návštevníci používajú webovú stránku.",

    marketingTitle: "Marketingové",
    marketingText:
      "Umožňujú používanie marketingových technológií, keď budú tieto služby pridané na web.",

    save: "Uložiť nastavenia",
  },

  cs: {
    eyebrow: "Soukromí & cookies",
    title: "Vaše soukromí, vaše volba.",
    description:
      "Používáme nezbytné technologie, aby tato webová stránka správně fungovala. S vaším souhlasem můžeme používat také analytické a marketingové technologie, které nám pomáhají lépe porozumět používání webu a zlepšovat naše služby.",
    reject: "Odmítnout volitelné",
    settings: "Nastavení cookies",
    accept: "Přijmout vše",

    necessaryTitle: "Nezbytné",
    necessaryText:
      "Jsou potřebné pro základní fungování webové stránky a nelze je vypnout.",
    alwaysOn: "Vždy aktivní",

    analyticsTitle: "Analytické",
    analyticsText:
      "Pomáhají nám pochopit, jak návštěvníci používají webovou stránku.",

    marketingTitle: "Marketingové",
    marketingText:
      "Umožňují používání marketingových technologií, pokud budou tyto služby na web přidány.",

    save: "Uložit nastavení",
  },

  hu: {
    eyebrow: "Adatvédelem & cookie-k",
    title: "Az Ön adatvédelme, az Ön döntése.",
    description:
      "A weboldal működéséhez szükséges technológiákat használunk. Az Ön engedélyével elemzési és marketingtechnológiákat is alkalmazhatunk, hogy jobban megértsük a weboldal használatát és fejlesszük szolgáltatásainkat.",
    reject: "Nem szükségesek elutasítása",
    settings: "Cookie-beállítások",
    accept: "Összes elfogadása",

    necessaryTitle: "Szükséges",
    necessaryText:
      "A weboldal alapvető működéséhez szükséges, ezért nem kapcsolható ki.",
    alwaysOn: "Mindig aktív",

    analyticsTitle: "Analitika",
    analyticsText:
      "Segít megérteni, hogyan használják a látogatók a weboldalt.",

    marketingTitle: "Marketing",
    marketingText:
      "Lehetővé teszi marketingtechnológiák használatát, ha ilyen szolgáltatásokat adunk a weboldalhoz.",

    save: "Beállítások mentése",
  },

  pl: {
    eyebrow: "Prywatność & cookies",
    title: "Twoja prywatność, Twój wybór.",
    description:
      "Używamy niezbędnych technologii, aby strona działała prawidłowo. Za Twoją zgodą możemy również korzystać z technologii analitycznych i marketingowych, które pomagają nam lepiej rozumieć sposób korzystania ze strony i ulepszać nasze usługi.",
    reject: "Odrzuć opcjonalne",
    settings: "Ustawienia cookies",
    accept: "Akceptuj wszystko",

    necessaryTitle: "Niezbędne",
    necessaryText:
      "Są wymagane do podstawowego działania strony i nie można ich wyłączyć.",
    alwaysOn: "Zawsze aktywne",

    analyticsTitle: "Analityczne",
    analyticsText:
      "Pomagają nam zrozumieć, w jaki sposób odwiedzający korzystają ze strony.",

    marketingTitle: "Marketingowe",
    marketingText:
      "Pozwalają korzystać z technologii marketingowych, gdy takie usługi zostaną dodane do strony.",

    save: "Zapisz ustawienia",
  },

  ru: {
    eyebrow: "Конфиденциальность и cookies",
    title: "Ваша конфиденциальность — ваш выбор.",
    description:
      "Мы используем необходимые технологии для корректной работы этого сайта. С вашего согласия мы также можем использовать аналитические и маркетинговые технологии, чтобы лучше понимать использование сайта и улучшать наши услуги.",
    reject: "Отклонить необязательные",
    settings: "Настройки cookies",
    accept: "Принять все",

    necessaryTitle: "Необходимые",
    necessaryText:
      "Необходимы для основных функций сайта и не могут быть отключены.",
    alwaysOn: "Всегда активны",

    analyticsTitle: "Аналитические",
    analyticsText:
      "Помогают нам понять, как посетители используют сайт.",

    marketingTitle: "Маркетинговые",
    marketingText:
      "Позволяют использовать маркетинговые технологии, когда соответствующие сервисы добавлены на сайт.",

    save: "Сохранить настройки",
  },

  nl: {
    eyebrow: "Privacy & cookies",
    title: "Uw privacy, uw keuze.",
    description:
      "Wij gebruiken noodzakelijke technologieën om deze website goed te laten functioneren. Met uw toestemming kunnen we ook analytische en marketingtechnologieën gebruiken om beter te begrijpen hoe de website wordt gebruikt en onze diensten te verbeteren.",
    reject: "Optionele weigeren",
    settings: "Cookie-instellingen",
    accept: "Alles accepteren",

    necessaryTitle: "Noodzakelijk",
    necessaryText:
      "Vereist voor de essentiële werking van de website en kan niet worden uitgeschakeld.",
    alwaysOn: "Altijd actief",

    analyticsTitle: "Analytisch",
    analyticsText:
      "Helpt ons te begrijpen hoe bezoekers de website gebruiken.",

    marketingTitle: "Marketing",
    marketingText:
      "Maakt het gebruik van marketingtechnologieën mogelijk wanneer deze diensten aan de website worden toegevoegd.",

    save: "Voorkeuren opslaan",
  },

  da: {
    eyebrow: "Privatliv & cookies",
    title: "Dit privatliv, dit valg.",
    description:
      "Vi bruger nødvendige teknologier for at få denne hjemmeside til at fungere korrekt. Med dit samtykke kan vi også bruge analyse- og marketingteknologier til bedre at forstå brugen af hjemmesiden og forbedre vores tjenester.",
    reject: "Afvis valgfrie",
    settings: "Cookieindstillinger",
    accept: "Accepter alle",

    necessaryTitle: "Nødvendige",
    necessaryText:
      "Kræves for hjemmesidens grundlæggende funktioner og kan ikke deaktiveres.",
    alwaysOn: "Altid aktiv",

    analyticsTitle: "Analyse",
    analyticsText:
      "Hjælper os med at forstå, hvordan besøgende bruger hjemmesiden.",

    marketingTitle: "Marketing",
    marketingText:
      "Tillader brug af marketingteknologier, når disse tjenester tilføjes til hjemmesiden.",

    save: "Gem indstillinger",
  },

  fi: {
    eyebrow: "Tietosuoja & evästeet",
    title: "Yksityisyytesi, sinun valintasi.",
    description:
      "Käytämme välttämättömiä teknologioita, jotta tämä verkkosivusto toimii oikein. Suostumuksellasi voimme käyttää myös analytiikka- ja markkinointiteknologioita ymmärtääksemme paremmin verkkosivuston käyttöä ja kehittääksemme palveluitamme.",
    reject: "Hylkää valinnaiset",
    settings: "Evästeasetukset",
    accept: "Hyväksy kaikki",

    necessaryTitle: "Välttämättömät",
    necessaryText:
      "Tarvitaan verkkosivuston olennaisiin toimintoihin, eikä niitä voi poistaa käytöstä.",
    alwaysOn: "Aina käytössä",

    analyticsTitle: "Analytiikka",
    analyticsText:
      "Auttaa meitä ymmärtämään, miten kävijät käyttävät verkkosivustoa.",

    marketingTitle: "Markkinointi",
    marketingText:
      "Mahdollistaa markkinointiteknologioiden käytön, kun tällaisia palveluita lisätään verkkosivustolle.",

    save: "Tallenna asetukset",
  },

  sv: {
    eyebrow: "Integritet & cookies",
    title: "Din integritet, ditt val.",
    description:
      "Vi använder nödvändiga tekniker för att webbplatsen ska fungera korrekt. Med ditt samtycke kan vi även använda analys- och marknadsföringstekniker för att bättre förstå hur webbplatsen används och förbättra våra tjänster.",
    reject: "Avvisa valfria",
    settings: "Cookieinställningar",
    accept: "Acceptera alla",

    necessaryTitle: "Nödvändiga",
    necessaryText:
      "Krävs för webbplatsens grundläggande funktioner och kan inte stängas av.",
    alwaysOn: "Alltid aktiva",

    analyticsTitle: "Analys",
    analyticsText:
      "Hjälper oss att förstå hur besökare använder webbplatsen.",

    marketingTitle: "Marknadsföring",
    marketingText:
      "Tillåter användning av marknadsföringstekniker när dessa tjänster läggs till på webbplatsen.",

    save: "Spara inställningar",
  },

  fr: {
    eyebrow: "Confidentialité & cookies",
    title: "Votre vie privée, votre choix.",
    description:
      "Nous utilisons les technologies nécessaires au bon fonctionnement de ce site. Avec votre consentement, nous pouvons également utiliser des technologies d’analyse et de marketing afin de mieux comprendre l’utilisation du site et d’améliorer nos services.",
    reject: "Refuser les optionnels",
    settings: "Paramètres des cookies",
    accept: "Tout accepter",

    necessaryTitle: "Nécessaires",
    necessaryText:
      "Indispensables au fonctionnement essentiel du site et ne peuvent pas être désactivés.",
    alwaysOn: "Toujours actifs",

    analyticsTitle: "Analyse",
    analyticsText:
      "Nous aide à comprendre comment les visiteurs utilisent le site.",

    marketingTitle: "Marketing",
    marketingText:
      "Permet l’utilisation de technologies marketing lorsque ces services sont ajoutés au site.",

    save: "Enregistrer les préférences",
  },

  it: {
    eyebrow: "Privacy & cookie",
    title: "La tua privacy, la tua scelta.",
    description:
      "Utilizziamo le tecnologie necessarie per garantire il corretto funzionamento di questo sito. Con il tuo consenso, possiamo utilizzare anche tecnologie di analisi e marketing per comprendere meglio l’utilizzo del sito e migliorare i nostri servizi.",
    reject: "Rifiuta opzionali",
    settings: "Impostazioni cookie",
    accept: "Accetta tutti",

    necessaryTitle: "Necessari",
    necessaryText:
      "Necessari per le funzioni essenziali del sito e non possono essere disattivati.",
    alwaysOn: "Sempre attivi",

    analyticsTitle: "Analitici",
    analyticsText:
      "Ci aiutano a capire come i visitatori utilizzano il sito.",

    marketingTitle: "Marketing",
    marketingText:
      "Consentono l’utilizzo di tecnologie di marketing quando questi servizi vengono aggiunti al sito.",

    save: "Salva preferenze",
  },

  es: {
    eyebrow: "Privacidad & cookies",
    title: "Su privacidad, su elección.",
    description:
      "Utilizamos las tecnologías necesarias para que este sitio web funcione correctamente. Con su consentimiento, también podemos utilizar tecnologías de análisis y marketing para comprender mejor el uso del sitio y mejorar nuestros servicios.",
    reject: "Rechazar opcionales",
    settings: "Configuración de cookies",
    accept: "Aceptar todo",

    necessaryTitle: "Necesarias",
    necessaryText:
      "Son necesarias para las funciones esenciales del sitio web y no pueden desactivarse.",
    alwaysOn: "Siempre activas",

    analyticsTitle: "Analíticas",
    analyticsText:
      "Nos ayudan a comprender cómo utilizan los visitantes el sitio web.",

    marketingTitle: "Marketing",
    marketingText:
      "Permiten utilizar tecnologías de marketing cuando estos servicios se incorporan al sitio web.",

    save: "Guardar preferencias",
  },
};

export default function CookieConsent() {
  const { locale } = useLanguage();
  const copy = COOKIE_COPY[locale];

  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      setVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(stored) as CookiePreferences;

      setPreferences({
        necessary: true,
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      });
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookiePreferences;

          setPreferences({
            necessary: true,
            analytics: Boolean(parsed.analytics),
            marketing: Boolean(parsed.marketing),
          });
        } catch {
          setPreferences(defaultPreferences);
        }
      } else {
        setPreferences(defaultPreferences);
      }

      setSettingsOpen(true);
      setVisible(true);
    };

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  const savePreferences = (next: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setPreferences(next);
    setVisible(false);
    setSettingsOpen(false);

    window.dispatchEvent(
      new CustomEvent("cookie-consent-updated", {
        detail: next,
      })
    );
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCurrentPreferences = () => {
    savePreferences(preferences);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:px-6 md:pb-6">
      <div className="mx-auto max-w-[1180px] overflow-hidden border border-brand-white/12 bg-plum-dark/96 text-brand-white shadow-[0_-12px_45px_-20px_rgba(27,11,32,0.75)] backdrop-blur-xl">
        {/* MAIN BAR */}
        <div className="grid gap-7 p-5 md:p-6 lg:grid-cols-12 lg:items-center lg:p-7">
          <div className="lg:col-span-7">
            <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.26em] text-gold">
              {copy.eyebrow}
            </span>

            <h2
              className="mt-3 font-display text-2xl leading-tight md:text-[1.9rem]"
              style={{ color: "#F5EFE6" }}
            >
              {copy.title}
            </h2>

            <p className="mt-3 max-w-2xl text-[0.78rem] leading-6 text-brand-white/55 md:text-[0.82rem]">
              {copy.description}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="border border-brand-white/18 px-4 py-2.5 text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-brand-white/70 transition-all duration-300 hover:border-brand-white/40 hover:text-brand-white"
            >
              {copy.reject}
            </button>

            <button
              type="button"
              onClick={() => setSettingsOpen((current) => !current)}
              className="border border-brand-white/18 px-4 py-2.5 text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-brand-white/70 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              {copy.settings}
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="border border-gold bg-gold px-4 py-2.5 text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-plum-dark transition-all duration-300 hover:bg-gold-light"
            >
              {copy.accept}
            </button>
          </div>
        </div>

        {/* SETTINGS */}
        {settingsOpen && (
          <div className="border-t border-brand-white/10 px-5 py-5 md:px-6 md:py-6 lg:px-7">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="border border-brand-white/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[0.82rem] font-semibold text-brand-white">
                      {copy.necessaryTitle}
                    </h3>

                    <p className="mt-2 text-[0.68rem] leading-5 text-brand-white/45">
                      {copy.necessaryText}
                    </p>
                  </div>

                  <span className="shrink-0 text-[0.5rem] font-semibold uppercase tracking-[0.15em] text-gold">
                    {copy.alwaysOn}
                  </span>
                </div>
              </div>

              <label className="cursor-pointer border border-brand-white/10 p-4 transition-colors hover:border-brand-white/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[0.82rem] font-semibold text-brand-white">
                      {copy.analyticsTitle}
                    </h3>

                    <p className="mt-2 text-[0.68rem] leading-5 text-brand-white/45">
                      {copy.analyticsText}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        analytics: event.target.checked,
                      }))
                    }
                    className="mt-1 h-4 w-4 accent-[#C8A96A]"
                  />
                </div>
              </label>

              <label className="cursor-pointer border border-brand-white/10 p-4 transition-colors hover:border-brand-white/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[0.82rem] font-semibold text-brand-white">
                      {copy.marketingTitle}
                    </h3>

                    <p className="mt-2 text-[0.68rem] leading-5 text-brand-white/45">
                      {copy.marketingText}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(event) =>
                      setPreferences((current) => ({
                        ...current,
                        marketing: event.target.checked,
                      }))
                    }
                    className="mt-1 h-4 w-4 accent-[#C8A96A]"
                  />
                </div>
              </label>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={saveCurrentPreferences}
                className="border border-gold px-5 py-2.5 text-[0.55rem] font-semibold uppercase tracking-[0.17em] text-gold transition-all duration-300 hover:bg-gold hover:text-plum-dark"
              >
                {copy.save}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}