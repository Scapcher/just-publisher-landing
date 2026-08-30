import { content } from "@/lib/content";

export function CTA() {
  const { cta } = content;

  return (
    <section className="px-[clamp(20px,5vw,48px)]">
      <div className="max-w-container mx-auto">
        <div
          className="relative rounded-panel overflow-hidden flex flex-col items-start justify-between gap-10 p-10 lg:p-16"
          style={{ background: "#0D530E", minHeight: 320 }}
        >
          {/* Subtle app icon cluster — low opacity decorative */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 flex items-center gap-4 pr-8 pointer-events-none"
            style={{ opacity: 0.12 }}
          >
            {["P", "L", "T", "D"].map((initial, i) => (
              <div
                key={i}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  background: "#FBF5DD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#0D530E",
                  transform: `translateY(${(i % 2) * 20 - 10}px)`,
                }}
              >
                {initial}
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col gap-4">
            <h2
              className="text-canvas"
              style={{
                fontSize: "clamp(38px, 5vw, 76px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
              }}
            >
              {cta.headline}
            </h2>
            <p
              style={{
                color: "rgba(251,245,221,0.7)",
                fontSize: 17,
                lineHeight: 1.55,
                letterSpacing: "-0.005em",
              }}
            >
              {cta.subtitle}
            </p>
          </div>

          <a
            href={cta.cta.href}
            className="relative z-10 inline-flex items-center gap-2 h-[60px] px-8 rounded-btn font-semibold text-pine bg-canvas transition-all duration-200 ease-spring hover:scale-[1.02] hover:shadow-elev-2 active:scale-[0.98] group"
            style={{ fontSize: 16 }}
          >
            {cta.cta.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-160 ease-spring group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
