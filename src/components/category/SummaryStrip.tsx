import type { ReactNode } from "react";

type SummaryItem = {
  icon: ReactNode;
  text: string;
};

type SummaryStripProps = {
  items: SummaryItem[];
};

export default function SummaryStrip({ items }: SummaryStripProps) {
  return (
    <section className="py-16 bg-ivory">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-3 h-9 w-9 text-gold">{item.icon}</div>
              <p className="text-sm text-plum-dark leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
