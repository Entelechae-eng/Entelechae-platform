"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white/[0.04] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                : "bg-white/[0.02] border-white/8 hover:border-white/15"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                {item.category && (
                  <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10">
                    {item.category}
                  </span>
                )}
                <span className="text-base sm:text-lg font-medium text-white tracking-tight">
                  {item.question}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isOpen
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-neutral-400 border-white/10 group-hover:border-white/25"
                }`}
              >
                {isOpen ? <Minus size={15} /> : <Plus size={15} />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-400 leading-relaxed font-light border-t border-white/[0.04]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

