"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Capability {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
}

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Platform Incubation",
    subtitle: "From thesis to sovereign product",
    description:
      "We conceive, architect, and engineer complete software platforms from the metal up. No hurried MVPs—only enduring environments built for consequence.",
    tags: ["Native Runtimes", "Deterministic Engines", "Studio Workflows"],
    href: "/platforms",
  },
  {
    number: "02",
    title: "Computational Research",
    subtitle: "Pioneering new foundational primitives",
    description:
      "Our research labs investigate generative cognition, mathematical formalisms, and human-computer resonance before commercial paradigms emerge.",
    tags: ["Generative Synthesis", "Cognitive Ergonomics", "Published Theses"],
    href: "/research",
  },
  {
    number: "03",
    title: "Sovereign Systems",
    subtitle: "Zero-dependency infrastructure",
    description:
      "We believe technology should belong to those who build it. Our architectures feature cryptographic privacy, local-first performance, and absolute data sovereignty.",
    tags: ["Local-First", "Cryptographic Integrity", "Hardened Security"],
    href: "/platforms#sovereign",
  },
  {
    number: "04",
    title: "Editorial Design & Taste",
    subtitle: "High aesthetic meets engineering rigor",
    description:
      "Form and function in absolute union. We treat digital interfaces as works of modern architecture—considered, tactile, and unforgettable.",
    tags: ["Fluid Micro-interactions", "High-Contrast Typography", "Spatial Design"],
    href: "/company",
  },
];

export function CapabilitiesList() {
  return (
    <div className="w-full max-w-7xl mx-auto divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {capabilities.map((cap) => (
        <Link
          key={cap.number}
          href={cap.href}
          className="group block py-10 sm:py-14 px-4 sm:px-8 hover:bg-white/[0.02] transition-colors duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Number */}
            <div className="md:col-span-2">
              <span className="font-mono text-2xl sm:text-3xl text-neutral-500 font-light group-hover:text-white transition-colors">
                {cap.number}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="md:col-span-5 space-y-1">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors flex items-center gap-2">
                <span>{cap.title}</span>
                <ArrowUpRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-neutral-400"
                />
              </h3>
              <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider">
                {cap.subtitle}
              </p>
            </div>

            {/* Description & Tags */}
            <div className="md:col-span-5 space-y-4">
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

