import { createClient } from "@supabase/supabase-js";
import type { MarqueeApp, PortfolioApp } from "@/lib/content";

let _client: ReturnType<typeof createClient> | null = null;

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  if (!_client) {
    _client = createClient(url, key);
  }
  return _client;
}

export async function getMarqueeApps(): Promise<MarqueeApp[]> {
  const client = getClient();
  if (!client) return [];

  const { data, error } = await client
    .from("marquee_apps")
    .select("name, bg, initial, icon_url")
    .order("sort_order");

  if (error) {
    console.error("[getMarqueeApps]", error.message);
    return [];
  }
  return (data as any[]).map((row) => ({ ...row, iconUrl: row.icon_url ?? null }));
}

export async function getPortfolioApps(): Promise<PortfolioApp[]> {
  const client = getClient();
  if (!client) return [];

  const { data, error } = await client
    .from("portfolio_apps")
    .select(
      "slug, name, subtitle, description, app_store_rating, play_store_rating, rating_count, age_rating, bg, initial, app_store_url, play_store_url, icon_url, screenshot_1_url, screenshot_2_url"
    )
    .order("sort_order");

  if (error) {
    console.error("[getPortfolioApps]", error.message);
    return [];
  }

  return (data as any[]).map((row) => ({
    slug:            row.slug,
    name:            row.name,
    subtitle:        row.subtitle,
    description:     row.description,
    appStoreRating:  row.app_store_rating,
    playStoreRating: row.play_store_rating,
    ratingCount:     row.rating_count,
    ageRating:       row.age_rating,
    bg:              row.bg,
    initial:         row.initial,
    appStoreUrl:     row.app_store_url,
    playStoreUrl:    row.play_store_url,
    iconUrl:         row.icon_url ?? null,
    screenshot1Url:  row.screenshot_1_url ?? null,
    screenshot2Url:  row.screenshot_2_url ?? null,
  }));
}
