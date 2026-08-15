create table if not exists public.client_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(user_id, product_id)
);

create index if not exists client_favorites_user_idx
  on public.client_favorites(user_id, created_at desc);

alter table public.client_favorites enable row level security;
