alter table public.enquiries
  add column if not exists confirmation_email_sent_at timestamptz,
  add column if not exists admin_notification_email_sent boolean not null default false,
  add column if not exists admin_notification_email_sent_at timestamptz,
  add column if not exists admin_notification_email_error text,
  add column if not exists email_last_attempt_at timestamptz;

create index if not exists enquiries_confirmation_email_sent_idx on public.enquiries(confirmation_email_sent);
create index if not exists enquiries_admin_notification_email_sent_idx on public.enquiries(admin_notification_email_sent);
