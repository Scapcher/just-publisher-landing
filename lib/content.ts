// =============================================================================
// CONTENT.TS — Admin içerik dosyası
// =============================================================================
// Bu dosya, tüm sayfa içeriğinin tek kaynağıdır.
// Aşağıdaki bölümleri düzenleyerek siteyi güncelleyebilirsin.
//
// Düzenleme sonrası kaydet — Next.js hot-reload ile anında yansır.
// =============================================================================

// ─── Tip tanımları ─────────────────────────────────────────────────────────────

/** "Trusted by studios" marquee'sindeki her uygulama kartı */
export interface MarqueeApp {
  /** Görüntülenen uygulama adı (tooltip olarak gösterilir) */
  name: string;
  /** İkon arka plan rengi — hex kodu, örn. "#3D5A80" */
  bg: string;
  /** İkonda görünen baş harf(ler), örn. "P" */
  initial: string;
  /** Supabase Storage'dan gelen ikon URL'i — yoksa initial harfi gösterilir */
  iconUrl?: string | null;
}

/** Portfolio bölümündeki her uygulama kartı */
export interface PortfolioApp {
  /** URL-safe benzersiz tanımlayıcı, örn. "trackd" */
  slug: string;
  /** Uygulama adı, büyük başlık olarak gösterilir */
  name: string;
  /** Tek satır güçlü sonuç cümlesi, örn. "#1 chart in 12 countries." */
  subtitle: string;
  /** 2-3 cümle açıklama — JustPublisher'ın ne yaptığı */
  description: string;
  /** App Store yıldız puanı, 1.0–5.0 */
  appStoreRating: number;
  /** Google Play yıldız puanı, 1.0–5.0 */
  playStoreRating: number;
  /** Toplam değerlendirme sayısı, kısa format — örn. "19.3K" */
  ratingCount: string;
  /** Yaş kısıtlaması — örn. "4+" veya "12+" */
  ageRating: string;
  /** Kart + ikon arka plan rengi — hex kodu */
  bg: string;
  /** İkonda görünen baş harf(ler) */
  initial: string;
  /** App Store URL'i */
  appStoreUrl: string;
  /** Google Play URL'i */
  playStoreUrl: string;
  /** Supabase Storage'dan gelen ikon URL'i — yoksa initial harfi gösterilir */
  iconUrl?: string | null;
  /** Birinci ekran görüntüsü URL'i */
  screenshot1Url?: string | null;
  /** İkinci ekran görüntüsü URL'i */
  screenshot2Url?: string | null;
}

// Marquee ve portfolio verileri artık Supabase'de.
// Düzenlemek için: Supabase Dashboard → Table Editor → marquee_apps / portfolio_apps
// SQL şeması: supabase/content.sql

// =============================================================================
// Site-wide içerik — component'lar bu export'u kullanır, doğrudan düzenleme
// =============================================================================

export const content = {
  site: {
    name: "JustPublisher",
    tagline: "Mobile App Publishing Studio",
    description:
      "We acquire, grow, and monetize mobile apps built by independent developers.",
  },

  nav: {
    brand: "JustPublisher",
    links: [
      { label: "Apps",    href: "#apps" },
      { label: "About",   href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Book a Call", href: "mailto:hello@justpublisher.com" },
  },

  hero: {
    eyebrow: "(01) MOBILE APP PUBLISHER",
    headline: "JustPublisher.",
    subtitle:
      "We buy great apps and grow them. If you've built something worth believing in, we'd like to talk.",
    cta:       { label: "Book a Call",  href: "mailto:hello@justpublisher.com" },
    secondary: { label: "See our apps", href: "#apps" },
  },

  // Marquee verisi Supabase'den gelir — bkz. lib/supabase/content.ts
  marquee: {},

  trackRecord: {
    eyebrow: "(02) TRACK RECORD",
    metrics: [
      { prefix: "+$", value: 1,  suffix: "M", label: "Revenue Generated" },
      { prefix: "+",  value: 10, suffix: "",  label: "Apps Published" },
      { prefix: "+",  value: 20, suffix: "",  label: "Studios Supported" },
    ],
  },

  // Portfolio verisi Supabase'den gelir — bkz. lib/supabase/content.ts
  apps: {
    eyebrow: "(03) PORTFOLIO",
    title: "Apps we believe in.",
  },

  faq: {
    eyebrow: "(04) QUESTIONS",
    title: "Things people ask.",
    items: [
      {
        question: "What does a publisher actually do?",
        answer:
          "We handle the full distribution layer — App Store optimization, paid user acquisition, review management, and A/B testing release cadences. You build. We make sure people find it, install it, and keep coming back.",
      },
      {
        question: "Do I lose ownership of my app?",
        answer:
          "No. You own your codebase, your data, and your users. We acquire the commercial rights to distribute and grow the app. If the relationship ends, you walk away with everything that's yours.",
      },
      {
        question: "How is revenue split?",
        answer:
          "It depends on the deal, but we're transparent about the model upfront: a percentage of net revenue, negotiated before anything is signed. We win when you win.",
      },
      {
        question: "What kind of apps are you looking for?",
        answer:
          "Consumer apps with a clear use case, decent retention, and a founder who cares about the craft. Downloads don't matter much. We look for apps that are a bit too good for the attention they're getting.",
      },
      {
        question: "My app has almost no downloads. Is it too early?",
        answer:
          "Probably not. Most apps we've taken on had fewer than 5,000 downloads. We're not buying traction — we're buying potential.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Usually 4 to 6 weeks from first call to signed agreement. We move at whatever speed you're comfortable with. Rushed decisions make bad partners.",
      },
      {
        question: "What happens after we sign?",
        answer:
          "We run a 30 day audit. Product, ASO, analytics. Then we ship a growth plan. You keep shipping features. We handle everything above the code.",
      },
    ],
  },

  cta: {
    headline: "Have an app? Let's grow.",
    subtitle:  "We respond to every serious inquiry within 48 hours.",
    cta: { label: "Book a Call", href: "mailto:hello@justpublisher.com" },
  },

  footer: {
    brand: "JustPublisher",
    nav: [
      { label: "Apps",    href: "#apps" },
      { label: "About",   href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "EULA",    href: "/eula" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms",   href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "KVKK",    href: "/kvkk" },
    ],
    copy: "© 2026 JustPublisher LLC. All rights reserved.",
  },
};
