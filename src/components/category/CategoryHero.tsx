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
};

export default function CategoryHero({
  eyebrow,
  title,
  lead,
  icon,
  image,
  imageAlt,
}: CategoryHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
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
            <PlaceholderImage icon={icon} className="aspect-[4/3] rounded" />
          )}
        </div>
      </div>
    </section>
  );
}
