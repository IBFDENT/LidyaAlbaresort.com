"use client";

import { useEffect } from "react";

export default function SiteProtection() {
  useEffect(() => {
    // Block right-click context menu across the website.
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    // Prevent images from being dragged out of the website.
    const handleDragStart = (event: DragEvent) => {
      const target = event.target;

      if (target instanceof HTMLImageElement) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}