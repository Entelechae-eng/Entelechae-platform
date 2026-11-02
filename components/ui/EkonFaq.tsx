"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Entelechæ?",
    answer:
      "Entelechæ is an independent technology company founded by Sahurain and Tantresh Sahu. We build sovereign platforms, native WebGPU engines, and long-horizon computational systems.",
  },
  {
    question: "What makes Atelier Studio sovereign?",
    answer:
      "Atelier runs client-side via native WebGPU and WebAssembly with local-first cryptographic storage. Your work remains completely offline with zero telemetry or cloud lock-in.",
  },
  {
    question: "How does Entelechæ approach funding and governance?",
    answer:
      "We operate with patient capital and 100-year horizons. We prioritize engineering permanence and craft over venture capital exit cycles.",
  },
  {
    question: "How can teams or researchers collaborate with you?",
    answer:
      "We partner with select institutions and independent researchers on cryptographic runtimes and WebGPU engineering. Reach out directly via entelechae@gmail.com.",
  },
  {
    question: "Where are your engineering nodes anchored?",
    answer:
      "Our founding stewardship and engineering nodes operate across New Delhi and San Francisco.",
  },
];

export function EkonFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question} className="py-5 transition-colors">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left group cursor-pointer"
            >
              <span className="text-sm sm:text-base font-normal text-neutral-200 group-hover:text-white transition-colors">
                {faq.question}
              </span>
              <div className="text-neutral-500 group-hover:text-white transition-colors shrink-0 ml-4">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>
            {isOpen && (
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
