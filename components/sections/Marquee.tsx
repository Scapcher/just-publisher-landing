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
        color: "#F0E8FF",
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        flexShrink: 0,
        overflow: "hidden",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.6), 0 4px 16px rgba(62,6,95,0.35), inset 0 1px 0 rgba(142,5,194,0.10)",
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

function MarqueeRow({
  apps,
  animClass,
}: {
  apps: MarqueeApp[];
  animClass: string;
}) {
  const repeated = [
    ...apps, ...apps, ...apps, ...apps,
    ...apps, ...apps, ...apps, ...apps,
  ];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      <div
        className={`flex gap-5 w-max ${animClass} hover:[animation-play-state:paused]`}
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
  if (!apps.length) return null;

  const third = Math.ceil(apps.length / 3);
  const row1 = apps.slice(0, third);
  const row2 = apps.slice(third, third * 2);
  const row3 = apps.slice(third * 2);

  const fill1 = row1.length ? row1 : apps;
  const fill2 = row2.length ? row2 : apps;
  const fill3 = row3.length ? row3 : apps;

  return (
    <section aria-label="Published apps" className="w-full overflow-x-hidden">
      <p className="text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-6">
        Trusted by 20+ studios
      </p>
      <div className="flex flex-col gap-4">
        <MarqueeRow apps={fill1} animClass="animate-marquee" />
        <MarqueeRow apps={fill2} animClass="animate-marquee-reverse" />
        <MarqueeRow apps={fill3} animClass="animate-marquee-alt" />
      </div>
    </section>
  );
}
