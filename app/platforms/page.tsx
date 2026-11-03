import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { platforms } from "@/data/platforms";

export const metadata = {
  title: "Platforms — Entelechæ Sovereign Ecosystem",
  description:
    "Official production platforms by Entelechae: Entelechae Visuals (29K+ creative web resources) and Entelechae Code (Sovereign AI Workbench).",
};

const ecosystemStats = [
  { value: "02", label: "Production Platforms" },
  { value: "29,627", label: "Creative Resources" },
  { value: "100%", label: "Local Data Sovereignty" },
  { value: "Zero", label: "Telemetry Tracking" },
];

const architecturalTenets = [
  {
    index: "01",
    title: "Client-Side Sovereignty",
    description:
      "All platforms are architected around local-first data storage (SQLite, local files) with zero telemetry, giving users total ownership of their intellectual property.",
  },
  {
    index: "02",
    title: "Multi-Model & Open Standards",
    description:
      "Extensible protocols like MCP (Model Context Protocol) and open web standards (React, WebGPU, WebAssembly) eliminate proprietary vendor lock-in.",
  },
  {
    index: "03",
    title: "Century-Scale Permanence",
    description:
      "Engineered from first principles with patient capital and sovereign governance, insulated from short-term venture capital churn and deprecations.",
  },
];

export default function PlatformsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-20 sm:space-y-28 bg-black text-white select-none">
      {/* ─── Header ─── */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          01 / OFFICIAL PLATFORMS &amp; ECOSYSTEM
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
          Software built to endure.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
          Official production platforms and sovereign computing environments conceived, engineered,
          and maintained by Entelechae (@Entelechae-eng).
        </p>
      </div>

      {/* ─── Ecosystem Metric Strip ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/[0.08]">
        {ecosystemStats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-mono text-white tracking-tight">
              {s.value}
            </div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ─── Detailed Platforms Showcase ─── */}
      <div className="space-y-24 sm:space-y-32">
        {platforms.map((platform, idx) => (
          <section
            key={platform.id}
            id={platform.id}
            className="space-y-8 scroll-mt-28"
          >
            {/* Platform Sub-Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  0{idx + 1}
                </span>
                <span className="text-neutral-700">/</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  {platform.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-neutral-300 px-2 py-0.5 bg-white/[0.04] border border-white/10 rounded-[2px]">
                  {platform.status}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {platform.version}
                </span>
              </div>
            </div>

            {/* Platform Main Grid: Interface Preview + Comprehensive Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Authentic Interface Preview */}
              <div className="lg:col-span-7 space-y-3">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-black border border-white/10 hover:border-white/30 transition-colors"
                >
                  <Image
                    src={platform.previewImage}
                    alt={platform.previewAlt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/85 backdrop-blur-md rounded-[2px] border border-white/15 text-white text-xs font-mono opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>Explore Interface</span>
                    <ArrowUpRight size={13} />
                  </div>
                </a>

                {/* Sub-label under preview */}
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-1">
                  <span>AUTHENTIC INTERFACE CAPTURE</span>
                  <span>{platform.name}</span>
                </div>
              </div>

              {/* Right Column: Platform Identity, Metrics, and Verified Capabilities */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                    {platform.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {platform.headline}
                  </p>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed pt-1">
                    {platform.description}
                  </p>
                </div>

                {/* Platform Mini-Metrics */}
                <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/[0.06]">
                  {platform.metrics.map((m) => (
                    <div key={m.label} className="space-y-0.5">
                      <div className="text-base sm:text-lg font-mono text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Verified Capabilities */}
                <div className="space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    VERIFIED CAPABILITIES
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300 font-light">
                    {platform.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <Check size={13} className="text-neutral-400 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black font-medium hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={platform.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/15 text-neutral-300 hover:text-white hover:border-white/30 transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>GitHub Code</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ─── Atelier Engine Architecture (Preserved & Unified) ─── */}
      <section className="pt-16 border-t border-white/[0.08] space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              02 / RUNTIME ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Sovereign Foundation &amp; Architecture
            </h2>
          </div>
          <Link
            href="/platforms/atelier"
            className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>Atelier Case Study</span>
            <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* 3 Architectural Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {architecturalTenets.map((t) => (
            <div key={t.title} className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-600 block">
                {t.index}
              </span>
              <h3 className="text-sm font-medium text-white tracking-tight">
                {t.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Scalability Note for Future Platforms ─── */}
      <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div>
          <span>ECOSYSTEM CATALOG · MAINTAINED BY @ENTELECHAE-ENG</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Entelechae-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub Organization</span>
            <ArrowUpRight size={11} />
          </a>
          <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
            Initiate Collaboration →
          </Link>
        </div>
      </div>
    </div>
  );
}
