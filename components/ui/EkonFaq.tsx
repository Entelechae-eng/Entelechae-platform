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
      "Entelechæ is an independent technology studio and computational research company founded by Sahurain and Tantresh Sahu. We build sovereign platforms, native WebGPU engines, and deterministic systems designed for 100-year horizons.",
  },
  {
    question: "What makes Atelier Studio sovereign?",
    answer:
      "Atelier Studio runs directly on local hardware via WebGPU and WebAssembly. Your project files, canvas states, and cryptographic keys remain strictly on your local machine with zero telemetry, zero cloud lock-in, and full offline-first autonomy.",
  },
  {
    question: "How does Entelechæ approach capital and governance?",
    answer:
      "We operate as an independent foundation prioritizing patient capital, sovereign stewardship, and uncompromising engineering craft over rapid venture exit cycles.",
  },
  {
    question: "What disciplines and capabilities do you offer?",
    answer:
      "We focus on Platform Engineering (Rust, WebAssembly, WebGPU), Computational Cognition & Synthesis, Editorial Interface Architecture, and Sovereign Escrow protocols.",
  },
  {
    question: "How can engineering teams or researchers collaborate with you?",
    answer:
      "We partner with selected institutions, independent researchers, and sovereign studios on cryptographic protocols, WebGPU engineering, and cognitive ergonomics. Reach out to entelechae@gmail.com or sahurain15@gmail.com.",
  },
  {
    question: "Where is Entelechæ based?",
    answer:
      "Our core engineering and stewardship nodes are anchored across New Delhi and San Francisco.",
  },
];

export function EkonFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full divide-y divide-white/10 border-y border-white/10">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question} className="py-6 sm:py-8 transition-colors">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between text-left group cursor-pointer"
            >
              <span className="text-base sm:text-xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                {faq.question}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 ml-4 group-hover:bg-white group-hover:text-black transition-all">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>
            {isOpen && (
              <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-3xl pr-8">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
