import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — GameScroll",
  description: "Privacy Policy for the GameScroll mobile application.",
};

export default function GameScrollPrivacyPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          Last updated: October 28, 2026
        </p>
        <h1
          className="text-ink"
          style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}
        >
          Privacy Policy
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
          This Privacy Policy describes how GameScroll (&ldquo;the App&rdquo;) handles information
          when you use our mobile application. Your privacy is important to us — and the short
          version is: <strong className="text-ink">we collect nothing</strong>.
        </p>
      </div>

      <LegalSection title="1. Information We Collect">
        <p className="mb-4 font-semibold text-ink">
          We do not collect, transmit, or share any personal information.
        </p>
        <p className="mb-3">
          The App stores the following data{" "}
          <strong className="text-ink">locally on your device only</strong>:
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside mb-4">
          <li>Game progress and high scores</li>
          <li>In-app settings and preferences (e.g., sound on/off)</li>
        </ul>
        <p>
          This data is stored using your device&apos;s local storage (
          <code className="text-[14px] bg-ink/5 px-1.5 py-0.5 rounded">shared_preferences</code>)
          and <strong className="text-ink">never leaves your device</strong>.
        </p>
      </LegalSection>

      <LegalSection title="2. Internet Access">
        <p>
          GameScroll does <strong className="text-ink">not</strong> require an internet connection
          to function. The App does not communicate with any external servers, APIs, or third-party
          services. No data is transmitted over the network at any point during normal use.
        </p>
      </LegalSection>

      <LegalSection title="3. Third-Party Services">
        <p className="mb-3">GameScroll does not integrate any of the following:</p>
        <div className="flex flex-col gap-3">
          {[
            ["Advertising networks", "AdMob, Meta Audience Network, or similar"],
            ["Analytics platforms", "Firebase Analytics, Mixpanel, Amplitude, or similar"],
            ["Crash reporting tools", "Crashlytics, Sentry, or similar"],
            ["Social login or account systems", "No accounts are required or supported"],
          ].map(([category, examples]) => (
            <div key={category}>
              <p className="font-semibold text-ink mb-0.5">{category}</p>
              <p className="text-[15px]">{examples}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="4. Device Permissions">
        <p className="mb-3">
          GameScroll does not request access to sensitive device features. Specifically, the App
          does <strong className="text-ink">not</strong> require:
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside">
          <li>Camera or microphone</li>
          <li>Location (GPS or network-based)</li>
          <li>Contacts or calendar</li>
          <li>External storage</li>
          <li>Device identifiers (IDFA, IDFV, or similar)</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Children's Privacy">
        <p className="mb-3">
          GameScroll is suitable for all ages. Since we do not collect any personal information,
          there is no risk to children&apos;s privacy.
        </p>
        <p>
          We comply with the Children&apos;s Online Privacy Protection Act (COPPA) and similar
          international regulations. We do not knowingly collect personal information from children
          under 13. If you believe a child has provided personal information through the App, please
          contact us at{" "}
          <a href="mailto:melihbahriaktan@gmail.com" className="text-forest underline">
            melihbahriaktan@gmail.com
          </a>{" "}
          — though since all data is stored locally, simply uninstalling the App will remove
          everything.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Security">
        <p className="mb-3">
          Because no personal data is collected or transmitted, there is no risk of a data breach
          from our side. All locally stored data remains under your device&apos;s own security
          controls.
        </p>
        <p>
          We recommend keeping your device software up to date and using a device passcode or
          biometric lock to protect your locally stored game data.
        </p>
      </LegalSection>

      <LegalSection title="7. Data Deletion">
        <p className="mb-3">
          All data stored by GameScroll exists only on your device. You can remove it at any time
          by uninstalling the App. There is nothing on our servers to delete because we never
          received any data in the first place.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected on
          this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review
          this page periodically. Continued use of the App after changes are posted constitutes
          your acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-ink">GameScroll</p>
          <p>
            Email:{" "}
            <a href="mailto:melihbahriaktan@gmail.com" className="text-forest underline">
              melihbahriaktan@gmail.com
            </a>
          </p>
          <p>
            App package:{" "}
            <code className="text-[14px] bg-ink/5 px-1.5 py-0.5 rounded">
              com.tuna.gamescroll
            </code>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.justpublisher.com"
              className="text-forest underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              justpublisher.com
            </a>
          </p>
          <p className="mt-2 text-[15px]">
            We aim to respond to all privacy-related inquiries within{" "}
            <strong className="text-ink">30 days</strong>.
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
