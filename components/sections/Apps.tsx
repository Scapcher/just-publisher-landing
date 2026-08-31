"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { type PortfolioApp } from "@/lib/content";
import { useLocale } from "@/lib/i18n/context";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AppStoreIcon } from "@/components/icons/AppStore";
import { PlayStoreIcon } from "@/components/icons/PlayStore";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AppStoreBadge } from "@/components/icons/AppStoreBadge";
import { GooglePlayBadge } from "@/components/icons/GooglePlayBadge";

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
        border: "1px solid rgba(62,6,95,0.35)",
        background: "#0A0018",
        boxShadow: "0 2px 6px rgba(0,0,0,0.6), 0 16px 40px rgba(62,6,95,0.3)",
        overflow: "hidden",
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          height: 10 * scale,
          background: "#1E0038",
          margin: `${16 * scale}px ${18 * scale}px 0`,
          borderRadius: 3,
        }}
      />
      <div style={{ padding: `${12 * scale}px ${18 * scale}px 0` }}>
        <div
          style={{
            height: 6 * scale,
            width: "52%",
            background: "#F0E8FF",
            borderRadius: 3,
            marginBottom: 6 * scale,
            opacity: 0.7,
          }}
        />
        <div style={{ height: 4 * scale, width: "28%", background: "#9080A8", borderRadius: 2 }} />
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
              background: "#1E0038",
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                height: 4 * scale,
                background: "#F0E8FF",
                borderRadius: 2,
                marginBottom: 4 * scale,
                width: `${w}%`,
                opacity: 0.65,
              }}
            />
            <div
              style={{
                height: 3 * scale,
                background: "#9080A8",
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

// ─── Phone frame (gerçek screenshot'lar için) ──────────────────────────────────

function PhoneFrame({
  width = 200,
  height = 400,
  accent,
  children,
}: {
  width?: number;
  height?: number;
  accent: string;
  children?: React.ReactNode;
}) {
  const scale = width / 200;
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 28 * scale,
        border: "1px solid rgba(62,6,95,0.3)",
        background: accent,
        boxShadow: "0 2px 6px rgba(0,0,0,0.5), 0 16px 40px rgba(62,6,95,0.3)",
        overflow: "hidden",
        flexShrink: 0,
        position: "relative",
      }}
    >
      {children}
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
            color: "#9080A8",
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
      style={{ width: 1, background: "#1E0038", alignSelf: "stretch", margin: "0 16px" }}
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
  iconUrl?: string | null;
  screenshot1Url?: string | null;
  screenshot2Url?: string | null;
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
          color: "#F0E8FF",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          flexShrink: 0,
          overflow: "hidden",
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.5), 0 6px 20px rgba(62,6,95,0.35), inset 0 1px 0 rgba(142,5,194,0.12)",
        }}
      >
        {app.iconUrl ? (
          <Image
            src={app.iconUrl}
            alt={`${app.name} icon`}
            width={90}
            height={90}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            unoptimized
          />
        ) : (
          app.initial
        )}
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
                  color: "#F0E8FF",
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
                  color: "#F0E8FF",
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
                color: "#F0E8FF",
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
                color: "#F0E8FF",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {app.ratingCount}
            </span>
          }
        />
      </div>

      <div style={{ height: 32 }} />

      {/* CTA — store badges */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Download ${app.name} on the App Store`}
          style={{
            display: "inline-block",
            textDecoration: "none",
            transition: "opacity 200ms, transform 200ms cubic-bezier(0.22,1,0.36,1)",
            opacity: hovered ? 0.82 : 1,
            transform: hovered ? "translateY(-1px)" : "translateY(0)",
          }}
        >
          <AppStoreBadge height={44} />
        </a>
        <a
          href={app.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get ${app.name} on Google Play`}
          style={{
            display: "inline-block",
            textDecoration: "none",
            transition: "opacity 200ms, transform 200ms cubic-bezier(0.22,1,0.36,1)",
            opacity: hovered ? 0.82 : 1,
            transform: hovered ? "translateY(-1px)" : "translateY(0)",
          }}
        >
          <GooglePlayBadge height={44} />
        </a>
      </div>
    </div>
  );

  const hasScreenshots = app.screenshot1Url || app.screenshot2Url;

  // ── Visual column ─────────────────────────────────────────────────────────
  const visualCol = (
    <div
      className="relative hidden min-[900px]:block"
      style={{ flex: "0 0 48%", minHeight: 520 }}
    >
      {hasScreenshots ? (
        /* ── Gerçek screenshot'lar: yan yana, kart yüksekliğini dolduruyor ── */
        <div
          style={{
            position: "absolute",
            bottom: -28,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 12,
            pointerEvents: "none",
          }}
        >
          {/* Screenshot 1 */}
          <div
            style={{
              transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)",
              transform: `translateY(${hovered ? -10 : 0}px)`,
              flexShrink: 0,
            }}
          >
            <PhoneFrame width={241} height={580} accent={app.bg}>
              {app.screenshot1Url && (
                <Image src={app.screenshot1Url} alt={`${app.name} screenshot 1`}
                  fill style={{ objectFit: "cover" }} unoptimized />
              )}
            </PhoneFrame>
          </div>

          {/* Screenshot 2 — 36px yukarıda */}
          <div
            style={{
              transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)",
              transform: `translateY(${hovered ? -46 : -36}px)`,
              flexShrink: 0,
            }}
          >
            <PhoneFrame width={241} height={580} accent={app.bg}>
              {app.screenshot2Url && (
                <Image src={app.screenshot2Url} alt={`${app.name} screenshot 2`}
                  fill style={{ objectFit: "cover" }} unoptimized />
              )}
            </PhoneFrame>
          </div>
        </div>
      ) : (
        /* ── Placeholder mockup'lar ── */
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
          <div style={{ position: "absolute", bottom: 80, ...(reversed ? { right: 80 } : { left: 80 }), zIndex: 1, opacity: 0.42, transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)", transform: `translateX(${reversed ? -backSpread : backSpread}px)` }}>
            <PhoneMockup accent={app.bg} width={250} height={500} />
          </div>
          <div style={{ position: "absolute", bottom: 80, ...(reversed ? { right: 40 } : { left: 40 }), zIndex: 2, opacity: 0.68, transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)", transform: `translateX(${reversed ? -midSpread : midSpread}px)` }}>
            <PhoneMockup accent={app.bg} width={250} height={500} />
          </div>
          <div style={{ position: "absolute", bottom: 80, ...(reversed ? { right: 0 } : { left: 0 }), zIndex: 3 }}>
            <PhoneMockup accent={app.bg} width={250} height={500} />
          </div>
        </div>
      )}
    </div>
  );

  // ── Mobile phone cluster (visible below 900px) ────────────────────────────
  const mobilePhones = (
    <div
      className="flex min-[900px]:hidden justify-center items-end overflow-hidden"
      style={{ height: 280, marginTop: 8, gap: 10 }}
    >
      {hasScreenshots ? (
        <>
          <div style={{ flexShrink: 0 }}>
            <PhoneFrame width={150} height={280} accent={app.bg}>
              {app.screenshot1Url && (
                <Image src={app.screenshot1Url} alt={`${app.name} screenshot 1`}
                  fill style={{ objectFit: "cover" }} unoptimized />
              )}
            </PhoneFrame>
          </div>
          <div style={{ flexShrink: 0, transform: "translateY(-20px)" }}>
            <PhoneFrame width={150} height={280} accent={app.bg}>
              {app.screenshot2Url && (
                <Image src={app.screenshot2Url} alt={`${app.name} screenshot 2`}
                  fill style={{ objectFit: "cover" }} unoptimized />
              )}
            </PhoneFrame>
          </div>
        </>
      ) : (
        <>
          <div style={{ position: "relative", zIndex: 3, flexShrink: 0 }}>
            <PhoneMockup accent={app.bg} width={140} height={280} />
          </div>
          <div style={{ position: "relative", zIndex: 2, marginLeft: -104, flexShrink: 0, opacity: 0.65 }}>
            <PhoneMockup accent={app.bg} width={140} height={280} />
          </div>
          <div style={{ position: "relative", zIndex: 1, marginLeft: -104, flexShrink: 0, opacity: 0.38 }}>
            <PhoneMockup accent={app.bg} width={140} height={280} />
          </div>
        </>
      )}
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
          border: hovered ? "1px solid rgba(112,11,151,0.35)" : "1px solid rgba(62,6,95,0.4)",
          boxShadow: hovered
            ? "0 4px 12px rgba(0,0,0,0.7), 0 24px 56px rgba(62,6,95,0.55), inset 0 1px 0 rgba(142,5,194,0.12)"
            : "0 2px 6px rgba(0,0,0,0.5), 0 12px 32px rgba(62,6,95,0.3), inset 0 1px 0 rgba(142,5,194,0.07)",
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

export function Apps({ items }: { items: PortfolioApp[] }) {
  const { t } = useLocale();
  const { apps } = t;

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
          {items.map((app, i) => (
            <AppPanel key={app.slug} app={app as AppItem} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
