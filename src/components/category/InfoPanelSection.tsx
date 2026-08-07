import type { ReactNode } from "react";

type InfoPanelSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function InfoPanelSection({ eyebrow, title, children }: InfoPanelSectionProps) {
  return (
    <section className="bg-plum-dark py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-xl mb-14">
          <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-white">{title}</h2>
        </div>

        <div className="flex flex-col gap-14">{children}</div>
      </div>
    </section>
  );
}
