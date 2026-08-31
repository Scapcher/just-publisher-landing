"use client";

import { useLocale } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Footer() {
  const { t } = useLocale();
  const { footer } = t;

  return (
    <footer className="border-t border-sand px-[clamp(20px,5vw,48px)] pb-10 pt-8">
      <div className="max-w-container mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
          <span className="font-semibold text-[15px] tracking-[-0.03em] text-ink">
            {footer.brand}
          </span>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-6 list-none">
              {footer.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-muted hover:text-forest transition-colors duration-160 hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher compact />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-sand">
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 list-none">
              {footer.legal.map((link, i) => (
                <li key={link.href} className="flex items-center gap-4">
                  {i > 0 && (
                    <span className="text-sand" aria-hidden="true">
                      •
                    </span>
                  )}
                  <a
                    href={link.href}
                    className="text-[14px] text-muted hover:text-forest transition-colors duration-160"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-[13px] text-muted">{footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}
