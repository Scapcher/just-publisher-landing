export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="max-w-[720px] mx-auto px-[clamp(20px,5vw,48px)] py-16">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-[14px] text-muted hover:text-forest transition-colors duration-160 mb-12 group"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-160 ease-spring group-hover:-translate-x-1"
          >
            ←
          </span>
          Back
        </a>
        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        className="text-ink mb-3"
        style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <div
        className="text-muted"
        style={{ fontSize: 17, lineHeight: 1.65, letterSpacing: "-0.005em" }}
      >
        {children}
      </div>
    </section>
  );
}
