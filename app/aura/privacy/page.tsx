// Note: This document is a template. Review with legal counsel before publishing.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Aura GlowUp",
  description: "How Aura GlowUp collects, uses, and protects your data.",
};

export default function AuraPrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
          This policy applies to the Aura GlowUp mobile application (&ldquo;App&rdquo;). It
          explains what data we collect, how we use it, and your rights.
        </p>
      </div>

      <LegalSection title="1. Data We Collect">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-ink mb-1">Photos</p>
            <p>
              When you use the AI glow-up analysis feature, you voluntarily provide a selfie or
              before/after photograph from your camera or photo library. We do not create, store,
              or retain faceprints, biometric identifiers, or any mathematical representation of
              your face.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Device information</p>
            <p>Device model, operating system version, and app version for diagnostics.</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Analytics</p>
            <p>
              Anonymized in-app event logs (screens viewed, features used) to improve the
              experience. We do not link these events to your identity.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Subscription status</p>
            <p>
              Whether you have an active subscription, managed via Apple App Store (StoreKit) and
              RevenueCat. We do not process or store payment card data.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Language and region preference</p>
            <p>Your device language setting to provide localized content.</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="2. How We Use Your Data">
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>Deliver and operate the App (AI analysis, personalized glow-up plan)</li>
          <li>Improve app performance and user experience</li>
          <li>Manage your subscription and restore purchases</li>
          <li>Provide technical support when you contact us</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mt-3">We do not sell your personal data to third parties.</p>
      </LegalSection>

      <LegalSection title="3. Photo Processing and AI Analysis">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-ink mb-1">What we send.</p>
            <p>
              To generate your AI glow-up analysis, the photograph you provide is transmitted over
              an encrypted HTTPS connection to our backend, which forwards it to the Google Gemini
              API, operated by Google LLC, solely to generate the interpretation. This is the only
              purpose for which the image leaves your device.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">No retention.</p>
            <p>
              The photograph is processed in memory only. It is not written to any database or
              persistent storage and is discarded immediately once the analysis response is
              returned — typically within seconds. We apply zero retention to photographs on our
              servers.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">No training.</p>
            <p>
              Your photograph is never used to train machine learning models, for advertising, for
              identity verification, or shared with any party other than Google LLC as described
              above. Google does not use the image to train its models under its API terms.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Your consent and control.</p>
            <p>
              Before any photograph leaves your device, the App displays a consent prompt
              explaining what will be sent and to whom. No image is transmitted without your
              explicit approval. You may withdraw this permission at any time in Settings; the
              analysis feature will stop transmitting images immediately.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="4. Third Parties We Share Data With">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-ink mb-1">Apple Inc.</p>
            <p>App Store infrastructure, StoreKit payments, and crash reporting.</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">RevenueCat</p>
            <p>
              Subscription and entitlement management. See{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                className="text-forest underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RevenueCat&apos;s Privacy Policy
              </a>
              .
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Google LLC (Gemini API)</p>
            <p>
              Photographs are forwarded to the Google Gemini API solely to generate your analysis
              result. Google processes the image under its API terms and does not use it to train
              models. See{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-forest underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Analytics</p>
            <p>Anonymized usage events may be processed by a third-party analytics tool.</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          Local app data (plans, preferences, results) is stored only on your device and is
          deleted when you uninstall the App or use Settings &gt; Clear Data. We do not retain
          photographs on our servers. Analytics data is retained for up to 24 months in
          anonymized form.
        </p>
      </LegalSection>

      <LegalSection title="6. Children&apos;s Privacy">
        <p>
          Aura GlowUp is intended for users 18 years of age and older. The App includes an
          age-verification step during onboarding. We do not knowingly collect personal
          information from users under 18. If we become aware that we have done so, we will
          delete that information promptly.
        </p>
      </LegalSection>

      <LegalSection title="7. App Tracking Transparency">
        <p>
          We do not track you across third-party apps or websites for advertising purposes. If
          the App requests ATT permission in the future, it will be for analytics only and you
          may decline.
        </p>
      </LegalSection>

      <LegalSection title="8. Your Rights">
        <div className="flex flex-col gap-2">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict certain processing</li>
            <li>Data portability</li>
          </ul>
          <p>
            To exercise these rights or delete your data, use Settings &gt; Clear Data in the App,
            or contact us at{" "}
            <a href="mailto:support@auraglowup.app" className="text-forest underline">
              support@auraglowup.app
            </a>
            . We will respond within 30 days.
          </p>
        </div>
      </LegalSection>

      <LegalSection title="9. Policy Changes">
        <p>
          We may update this policy from time to time. Material changes will be communicated via
          an in-app notification. Continued use of the App after an update constitutes acceptance
          of the revised policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
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
