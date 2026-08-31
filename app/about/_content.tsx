"use client";

import { useInView } from "@/hooks/useInView";

// ─── Shared primitives ────────────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 640ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 640ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#9080A8",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{
          background: "linear-gradient(to right, rgba(142,5,194,0.4), transparent)",
        }}
      />
    </div>
  );
}

// ─── Process step card ────────────────────────────────────────────────────────

function ProcessStep({
  num, title, body, delay,
}: {
  num: string; title: string; body: string; delay: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="h-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 620ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 620ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <div
        className="relative flex flex-col gap-5 p-7 rounded-panel h-full overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0E0020 0%, #0A0018 100%)",
          border: "1px solid rgba(142,5,194,0.18)",
          boxShadow: "0 0 0 1px rgba(62,6,95,0.15), 0 8px 32px rgba(62,6,95,0.3)",
        }}
      >
        {/* Top glow border */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(142,5,194,0.6) 40%, rgba(142,5,194,0.6) 60%, transparent)",
          }}
        />

        {/* Step number with glow */}
        <div className="relative w-fit select-none">
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: "#8E05C2",
              filter: "blur(6px)",
              opacity: 0.7,
            }}
          >
            {num}
          </div>
          <span
            style={{
              position: "relative",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.06em",
              background: "linear-gradient(135deg, #8E05C2, #C47EFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {num}
          </span>
        </div>

        <h3
          className="text-ink"
          style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15 }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: "#9080A8" }}>
          {body}
        </p>
      </div>
    </div>
  );
}

// ─── Value card ───────────────────────────────────────────────────────────────

function ValueCard({
  icon, title, body, delay,
}: {
  icon: string; title: string; body: string; delay: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.08 });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 600ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 600ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <div
        className="relative flex items-start gap-4 p-6 rounded-panel overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D001E 0%, #0A0018 100%)",
          border: "1px solid rgba(142,5,194,0.16)",
          boxShadow: "0 4px 20px rgba(62,6,95,0.25)",
        }}
      >
        {/* Left accent line */}
        <div
          className="absolute left-0 top-4 bottom-4 w-px pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(142,5,194,0.55) 30%, rgba(142,5,194,0.55) 70%, transparent)",
          }}
        />

        {/* Icon */}
        <div
          aria-hidden="true"
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "rgba(142,5,194,0.12)",
            border: "1px solid rgba(142,5,194,0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        <div className="flex flex-col gap-1.5">
          <h3
            className="text-ink"
            style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            {title}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: "#9080A8" }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function AboutContent() {
  const process = [
    { num: "01", title: "Discovery",  body: "Send us your app. We'll respond within 48 hours with honest feedback — whether we're the right fit or not." },
    { num: "02", title: "Audit",      body: "We dig into the product, analytics, market, and retention. Takes 1 to 2 weeks. No fluff, just clarity." },
    { num: "03", title: "Agreement",  body: "Transparent deal on the table before anything is signed. Your code, your users, your data — always." },
    { num: "04", title: "Growth",     body: "We run ASO, paid UA, A/B tests, and release strategy. You keep shipping features. We handle distribution." },
  ];

  const values = [
    { icon: "◆", title: "We buy potential, not traction",  body: "Most apps we've taken on had fewer than 5,000 downloads. We look for something a bit too good for the attention it's getting." },
    { icon: "◎", title: "Radical transparency",            body: "Revenue share is on the table before anything is signed. We walk you through every number. No surprises." },
    { icon: "▲", title: "You own everything",              body: "Your codebase, your users, your data. We acquire distribution rights only. If the relationship ends, you walk away whole." },
  ];

  const stats = [
    { value: "+$1M", label: "Revenue Generated" },
    { value: "10+",  label: "Apps Published" },
    { value: "20+",  label: "Studios Supported" },
  ];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "clamp(120px,14vh,180px)", paddingBottom: "clamp(80px,10vh,120px)", paddingInline: "clamp(20px,5vw,48px)" }}
        aria-labelledby="about-heading"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,232,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(240,232,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Central spotlight */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            top: -180,
            left: "40%",
            transform: "translateX(-50%)",
            width: 1000,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(142,5,194,0.22) 0%, rgba(62,6,95,0.08) 40%, transparent 70%)",
            filter: "blur(56px)",
          }}
        />

        {/* Right ambient */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            top: -80,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(112,11,151,0.14) 0%, transparent 70%)",
            filter: "blur(72px)",
          }}
        />

        <div className="max-w-container mx-auto relative z-10">
          {/* Eyebrow */}
          <Reveal>
            <div className="flex items-center gap-3 mb-8 w-fit">
              <span
                aria-hidden="true"
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#8E05C2", display: "block", flexShrink: 0 }}
              />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#700B97" }}>
                (05) About
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={60}>
            <h1
              id="about-heading"
              className="text-ink"
              style={{ fontSize: "clamp(52px, 8vw, 116px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, maxWidth: 820 }}
            >
              We back apps<br />worth believing in.
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={120}>
            <p
              style={{
                marginTop: "clamp(24px,3vh,36px)",
                fontSize: "clamp(16px,1.7vw,19px)",
                lineHeight: 1.62,
                letterSpacing: "-0.005em",
                color: "#9080A8",
                maxWidth: 540,
              }}
            >
              JustPublisher is a mobile app publishing studio. We acquire, grow, and monetize apps built by independent developers — so they can keep building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Mission + Values ──────────────────────────────────────────── */}
      <section
        style={{
          paddingInline: "clamp(20px,5vw,48px)",
          paddingBlock: "clamp(72px,10vh,130px)",
        }}
      >
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: mission text */}
          <Reveal>
            <div>
              <SectionLabel>Our model</SectionLabel>
              <h2
                className="text-ink"
                style={{ fontSize: "clamp(32px,3.5vw,54px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.93, marginBottom: 28 }}
              >
                We win when<br />you win.
              </h2>
              <div className="flex flex-col gap-5">
                <p style={{ fontSize: 17, lineHeight: 1.68, letterSpacing: "-0.005em", color: "#9080A8" }}>
                  We acquire the commercial rights to distribute and grow your app. You retain full ownership of your code, your data, and your users. Revenue is split transparently before anything is signed.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.68, letterSpacing: "-0.005em", color: "#9080A8" }}>
                  We handle the full distribution layer: App Store optimization, paid user acquisition, review management, A/B testing, and release strategy. You keep shipping.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: value cards */}
          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingInline: "clamp(20px,5vw,48px)", paddingBlock: "clamp(72px,10vh,130px)" }}
      >
        {/* Section background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: "rgba(62,6,95,0.08)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(240,232,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-container mx-auto relative z-10">
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
            <h2
              className="text-ink"
              style={{ fontSize: "clamp(36px,4.5vw,68px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.9, marginBottom: "clamp(40px,6vh,64px)" }}
            >
              Four steps,<br />zero surprises.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <ProcessStep key={step.num} num={step.num} title={step.title} body={step.body} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats panel ───────────────────────────────────────────────── */}
      <section style={{ paddingInline: "clamp(20px,5vw,48px)", paddingBlock: "clamp(72px,10vh,130px)" }}>
        <div className="max-w-container mx-auto">
          <Reveal>
            <div
              className="relative rounded-panel overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #0E0020 0%, #0A0018 60%, #100025 100%)",
                border: "1px solid rgba(142,5,194,0.2)",
                boxShadow: "0 0 0 1px rgba(62,6,95,0.2), 0 32px 80px rgba(62,6,95,0.4), 0 4px 24px rgba(0,0,0,0.6)",
              }}
            >
              {/* Top glow border */}
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                aria-hidden="true"
                style={{
                  background: "linear-gradient(to right, transparent, rgba(142,5,194,0.7) 25%, rgba(200,140,255,0.5) 50%, rgba(142,5,194,0.7) 75%, transparent)",
                }}
              />

              {/* Ambient glow */}
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
                  background: "radial-gradient(ellipse, rgba(142,5,194,0.2) 0%, transparent 70%)",
                  filter: "blur(32px)",
                }}
              />

              {/* Dot grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(240,232,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative grid grid-cols-1 md:grid-cols-3">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="relative flex flex-col items-center justify-center py-14 px-8 gap-3">
                    {/* Vertical divider */}
                    {i > 0 && (
                      <div
                        className="hidden md:block absolute left-0 top-8 bottom-8 w-px pointer-events-none"
                        aria-hidden="true"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(142,5,194,0.3) 30%, rgba(142,5,194,0.3) 70%, transparent)" }}
                      />
                    )}
                    {/* Horizontal divider mobile */}
                    {i > 0 && (
                      <div
                        className="md:hidden absolute top-0 left-8 right-8 h-px pointer-events-none"
                        aria-hidden="true"
                        style={{ background: "linear-gradient(to right, transparent, rgba(142,5,194,0.3) 30%, rgba(142,5,194,0.3) 70%, transparent)" }}
                      />
                    )}

                    {/* Number with glow bloom */}
                    <div className="relative select-none">
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute", inset: 0,
                          fontSize: "clamp(52px,7vw,104px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88,
                          color: "#8E05C2", filter: "blur(18px)", opacity: 0.52, userSelect: "none",
                        }}
                      >
                        {stat.value}
                      </div>
                      <span
                        style={{
                          position: "relative",
                          fontSize: "clamp(52px,7vw,104px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88,
                          background: "linear-gradient(160deg, #C47EFF 0%, #F0E8FF 45%, #9B30D0 100%)",
                          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>

                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#9080A8", textAlign: "center" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────────────────────── */}
      <section style={{ paddingInline: "clamp(20px,5vw,48px)", paddingBottom: "clamp(80px,12vh,140px)" }}>
        <div className="max-w-container mx-auto">
          <Reveal>
            <div
              className="relative rounded-panel overflow-hidden noise-overlay"
              style={{
                background: "#060010",
                border: "1px solid rgba(142,5,194,0.2)",
                boxShadow: "0 0 0 1px rgba(62,6,95,0.18), 0 32px 100px rgba(62,6,95,0.45), 0 4px 24px rgba(0,0,0,0.6)",
              }}
            >
              {/* Top glow border */}
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                aria-hidden="true"
                style={{ background: "linear-gradient(to right, transparent, rgba(142,5,194,0.8) 25%, rgba(210,160,255,0.55) 50%, rgba(142,5,194,0.8) 75%, transparent)" }}
              />

              {/* Spotlight */}
              <div
                className="absolute pointer-events-none"
                aria-hidden="true"
                style={{
                  top: -100, left: "50%", transform: "translateX(-50%)",
                  width: 800, height: 400, borderRadius: "50%",
                  background: "radial-gradient(ellipse, rgba(142,5,194,0.22) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Fine grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  backgroundImage: "linear-gradient(rgba(240,232,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,232,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              <div
                className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8"
                style={{ padding: "clamp(32px,5vw,56px)" }}
              >
                <div className="flex flex-col gap-3">
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#700B97" }}>
                    Ready to grow
                  </span>
                  <h2
                    className="text-ink"
                    style={{ fontSize: "clamp(26px,3.2vw,44px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95 }}
                  >
                    Ready to grow your app?
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#9080A8" }}>
                    We respond to every serious inquiry within 48 hours.
                  </p>
                </div>

                <a
                  href="mailto:hello@justpublisher.com"
                  className="inline-flex items-center gap-2.5 group flex-shrink-0 transition-all duration-200 ease-spring hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
                  style={{
                    height: 52,
                    padding: "0 28px",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#F0E8FF",
                    textDecoration: "none",
                    background: "linear-gradient(135deg, #6009A0 0%, #8E05C2 60%, #A020D8 100%)",
                    boxShadow: "0 0 0 1px rgba(142,5,194,0.45), 0 0 28px rgba(142,5,194,0.32), 0 4px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  Book a Call
                  <span aria-hidden="true" className="transition-transform duration-160 ease-spring group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
