"use client";

import { usePublicCmsEntries } from "@/lib/usePublicCms";

type Props = {
  section: "investment" | "services" | "travel" | "content" | "media" | "seo";
  eyebrow?: string;
  title?: string;
};

export default function PublicCmsSection({ section, eyebrow = "LIDYA", title }: Props) {
  const entries = usePublicCmsEntries(section);
  if (!entries.length) return null;

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
          {title && <h2 className="mt-4 font-display text-4xl text-plum-dark md:text-5xl">{title}</h2>}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {entries.map((entry) => (
            <article key={entry.id} className="border border-plum-dark/10 bg-white p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-plum-dark">{entry.title}</h3>
                  {entry.subtitle && <p className="mt-2 text-sm text-plum-dark/55">{entry.subtitle}</p>}
                </div>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
              </div>
              {entry.body && <p className="mt-5 whitespace-pre-line text-sm leading-7 text-plum-dark/60">{entry.body}</p>}
              {(entry.metadata?.meta1 || entry.metadata?.meta2) && (
                <div className="mt-6 border-t border-plum-dark/10 pt-4 text-[0.68rem] uppercase tracking-[0.16em] text-plum-dark/40">
                  {entry.metadata?.meta1 && <p>{String(entry.metadata.meta1)}</p>}
                  {entry.metadata?.meta2 && <p className="mt-2">{String(entry.metadata.meta2)}</p>}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
