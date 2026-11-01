import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Shield, Zap, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { HeroVideo } from "@/components/ui/HeroVideo";

const specifications = [
  { label: "Platform Category", value: "Creative Engineering & Spatial Workspace" },
  { label: "Core Runtime", value: "Native Rust Engine + WebAssembly Acceleration" },
  { label: "Rendering Architecture", value: "Hardware-Accelerated Metal / WebGPU (120 FPS)" },
  { label: "Data Sovereignty", value: "Local-First Cryptographic Storage (Zero Telemetry)" },
  { label: "Release Status", value: "Private Cohort V1.0 (2026)" },
  { label: "Licensing Model", value: "Sovereign Ownership & Enterprise Escrow" },
];

export default function AtelierPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* ─── Back to Platforms ─── */}
      <div>
        <Link
          href="/platforms"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>BACK TO ALL PLATFORMS</span>
        </Link>
      </div>

      {/* ─── Hero Header ─── */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="emerald" dot>
            FLAGSHIP PLATFORM 01
          </Badge>
          <Badge variant="default">RELEASE: 2026</Badge>
          <Badge variant="pill">SOVEREIGN RUNTIME</Badge>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Atelier — A place to make what{" "}
          <span className="italic font-serif font-light text-neutral-300">
            matters.
          </span>
        </h1>

        <p className="text-neutral-400 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl">
          The inaugural software platform by Entelechae: an uncompromised,
          high-performance environment where ideas, computational logic, and
          digital craftsmanship converge into real products.
        </p>
      </div>

      {/* ─── Metadata Strip ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/[0.08] text-xs font-mono">
        <div>
          <span className="text-neutral-500 block uppercase">ORIGIN</span>
          <span className="text-white font-medium mt-1 block">Entelechae Labs</span>
        </div>
        <div>
          <span className="text-neutral-500 block uppercase">DEPLOYMENT</span>
          <span className="text-white font-medium mt-1 block">Desktop & WebGPU</span>
        </div>
        <div>
          <span className="text-neutral-500 block uppercase">AVAILABILITY</span>
          <span className="text-emerald-400 font-medium mt-1 block">Private Cohort Active</span>
        </div>
        <div>
          <span className="text-neutral-500 block uppercase">DATA GUARANTEE</span>
          <span className="text-white font-medium mt-1 block">100% Local-First IP</span>
        </div>
      </div>

      {/* ─── Cinematic Video Showcase ─── */}
      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          CINEMATIC DEMO: ATELIER WORKSPACE
        </div>
        <HeroVideo />
      </div>

      {/* ─── Overview & Thesis ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 pt-8 border-t border-white/[0.08]">
        <div className="lg:col-span-5 space-y-4">
          <Badge variant="default">THE THESIS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why modern creative tools are failing makers.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
          <p>
            Modern software has degraded into bloated subscription wrappers. Applications are slow, fragile,
            hostage to remote servers, and riddled with telemetry. The intimate tactile connection between a
            creator and their medium has been broken by layers of unnecessary SaaS indirection.
          </p>
          <p>
            <strong className="text-white font-medium">Atelier is the antidote.</strong> We engineered a native,
            zero-dependency runtime designed around local file ownership, millisecond-level responsiveness, and
            uncompromising visual fidelity. It does not phone home. It never locks your work inside proprietary
            clouds.
          </p>
        </div>
      </div>

      {/* ─── Bento Feature Highlights ─── */}
      <div className="space-y-8">
        <div className="space-y-2">
          <Badge variant="default">ARCHITECTURE</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pillars of the Atelier Engine.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
              <Zap size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Hardware-Accelerated Canvas
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Rendering complex spatial hierarchies at an uncompromising 120 FPS via native WebGPU and Metal pipelines.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
              <Shield size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Cryptographic Sovereignty
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Your files exist on your hard drive in open, human-readable binary formats with cryptographic integrity verification.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
              <Terminal size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Deterministic Scripting
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Extend and automate every workflow using sandboxed WebAssembly plugins and reproducible computation graphs.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Technical Specifications Table ─── */}
      <div className="space-y-6 pt-8 border-t border-white/[0.08]">
        <div className="space-y-2">
          <Badge variant="default">SPECIFICATIONS</Badge>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            System Specifications
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0c0c10] overflow-hidden divide-y divide-white/[0.06]">
          {specifications.map((spec) => (
            <div
              key={spec.label}
              className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                {spec.label}
              </span>
              <span className="font-mono text-sm text-neutral-200">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#14141c] to-[#0a0a0d] p-10 sm:p-16 text-center space-y-6 shadow-2xl">
        <Badge variant="emerald" dot>
          APPLY FOR COHORT 2026
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Ready to experience Atelier?
        </h2>
        <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
          We are currently granting access to selected studios, autonomous engineers, and design visionaries.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/contact?tier=creator" className="ekon-btn-primary">
            <span>Request Early Access</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/platforms" className="ekon-btn-secondary">
            <span>All Platforms</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
