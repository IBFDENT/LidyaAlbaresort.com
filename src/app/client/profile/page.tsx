"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

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
    if (!response.ok) {
      window.location.href = "/client/login";
      return;
    }
    const payload = await response.json();
    const nextUser = payload.user as ClientUser;
    setUser(nextUser);
    setFullName(nextUser.user_metadata?.full_name || "");
    setPhone(nextUser.user_metadata?.phone || "");
    setEmail(nextUser.email || "");
    setPreferredLanguage(nextUser.user_metadata?.preferred_language || "sk");
  }

  useEffect(() => {
    loadUser().finally(() => setLoading(false));
  }, []);

  async function saveProfile() {
    setSaving(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/client/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, email, preferredLanguage }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Profil sa nepodarilo uložiť.");
      setUser(payload.user);
      setMessage(payload.message || "Profil bol uložený.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Profil sa nepodarilo uložiť.");
    } finally {
      setSaving(false);
    }
  }

  async function uploadAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setMessage("");
    setError("");
    try {
      const form = new FormData();
      form.append("avatar", file);
      const response = await fetch("/api/client/avatar", { method: "POST", body: form });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Fotografiu sa nepodarilo nahrať.");
      setUser(payload.user);
      setMessage("Profilová fotografia bola aktualizovaná.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fotografiu sa nepodarilo nahrať.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  async function changePassword() {
    setSecurityMessage("");
    setSecurityError("");
    if (newPassword !== confirmPassword) {
      setSecurityError("Nové heslá sa nezhodujú.");
      return;
    }
    try {
      const response = await fetch("/api/client/security", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Heslo sa nepodarilo zmeniť.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setSecurityMessage(payload.message || "Heslo bolo zmenené.");
    } catch (err) {
      setSecurityError(err instanceof Error ? err.message : "Heslo sa nepodarilo zmeniť.");
    }
  }

  async function deleteAccount() {
    if (!window.confirm("Naozaj chcete natrvalo zmazať svoj LIDYA účet? Túto akciu nemožno vrátiť späť.")) return;
    setDeleting(true);
    setSecurityError("");
    try {
      const response = await fetch("/api/client/security", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: deletePassword, confirmation: deleteConfirmation }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Účet sa nepodarilo zmazať.");
      window.location.href = "/?account_deleted=1";
    } catch (err) {
      setSecurityError(err instanceof Error ? err.message : "Účet sa nepodarilo zmazať.");
      setDeleting(false);
    }
  }

  if (loading) return <main className="flex min-h-screen items-center justify-center bg-[#120817] text-[#c8a96a]">LIDYA</main>;
  if (!user) return null;

  const avatar = user.user_metadata?.avatar_url;
  const initials = (fullName || email || "LIDYA")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  const inputClass = "mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#c8a96a]/70";

  return (
    <main className="min-h-screen bg-[#120817] text-[#fffdf9]">
      <header className="border-b border-[#c8a96a]/15 bg-black/15 px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#c8a96a]">LIDYA Jewellery</p>
            <p className="mt-1 text-sm text-white/35">Private Client Profile</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/client" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55 transition hover:border-[#c8a96a]/30 hover:text-[#e8d8b5]">← Client Centre</Link>
            <Link href="/" className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/55">Späť na web</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-12">
        <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] border border-[#c8a96a]/18 bg-white/[0.035] p-6 lg:sticky lg:top-6 lg:self-start">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-[#c8a96a]/35 bg-[#c8a96a]/10 text-2xl text-[#e8d8b5] shadow-[0_0_50px_rgba(200,169,106,0.08)]">
                {avatar ? <img src={avatar} alt="Profil" className="h-full w-full object-cover" /> : initials}
              </div>
              <h1 className="mt-5 text-2xl">{fullName || "LIDYA Client"}</h1>
              <p className="mt-2 break-all text-xs text-white/40">{user.email}</p>
              <label className="mt-5 cursor-pointer rounded-full border border-[#c8a96a]/30 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#e8d8b5] transition hover:bg-[#c8a96a]/10">
                {uploading ? "Nahrávam…" : "Zmeniť fotografiu"}
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadAvatar} className="hidden" disabled={uploading} />
              </label>
              <p className="mt-3 text-[10px] leading-5 text-white/25">JPG, PNG alebo WEBP · max. 5 MB</p>
            </div>
            <nav className="mt-8 space-y-2 border-t border-white/8 pt-6 text-sm">
              <a href="#personal" className="block rounded-xl bg-[#c8a96a]/10 px-4 py-3 text-[#e8d8b5]">Osobné údaje</a>
              <a href="#security" className="block rounded-xl px-4 py-3 text-white/45 transition hover:bg-white/[0.03] hover:text-white/80">Bezpečnosť</a>
              <a href="#danger" className="block rounded-xl px-4 py-3 text-red-300/55 transition hover:bg-red-400/[0.04] hover:text-red-200">Zmazanie účtu</a>
            </nav>
          </aside>

          <div className="space-y-6">
            <section id="personal" className="rounded-[2rem] border border-[#c8a96a]/18 bg-white/[0.035] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8a96a]">Personal Details</p>
              <h2 className="mt-3 text-3xl">Váš profil</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">Spravujte údaje, ktoré LIDYA používa pre osobnú komunikáciu, servis a privátne rezervácie.</p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <label className="text-xs text-white/40">Meno a priezvisko<input value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} /></label>
                <label className="text-xs text-white/40">Telefón<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+421..." /></label>
                <label className="text-xs text-white/40 md:col-span-2">Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} /><span className="mt-2 block text-[10px] leading-5 text-white/25">Pri zmene emailu vám Supabase odošle bezpečnostné potvrdenie na novú adresu.</span></label>
                <label className="text-xs text-white/40">Preferovaný jazyk<select value={preferredLanguage} onChange={(e) => setPreferredLanguage(e.target.value)} className={inputClass}><option value="sk">Slovenčina</option><option value="en">English</option><option value="de">Deutsch</option><option value="ru">Русский</option><option value="nl">Nederlands</option></select></label>
              </div>

              {message && <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">{message}</div>}
              {error && <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

              <button onClick={saveProfile} disabled={saving} className="mt-6 rounded-xl bg-[#c8a96a] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#120817] disabled:opacity-50">{saving ? "Ukladám…" : "Uložiť zmeny"}</button>
            </section>

            <section id="security" className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8a96a]">Security</p>
              <h2 className="mt-3 text-3xl">Heslo a bezpečnosť</h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <label className="text-xs text-white/40 md:col-span-2">Aktuálne heslo<input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className={inputClass} /></label>
                <label className="text-xs text-white/40">Nové heslo<input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={inputClass} minLength={8} /></label>
                <label className="text-xs text-white/40">Zopakovať nové heslo<input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={inputClass} minLength={8} /></label>
              </div>
              {securityMessage && <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">{securityMessage}</div>}
              {securityError && <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{securityError}</div>}
              <button onClick={changePassword} className="mt-6 rounded-xl border border-[#c8a96a]/35 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8d8b5] transition hover:bg-[#c8a96a]/10">Zmeniť heslo</button>
            </section>

            <section id="danger" className="rounded-[2rem] border border-red-400/15 bg-red-400/[0.025] p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-red-300/60">Danger Zone</p>
              <h2 className="mt-3 text-3xl">Zmazať účet</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/35">Zmazanie je trvalé. Odstráni sa váš autentifikačný účet a stratíte prístup do Client Centre. Pred zmazaním vyžadujeme vaše heslo a text DELETE.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <label className="text-xs text-white/40">Heslo<input type="password" value={deletePassword} onChange={(e) => setDeletePassword(e.target.value)} className={inputClass} /></label>
                <label className="text-xs text-white/40">Napíšte DELETE<input value={deleteConfirmation} onChange={(e) => setDeleteConfirmation(e.target.value)} className={inputClass} /></label>
              </div>
              <button onClick={deleteAccount} disabled={deleting || deleteConfirmation.toUpperCase() !== "DELETE" || !deletePassword} className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-200 disabled:cursor-not-allowed disabled:opacity-35">{deleting ? "Mažem účet…" : "Natrvalo zmazať účet"}</button>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
