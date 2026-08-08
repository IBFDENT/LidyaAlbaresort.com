"use client";

import { useEffect, useState } from "react";

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

export default function CookieConsent() {
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
      }),
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
          {/* TEXT */}
          <div className="lg:col-span-7">
            <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.26em] text-gold">
              Privacy & Cookies
            </span>

            <h2
              className="mt-3 font-display text-2xl leading-tight md:text-[1.9rem]"
              style={{ color: "#F5EFE6" }}
            >
              Your privacy, your choice.
            </h2>

            <p className="mt-3 max-w-2xl text-[0.78rem] leading-6 text-brand-white/55 md:text-[0.82rem]">
              We use necessary technologies to make this website work.
              With your permission, optional analytics and marketing
              technologies may also be used to help us understand website
              usage and improve our services.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">
            <button
              type="button"
              onClick={rejectNonEssential}
              className="border border-brand-white/18 px-4 py-2.5 text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-brand-white/70 transition-all duration-300 hover:border-brand-white/40 hover:text-brand-white"
            >
              Reject non-essential
            </button>

            <button
              type="button"
              onClick={() => setSettingsOpen((current) => !current)}
              className="border border-brand-white/18 px-4 py-2.5 text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-brand-white/70 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Cookie settings
            </button>

            <button
              type="button"
              onClick={acceptAll}
              className="border border-gold bg-gold px-4 py-2.5 text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-plum-dark transition-all duration-300 hover:bg-gold-light"
            >
              Accept all
            </button>
          </div>
        </div>

        {/* SETTINGS */}
        {settingsOpen && (
          <div className="border-t border-brand-white/10 px-5 py-5 md:px-6 md:py-6 lg:px-7">
            <div className="grid gap-3 md:grid-cols-3">
              {/* NECESSARY */}
              <div className="border border-brand-white/10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[0.82rem] font-semibold text-brand-white">
                      Necessary
                    </h3>

                    <p className="mt-2 text-[0.68rem] leading-5 text-brand-white/45">
                      Required for essential website functionality and cannot
                      be switched off.
                    </p>
                  </div>

                  <span className="shrink-0 text-[0.5rem] font-semibold uppercase tracking-[0.15em] text-gold">
                    Always on
                  </span>
                </div>
              </div>

              {/* ANALYTICS */}
              <label className="cursor-pointer border border-brand-white/10 p-4 transition-colors hover:border-brand-white/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[0.82rem] font-semibold text-brand-white">
                      Analytics
                    </h3>

                    <p className="mt-2 text-[0.68rem] leading-5 text-brand-white/45">
                      Helps us understand how visitors use the website.
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

              {/* MARKETING */}
              <label className="cursor-pointer border border-brand-white/10 p-4 transition-colors hover:border-brand-white/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[0.82rem] font-semibold text-brand-white">
                      Marketing
                    </h3>

                    <p className="mt-2 text-[0.68rem] leading-5 text-brand-white/45">
                      Allows marketing technologies when these services are
                      added to the website.
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
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}