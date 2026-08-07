import Image from "next/image";

type InfoPanelProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

// Text (title/description) comes from the translatable content data and is
// the source of truth for accessibility and future i18n. The image below it
// is a rich, English-language infographic — see the note left where this
// component is used for how to handle it once other locales go live.
export default function InfoPanel({
  number,
  title,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: InfoPanelProps) {
  return (
    <div className="border-t border-brand-white/15 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
        <div>
          <span className="text-[0.7rem] font-semibold text-gold">{number}</span>
          <h3 className="mt-2 text-2xl text-brand-white">{title}</h3>
          <p className="mt-2 text-sm text-brand-white/70 leading-relaxed">{description}</p>
        </div>
        <div className="relative w-full overflow-hidden rounded bg-ivory">
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            sizes="(min-width: 1024px) 800px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
