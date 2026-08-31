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
  index,
}: {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
  index: number;
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

    const delay = index * 120;
    const duration = 1400;
    let raf: number;
    let timer: ReturnType<typeof setTimeout>;

    timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [inView, target, index]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center md:items-start gap-2"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 640ms ${index * 120}ms cubic-bezier(0.22,1,0.36,1), transform 640ms ${index * 120}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
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
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      className="px-[clamp(20px,5vw,48px)]"
      aria-labelledby="track-record-heading"
    >
      <div className="max-w-container mx-auto">
        <div
          ref={headRef}
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 520ms cubic-bezier(0.22,1,0.36,1), transform 520ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Eyebrow label={trackRecord.eyebrow} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-sand">
          {trackRecord.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="md:px-12 first:pl-0 last:pr-0"
            >
              <Counter
                target={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                label={metric.label}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
