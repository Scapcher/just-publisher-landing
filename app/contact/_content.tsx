"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { submitContactForm } from "./_actions";

// ─── Reveal ─────────────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

// ─── Trust badge ────────────────────────────────────────────────────────────────

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex items-center justify-center rounded-item flex-shrink-0"
        style={{ width: 36, height: 36, fontSize: 16, background: "rgba(112,11,151,0.12)", border: "1px solid rgba(112,11,151,0.18)" }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="text-muted" style={{ fontSize: 14, lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-0.5 font-bold" style={{ fontSize: 14, color: "#8E05C2" }} aria-hidden="true">✓</span>
      <span className="text-muted" style={{ fontSize: 14, lineHeight: 1.55 }}>{text}</span>
    </li>
  );
}

function NextStep({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="flex-shrink-0 flex items-center justify-center rounded-item font-bold"
        style={{ width: 32, height: 32, fontSize: 13, letterSpacing: "0.02em", background: "rgba(112,11,151,0.12)", border: "1px solid rgba(112,11,151,0.18)", color: "#700B97" }}
        aria-hidden="true"
      >
        {num}
      </span>
      <span className="text-muted pt-1.5" style={{ fontSize: 14, lineHeight: 1.55 }}>{text}</span>
    </div>
  );
}

// ─── Contact form ───────────────────────────────────────────────────────────────

type FormState = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [appName, setAppName] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState]     = useState<FormState>("idle");
  const [errMsg, setErrMsg]   = useState("");

  const fieldBase = [
    "w-full rounded-item px-4 py-3 text-ink text-[15px] outline-none",
    "placeholder:text-muted/50 transition-all duration-160",
    "focus:ring-2",
  ].join(" ");

  const fieldStyle = {
    background: "#070010",
    border: "1px solid rgba(62,6,95,0.7)",
    color: "#F0E8FF",
  };

  const fieldFocusStyle = `${fieldBase}`;

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
        className="flex flex-col items-center justify-center gap-5 p-10 rounded-card text-center"
        style={{ minHeight: 280, background: "rgba(62,6,95,0.2)", border: "1px solid rgba(112,11,151,0.25)" }}
      >
        <div
          className="flex items-center justify-center rounded-item"
          style={{ width: 56, height: 56, fontSize: 24, background: "rgba(112,11,151,0.18)", border: "1px solid rgba(112,11,151,0.3)" }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h3 className="text-ink" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Inquiry received!
        </h3>
        <p className="text-muted" style={{ fontSize: 15, lineHeight: 1.6, maxWidth: 340 }}>
          We'll respond to <strong style={{ color: "#F0E8FF" }}>{email}</strong> within 48 hours.
        </p>
        <button
          onClick={() => { setState("idle"); setName(""); setEmail(""); setAppName(""); setMessage(""); }}
          className="mt-2 text-[13px] text-muted underline underline-offset-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-name" className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">Your name</label>
          <input
            id="c-name" type="text" placeholder="Alex Johnson" required
            value={name} onChange={(e) => setName(e.target.value)}
            className={fieldFocusStyle} style={fieldStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-email" className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">Email address</label>
          <input
            id="c-email" type="email" placeholder="alex@example.com" required
            value={email} onChange={(e) => setEmail(e.target.value)}
            className={fieldFocusStyle} style={fieldStyle}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-app" className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">App name</label>
        <input
          id="c-app" type="text" placeholder="My App"
          value={appName} onChange={(e) => setAppName(e.target.value)}
          className={fieldFocusStyle} style={fieldStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-msg" className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">Tell us about your app</label>
        <textarea
          id="c-msg" rows={5}
          placeholder="What does your app do? What stage is it at? What are you looking for?"
          required value={message} onChange={(e) => setMessage(e.target.value)}
          className={`${fieldFocusStyle} resize-none`} style={fieldStyle}
        />
      </div>

      {state === "error" && (
        <p className="text-[13px]" style={{ color: "#f87171" }}>
          {errMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-btn text-ink text-[15px] font-semibold shadow-elev-1 transition-all duration-160 ease-spring group mt-2 hover:shadow-elev-2 disabled:opacity-60"
        style={{ background: "#700B97" }}
      >
        {state === "submitting" ? "Sending…" : "Send Inquiry"}
        {state !== "submitting" && (
          <span aria-hidden="true" className="transition-transform duration-160 ease-spring group-hover:translate-x-1">→</span>
        )}
      </button>

      <p className="text-muted text-center" style={{ fontSize: 12 }}>
        Or email us directly at{" "}
        <a href="mailto:hello@justpublisher.com" className="text-forest underline underline-offset-2">
          hello@justpublisher.com
        </a>
      </p>
    </form>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function ContactContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 px-[clamp(20px,5vw,48px)] overflow-hidden" aria-labelledby="contact-heading">
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 500, height: 500, left: "-5%", top: "-15%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(112,11,151,0.16) 0%, transparent 70%)",
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
              (06) Contact
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1
              id="contact-heading"
              className="text-optical text-ink"
              style={{ fontSize: "clamp(52px,7.5vw,110px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.89, maxWidth: 700 }}
            >
              Let&apos;s talk.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-muted" style={{ fontSize: "clamp(16px,1.8vw,19px)", lineHeight: 1.58, letterSpacing: "-0.006em", maxWidth: 480 }}>
              We respond to every serious inquiry within 48 hours. Real conversations, not templates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Main grid ────────────────────────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,48px)] pb-[clamp(80px,12vh,160px)]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">

            {/* Left: trust + info */}
            <Reveal className="flex flex-col gap-10">
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-3">Email us directly</span>
                <a
                  href="mailto:hello@justpublisher.com"
                  className="font-semibold hover:opacity-80 transition-opacity duration-160 group text-gradient"
                  style={{ fontSize: "clamp(16px,1.6vw,20px)", letterSpacing: "-0.01em", textDecoration: "underline", textUnderlineOffset: 4 }}
                >
                  hello@justpublisher.com
                  <span aria-hidden="true" className="inline-block ml-1.5 transition-transform duration-160 ease-spring group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <TrustBadge icon="⏱" text="Response within 48 hours, every time" />
                <TrustBadge icon="◎" text="Real conversations — we review every inquiry personally" />
                <TrustBadge icon="▲" text="No commitment required to get a response" />
                <TrustBadge icon="◆" text="Your code and users stay yours, always" />
              </div>

              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">What to include</span>
                <ul className="flex flex-col gap-3" role="list">
                  <CheckItem text="Your app name and what it does (one sentence)" />
                  <CheckItem text="Platform(s) — iOS, Android, or both" />
                  <CheckItem text="Current download or revenue numbers (ballpark is fine)" />
                  <CheckItem text="What you're looking for from a publisher" />
                  <CheckItem text="Timeline or any constraints" />
                </ul>
              </div>

              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">What happens next</span>
                <div className="flex flex-col gap-3">
                  <NextStep num="01" text="We review your inquiry and respond within 48 hours." />
                  <NextStep num="02" text="If there's potential fit, we schedule a 30 min intro call." />
                  <NextStep num="03" text="We run a product and market audit — free, no strings." />
                  <NextStep num="04" text="If we both like what we see, we put a deal on the table." />
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={100}>
              <div
                className="rounded-panel p-8 lg:p-10"
                style={{ background: "#0A0018", border: "1px solid rgba(62,6,95,0.6)", boxShadow: "0 4px 24px rgba(62,6,95,0.3)" }}
              >
                <div className="mb-8">
                  <h2 className="text-ink" style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 8 }}>
                    Tell us about your app.
                  </h2>
                  <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.55 }}>
                    We review every submission personally. Downloads don&apos;t matter — potential does.
                  </p>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Social proof bar ──────────────────────────────────────────── */}
      <section
        className="px-[clamp(20px,5vw,48px)] py-12 border-t"
        style={{ background: "rgba(62,6,95,0.15)", borderColor: "rgba(62,6,95,0.4)" }}
      >
        <div className="max-w-container mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 text-center md:text-left">
              {[
                { value: "+$1M", label: "Revenue Generated" },
                { value: "10+",  label: "Apps Published" },
                { value: "48h",  label: "Max Response Time" },
                { value: "100%", label: "Inquiry Response Rate" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center md:items-start gap-1">
                  <span
                    className="font-extrabold tabular-nums text-gradient"
                    style={{ fontSize: "clamp(28px,3vw,42px)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
                  >
                    {item.value}
                  </span>
                  <span className="text-muted" style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
