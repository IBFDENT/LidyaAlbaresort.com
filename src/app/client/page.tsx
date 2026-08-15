"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ClientUser = { id: string; email?: string; user_metadata?: { full_name?: string; phone?: string } };
type Enquiry = { id: string; type: "general" | "service" | "appointment"; status: "new" | "in_progress" | "resolved" | "archived"; subject: string | null; message: string | null; selected_services: string[]; created_at: string };
type Favorite = { id: string; product_id: string; created_at: string; products: { id: string; name: string; category: string; collection: string | null; image_url: string | null; price: number | null; currency: string } | null };

const statusLabel: Record<Enquiry["status"], string> = { new: "Nové", in_progress: "Rieši sa", resolved: "Vyriešené", archived: "Archív" };

export default function ClientDashboardPage() {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [profileMessage, setProfileMessage] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);

  async function loadData() {
    const me = await fetch("/api/client/me", { cache: "no-store" });
    if (!me.ok) { window.location.href = "/client/login"; return; }
    const response = await fetch("/api/client/dashboard", { cache: "no-store" });
    if (!response.ok) { window.location.href = "/client/login"; return; }
    const payload = await response.json();
    setUser(payload.user);
    setEnquiries(payload.enquiries || []);
    setFavorites(payload.favorites || []);
    setFullName(payload.user?.user_metadata?.full_name || "");
    setPhone(payload.user?.user_metadata?.phone || "");
  }

  useEffect(() => { loadData().finally(() => setLoading(false)); }, []);

  const general = useMemo(() => enquiries.filter((item) => item.type === "general"), [enquiries]);
  const service = useMemo(() => enquiries.filter((item) => item.type === "service"), [enquiries]);
  const appointments = useMemo(() => enquiries.filter((item) => item.type === "appointment"), [enquiries]);
  const openCount = enquiries.filter((item) => item.status === "new" || item.status === "in_progress").length;

  async function logout() { await fetch("/api/client/logout", { method: "POST" }); window.location.href = "/client/login"; }

  async function saveProfile() {
    setSavingProfile(true); setProfileMessage("");
    try {
      const response = await fetch("/api/client/profile", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fullName, phone }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Profil sa nepodarilo uložiť.");
      setUser(payload.user); setProfileMessage("Profil bol uložený.");
    } catch (error) { setProfileMessage(error instanceof Error ? error.message : "Profil sa nepodarilo uložiť."); }
    finally { setSavingProfile(false); }
  }

  async function removeFavorite(productId: string) {
    const response = await fetch(`/api/client/favorites?productId=${encodeURIComponent(productId)}`, { method: "DELETE" });
    if (response.ok) setFavorites((items) => items.filter((item) => item.product_id !== productId));
  }

  if (loading) return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">LIDYA</main>;
  if (!user) return null;
  const name = user.user_metadata?.full_name || user.email?.split("@")[0] || "Client";

  const renderEnquiries = (items: Enquiry[], empty: string) => items.length ? (
    <div className="space-y-3">{items.map((item) => <article key={item.id} className="rounded-xl border border-white/8 bg-black/15 p-4"><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-white/80">{item.subject || item.selected_services?.[0] || "LIDYA request"}</p><span className="rounded-full border border-[#c8a96a]/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#c8a96a]">{statusLabel[item.status]}</span></div><p className="mt-2 line-clamp-2 text-xs leading-5 text-white/35">{item.message || "—"}</p><p className="mt-3 text-[10px] text-white/25">{new Date(item.created_at).toLocaleDateString()}</p></article>)}</div>
  ) : <p className="text-sm text-white/35">{empty}</p>;

  return (
    <main className="min-h-screen bg-[#120817] text-[#fffdf9]">
      <header className="border-b border-[#c8a96a]/15 bg-black/15 px-5 py-5 md:px-10"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.4em] text-[#c8a96a]">LIDYA Jewellery</p><p className="mt-1 text-sm text-white/35">Private Client Area</p></div><div className="flex items-center gap-2"><Link href="/" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Späť na web</Link><button onClick={logout} className="rounded-full border border-[#c8a96a]/30 px-4 py-2 text-xs text-[#e8d8b5]">Odhlásiť</button></div></div></header>
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        <section className="rounded-[2rem] border border-[#c8a96a]/18 bg-white/[0.035] p-7 md:p-10"><p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a96a]">Welcome back</p><h1 className="mt-3 text-4xl md:text-5xl">Vitajte, {name}.</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-white/45">Tu vidíte svoje reálne dopyty, servisné požiadavky, privátne termíny a uložené produkty. Stav požiadaviek sa aktualizuje podľa práce LIDYA tímu v administrácii.</p></section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[ ["Moje dopyty", `${general.length} dopytov`, `${openCount} otvorených celkovo`], ["Servis", `${service.length} požiadaviek`, service.some(i=>i.status==="new"||i.status==="in_progress")?"Aktívny servis":"Žiadny aktívny servis"], ["Rezervácie", `${appointments.length} termínov`, appointments.some(i=>i.status==="new"||i.status==="in_progress")?"Čaká na potvrdenie":"Bez otvorených termínov"], ["Obľúbené", `${favorites.length} položiek`, "Uložené produkty"] ].map(([title,meta,sub]) => <article key={title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"><p className="text-lg text-white/90">{title}</p><p className="mt-4 text-2xl text-[#e8d8b5]">{meta}</p><p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#c8a96a]/70">{sub}</p></article>)}
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Enquiries</p><h2 className="mt-2 text-2xl">Moje dopyty</h2></div><Link href="/contact" className="text-xs text-[#e8d8b5]">Nový dopyt →</Link></div><div className="mt-5">{renderEnquiries(general,"Zatiaľ nemáte žiadny všeobecný dopyt.")}</div></section>
          <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Service</p><h2 className="mt-2 text-2xl">Servis</h2></div><Link href="/services" className="text-xs text-[#e8d8b5]">Nový servis →</Link></div><div className="mt-5">{renderEnquiries(service,"Zatiaľ nemáte servisnú požiadavku.")}</div></section>
          <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Appointments</p><h2 className="mt-2 text-2xl">Rezervácie a termíny</h2></div><Link href="/contact" className="text-xs text-[#e8d8b5]">Požiadať o termín →</Link></div><div className="mt-5">{renderEnquiries(appointments,"Zatiaľ nemáte žiadnu požiadavku na privátny termín.")}</div></section>
          <section className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Saved</p><h2 className="mt-2 text-2xl">Obľúbené</h2></div><Link href="/collections" className="text-xs text-[#e8d8b5]">Prezerať kolekcie →</Link></div><div className="mt-5 space-y-3">{favorites.length ? favorites.map((favorite)=><article key={favorite.id} className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-black/15 p-4"><div><p className="text-sm text-white/80">{favorite.products?.name || "Produkt"}</p><p className="mt-1 text-xs text-white/35">{favorite.products?.collection || favorite.products?.category || "LIDYA"}{favorite.products?.price != null ? ` · ${favorite.products.price.toLocaleString()} ${favorite.products.currency}` : ""}</p></div><button onClick={()=>removeFavorite(favorite.product_id)} className="text-[10px] uppercase tracking-[0.14em] text-white/35 hover:text-[#c8a96a]">Odstrániť</button></article>) : <p className="text-sm text-white/35">Zatiaľ nemáte uložený produkt.</p>}</div></section>
        </div>

        <section className="mt-6 rounded-2xl border border-[#c8a96a]/15 bg-[#c8a96a]/5 p-6"><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Profil</p><div className="mt-5 grid gap-4 md:grid-cols-3"><label className="text-xs text-white/35">Meno<input value={fullName} onChange={e=>setFullName(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none focus:border-[#c8a96a]/60" /></label><label className="text-xs text-white/35">Telefón<input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none focus:border-[#c8a96a]/60" /></label><label className="text-xs text-white/35">Email<input disabled value={user.email || ""} className="mt-2 w-full rounded-xl border border-white/5 bg-black/10 px-4 py-3 text-sm text-white/45" /></label></div><div className="mt-5 flex items-center gap-4"><button disabled={savingProfile} onClick={saveProfile} className="bg-[#c8a96a] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#120817] disabled:opacity-50">{savingProfile?"Ukladám…":"Uložiť profil"}</button>{profileMessage && <p className="text-xs text-[#e8d8b5]">{profileMessage}</p>}</div></section>
      </div>
    </main>
  );
}
