alter table public.enquiries
  add column if not exists user_id uuid references auth.users(id) on delete set null;

create index if not exists enquiries_user_id_idx
  on public.enquiries(user_id, created_at desc);
