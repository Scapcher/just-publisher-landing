"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { submitContactForm } from "./_actions";

// ─── Reveal ──────────────────────────────────────────────────────────────────

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
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 640ms ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 640ms ${delay}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
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
          background:
            "linear-gradient(to right, rgba(142,5,194,0.35), transparent)",
        }}
      />
    </div>
  );
}

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <div
        aria-hidden="true"
        style={{
          width: 34,
          height: 34,
          borderRadius: 9,
          background: "rgba(142,5,194,0.1)",
          border: "1px solid rgba(142,5,194,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          flexShrink: 0,
          marginTop: 1,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: 14, lineHeight: 1.58, color: "#9080A8" }}>
        {text}
      </span>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        style={{
          flexShrink: 0,
          marginTop: 3,
          width: 17,
          height: 17,
          borderRadius: 5,
          background: "rgba(142,5,194,0.12)",
          border: "1px solid rgba(142,5,194,0.28)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          color: "#8E05C2",
          fontWeight: 900,
        }}
      >
        ✓
      </span>
      <span style={{ fontSize: 14, lineHeight: 1.58, color: "#9080A8" }}>
        {text}
      </span>
    </li>
  );
}

function NextStep({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "rgba(142,5,194,0.1)",
          border: "1px solid rgba(142,5,194,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.04em",
            background: "linear-gradient(135deg, #8E05C2, #C47EFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {num}
        </span>
      </div>
      <span style={{ fontSize: 14, lineHeight: 1.58, color: "#9080A8", paddingTop: 6 }}>
        {text}
      </span>
    </div>
  );
}

// ─── Contact form ─────────────────────────────────────────────────────────────

type FormState = "idle" | "submitting" | "success" | "error";

const INPUT_STYLE = {
  background: "#07000F",
  border: "1px solid rgba(142,5,194,0.2)",
  color: "#F0E8FF",
  borderRadius: 8,
  fontSize: 15,
  padding: "12px 16px",
  width: "100%",
  outline: "none",
  transition: "border-color 160ms, box-shadow 160ms",
} as const;

function ContactForm() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [appName, setAppName] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState]     = useState<FormState>("idle");
  const [errMsg, setErrMsg]   = useState("");

  const [focused, setFocused] = useState<string | null>(null);

  const focusStyle = (id: string) =>
    focused === id
      ? { ...INPUT_STYLE, borderColor: "rgba(142,5,194,0.6)", boxShadow: "0 0 0 3px rgba(142,5,194,0.1)" }
      : INPUT_STYLE;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setErrMsg("");
    const result = await submitContactForm({ name, email, appName, message });
    if (result.ok) {
      setState("success");
    } else {
      setState("error");
      setErrMsg(result.error ?? "Something went wrong. Please email us directly.");
    }
  };

  if (state === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-5 text-center"
        style={{ minHeight: 300, padding: "40px 24px" }}
      >
        {/* Check icon */}
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 16,
            background: "rgba(142,5,194,0.12)",
            border: "1px solid rgba(142,5,194,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            color: "#8E05C2",
          }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h3
          className="text-ink"
          style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.025em" }}
        >
          Inquiry received!
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "#9080A8", maxWidth: 340 }}>
          We'll respond to{" "}
          <strong style={{ color: "#F0E8FF" }}>{email}</strong> within 48 hours.
        </p>
        <button
          onClick={() => {
            setState("idle");
            setName(""); setEmail(""); setAppName(""); setMessage("");
          }}
          style={{ fontSize: 13, color: "#9080A8", textDecoration: "underline", textUnderlineOffset: 3, marginTop: 8 }}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "#9080A8",
    display: "block",
    marginBottom: 8,
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="max-sm:grid-cols-1">
        <div>
          <label htmlFor="c-name" style={labelStyle}>Your name</label>
          <input
            id="c-name" type="text" placeholder="Alex Johnson" required
            value={name} onChange={(e) => setName(e.target.value)}
            onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
            style={focusStyle("name")}
          />
        </div>
        <div>
          <label htmlFor="c-email" style={labelStyle}>Email address</label>
          <input
            id="c-email" type="email" placeholder="alex@example.com" required
            value={email} onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
            style={focusStyle("email")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="c-app" style={labelStyle}>App name</label>
        <input
          id="c-app" type="text" placeholder="My App"
          value={appName} onChange={(e) => setAppName(e.target.value)}
          onFocus={() => setFocused("app")} onBlur={() => setFocused(null)}
          style={focusStyle("app")}
        />
      </div>

      <div>
        <label htmlFor="c-msg" style={labelStyle}>Tell us about your app</label>
        <textarea
          id="c-msg" rows={5}
          placeholder="What does your app do? What stage is it at? What are you looking for?"
          required value={message} onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
          style={{ ...focusStyle("msg"), resize: "none" }}
        />
      </div>

      {state === "error" && (
        <p style={{ fontSize: 13, color: "#f87171" }}>{errMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group inline-flex items-center justify-center gap-2.5 transition-all duration-200 ease-spring hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
        style={{
          height: 52,
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: "#F0E8FF",
          background: "linear-gradient(135deg, #6009A0 0%, #8E05C2 60%, #A020D8 100%)",
          boxShadow: "0 0 0 1px rgba(142,5,194,0.4), 0 0 28px rgba(142,5,194,0.28), 0 4px 16px rgba(0,0,0,0.4)",
          border: "none",
          cursor: state === "submitting" ? "not-allowed" : "pointer",
          marginTop: 4,
        }}
      >
        {state === "submitting" ? "Sending…" : "Send Inquiry"}
        {state !== "submitting" && (
          <span
            aria-hidden="true"
            className="transition-transform duration-160 ease-spring group-hover:translate-x-1"
          >
            →
          </span>
        )}
      </button>

      <p style={{ fontSize: 12, color: "#9080A8", textAlign: "center" }}>
        Or email us at{" "}
        <a
          href="mailto:hello@justpublisher.com"
          style={{ color: "#700B97", textDecoration: "underline", textUnderlineOffset: 3 }}
        >
          hello@justpublisher.com
        </a>
      </p>
    </form>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function ContactContent() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "clamp(120px,14vh,180px)", paddingBottom: "clamp(64px,8vh,100px)" }}
        aria-labelledby="contact-heading"
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
            top: -160,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1000,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(142,5,194,0.2) 0%, rgba(62,6,95,0.08) 40%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />

        {/* Left ambient */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            top: 0,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(112,11,151,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          className="relative z-10 max-w-container mx-auto"
          style={{ paddingInline: "clamp(20px,5vw,48px)" }}
        >
          {/* Eyebrow */}
          <Reveal>
            <div className="flex items-center gap-3 mb-8 w-fit">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#8E05C2",
                  display: "block",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#700B97",
                }}
              >
                (06) Contact
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={60}>
            <h1
              id="contact-heading"
              className="text-ink"
              style={{
                fontSize: "clamp(56px, 8vw, 120px)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 0.88,
                maxWidth: 740,
              }}
            >
              Let&apos;s talk.
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={120}>
            <p
              style={{
                marginTop: "clamp(20px,2.5vh,32px)",
                fontSize: "clamp(16px, 1.6vw, 18px)",
                lineHeight: 1.62,
                letterSpacing: "-0.006em",
                color: "#9080A8",
                maxWidth: 480,
              }}
            >
              We respond to every serious inquiry within 48 hours. Real
              conversations, not templates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Main grid ─────────────────────────────────────────────────── */}
      <section
        style={{
          paddingInline: "clamp(20px,5vw,48px)",
          paddingBottom: "clamp(80px,12vh,140px)",
        }}
      >
        <div className="max-w-container mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16"
          >
            {/* ── Left: info ─────────────────────────────────────── */}
            <Reveal className="flex flex-col gap-10">
              {/* Email */}
              <div>
                <SectionLabel>Email us directly</SectionLabel>
                <a
                  href="mailto:hello@justpublisher.com"
                  className="group inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity duration-160"
                  style={{
                    fontSize: "clamp(16px,1.5vw,19px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "#700B97",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                  }}
                >
                  hello@justpublisher.com
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-160 ease-spring group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>

              {/* Trust badges */}
              <div>
                <SectionLabel>Why reach out</SectionLabel>
                <div className="flex flex-col gap-4">
                  <TrustBadge icon="⏱" text="Response within 48 hours, every time" />
                  <TrustBadge icon="◎" text="Real conversations — we review every inquiry personally" />
                  <TrustBadge icon="▲" text="No commitment required to get a response" />
                  <TrustBadge icon="◆" text="Your code and users stay yours, always" />
                </div>
              </div>

              {/* What to include */}
              <div>
                <SectionLabel>What to include</SectionLabel>
                <ul className="flex flex-col gap-3" role="list">
                  <CheckItem text="Your app name and what it does (one sentence)" />
                  <CheckItem text="Platform(s) — iOS, Android, or both" />
                  <CheckItem text="Current download or revenue numbers (ballpark is fine)" />
                  <CheckItem text="What you're looking for from a publisher" />
                  <CheckItem text="Timeline or any constraints" />
                </ul>
              </div>

              {/* Next steps */}
              <div>
                <SectionLabel>What happens next</SectionLabel>
                <div className="flex flex-col gap-3">
                  <NextStep num="01" text="We review your inquiry and respond within 48 hours." />
                  <NextStep num="02" text="If there's potential fit, we schedule a 30 min intro call." />
                  <NextStep num="03" text="We run a product and market audit — free, no strings." />
                  <NextStep num="04" text="If we both like what we see, we put a deal on the table." />
                </div>
              </div>
            </Reveal>

            {/* ── Right: form card ───────────────────────────────── */}
            <Reveal delay={100}>
              <div
                className="relative rounded-panel overflow-hidden noise-overlay"
                style={{
                  background: "#060010",
                  border: "1px solid rgba(142,5,194,0.2)",
                  boxShadow:
                    "0 0 0 1px rgba(62,6,95,0.2), 0 32px 80px rgba(62,6,95,0.4), 0 4px 24px rgba(0,0,0,0.6)",
                  padding: "clamp(28px,4vw,44px)",
                }}
              >
                {/* Top glow border */}
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(142,5,194,0.7) 30%, rgba(200,140,255,0.5) 50%, rgba(142,5,194,0.7) 70%, transparent)",
                  }}
                />

                {/* Ambient glow inside card */}
                <div
                  className="absolute pointer-events-none"
                  aria-hidden="true"
                  style={{
                    top: -80,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 500,
                    height: 260,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse, rgba(142,5,194,0.14) 0%, transparent 70%)",
                    filter: "blur(32px)",
                  }}
                />

                {/* Card header */}
                <div className="relative mb-8">
                  <h2
                    className="text-ink"
                    style={{
                      fontSize: "clamp(22px, 2.2vw, 30px)",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      lineHeight: 1.05,
                      marginBottom: 10,
                    }}
                  >
                    Tell us about your app.
                  </h2>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#9080A8" }}>
                    We review every submission personally. Downloads don&apos;t
                    matter — potential does.
                  </p>
                </div>

                {/* Form */}
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Social proof panel ───────────────────────────────────────── */}
      <section style={{ paddingInline: "clamp(20px,5vw,48px)", paddingBottom: "clamp(80px,12vh,140px)" }}>
        <div className="max-w-container mx-auto">
          <Reveal>
            <div
              className="relative rounded-panel overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, #0E0020 0%, #0A0018 60%, #100025 100%)",
                border: "1px solid rgba(142,5,194,0.18)",
                boxShadow:
                  "0 0 0 1px rgba(62,6,95,0.2), 0 24px 64px rgba(62,6,95,0.35)",
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(142,5,194,0.6) 25%, rgba(200,140,255,0.4) 50%, rgba(142,5,194,0.6) 75%, transparent)",
                }}
              />

              {/* Ambient glow */}
              <div
                className="absolute pointer-events-none"
                aria-hidden="true"
                style={{
                  top: -60,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 600,
                  height: 220,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(ellipse, rgba(142,5,194,0.18) 0%, transparent 70%)",
                  filter: "blur(28px)",
                }}
              />

              {/* Dot grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(240,232,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Stats */}
              <div className="relative grid grid-cols-2 md:grid-cols-4">
                {[
                  { value: "+$1M", label: "Revenue Generated" },
                  { value: "10+",  label: "Apps Published" },
                  { value: "48h",  label: "Max Response Time" },
                  { value: "100%", label: "Inquiry Response Rate" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="relative flex flex-col items-center justify-center py-10 px-6 gap-3"
                  >
                    {/* Dividers */}
                    {i > 0 && (
                      <div
                        className="absolute left-0 top-6 bottom-6 w-px pointer-events-none hidden md:block"
                        aria-hidden="true"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent, rgba(142,5,194,0.28) 30%, rgba(142,5,194,0.28) 70%, transparent)",
                        }}
                      />
                    )}
                    {(i === 2) && (
                      <div
                        className="absolute top-0 left-6 right-6 h-px pointer-events-none md:hidden"
                        aria-hidden="true"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, rgba(142,5,194,0.28) 30%, rgba(142,5,194,0.28) 70%, transparent)",
                        }}
                      />
                    )}

                    {/* Number with glow */}
                    <div className="relative select-none">
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          fontSize: "clamp(28px,3vw,44px)",
                          fontWeight: 900,
                          letterSpacing: "-0.05em",
                          lineHeight: 0.9,
                          color: "#8E05C2",
                          filter: "blur(12px)",
                          opacity: 0.5,
                          userSelect: "none",
                        }}
                      >
                        {item.value}
                      </div>
                      <span
                        style={{
                          position: "relative",
                          fontSize: "clamp(28px,3vw,44px)",
                          fontWeight: 900,
                          letterSpacing: "-0.05em",
                          lineHeight: 0.9,
                          background:
                            "linear-gradient(160deg, #C47EFF 0%, #F0E8FF 45%, #9B30D0 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "#9080A8",
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
