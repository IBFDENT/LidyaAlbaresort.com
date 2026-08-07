"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

      const viewportHeight = window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

      const distanceFromBottom =
        documentHeight - (scrollTop + viewportHeight);

      /*
        Floating bar sa schová, keď sme približne
        900px od úplného konca stránky.

        Footer je veľký, takže týmto zmizne ešte
        pri jeho hornej časti.
      */
      setHidden(distanceFromBottom < 900);
    };

    checkPosition();

    window.addEventListener("scroll", checkPosition, {
      passive: true,
    });

    window.addEventListener("resize", checkPosition);

    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 transition-all duration-500 ease-out md:bottom-7 ${
        hidden
          ? "pointer-events-none translate-y-12 scale-90 opacity-0"
          : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      <div className="flex items-center gap-1.5 rounded-full border border-brand-white/15 bg-plum-dark/85 p-1.5 shadow-[0_16px_50px_-15px_rgba(27,11,32,0.65)] backdrop-blur-xl">

        {/* INSTAGRAM */}
        <a
          href="#"
          aria-label="Instagram"
          title="Instagram"
          className="group flex h-10 w-10 items-center justify-center rounded-full text-brand-white/75 transition-all duration-500 hover:-translate-y-1 hover:bg-brand-white/10 hover:text-gold md:h-11 md:w-11"
        >
          <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="0.8"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </a>

        {/* DIVIDER */}
        <span className="h-5 w-px bg-brand-white/10" />

        {/* WHATSAPP */}
        <a
          href="https://wa.me/905325672777"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gold text-plum-dark shadow-[0_8px_30px_-10px_rgba(200,169,106,0.8)] transition-all duration-500 hover:-translate-y-1.5 hover:bg-gold-light md:h-13 md:w-13"
        >
          <span className="absolute inset-0 rounded-full border border-gold-light/50 transition-transform duration-500 group-hover:scale-110" />

          <svg
            viewBox="0 0 24 24"
            width="21"
            height="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-3.9A8.2 8.2 0 1 1 20.2 11.8Z" />

            <path d="M9 8.3c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6-.1l.8-.9c.2-.2.4-.3.7-.1l1.8.8c.3.1.4.3.4.5v.4c0 .4-.2.8-.5 1.1-.5.5-1.2.8-2 .8-1.3 0-3.3-.8-5.1-2.5-1.7-1.7-2.7-3.7-2.7-5 0-.4.1-.8.3-1.1Z" />
          </svg>
        </a>

        {/* DIVIDER */}
        <span className="h-5 w-px bg-brand-white/10" />

        {/* FACEBOOK */}
        <a
          href="#"
          aria-label="Facebook"
          title="Facebook"
          className="group flex h-10 w-10 items-center justify-center rounded-full text-brand-white/75 transition-all duration-500 hover:-translate-y-1 hover:bg-brand-white/10 hover:text-gold md:h-11 md:w-11"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M13.8 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5H17V4a21 21 0 0 0-2.4-.1c-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.5v8h3.3Z" />
          </svg>
        </a>

      </div>
    </div>
  );
}