type PlaceholderImageProps = {
  icon: React.ReactNode;
  className?: string;
};

/**
 * Elegant placeholder tile used until real product photography is
 * supplied. Keeps the page looking intentional rather than broken.
 * Swap for a real <Image> once photos are available — the small
 * "PHOTOGRAPHY PENDING" tag makes it obvious what still needs replacing.
 */
export default function PlaceholderImage({ icon, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory via-brand-white to-gold-light/40 ${className}`}
    >
      <div className="text-gold/70 [&_svg]:h-10 [&_svg]:w-10 md:[&_svg]:h-14 md:[&_svg]:w-14">
        {icon}
      </div>
      <span className="absolute bottom-2 right-2 text-[0.55rem] uppercase tracking-[0.14em] text-plum-dark/25">
        Photography pending
      </span>
    </div>
  );
}
