// Note: This document is a template. Review with legal counsel before publishing.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Aura GlowUp",
  description: "Terms and conditions for using the Aura GlowUp application.",
};

export default function AuraTermsPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          Last updated: October 5, 2026
        </p>
        <h1
          className="text-ink"
          style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}
        >
          Terms of Service
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
          Please read these Terms carefully before using Aura GlowUp. By downloading or using the
          App, you agree to be bound by them.
        </p>
      </div>

      <LegalSection title="1. Parties">
        <p>
          These Terms constitute an agreement between you (&ldquo;User&rdquo;) and ARD Group LLC,
          FSM Mah. Poligon Cad. Buyaka Kule 3, 8C/1 Ümraniye, İstanbul, Türkiye
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). The App is distributed
          through the Apple App Store.
        </p>
      </LegalSection>

      <LegalSection title="2. License">
        <p>
          We grant you a limited, personal, non-exclusive, non-transferable, revocable license to
          install and use the App on Apple-branded devices you own or control, solely for your
          personal, non-commercial purposes in accordance with these Terms and the Apple App Store
          Terms of Service.
        </p>
      </LegalSection>

      <LegalSection title="3. Subscriptions and Payments">
        <div className="flex flex-col gap-3">
          <p>
            Aura GlowUp offers an optional subscription that unlocks premium features. Prices are
            displayed in the App before purchase and may vary by region.
          </p>
          <ul className="flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="font-semibold text-ink">Auto-renewal:</span> Subscriptions
              automatically renew at the end of each billing period unless cancelled at least 24
              hours before the renewal date.
            </li>
            <li>
              <span className="font-semibold text-ink">Management:</span> You may manage or
              cancel your subscription at any time through your Apple ID settings (App Store &gt;
              Subscriptions).
            </li>
            <li>
              <span className="font-semibold text-ink">Refunds:</span> All purchases are subject
              to Apple&apos;s refund policy. We do not process refunds directly; please contact
              Apple Support for refund requests.
            </li>
            <li>
              <span className="font-semibold text-ink">Free trial:</span> If a free trial is
              offered, it converts to a paid subscription automatically unless cancelled before
              the trial ends.
            </li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection title="4. User Content">
        <p>
          Photographs and content you provide remain yours. By submitting a photograph for AI
          analysis, you grant us a temporary, limited license solely to transmit the image to our
          AI analysis provider for the purpose of generating your result. We do not claim
          ownership of your photographs and do not store or use them beyond this single purpose.
        </p>
      </LegalSection>

      <LegalSection title="5. Prohibited Uses">
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>Reverse-engineering, decompiling, or disassembling the App</li>
          <li>Using the App for commercial purposes without our written consent</li>
          <li>Submitting photographs of third parties without their explicit consent</li>
          <li>Attempting to circumvent subscription or licensing mechanisms</li>
          <li>Using the App in any unlawful manner</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Health and Wellness Disclaimer">
        <p>
          Aura GlowUp is an entertainment and personal care application. The content, AI-generated
          analyses, glow-up plans, and recommendations provided by the App are for informational
          and motivational purposes only. They do not constitute medical advice, diagnosis, or
          treatment. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property">
        <p>
          All software, design, graphics, trademarks, and content within the App are owned by or
          licensed to us. Nothing in these Terms transfers any intellectual property rights to you
          beyond the limited license described in Section 2.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, we are not liable for any indirect,
          incidental, special, or consequential damages arising from your use of the App. Our total
          liability shall not exceed the amount you paid for the App in the twelve months preceding
          the claim.
        </p>
      </LegalSection>

      <LegalSection title="9. Termination">
        <p>
          We may suspend or terminate your access to the App at any time for material breach of
          these Terms. You may stop using the App at any time by deleting it from your device.
          Upon termination, the license granted in Section 2 ends immediately.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to These Terms">
        <p>
          We may update these Terms from time to time. We will notify you of material changes via
          an in-app notification. Continued use of the App after an update constitutes your
          acceptance of the new Terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          These Terms are governed by the laws of the Republic of Turkey. Any dispute that cannot
          be resolved amicably shall be submitted to the courts of Istanbul, Turkey.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <div className="flex flex-col gap-1">
          <p>ARD Group LLC</p>
          <p>FSM Mah. Poligon Cad. Buyaka Kule 3, 8C/1 Ümraniye, İstanbul, Türkiye</p>
          <p>
            <a href="mailto:support@auraglowup.app" className="text-forest underline">
              support@auraglowup.app
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
