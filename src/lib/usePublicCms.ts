"use client";

import { useEffect, useState } from "react";

export type PublicCmsEntry = {
  id: string;
  section: string;
  title: string;
  slug: string;
  subtitle: string | null;
  body: string | null;
  status: "published" | "active";
  metadata: Record<string, unknown>;
  sort_order: number;
};

export function usePublicCmsEntry(section: string, slug: string) {
  const [entry, setEntry] = useState<PublicCmsEntry | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/public/cms/${encodeURIComponent(section)}?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) return null;
        const payload = (await response.json()) as { entries?: PublicCmsEntry[] };
        return payload.entries?.[0] ?? null;
      })
      .then((value) => {
        if (!cancelled) setEntry(value);
      })
      .catch(() => {
        if (!cancelled) setEntry(null);
      });

    return () => {
      cancelled = true;
    };
  }, [section, slug]);

  return entry;
}

export function usePublicCmsEntries(section: string) {
  const [entries, setEntries] = useState<PublicCmsEntry[]>([]);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/public/cms/${encodeURIComponent(section)}`, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) return [];
        const payload = (await response.json()) as { entries?: PublicCmsEntry[] };
        return payload.entries ?? [];
      })
      .then((value) => {
        if (!cancelled) setEntries(value);
      })
      .catch(() => {
        if (!cancelled) setEntries([]);
      });

    return () => {
      cancelled = true;
    };
  }, [section]);

  return entries;
}
