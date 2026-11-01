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
    category: "FLAGSHIP CREATIVE PLATFORM",
    description:
      "Native WebGPU 120 FPS canvas, local-first cryptographic storage, and deterministic studio workflows without bloated cloud dependencies.",
    image: "/images/atelier-identity.jpg",
    href: "/platforms/atelier",
  },
  {
    id: "sovereign-engine",
    year: "2026",
    title: "Sovereign Engine",
    category: "CRYPTOGRAPHIC RUNTIME",
    description:
      "Zero-dependency computing architecture engineered from first principles for absolute reproducibility, local data sovereignty, and offline permanence.",
    image: "/images/entelechae-hero-arch.jpg",
    href: "/platforms",
  },
  {
    id: "research-labs",
    year: "2026",
    title: "Entelechæ Research Labs",
    category: "COMPUTATIONAL SYNTHESIS & COGNITION",
    description:
      "Investigating foundational latent synthesis, cognitive ergonomics, and deterministic architectures long before they become mainstream consensus.",
    image: "/images/research-statues.jpg",
    href: "/research",
  },
  {
    id: "sovereign-escrow",
    year: "2025",
    title: "Sovereign Escrow",
    category: "ZERO-TELEMETRY DATA VAULT",
    description:
      "Decentralized edge isolation, cryptographic client-side attestation, and private persistence runtimes for institutional consequence.",
    image: "/images/city-architecture.jpg",
    href: "/platforms",
  },
  {
    id: "parent-foundation",
    year: "2024",
    title: "Parent Foundation",
    category: "PATIENT CAPITAL & STEWARDSHIP",
    description:
      "The stewardship engine behind our ecosystem, aligning 100-year horizon capital, operational sovereignty, and uncompromised craftsmanship.",
    image: "/images/company-about.jpg",
    href: "/company",
  },
  {
    id: "cognitive-ergonomics",
    year: "2024",
    title: "Cognitive Ergonomics",
    category: "MATHEMATICAL SPATIAL MODELS",
    description:
      "High-density interface architectures and mathematical models designed to amplify human agency without algorithmic manipulation.",
    image: "/images/research-sculpture.jpg",
    href: "/research",
  },
];

const stats = [
  { value: "100-Year", label: "Horizon & Stewardship" },
  { value: "120 FPS", label: "Native WebGPU Engine" },
  { value: "90+", label: "Theses & Protocols" },
  { value: "100%", label: "Sovereign & Local-First" },
];

const services = [
  {
    number: "1.",
    title: "PLATFORM ENGINEERING",
    items: [
      "NATIVE RUST & WEBASSEMBLY",
      "120 FPS WEBGPU CANVASES",
      "LOCAL-FIRST STORAGE",
      "DETERMINISTIC RUNTIMES",
    ],
    description:
      "We engineer native, zero-dependency software runtimes designed for offline execution, local cryptographic storage, and raw hardware speed.",
  },
  {
    number: "2.",
    title: "COMPUTATIONAL RESEARCH",
    items: [
      "GENERATIVE SYNTHESIS",
      "COGNITIVE ERGONOMICS",
      "LATENT MODELS & APIS",
      "PUBLISHED THEMES",
    ],
    description:
      "We investigate foundational computing paradigms, cognitive ergonomics, and deterministic architectures long before they become mainstream consensus.",
  },
  {
    number: "3.",
    title: "INTERFACE ARCHITECTURE",
    items: [
      "EDITORIAL DESIGN SYSTEMS",
      "FLUID SHADERS & MICRO-UI",
      "SPATIAL WORKSPACE ERGONOMICS",
      "ZERO-TELEMETRY PRIVACY",
    ],
    description:
      "We design expressive, high-density workspaces that respect human attention. Every interaction is calculated for speed, elegance, and zero compromise.",
  },
  {
    number: "4.",
    title: "SOVEREIGN STEWARDSHIP",
    items: [
      "PATIENT CAPITAL ALLIANCE",
      "100-YEAR PERSPECTIVE",
      "FOUNDING GOVERNANCE",
      "SOVEREIGN DATA ESCROW",
    ],
    description:
      "We maintain an independent foundation governed by long horizons, insulating engineering and research from short-term financial pressures.",
  },
];

const testimonials = [
  {
    quote:
      "Entelechæ approaches digital infrastructure as architecture meant to endure for centuries. Their technical discipline is rare, vital, and uncompromising.",
    author: "Dr. Marcus Vance",
    role: "Fellow, Institute for Computational Cognition",
    avatar: "/images/ekon/avatar-2.jpg",
  },
  {
    quote:
      "Atelier represents a fundamental shift back to software that respects the creator. Local performance, hardware acceleration, and zero telemetry.",
    author: "Elena Rostova",
    role: "Principal Systems Architect, Kernel Labs",
    avatar: "/images/ekon/avatar-1.jpg",
  },
  {
    quote:
      "A rare technology studio that rejects the disposable hype cycle to build deterministic, private, and breathtakingly fast platform primitives.",
    author: "Julian Thorne",
    role: "Founding Partner, Sovereign Capital",
    avatar: "/images/ekon/avatar-3.jpg",
  },
];

export default function Home() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center">
      {/* ─── 0. OPENING INTRO LOADER (BLACK SCREEN WITH SMALL TEXT & 4-PANEL SLIDE) ─── */}
      <EkonLoader />

      {/* ─── 1. FULL-SCREEN HERO: BOY IN RED ON TOP, NO TEXT ON CENTER ─── */}
      <section className="relative w-full h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-black">
        {/* Full-Screen Actual Boy in Red Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ekon/hero.jpg"
            alt="Hero Visual"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Subtle cinematic gradient so top & bottom bars stay crisp */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Top Spacer for Fixed Nav */}
        <div className="w-full pt-20" />

        {/* Center: COMPLETELY EMPTY / NO TEXT ON CENTER */}
        <div className="flex-1" />

        {/* Bottom Bar: Exact Ekon 4-Way Meta Information */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white">
          <div>ENTELECHÆ STUDIO</div>
          <div>SAN FRANCISCO · NEW DELHI</div>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <LiveClock />
          </div>
          <div>SOVEREIGN COMPUTING</div>
        </div>
      </section>

      {/* ─── 2. VISION - SECTION (MINIMAL ENTELECHÆ VISION) ────────── */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
        <div className="space-y-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-[-0.01em] text-white leading-[1.25] max-w-5xl">
            Entelechæ is an independent technology company building sovereign
            platforms, computational synthesis, and foundational software for what
            gets built next. We measure our horizon in decades, crafting systems
            designed for permanence, local privacy, and uncompromising performance.
          </h2>

          {/* 4 Stats Row: Entelechæ Minimal Data */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2">
                <div className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-mono">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-mono uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. OUR WORKS - SECTION (CAROUSEL / TICKER ROW) ────────── */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 border-t border-white/10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              WORKS
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Here are our core platforms and sovereign computational systems
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[3px] bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors self-start sm:self-auto"
          >
            <span>WORK WITH US</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Works Horizontal Scroll Cards (Matching Ekon Layout) */}
        <div className="w-full overflow-x-auto pb-6 scrollbar-none flex gap-6 snap-x snap-mandatory">
          {works.map((work) => (
            <Link
              key={work.id}
              href={work.href}
              className="group shrink-0 w-[300px] sm:w-[380px] snap-start block space-y-4"
            >
              <div className="relative aspect-[16/11] w-full rounded-[5px] overflow-hidden bg-neutral-950 border border-white/10">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-[3px] bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-mono">
                  {work.year}
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors">
                    {work.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase">
                  {work.category}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 4. SERVICES - SECTION (OUR DISCIPLINES) ───────────────── */}
      <section
        id="services"
        className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 border-t border-white/10"
      >
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-16">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              OUR DISCIPLINES
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Architectural engineering and computational capabilities built for consequence
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[3px] bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors self-start sm:self-auto"
          >
            <span>WORK WITH US</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="space-y-6 pt-6 sm:pt-0 border-t sm:border-t-0 border-white/10"
            >
              <div className="text-sm font-mono text-neutral-500">
                {srv.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {srv.title}
              </h3>
              <ul className="space-y-2.5 text-xs font-mono text-neutral-400 tracking-wider">
                {srv.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed pt-2">
                {srv.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. TESTIMONIALS - SECTION ─────────────────────────────── */}
      <section
        id="testimonials"
        className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 border-t border-white/10"
      >
        <div className="space-y-2 pb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            ENDORSEMENTS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Voices from architects, engineers, and researchers across the sovereign network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-[5px] bg-neutral-950 border border-white/10 flex flex-col justify-between space-y-6"
            >
              <p className="text-base text-neutral-300 font-light leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="relative w-10 h-10 rounded-[4px] overflow-hidden bg-neutral-800 border border-white/15">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase">
                    {t.author}
                  </div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. FAQ'S - SECTION ───────────────────────────────────── */}
      <section
        id="faq"
        className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 border-t border-white/10"
      >
        <div className="space-y-2 pb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            FAQ&apos;S
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Answers to some of the most asked questions about Entelechæ and our
            platforms
          </p>
        </div>

        <EkonFaq />
      </section>

      {/* ─── 7. PRE-FOOTER CONVERSION BANNER ──────────────────────── */}
      <section className="w-full border-t border-white/10 bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase">
            LET&apos;S CREATE SOMETHING MEANINGFUL TOGETHER.
          </h2>
          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-sm sm:text-base">
            <a
              href="mailto:entelechae@gmail.com"
              className="text-neutral-300 hover:text-white underline underline-offset-8 transition-colors"
            >
              entelechae@gmail.com
            </a>
            <span className="text-neutral-600">·</span>
            <a
              href="mailto:sahurain15@gmail.com"
              className="text-neutral-300 hover:text-white underline underline-offset-8 transition-colors"
            >
              sahurain15@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
