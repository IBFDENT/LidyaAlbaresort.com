import Image from "next/image";
import type { ReactNode } from "react";

type GalleryItem = {
  image: string;
  caption: string;
  alt: string;
};

type CategoryGalleryProps = {
  icon?: ReactNode;
  items: GalleryItem[];

  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description: string;

  itemLabel: string;

  closingText: string;
  closingAccent?: string;
};

const layoutPattern = [
  {
    wrapper: "lg:col-span-7",
    image: "aspect-[5/4]",
  },
  {
    wrapper: "lg:col-span-5 lg:mt-24",
    image: "aspect-[4/5]",
  },
  {
    wrapper: "lg:col-span-5",
    image: "aspect-[4/5]",
  },
  {
    wrapper: "lg:col-span-7 lg:mt-20",
    image: "aspect-[5/4]",
  },
  {
    wrapper: "lg:col-span-7",
    image: "aspect-[5/4]",
  },
  {
    wrapper: "lg:col-span-5 lg:mt-24",
    image: "aspect-[4/5]",
  },
];

export default function CategoryGallery({
  icon,
  items,
  eyebrow = "The Collection",
  title,
  titleAccent,
  description,
  itemLabel,
  closingText,
  closingAccent,
}: CategoryGalleryProps) {
  return (
    <section className="relative overflow-hidden bg-brand-white py-16 md:py-22 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-12 grid gap-8 border-b border-plum-dark/10 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              {icon && (
                <span className="flex h-8 w-8 items-center justify-center text-gold">
                  {icon}
                </span>
              )}

              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-gold">
                {eyebrow}
              </span>
            </div>

            <h2
              className="mt-6 max-w-[760px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {title}

              {titleAccent && (
                <span
                  className="block italic"
                  style={{ color: "#C8A96A" }}
                >
                  {titleAccent}
                </span>
              )}
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-sm leading-7 text-grey md:text-base">
              {description}
            </p>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-6 md:gap-y-16 lg:grid-cols-12 lg:gap-x-7 lg:gap-y-20">
          {items.map((item, index) => {
            const layout =
              layoutPattern[index % layoutPattern.length];

            return (
              <figure
                key={`${item.image}-${index}`}
                className={`group ${layout.wrapper}`}
              >
                {/* IMAGE */}
                <div
                  className={`relative overflow-hidden bg-ivory ${layout.image}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />

                  {/* subtle hover overlay */}
                  <div className="absolute inset-0 bg-plum-dark/0 transition-colors duration-700 group-hover:bg-plum-dark/[0.05]" />

                  {/* NUMBER */}
                  <span className="absolute right-5 top-5 text-[0.56rem] font-semibold tracking-[0.22em] text-brand-white/80 drop-shadow-sm md:right-6 md:top-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* GOLD BOTTOM LINE */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                </div>

                {/* CAPTION */}
                <figcaption className="mt-5 flex items-start justify-between gap-5 border-t border-plum-dark/10 pt-4">
                  <div>
                    <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-gold">
                      {itemLabel}
                    </span>

                    <h3
                      className="mt-2 font-display text-2xl md:text-3xl"
                      style={{ color: "#1B0B20" }}
                    >
                      {item.caption}
                    </h3>
                  </div>

                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-plum-dark/15 text-plum-dark/45 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-plum-dark">
                    →
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mx-auto mt-20 max-w-[980px] text-center md:mt-24">
          <span className="mx-auto mb-7 block h-px w-14 bg-gold" />

          <p
            className="font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
            style={{ color: "#1B0B20" }}
          >
            {closingText}

            {closingAccent && (
              <span style={{ color: "#C8A96A" }}>
                {" "}
                {closingAccent}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}