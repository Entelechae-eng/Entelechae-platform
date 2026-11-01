"use client";

import React from "react";

interface MarqueeProps {
  items?: string[];
  className?: string;
  speed?: "fast" | "normal" | "slow";
  reverse?: boolean;
}

export function Marquee({
  items = [
    "ATELIER STUDIO",
    "COMPUTATIONAL RESEARCH",
    "SOVEREIGN ARCHITECTURE",
    "AUTONOMOUS PLATFORMS",
    "NEXT-GEN COMPUTING",
    "UNCOMPROMISED PRECISION",
    "PATIENT CAPITAL",
    "ZERO DEPENDENCY",
  ],
  className = "",
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={`relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090c]/40 backdrop-blur-md py-4 ${className}`}
    >
      <div className="flex select-none">
        <div
          className={`flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee-slow ${
            reverse ? "direction-reverse" : ""
          }`}
        >
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8">
              <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-neutral-300 font-medium uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-600 shrink-0" />
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className={`flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee-slow ${
            reverse ? "direction-reverse" : ""
          }`}
        >
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8">
              <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-neutral-300 font-medium uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-600 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
