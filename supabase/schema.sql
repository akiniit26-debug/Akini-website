-- AKINI Supabase product catalogue
-- Run once in Supabase SQL Editor. RLS keeps writes restricted to the owner's email.
create table if not exists public.products (
  id text primary key,
  name text not null,
  name_it text,
  category text not null check (category in ('Pets','Home','Lifestyle')),
  image text not null,
  url text not null,
  asin text,
  brand text,
  subcategory text,
  description text,
  description_it text,
  active boolean not null default true,
  extra jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists products_category_idx on public.products(category);
create index if not exists products_active_idx on public.products(active);
alter table public.products enable row level security;
grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
drop policy if exists "Public can read active AKINI products" on public.products;
create policy "Public can read active AKINI products"
on public.products for select to anon, authenticated
using (active = true);
drop policy if exists "AKINI owner can manage products" on public.products;
create policy "AKINI owner can manage products"
on public.products for all to authenticated
using ((auth.jwt() ->> 'email') = 'mansurahmed833@gmail.com')
with check ((auth.jwt() ->> 'email') = 'mansurahmed833@gmail.com');
create or replace function public.set_products_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists products_updated_at on public.products;
create trigger products_updated_at before update on public.products
for each row execute function public.set_products_updated_at();
