// Note: This document is a template. Review with legal counsel before publishing.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — JustPublisher",
};

export default function TermsPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          Last updated: January 1, 2026
        </p>
        <h1
          className="text-ink"
          style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}
        >
          Terms of Service
        </h1>
      </div>

      <LegalSection title="1. Acceptance">
        <p>
          By accessing or using JustPublisher apps or website, you agree to be bound by these
          Terms. If you disagree, you may not use our services.
        </p>
      </LegalSection>

      <LegalSection title="2. License Scope">
        <p>
          JustPublisher LLC grants you a limited, personal, non-commercial license to use our
          Apps. This license is revocable and does not include the right to sublicense or
          transfer.
        </p>
      </LegalSection>

      <LegalSection title="3. Intellectual Property">
        <p>
          All content, trademarks, and technology in our Apps are owned by JustPublisher LLC or
          licensed to us. Nothing in these Terms transfers ownership of any intellectual property
          to you.
        </p>
      </LegalSection>

      <LegalSection title="4. Acceptable Use">
        <p>
          You agree to use our services only for lawful purposes. You may not use our services
          to harm others, violate any law, infringe intellectual property rights, or attempt to
          disrupt our infrastructure.
        </p>
      </LegalSection>

      <LegalSection title="5. Liability Limitation">
        <p>
          To the fullest extent permitted by law, JustPublisher LLC is not liable for any
          indirect, incidental, or consequential damages. Our total liability shall not exceed
          the amount you paid us in the 12 months prior to the claim.
        </p>
      </LegalSection>

      <LegalSection title="6. Termination">
        <p>
          We may suspend or terminate your access to our services at any time for breach of
          these Terms, with or without notice.
        </p>
      </LegalSection>

      <LegalSection title="7. Governing Law">
        <p>
          These Terms are governed by applicable law. Disputes shall be resolved by binding
          arbitration, except where prohibited by law.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>
          <a href="mailto:legal@justpublisher.com" className="text-forest underline">
            legal@justpublisher.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
