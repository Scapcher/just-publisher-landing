"use client";

import { useInView } from "@/hooks/useInView";
import { content } from "@/lib/content";

export function CTA() {
  const { cta } = content;
  const { ref, inView } = useInView();

  const appLetters = ["B", "G", "P", "L", "T", "D", "S", "R"];

  return (
    <section className="px-[clamp(20px,5vw,48px)]">
      <div className="max-w-container mx-auto">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 640ms cubic-bezier(0.22,1,0.36,1), transform 640ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            className="relative rounded-panel overflow-hidden noise-overlay"
            style={{
              background: "#3E065F",
              minHeight: 360,
            }}
          >
            {/* Dot grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(240,232,255,0.12) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Glow orb top-right */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                width: 400,
                height: 400,
                right: -80,
                top: -80,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(142,5,194,0.35) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            {/* Decorative app icons */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none overflow-hidden"
              style={{ width: "40%", paddingRight: "clamp(24px,4vw,64px)" }}
            >
              <div className="flex flex-col gap-4 opacity-[0.10]">
                <div className="flex gap-4">
                  {appLetters.slice(0, 4).map((letter, i) => (
                    <div
                      key={letter}
                      style={{
                        width: 72, height: 72, borderRadius: 18,
                        background: "#F0E8FF", display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: 24, fontWeight: 800,
                        color: "#3E065F", flexShrink: 0,
                        transform: `translateY(${i % 2 === 0 ? "-8px" : "8px"})`,
                      }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {appLetters.slice(4).map((letter, i) => (
                    <div
                      key={letter}
                      style={{
                        width: 72, height: 72, borderRadius: 18,
                        background: "#F0E8FF", display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: 24, fontWeight: 800,
                        color: "#3E065F", flexShrink: 0,
                        transform: `translateY(${i % 2 === 0 ? "8px" : "-8px"})`,
                      }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-between gap-10 p-10 lg:p-16 h-full">
              <div className="flex flex-col gap-5 max-w-[560px]">
                <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(240,232,255,0.5)" }}>
                  Ready to grow
                </span>
                <h2
                  className="text-ink"
                  style={{ fontSize: "clamp(40px,5.5vw,80px)", fontWeight: 800, letterSpacing: "-0.038em", lineHeight: 0.92 }}
                >
                  {cta.headline}
                </h2>
                <p style={{ color: "rgba(240,232,255,0.60)", fontSize: "clamp(15px,1.4vw,17px)", lineHeight: 1.58, letterSpacing: "-0.005em" }}>
                  {cta.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={cta.cta.href}
                  className="inline-flex items-center gap-2.5 h-[56px] px-8 rounded-btn font-bold text-ink transition-all duration-200 ease-spring hover:scale-[1.02] active:scale-[0.98] group"
                  style={{
                    fontSize: 16,
                    background: "#000000",
                    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {cta.cta.label}
                  <span aria-hidden="true" className="transition-transform duration-160 ease-spring group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="mailto:hello@justpublisher.com"
                  style={{ color: "rgba(240,232,255,0.55)", fontSize: 14, fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 4, transition: "color 160ms" }}
                  className="hover:!text-ink"
                >
                  Or email directly →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
