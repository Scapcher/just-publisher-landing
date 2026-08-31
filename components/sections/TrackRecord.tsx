"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { content } from "@/lib/content";

function Counter({
  target,
  prefix,
  suffix,
  label,
  index,
}: {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  index: number;
}) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    const delay = index * 140;
    const duration = 1600;
    let raf: number;
    let timer: ReturnType<typeof setTimeout>;

    timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setValue(Math.round(target * eased));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [inView, target, index]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 700ms ${index * 140}ms cubic-bezier(0.22,1,0.36,1), transform 700ms ${index * 140}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {/* Glowing number */}
      <div className="relative select-none">
        {/* Glow bloom behind */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            fontSize: "clamp(56px, 7.5vw, 120px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.88,
            color: "#8E05C2",
            filter: "blur(18px)",
            opacity: 0.55,
            userSelect: "none",
          }}
        >
          {prefix}{value}{suffix}
        </div>

        {/* Gradient text */}
        <div
          className="relative tabular-nums"
          style={{
            fontSize: "clamp(56px, 7.5vw, 120px)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.88,
            background:
              "linear-gradient(160deg, #C47EFF 0%, #F0E8FF 45%, #9B30D0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {prefix}{value}{suffix}
        </div>
      </div>

      {/* Label */}
      <p
        className="text-center"
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "#9080A8",
        }}
      >
        {label}
      </p>
    </div>
  );
}

export function TrackRecord() {
  const { trackRecord } = content;
  const { ref: panelRef, inView: panelInView } = useInView({ threshold: 0.15 });
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      className="px-[clamp(20px,5vw,48px)]"
      aria-labelledby="track-record-heading"
    >
      <div className="max-w-container mx-auto">

        {/* Eyebrow */}
        <div
          ref={headRef}
          className="flex items-center gap-4 mb-10"
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? "none" : "translateY(16px)",
            transition: "opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#9080A8",
              whiteSpace: "nowrap",
            }}
          >
            {trackRecord.eyebrow}
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(142,5,194,0.4), transparent)",
            }}
          />
        </div>

        {/* Stats panel */}
        <div
          ref={panelRef}
          className="relative rounded-panel overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #0E0020 0%, #0A0018 60%, #100025 100%)",
            border: "1px solid rgba(142,5,194,0.2)",
            boxShadow:
              "0 0 0 1px rgba(62,6,95,0.25), 0 32px 80px rgba(62,6,95,0.4), 0 4px 24px rgba(0,0,0,0.6)",
            opacity: panelInView ? 1 : 0,
            transform: panelInView ? "none" : "translateY(32px)",
            transition:
              "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Top glowing border */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(142,5,194,0.7) 25%, rgba(200,140,255,0.5) 50%, rgba(142,5,194,0.7) 75%, transparent 100%)",
            }}
          />

          {/* Ambient glow above */}
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              top: -80,
              left: "50%",
              transform: "translateX(-50%)",
              width: 700,
              height: 280,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(142,5,194,0.22) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          {/* Fine dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(240,232,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Metrics */}
          <div className="relative grid grid-cols-1 md:grid-cols-3">
            {trackRecord.metrics.map((metric, i) => (
              <div
                key={metric.label}
                className="relative flex flex-col items-center justify-center py-14 px-8 md:py-16"
              >
                {/* Vertical divider (desktop) */}
                {i > 0 && (
                  <div
                    className="hidden md:block absolute left-0 top-8 bottom-8 w-px pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(142,5,194,0.3) 30%, rgba(142,5,194,0.3) 70%, transparent)",
                    }}
                  />
                )}

                {/* Horizontal divider (mobile) */}
                {i > 0 && (
                  <div
                    className="md:hidden absolute top-0 left-8 right-8 h-px pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, rgba(142,5,194,0.3) 30%, rgba(142,5,194,0.3) 70%, transparent)",
                    }}
                  />
                )}

                <Counter
                  target={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  label={metric.label}
                  index={i}
                />
              </div>
            ))}
          </div>

          {/* Bottom glow footer bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(142,5,194,0.2) 50%, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
