"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n/context";
import { Button } from "@/components/ui/Button";

// ─── Background — purple orbs + grid + noise ───────────────────────────────────

function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none noise-overlay"
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(112,11,151,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.12,
        }}
      />

      {/* Orb 1 — large bright purple, top-right */}
      <div
        className="animate-orb-1 absolute"
        style={{
          width: 820,
          height: 820,
          right: "-10%",
          top: "-25%",
          borderRadius: "50%",
          background: "radial-gradient(circle at 40% 40%, rgba(142,5,194,0.30) 0%, rgba(112,11,151,0.12) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orb 2 — dark pine, bottom-left */}
      <div
        className="animate-orb-2 absolute"
        style={{
          width: 600,
          height: 600,
          left: "-8%",
          bottom: "-18%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62,6,95,0.55) 0%, rgba(62,6,95,0.20) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Orb 3 — medium purple, center-left */}
      <div
        className="animate-orb-3 absolute"
        style={{
          width: 380,
          height: 380,
          left: "18%",
          top: "30%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(112,11,151,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orb 4 — bright accent, far right */}
      <div
        className="absolute animate-orb-1"
        style={{
          width: 260,
          height: 260,
          right: "6%",
          bottom: "22%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(142,5,194,0.20) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "8s",
        }}
      />
    </div>
  );
}

// ─── Phone mockup ──────────────────────────────────────────────────────────────

function PhoneMockup({ style, accent }: { style?: React.CSSProperties; accent: string }) {
  return (
    <div
      style={{
        width: 148,
        height: 292,
        borderRadius: 26,
        border: "1px solid rgba(112,11,151,0.18)",
        background: "#0A0018",
        boxShadow: "0 4px 8px rgba(0,0,0,0.6), 0 20px 40px rgba(62,6,95,0.3)",
        overflow: "hidden",
        position: "absolute",
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Status bar */}
      <div style={{ height: 9, background: "#1E0038", margin: "14px 14px 0", borderRadius: 3 }} />
      {/* Title lines */}
      <div style={{ padding: "10px 14px 0" }}>
        <div style={{ height: 6, width: "62%", background: "#F0E8FF", borderRadius: 3, marginBottom: 5, opacity: 0.7 }} />
        <div style={{ height: 4, width: "38%", background: "#9080A8", borderRadius: 3 }} />
      </div>
      {/* Accent card */}
      <div style={{ margin: "12px 11px 0", background: accent, borderRadius: 13, padding: "10px 12px" }}>
        <div style={{ height: 4, width: "46%", background: "rgba(240,232,255,0.35)", borderRadius: 2, marginBottom: 8 }} />
        <div style={{ height: 18, width: "70%", background: "rgba(240,232,255,0.85)", borderRadius: 4, marginBottom: 6 }} />
        <div style={{ height: 3, width: "50%", background: "rgba(240,232,255,0.25)", borderRadius: 2 }} />
      </div>
      {/* List rows */}
      {[78, 56, 68, 48].map((w, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 11px 0" }}>
          <div style={{ width: 22, height: 22, borderRadius: 7, background: "#1E0038", flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: 4, background: "#F0E8FF", borderRadius: 2, marginBottom: 4, width: `${w}%`, opacity: 0.65 }} />
            <div style={{ height: 3, background: "#9080A8", borderRadius: 2, width: `${w - 20}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Floating glass badge ──────────────────────────────────────────────────────

function FloatingBadge({
  label,
  value,
  style,
  animClass,
}: {
  label: string;
  value: string;
  style: React.CSSProperties;
  animClass?: string;
}) {
  return (
    <div
      className={`glass rounded-item shadow-elev-2 inset-light absolute z-20 ${animClass ?? "animate-float-y"}`}
      style={{
        padding: "10px 14px",
        minWidth: 110,
        ...style,
      }}
    >
      <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9080A8", marginBottom: 4 }}>
        {label}
      </p>
      <p style={{ fontSize: 19, fontWeight: 800, color: "#8E05C2", letterSpacing: "-0.025em", lineHeight: 1 }}>
        {value}
      </p>
    </div>
  );
}

// ─── Phone cluster ──────────────────────────────────────────────────────────────

function MockupCluster() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.07, 36);
        el.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative" style={{ width: 380, height: 420, flexShrink: 0 }}>
      {/* Floating badges */}
      <FloatingBadge label="Avg. Rating" value="★ 4.8" animClass="animate-float-y"          style={{ top: 4,   left: -72 }} />
      <FloatingBadge label="Revenue"     value="+$1M"  animClass="animate-float-y-delayed"   style={{ bottom: 80, right: -68 }} />

      {/* Glass card */}
      <div
        className="glass rounded-panel shadow-elev-3 inset-light"
        style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
      >
        {/* Inner purple tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(112,11,151,0.06)" }}
        />

        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
          <PhoneMockup accent="#3E065F" style={{ left: 14,  top: 28, transform: "rotate(-9deg)",   opacity: 0.45 }} />
          <PhoneMockup accent="#5A0B7A" style={{ left: 95,  top: 14, transform: "rotate(-3.5deg)", opacity: 0.70 }} />
          <PhoneMockup accent="#700B97" style={{ left: 178, top: 22, transform: "rotate(2.5deg)" }} />
        </div>
      </div>

      {/* Glow beneath */}
      <div
        className="animate-glow-pulse absolute pointer-events-none"
        style={{
          bottom: -16,
          left: "50%",
          transform: "translateX(-50%)",
          width: 260,
          height: 48,
          borderRadius: "50%",
          background: "rgba(112,11,151,0.35)",
          filter: "blur(28px)",
        }}
      />
    </div>
  );
}

// ─── Hero section ──────────────────────────────────────────────────────────────

export function Hero() {
  const { t } = useLocale();
  const { hero } = t;

  return (
    <section
      className="relative min-h-[88svh] flex flex-col justify-center pt-28 pb-20 px-[clamp(20px,5vw,48px)] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-container mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 xl:gap-24">

          {/* Text content */}
          <div className="flex flex-col items-start max-w-[680px]">
            {/* Eyebrow pill */}
            <div className="animate-hero-0 flex items-center gap-3 mb-8">
              <span
                className="inline-flex items-center gap-1.5 rounded-btn px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-forest"
                style={{ background: "rgba(112,11,151,0.12)", border: "1px solid rgba(112,11,151,0.22)" }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: 5, height: 5, borderRadius: "50%", background: "#8E05C2", display: "inline-block", flexShrink: 0 }}
                />
                {hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="animate-hero-1 text-optical text-ink"
              style={{
                fontSize: "clamp(56px, 9vw, 136px)",
                fontWeight: 800,
                letterSpacing: "-0.046em",
                lineHeight: 0.88,
              }}
            >
              {hero.headline}
            </h1>

            {/* Subtitle */}
            <p
              className="animate-hero-2 mt-8 text-muted"
              style={{ fontSize: "clamp(17px, 1.8vw, 20px)", letterSpacing: "-0.006em", lineHeight: 1.58, maxWidth: "520px" }}
            >
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="animate-hero-3 flex flex-wrap items-center gap-4 mt-10">
              <Button href={hero.cta.href} size="lg">{hero.cta.label}</Button>
              <a
                href={hero.secondary.href}
                className="text-[15px] font-medium text-muted hover:text-ink underline underline-offset-4 transition-colors duration-160 group"
              >
                {hero.secondary.label}
                <span aria-hidden="true" className="inline-block ml-1 transition-transform duration-160 ease-spring group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Trust line */}
            <p className="animate-hero-4 mt-8 text-muted" style={{ fontSize: 13, letterSpacing: "-0.002em" }}>
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#700B97", display: "inline-block", marginRight: 7, marginBottom: 1, verticalAlign: "middle" }}
              />
              {hero.trust}
            </p>
          </div>

          {/* Phone cluster */}
          <div className="animate-hero-4 self-center lg:self-auto flex-shrink-0">
            <MockupCluster />
          </div>
        </div>
      </div>
    </section>
  );
}
