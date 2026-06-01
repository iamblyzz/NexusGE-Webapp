-- Create leads table for NexusGE intake form submissions
create table if not exists public.leads (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  name           text not null,
  email          text not null,
  phone          text,
  project_scope  text not null,
  selected_tier  text not null,
  language_track text not null default 'en',
  status         text not null default 'new'
);

-- Enable Row-Level Security
alter table public.leads enable row level security;

-- Block all public reads
create policy "No public read"
  on public.leads for select
  using (false);

-- Allow service role to insert (used by API route)
create policy "Service role insert"
  on public.leads for insert
  with check (true);
