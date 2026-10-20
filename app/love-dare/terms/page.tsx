import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use — Love Dare: For Couples",
  description: "Terms of Use for the Love Dare: For Couples mobile application.",
};

export default function LoveDareTermsPage() {
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
          Terms of Use
        </h1>
        <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
          These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between
          you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and DateSync (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to and use of the
          DateSync mobile application (&ldquo;App&rdquo;).
        </p>
        <p
          className="text-muted mt-3 font-semibold uppercase tracking-wide"
          style={{ fontSize: 13 }}
        >
          By downloading, installing, or using the App, you agree to be bound by these Terms. If
          you do not agree, do not download or use the App.
        </p>
      </div>

      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using DateSync, you confirm that you have read, understood, and agree
          to be bound by these Terms and our Privacy Policy, which is incorporated herein by
          reference. If you are using the App on behalf of any entity, you represent that you
          have the authority to bind that entity to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility and Age Requirements">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-ink mb-1">2.1 General Eligibility</p>
            <p>
              You must be at least <strong className="text-ink">17 years of age</strong> to
              download and use this App. By using the App, you represent and warrant that you
              meet this minimum age requirement.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">2.2 Adult Content</p>
            <p>
              Certain features of the App contain explicit adult content intended for users aged{" "}
              <strong className="text-ink">18 years and older</strong>. By accessing those
              features, you represent and warrant that you are at least 18 years old. We do not
              independently verify age. You accept sole responsibility for any misrepresentation
              of your age.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">2.3 Parental Responsibility</p>
            <p>
              If you are a parent or guardian and you allow a minor to use the App, you agree to
              these Terms on behalf of that minor and accept full responsibility for their use of
              the App.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="3. License Grant">
        <p>
          Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable license to download, install, and use the App on a device
          that you own or control, solely for your personal, non-commercial entertainment
          purposes.
        </p>
      </LegalSection>

      <LegalSection title="4. Subscriptions and In-App Purchases">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-ink mb-1">4.1 Premium Subscription</p>
            <p className="mb-2">
              The App offers an auto-renewable premium subscription (&ldquo;Premium&rdquo;) that
              unlocks additional features. Subscription options include:
            </p>
            <ul className="flex flex-col gap-1 list-disc list-inside">
              <li><strong className="text-ink">Monthly Plan:</strong> billed monthly</li>
              <li><strong className="text-ink">Annual Plan:</strong> billed annually</li>
            </ul>
            <p className="mt-2">
              Prices are displayed within the App and may vary by region. All prices are inclusive
              of applicable taxes where required by law.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.2 Free Trial</p>
            <p>
              We may offer a free trial period for Premium. If a free trial is offered, you will
              not be charged during the trial period. After the trial period ends, you will
              automatically be charged the applicable subscription fee unless you cancel at least{" "}
              <strong className="text-ink">24 hours before</strong> the end of the trial period.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.3 Auto-Renewal</p>
            <p>
              Your subscription automatically renews at the end of each billing period unless you
              cancel it at least 24 hours before the end of the current period. Your Apple ID
              account will be charged for renewal within 24 hours prior to the end of the current
              period. The renewal price will be the same as the original subscription price unless
              you are notified otherwise.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.4 Cancellation</p>
            <p className="mb-2">
              You may cancel your subscription at any time through your{" "}
              <strong className="text-ink">Apple ID Account Settings</strong>:
            </p>
            <ol className="flex flex-col gap-1 list-decimal list-inside">
              <li>Open <strong className="text-ink">Settings</strong> on your iPhone or iPad</li>
              <li>Tap your name → <strong className="text-ink">Subscriptions</strong></li>
              <li>Select <strong className="text-ink">DateSync</strong> and tap <strong className="text-ink">Cancel Subscription</strong></li>
            </ol>
            <p className="mt-2">
              Cancellation takes effect at the end of the current billing period. You will retain
              access to Premium features until the end of the paid period. We do not provide
              refunds for partial subscription periods, except as required by applicable law or
              Apple&apos;s refund policy.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.5 Price Changes</p>
            <p>
              We reserve the right to change subscription prices. If we change the price of your
              subscription, we will provide reasonable advance notice. Continued use of the App
              after a price change constitutes your acceptance of the new price.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.6 Billing Through Apple</p>
            <p>
              All payments are processed through Apple&apos;s App Store payment system. We do not
              collect or store your payment information. Apple&apos;s terms and conditions apply
              to all purchases. For billing issues, please contact Apple Support or visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                className="text-forest underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                reportaproblem.apple.com
              </a>
              .
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">4.7 Refunds</p>
            <p>
              All purchases are final except as required by applicable law or Apple&apos;s refund
              policy. To request a refund, visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                className="text-forest underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                reportaproblem.apple.com
              </a>
              .
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="5. User Data and Privacy">
        <p>
          The App stores your and your partner&apos;s first names locally on your device. We do
          not collect, transmit, or store any personal information on external servers. For
          complete details, please review our{" "}
          <a href="/love-dare/privacy" className="text-forest underline">
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-ink mb-1">6.1 Ownership</p>
            <p>
              The App and all of its content, features, and functionality — including but not
              limited to text, graphics, logos, game mechanics, software, and design — are owned
              by us or our licensors and are protected by United States and international
              intellectual property laws.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">6.2 Restrictions</p>
            <p className="mb-2">You may not, and you agree not to:</p>
            <ul className="flex flex-col gap-1 list-disc list-inside">
              <li>Copy, modify, distribute, sell, or lease any part of the App</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>Use the App&apos;s content for any commercial purpose without our express written consent</li>
              <li>Create derivative works based on the App</li>
            </ul>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="7. Prohibited Conduct">
        <p className="mb-3">You agree not to use the App to:</p>
        <ul className="flex flex-col gap-1 list-disc list-inside">
          <li>Violate any applicable federal, state, local, or international law or regulation</li>
          <li>Harass, abuse, or harm another person</li>
          <li>Impersonate any person or entity</li>
          <li>Attempt to gain unauthorized access to any portion of the App or its related systems</li>
          <li>Interfere with or disrupt the integrity or performance of the App</li>
          <li>Use any automated means to access or interact with the App</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Disclaimer of Warranties">
        <p className="font-semibold text-ink mb-3 uppercase tracking-wide text-[13px]">
          The App is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranty
          of any kind, express or implied. To the fullest extent permitted by applicable law, we
          disclaim all warranties, including but not limited to warranties of merchantability,
          fitness for a particular purpose, and non-infringement.
        </p>
        <p className="mb-2">We do not warrant that:</p>
        <ul className="flex flex-col gap-1 list-disc list-inside">
          <li>The App will be uninterrupted, error-free, or secure</li>
          <li>Any defects will be corrected</li>
          <li>The App is free of viruses or other harmful components</li>
          <li>The results obtained from use of the App will be accurate or reliable</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p className="font-semibold text-ink mb-3 uppercase tracking-wide text-[13px]">
          To the maximum extent permitted by applicable law, in no event shall we be liable for
          any indirect, incidental, special, consequential, exemplary, or punitive damages,
          including but not limited to loss of profits, data, or goodwill, arising out of or in
          connection with your use of or inability to use the App, even if we have been advised
          of the possibility of such damages.
        </p>
        <p className="mb-3">
          Our total liability to you for any claims arising from these Terms or your use of the
          App shall not exceed the amount you paid us in the twelve (12) months preceding the
          claim, or $10.00, whichever is greater.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or the limitation
          of certain damages. In those jurisdictions, our liability is limited to the fullest
          extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="10. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless DateSync and its officers, directors,
          employees, and agents from and against any claims, liabilities, damages, judgments,
          awards, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising
          out of or relating to your violation of these Terms or your use of the App.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law and Dispute Resolution">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-ink mb-1">11.1 Governing Law</p>
            <p>
              These Terms are governed by and construed in accordance with the laws of the{" "}
              <strong className="text-ink">State of Delaware, United States</strong>, without
              regard to its conflict of law provisions.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">11.2 Informal Resolution</p>
            <p>
              Before filing a claim, you agree to attempt to resolve the dispute informally by
              contacting us at the address below. We will attempt to resolve the dispute within 30
              days of receipt of your notice.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">11.3 Binding Arbitration</p>
            <p>
              If informal resolution fails, you and we agree to resolve any dispute through{" "}
              <strong className="text-ink">binding arbitration</strong> administered by the
              American Arbitration Association (AAA) under its Consumer Arbitration Rules, rather
              than in court, except that you may assert claims in small claims court if your
              claims qualify.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">11.4 Class Action Waiver</p>
            <p className="uppercase tracking-wide text-[13px] font-semibold text-ink">
              You and we agree that each may bring claims against the other only in an individual
              capacity and not as a plaintiff or class member in any purported class or
              representative proceeding.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">11.5 Exceptions</p>
            <p>
              Notwithstanding the above, either party may seek injunctive or other equitable
              relief in any court of competent jurisdiction to protect intellectual property
              rights.
            </p>
          </div>
        </div>
      </LegalSection>

      <LegalSection title="12. Apple-Specific Terms">
        <p className="mb-3">
          The following terms apply with respect to your use of the App obtained through the
          Apple App Store:
        </p>
        <div className="flex flex-col gap-3">
          {[
            ["Acknowledgment", "These Terms are between you and DateSync only, not Apple, Inc. (\"Apple\"). Apple is not responsible for the App or its content."],
            ["Scope of License", "The license granted to you is limited to a non-transferable license to use the App on any Apple-branded products that you own or control as permitted by the App Store Terms of Service."],
            ["Maintenance and Support", "We are solely responsible for providing maintenance and support for the App. Apple has no obligation to furnish any maintenance or support services."],
            ["Warranty", "In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation with respect to the App."],
            ["Product Claims", "We, not Apple, are responsible for addressing any claims relating to the App, including product liability claims, consumer protection claims, intellectual property infringement claims, and any other claims."],
            ["Third-Party Terms", "You must comply with applicable third-party terms of agreement when using the App."],
            ["Third-Party Beneficiary", "Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary."],
          ].map(([title, desc]) => (
            <div key={title}>
              <p className="font-semibold text-ink mb-1">{title}</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="13. Termination">
        <p>
          We reserve the right to terminate or suspend your access to the App at any time,
          without notice, for any reason, including if we reasonably believe you have violated
          these Terms. Upon termination, all provisions that by their nature should survive will
          survive, including ownership provisions, warranty disclaimers, indemnification, and
          limitations of liability.
        </p>
      </LegalSection>

      <LegalSection title="14. Changes to These Terms">
        <p>
          We reserve the right to modify these Terms at any time. We will notify you of material
          changes by updating the &ldquo;Last Updated&rdquo; date at the top of this document.
          Your continued use of the App after changes become effective constitutes your acceptance
          of the revised Terms. If you do not agree to the revised Terms, please discontinue use
          of the App.
        </p>
      </LegalSection>

      <LegalSection title="15. Severability">
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision
          will be modified to the minimum extent necessary to make it enforceable, and the
          remaining provisions will continue in full force and effect.
        </p>
      </LegalSection>

      <LegalSection title="16. Entire Agreement">
        <p>
          These Terms, together with our Privacy Policy, constitute the entire agreement between
          you and DateSync regarding your use of the App and supersede all prior agreements and
          understandings.
        </p>
      </LegalSection>

      <LegalSection title="17. Contact Us">
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
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
