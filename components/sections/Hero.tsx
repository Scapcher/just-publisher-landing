"use client";

import { useEffect, useRef } from "react";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/Button";

function PhoneMockup({
  style,
  accent,
}: {
  style?: React.CSSProperties;
  accent: string;
}) {
  return (
    <div
      style={{
        width: 140,
        height: 280,
        borderRadius: 24,
        border: "1.5px solid rgba(26,26,18,0.12)",
        background: "#FFFDF4",
        boxShadow:
          "0 4px 8px rgba(26,26,18,0.05), 0 24px 48px rgba(26,26,18,0.10)",
        overflow: "hidden",
        position: "absolute",
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Status bar */}
      <div
        style={{
          height: 10,
          background: "#E7E1B1",
          margin: "12px 14px 0",
          borderRadius: 3,
        }}
      />
      {/* Hero bar */}
      <div style={{ padding: "10px 14px 0" }}>
        <div
          style={{
            height: 7,
            width: "65%",
            background: "#1A1A12",
            borderRadius: 3,
            marginBottom: 5,
          }}
        />
        <div
          style={{
            height: 5,
            width: "40%",
            background: "#6B6A55",
            borderRadius: 3,
          }}
        />
      </div>
      {/* Accent card */}
      <div
        style={{
          margin: "12px 12px 0",
          background: accent,
          borderRadius: 12,
          padding: "10px 12px",
        }}
      >
        <div
          style={{
            height: 5,
            width: "50%",
            background: "rgba(255,253,244,0.5)",
            borderRadius: 2,
            marginBottom: 6,
          }}
        />
        <div
          style={{
            height: 16,
            width: "75%",
            background: "rgba(255,253,244,0.9)",
            borderRadius: 3,
          }}
        />
      </div>
      {/* List rows */}
      {[80, 60, 70, 50].map((w, i) => (
        <div
          key={i}
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px 0" }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 7,
              background: "#E7E1B1",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                height: 5,
                background: "#1A1A12",
                borderRadius: 2,
                marginBottom: 4,
                width: `${w}%`,
              }}
            />
            <div
              style={{
                height: 4,
                background: "#6B6A55",
                borderRadius: 2,
                width: `${w - 20}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MockupCluster() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.08, 40);
        el.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="glass rounded-panel shadow-elev-3"
      style={{
        position: "relative",
        width: 340,
        height: 380,
        flexShrink: 0,
      }}
    >
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
        {/* Back phone */}
        <PhoneMockup
          accent="#5C7A5E"
          style={{
            left: 16,
            top: 24,
            transform: "rotate(-8deg)",
            opacity: 0.6,
          }}
        />
        {/* Middle phone */}
        <PhoneMockup
          accent="#3D5A80"
          style={{
            left: 90,
            top: 12,
            transform: "rotate(-4deg)",
            opacity: 0.8,
          }}
        />
        {/* Front phone */}
        <PhoneMockup
          accent="#6B4F3A"
          style={{
            left: 164,
            top: 20,
            transform: "rotate(2deg)",
          }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  const { hero } = content;

  return (
    <section
      className="min-h-[85svh] flex flex-col justify-center pt-28 pb-16 px-[clamp(20px,5vw,48px)]"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-container mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          {/* Text content */}
          <div className="flex flex-col items-start max-w-[660px]">
            <span className="animate-hero-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-8 block">
              {hero.eyebrow}
            </span>
            <h1
              id="hero-heading"
              className="animate-hero-1 text-optical"
              style={{
                fontSize: "clamp(52px, 8.5vw, 132px)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 0.9,
                color: "#1A1A12",
              }}
            >
              {hero.headline}
            </h1>
            <p
              className="animate-hero-2 mt-8 text-muted"
              style={{
                fontSize: "clamp(17px, 2vw, 20px)",
                letterSpacing: "-0.005em",
                lineHeight: 1.55,
                maxWidth: "540px",
              }}
            >
              {hero.subtitle}
            </p>
            <div className="animate-hero-3 flex flex-wrap items-center gap-4 mt-10">
              <Button href={hero.cta.href} size="lg">
                {hero.cta.label}
              </Button>
              <a
                href={hero.secondary.href}
                className="text-[15px] font-medium text-ink underline underline-offset-4 hover:text-forest transition-colors duration-160 group"
              >
                {hero.secondary.label}
                <span
                  aria-hidden="true"
                  className="inline-block ml-1 transition-transform duration-160 ease-spring group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Phone mockups */}
          <div className="animate-hero-4 self-center lg:self-auto">
            <MockupCluster />
          </div>
        </div>
      </div>
    </section>
  );
}
