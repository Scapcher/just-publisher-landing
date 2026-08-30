-- =============================================================================
-- JustPublisher Landing — Content Tables
-- Supabase SQL Editor'a kopyala-yapıştır yaparak çalıştır.
-- =============================================================================

-- ─── Marquee apps ─────────────────────────────────────────────────────────────
-- "Trusted by 20+ studios" bölümündeki uygulama ikonları

create table if not exists marquee_apps (
  id           uuid primary key default gen_random_uuid(),
  name         text    not null,
  bg           text    not null,  -- hex renk, örn. "#3D5A80"
  initial      text    not null,  -- ikonda görünen harf(ler)
  sort_order   integer not null default 0,
  created_at   timestamptz default now()
);

-- ─── Portfolio apps ───────────────────────────────────────────────────────────
-- "Apps we believe in." bölümündeki büyük kartlar

create table if not exists portfolio_apps (
  id                uuid primary key default gen_random_uuid(),
  slug              text    unique not null,
  name              text    not null,
  subtitle          text    not null,
  description       text    not null,
  app_store_rating  numeric(3,1) not null,
  play_store_rating numeric(3,1) not null,
  rating_count      text    not null,   -- kısa format: "19.3K"
  age_rating        text    not null,   -- "4+" veya "12+"
  bg                text    not null,   -- hex renk
  initial           text    not null,
  app_store_url     text    not null default '#',
  play_store_url    text    not null default '#',
  sort_order        integer not null default 0,
  created_at        timestamptz default now()
);

-- ─── RLS — sadece okuma herkese açık ─────────────────────────────────────────

alter table marquee_apps   enable row level security;
alter table portfolio_apps enable row level security;

create policy "public read" on marquee_apps
  for select using (true);

create policy "public read" on portfolio_apps
  for select using (true);

-- ─── Seed data ────────────────────────────────────────────────────────────────

insert into marquee_apps (name, bg, initial, sort_order) values
  ('Pockly', '#3D5A80', 'P', 1),
  ('Lumio',  '#5C7A5E', 'L', 2),
  ('Trackd', '#6B4F3A', 'T', 3),
  ('Drifta', '#7A3B3B', 'D', 4),
  ('Bryte',  '#4A4070', 'B', 5),
  ('Noom',   '#3B6B5A', 'N', 6),
  ('Calla',  '#7A5C3B', 'C', 7),
  ('Velo',   '#3B5A7A', 'V', 8)
on conflict do nothing;

insert into portfolio_apps
  (slug, name, subtitle, description, app_store_rating, play_store_rating,
   rating_count, age_rating, bg, initial, app_store_url, play_store_url, sort_order)
values
  (
    'pockly', 'Pockly', '$480K ARR grown in 8 months.',
    'We acquired Pockly when it had under 2,000 monthly active users. Over eight months we rebuilt the onboarding, restructured the subscription tiers to a 7-day trial model, and ran ASO across 18 markets. Revenue grew 14× without a single paid install.',
    4.8, 4.7, '12.4K', '4+', '#3D5A80', 'P', '#', '#', 1
  ),
  (
    'lumio', 'Lumio', '4.9 rating. Retention tripled in 90 days.',
    'Lumio had a loyal but invisible following. We redesigned the icon and screenshots, launched a trial-to-paid paywall, and A/B tested six variants across user segments. Day-30 retention went from 11% to 34% in the first quarter after acquisition.',
    4.9, 4.8, '8.1K', '4+', '#5C7A5E', 'L', '#', '#', 2
  ),
  (
    'trackd', 'Trackd', '#1 Productivity chart in 12 countries.',
    'A remarkably well-built habit tracker with near-zero visibility. We rewired the metadata across 28 locales, ran sustained review prompts, and expanded into 12 new App Store territories. Trackd now appears in editorial recommendations in the US, UK, and AU stores.',
    4.7, 4.6, '19.3K', '4+', '#6B4F3A', 'T', '#', '#', 3
  ),
  (
    'drifta', 'Drifta', '$120K MRR reached from a near-zero start.',
    'We reworked the local discovery feed and launched a re-engagement push strategy targeting dormant users. A restructured pro tier and referral mechanic drove sustained month-over-month growth. Within a year of acquisition, MRR crossed $120K.',
    4.6, 4.5, '6.8K', '12+', '#7A3B3B', 'D', '#', '#', 4
  )
on conflict (slug) do nothing;
