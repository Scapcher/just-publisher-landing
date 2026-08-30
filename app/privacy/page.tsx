// Note: This document is a template. Review with legal counsel before publishing.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — JustPublisher",
  description: "How JustPublisher collects and uses your data.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
      </div>

      <LegalSection title="1. Data We Collect">
        <p>
          We collect information you provide directly (name, email when you contact us), and
          data collected automatically through our Apps: device identifiers, usage analytics,
          and crash reports via Apple and Google SDKs.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Data">
        <p>
          We use collected data to operate and improve our Apps, respond to inquiries, detect
          and prevent fraud, and comply with legal obligations. We do not sell your personal
          data to third parties.
        </p>
      </LegalSection>

      <LegalSection title="3. Data Retention">
        <p>
          We retain personal data as long as necessary to fulfill the purposes outlined here, or
          as required by law. Analytics data is typically retained for 24 months. You may request
          deletion at any time.
        </p>
      </LegalSection>

      <LegalSection title="4. GDPR Rights (EEA Users)">
        <p>
          If you are in the EEA, you have the right to access, correct, delete, or restrict
          processing of your personal data, as well as the right to data portability. Contact{" "}
          <a href="mailto:privacy@justpublisher.com" className="text-forest underline">
            privacy@justpublisher.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. CCPA Rights (California Users)">
        <p>
          California residents may request to know what personal information we collect, request
          deletion, and opt out of the sale of personal information (we do not sell personal
          information). Contact{" "}
          <a href="mailto:privacy@justpublisher.com" className="text-forest underline">
            privacy@justpublisher.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Children&apos;s Privacy">
        <p>
          Our Apps are not directed to children under 13. We do not knowingly collect personal
          information from children under 13. Contact us immediately if you believe we have done
          so.
        </p>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>
          <a href="mailto:privacy@justpublisher.com" className="text-forest underline">
            privacy@justpublisher.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
