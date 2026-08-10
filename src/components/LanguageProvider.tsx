"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
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

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

const STORAGE_KEY = "lidya-locale";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocaleState] =
    useState<Locale>(LOCALE);

  useEffect(() => {
    const savedLocale =
      localStorage.getItem(STORAGE_KEY);

    if (
      savedLocale &&
      LOCALES.includes(savedLocale as Locale)
    ) {
      const validLocale = savedLocale as Locale;

      setLocaleState(validLocale);
      document.documentElement.lang =
        validLocale;
    } else {
      document.documentElement.lang =
        LOCALE;
    }
  }, []);

  function setLocale(newLocale: Locale) {
    if (!LOCALES.includes(newLocale)) {
      return;
    }

    setLocaleState(newLocale);

    localStorage.setItem(
      STORAGE_KEY,
      newLocale
    );

    document.documentElement.lang =
      newLocale;

    window.dispatchEvent(
      new CustomEvent(
        "lidya-language-change",
        {
          detail: {
            locale: newLocale,
          },
        }
      )
    );
  }

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      dictionary:
        dictionaries[locale],
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}