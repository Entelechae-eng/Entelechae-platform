"use client";

import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  org: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Entelechae's commitment to patient, sovereign engineering is deeply refreshing in an industry obsessed with rushed MVPs. Atelier feels like the future of creative computing.",
    author: "Elena Rostova",
    role: "Founding Architect",
    org: "Sovereign Systems Lab",
  },
  {
    quote:
      "Working with their research branch gave us direct insights into computational synthesis months before anyone else in the field even formulated the problem statement.",
    author: "Dr. Marcus Vance",
    role: "Director of Computational Cognition",
    org: "Synthetics Institute",
  },
  {
    quote:
      "The taste level and technical rigor are indistinguishable. You rarely see deep systems architecture married with this calibre of interface craft.",
    author: "Devon Chen",
    role: "Principal Product Designer",
    org: "Kinetics Studio",
  },
];

export function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-white/10 bg-[#0e0e13]/60 p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-emerald-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="border-t border-white/[0.08] pt-5">
              <div className="font-semibold text-white text-sm tracking-tight">
                {t.author}
              </div>
              <div className="text-xs font-mono text-neutral-400 mt-0.5">
                {t.role} · <span className="text-neutral-300">{t.org}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

