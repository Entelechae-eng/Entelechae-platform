import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LiveClock } from "@/components/ui/LiveClock";
import { EkonFaq } from "@/components/ui/EkonFaq";
import { EkonLoader } from "@/components/ui/EkonLoader";

const works = [
  {
    id: "atelier-studio",
    year: "2026",
    title: "Atelier Studio",
    tag: "WebGPU Workspace",
    description:
      "Native 120 FPS creative canvas with local-first cryptographic storage. Engineered for deterministic workflows with zero cloud dependencies.",
    image: "/images/atelier-identity.jpg",
    href: "/platforms/atelier",
  },
  {
    id: "sovereign-engine",
    year: "2026",
    title: "Sovereign Engine",
    tag: "Cryptographic Substrate",
    description:
      "Zero-dependency computing architecture engineered from first principles. Built for absolute reproducibility, local data sovereignty, and offline permanence.",
    image: "/images/entelechae-hero-arch.jpg",
    href: "/platforms",
  },
  {
    id: "research-labs",
    year: "2026",
    title: "Research Labs",
    tag: "Cognitive Ergonomics",
    description:
      "Mathematical models and foundational investigations into generative synthesis. Designed to amplify human agency without algorithmic lock-in.",
    image: "/images/research-statues.jpg",
    href: "/research",
  },
  {
    id: "sovereign-escrow",
    year: "2025",
    title: "Sovereign Escrow",
    tag: "Data Vault",
    description:
      "Client-side cryptographic attestation and decentralized edge persistence runtimes for institutional data consequence.",
    image: "/images/city-architecture.jpg",
    href: "/platforms",
  },
  {
    id: "parent-foundation",
    year: "2024",
    title: "Parent Foundation",
    tag: "Stewardship",
    description:
      "Patient capital and founding governance designed for a 100-year horizon, insulating research and engineering from short-term financial cycles.",
    image: "/images/company-about.jpg",
    href: "/company",
  },
  {
    id: "cognitive-ergonomics",
    year: "2024",
    title: "Cognitive Synthesis",
    tag: "Interface Primitives",
    description:
      "High-density spatial interface architectures calibrated for deep concentration, sensory calibration, and private computing.",
    image: "/images/research-sculpture.jpg",
    href: "/research",
  },
];

const stats = [
  { value: "100Y", label: "Horizon & Permanence" },
  { value: "120 FPS", label: "Hardware WebGPU" },
  { value: "90+", label: "Systems & Primitives" },
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
      "Atelier represents a fundamental shift back to software that respects local hardware, client performance, and zero telemetry.",
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

      {/* ─── 3. WORKS (CURSOR-STYLE BORDERLESS MINIMAL LIST, NO BOX) ─── */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 border-t border-white/[0.08]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              02 / PLATFORMS
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal text-white uppercase tracking-tight">
              Works
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Core platform environments and computational research runtimes.
            </p>
          </div>

          <Link
            href="/platforms"
            className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            Explore All Platforms →
          </Link>
        </div>

        {/* Minimal Borderless Grid (No Heavy Cards / No Background Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          {works.map((work) => (
            <Link
              key={work.id}
              href={work.href}
              className="group block space-y-3.5 transition-opacity duration-300 hover:opacity-90"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-black">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-300 uppercase px-2 py-0.5 bg-black/70 backdrop-blur-sm rounded-[2px]">
                  {work.year}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-neutral-300 transition-colors flex items-center gap-1.5">
                    <span>{work.title}</span>
                    <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    {work.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {work.description}
                </p>
              </div>
            </Link>
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
