"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientProfileShortcut() {
  const pathname = usePathname();
  if (pathname !== "/client") return null;

  return (
    <Link
      href="/client/profile"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-[#c8a96a]/35 bg-[#1d1021]/95 px-5 py-3 text-xs text-[#e8d8b5] shadow-2xl backdrop-blur transition hover:bg-[#2a172d]"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8a96a]/15 text-[#c8a96a]">◉</span>
      <span className="uppercase tracking-[0.16em]">Môj profil</span>
    </Link>
  );
}
