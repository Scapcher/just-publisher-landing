import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Love Dare: For Couples",
  description: "Privacy Policy for the Love Dare: For Couples mobile application.",
};

export default function LoveDarePrivacyPage() {
  return (
    <LegalLayout>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">
          Last updated: October 20, 2026
        </p>
        <h1
          className="text-ink"
          style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}
        >
          Privacy Policy
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
          This Privacy Policy describes how DateSync (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) collects, uses, and handles information when you use the DateSync
          mobile application (&ldquo;App&rdquo;). We are committed to protecting your privacy.
        </p>
      </div>

      <LegalSection title="1. Summary">
        <p className="mb-4">
          DateSync is designed with your privacy as a priority. Here is what you need to know at
          a glance:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[15px] border-collapse">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="text-left py-2 pr-6 font-semibold text-ink w-1/3">What</th>
                <th className="text-left py-2 font-semibold text-ink">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Data collected", "Only the first names you enter for you and your partner"],
                ["Where data is stored", "Locally on your device only — never sent to our servers"],
                ["Data shared with third parties", "No personal data is shared with any third party"],
                ["Subscription billing", "Handled entirely by Apple — we never see your payment details"],
                ["Analytics / tracking", "None"],
                ["Advertising", "None"],
                ["Children under 13", "Not permitted to use this App"],
              ].map(([what, detail]) => (
                <tr key={what} className="border-b border-ink/5">
                  <td className="py-2.5 pr-6 font-medium text-ink align-top">{what}</td>
                  <td className="py-2.5 align-top">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-ink mb-1">2.1 Information You Provide</p>
            <p>
              The only information you enter into the App is the{" "}
              <strong className="text-ink">first names of you and your partner</strong>{" "}
              (&ldquo;Player Names&rdquo;), which are used to personalize the in-app experience
              (e.g., &ldquo;Alex &amp; Jordan&apos;s turn&rdquo;).
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">2.2 Information We Do NOT Collect</p>
            <p className="mb-2">We do not collect:</p>
            <ul className="flex flex-col gap-1 list-disc list-inside">
              <li>Real names, last names, or legal identities</li>
              <li>Email addresses, phone numbers, or contact information</li>
              <li>Location data (GPS, IP address, or otherwise)</li>
              <li>Device identifiers (IDFA, IDFV, or similar)</li>
              <li>Usage analytics, telemetry, or event tracking</li>
              <li>Photos, microphone input, or camera data</li>
              <li>Social media profile information</li>
              <li>Any biometric data</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">2.3 Automatically Collected Information</p>
            <p>
              We do not operate any servers or backend systems. The App does not transmit any data
              over the internet during normal use. Therefore, no information is automatically
              collected by us.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">2.4 Subscription and Payment Information</p>
            <p>
              When you purchase a Premium subscription, the transaction is processed entirely by{" "}
              <strong className="text-ink">Apple&apos;s App Store payment infrastructure</strong>.
              We do not receive, process, store, or have access to your payment method, credit card
              details, or Apple ID credentials. We only receive a confirmation status
              (active/inactive) to unlock in-app features, which is stored locally on your device.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="3. How We Use Information">
        <p className="mb-3">The Player Names you enter are used exclusively to:</p>
        <ul className="flex flex-col gap-1 list-disc list-inside mb-4">
          <li>Display personalized in-game prompts and turn indicators (e.g., &ldquo;Alex&apos;s turn&rdquo;)</li>
          <li>Provide a more personal gameplay experience</li>
        </ul>
        <p>
          Player Names are <strong className="text-ink">never</strong> used for advertising,
          analytics, identification, or any purpose beyond the immediate in-app display described
          above.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Storage">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-ink mb-1">4.1 Local Storage Only</p>
            <p>
              All data — including Player Names and your Premium status — is stored exclusively
              using your device&apos;s local storage. This data{" "}
              <strong className="text-ink">never leaves your device</strong> and is{" "}
              <strong className="text-ink">never transmitted to any server</strong>.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.2 No Account Required</p>
            <p>
              The App does not require you to create an account, register, or log in. There is no
              user account associated with your use of the App.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.3 Data Deletion</p>
            <p className="mb-2">
              You can delete all locally stored data at any time within the App:
            </p>
            <ol className="flex flex-col gap-1 list-decimal list-inside">
              <li>Open <strong className="text-ink">Settings</strong> in the App</li>
              <li>Scroll to the <strong className="text-ink">Data</strong> section</li>
              <li>Tap <strong className="text-ink">Reset All Data</strong></li>
            </ol>
            <p className="mt-2">
              Uninstalling the App from your device will also delete all locally stored data.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="5. Third-Party Services">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-ink mb-1">5.1 Apple App Store and StoreKit</p>
            <p>
              We use Apple&apos;s native in-app purchase framework (StoreKit) to process
              subscription payments. Apple&apos;s privacy practices are governed by Apple&apos;s
              own Privacy Policy, available at{" "}
              <a
                href="https://www.apple.com/privacy"
                className="text-forest underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                apple.com/privacy
              </a>
              . We encourage you to review Apple&apos;s Privacy Policy to understand how Apple
              handles your data in connection with App Store purchases.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">5.2 No Third-Party Analytics</p>
            <p>
              We do not use any third-party analytics services (e.g., Firebase Analytics,
              Mixpanel, Amplitude, Adjust, AppsFlyer, or similar). No data about your usage of
              the App is collected or shared for analytics purposes.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">5.3 No Third-Party Advertising</p>
            <p>
              We do not display third-party advertisements and do not use advertising SDKs or ad
              networks of any kind.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">5.4 No Social Media Integrations</p>
            <p>
              The App does not integrate with or transmit data to any social media platforms.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="6. Data Sharing and Disclosure">
        <p className="mb-3">
          We do not sell, trade, rent, or share your personal information with any third parties,
          except in the following limited circumstances:
        </p>
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-ink mb-1">Legal Compliance</p>
            <p>
              If required to do so by law, court order, or governmental authority, we may disclose
              information as necessary. However, since we do not collect or store personal
              information on our servers, there is no personal data we could disclose.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">Business Transfers</p>
            <p>
              In the event of a merger, acquisition, or sale of assets, any information we hold
              (which, as noted, is stored only on your device) would not be transferred to any
              acquiring party.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="7. Children's Privacy">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-ink mb-1">7.1 Age Restriction</p>
            <p>
              The App is <strong className="text-ink">not directed to or intended for use by
              children under the age of 13</strong>. We do not knowingly collect personal
              information from children under 13. The App requires users to be at least{" "}
              <strong className="text-ink">17 years of age</strong>, and certain features require
              users to be at least <strong className="text-ink">18 years of age</strong>.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">7.2 COPPA Compliance</p>
            <p>
              We comply with the Children&apos;s Online Privacy Protection Act (COPPA). Because
              the App does not collect personal information from any users, and is explicitly
              age-restricted, it is not directed to children under 13.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">7.3 Parental Notice</p>
            <p>
              If you believe a child under 13 has used this App and provided personal information,
              please contact us immediately at{" "}
              <a href="mailto:melihbahriaktan@gmail.com" className="text-forest underline">
                melihbahriaktan@gmail.com
              </a>
              . Since all data is stored locally on the device, a parent or guardian can delete
              the data by following the steps in Section 4.3 or by uninstalling the App.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="8. California Privacy Rights (CCPA / CPRA)">
        <p className="mb-3">
          If you are a California resident, you have certain rights under the California Consumer
          Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
        </p>
        <div className="flex flex-col gap-3">
          {[
            ["Right to Know", "You have the right to request information about the categories and specific pieces of personal information we have collected about you. As described in this policy, we do not collect or store personal information on our servers."],
            ["Right to Delete", "You have the right to request deletion of your personal information. Since all data is stored locally on your device, you can delete it at any time per Section 4.3."],
            ["Right to Non-Discrimination", "We will not discriminate against you for exercising any of your CCPA rights."],
            ["Right to Opt-Out of Sale", "We do not sell personal information. There is nothing to opt out of."],
          ].map(([right, desc]) => (
            <div key={right}>
              <p className="font-semibold text-ink mb-1">{right}</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          To exercise your rights or for questions specific to California privacy law, contact us
          at{" "}
          <a href="mailto:melihbahriaktan@gmail.com" className="text-forest underline">
            melihbahriaktan@gmail.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="9. Other U.S. State Privacy Rights">
        <p>
          Residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), and
          other states with comprehensive privacy laws may have similar rights to those described
          in Section 8. Because we do not collect or retain personal information on our servers,
          most of these rights are satisfied by the App&apos;s local-only data design. For any
          inquiries, please contact us at{" "}
          <a href="mailto:melihbahriaktan@gmail.com" className="text-forest underline">
            melihbahriaktan@gmail.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="10. Data Security">
        <p className="mb-3">
          Although we do not transmit or store personal data on our servers, we take reasonable
          precautions to protect the integrity of the App. Locally stored data is subject to the
          security measures provided by your device&apos;s operating system (iOS). We recommend:
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside mb-3">
          <li>Keeping your device software up to date</li>
          <li>Using a device passcode or Face ID / Touch ID</li>
          <li>Not sharing your device with untrusted individuals</li>
        </ul>
        <p>
          No method of electronic storage or transmission is 100% secure. We cannot guarantee
          absolute security.
        </p>
      </LegalSection>

      <LegalSection title="11. Data Retention">
        <p className="mb-2">
          Player Names and Premium status are stored locally on your device and retained until
          you:
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside mb-3">
          <li>Manually reset the data via the in-app <strong className="text-ink">Reset All Data</strong> option</li>
          <li>Uninstall the App</li>
        </ul>
        <p>
          We do not retain any user data on our servers because we do not collect it in the first
          place.
        </p>
      </LegalSection>

      <LegalSection title="12. International Users">
        <p>
          The App is intended for use in the United States and other jurisdictions where it is
          legally available. If you are accessing the App from outside the United States, please
          be aware that data you provide (Player Names) is stored locally on your device in your
          jurisdiction. No data is transferred internationally to our servers.
        </p>
      </LegalSection>

      <LegalSection title="13. Links to Third-Party Websites">
        <p>
          The App may contain links to third-party websites (e.g., the App Store review page,
          our website). These third-party sites have their own privacy policies, and we are not
          responsible for their content or privacy practices. We encourage you to review the
          privacy policies of any third-party sites you visit.
        </p>
      </LegalSection>

      <LegalSection title="14. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material
          changes by updating the &ldquo;Last Updated&rdquo; date at the top of this document.
          For significant changes, we will provide a more prominent notice within the App. Your
          continued use of the App after the effective date of any changes constitutes your
          acceptance of the updated Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact Us">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-ink">DateSync</p>
          <p>
            Email:{" "}
            <a href="mailto:melihbahriaktan@gmail.com" className="text-forest underline">
              melihbahriaktan@gmail.com
            </a>
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
