// Note: This document is a template. Review with legal counsel before publishing.
import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — JustPublisher",
};

const cookieCategories = [
  {
    category: "Essential",
    purpose: "Session management, security, core functionality",
    required: "Yes",
  },
  {
    category: "Analytics",
    purpose: "Usage patterns, page views, performance (Plausible Analytics)",
    required: "No",
  },
  {
    category: "Marketing",
    purpose: "Ad attribution, conversion tracking",
    required: "No",
  },
];

export default function CookiesPage() {
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
          Cookie Policy
        </h1>
      </div>

      <LegalSection title="What Are Cookies">
        <p>
          Cookies are small text files stored on your device when you visit our website. They
          help us deliver a consistent experience and understand how our site is used.
        </p>
      </LegalSection>

      <LegalSection title="Cookie Categories">
        <div className="overflow-x-auto mt-2">
          <table className="w-full" style={{ fontSize: 15, borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #E7E1B1" }}>
                <th className="text-left pb-2 font-semibold text-ink" style={{ paddingRight: 16 }}>
                  Category
                </th>
                <th className="text-left pb-2 font-semibold text-ink" style={{ paddingRight: 16 }}>
                  Purpose
                </th>
                <th className="text-left pb-2 font-semibold text-ink">Required</th>
              </tr>
            </thead>
            <tbody>
              {cookieCategories.map((row) => (
                <tr key={row.category} style={{ borderBottom: "1px solid #E7E1B1" }}>
                  <td
                    className="text-ink font-medium"
                    style={{ padding: "12px 16px 12px 0" }}
                  >
                    {row.category}
                  </td>
                  <td style={{ padding: "12px 16px 12px 0" }}>{row.purpose}</td>
                  <td style={{ padding: "12px 0" }}>{row.required}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="Third-Party Cookies">
        <p>
          We may use analytics tools that set their own cookies. We do not use advertising
          networks that track you across sites.
        </p>
      </LegalSection>

      <LegalSection title="Managing Cookies">
        <p>
          You can control cookies through your browser settings. Note that disabling cookies may
          affect the functionality of our website.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          <a href="mailto:privacy@justpublisher.com" className="text-forest underline">
            privacy@justpublisher.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
