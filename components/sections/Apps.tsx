"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { content } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AppStoreIcon } from "@/components/icons/AppStore";
import { PlayStoreIcon } from "@/components/icons/PlayStore";
import { cn } from "@/lib/utils";

// ─── Phone mockup ──────────────────────────────────────────────────────────────

function PhoneMockup({
  accent,
  width = 200,
  height = 400,
  style,
}: {
  accent: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}) {
  const scale = width / 200;
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 28 * scale,
        border: "1.5px solid rgba(26,26,18,0.08)",
        background: "#FFFDF4",
        boxShadow: "0 2px 4px rgba(26,26,18,0.04), 0 16px 40px rgba(26,26,18,0.09)",
        overflow: "hidden",
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          height: 10 * scale,
          background: "#E7E1B1",
          margin: `${16 * scale}px ${18 * scale}px 0`,
          borderRadius: 3,
        }}
      />
      <div style={{ padding: `${12 * scale}px ${18 * scale}px 0` }}>
        <div
          style={{
            height: 6 * scale,
            width: "52%",
            background: "#1A1A12",
            borderRadius: 3,
            marginBottom: 6 * scale,
          }}
        />
        <div style={{ height: 4 * scale, width: "28%", background: "#6B6A55", borderRadius: 2 }} />
      </div>
      <div
        style={{
          margin: `${14 * scale}px ${14 * scale}px 0`,
          background: accent,
          borderRadius: 16 * scale,
          padding: `${12 * scale}px ${16 * scale}px`,
        }}
      >
        <div
          style={{
            height: 4 * scale,
            width: "44%",
            background: "rgba(255,253,244,0.4)",
            borderRadius: 2,
            marginBottom: 10 * scale,
          }}
        />
        <div
          style={{
            height: 22 * scale,
            width: "68%",
            background: "rgba(255,253,244,0.92)",
            borderRadius: 5 * scale,
            marginBottom: 8 * scale,
          }}
        />
        <div
          style={{
            height: 3 * scale,
            width: "52%",
            background: "rgba(255,253,244,0.38)",
            borderRadius: 2,
          }}
        />
      </div>
      {[72, 52, 68, 42, 60, 48].map((w, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9 * scale,
            padding: `${10 * scale}px ${14 * scale}px 0`,
          }}
        >
          <div
            style={{
              width: 24 * scale,
              height: 24 * scale,
              borderRadius: 8 * scale,
              background: "#E7E1B1",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                height: 4 * scale,
                background: "#1A1A12",
                borderRadius: 2,
                marginBottom: 4 * scale,
                width: `${w}%`,
              }}
            />
            <div
              style={{
                height: 3 * scale,
                background: "#6B6A55",
                borderRadius: 2,
                width: `${Math.max(w - 22, 10)}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Stars ─────────────────────────────────────────────────────────────────────

function Stars() {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#B5872C" aria-hidden="true">
          <path d="M6 1l1.4 4H11L8 7.5l1.1 3.5L6 9l-3.1 2L4 7.5 1 5h3.6z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Stat cell ─────────────────────────────────────────────────────────────────

function StatCell({
  label,
  value,
  top,
}: {
  label?: string;
  value: React.ReactNode;
  top?: React.ReactNode;
}) {
  return (
    <div style={{ flexShrink: 0 }}>
      {top ?? (label ? (
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#6B6A55",
            textTransform: "uppercase",
            letterSpacing: "0.09em",
            marginBottom: 8,
            lineHeight: 1,
          }}
        >
          {label}
        </p>
      ) : null)}
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>{value}</div>
    </div>
  );
}

function StatDivider() {
  return (
    <div
      style={{ width: 1, background: "#E7E1B1", alignSelf: "stretch", margin: "0 16px" }}
      aria-hidden="true"
    />
  );
}

// ─── App item type ──────────────────────────────────────────────────────────────

interface AppItem {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  appStoreRating: number;
  playStoreRating: number;
  ratingCount: string;
  ageRating: string;
  bg: string;
  initial: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

// ─── Panel ─────────────────────────────────────────────────────────────────────

function AppPanel({ app, index }: { app: AppItem; index: number }) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const reversed = index % 2 === 1;

  // Hover spread values for phone stack
  const midSpread = hovered ? 6 : 0;
  const backSpread = hovered ? 12 : 0;

  // ── Left/right content column ─────────────────────────────────────────────
  const contentCol = (
    <div
      className="flex flex-col min-[900px]:flex-1"
      style={{
        // On mobile use even padding; on desktop push outer edge
        padding: "clamp(32px,5vw,88px) clamp(24px,4vw,56px)",
      }}
    >
      {/* App icon */}
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: 22,
          background: app.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFDF4",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          flexShrink: 0,
          boxShadow:
            "0 1px 2px rgba(26,26,18,0.06), 0 6px 16px rgba(26,26,18,0.10), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        {app.initial}
      </div>

      <div style={{ height: 40 }} />

      {/* App name */}
      <h3
        className="text-ink"
        style={{
          fontSize: "clamp(48px,5vw,68px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 0.9,
        }}
      >
        {app.name}
      </h3>

      {/* Subtitle — bold, single line with numerical result */}
      <p
        className="text-ink"
        style={{
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
          marginTop: 14,
        }}
      >
        {app.subtitle}
      </p>

      {/* Description — what JustPublisher did */}
      <p
        className="text-muted"
        style={{
          fontSize: 16,
          lineHeight: 1.68,
          marginTop: 14,
          maxWidth: 560,
          letterSpacing: "-0.003em",
        }}
      >
        {app.description}
      </p>

      <div style={{ height: 40 }} />

      {/* Stats strip */}
      <div
        className="flex-wrap min-[500px]:flex-nowrap"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <StatCell
          top={<Stars />}
          value={
            <>
              <AppStoreIcon size={18} className="text-ink" />
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#1A1A12",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {app.appStoreRating}
              </span>
            </>
          }
        />

        <StatDivider />

        <StatCell
          top={<Stars />}
          value={
            <>
              <PlayStoreIcon size={18} className="text-ink" />
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#1A1A12",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {app.playStoreRating}
              </span>
            </>
          }
        />

        <StatDivider />

        <StatCell
          label="Age"
          value={
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#1A1A12",
              }}
            >
              {app.ageRating}
            </span>
          }
        />

        <StatDivider />

        <StatCell
          label="Ratings"
          value={
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#1A1A12",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {app.ratingCount}
            </span>
          }
        />
      </div>

      <div style={{ height: 32 }} />

      {/* CTA */}
      <a
        href={app.appStoreUrl}
        className="inline-flex items-center gap-2 rounded-btn bg-forest text-paper font-semibold self-start"
        style={{
          height: 44,
          paddingLeft: 22,
          paddingRight: 22,
          fontSize: 15,
          letterSpacing: "-0.01em",
          textDecoration: "none",
          boxShadow: "0 1px 2px rgba(26,26,18,0.04), 0 4px 12px rgba(48,109,41,0.14)",
          whiteSpace: "nowrap",
        }}
        aria-label={`View ${app.name} on App Store`}
      >
        View {app.name}
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </a>
    </div>
  );

  // ── Visual column ─────────────────────────────────────────────────────────
  const visualCol = (
    <div
      className="relative hidden min-[900px]:block"
      style={{ flex: "0 0 44%", minHeight: 480 }}
    >
      {/*
       * Stack: 3 phones, front is leftmost (z:3), back is rightmost (z:1).
       * For normal cards: stack anchored right, fans rightward past panel edge.
       * For reversed cards: stack anchored left, fans leftward past panel edge.
       * Panel overflow:hidden clips the portion past the edge.
       *
       * Phone: 200×400px. Offsets: 32px per step.
       * Stack container: 264px wide (200 + 32 + 32).
       * Positioned -48px past the outer edge → back phone clips ~48px.
       */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          ...(reversed ? { left: -60 } : { right: -60 }),
          width: 330,
          height: 560,
          pointerEvents: "none",
        }}
      >
        {/* Back phone */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            ...(reversed ? { right: 80 } : { left: 80 }),
            zIndex: 1,
            opacity: 0.42,
            transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)",
            transform: `translateX(${reversed ? -backSpread : backSpread}px)`,
          }}
        >
          <PhoneMockup accent={app.bg} width={250} height={500} />
        </div>

        {/* Mid phone */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            ...(reversed ? { right: 40 } : { left: 40 }),
            zIndex: 2,
            opacity: 0.68,
            transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)",
            transform: `translateX(${reversed ? -midSpread : midSpread}px)`,
          }}
        >
          <PhoneMockup accent={app.bg} width={250} height={500} />
        </div>

        {/* Front phone */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            ...(reversed ? { right: 0 } : { left: 0 }),
            zIndex: 3,
          }}
        >
          <PhoneMockup accent={app.bg} width={250} height={500} />
        </div>
      </div>
    </div>
  );

  // ── Mobile phone cluster (visible below 900px) ────────────────────────────
  const mobilePhones = (
    <div
      className="flex min-[900px]:hidden justify-center items-end overflow-hidden"
      style={{ height: 260, marginTop: 8 }}
    >
      <div style={{ position: "relative", zIndex: 3, flexShrink: 0 }}>
        <PhoneMockup accent={app.bg} width={140} height={280} />
      </div>
      <div style={{ position: "relative", zIndex: 2, marginLeft: -104, flexShrink: 0, opacity: 0.65 }}>
        <PhoneMockup accent={app.bg} width={140} height={280} />
      </div>
      <div style={{ position: "relative", zIndex: 1, marginLeft: -104, flexShrink: 0, opacity: 0.38 }}>
        <PhoneMockup accent={app.bg} width={140} height={280} />
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition:
          "opacity 520ms cubic-bezier(0.22,1,0.36,1), transform 520ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <article
        className="relative bg-paper overflow-hidden"
        style={{
          borderRadius: 36,
          border: "1px solid rgba(231,225,177,0.6)",
          boxShadow: hovered
            ? "0 4px 8px rgba(26,26,18,0.05), 0 24px 48px rgba(26,26,18,0.10), inset 0 1px 0 rgba(255,255,255,0.6)"
            : "0 2px 4px rgba(26,26,18,0.04), 0 12px 28px rgba(26,26,18,0.07), inset 0 1px 0 rgba(255,255,255,0.6)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition:
            "box-shadow 280ms cubic-bezier(0.22,1,0.36,1), transform 280ms cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={app.name}
      >
        {/* Desktop two-column row — flex-row-reverse swaps visual/content sides */}
        <div
          className={cn(
            "flex flex-col",
            reversed ? "min-[900px]:flex-row-reverse" : "min-[900px]:flex-row"
          )}
        >
          {contentCol}
          {visualCol}
        </div>

        {/* Mobile phone cluster renders below content */}
        {mobilePhones}
      </article>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function Apps() {
  const { apps } = content;

  return (
    <section id="apps" className="px-[clamp(20px,5vw,48px)]" aria-labelledby="apps-heading">
      <div className="max-w-container mx-auto">
        <Eyebrow label={apps.eyebrow} />
        <h2
          id="apps-heading"
          className="text-optical mb-12"
          style={{
            fontSize: "clamp(38px,5vw,76px)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 0.95,
          }}
        >
          {apps.title}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {apps.items.map((app, i) => (
            <AppPanel key={app.slug} app={app as AppItem} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
