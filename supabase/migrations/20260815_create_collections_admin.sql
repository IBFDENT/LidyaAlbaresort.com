create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  type text not null default 'jewellery',
  description text,
  hero_image_url text,
  status text not null default 'draft' check (status in ('draft','published')),
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists collections_type_idx on public.collections(type);
create index if not exists collections_status_idx on public.collections(status);
create index if not exists collections_sort_order_idx on public.collections(sort_order);

alter table public.collections enable row level security;

drop policy if exists "Public can read published collections" on public.collections;
create policy "Public can read published collections"
on public.collections
for select
to anon, authenticated
using (status = 'published');
