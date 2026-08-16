"use client";

import { useEffect } from "react";

export default function ServiceSelectionAutoScroll() {
  useEffect(() => {
    let highlightTimer: number | undefined;

    const handleServiceClick = (event: MouseEvent) => {
      const servicesSection = document.getElementById("services");
      if (!servicesSection) return;

      const target = event.target as HTMLElement | null;
      const button = target?.closest("button");

      if (!button || !servicesSection.contains(button)) return;
      if (!button.className.includes("group/item")) return;

      const wasAlreadySelected = button.textContent?.includes("✓") ?? false;
      if (wasAlreadySelected) return;

      window.setTimeout(() => {
        const nameInput = document.getElementById("service-name");
        const requestBuilder = nameInput?.closest(".bg-ivory") as HTMLElement | null;
        if (!requestBuilder) return;

        requestBuilder.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        requestBuilder.style.transition =
          "border-color 700ms ease, box-shadow 700ms ease";
        requestBuilder.style.borderColor = "rgba(200, 169, 106, 0.9)";
        requestBuilder.style.boxShadow =
          "0 0 0 1px rgba(200, 169, 106, 0.18), 0 18px 48px rgba(200, 169, 106, 0.16)";

        if (highlightTimer) window.clearTimeout(highlightTimer);
        highlightTimer = window.setTimeout(() => {
          requestBuilder.style.borderColor = "";
          requestBuilder.style.boxShadow = "";
        }, 1500);
      }, 90);
    };

    document.addEventListener("click", handleServiceClick);

    return () => {
      document.removeEventListener("click", handleServiceClick);
      if (highlightTimer) window.clearTimeout(highlightTimer);
    };
  }, []);

  return null;
}
