import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "About — JustPublisher",
  description:
    "JustPublisher is a mobile app publishing studio. We acquire, grow, and monetize apps built by independent developers.",
};

export default function AboutPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          (05) About
        </p>
        <h1
          className="text-ink"
          style={{
            fontSize: "clamp(40px,6vw,72px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          Who we are.
        </h1>
      </div>

      <p
        className="text-ink"
        style={{ fontSize: 20, lineHeight: 1.55, letterSpacing: "-0.01em" }}
      >
        JustPublisher is a mobile app publishing studio. We work with
        independent developers to acquire, grow, and monetize their apps — so
        they can focus on building.
      </p>

      <LegalSection title="Our Model">
        <p>
          We acquire the commercial rights to distribute and grow your app.
          You retain full ownership of your code, your data, and your users.
          Revenue is split transparently before anything is signed — we win
          when you win.
        </p>
      </LegalSection>

      <LegalSection title="What We Do">
        <p>
          We handle the full distribution layer: App Store optimization, paid
          user acquisition, review management, A/B testing, and release
          strategy. You keep shipping features. We make sure people find your
          app, install it, and keep coming back.
        </p>
      </LegalSection>

      <LegalSection title="What We Look For">
        <p>
          Consumer apps with a clear use case and a founder who cares about
          the craft. Downloads don&apos;t matter much — most apps we&apos;ve
          taken on had fewer than 5,000. We&apos;re not buying traction.
          We&apos;re buying potential.
        </p>
      </LegalSection>

      <LegalSection title="Get in Touch">
        <p>
          We respond to every serious inquiry within 48 hours.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href="mailto:hello@justpublisher.com"
            className="text-forest underline underline-offset-2"
          >
            hello@justpublisher.com
          </a>
          <a
            href="mailto:hello@justpublisher.com"
            className="inline-flex items-center gap-2 w-fit h-11 px-6 rounded-btn bg-forest text-paper text-[15px] font-semibold shadow-elev-1 hover:bg-pine transition-all duration-160 ease-spring group"
          >
            Book a Call
            <span
              aria-hidden="true"
              className="transition-transform duration-160 ease-spring group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
