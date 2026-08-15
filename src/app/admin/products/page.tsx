"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  collection: string | null;
  description: string | null;
  price: number | null;
  currency: string;
  image_url: string | null;
  status: "draft" | "published";
  featured: boolean;
  sort_order: number;
};

type ProductForm = {
  name: string;
  category: string;
  collection: string;
  description: string;
  price: string;
  currency: string;
  image_url: string;
  status: "draft" | "published";
  featured: boolean;
  sort_order: string;
};

const emptyForm: ProductForm = {
  name: "",
  category: "Jewellery",
  collection: "",
  description: "",
  price: "",
  currency: "EUR",
  image_url: "",
  status: "draft",
  featured: false,
  sort_order: "0",
};

export default function AdminProductsPage() {
  const [authorized, setAuthorized] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter((product) =>
      [product.name, product.category, product.collection ?? ""].join(" ").toLowerCase().includes(q)
    );
  }, [products, search]);

  useEffect(() => {
    fetch("/api/admin/auth/session", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          window.location.href = "/admin/login";
          return false;
        }
        return true;
      })
      .then((ok) => {
        if (ok) {
          setAuthorized(true);
          void loadProducts();
        }
      });
  }, []);

  async function loadProducts() {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/products", { cache: "no-store" });
      if (response.status === 401 || response.status === 403) {
        window.location.href = "/admin/login";
        return;
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Nepodarilo sa načítať produkty.");
      setProducts(data.products ?? []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Chyba pri načítaní produktov.");
    } finally {
      setLoading(false);
    }
  }

  function editProduct(product: Product) {
    setEditingId(product.id);
    setForm({
      name: product.name,
      category: product.category,
      collection: product.collection ?? "",
      description: product.description ?? "",
      price: product.price == null ? "" : String(product.price),
      currency: product.currency,
      image_url: product.image_url ?? "",
      status: product.status,
      featured: product.featured,
      sort_order: String(product.sort_order ?? 0),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function saveProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(editingId ? `/api/admin/products/${editingId}` : "/api/admin/products", {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: form.price === "" ? null : Number(form.price),
          sort_order: Number(form.sort_order) || 0,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Produkt sa nepodarilo uložiť.");
      setMessage(editingId ? "Produkt bol upravený." : "Produkt bol vytvorený.");
      resetForm();
      await loadProducts();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Chyba pri ukladaní produktu.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(id: string) {
    if (!window.confirm("Naozaj chcete tento produkt odstrániť?")) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Produkt sa nepodarilo odstrániť.");
      setProducts((current) => current.filter((product) => product.id !== id));
      setMessage("Produkt bol odstránený.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Chyba pri mazaní produktu.");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  if (!authorized) {
    return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">Kontrolujem bezpečnú session…</main>;
  }

  return (
    <main className="min-h-screen bg-[#120817] px-5 py-8 text-[#fffdf9] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-[#c8a96a]/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#c8a96a]">LIDYA Admin · Secure</p>
            <h1 className="mt-2 text-4xl md:text-5xl">Produkty</h1>
            <p className="mt-2 text-sm text-white/45">CRUD správa produktov cez chránené serverové API a Supabase.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">← Dashboard</Link>
            <button onClick={logout} className="rounded-full border border-[#c8a96a]/30 px-4 py-2 text-xs text-[#e8d8b5]">Odhlásiť</button>
          </div>
        </div>

        {message && <div className="mt-5 rounded-xl border border-[#c8a96a]/20 bg-[#c8a96a]/5 px-4 py-3 text-sm text-[#e8d8b5]">{message}</div>}

        <div className="mt-6 grid gap-6 xl:grid-cols-[420px_1fr]">
          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
            <h2 className="text-2xl">{editingId ? "Upraviť produkt" : "Nový produkt"}</h2>
            <form onSubmit={saveProduct} className="mt-5 space-y-3">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Názov produktu" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <div className="grid grid-cols-2 gap-3">
                <input required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Kategória" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
                <input value={form.collection} onChange={(e) => setForm({ ...form, collection: e.target.value })} placeholder="Kolekcia" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              </div>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Popis" rows={4} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <div className="grid grid-cols-[1fr_100px] gap-3">
                <input type="number" step="0.01" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Cena" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
                <input value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })} placeholder="EUR" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              </div>
              <input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="URL obrázka" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <div className="grid grid-cols-2 gap-3">
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as "draft" | "published" })} className="rounded-xl border border-white/10 bg-[#1b0b20] px-4 py-3 outline-none"><option value="draft">Koncept</option><option value="published">Publikované</option></select>
                <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} placeholder="Poradie" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              </div>
              <label className="flex items-center gap-3 text-sm text-white/60"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} /> Odporúčaný produkt</label>
              <div className="flex gap-2 pt-2"><button disabled={loading} className="flex-1 rounded-xl bg-[#c8a96a] px-4 py-3 font-semibold text-[#120817] disabled:opacity-50">{loading ? "Ukladám..." : editingId ? "Uložiť zmeny" : "Pridať produkt"}</button>{editingId && <button type="button" onClick={resetForm} className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/55">Zrušiť</button>}</div>
            </form>
          </section>

          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Inventory</p><h2 className="mt-1 text-2xl">Všetky produkty</h2></div><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Hľadať..." className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm outline-none" /></div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm"><thead className="border-b border-white/10 text-[10px] uppercase tracking-[0.16em] text-white/30"><tr><th className="pb-3 font-normal">Produkt</th><th className="pb-3 font-normal">Kategória</th><th className="pb-3 font-normal">Cena</th><th className="pb-3 font-normal">Stav</th><th className="pb-3 text-right font-normal">Akcie</th></tr></thead><tbody>{filtered.map((product) => <tr key={product.id} className="border-b border-white/5 text-white/65"><td className="py-4"><div className="font-medium text-white/90">{product.name}</div><div className="mt-1 text-xs text-white/30">{product.collection || product.slug}</div></td><td>{product.category}</td><td>{product.price == null ? "—" : `${product.price.toLocaleString("sk-SK")} ${product.currency}`}</td><td>{product.status === "published" ? "Publikované" : "Koncept"}</td><td className="text-right"><button onClick={() => editProduct(product)} className="mr-4 text-[#c8a96a]">Upraviť</button><button onClick={() => void deleteProduct(product.id)} className="text-red-300/70">Zmazať</button></td></tr>)}</tbody></table>
              {!loading && filtered.length === 0 && <p className="py-10 text-center text-sm text-white/30">Žiadne produkty.</p>}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
