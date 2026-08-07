type CraftPoint = {
  title: string;
  description: string;
};

type CategoryCraftProps = {
  eyebrow: string;
  title: string;
  points: CraftPoint[];
};

export default function CategoryCraft({ eyebrow, title, points }: CategoryCraftProps) {
  return (
    <section className="bg-plum-dark py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-xl mb-14">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-white">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <div key={p.title} className="border-t border-brand-white/15 pt-5">
              <span className="text-[0.7rem] font-semibold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl text-brand-white">{p.title}</h3>
              <p className="mt-2 text-sm text-brand-white/70 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
