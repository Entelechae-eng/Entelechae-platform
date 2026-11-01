"use client";

import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

const tiers: PlanTier[] = [
  {
    id: "creator",
    name: "Atelier Creator",
    price: "Early Access",
    period: "Private Cohort 2026",
    description: "For independent engineers, architects, and studio creators building on Atelier.",
    features: [
      "Full Atelier Studio Desktop Environment",
      "Native Canvas & Sovereign Runtime",
      "Local-First File Integrity & Export",
      "Access to Private Builder Discord",
      "Regular Platform Releases & Fixes",
    ],
    ctaLabel: "Request Early Access",
    ctaHref: "/contact?tier=creator",
  },
  {
    id: "research",
    name: "Research Partner",
    badge: "MOST REQUESTED",
    popular: true,
    price: "Collaborative",
    period: "Institutional & Labs",
    description: "For research institutions, labs, and pioneers co-developing proprietary models.",
    features: [
      "All Atelier Creator Capabilities",
      "Early Access to Computational Lab Previews",
      "Proprietary Synthesis Model Weights & APIs",
      "Direct Line to Core Engineering Team",
      "Quarterly Architectural Roadmaps & Briefings",
      "Joint Academic & Technical Authorship",
    ],
    ctaLabel: "Apply for Partnership",
    ctaHref: "/contact?tier=research",
  },
  {
    id: "enterprise",
    name: "Enterprise Sovereign",
    price: "Custom",
    period: "Bespoke Governance",
    description: "For sovereign organizations requiring custom deployments, zero-leak isolation, and dedicated runtimes.",
    features: [
      "Custom Air-Gapped Platform Deployments",
      "Full Source Code Escrow & Licensing",
      "Dedicated Architectural Advisory & Support",
      "Guaranteed Enterprise 99.99% Availability",
      "Cryptographic Sovereignty & HSM Integration",
      "Custom Extension & Workflow Development",
    ],
    ctaLabel: "Initiate Dialogue",
    ctaHref: "/contact?tier=enterprise",
  },
];

export function PricingCards() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${tier.popular
                ? "bg-gradient-to-b from-[#14141c] to-[#0c0c10] border-2 border-emerald-500/30 shadow-[0_20px_50px_rgba(16,185,129,0.12)] scale-[1.02]"
                : "bg-[#0e0e13]/80 border border-white/10 hover:border-white/20 shadow-xl"
              }`}
          >
            {/* Ambient Popular Glow */}
            {tier.popular && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            )}

            <div>
              {/* Top row */}
              <div className="flex items-center justify-between pb-4">
                <span className="text-sm font-semibold tracking-tight text-white">
                  {tier.name}
                </span>
                {tier.badge && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    {tier.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="py-4 border-b border-white/[0.08]">
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
                  {tier.price}
                </div>
                <div className="text-xs font-mono text-neutral-400 mt-1">
                  {tier.period}
                </div>
              </div>

              {/* Description */}
              <p className="py-6 text-sm text-neutral-400 font-light leading-relaxed">
                {tier.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                  Included capabilities:
                </span>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        <Check size={11} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8 mt-8 border-t border-white/[0.08]">
              <Link
                href={tier.ctaHref}
                className={`w-full py-3.5 px-6 rounded-full text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-200 group ${tier.popular
                    ? "bg-white text-black font-semibold hover:bg-neutral-200 shadow-lg"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/15"
                  }`}
              >
                <span>{tier.ctaLabel}</span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
