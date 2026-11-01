import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function LegalPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 space-y-16">
      {/* ─── Back to Home ─── */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>RETURN TO HOME</span>
        </Link>
      </div>

      {/* ─── Header ─── */}
      <div className="space-y-6 max-w-4xl">
        <Badge variant="default">GOVERNANCE & COMPLIANCE</Badge>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Terms & Sovereign Governance.
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl font-light leading-relaxed">
          Last revised: October 2026. The legal, privacy, and architectural principles governing
          Entelechae and its associated software platforms.
        </p>
      </div>

      {/* ─── Content Grid ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Sticky Table of Contents */}
        <div className="lg:col-span-4 sticky top-28 space-y-4 rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-6 hidden lg:block">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block pb-2 border-b border-white/[0.08]">
            DOCUMENTS & SECTIONS
          </span>
          <nav className="flex flex-col space-y-2 text-sm">
            <a href="#terms" className="text-neutral-400 hover:text-white transition-colors">
              01. Terms of Service
            </a>
            <a href="#privacy" className="text-neutral-400 hover:text-white transition-colors">
              02. Privacy & Telemetry
            </a>
            <a href="#ip" className="text-neutral-400 hover:text-white transition-colors">
              03. Sovereign IP Rights
            </a>
            <a href="#security" className="text-neutral-400 hover:text-white transition-colors">
              04. Security & Vulnerabilities
            </a>
          </nav>
        </div>

        {/* Legal Text Sections */}
        <div className="lg:col-span-8 space-y-16 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
          {/* 01 Terms */}
          <section id="terms" className="space-y-6 border-b border-white/[0.08] pb-12">
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-400 text-xs">SECTION 01</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">TERMS OF SERVICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              1. Platform Engagement & Use
            </h2>
            <p>
              By accessing any software, research dispatch, or platform operated by Entelechae (including
              Atelier and Entelechae Labs), you agree to be bound by these Terms of Service. If you are
              engaging on behalf of an institution or organization, you represent that you hold necessary
              authorization.
            </p>
            <p>
              Our software platforms are engineered for professional creators, engineers, and researchers.
              You agree not to reverse engineer, weaponize, or utilize our runtimes to infringe upon the
              fundamental rights or intellectual sovereignty of others.
            </p>
          </section>

          {/* 02 Privacy */}
          <section id="privacy" className="space-y-6 border-b border-white/[0.08] pb-12">
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-400 text-xs">SECTION 02</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">PRIVACY & TELEMETRY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              2. Absolute Data Sovereignty & Zero Telemetry
            </h2>
            <p>
              Unlike legacy cloud providers, Entelechae adheres to an uncompromising local-first privacy
              doctrine. When using platforms such as Atelier:
            </p>
            <ul className="space-y-3 pl-4 list-disc text-neutral-400 text-sm">
              <li>Your project files, creative canvases, and code remain on your local storage.</li>
              <li>We do not record your keystrokes, gestures, canvas contents, or telemetry.</li>
              <li>No third-party trackers, analytics pixels, or advertising beacons exist on our sites or runtimes.</li>
              <li>Any optional cloud synchronization is end-to-end encrypted with keys held exclusively by you.</li>
            </ul>
          </section>

          {/* 03 Sovereign IP */}
          <section id="ip" className="space-y-6 border-b border-white/[0.08] pb-12">
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-400 text-xs">SECTION 03</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">INTELLECTUAL PROPERTY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              3. Intellectual Property Rights
            </h2>
            <p>
              <strong className="text-white font-medium">Your work belongs to you.</strong> All creative assets,
              codebases, models, designs, and materials created by you within Atelier or any Entelechae
              runtime remain 100% your sovereign intellectual property. Entelechae asserts zero claim, license,
              or royalty over outputs generated by users.
            </p>
            <p>
              The Entelechae brand, wordmarks, underlying proprietary runtimes, and research papers are
              protected under international intellectual property conventions.
            </p>
          </section>

          {/* 04 Security */}
          <section id="security" className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-400 text-xs">SECTION 04</span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">SECURITY & DISCLOSURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              4. Responsible Vulnerability Disclosure
            </h2>
            <p>
              We take the security and integrity of our cryptographic architectures with utmost seriousness.
              If you identify any security anomaly or vulnerability within our platforms, report it directly
              to <a href="mailto:entelechae@gmail.com" className="text-white underline underline-offset-4">entelechae@gmail.com</a>.
              We commit to acknowledging and triaging verified submissions within 24 hours.
            </p>
          </section>
        </div>
      </div>

      {/* ─── Footer Sign-off ─── */}
      <div className="pt-12 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>© 2026 ENTELECHÆ. ALL RIGHTS RESERVED.</span>
        <span>SOVEREIGN JURISDICTION GOVERNANCE</span>
      </div>
    </div>
  );
}
