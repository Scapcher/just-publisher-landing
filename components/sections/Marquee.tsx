"use client";

import Image from "next/image";
import type { MarqueeApp } from "@/lib/content";
import { useLocale } from "@/lib/i18n/context";

const ICON = 64;
const GAP  = 16;
const STAGGER = (ICON + GAP) / 2; // half-column offset for middle row

function AppIcon({ name, bg, initial, iconUrl }: MarqueeApp) {
  return (
    <div
      title={name}
      className="flex-shrink-0 transition-transform duration-200 ease-spring hover:scale-[1.11] cursor-default"
      style={{
        width: ICON,
        height: ICON,
        borderRadius: 18, // squircle-ish
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        overflow: "hidden",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.55), 0 4px 14px rgba(0,0,0,0.28)",
      }}
    >
      {iconUrl ? (
        <Image
          src={iconUrl}
          alt={name}
          width={ICON}
          height={ICON}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          unoptimized
        />
      ) : (
        initial
      )}
    </div>
  );
}

// 4 copies: animation moves translateX(-50%) = 2 copies → seamless loop
function MarqueeTrack({
  apps,
  animClass,
  offsetPx = 0,
}: {
  apps: MarqueeApp[];
  animClass: string;
  offsetPx?: number;
}) {
  const repeated = [...apps, ...apps, ...apps, ...apps];

  return (
    <div style={{ marginLeft: offsetPx }}>
      <div
        className={`flex w-max ${animClass} hover:[animation-play-state:paused]`}
        style={{ gap: GAP, willChange: "transform" }}
        aria-hidden="true"
      >
        {repeated.map((app, i) => (
          <AppIcon key={`${app.name}-${i}`} {...app} />
        ))}
      </div>
    </div>
  );
}

export function Marquee({ apps }: { apps: MarqueeApp[] }) {
  const { t } = useLocale();
  if (!apps.length) return null;

  return (
    <section
      aria-label="Apps we've published"
      className="w-full overflow-x-hidden py-20 md:py-28"
    >
      {/* ── Heavy grotesque heading ── */}
      <div className="text-center mb-14 px-6">
        <h2
          style={{
            fontSize: "clamp(44px, 7vw, 104px)",
            fontWeight: 900,
            letterSpacing: "-0.055em",
            lineHeight: 0.92,
            textTransform: "uppercase",
            color: "#F0E8FF",
          }}
        >
          {t.marquee.heading}
        </h2>
      </div>

      {/* ── Three marquee rows with mask ── */}
      <div
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        {/* Row 1 — left */}
        <div className="py-2">
          <MarqueeTrack apps={apps} animClass="animate-marquee" />
        </div>

        {/* Row 2 — right, staggered half-column */}
        <div className="py-2">
          <MarqueeTrack
            apps={apps}
            animClass="animate-marquee-reverse"
            offsetPx={STAGGER}
          />
        </div>

        {/* Row 3 — left, hidden on mobile */}
        <div className="py-2 hidden md:block">
          <MarqueeTrack apps={apps} animClass="animate-marquee-alt" />
        </div>
      </div>

      {/* ── CTA button ── */}
      <div className="flex justify-center mt-14 md:mt-16">
        <a
          href="#apps"
          className="inline-flex items-center gap-3 transition-all duration-200 ease-spring hover:scale-[1.03] active:scale-[0.97]"
          style={{
            height: 52,
            padding: "0 24px 0 20px",
            borderRadius: 10,
            background: "#0A0018",
            border: "1px solid rgba(142,5,194,0.28)",
            color: "#F0E8FF",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            boxShadow:
              "0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Amber square accent */}
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: "#F59E0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              color: "#000",
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            ↗
          </span>
          {t.marquee.cta}
        </a>
      </div>
    </section>
  );
}
