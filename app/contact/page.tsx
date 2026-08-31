import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Contact — JustPublisher",
  description: "Get in touch with JustPublisher. We respond within 48 hours.",
};

export default function ContactPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          (06) Contact
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
          Let&apos;s talk.
        </h1>
      </div>

      <p
        className="text-ink"
        style={{ fontSize: 20, lineHeight: 1.55, letterSpacing: "-0.01em" }}
      >
        We respond to every serious inquiry within 48 hours.
      </p>

      <div className="flex flex-col gap-8 pt-2">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
            Email
          </span>
          <a
            href="mailto:hello@justpublisher.com"
            className="text-forest text-[18px] font-medium underline underline-offset-2 hover:text-pine transition-colors duration-160"
          >
            hello@justpublisher.com
          </a>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
            Book a Call
          </span>
          <p
            className="text-muted"
            style={{ fontSize: 16, lineHeight: 1.55 }}
          >
            Prefer a call? We&apos;re happy to jump on a quick intro call to
            hear about your app and what you&apos;re looking for.
          </p>
          <a
            href="mailto:hello@justpublisher.com"
            className="inline-flex items-center gap-2 w-fit h-11 px-6 rounded-btn bg-forest text-paper text-[15px] font-semibold shadow-elev-1 hover:bg-pine transition-all duration-160 ease-spring group mt-1"
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
      </div>
    </LegalLayout>
  );
}
