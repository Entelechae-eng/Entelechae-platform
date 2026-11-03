import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LiveClock } from "@/components/ui/LiveClock";
import { EkonFaq } from "@/components/ui/EkonFaq";
import { EkonLoader } from "@/components/ui/EkonLoader";
import { platforms } from "@/data/platforms";

const stats = [
  { value: "100Y", label: "Horizon & Permanence" },
  { value: "120 FPS", label: "Hardware WebGPU" },
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

      {/* ─── 1. FULL-SCREEN HERO: BOY IN RED ON TOP, NO TEXT ON CENTER ─── */}
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
          <div className="text-white">ENTELECHÆ STUDIO</div>
          <div>SAN FRANCISCO · NEW DELHI</div>
          <div className="text-neutral-300">
            <LiveClock />
          </div>
          <div>SOVEREIGN COMPUTING</div>
        </div>
      </section>

      {/* ─── 2. VISION (CURSOR / META MINIMAL: UNDER 2 SENTENCES, NO BOX) ─── */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="space-y-16">
          <div className="space-y-4 max-w-3xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              01 / VISION
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-200 leading-relaxed">
              Entelechæ is an independent technology company building sovereign platforms,
              computational synthesis, and foundational software for what gets built next. We measure
              our horizon in decades, crafting systems designed for permanence, local privacy, and
              uncompromising performance.
            </p>
          </div>

          {/* 4 Stats (Minimal Typographic Metrics, No Box) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/[0.08]">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-mono text-white tracking-tight">
                  {s.value}
                </div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. OFFICIAL PLATFORMS SECTION (CURSOR / META MINIMAL, NO BOX) ─── */}
      <section id="platforms" className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.08]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              02 / OFFICIAL PLATFORMS
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
              Platforms
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Sovereign software platforms and open-source computational systems engineered by Entelechae.
            </p>
          </div>

          <Link
            href="/platforms"
            className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <span>Platform Overview</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* 2 Flagship Platforms Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="group space-y-4 transition-opacity duration-300"
            >
              {/* Interface Preview Frame */}
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-black border border-white/10 group-hover:border-white/25 transition-colors"
              >
                <Image
                  src={platform.previewImage}
                  alt={platform.previewAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Status Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-neutral-300 uppercase px-2 py-0.5 bg-black/80 backdrop-blur-sm rounded-[2px] border border-white/10">
                    {platform.status}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-[2px]">
                    {platform.version}
                  </span>
                </div>

                {/* Bottom External Link Hint */}
                <div className="absolute bottom-3 right-3 text-[11px] font-mono text-neutral-300 flex items-center gap-1 px-2.5 py-1 bg-black/80 backdrop-blur-sm rounded-[2px] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Launch</span>
                  <ArrowUpRight size={12} />
                </div>
              </a>

              {/* Platform Meta & Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    {platform.category}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">
                    {platform.metrics[0].value}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-neutral-200 transition-colors">
                    {platform.name}
                  </h3>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {platform.description}
                </p>

                {/* Verified Capabilities Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {platform.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      className="text-[10px] font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-[2px]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Direct Action Links */}
                <div className="pt-2 flex items-center gap-4 text-xs font-mono">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1 underline underline-offset-4"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <span className="text-neutral-700">/</span>
                  <a
                    href={platform.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. DISCIPLINES (MINIMAL 4-COLUMN TYPOGRAPHY, NO BOX) ─── */}
      <section
        id="services"
        className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.08]"
      >
        <div className="space-y-1 pb-12">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            03 / CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
            Disciplines
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Architectural and computational engineering built for consequence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {disciplines.map((d) => (
            <div key={d.title} className="space-y-2">
              <div className="text-[10px] font-mono text-neutral-600">
                {d.index}
              </div>
              <h3 className="text-sm font-medium tracking-tight text-white uppercase">
                {d.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {d.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. ENDORSEMENTS (OPEN MINIMAL QUOTES, NO BOX) ─── */}
      <section
        id="testimonials"
        className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.08]"
      >
        <div className="space-y-1 pb-12">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            04 / PERSPECTIVES
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
            Endorsements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {endorsements.map((t) => (
            <div key={t.author} className="space-y-4">
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">{t.author}</div>
                  <div className="text-[10px] font-mono text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. FAQ (MINIMAL HAIRLINES, NO BOX, UNDER 2 SENTENCES) ─── */}
      <section
        id="faq"
        className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.08]"
      >
        <div className="space-y-1 pb-10">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            05 / INQUIRIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
            FAQ
          </h2>
        </div>

        <EkonFaq />
      </section>

      {/* ─── 7. MINIMAL DIRECT CORRESPONDENCE (NO BOX, UNDER 2 SENTENCES) ─── */}
      <section className="w-full border-t border-white/[0.08] bg-black py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            06 / CORRESPONDENCE
          </div>
          <p className="text-base sm:text-lg font-light text-neutral-300 max-w-xl leading-relaxed">
            We collaborate with select research laboratories, systems architects, and independent
            studios. Direct inquiries are reviewed personally by the stewards.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-neutral-400">
            <a
              href="mailto:entelechae@gmail.com"
              className="hover:text-white underline underline-offset-4 transition-colors"
            >
              entelechae@gmail.com
            </a>
            <span className="text-neutral-700">/</span>
            <a
              href="mailto:sahurain15@gmail.com"
              className="hover:text-white underline underline-offset-4 transition-colors"
            >
              sahurain15@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
