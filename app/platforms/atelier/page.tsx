import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HeroVideo } from "@/components/ui/HeroVideo";

const specifications = [
  { label: "Platform Category", value: "Creative Engineering & Spatial Workspace" },
  { label: "Core Runtime", value: "Native Rust Engine + WebAssembly Acceleration" },
  { label: "Rendering Architecture", value: "Hardware-Accelerated Metal / WebGPU (120 FPS)" },
  { label: "Data Sovereignty", value: "Local-First Cryptographic Storage (Zero Telemetry)" },
  { label: "Release Status", value: "Private Cohort V1.0 (2026)" },
  { label: "Licensing Model", value: "Sovereign Ownership & Enterprise Escrow" },
];

const pillars = [
  {
    index: "01",
    title: "Hardware Canvas",
    description: "Spatial rendering at 120 FPS via native WebGPU and Metal pipelines with sub-8ms latency.",
  },
  {
    index: "02",
    title: "Local Sovereignty",
    description: "Files persist directly to local disk in open cryptographic formats with zero cloud telemetry.",
  },
  {
    index: "03",
    title: "Deterministic Engine",
    description: "Extensible execution using sandboxed WebAssembly plugins and reproducible computation graphs.",
  },
];

export default function AtelierPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-16 bg-black text-white select-none">
      {/* ─── Back Link ─── */}
      <div>
        <Link
          href="/platforms"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
        >
          <ArrowLeft size={13} />
          <span>Platforms</span>
        </Link>
      </div>

      {/* ─── Hero Header ─── */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          01 / FLAGSHIP PLATFORM · 2026
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Atelier — A place to make what matters.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          An uncompromised creative environment where computational logic, spatial design, and local sovereignty converge.
        </p>
      </div>

      {/* ─── Metadata Strip ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-[11px] font-mono">
        <div>
          <span className="text-neutral-500 block uppercase">ORIGIN</span>
          <span className="text-white mt-1 block">Entelechæ Labs</span>
        </div>
        <div>
          <span className="text-neutral-500 block uppercase">DEPLOYMENT</span>
          <span className="text-white mt-1 block">Desktop &amp; WebGPU</span>
        </div>
        <div>
          <span className="text-neutral-500 block uppercase">AVAILABILITY</span>
          <span className="text-neutral-300 mt-1 block">Private Cohort Active</span>
        </div>
        <div>
          <span className="text-neutral-500 block uppercase">DATA GUARANTEE</span>
          <span className="text-white mt-1 block">100% Local-First IP</span>
        </div>
      </div>

      {/* ─── Video Demo ─── */}
      <div className="space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          WORKSPACE DEMONSTRATION
        </div>
        <HeroVideo />
      </div>

      {/* ─── Thesis ─── */}
      <div className="space-y-3 max-w-2xl pt-6 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          THE THESIS
        </div>
        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          Modern software has degraded into bloated subscription wrappers dependent on remote servers.
          Atelier is engineered around local file ownership, sub-8ms responsiveness, and zero telemetry.
        </p>
      </div>

      {/* ─── Architecture Pillars (Flat 3-Col, No Boxes) ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          CORE ARCHITECTURE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.index} className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-600 block">
                {p.index}
              </span>
              <h3 className="text-sm font-medium text-white tracking-tight">
                {p.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Technical Specifications Table (Clean Borderless List) ─── */}
      <div className="space-y-6 pt-8 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          SPECIFICATIONS
        </div>
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {specifications.map((spec) => (
            <div
              key={spec.label}
              className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono"
            >
              <span className="text-neutral-500 uppercase">
                {spec.label}
              </span>
              <span className="text-neutral-200">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Minimal Access Request ─── */}
      <div className="pt-10 border-t border-white/[0.08] space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          COHORT ADMISSION
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
          Access is currently provided to select studios, engineers, and researchers.
        </p>
        <div className="pt-2">
          <Link
            href="/contact?tier=creator"
            className="text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>Request Early Access</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
