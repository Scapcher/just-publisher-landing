"use client";

import { useInView } from "@/hooks/useInView";
import { useLocale } from "@/lib/i18n/context";

export function CTA() {
  const { t } = useLocale();
  const { cta } = t;
  const { ref, inView } = useInView();

  return (
    <section className="px-[clamp(20px,5vw,48px)]">
      <div className="max-w-container mx-auto">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(36px)",
            transition:
              "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            className="relative rounded-panel overflow-hidden noise-overlay"
            style={{
              background: "#060010",
              minHeight: 440,
              border: "1px solid rgba(142,5,194,0.18)",
              boxShadow:
                "0 0 0 1px rgba(62,6,95,0.2), 0 40px 120px rgba(62,6,95,0.55), 0 8px 32px rgba(0,0,0,0.7)",
            }}
          >
            {/* Top glowing border */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(142,5,194,0.8) 25%, rgba(210,160,255,0.6) 50%, rgba(142,5,194,0.8) 75%, transparent 100%)",
              }}
            />

            {/* Central spotlight from top */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top: -120,
                left: "50%",
                transform: "translateX(-50%)",
                width: 900,
                height: 500,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(142,5,194,0.28) 0%, rgba(62,6,95,0.12) 40%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            {/* Left edge glow */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top: "20%",
                left: -60,
                width: 200,
                height: "60%",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(112,11,151,0.18) 0%, transparent 70%)",
                filter: "blur(48px)",
              }}
            />

            {/* Right edge glow */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top: "20%",
                right: -60,
                width: 200,
                height: "60%",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(112,11,151,0.18) 0%, transparent 70%)",
                filter: "blur(48px)",
              }}
            />

            {/* Fine grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(240,232,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,232,255,0.03) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Centered content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 py-20 px-8 min-h-[440px]">
              {/* Eyebrow */}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#700B97",
                }}
              >
                {cta.eyebrow}
              </span>

              {/* Headline */}
              <h2
                id="cta-heading"
                className="text-ink"
                style={{
                  fontSize: "clamp(40px, 5.5vw, 84px)",
                  fontWeight: 900,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.92,
                  maxWidth: "16ch",
                }}
              >
                {cta.headline}
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  color: "rgba(240,232,255,0.52)",
                  fontSize: "clamp(15px, 1.3vw, 17px)",
                  lineHeight: 1.65,
                  letterSpacing: "-0.005em",
                  maxWidth: "44ch",
                }}
              >
                {cta.subtitle}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <a
                  href={cta.cta.href}
                  className="inline-flex items-center gap-2.5 h-14 px-9 rounded-btn font-bold text-ink transition-all duration-200 ease-spring hover:scale-[1.03] hover:brightness-110 active:scale-[0.97] group"
                  style={{
                    fontSize: 15,
                    letterSpacing: "-0.01em",
                    background:
                      "linear-gradient(135deg, #6009A0 0%, #8E05C2 60%, #A020D8 100%)",
                    boxShadow:
                      "0 0 0 1px rgba(142,5,194,0.5), 0 0 32px rgba(142,5,194,0.35), 0 4px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {cta.cta.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-160 ease-spring group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                <a
                  href="mailto:hello@justpublisher.com"
                  className="hover:!text-ink"
                  style={{
                    color: "rgba(240,232,255,0.45)",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    transition: "color 160ms",
                  }}
                >
                  {cta.emailDirect}
                </a>
              </div>
            </div>

            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(142,5,194,0.15) 50%, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
