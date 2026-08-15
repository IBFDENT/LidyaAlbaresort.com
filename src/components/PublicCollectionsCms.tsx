"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Collection = {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string | null;
  hero_image_url: string | null;
  featured: boolean;
  sort_order: number;
};

export default function PublicCollectionsCms() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    fetch("/api/public/collections", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) return [];
        const payload = (await response.json()) as { collections?: Collection[] };
        return payload.collections ?? [];
      })
      .then(setCollections)
      .catch(() => setCollections([]));
  }, []);

  if (!collections.length) return null;

  return (
    <section className="bg-plum-dark py-20 text-brand-white md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">LIDYA Collections</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Published from the atelier</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <article key={collection.id} className="overflow-hidden border border-white/10 bg-white/[0.035]">
              {collection.hero_image_url && (
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <Image
                    src={collection.hero_image_url}
                    alt={collection.name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">{collection.type}</span>
                  {collection.featured && <span className="text-[0.6rem] uppercase tracking-[0.16em] text-white/35">Featured</span>}
                </div>
                <h3 className="mt-3 font-display text-3xl">{collection.name}</h3>
                {collection.description && <p className="mt-3 text-sm leading-7 text-white/55">{collection.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
