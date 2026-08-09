"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  dictionaries,
  LOCALE,
  LOCALES,
  type Locale,
} from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: (typeof dictionaries)[Locale];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(LOCALE);

  useEffect(() => {
    const savedLocale = localStorage.getItem("lidya-locale") as Locale | null;

    if (savedLocale && LOCALES.includes(savedLocale)) {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale);
    localStorage.setItem("lidya-locale", newLocale);
    document.documentElement.lang = newLocale;
  }

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        dictionary: dictionaries[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}