"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Subscriber = {
  id: string;
  email: string;
  status: "active" | "unsubscribed" | "blocked";
  source: string;
  locale: string | null;
  consent_at: string;
  created_at: string;
};

export default function NewsletterAdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return subscribers;
    return subscribers.filter((item) => [item.email, item.source, item.locale || "", item.status].join(" ").toLowerCase().includes(query));
  }, [search, subscribers]);

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
          void loadSubscribers();
        }
      });
  }, []);

  async function loadSubscribers() {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/newsletter", { cache: "no-store" });
      if (response.status === 401 || response.status === 403) {
        window.location.href = "/admin/login";
        return;
      }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Nepodarilo sa načítať odberateľov.");
      setSubscribers(data.subscribers || []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Chyba pri načítaní odberateľov.");
    } finally {
      setLoading(false);
    }
  }

  function exportCsv() {
    const rows = [
      ["email", "status", "source", "locale", "consent_at"],
      ...filtered.map((item) => [item.email, item.status, item.source, item.locale || "", item.consent_at]),
    ];
    const csv = rows.map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lidya-private-list.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  if (!authorized) {
    return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">Kontrolujem bezpečnú session…</main>;
  }

  const activeCount = subscribers.filter((item) => item.status === "active").length;

  return (
    <main className="min-h-screen bg-[#120817] px-5 py-8 text-[#fffdf9] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-[#c8a96a]/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[#c8a96a]">The LIDYA Private List</p>
            <h1 className="mt-2 text-4xl md:text-5xl">Newsletter</h1>
            <p className="mt-2 text-sm text-white/45">Odberatelia, zdroj registrácie, jazyk a GDPR consent timestamp.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={exportCsv} disabled={!filtered.length} className="rounded-full border border-[#c8a96a]/30 px-4 py-2 text-xs text-[#e8d8b5] disabled:opacity-40">Export CSV</button>
            <Link href="/admin" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60">← Dashboard</Link>
          </div>
        </div>

        {message && <div className="mt-5 rounded-xl border border-[#c8a96a]/20 bg-[#c8a96a]/5 px-4 py-3 text-sm text-[#e8d8b5]">{message}</div>}

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5"><p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96a]/70">Total</p><p className="mt-3 text-3xl">{subscribers.length}</p></div>
          <div className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5"><p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96a]/70">Active</p><p className="mt-3 text-3xl">{activeCount}</p></div>
          <div className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5"><p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a96a]/70">GDPR</p><p className="mt-3 text-3xl">Logged</p></div>
        </div>

        <section className="mt-6 rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Subscribers</p><h2 className="mt-1 text-2xl">Private List</h2></div><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Hľadať email…" className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm outline-none" /></div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="border-b border-white/10 text-[10px] uppercase tracking-[0.16em] text-white/30"><tr><th className="pb-3 font-normal">Email</th><th className="pb-3 font-normal">Status</th><th className="pb-3 font-normal">Source</th><th className="pb-3 font-normal">Language</th><th className="pb-3 font-normal">Consent</th></tr></thead>
              <tbody>{filtered.map((item) => <tr key={item.id} className="border-b border-white/5 text-white/65"><td className="py-4 font-medium text-white/90">{item.email}</td><td>{item.status}</td><td>{item.source}</td><td>{item.locale || "—"}</td><td>{new Date(item.consent_at).toLocaleString("sk-SK")}</td></tr>)}</tbody>
            </table>
            {!loading && filtered.length === 0 && <p className="py-10 text-center text-sm text-white/30">Žiadni odberatelia.</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
