import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { Apps } from "@/components/sections/Apps";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { getMarqueeApps, getPortfolioApps } from "@/lib/supabase/content";

// Sayfayı saatte bir Supabase'den yeniden oluşturur (ISR)
export const revalidate = 3600;

export default async function Home() {
  const [marqueeApps, portfolioApps] = await Promise.all([
    getMarqueeApps(),
    getPortfolioApps(),
  ]);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <div className="flex flex-col gap-[clamp(96px,14vh,200px)] pb-[clamp(96px,14vh,200px)]">
          <Marquee apps={marqueeApps} />
          <TrackRecord />
          <Apps items={portfolioApps} />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
