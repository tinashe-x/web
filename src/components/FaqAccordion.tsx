"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function FaqAccordion({ items = faqs }: { items?: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-xl text-charcoal md:text-2xl">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-taupe transition ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 max-w-2xl text-sm leading-relaxed text-charcoal/70 md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
