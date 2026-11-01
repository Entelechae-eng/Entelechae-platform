import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  tag: string;
  category: string;
  description: string;
  href: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const ecosystemNodes: NodeItem[] = [
  {
    id: "atelier",
    name: "Atelier Studio",
    tag: "FLAGSHIP",
    category: "CREATIVE SOFTWARE PLATFORM",
    description: "Native WebGPU canvas, local-first cryptographic storage, 120 FPS workstation.",
    href: "/platforms/atelier",
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "labs",
    name: "Computational Labs",
    tag: "RESEARCH",
    category: "LATENT SYNTHESIS & COGNITION",
    description: "Investigating generative synthesis models, cognitive ergonomics & deterministic formalisms.",
    href: "/research",
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
      </svg>
    ),
  },
  {
    id: "sovereign",
    name: "Sovereign Framework",
    tag: "INFRASTRUCTURE",
    category: "CRYPTOGRAPHIC ARCHITECTURE",
    description: "Zero external cloud dependencies, air-gapped readiness & complete user data ownership.",
    href: "/platforms#sovereign",
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "foundation",
    name: "Parent Foundation",
    tag: "GOVERNANCE",
    category: "PATIENT VENTURE STEWARDSHIP",
    description: "100-year institutional capital and stewardship shielding engineering integrity.",
    href: "/company",
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M3 10h18" />
        <path d="M12 3l9 7H3l9-7z" />
        <path d="M6 10v11" />
        <path d="M10 10v11" />
        <path d="M14 10v11" />
        <path d="M18 10v11" />
      </svg>
    ),
  },
  {
    id: "stewards",
    name: "Sahurain & Tantresh Sahu",
    tag: "STEWARDS",
    category: "FOUNDING PRINCIPALS & ARCHITECTS",
    description: "Guiding the creative, philosophical, and architectural direction of the Entelechæ ecosystem.",
    href: "/company#stewards",
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "mesh",
    name: "Global Node Network",
    tag: "ACTIVE",
    category: "SAN FRANCISCO · LONDON · NEW DELHI · TOKYO",
    description: "Distributed execution nodes and asynchronous research hubs maintaining continuous operation.",
    href: "/contact",
    icon: ({ className = "w-6 h-6" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export function EcosystemStrip() {
  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-8 border-y border-white/[0.08] bg-[#070709]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">
              [ SOVEREIGN ECOSYSTEM & NODES ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Pioneering Platforms, Research & Stewards
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            ALL NODES ACTIVE · 2026 HORIZON
          </span>
        </div>

        {/* 6-Card Grid: Names & Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ecosystemNodes.map((node) => {
            const Icon = node.icon;
            return (
              <Link
                key={node.id}
                href={node.href}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Top Row: Icon + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:text-emerald-400 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400 group-hover:text-white transition-colors">
                    {node.tag}
                  </span>
                </div>

                {/* Middle: Name & Category */}
                <div className="space-y-2 mb-4">
                  <div className="text-[11px] font-mono tracking-wider text-emerald-400/90 uppercase">
                    {node.category}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                    <span>{node.name}</span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-neutral-400"
                    />
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {node.description}
                  </p>
                </div>

                {/* Bottom Border Glow Accent */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-emerald-400/40 transition-colors mt-2" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

