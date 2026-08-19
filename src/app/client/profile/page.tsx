"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

type ClientUser = {
  id: string;
  email?: string;
  user_metadata?: { full_name?: string; phone?: string; avatar_url?: string; preferred_language?: string };
};

export default function ClientProfilePage() {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("sk");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityMessage, setSecurityMessage] = useState("");
  const [securityError, setSecurityError] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [deleting, setDeleting] = useState(false);

  async function loadUser() {
    const response = await fetch("/api/client/me", { cache: "no-store" });
    if (!response.ok) { window.location.href = "/client/login"; return; }
    const payload = await response.json();
    const nextUser = payload.user as ClientUser;
    setUser(nextUser);
    setFullName(nextUser.user_metadata?.full_name || "");
    setPhone(nextUser.user_metadata?.phone || "");
    setEmail(nextUser.email || "");
    setPreferredLanguage(nextUser.user_metadata?.preferred_language || "sk");
  }

  useEffect(() => { loadUser().finally(() => setLoading(false)); }, []);

  async function saveProfile() {
    setSaving(true); setMessage(""); setError("");
    try {
      const response = await fetch("/api/client/profile", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fullName, phone, email, preferredLanguage }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Profil sa nepodarilo uložiť.");
      setUser(payload.user); setMessage(payload.message || "Profil bol uložený.");
    } catch (err) { setError(err instanceof Error ? err.message : "Profil sa nepodarilo uložiť."); }
    finally { setSaving(false); }
  }

  async function uploadAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; if (!file) return;
    setUploading(true); setMessage(""); setError("");
    try {
      const form = new FormData(); form.append("avatar", file);
      const response = await fetch("/api/client/avatar", { method: "POST", body: form });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Fotografiu sa nepodarilo nahrať.");
      setUser(payload.user); setMessage("Profilová fotografia bola aktualizovaná.");
    } catch (err) { setError(err instanceof Error ? err.message : "Fotografiu sa nepodarilo nahrať."); }
    finally { setUploading(false); event.target.value = ""; }
  }

  async function changePassword() {
    setSecurityMessage(""); setSecurityError("");
    if (newPassword !== confirmPassword) { setSecurityError("Nové heslá sa nezhodujú."); return; }
    try {
      const response = await fetch("/api/client/security", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ currentPassword, newPassword }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Heslo sa nepodarilo zmeniť.");
      setCurrentPassword(""); setNewPassword(""); setConfirmPassword(""); setSecurityMessage(payload.message || "Heslo bolo zmenené.");
    } catch (err) { setSecurityError(err instanceof Error ? err.message : "Heslo sa nepodarilo zmeniť."); }
  }

  async function deleteAccount() {
    if (!window.confirm("Naozaj chcete natrvalo zmazať svoj LIDYA účet? Túto akciu nemožno vrátiť späť.")) return;
    setDeleting(true); setSecurityError("");
    try {
      const response = await fetch("/api/client/security", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: deletePassword, confirmation: deleteConfirmation }) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Účet sa nepodarilo zmazať.");
      window.location.href = "/?account_deleted=1";
    } catch (err) { setSecurityError(err instanceof Error ? err.message : "Účet sa nepodarilo zmazať."); setDeleting(false); }
  }

  if (loading) return <main className="flex min-h-screen items-center justify-center bg-[#100613] text-[#d3b16d]"><span className="text-xs uppercase tracking-[0.55em]">LIDYA</span></main>;
  if (!user) return null;

  const avatar = user.user_metadata?.avatar_url;
  const initials = (fullName || email || "LIDYA").split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
  const inputClass = "mt-2 w-full rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3.5 text-sm text-[#f8f2e8] outline-none transition duration-300 placeholder:text-white/20 hover:border-white/15 focus:border-[#d3b16d]/75 focus:bg-[#160b18] focus:shadow-[0_0_0_3px_rgba(211,177,109,0.06)]";

  return (
    <main className="min-h-screen bg-[#100613] text-[#f8f2e8] selection:bg-[#d3b16d]/30">
      <header className="border-b border-[#d3b16d]/15 bg-[#0d0410]/90 px-5 py-5 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#d3b16d]">LIDYA Jewellery</p>
            <p className="mt-1.5 text-xs tracking-wide text-[#e9dfd0]/45">Private Client Profile</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/client" className="rounded-full border border-[#d3b16d]/20 px-4 py-2 text-xs text-[#e9dfd0]/65 transition hover:border-[#d3b16d]/45 hover:text-[#f6e8c8]">← Client Centre</Link>
            <Link href="/" className="hidden rounded-full border border-white/10 px-4 py-2 text-xs text-[#e9dfd0]/55 transition hover:border-white/20 hover:text-white sm:block">Späť na web</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-7 md:px-10 md:py-10">
        <div className="mb-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <Link href="/client" className="transition hover:text-[#d3b16d]">Client Centre</Link><span className="text-[#d3b16d]/45">/</span><span className="text-[#e9dfd0]/60">Profile</span>
        </div>

        <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="overflow-hidden rounded-[2rem] border border-[#d3b16d]/20 bg-[#190f1c] shadow-[0_30px_90px_rgba(0,0,0,0.18)] lg:sticky lg:top-6 lg:self-start">
            <div className="p-6 pb-7 text-center">
              <p className="mb-5 text-[9px] uppercase tracking-[0.36em] text-[#d3b16d]/75">Private Client</p>
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#d3b16d]/45 bg-[#d3b16d]/[0.07] p-[5px] shadow-[0_0_60px_rgba(211,177,109,0.10)]">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.06] bg-[#241826] text-2xl font-light tracking-wide text-[#f1dfbb]">
                  {avatar ? <img src={avatar} alt="Profil" className="h-full w-full object-cover" /> : initials}
                </div>
              </div>
              <h1 className="mt-5 font-serif text-[25px] leading-tight text-[#fffaf1]">{fullName || "LIDYA Client"}</h1>
              <p className="mt-2 break-all text-[11px] text-[#e9dfd0]/42">{user.email}</p>
              <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-[#d3b16d]/15 bg-[#d3b16d]/[0.05] px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-[#d3b16d]/75"><span className="h-1 w-1 rounded-full bg-[#d3b16d]" />LIDYA Private Client</div>
              <label className="mx-auto mt-5 block w-fit cursor-pointer rounded-full border border-[#d3b16d]/35 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#f1dfbb] transition hover:border-[#d3b16d]/60 hover:bg-[#d3b16d]/10">
                {uploading ? "Nahrávam…" : "Zmeniť fotografiu"}<input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadAvatar} className="hidden" disabled={uploading} />
              </label>
              <p className="mt-3 text-[9px] leading-5 text-white/22">JPG, PNG alebo WEBP · max. 5 MB</p>
            </div>
            <nav className="border-t border-white/[0.06] px-4 py-5 text-[13px]">
              <a href="#personal" className="relative block overflow-hidden rounded-xl bg-[#d3b16d]/[0.08] px-4 py-3.5 text-[#f2dfb7] before:absolute before:inset-y-2 before:left-0 before:w-px before:bg-[#d3b16d]">Osobné údaje</a>
              <a href="#security" className="mt-1 block rounded-xl px-4 py-3.5 text-white/45 transition hover:bg-white/[0.025] hover:text-white/80">Bezpečnosť</a>
              <div className="my-3 border-t border-white/[0.06]" />
              <a href="#danger" className="block rounded-xl px-4 py-3 text-red-300/45 transition hover:bg-red-400/[0.035] hover:text-red-200/80">Zmazanie účtu</a>
            </nav>
          </aside>

          <div className="space-y-5">
            <section id="personal" className="rounded-[2rem] border border-[#d3b16d]/20 bg-[#190f1c] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.14)] md:p-9">
              <div className="flex flex-col justify-between gap-5 border-b border-white/[0.06] pb-7 md:flex-row md:items-start">
                <div><p className="text-[9px] uppercase tracking-[0.34em] text-[#d3b16d]">Personal Details</p><h2 className="mt-3 font-serif text-3xl text-[#fffaf1] md:text-[34px]">Váš profil</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#e9dfd0]/45">Spravujte údaje, ktoré LIDYA používa pre osobnú komunikáciu, servis a privátne rezervácie.</p></div>
                <div className="max-w-[220px] md:text-right"><p className="text-[9px] uppercase tracking-[0.28em] text-[#d3b16d]/70">Private Client Profile</p><p className="mt-2 font-serif text-sm italic leading-5 text-[#e9dfd0]/45">Your relationship with LIDYA, in one place.</p></div>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <label className="text-[11px] text-[#e9dfd0]/48">Meno a priezvisko<input value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} /></label>
                <label className="text-[11px] text-[#e9dfd0]/48">Telefón<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+421..." /></label>
                <label className="text-[11px] text-[#e9dfd0]/48 md:col-span-2">Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} /><span className="mt-2 block text-[9px] leading-5 text-white/25">Pri zmene emailu vám odošleme bezpečnostné potvrdenie na novú adresu.</span></label>
                <label className="text-[11px] text-[#e9dfd0]/48">Preferovaný jazyk<select value={preferredLanguage} onChange={(e) => setPreferredLanguage(e.target.value)} className={inputClass}><option value="sk">Slovenčina</option><option value="en">English</option><option value="de">Deutsch</option><option value="ru">Русский</option><option value="nl">Nederlands</option></select></label>
              </div>
              {message && <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-3 text-sm text-emerald-200">{message}</div>}
              {error && <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/[0.08] px-4 py-3 text-sm text-red-200">{error}</div>}
              <button onClick={saveProfile} disabled={saving} className="mt-7 min-w-48 rounded-xl bg-[#d3b16d] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#120817] shadow-[0_10px_30px_rgba(211,177,109,0.10)] transition hover:bg-[#dfc17f] disabled:opacity-50">{saving ? "Ukladám…" : "Uložiť zmeny"}</button>
            </section>

            <section id="security" className="rounded-[2rem] border border-white/[0.07] bg-[#180e1b] p-6 md:p-8">
              <div className="flex items-end justify-between gap-4 border-b border-white/[0.05] pb-5"><div><p className="text-[9px] uppercase tracking-[0.34em] text-[#d3b16d]">Security</p><h2 className="mt-2 font-serif text-2xl text-[#fffaf1]">Heslo a bezpečnosť</h2></div><span className="hidden text-[9px] uppercase tracking-[0.18em] text-white/20 md:block">Secure account access</span></div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="text-[11px] text-[#e9dfd0]/45 md:col-span-2">Aktuálne heslo<input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className={inputClass} /></label>
                <label className="text-[11px] text-[#e9dfd0]/45">Nové heslo<input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={inputClass} minLength={8} /></label>
                <label className="text-[11px] text-[#e9dfd0]/45">Zopakovať nové heslo<input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={inputClass} minLength={8} /></label>
              </div>
              {securityMessage && <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-3 text-sm text-emerald-200">{securityMessage}</div>}
              {securityError && <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/[0.08] px-4 py-3 text-sm text-red-200">{securityError}</div>}
              <button onClick={changePassword} className="mt-6 rounded-xl border border-[#d3b16d]/35 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f1dfbb] transition hover:border-[#d3b16d]/60 hover:bg-[#d3b16d]/[0.07]">Zmeniť heslo</button>
            </section>

            <section id="danger" className="rounded-[2rem] border border-red-400/10 bg-red-400/[0.018] p-6 md:p-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-red-300/45">Danger Zone</p><h2 className="mt-2 font-serif text-2xl text-[#fffaf1]">Zmazať účet</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/32">Zmazanie je trvalé. Odstráni sa váš autentifikačný účet a stratíte prístup do Client Centre. Pred zmazaním vyžadujeme vaše heslo a text DELETE.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2"><label className="text-[11px] text-white/38">Heslo<input type="password" value={deletePassword} onChange={(e) => setDeletePassword(e.target.value)} className={inputClass} /></label><label className="text-[11px] text-white/38">Napíšte DELETE<input value={deleteConfirmation} onChange={(e) => setDeleteConfirmation(e.target.value)} className={inputClass} /></label></div>
              <button onClick={deleteAccount} disabled={deleting || deleteConfirmation.toUpperCase() !== "DELETE" || !deletePassword} className="mt-6 rounded-xl border border-red-400/25 bg-red-400/[0.06] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-200/80 transition hover:bg-red-400/10 disabled:cursor-not-allowed disabled:opacity-30">{deleting ? "Mažem účet…" : "Natrvalo zmazať účet"}</button>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
