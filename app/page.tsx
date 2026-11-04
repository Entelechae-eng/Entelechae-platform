import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LiveClock } from "@/components/ui/LiveClock";
import { EkonFaq } from "@/components/ui/EkonFaq";
import { EkonLoader } from "@/components/ui/EkonLoader";
import { PlatformVideoPreview } from "@/components/ui/PlatformVideoPreview";
import { platforms } from "@/data/platforms";

const stats = [
  { value: "100Y", label: "Horizon & Permanence" },
  { value: "120 FPS", label: "WebGPU Pipeline" },
  { value: "29K+", label: "Verified Resources" },
  { value: "100%", label: "Local-First Privacy" },
];

const disciplines = [
  {
    index: "01",
    title: "PLATFORM ENGINEERING",
    summary:
      "Native Rust, WebAssembly, and 120 FPS WebGPU runtimes designed for offline execution and local cryptographic storage.",
  },
  {
    index: "02",
    title: "COMPUTATIONAL RESEARCH",
    summary:
      "Generative synthesis and mathematical cognition models engineered long before industry consensus.",
  },
  {
    index: "03",
    title: "INTERFACE ARCHITECTURE",
    summary:
      "High-density, distraction-free workspaces that respect human attention with zero telemetry tracking.",
  },
  {
    index: "04",
    title: "SOVEREIGN STEWARDSHIP",
    summary:
      "Independent governance and patient capital aligned with century-scale technological permanence.",
  },
];

const endorsements = [
  {
    quote:
      "Entelechæ approaches digital infrastructure as architecture meant to endure for centuries. Their technical discipline is rare and vital.",
    author: "Dr. Marcus Vance",
    role: "Fellow, Institute for Computational Cognition",
    avatar: "/images/ekon/avatar-2.jpg",
  },
  {
    quote:
      "Atelier and the Entelechae platforms represent a fundamental shift back to software that respects local hardware, client performance, and zero telemetry.",
    author: "Elena Rostova",
    role: "Principal Systems Architect, Kernel Labs",
    avatar: "/images/ekon/avatar-1.jpg",
  },
  {
    quote:
      "A rare technology studio rejecting the disposable hype cycle to build deterministic, private, and breathtakingly fast platform primitives.",
    author: "Julian Thorne",
    role: "Founding Partner, Sovereign Capital",
    avatar: "/images/ekon/avatar-3.jpg",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center select-none">
      {/* ─── 0. OPENING INTRO LOADER (BLACK SCREEN & 4-PANEL REVEAL) ─── */}
      <EkonLoader />

      {/* ─── 1. FULL-SCREEN HERO: BOY IN RED ON TOP, NO TEXT ON CENTER (KEPT AS IS) ─── */}
      <section className="relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-black">
        {/* Full-Screen Boy in Red Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ekon/hero.jpg"
            alt="Entelechæ Visual"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Subtle gradient to preserve edge contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Top Spacer */}
        <div className="w-full pt-20" />

        {/* Center: COMPLETELY UNOBSTRUCTED / NO TEXT ON CENTER */}
        <div className="flex-1" />

        {/* Bottom Bar: Ultra-Minimal Flat Monochrome Meta Strip */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
          <div className="text-white font-medium">ENTELECHÆ STUDIO</div>
          <div>SAN FRANCISCO · NEW DELHI</div>
          <div className="text-neutral-300">
            <LiveClock />
          </div>
          <div>SOVEREIGN COMPUTING</div>
        </div>
      </section>

      {/* ─── 2. VISION (DEFINED & BOLD CURSOR STYLE) ─── */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            01 / VISION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Building sovereign software for what gets built next.
          </h2>
          <p className="text-sm sm:text-base font-normal text-neutral-400 leading-relaxed max-w-2xl">
            Entelechæ is an independent technology company architecting local-first platforms,
            computational synthesis, and foundational software systems engineered for 100-year permanence.
          </p>
        </div>

        {/* 4 Stats (Defined Bordered Grid with Bold Mono Metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/[0.1] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.1]">
          {stats.map((s) => (
            <div key={s.label} className="p-6 sm:p-8 space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. PLATFORMS (MINIMAL, VIDEO PREVIEW & BOLD CURSOR SHOWCASE) ─── */}
      <section id="platforms" className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.1] space-y-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              02 / OFFICIAL PLATFORMS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
              Platforms
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              Open-source web architecture and sovereign AI runtimes engineered by Entelechae.
            </p>
          </div>

          <Link
            href="/platforms"
            className="text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>All Platforms</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Video Preview: Platform Runtime in Action */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase">
            <span>PLATFORM WORKSPACE PREVIEW</span>
            <span>120 FPS RUNTIME</span>
          </div>
          <PlatformVideoPreview />
        </div>

        {/* The Two Platforms Showcase (Defined 2-Col Minimal Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="border border-white/[0.1] hover:border-white/[0.25] transition-colors p-6 sm:p-8 space-y-5 bg-black flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Interface Preview Frame */}
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] w-full overflow-hidden border border-white/[0.1] group"
                >
                  <Image
                    src={platform.previewImage}
                    alt={platform.previewAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Status & Metrics */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="text-[10px] font-mono text-white uppercase px-2 py-0.5 bg-black/85 backdrop-blur-sm border border-white/15">
                      {platform.status}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 text-[11px] font-mono text-white px-2 py-0.5 bg-black/85 backdrop-blur-sm border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>Launch</span>
                    <ArrowUpRight size={11} />
                  </div>
                </a>

                {/* Platform Identity */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    {platform.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {platform.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {platform.headline}
                  </p>
                </div>

                {/* Capabilities Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {platform.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4 font-semibold uppercase tracking-wider"
                >
                  <span>Launch {platform.shortName}</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={platform.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. DISCIPLINES (DEFINED 4-COLUMN BORDERED GRID) ─── */}
      <section
        id="services"
        className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.1] space-y-12"
      >
        <div className="space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            03 / CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            Disciplines
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Architectural and computational engineering built for consequence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-white/[0.1] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.1]">
          {disciplines.map((d) => (
            <div key={d.title} className="p-6 sm:p-8 space-y-2.5">
              <div className="text-[11px] font-mono text-neutral-500">
                {d.index}
              </div>
              <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                {d.title}
              </h3>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                {d.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. ENDORSEMENTS (DEFINED 3-COLUMN BORDERED GRID) ─── */}
      <section
        id="testimonials"
        className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.1] space-y-12"
      >
        <div className="space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            04 / PERSPECTIVES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            Endorsements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.1] divide-y md:divide-y-0 md:divide-x divide-white/[0.1]">
          {endorsements.map((t) => (
            <div key={t.author} className="p-6 sm:p-8 space-y-5">
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{t.author}</div>
                  <div className="text-[10px] font-mono text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. FAQ (DEFINED HAIRLINES, BOLD QUESTION TITLES) ─── */}
      <section
        id="faq"
        className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.1] space-y-8"
      >
        <div className="space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            05 / INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            FAQ
          </h2>
        </div>

        <EkonFaq />
      </section>

      {/* ─── 7. DIRECT CORRESPONDENCE (DEFINED BORDER BOX, BOLD CURSOR STYLE) ─── */}
      <section className="w-full border-t border-white/[0.1] bg-black py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="border border-white/[0.12] p-8 sm:p-12 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              06 / CORRESPONDENCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Initiate direct dialogue.
            </h2>
            <p className="text-xs sm:text-sm font-normal text-neutral-400 max-w-xl leading-relaxed">
              We collaborate with select research laboratories, systems architects, and independent
              studios. Direct inquiries are reviewed personally by the stewards.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs">
              <a
                href="mailto:entelechae@gmail.com"
                className="text-white hover:text-neutral-300 font-semibold underline underline-offset-4 transition-colors"
              >
                entelechae@gmail.com
              </a>
              <span className="text-neutral-700">/</span>
              <a
                href="mailto:sahurain15@gmail.com"
                className="text-white hover:text-neutral-300 font-semibold underline underline-offset-4 transition-colors"
              >
                sahurain15@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
