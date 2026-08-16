"use client";

import { useEffect } from "react";

const HOME_LOCALES = new Set([
  "en",
  "de",
  "tr",
  "sk",
  "cs",
  "hu",
  "pl",
  "ru",
  "nl",
  "da",
  "fi",
  "sv",
  "fr",
  "it",
  "es",
]);

function isHomepagePath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.length === 0 || (segments.length === 1 && HOME_LOCALES.has(segments[0]));
}

function smoothScrollToTop() {
  const startY = window.scrollY;
  if (startY <= 1) {
    window.scrollTo(0, 0);
    return;
  }

  const duration = 720;
  const startTime = performance.now();

  const easeInOutCubic = (progress: number) =>
    progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const animate = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, Math.round(startY * (1 - eased)));

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    } else {
      window.scrollTo(0, 0);
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
    }
  };

  window.requestAnimationFrame(animate);
}

export default function HomeTopNavigation() {
  useEffect(() => {
    const handleHomeClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!isHomepagePath(window.location.pathname)) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (rawHref !== "/" && rawHref !== "/#home" && rawHref !== "#home") return;

      event.preventDefault();
      smoothScrollToTop();
    };

    document.addEventListener("click", handleHomeClick, true);
    return () => document.removeEventListener("click", handleHomeClick, true);
  }, []);

  return null;
}
