create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category text not null,
  collection text,
  description text,
  price numeric(12,2),
  currency text not null default 'EUR',
  image_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products(category);
create index if not exists products_status_idx on public.products(status);
create index if not exists products_sort_order_idx on public.products(sort_order);

alter table public.products enable row level security;

-- Public web can read only published products through the anon key.
drop policy if exists "Public can read published products" on public.products;
create policy "Public can read published products"
on public.products
for select
to anon, authenticated
using (status = 'published');

-- Admin writes are performed only by the server-side service role key,
-- which bypasses RLS. Never expose SUPABASE_SERVICE_ROLE_KEY to the browser.
