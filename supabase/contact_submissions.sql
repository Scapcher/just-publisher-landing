-- Run this once in: Supabase Dashboard → SQL Editor → New query
-- Then click "Run"

CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  email      text        NOT NULL,
  app_name   text,
  message    text        NOT NULL,
  status     text        NOT NULL DEFAULT 'new'
                         CHECK (status IN ('new', 'read', 'replied')),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Secure: no public access — only service role (used by the Next.js app) can read/write
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Index for dashboard queries (newest first)
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON public.contact_submissions (created_at DESC);
