import type { ReactNode } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

type GalleryItem = {
  caption?: string;
  /** Path under /public — when set, renders the real photo instead of a placeholder. */
  image?: string;
  alt?: string;
};

type CategoryGalleryProps = {
  icon: ReactNode;
  items?: GalleryItem[];
};

// A 10-slot editorial mosaic pattern (magazine-style asymmetric grid).
// Desktop: 4-column grid with varied spans for visual rhythm.
// Mobile: collapses to a simple 2-column grid.
const MOSAIC_SPANS = [
  "md:col-span-2 md:row-span-2", // 1 — feature
  "md:col-span-1 md:row-span-1", // 2
  "md:col-span-1 md:row-span-1", // 3
  "md:col-span-1 md:row-span-2", // 4 — tall
  "md:col-span-1 md:row-span-1", // 5
  "md:col-span-2 md:row-span-1", // 6 — wide
  "md:col-span-1 md:row-span-1", // 7
  "md:col-span-1 md:row-span-1", // 8
  "md:col-span-2 md:row-span-2", // 9 — feature
  "md:col-span-2 md:row-span-1", // 10 — wide
];

export default function CategoryGallery({ icon, items }: CategoryGalleryProps) {
  const slots = items ?? Array.from({ length: 10 }, () => ({}));

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-3">
          {slots.slice(0, 10).map((item, i) => (
            <div key={i} className={`relative ${MOSAIC_SPANS[i] ?? ""}`}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.alt ?? item.caption ?? ""}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="rounded object-cover"
                />
              ) : (
                <PlaceholderImage icon={icon} className="h-full w-full rounded" />
              )}
              {item.caption && (
                <span className="absolute left-3 top-3 rounded-sm bg-plum-dark/70 px-2 py-1 text-[0.62rem] uppercase tracking-[0.12em] text-brand-white">
                  {item.caption}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
