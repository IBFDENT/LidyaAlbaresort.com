create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('general','service','appointment')),
  status text not null default 'new' check (status in ('new','in_progress','resolved','archived')),
  name text not null,
  email text not null,
  phone text,
  locale text,
  subject text,
  message text,
  preferred_contact text,
  selected_services jsonb not null default '[]'::jsonb,
  source text not null default 'website',
  consent_at timestamptz,
  confirmation_email_sent boolean not null default false,
  confirmation_email_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists enquiries_type_idx on public.enquiries(type);
create index if not exists enquiries_status_idx on public.enquiries(status);
create index if not exists enquiries_created_at_idx on public.enquiries(created_at desc);
create index if not exists enquiries_email_idx on public.enquiries(lower(email));

alter table public.enquiries enable row level security;

-- No public policies. Public writes and admin reads/updates are handled server-side via the service role.
