"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Collection = {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string | null;
  hero_image_url: string | null;
  status: "draft" | "published";
  featured: boolean;
  sort_order: number;
};

type FormState = {
  name: string;
  type: string;
  description: string;
  hero_image_url: string;
  status: "draft" | "published";
  featured: boolean;
  sort_order: string;
};

const emptyForm: FormState = { name: "", type: "jewellery", description: "", hero_image_url: "", status: "draft", featured: false, sort_order: "0" };

export default function AdminCollectionsPage() {
  const [authorized, setAuthorized] = useState(false);
  const [items, setItems] = useState<Collection[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => `${item.name} ${item.type}`.toLowerCase().includes(q));
  }, [items, search]);

  useEffect(() => {
    fetch("/api/admin/auth/session", { cache: "no-store" }).then(async (response) => {
      if (!response.ok) { window.location.href = "/admin/login"; return false; }
      return true;
    }).then((ok) => { if (ok) { setAuthorized(true); void loadItems(); } });
  }, []);

  async function loadItems() {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/collections", { cache: "no-store" });
      if (response.status === 401 || response.status === 403) { window.location.href = "/admin/login"; return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Nepodarilo sa načítať kolekcie.");
      setItems(data.collections ?? []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Chyba pri načítaní kolekcií.");
    } finally { setLoading(false); }
  }

  function editItem(item: Collection) {
    setEditingId(item.id);
    setForm({ name: item.name, type: item.type, description: item.description ?? "", hero_image_url: item.hero_image_url ?? "", status: item.status, featured: item.featured, sort_order: String(item.sort_order ?? 0) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() { setEditingId(null); setForm(emptyForm); }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setMessage("");
    try {
      const response = await fetch(editingId ? `/api/admin/collections/${editingId}` : "/api/admin/collections", {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sort_order: Number(form.sort_order) || 0 }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Kolekciu sa nepodarilo uložiť.");
      setMessage(editingId ? "Kolekcia bola upravená." : "Kolekcia bola vytvorená.");
      resetForm(); await loadItems();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Chyba pri ukladaní kolekcie."); }
    finally { setLoading(false); }
  }

  async function remove(id: string) {
    if (!window.confirm("Naozaj chcete túto kolekciu odstrániť?")) return;
    const response = await fetch(`/api/admin/collections/${id}`, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) { setMessage(data.error || "Kolekciu sa nepodarilo odstrániť."); return; }
    setItems((current) => current.filter((item) => item.id !== id));
    setMessage("Kolekcia bola odstránená.");
  }

  if (!authorized) return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">Kontrolujem bezpečnú session…</main>;

  return (
    <main className="min-h-screen bg-[#120817] px-5 py-8 text-[#fffdf9] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-[#c8a96a]/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs uppercase tracking-[0.34em] text-[#c8a96a]">LIDYA Admin · Secure</p><h1 className="mt-2 text-4xl md:text-5xl">Kolekcie</h1><p className="mt-2 text-sm text-white/45">Správa kolekcií, hero vizuálov, publikovania a poradia.</p></div>
          <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">← Dashboard</Link>
        </div>

        {message && <div className="mt-5 rounded-xl border border-[#c8a96a]/20 bg-[#c8a96a]/5 px-4 py-3 text-sm text-[#e8d8b5]">{message}</div>}

        <div className="mt-6 grid gap-6 xl:grid-cols-[420px_1fr]">
          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
            <h2 className="text-2xl">{editingId ? "Upraviť kolekciu" : "Nová kolekcia"}</h2>
            <form onSubmit={save} className="mt-5 space-y-3">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Názov kolekcie" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full rounded-xl border border-white/10 bg-[#1b0b20] px-4 py-3 outline-none"><option value="jewellery">Jewellery</option><option value="watches">Watches</option><option value="investment">Investment</option><option value="bespoke">Bespoke</option></select>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Popis kolekcie" rows={4} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <input value={form.hero_image_url} onChange={(e) => setForm({ ...form, hero_image_url: e.target.value })} placeholder="Hero image URL" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <div className="grid grid-cols-2 gap-3"><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as "draft" | "published" })} className="rounded-xl border border-white/10 bg-[#1b0b20] px-4 py-3 outline-none"><option value="draft">Koncept</option><option value="published">Publikované</option></select><input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} placeholder="Poradie" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" /></div>
              <label className="flex items-center gap-3 text-sm text-white/60"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} /> Odporúčaná kolekcia</label>
              <div className="flex gap-2 pt-2"><button disabled={loading} className="flex-1 rounded-xl bg-[#c8a96a] px-4 py-3 font-semibold text-[#120817] disabled:opacity-50">{loading ? "Ukladám..." : editingId ? "Uložiť zmeny" : "Pridať kolekciu"}</button>{editingId && <button type="button" onClick={resetForm} className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/55">Zrušiť</button>}</div>
            </form>
          </section>

          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Collections</p><h2 className="mt-1 text-2xl">Všetky kolekcie</h2></div><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Hľadať..." className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm outline-none" /></div>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="border-b border-white/10 text-[10px] uppercase tracking-[0.16em] text-white/30"><tr><th className="pb-3 font-normal">Kolekcia</th><th className="pb-3 font-normal">Typ</th><th className="pb-3 font-normal">Stav</th><th className="pb-3 font-normal">Poradie</th><th className="pb-3 text-right font-normal">Akcie</th></tr></thead><tbody>{filtered.map((item) => <tr key={item.id} className="border-b border-white/5 text-white/65"><td className="py-4"><div className="font-medium text-white/90">{item.name}</div><div className="mt-1 text-xs text-white/30">{item.slug}</div></td><td>{item.type}</td><td>{item.status === "published" ? "Publikované" : "Koncept"}</td><td>{item.sort_order}</td><td className="text-right"><button onClick={() => editItem(item)} className="mr-4 text-[#c8a96a]">Upraviť</button><button onClick={() => void remove(item.id)} className="text-red-300/70">Zmazať</button></td></tr>)}</tbody></table>{!loading && filtered.length === 0 && <p className="py-10 text-center text-sm text-white/30">Žiadne kolekcie.</p>}</div>
          </section>
        </div>
      </div>
    </main>
  );
}
