"use client";

import { useInView } from "@/hooks/useInView";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView({ threshold: 0.12 });
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

function ProcessStep({ num, title, body, delay }: { num: string; title: string; body: string; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 600ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 600ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <div
        className="flex flex-col gap-4 p-7 rounded-card h-full"
        style={{
          background: "#0A0018",
          border: "1px solid rgba(62,6,95,0.6)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.5), 0 8px 24px rgba(62,6,95,0.25)",
        }}
      >
        <span className="font-bold tabular-nums" style={{ fontSize: 13, letterSpacing: "0.04em", color: "#8E05C2" }}>
          {num}
        </span>
        <h3 className="text-ink" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          {title}
        </h3>
        <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.65 }}>
          {body}
        </p>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, body, delay }: { icon: string; title: string; body: string; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 600ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 600ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <div
        className="flex flex-col gap-3 p-6 rounded-item h-full"
        style={{
          background: "#0A0018",
          border: "1px solid rgba(62,6,95,0.5)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.4), 0 8px 20px rgba(62,6,95,0.2)",
        }}
      >
        <div
          className="flex items-center justify-center rounded-item"
          style={{ width: 44, height: 44, fontSize: 20, background: "rgba(112,11,151,0.15)", border: "1px solid rgba(112,11,151,0.2)" }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3 className="text-ink" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.018em" }}>
          {title}
        </h3>
        <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.65 }}>
          {body}
        </p>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="flex flex-col items-center md:items-start gap-1"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <span
        className="font-extrabold tabular-nums text-gradient"
        style={{ fontSize: "clamp(40px, 5.5vw, 72px)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
      >
        {value}
      </span>
      <span
        className="text-muted"
        style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}
      >
        {label}
      </span>
    </div>
  );
}

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

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-[clamp(20px,5vw,48px)] overflow-hidden" aria-labelledby="about-heading">
        {/* Background orb */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 600, height: 600, right: "-10%", top: "-20%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(112,11,151,0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-container mx-auto relative z-10">
          <Reveal>
            <span
              className="inline-flex items-center gap-1.5 rounded-btn px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-forest mb-8 block w-fit"
              style={{ background: "rgba(112,11,151,0.12)", border: "1px solid rgba(112,11,151,0.22)" }}
            >
              <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: "50%", background: "#8E05C2", display: "inline-block" }} />
              (05) About
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1
              id="about-heading"
              className="text-optical text-ink"
              style={{ fontSize: "clamp(52px,7.5vw,110px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.89, maxWidth: 820 }}
            >
              We back apps
              <br />
              worth believing in.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 text-muted" style={{ fontSize: "clamp(17px,1.8vw,20px)", lineHeight: 1.58, letterSpacing: "-0.006em", maxWidth: 560 }}>
              JustPublisher is a mobile app publishing studio. We acquire, grow, and monetize apps built by independent developers — so they can keep building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="px-[clamp(20px,5vw,48px)]">
        <div className="max-w-container mx-auto border-t border-sand" />
      </div>

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,48px)] py-[clamp(72px,10vh,140px)]">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-6">Our model</span>
              <h2
                className="text-ink text-optical"
                style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 800, letterSpacing: "-0.038em", lineHeight: 0.95, marginBottom: 24 }}
              >
                We win when you win.
              </h2>
              <p className="text-muted" style={{ fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}>
                We acquire the commercial rights to distribute and grow your app. You retain full ownership of your code, your data, and your users. Revenue is split transparently before anything is signed.
              </p>
              <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}>
                We handle the full distribution layer: App Store optimization, paid user acquisition, review management, A/B testing, and release strategy. You keep shipping.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col gap-6">
              {values.map((v, i) => (
                <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} delay={i * 60} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,48px)] py-[clamp(72px,10vh,140px)]" style={{ background: "rgba(62,6,95,0.12)" }}>
        <div className="max-w-container mx-auto">
          <Reveal>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-5">How it works</span>
            <h2
              className="text-ink text-optical mb-12"
              style={{ fontSize: "clamp(36px,4.5vw,68px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.92 }}
            >
              Four steps,<br />zero surprises.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <ProcessStep key={step.num} num={step.num} title={step.title} body={step.body} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,48px)] py-[clamp(72px,10vh,140px)]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-sand text-center md:text-left">
            {[
              { value: "+$1M", label: "Revenue Generated" },
              { value: "10+",  label: "Apps Published" },
              { value: "20+",  label: "Studios Supported" },
            ].map((stat) => (
              <div key={stat.label} className="md:px-12 first:pl-0 last:pr-0">
                <StatItem value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[clamp(72px,10vh,140px)]">
        <div className="max-w-container mx-auto">
          <Reveal>
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 p-10 rounded-panel"
              style={{ background: "#0A0018", border: "1px solid rgba(62,6,95,0.6)", boxShadow: "0 4px 24px rgba(62,6,95,0.3)" }}
            >
              <div>
                <h2 className="text-ink" style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 8 }}>
                  Ready to grow your app?
                </h2>
                <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.55 }}>
                  We respond to every serious inquiry within 48 hours.
                </p>
              </div>
              <a
                href="mailto:hello@justpublisher.com"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-btn text-ink text-[15px] font-semibold shadow-elev-1 transition-all duration-160 ease-spring group flex-shrink-0 hover:shadow-elev-2"
                style={{ background: "#700B97" }}
              >
                Book a Call
                <span aria-hidden="true" className="transition-transform duration-160 ease-spring group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
