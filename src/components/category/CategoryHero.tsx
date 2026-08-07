import type { ReactNode } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

type CategoryHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  icon: ReactNode;
  image?: string;
  imageAlt?: string;
  /** Set false to skip the placeholder box entirely when there's no image yet
   *  (single-column layout instead of leaving an empty "photography pending" box). */
  showPlaceholder?: boolean;
};

export default function CategoryHero({
  eyebrow,
  title,
  lead,
  icon,
  image,
  imageAlt,
  showPlaceholder = true,
}: CategoryHeroProps) {
  const hasVisual = Boolean(image) || showPlaceholder;

  return (
    <section className="relative pt-32 md:pt-40">
      <div className="mx-auto max-w-[1320px] px-6">
        <div
          className={
            hasVisual
              ? "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center"
              : "max-w-2xl"
          }
        >
          <div>
            <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
              {eyebrow}
            </span>
            <h1 className="text-5xl md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-lg text-grey leading-relaxed">{lead}</p>
          </div>
          {image ? (
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            showPlaceholder && <PlaceholderImage icon={icon} className="aspect-[4/3] rounded" />
          )}
        </div>
      </div>
    </section>
  );
}
