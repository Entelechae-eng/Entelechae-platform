create table if not exists public.email_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.email_subscribers enable row level security;

revoke all on table public.email_subscribers from anon, authenticated;
