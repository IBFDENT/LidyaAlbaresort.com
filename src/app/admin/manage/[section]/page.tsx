"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

type Entry = {
  id: string;
  section: string;
  title: string;
  slug: string;
  subtitle: string | null;
  body: string | null;
  status: "draft" | "published" | "active" | "archived";
  metadata: Record<string, unknown>;
  sort_order: number;
};

type FormState = {
  title: string;
  slug: string;
  subtitle: string;
  body: string;
  status: Entry["status"];
  sort_order: string;
  meta1: string;
  meta2: string;
};

const config: Record<string, { title: string; eyebrow: string; subtitle: string; meta1: string; meta2: string }> = {
  investment: { title: "Investície", eyebrow: "Investment management", subtitle: "Správa investičného zlata, diamantov, konzultácií a informačných blokov.", meta1: "Typ / kategória", meta2: "Cena / poznámka" },
  services: { title: "Servis", eyebrow: "Service management", subtitle: "Správa servisných služieb, opráv, čistenia, hodiniek a bespoke požiadaviek.", meta1: "Typ služby", meta2: "Kontakt / SLA" },
  travel: { title: "Hotel & transfer", eyebrow: "Travel management", subtitle: "Hotely Alba, transfery, odkazy, kontakty a cestovné informácie.", meta1: "URL / lokalita", meta2: "Kontakt / poznámka" },
  content: { title: "Obsah webu", eyebrow: "Content management", subtitle: "Textové bloky a obsahové záznamy pripravené pre ďalšie napojenie na verejný web.", meta1: "Stránka / sekcia", meta2: "Jazyk / varianta" },
  media: { title: "Médiá", eyebrow: "Media management", subtitle: "Evidencia obrázkov, videí a mediálnych assetov webu.", meta1: "URL súboru", meta2: "Alt text / poznámka" },
  languages: { title: "Jazyky", eyebrow: "Language management", subtitle: "Správa jazykových záznamov, stavov a prekladových úloh pre 15 jazykov.", meta1: "Kód jazyka", meta2: "Stav prekladu" },
  seo: { title: "SEO", eyebrow: "Search management", subtitle: "SEO záznamy, titles, descriptions, kľúčové slová a indexačné poznámky.", meta1: "SEO title / URL", meta2: "Kľúčové slová" },
  messages: { title: "Dopyty", eyebrow: "Enquiry management", subtitle: "Evidencia klientskych dopytov, servisných požiadaviek a interných poznámok.", meta1: "Kontakt / email", meta2: "Typ dopytu" },
  settings: { title: "Nastavenia", eyebrow: "System settings", subtitle: "Prevádzkové nastavenia, kontakty, prepínače a interné konfiguračné záznamy.", meta1: "Kľúč nastavenia", meta2: "Hodnota / poznámka" },
};

const emptyForm: FormState = { title: "", slug: "", subtitle: "", body: "", status: "draft", sort_order: "0", meta1: "", meta2: "" };

export default function AdminManagePage() {
  const params = useParams<{ section: string }>();
  const section = String(params.section || "");
  const page = config[section];
  const [authorized, setAuthorized] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter((entry) => [entry.title, entry.subtitle || "", entry.body || "", entry.slug].join(" ").toLowerCase().includes(q));
  }, [entries, search]);

  useEffect(() => {
    if (!page) return;
    fetch("/api/admin/auth/session", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) { window.location.href = "/admin/login"; return false; }
        return true;
      })
      .then((ok) => { if (ok) { setAuthorized(true); void loadEntries(); } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  async function loadEntries() {
    setLoading(true); setMessage("");
    try {
      const response = await fetch(`/api/admin/manage/${section}`, { cache: "no-store" });
      if (response.status === 401 || response.status === 403) { window.location.href = "/admin/login"; return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Nepodarilo sa načítať záznamy.");
      setEntries(data.entries || []);
    } catch (error) { setMessage(error instanceof Error ? error.message : "Chyba pri načítaní."); }
    finally { setLoading(false); }
  }

  function edit(entry: Entry) {
    setEditingId(entry.id);
    setForm({
      title: entry.title,
      slug: entry.slug,
      subtitle: entry.subtitle || "",
      body: entry.body || "",
      status: entry.status,
      sort_order: String(entry.sort_order || 0),
      meta1: String(entry.metadata?.meta1 || ""),
      meta2: String(entry.metadata?.meta2 || ""),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() { setEditingId(null); setForm(emptyForm); }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setMessage("");
    try {
      const response = await fetch(editingId ? `/api/admin/manage/${section}/${editingId}` : `/api/admin/manage/${section}`, {
        method: editingId ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sort_order: Number(form.sort_order) || 0, metadata: { meta1: form.meta1, meta2: form.meta2 } }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Záznam sa nepodarilo uložiť.");
      setMessage(editingId ? "Záznam bol upravený." : "Záznam bol vytvorený.");
      reset(); await loadEntries();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Chyba pri ukladaní."); }
    finally { setLoading(false); }
  }

  async function remove(id: string) {
    if (!window.confirm("Naozaj chcete tento záznam odstrániť?")) return;
    const response = await fetch(`/api/admin/manage/${section}/${id}`, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) { setMessage(data.error || "Záznam sa nepodarilo odstrániť."); return; }
    setEntries((current) => current.filter((entry) => entry.id !== id));
    setMessage("Záznam bol odstránený.");
  }

  if (!page) return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">Neznáma administračná sekcia.</main>;
  if (!authorized) return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">Kontrolujem bezpečnú session…</main>;

  return (
    <main className="min-h-screen bg-[#120817] px-5 py-8 text-[#fffdf9] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-[#c8a96a]/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs uppercase tracking-[0.34em] text-[#c8a96a]">{page.eyebrow}</p><h1 className="mt-2 text-4xl md:text-5xl">{page.title}</h1><p className="mt-2 max-w-3xl text-sm text-white/45">{page.subtitle}</p></div>
          <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">← Dashboard</Link>
        </div>

        {message && <div className="mt-5 rounded-xl border border-[#c8a96a]/20 bg-[#c8a96a]/5 px-4 py-3 text-sm text-[#e8d8b5]">{message}</div>}

        <div className="mt-6 grid gap-6 xl:grid-cols-[420px_1fr]">
          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
            <h2 className="text-2xl">{editingId ? "Upraviť záznam" : "Nový záznam"}</h2>
            <form onSubmit={save} className="mt-5 space-y-3">
              <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Názov" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="Slug (voliteľné)" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} placeholder="Podnadpis / stručná informácia" className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} placeholder="Obsah / poznámka" rows={6} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <input value={form.meta1} onChange={(e) => setForm({ ...form, meta1: e.target.value })} placeholder={page.meta1} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <input value={form.meta2} onChange={(e) => setForm({ ...form, meta2: e.target.value })} placeholder={page.meta2} className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              <div className="grid grid-cols-2 gap-3">
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Entry["status"] })} className="rounded-xl border border-white/10 bg-[#1b0b20] px-4 py-3 outline-none"><option value="draft">Koncept</option><option value="published">Publikované</option><option value="active">Aktívne</option><option value="archived">Archivované</option></select>
                <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} placeholder="Poradie" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none" />
              </div>
              <div className="flex gap-2 pt-2"><button disabled={loading} className="flex-1 rounded-xl bg-[#c8a96a] px-4 py-3 font-semibold text-[#120817] disabled:opacity-50">{loading ? "Ukladám..." : editingId ? "Uložiť zmeny" : "Pridať záznam"}</button>{editingId && <button type="button" onClick={reset} className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/55">Zrušiť</button>}</div>
            </form>
          </section>

          <section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Database</p><h2 className="mt-1 text-2xl">Záznamy</h2></div><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Hľadať..." className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm outline-none" /></div>
            <div className="mt-5 space-y-3">
              {filtered.map((entry) => <article key={entry.id} className="rounded-xl border border-white/8 bg-black/15 p-4"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><div className="flex items-center gap-2"><h3 className="text-base text-white/90">{entry.title}</h3><span className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-white/35">{entry.status}</span></div>{entry.subtitle && <p className="mt-2 text-xs text-white/45">{entry.subtitle}</p>}{entry.body && <p className="mt-2 line-clamp-3 text-xs leading-5 text-white/30">{entry.body}</p>}<p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-[#c8a96a]/60">{String(entry.metadata?.meta1 || entry.slug)}</p></div><div className="shrink-0"><button onClick={() => edit(entry)} className="mr-4 text-xs text-[#c8a96a]">Upraviť</button><button onClick={() => void remove(entry.id)} className="text-xs text-red-300/70">Zmazať</button></div></div></article>)}
              {!loading && filtered.length === 0 && <p className="py-10 text-center text-sm text-white/30">Žiadne záznamy.</p>}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
