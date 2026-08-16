"use client";

import { useEffect } from "react";

const SCROLL_DURATION = 850;
const HEADER_OFFSET = 92;

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

export default function ServiceSelectionAutoScroll() {
  useEffect(() => {
    let highlightTimer: number | undefined;
    let scrollFrame: number | undefined;

    const smoothScrollTo = (element: HTMLElement) => {
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      const startY = window.scrollY || window.pageYOffset;
      const targetY = Math.max(
        0,
        element.getBoundingClientRect().top + startY - HEADER_OFFSET
      );
      const distance = targetY - startY;

      if (Math.abs(distance) < 4) {
        window.scrollTo(0, targetY);
        return;
      }

      const startedAt = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / SCROLL_DURATION, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          scrollFrame = window.requestAnimationFrame(animate);
        } else {
          scrollFrame = undefined;
          window.scrollTo(0, targetY);
        }
      };

      scrollFrame = window.requestAnimationFrame(animate);
    };

    const highlightRequestBuilder = (requestBuilder: HTMLElement) => {
      requestBuilder.style.transition =
        "border-color 700ms ease, box-shadow 700ms ease";
      requestBuilder.style.borderColor = "rgba(200, 169, 106, 0.9)";
      requestBuilder.style.boxShadow =
        "0 0 0 1px rgba(200, 169, 106, 0.18), 0 18px 48px rgba(200, 169, 106, 0.16)";

      if (highlightTimer) {
        window.clearTimeout(highlightTimer);
      }

      highlightTimer = window.setTimeout(() => {
        requestBuilder.style.borderColor = "";
        requestBuilder.style.boxShadow = "";
      }, 1600);
    };

    const handleServiceClick = (event: MouseEvent) => {
      const servicesSection = document.getElementById("services");
      if (!servicesSection) return;

      const target = event.target as HTMLElement | null;
      const button = target?.closest("button") as HTMLButtonElement | null;

      if (!button || !servicesSection.contains(button)) return;
      if (!button.classList.contains("group/item")) return;

      const wasAlreadySelected = button.textContent?.includes("✓") ?? false;
      if (wasAlreadySelected) return;

      window.setTimeout(() => {
        const nameInput = document.getElementById("service-name");
        const requestBuilder = nameInput?.closest(".bg-ivory") as HTMLElement | null;

        if (!requestBuilder) return;

        smoothScrollTo(requestBuilder);
        highlightRequestBuilder(requestBuilder);
      }, 140);
    };

    document.addEventListener("click", handleServiceClick, true);

    return () => {
      document.removeEventListener("click", handleServiceClick, true);

      if (highlightTimer) {
        window.clearTimeout(highlightTimer);
      }

      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }
    };
  }, []);

  return null;
}
