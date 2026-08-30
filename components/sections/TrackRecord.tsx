"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { content } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";

function Counter({
  target,
  prefix,
  suffix,
  label,
}: {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start gap-2">
      <div
        className="font-extrabold text-forest tabular-nums"
        style={{
          fontSize: "clamp(46px, 6.5vw, 104px)",
          letterSpacing: "-0.04em",
          lineHeight: 0.9,
        }}
      >
        <span aria-hidden="true">{prefix}</span>
        <span>{value}</span>
        <span aria-hidden="true">{suffix}</span>
      </div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </p>
    </div>
  );
}

export function TrackRecord() {
  const { trackRecord } = content;

  return (
    <section
      id="about"
      className="px-[clamp(20px,5vw,48px)]"
      aria-labelledby="track-record-heading"
    >
      <div className="max-w-container mx-auto">
        <Eyebrow label={trackRecord.eyebrow} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-sand">
          {trackRecord.metrics.map((metric) => (
            <div
              key={metric.label}
              className="md:px-12 first:pl-0 last:pr-0"
            >
              <Counter
                target={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
