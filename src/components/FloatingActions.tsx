"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/905325672777"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
          <path d="M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5 2 7.2L2 30l7-2c2.1 1.2 4.5 1.8 7 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2zm7.6 20c-.3.9-1.7 1.7-2.6 1.9-.7.1-1.6.2-4.6-1-3.9-1.6-6.4-5.5-6.6-5.8-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2c.3-.3.7-.5 1.1-.5h.8c.3 0 .6 0 .9.7.3.8 1.1 2.7 1.2 2.9.1.2.2.4 0 .7-.1.3-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.9.4.2.6.1.8-.1l1.2-1.4c.3-.3.5-.3.8-.2l2.5 1.2c.3.1.5.2.6.4.1.2.1.9-.2 1.8z" />
        </svg>
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-plum-dark text-brand-white shadow-lg transition-transform hover:scale-105"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      )}
    </>
  );
}
