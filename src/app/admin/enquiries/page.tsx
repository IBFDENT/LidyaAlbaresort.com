"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Enquiry = {
  id: string;
  type: "general" | "service" | "appointment";
  status: "new" | "in_progress" | "resolved" | "archived";
  name: string;
  email: string;
  phone: string | null;
  locale: string | null;
  subject: string | null;
  message: string | null;
  preferred_contact: string | null;
  selected_services: string[];
  source: string;
  confirmation_email_sent: boolean;
  confirmation_email_error: string | null;
  created_at: string;
};

const typeLabels = {
  general: "Všeobecný dopyt",
  service: "Servis",
  appointment: "Privátny termín",
};

const statusLabels = {
  new: "Nové",
  in_progress: "Rieši sa",
  resolved: "Vyriešené",
  archived: "Archív",
};

export default function AdminEnquiriesPage() {
  const [items, setItems] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");

  async function load() {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/enquiries", { cache: "no-store" });
      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Nepodarilo sa načítať dopyty.");
      setItems(data.enquiries || []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Chyba pri načítaní.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((item) => {
      if (type !== "all" && item.type !== type) return false;
      if (status !== "all" && item.status !== status) return false;
      if (!q) return true;
      return [item.name, item.email, item.phone || "", item.subject || "", item.message || "", ...(item.selected_services || [])]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [items, search, type, status]);

  const stats = useMemo(() => ({
    all: items.length,
    new: items.filter((item) => item.status === "new").length,
    service: items.filter((item) => item.type === "service").length,
    appointment: items.filter((item) => item.type === "appointment").length,
  }), [items]);

  async function changeStatus(id: string, nextStatus: Enquiry["status"]) {
    const response = await fetch(`/api/admin/enquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error || "Stav sa nepodarilo zmeniť.");
      return;
    }
    setItems((current) => current.map((item) => item.id === id ? { ...item, status: nextStatus } : item));
  }

  async function remove(id: string) {
    if (!window.confirm("Naozaj chcete dopyt odstrániť?")) return;
    const response = await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json();
      setMessage(data.error || "Dopyt sa nepodarilo odstrániť.");
      return;
    }
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <main className="min-h-screen bg-[#0d0710] px-5 py-8 text-[#fffdf9] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-[#c8a96a]/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#c8a96a]">Client relations</p>
            <h1 className="mt-2 text-4xl md:text-5xl">Dopyty & požiadavky</h1>
            <p className="mt-2 max-w-3xl text-sm text-white/45">Servisné požiadavky, privátne termíny a všeobecné dopyty z verejného webu.</p>
          </div>
          <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">← Dashboard</Link>
        </div>

        {message && <div className="mt-5 rounded-xl border border-red-300/20 bg-red-300/5 px-4 py-3 text-sm text-red-100/80">{message}</div>}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Všetky", stats.all],
            ["Nové", stats.new],
            ["Servis", stats.service],
            ["Privátne termíny", stats.appointment],
          ].map(([label, value]) => (
            <div key={String(label)} className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8a96a]/70">{label}</p>
              <p className="mt-3 text-3xl">{value}</p>
            </div>
          ))}
        </div>

        <section className="mt-6 rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-6">
          <div className="grid gap-3 md:grid-cols-[1fr_190px_190px]">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Hľadať meno, email, správu, službu..." className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none" />
            <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-xl border border-white/10 bg-[#1b0b20] px-4 py-3 text-sm outline-none">
              <option value="all">Všetky typy</option>
              <option value="general">Všeobecný dopyt</option>
              <option value="service">Servis</option>
              <option value="appointment">Privátny termín</option>
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-xl border border-white/10 bg-[#1b0b20] px-4 py-3 text-sm outline-none">
              <option value="all">Všetky stavy</option>
              <option value="new">Nové</option>
              <option value="in_progress">Rieši sa</option>
              <option value="resolved">Vyriešené</option>
              <option value="archived">Archív</option>
            </select>
          </div>

          <div className="mt-5 space-y-4">
            {filtered.map((item) => (
              <article key={item.id} className="rounded-xl border border-white/8 bg-black/15 p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg text-white/90">{item.name}</h2>
                      <span className="rounded-full border border-[#c8a96a]/25 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-[#c8a96a]">{typeLabels[item.type]}</span>
                      <span className="rounded-full border border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-white/40">{statusLabels[item.status]}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/45">
                      <a href={`mailto:${item.email}`} className="hover:text-[#c8a96a]">{item.email}</a>
                      {item.phone && <a href={`tel:${item.phone}`} className="hover:text-[#c8a96a]">{item.phone}</a>}
                      <span>{new Date(item.created_at).toLocaleString("sk-SK")}</span>
                      <span>Ref. {item.id.slice(0, 8).toUpperCase()}</span>
                    </div>
                    {item.subject && <p className="mt-4 text-sm text-white/70"><strong>Predmet:</strong> {item.subject}</p>}
                    {item.message && <p className="mt-3 whitespace-pre-line text-sm leading-6 text-white/50">{item.message}</p>}
                    {item.selected_services?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.selected_services.map((service) => <span key={service} className="rounded-full bg-white/[0.05] px-3 py-1 text-[10px] text-white/50">{service}</span>)}
                      </div>
                    )}
                    <p className={`mt-4 text-[10px] uppercase tracking-[0.15em] ${item.confirmation_email_sent ? "text-emerald-300/70" : "text-amber-300/70"}`}>
                      {item.confirmation_email_sent ? "Potvrdzujúci email odoslaný" : `Email neodoslaný${item.confirmation_email_error ? ` · ${item.confirmation_email_error}` : ""}`}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
                    <select value={item.status} onChange={(e) => void changeStatus(item.id, e.target.value as Enquiry["status"])} className="rounded-lg border border-white/10 bg-[#1b0b20] px-3 py-2 text-xs outline-none">
                      <option value="new">Nové</option>
                      <option value="in_progress">Rieši sa</option>
                      <option value="resolved">Vyriešené</option>
                      <option value="archived">Archív</option>
                    </select>
                    <button onClick={() => void remove(item.id)} className="rounded-lg border border-red-300/15 px-3 py-2 text-xs text-red-300/60 hover:text-red-200">Zmazať</button>
                  </div>
                </div>
              </article>
            ))}
            {!loading && filtered.length === 0 && <p className="py-12 text-center text-sm text-white/30">Žiadne dopyty.</p>}
            {loading && <p className="py-12 text-center text-sm text-white/30">Načítavam dopyty…</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
