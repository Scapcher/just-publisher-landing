"use client";

import Image from "next/image";
import type { MarqueeApp } from "@/lib/content";

function AppIcon({ name, bg, initial, iconUrl }: MarqueeApp) {
  return (
    <div
      title={name}
      style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFDF4",
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        flexShrink: 0,
        overflow: "hidden",
        boxShadow:
          "0 1px 2px rgba(26,26,18,0.04), 0 4px 12px rgba(26,26,18,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      {iconUrl ? (
        <Image
          src={iconUrl}
          alt={name}
          width={56}
          height={56}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          unoptimized
        />
      ) : (
        initial
      )}
    </div>
  );
}

export function Marquee({ apps }: { apps: MarqueeApp[] }) {
  const repeated = [...apps, ...apps, ...apps, ...apps, ...apps, ...apps, ...apps, ...apps];

  return (
    <section aria-label="Published apps" className="w-full overflow-x-hidden">
      <p className="text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-6">
        Trusted by 20+ studios
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div
          className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {repeated.map((app, i) => (
            <AppIcon key={`${app.name}-${i}`} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}
