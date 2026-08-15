"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  collection: string | null;
  description: string | null;
  price: number | null;
  currency: string;
  image_url: string | null;
  featured: boolean;
};

export default function PublicProductsCms() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/public/products", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) return [];
        const payload = (await response.json()) as { products?: Product[] };
        return (payload.products ?? []).slice(0, 12);
      })
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  if (!products.length) return null;

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">LIDYA Selection</p>
          <h2 className="mt-4 font-display text-4xl text-plum-dark md:text-5xl">Latest published pieces</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden border border-plum-dark/10 bg-white">
              {product.image_url && (
                <div className="relative aspect-square overflow-hidden bg-plum-dark/5">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.6rem] uppercase tracking-[0.18em] text-gold">{product.category}</span>
                  {product.featured && <span className="text-[0.58rem] uppercase tracking-[0.14em] text-plum-dark/35">Featured</span>}
                </div>
                <h3 className="mt-3 font-display text-2xl text-plum-dark">{product.name}</h3>
                {product.collection && <p className="mt-1 text-xs text-plum-dark/40">{product.collection}</p>}
                {product.description && <p className="mt-3 line-clamp-3 text-sm leading-6 text-plum-dark/55">{product.description}</p>}
                {product.price != null && <p className="mt-4 text-sm font-medium text-plum-dark">{product.price.toLocaleString()} {product.currency}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
