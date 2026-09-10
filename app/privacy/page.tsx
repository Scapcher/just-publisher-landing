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
          Last updated: September 10, 2026
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

      <LegalSection title="3. Face Data (Simaloji, Fizyonomi Yüz Analiz)">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-ink mb-1">What we collect.</p>
            <p>
              When you choose to use the face analysis features of Simaloji, the app processes a
              still photograph of a face that you actively select from your camera or photo library.
              We do not create, collect, or store faceprints, facial geometry templates, biometric
              identifiers, or any other mathematical representation of a face. The app does not
              perform face recognition or identity matching, and it cannot identify who a person is.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">How we use it.</p>
            <p>
              The photograph is used for one purpose only: to generate an entertainment-oriented
              character and physiognomy interpretation that is shown to you. It is never used for
              advertising, profiling, identity verification, or to train our own models.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Who we share it with.</p>
            <p>
              To produce the analysis, the photograph is transmitted over an encrypted HTTPS
              connection to our backend server, which forwards it to the Google Gemini API,
              operated by Google LLC, solely to generate the interpretation. Google LLC is the only
              third party that receives the photograph. Google processes the image under its own API
              terms and privacy commitments, which provide protections equivalent to those described
              in this policy, and does not use the image to train its models. We do not share the
              photograph with any other third party, and we do not sell it.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Retention and deletion.</p>
            <p>
              The photograph is processed in memory only. It is not written to our databases or to
              any persistent storage, and it is discarded immediately once the analysis response is
              returned, typically within seconds. We apply zero retention to face photographs on our
              servers. Analysis results shown to you are not stored on our servers.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Your consent and control.</p>
            <p>
              Before any photograph leaves your device, the app displays a consent screen that
              explains what will be sent, that it will be sent to the Google Gemini API operated by
              Google LLC, and that it will not be retained. No photograph is transmitted unless you
              accept. You may withdraw this consent at any time in the app&apos;s Settings, after
              which the analysis features will no longer transmit any image. Because we do not
              retain face photographs, there is no stored face data to delete; any question about
              this can be sent to{" "}
              <a href="mailto:privacy@justpublisher.com" className="text-forest underline">
                privacy@justpublisher.com
              </a>
              .
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Age limitation.</p>
            <p>
              The face analysis features are intended for users aged 18 and over. The app does not
              knowingly process photographs of minors for compatibility or matching features.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="4. Data Retention">
        <p>
          We retain personal data as long as necessary to fulfill the purposes outlined here, or
          as required by law. Analytics data is typically retained for 24 months. You may request
          deletion at any time.
        </p>
      </LegalSection>

      <LegalSection title="5. GDPR Rights (EEA Users)">
        <p>
          If you are in the EEA, you have the right to access, correct, delete, or restrict
          processing of your personal data, as well as the right to data portability. Contact{" "}
          <a href="mailto:privacy@justpublisher.com" className="text-forest underline">
            privacy@justpublisher.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. CCPA Rights (California Users)">
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

      <LegalSection title="7. Children&apos;s Privacy">
        <p>
          Our Apps are not directed to children under 13. We do not knowingly collect personal
          information from children under 13. Contact us immediately if you believe we have done
          so.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>
          <a href="mailto:privacy@justpublisher.com" className="text-forest underline">
            privacy@justpublisher.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
