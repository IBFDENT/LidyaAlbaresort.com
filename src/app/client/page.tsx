"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ClientUser = {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    phone?: string;
    avatar_url?: string;
    preferred_language?: string;
  };
};

type Enquiry = {
  id: string;
  type: "general" | "service" | "appointment";
  status: "new" | "in_progress" | "resolved" | "archived";
  subject: string | null;
  message: string | null;
  selected_services: string[];
  created_at: string;
};

type Favorite = {
  id: string;
  product_id: string;
  created_at: string;
  products: {
    id: string;
    name: string;
    category: string;
    collection: string | null;
    image_url: string | null;
    price: number | null;
    currency: string;
  } | null;
};

const statusLabel: Record<Enquiry["status"], string> = {
  new: "Nové",
  in_progress: "Rieši sa",
  resolved: "Vyriešené",
  archived: "Archív",
};

const statusTone: Record<Enquiry["status"], string> = {
  new: "border-[#d4b16a]/45 bg-[#d4b16a]/10 text-[#ead39f]",
  in_progress: "border-sky-300/20 bg-sky-300/5 text-sky-200/80",
  resolved: "border-emerald-300/20 bg-emerald-300/5 text-emerald-200/80",
  archived: "border-white/10 bg-white/[0.03] text-white/40",
};

const navItems = [
  ["Prehľad", "/client"],
  ["Privátny servis", "/services"],
  ["Rezervácia", "/contact"],
  ["Kolekcie", "/collections"],
  ["Môj profil", "/client/profile"],
] as const;

export default function ClientDashboardPage() {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    const me = await fetch("/api/client/me", { cache: "no-store" });
    if (!me.ok) {
      window.location.href = "/client/login";
      return;
    }

    const response = await fetch("/api/client/dashboard", { cache: "no-store" });
    if (!response.ok) {
      window.location.href = "/client/login";
      return;
    }

    const payload = await response.json();
    setUser(payload.user);
    setEnquiries(payload.enquiries || []);
    setFavorites(payload.favorites || []);
  }

  useEffect(() => {
    loadData().finally(() => setLoading(false));
  }, []);

  const general = useMemo(() => enquiries.filter((item) => item.type === "general"), [enquiries]);
  const service = useMemo(() => enquiries.filter((item) => item.type === "service"), [enquiries]);
  const appointments = useMemo(() => enquiries.filter((item) => item.type === "appointment"), [enquiries]);
  const openCount = enquiries.filter((item) => item.status === "new" || item.status === "in_progress").length;
  const recentActivity = useMemo(() => [...enquiries].sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at)).slice(0, 4), [enquiries]);

  async function logout() {
    await fetch("/api/client/logout", { method: "POST" });
    window.location.href = "/client/login";
  }

  async function removeFavorite(productId: string) {
    const response = await fetch(`/api/client/favorites?productId=${encodeURIComponent(productId)}`, { method: "DELETE" });
    if (response.ok) setFavorites((items) => items.filter((item) => item.product_id !== productId));
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d0611] text-[#d4b16a]">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.55em]">LIDYA</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/25">Private Client Centre</p>
        </div>
      </main>
    );
  }

  if (!user) return null;

  const name = user.user_metadata?.full_name || user.email?.split("@")[0] || "Client";
  const firstName = name.split(" ")[0];
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-[#0d0611] text-[#fffdf9]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_0%,rgba(199,158,86,0.09),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(91,45,92,0.14),transparent_28%)]" />

      <header className="sticky top-0 z-30 border-b border-[#d4b16a]/12 bg-[#0d0611]/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-4 md:px-8 xl:px-10">
          <div className="flex items-center gap-5">
            <Link href="/" className="text-[12px] font-semibold uppercase tracking-[0.48em] text-[#d4b16a]">LIDYA</Link>
            <div className="hidden h-6 w-px bg-white/10 sm:block" />
            <p className="hidden text-[10px] uppercase tracking-[0.24em] text-white/35 sm:block">Private Client Centre</p>
          </div>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map(([label, href]) => (
              <Link key={label} href={href} className={`rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition ${href === "/client" ? "bg-[#d4b16a]/10 text-[#e8d2a0]" : "text-white/40 hover:text-white/75"}`}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/client/profile" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-2 py-2 pr-4 transition hover:border-[#d4b16a]/25">
              {user.user_metadata?.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.user_metadata.avatar_url} alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-[#d4b16a]/25" />
              ) : (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4b16a]/12 text-[10px] font-semibold tracking-[0.08em] text-[#e3c98f]">{initials}</span>
              )}
              <span className="hidden text-xs text-white/55 md:block">{firstName}</span>
            </Link>
            <button onClick={logout} className="rounded-full border border-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-white/35 transition hover:border-[#d4b16a]/25 hover:text-[#e8d2a0]">Odhlásiť</button>
          </div>
        </div>
      </header>

      <div className="relative mx-auto grid max-w-[1500px] gap-8 px-5 py-8 md:px-8 xl:grid-cols-[230px_minmax(0,1fr)] xl:px-10 xl:py-10">
        <aside className="hidden xl:block">
          <div className="sticky top-28 space-y-8">
            <div>
              <p className="text-[9px] uppercase tracking-[0.34em] text-[#d4b16a]/60">Client navigation</p>
              <div className="mt-4 space-y-1">
                {navItems.map(([label, href], index) => (
                  <Link key={label} href={href} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${index === 0 ? "border border-[#d4b16a]/15 bg-[#d4b16a]/7 text-[#f0deb5]" : "text-white/38 hover:bg-white/[0.03] hover:text-white/70"}`}>
                    <span>{label}</span><span className="text-[10px] text-white/20">0{index + 1}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#d4b16a]/14 bg-[#d4b16a]/[0.035] p-5">
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#d4b16a]">Personal Concierge</p>
              <p className="mt-3 text-sm leading-6 text-white/45">Potrebujete osobnú pomoc pri výbere, servise alebo návšteve?</p>
              <Link href="/contact" className="mt-5 inline-flex text-[10px] uppercase tracking-[0.17em] text-[#ead39f]">Kontaktovať LIDYA →</Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <section className="relative overflow-hidden rounded-[2rem] border border-[#d4b16a]/15 bg-[linear-gradient(120deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-7 md:p-10 xl:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d4b16a]/10" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#d4b16a]/10" />
            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#d4b16a]">Welcome back · Private Client</p>
                <h1 className="mt-5 max-w-4xl font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#fffaf1] md:text-6xl">Vitajte, {firstName}.</h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/42">Váš osobný priestor pre LIDYA servis, privátne návštevy, dopyty, uložené produkty a správu klientského profilu.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-[#d4b16a] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#160a19] transition hover:bg-[#dfc17f]">Privátna požiadavka</Link>
                <Link href="/client/profile" className="border border-white/12 px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-white/55 transition hover:border-[#d4b16a]/35 hover:text-[#ead39f]">Spravovať profil</Link>
              </div>
            </div>
          </section>

          <section className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Aktívne", String(openCount), "otvorené požiadavky"],
              ["Servis", String(service.length), "servisné prípady"],
              ["Termíny", String(appointments.length), "privátne návštevy"],
              ["Uložené", String(favorites.length), "obľúbené kúsky"],
            ].map(([label, value, meta]) => (
              <article key={label} className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-[#d4b16a]/18 hover:bg-white/[0.035]">
                <p className="text-[9px] uppercase tracking-[0.24em] text-white/30">{label}</p>
                <div className="mt-5 flex items-end justify-between gap-3"><p className="font-serif text-4xl text-[#e7ce97]">{value}</p><span className="pb-1 text-[10px] text-white/20">→</span></div>
                <p className="mt-2 text-xs text-white/30">{meta}</p>
              </article>
            ))}
          </section>

          <div className="mt-5 grid gap-5 2xl:grid-cols-[1.25fr_0.75fr]">
            <section className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.022] p-6 md:p-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div><p className="text-[9px] uppercase tracking-[0.28em] text-[#d4b16a]">Private services</p><h2 className="mt-2 font-serif text-3xl text-[#fffaf1]">Vaše LIDYA požiadavky</h2></div>
                <Link href="/contact" className="text-[10px] uppercase tracking-[0.16em] text-[#d9bd80]">Nová požiadavka →</Link>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  ["Dopyty", general.length, "Osobné otázky a konzultácie", "/contact"],
                  ["Servis", service.length, "Opravy, údržba a starostlivosť", "/services"],
                  ["Privátne termíny", appointments.length, "Návštevy a individuálne stretnutia", "/contact"],
                ].map(([title, count, description, href]) => (
                  <Link key={String(title)} href={String(href)} className="rounded-2xl border border-white/[0.07] bg-black/10 p-5 transition hover:border-[#d4b16a]/20 hover:bg-[#d4b16a]/[0.025]">
                    <div className="flex items-center justify-between"><p className="text-sm text-white/80">{title}</p><span className="font-serif text-2xl text-[#d8bb7d]">{count}</span></div>
                    <p className="mt-5 text-xs leading-5 text-white/30">{description}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-6">
                <div className="flex items-center justify-between gap-3"><p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Posledná aktivita</p><span className="text-[9px] uppercase tracking-[0.16em] text-white/18">Live from Client Centre</span></div>
                <div className="mt-4 space-y-2">
                  {recentActivity.length ? recentActivity.map((item) => (
                    <article key={item.id} className="flex flex-col gap-3 rounded-xl border border-white/[0.055] bg-black/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0"><p className="truncate text-sm text-white/65">{item.subject || item.selected_services?.[0] || (item.type === "service" ? "Servisná požiadavka" : item.type === "appointment" ? "Privátny termín" : "LIDYA dopyt")}</p><p className="mt-1 text-[10px] text-white/24">{new Date(item.created_at).toLocaleDateString("sk-SK")}</p></div>
                      <span className={`w-fit rounded-full border px-3 py-1 text-[9px] uppercase tracking-[0.14em] ${statusTone[item.status]}`}>{statusLabel[item.status]}</span>
                    </article>
                  )) : (
                    <div className="rounded-xl border border-dashed border-white/[0.08] px-5 py-8 text-center"><p className="text-sm text-white/32">Zatiaľ tu nie je žiadna aktivita.</p><p className="mt-2 text-xs text-white/20">Vaše budúce požiadavky a servisné prípady sa zobrazia práve tu.</p></div>
                  )}
                </div>
              </div>
            </section>

            <div className="space-y-5">
              <section className="rounded-[1.5rem] border border-[#d4b16a]/15 bg-[linear-gradient(145deg,rgba(212,177,106,0.08),rgba(255,255,255,0.018))] p-6 md:p-7">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4b16a]">LIDYA Concierge</p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#fff7e8]">Personal service should feel personal.</h2>
                <p className="mt-4 text-sm leading-6 text-white/38">Pre šperk, hodinky, servis alebo privátnu návštevu môžete kontaktovať tím LIDYA priamo cez váš klientsky priestor.</p>
                <Link href="/contact" className="mt-7 inline-flex border-b border-[#d4b16a]/35 pb-1 text-[10px] uppercase tracking-[0.18em] text-[#ead39f]">Kontaktovať concierge →</Link>
              </section>

              <section className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.022] p-6 md:p-7">
                <div className="flex items-center justify-between"><div><p className="text-[9px] uppercase tracking-[0.28em] text-[#d4b16a]">Saved selection</p><h2 className="mt-2 font-serif text-2xl text-[#fffaf1]">Obľúbené</h2></div><Link href="/collections" className="text-[10px] text-[#d8bd83]">Kolekcie →</Link></div>
                <div className="mt-5 space-y-3">
                  {favorites.length ? favorites.slice(0, 3).map((favorite) => (
                    <article key={favorite.id} className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-black/10 p-4">
                      <div className="flex min-w-0 items-center gap-3">
                        {favorite.products?.image_url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={favorite.products.image_url} alt="" className="h-11 w-11 rounded-lg object-cover" />
                        ) : <div className="h-11 w-11 rounded-lg border border-[#d4b16a]/10 bg-[#d4b16a]/5" />}
                        <div className="min-w-0"><p className="truncate text-sm text-white/68">{favorite.products?.name || "LIDYA selection"}</p><p className="mt-1 truncate text-[10px] text-white/25">{favorite.products?.collection || favorite.products?.category || "Private selection"}</p></div>
                      </div>
                      <button onClick={() => removeFavorite(favorite.product_id)} className="text-[9px] uppercase tracking-[0.12em] text-white/25 transition hover:text-[#d4b16a]">Odstrániť</button>
                    </article>
                  )) : <p className="rounded-xl border border-dashed border-white/[0.08] px-4 py-6 text-center text-xs text-white/28">Zatiaľ nemáte uložený produkt.</p>}
                </div>
              </section>
            </div>
          </div>

          <section className="mt-5 grid gap-3 md:grid-cols-3">
            <Link href="/client/profile" className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#d4b16a]/20"><p className="text-[9px] uppercase tracking-[0.24em] text-[#d4b16a]">Account</p><p className="mt-3 text-lg text-white/75">Môj profil & bezpečnosť</p><p className="mt-2 text-xs leading-5 text-white/28">Kontaktné údaje, profilová fotografia, email, heslo a zabezpečenie účtu.</p></Link>
            <Link href="/services" className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#d4b16a]/20"><p className="text-[9px] uppercase tracking-[0.24em] text-[#d4b16a]">Care</p><p className="mt-3 text-lg text-white/75">Starostlivosť & servis</p><p className="mt-2 text-xs leading-5 text-white/28">Profesionálna údržba šperkov a hodiniek, servisné požiadavky a individuálny prístup.</p></Link>
            <Link href="/contact" className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#d4b16a]/20"><p className="text-[9px] uppercase tracking-[0.24em] text-[#d4b16a]">Visit</p><p className="mt-3 text-lg text-white/75">Privátna návšteva</p><p className="mt-2 text-xs leading-5 text-white/28">Rezervujte si osobný termín v LIDYA Jewellery Alba Resort.</p></Link>
          </section>

          <footer className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] py-8 text-[9px] uppercase tracking-[0.18em] text-white/18 md:flex-row md:items-center md:justify-between"><span>LIDYA Jewellery · Alba Resort</span><span>Private service since 1989</span></footer>
        </div>
      </div>
    </main>
  );
}
