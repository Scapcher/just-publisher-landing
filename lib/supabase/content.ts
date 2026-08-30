import { createClient } from "@supabase/supabase-js";
import type { MarqueeApp, PortfolioApp } from "@/lib/content";

// Public okuma için cookie gerektirmez — RLS "for select using (true)" ile açık.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export async function getMarqueeApps(): Promise<MarqueeApp[]> {
  const { data, error } = await supabase
    .from("marquee_apps")
    .select("name, bg, initial, icon_url")
    .order("sort_order");

  if (error) {
    console.error("[getMarqueeApps]", error.message);
    return [];
  }
  return data.map((row) => ({ ...row, iconUrl: row.icon_url ?? null }));
}

export async function getPortfolioApps(): Promise<PortfolioApp[]> {
  const { data, error } = await supabase
    .from("portfolio_apps")
    .select(
      "slug, name, subtitle, description, app_store_rating, play_store_rating, rating_count, age_rating, bg, initial, app_store_url, play_store_url, icon_url, screenshot_1_url, screenshot_2_url"
    )
    .order("sort_order");

  if (error) {
    console.error("[getPortfolioApps]", error.message);
    return [];
  }

  return data.map((row) => ({
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
