"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  index: number;
}) {
  const bodyId = `${id}-body`;
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="border-b border-sand last:border-b-0"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 500ms ${index * 60}ms cubic-bezier(0.22,1,0.36,1), transform 500ms ${index * 60}ms cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <button
        className={cn(
          "w-full flex items-center justify-between gap-4 py-5 text-left",
          "hover:bg-[rgba(48,109,41,0.04)] transition-colors duration-160 -mx-4 px-4 rounded-item"
        )}
        aria-expanded={isOpen}
        aria-controls={bodyId}
        onClick={onToggle}
      >
        <span
          className="font-medium text-ink"
          style={{ fontSize: 17, letterSpacing: "-0.005em", lineHeight: 1.4 }}
        >
          {question}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "text-muted text-xl font-light leading-none flex-shrink-0 transition-transform duration-[220ms] ease-smooth",
            isOpen && "rotate-45"
          )}
        >
          +
        </span>
      </button>

      {/* Height transition via grid-template-rows */}
      <div
        id={bodyId}
        role="region"
        aria-labelledby={id}
        className="grid transition-all duration-[320ms] ease-smooth overflow-hidden"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="text-muted pb-5 max-w-[640px]"
            style={{
              fontSize: 17,
              letterSpacing: "-0.005em",
              lineHeight: 1.55,
              transform: isOpen ? "translateY(0)" : "translateY(8px)",
              transition: "transform 320ms cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const { t } = useLocale();
  const { faq } = t;
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { ref: headRef, inView: headInView } = useInView({ threshold: 0.15 });

  return (
    <section
      className="px-[clamp(20px,5vw,48px)]"
      aria-labelledby="faq-heading"
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
          <Eyebrow label={faq.eyebrow} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          {/* Left: sticky title */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              style={{
                opacity: headInView ? 1 : 0,
                transform: headInView ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 520ms 80ms cubic-bezier(0.22,1,0.36,1), transform 520ms 80ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <h2
                id="faq-heading"
                className="text-optical"
                style={{
                  fontSize: "clamp(38px, 5vw, 76px)",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 0.95,
                }}
              >
                {faq.title}
              </h2>
              <p className="text-muted mt-4" style={{ fontSize: 17, lineHeight: 1.55 }}>
                {faq.stillUnsure}{" "}
                <a
                  href="mailto:hello@justpublisher.com"
                  className="text-ink underline underline-offset-4 hover:text-forest transition-colors duration-160 group"
                >
                  {faq.bookCall}
                  <span
                    aria-hidden="true"
                    className="inline-block ml-1 transition-transform duration-160 ease-spring group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </p>
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            {faq.items.map((item, i) => (
              <AccordionItem
                key={item.question}
                id={`faq-${i}`}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
