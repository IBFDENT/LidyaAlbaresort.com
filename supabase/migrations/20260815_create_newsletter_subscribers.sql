create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  email_normalized text generated always as (lower(trim(email))) stored,
  status text not null default 'active' check (status in ('active','unsubscribed','blocked')),
  source text not null default 'footer',
  locale text,
  consent_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(email_normalized)
);

create index if not exists newsletter_subscribers_status_idx on public.newsletter_subscribers(status);
create index if not exists newsletter_subscribers_created_at_idx on public.newsletter_subscribers(created_at desc);

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "Public can subscribe" on public.newsletter_subscribers;
create policy "Public can subscribe"
on public.newsletter_subscribers
for insert
to anon, authenticated
with check (status = 'active');
