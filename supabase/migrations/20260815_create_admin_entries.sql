create extension if not exists pgcrypto;

create table if not exists public.admin_entries (
  id uuid primary key default gen_random_uuid(),
  section text not null check (section in ('investment','services','travel','content','media','languages','seo','messages','settings')),
  title text not null,
  slug text not null,
  subtitle text,
  body text,
  status text not null default 'draft' check (status in ('draft','published','active','archived')),
  metadata jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(section, slug)
);

create index if not exists admin_entries_section_idx on public.admin_entries(section);
create index if not exists admin_entries_status_idx on public.admin_entries(status);
create index if not exists admin_entries_sort_order_idx on public.admin_entries(sort_order);

alter table public.admin_entries enable row level security;

-- No public policies. Admin management is server-side only via service role.
