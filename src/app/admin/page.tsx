"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type AdminUser = { email?: string; name?: string | null; role?: "admin" | "staff" };
type NavItem = { id: string; label: string; icon: string; href?: string };

const navItems: NavItem[] = [
  { id: "overview", label: "Prehľad", icon: "◈" },
  { id: "jewellery", label: "Šperky", icon: "◇", href: "/admin/products?view=jewellery" },
  { id: "watches", label: "Hodinky", icon: "◉", href: "/admin/products?view=watches" },
  { id: "collections", label: "Kolekcie", icon: "✦", href: "/admin/collections" },
  { id: "investment", label: "Investície", icon: "◆", href: "/admin/manage/investment" },
  { id: "services", label: "Servis", icon: "⌁", href: "/admin/manage/services" },
  { id: "travel", label: "Hotel & transfer", icon: "↗", href: "/admin/manage/travel" },
  { id: "content", label: "Obsah webu", icon: "▤", href: "/admin/manage/content" },
  { id: "media", label: "Médiá", icon: "▧", href: "/admin/media" },
  { id: "languages", label: "Jazyky", icon: "◎", href: "/admin/manage/languages" },
  { id: "seo", label: "SEO", icon: "⌕", href: "/admin/manage/seo" },
  { id: "messages", label: "Dopyty", icon: "✉", href: "/admin/enquiries" },
  { id: "newsletter", label: "Newsletter", icon: "✧", href: "/admin/newsletter" },
  { id: "settings", label: "Nastavenia", icon: "⚙", href: "/admin/manage/settings" },
];

const categoryCards = [
  ["Jewellery", "Prstene, náhrdelníky, náramky, náušnice, perly, svadobné a brilianty", "Produkty", "/admin/products?view=jewellery"],
  ["Watches", "Men, Women, Sport, Children, Gold, Brilliants, Diamonds", "Produkty", "/admin/products?view=watches"],
  ["Investment", "Investičné zlato a certifikované investičné diamanty", "CMS", "/admin/manage/investment"],
  ["Private List", "Newsletter subscribers, consent records and export", "Subscribers", "/admin/newsletter"],
];

function StatCard({ label, value, note }: { label: string; value: string; note: string }) { return <div className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5"><p className="text-[10px] uppercase tracking-[0.22em] text-[#c8a96a]/70">{label}</p><p className="mt-3 text-3xl font-medium text-[#fffdf9]">{value}</p><p className="mt-2 text-xs text-white/35">{note}</p></div>; }

export default function AdminPage() {
  const [user,setUser]=useState<AdminUser|null>(null); const [loading,setLoading]=useState(true); const [active,setActive]=useState("overview"); const [mobileNav,setMobileNav]=useState(false); const [search,setSearch]=useState("");
  useEffect(()=>{fetch("/api/admin/auth/session",{cache:"no-store"}).then(async r=>{if(!r.ok){location.href="/admin/login";return null;}return r.json();}).then(p=>{if(p?.authenticated)setUser(p.user);}).finally(()=>setLoading(false));},[]);
  const activeLabel=useMemo(()=>navItems.find(i=>i.id===active)?.label??"Prehľad",[active]); async function logout(){await fetch("/api/admin/auth/logout",{method:"POST"});location.href="/admin/login";}
  if(loading||!user)return <main className="flex min-h-screen items-center justify-center bg-[#0d0710] text-[#c8a96a]"><div className="text-center"><Image src="/images/lidya-logo.png" alt="LIDYA" width={260} height={90} className="mx-auto h-12 w-auto object-contain"/><p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/30">Secure session check</p></div></main>;
  const displayName=user.name||user.email?.split("@")[0]||"Admin";
  return <main className="min-h-screen bg-[#0d0710] text-[#fffdf9]"><div className="flex min-h-screen">
    <aside className={`${mobileNav?"fixed inset-y-0 left-0 z-50 flex":"hidden"} w-[275px] shrink-0 flex-col border-r border-[#c8a96a]/12 bg-[#120817] lg:sticky lg:top-0 lg:flex lg:h-screen`}><div className="border-b border-[#c8a96a]/12 px-6 py-6"><div className="flex items-start justify-between gap-4"><div><Image src="/images/lidya-logo.png" alt="LIDYA" width={220} height={70} className="h-9 w-auto object-contain"/><p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/30">Alba Resort · Administration</p></div><button onClick={()=>setMobileNav(false)} className="text-white/40 lg:hidden">×</button></div></div><nav className="flex-1 overflow-y-auto px-3 py-4">{navItems.map(item=>item.href?<Link key={item.id} href={item.href} className="mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/45 transition hover:bg-white/[0.035] hover:text-white/75"><span className="w-5 text-center text-[#c8a96a]/75">{item.icon}</span><span>{item.label}</span></Link>:<button key={item.id} onClick={()=>{setActive(item.id);setMobileNav(false);}} className={`mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${active===item.id?"bg-[#c8a96a]/12 text-[#e8d8b5]":"text-white/45 hover:bg-white/[0.035] hover:text-white/75"}`}><span className="w-5 text-center text-[#c8a96a]/75">{item.icon}</span><span>{item.label}</span></button>)}</nav><div className="border-t border-[#c8a96a]/12 p-4"><div className="rounded-xl border border-white/7 bg-white/[0.025] p-3"><p className="text-xs text-white/75">{displayName}</p><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#c8a96a]/70">{user.role==="admin"?"Administrator":"Staff"}</p><p className="mt-1 truncate text-[10px] text-white/25">{user.email}</p></div><button onClick={logout} className="mt-3 w-full rounded-xl border border-white/8 px-4 py-2.5 text-xs text-white/40 hover:text-white/70">Odhlásiť sa</button></div></aside>
    {mobileNav&&<button aria-label="Close navigation" onClick={()=>setMobileNav(false)} className="fixed inset-0 z-40 bg-black/70 lg:hidden"/>}
    <section className="min-w-0 flex-1"><header className="sticky top-0 z-30 flex h-[72px] items-center gap-3 border-b border-[#c8a96a]/10 bg-[#0d0710]/90 px-4 backdrop-blur-xl md:px-6 xl:px-8"><button onClick={()=>setMobileNav(true)} className="rounded-lg border border-white/8 px-3 py-2 text-white/50 lg:hidden">☰</button><div className="min-w-0"><p className="truncate text-xs uppercase tracking-[0.18em] text-white/25">Admin / {activeLabel}</p><p className="mt-1 text-sm text-white/65">LIDYA Jewellery Alba Resort</p></div><div className="ml-auto hidden w-full max-w-sm md:block"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Hľadať v administrácii…" className="w-full rounded-xl border border-white/8 bg-white/[0.025] px-4 py-2.5 text-xs text-white/70 outline-none placeholder:text-white/20 focus:border-[#c8a96a]/35"/></div><Link href="/" target="_blank" className="rounded-xl border border-[#c8a96a]/20 px-3 py-2.5 text-xs text-[#e8d8b5]/70">Web ↗</Link></header>
      <div className="mx-auto max-w-[1500px] px-4 py-7 md:px-6 md:py-9 xl:px-8"><div className="mb-7"><p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a96a]">Secure control centre</p><h1 className="mt-2 text-3xl md:text-4xl">LIDYA Admin Dashboard</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">Produkty, kolekcie, dopyty, obsah, média, jazyky, SEO a prevádzkové nastavenia sú spravované cez chránené serverové API a Supabase.</p></div>{search&&<div className="mb-5 rounded-xl border border-[#c8a96a]/15 bg-[#c8a96a]/5 px-4 py-3 text-xs text-white/55">Hľadanie: <span className="text-[#e8d8b5]">{search}</span></div>}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Web" value="Online" note="Production · Vercel"/><StatCard label="Security" value="Protected" note="Supabase Auth + roles"/><StatCard label="Jazyky" value="15" note="Admin-controlled availability"/><StatCard label="Media" value="Storage" note="Supabase Media Library"/></div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_1fr]"><section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-6"><div className="flex items-center justify-between gap-3"><div><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">Quick management</p><h2 className="mt-2 text-2xl">Hlavné oblasti webu</h2></div><Link href="/admin/products" className="rounded-full border border-[#c8a96a]/30 px-4 py-2 text-xs text-[#e8d8b5]">Správa produktov →</Link></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{categoryCards.map(([title,text,meta,href])=><Link key={title} href={href} className="rounded-xl border border-white/8 bg-black/15 p-4 transition hover:border-[#c8a96a]/35 hover:bg-[#c8a96a]/5"><div className="flex items-center justify-between"><span className="text-base text-white/90">{title}</span><span className="text-xs text-[#c8a96a]">↗</span></div><p className="mt-2 text-xs leading-5 text-white/40">{text}</p><p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/25">{meta}</p></Link>)}</div></section><section className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-6"><p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96a]">System status</p><h2 className="mt-2 text-2xl">Production Security</h2><div className="mt-5 space-y-3">{["Supabase Auth","Admin role verification","HTTP-only cookies","Protected admin API","Service role server-only","Media upload validation"].map(item=><div key={item} className="flex items-center justify-between rounded-xl border border-white/7 bg-black/15 px-4 py-3"><span className="text-sm text-white/70">{item}</span><span className="text-emerald-300">●</span></div>)}</div></section></div></div>
    </section>
  </div></main>;
}
