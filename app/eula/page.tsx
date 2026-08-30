// Note: This document is a template. Review with legal counsel before publishing.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "EULA — JustPublisher",
  description: "End User License Agreement for JustPublisher apps.",
};

export default function EULAPage() {
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
          End User License Agreement
        </h1>
      </div>

      <LegalSection title="1. License Grant">
        <p>
          JustPublisher LLC grants you a limited, non-exclusive, non-transferable, revocable
          license to use our mobile applications on devices you own or control, solely for
          personal, non-commercial purposes.
        </p>
      </LegalSection>

      <LegalSection title="2. Intellectual Property">
        <p>
          The Apps and all content within are owned by JustPublisher LLC or its licensors. You
          may not copy, modify, distribute, sell, or lease any part of our Apps without our
          written consent.
        </p>
      </LegalSection>

      <LegalSection title="3. Acceptable Use">
        <p>
          You agree not to misuse our Apps. Prohibited actions include: reverse engineering or
          decompiling the App; using the App to violate any law; transmitting harmful content; or
          attempting to gain unauthorized access to our infrastructure.
        </p>
      </LegalSection>

      <LegalSection title="4. Updates and Changes">
        <p>
          We may update our Apps at any time. Continued use after updates constitutes acceptance
          of the revised terms. We reserve the right to modify or discontinue any App without
          notice.
        </p>
      </LegalSection>

      <LegalSection title="5. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, JustPublisher LLC shall not be liable for any
          indirect, incidental, special, or consequential damages arising from your use of or
          inability to use the Apps.
        </p>
      </LegalSection>

      <LegalSection title="6. Termination">
        <p>
          Your rights under this agreement terminate automatically if you breach any of its
          terms. Upon termination, you must cease all use of the Apps.
        </p>
      </LegalSection>

      <LegalSection title="7. Governing Law">
        <p>
          This agreement is governed by the laws of the jurisdiction in which JustPublisher LLC
          is incorporated.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>
          Questions?{" "}
          <a href="mailto:legal@justpublisher.com" className="text-forest underline">
            legal@justpublisher.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
