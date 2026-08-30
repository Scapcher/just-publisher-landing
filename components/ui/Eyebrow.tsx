interface EyebrowProps {
  label: string;
  number?: string;
}

export function Eyebrow({ label }: EyebrowProps) {
  return (
    <div className="flex items-center gap-4 mb-10 lg:mb-14">
      <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-sand" aria-hidden="true" />
    </div>
  );
}
