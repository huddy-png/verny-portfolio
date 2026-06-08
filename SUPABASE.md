# Supabase Setup

Run this SQL in the Supabase SQL editor, then review the policies before launch.

```sql
create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  tech text[] not null default '{}',
  live text,
  github text,
  impact text,
  category text not null default 'Other',
  created_at timestamptz not null default now()
);

alter table public.portfolio_projects enable row level security;

create policy "Allow anonymous project reads"
on public.portfolio_projects
for select
to anon
using (true);

create table if not exists public.portfolio_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.portfolio_messages enable row level security;

create policy "Allow anonymous contact inserts"
on public.portfolio_messages
for insert
to anon
with check (true);
```

Do not add anonymous `SELECT`, `UPDATE`, or `DELETE` policies to `portfolio_messages`; contact submissions should only be readable from the Supabase dashboard or trusted admin tooling.
