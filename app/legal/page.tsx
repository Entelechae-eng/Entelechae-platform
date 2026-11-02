import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-16 bg-black text-white select-none">
      {/* ─── Back Link ─── */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
        >
          <ArrowLeft size={13} />
          <span>Return Home</span>
        </Link>
      </div>

      {/* ─── Header ─── */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          GOVERNANCE &amp; COMPLIANCE · REVISED 2026
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Terms &amp; Sovereign Governance.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          The legal, privacy, and architectural principles governing Entelechæ and its associated software platforms.
        </p>
      </div>

      {/* ─── Sections (Flat Hairline Layout, No Boxes) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-8 border-t border-white/[0.08] items-start">
        {/* Table of Contents */}
        <div className="lg:col-span-4 sticky top-24 space-y-3 hidden lg:block text-xs font-mono">
          <div className="text-[10px] uppercase tracking-widest text-neutral-500 pb-2 border-b border-white/[0.06]">
            SECTIONS
          </div>
          <nav className="flex flex-col space-y-2">
            <a href="#terms" className="text-neutral-400 hover:text-white transition-colors">
              01. Terms of Service
            </a>
            <a href="#privacy" className="text-neutral-400 hover:text-white transition-colors">
              02. Privacy &amp; Telemetry
            </a>
            <a href="#ip" className="text-neutral-400 hover:text-white transition-colors">
              03. Sovereign IP Rights
            </a>
            <a href="#security" className="text-neutral-400 hover:text-white transition-colors">
              04. Security Disclosure
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 space-y-12 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          {/* 01 Terms */}
          <section id="terms" className="space-y-3 pb-8 border-b border-white/[0.06]">
            <div className="text-[10px] font-mono text-neutral-500 uppercase">
              SECTION 01 · TERMS OF SERVICE
            </div>
            <h2 className="text-base sm:text-lg font-medium text-white">
              Platform Engagement &amp; Use
            </h2>
            <p className="text-neutral-400">
              Accessing Entelechæ platforms (including Atelier and Entelechæ Labs) constitutes acceptance of these sovereign terms.
              Our runtimes are engineered for professional creators, researchers, and engineers.
            </p>
            <p className="text-neutral-400">
              You agree not to weaponize, reverse engineer, or deploy our systems to violate the fundamental privacy of others.
            </p>
          </section>

          {/* 02 Privacy */}
          <section id="privacy" className="space-y-3 pb-8 border-b border-white/[0.06]">
            <div className="text-[10px] font-mono text-neutral-500 uppercase">
              SECTION 02 · PRIVACY &amp; TELEMETRY
            </div>
            <h2 className="text-base sm:text-lg font-medium text-white">
              Absolute Data Sovereignty
            </h2>
            <p className="text-neutral-400">
              Entelechæ adheres to a strict local-first privacy doctrine with zero client telemetry tracking.
              Project files, canvases, and code remain on your local drive with zero remote telemetry beacons or advertising trackers.
            </p>
          </section>

          {/* 03 Sovereign IP */}
          <section id="ip" className="space-y-3 pb-8 border-b border-white/[0.06]">
            <div className="text-[10px] font-mono text-neutral-500 uppercase">
              SECTION 03 · INTELLECTUAL PROPERTY
            </div>
            <h2 className="text-base sm:text-lg font-medium text-white">
              Sovereign User Ownership
            </h2>
            <p className="text-neutral-400">
              Your work belongs entirely to you. All creative assets, codebases, models, and designs produced in Entelechæ runtimes remain 100% your sovereign intellectual property.
            </p>
          </section>

          {/* 04 Security */}
          <section id="security" className="space-y-3">
            <div className="text-[10px] font-mono text-neutral-500 uppercase">
              SECTION 04 · SECURITY
            </div>
            <h2 className="text-base sm:text-lg font-medium text-white">
              Vulnerability Disclosure
            </h2>
            <p className="text-neutral-400">
              If you discover an architectural anomaly or vulnerability, report it directly to <a href="mailto:entelechae@gmail.com" className="text-white underline underline-offset-4">entelechae@gmail.com</a>.
              We acknowledge and triage verified security reports within 24 hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
