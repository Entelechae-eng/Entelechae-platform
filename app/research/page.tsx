import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const papers = [
  {
    id: "p1",
    code: "ET-RES-2026-01",
    title: "Deterministic Spatial Computing and Local-First State Verification",
    category: "SYSTEMS ARCHITECTURE",
    date: "OCTOBER 2026",
    abstract:
      "Zero-telemetry runtimes achieving reproducible execution across edge nodes via conflict-free replicated data types and hardware-accelerated state compression.",
    authors: "Entelechæ Computational Systems Group",
    tags: ["CRDTs", "WebAssembly", "Zero-Telemetry"],
  },
  {
    id: "p2",
    code: "ET-RES-2026-02",
    title: "Cognitive Ergonomics: Human-Computer Resonance in High-Density Workspaces",
    category: "HUMAN-TOOL INTERACTION",
    date: "SEPTEMBER 2026",
    abstract:
      "A formal study evaluating cognitive load, sub-8ms latency thresholds, and spatial gesture responsiveness in creative execution environments.",
    authors: "Entelechæ Applied Design Labs",
    tags: ["Ergonomics", "Micro-Latency", "Spatial UI"],
  },
  {
    id: "p3",
    code: "ET-RES-2026-03",
    title: "Autonomous Synthesis and Non-Coercive Machine Intelligence",
    category: "COGNITIVE ARCHITECTURE",
    date: "AUGUST 2026",
    abstract:
      "A computational paradigm where machine intelligence operates strictly as an augmenting cognitive extension rather than an extractive black box.",
    authors: "Entelechæ Cognitive Science Labs",
    tags: ["Cognitive Extension", "Sovereignty"],
  },
];

const pillars = [
  {
    number: "01",
    title: "Generative Synthesis",
    subtitle: "Structural Primitives",
    description: "Investigating models that reason over spatial geometry and formal computational logic.",
    image: "/images/research-sculpture.jpg",
  },
  {
    number: "02",
    title: "Deterministic Computing",
    subtitle: "Mathematical Certainty",
    description: "Formally verified runtimes designed for offline execution, cryptographic signatures, and zero cloud lock-in.",
    image: "/images/research-statues.jpg",
  },
  {
    number: "03",
    title: "Human-Tool Resonance",
    subtitle: "Tactile Mediums",
    description: "Software environments calibrated to human motor perception and thought speed at sub-8ms input latencies.",
    image: "/images/portrait-study.jpg",
  },
];

export default function ResearchPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-16 bg-black text-white select-none">
      {/* ─── Header ─── */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          RESEARCH LABS
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Ideas before they become products.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          Long-horizon computational investigations into cognitive systems, deterministic computing, and sovereign software architectures.
        </p>
      </div>

      {/* ─── Featured Dispatch (Flat Layout, No Box) ─── */}
      <div className="space-y-4 pt-8 border-t border-white/[0.08]">
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>FEATURED DISPATCH · {papers[0].code}</span>
          <span>{papers[0].date}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
          {papers[0].title}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-3xl">
          {papers[0].abstract}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="text-[11px] font-mono text-neutral-500">
            AUTHORS: {papers[0].authors}
          </div>
          <Link
            href="/contact?topic=research"
            className="text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>Request Full Paper</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      {/* ─── Research Domains (Minimal 3-Col, No Boxes) ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          RESEARCH DOMAINS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-black">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute top-2 left-2 text-[10px] font-mono text-neutral-400 px-1.5 py-0.5 bg-black/80">
                  {pillar.number}
                </div>
              </div>
              <h3 className="text-sm font-medium text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-[11px] font-mono uppercase text-neutral-500">
                {pillar.subtitle}
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Publications Index (Flat Hairline List) ─── */}
      <div className="space-y-6 pt-8 border-t border-white/[0.08]">
        <div className="flex items-baseline justify-between">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            PUBLICATIONS INDEX
          </div>
          <span className="text-[10px] font-mono text-neutral-500">SERIES 2026</span>
        </div>

        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {papers.map((p) => (
            <div
              key={p.id}
              className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500">
                  <span>{p.code}</span>
                  <span>·</span>
                  <span>{p.category}</span>
                </div>
                <h3 className="text-sm sm:text-base font-medium text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {p.abstract}
                </p>
              </div>

              <div className="shrink-0 pt-1">
                <Link
                  href="/contact?topic=research"
                  className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Request</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Alliance Inquiries ─── */}
      <div className="pt-10 border-t border-white/[0.08] space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          LAB ALLIANCES
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
          We collaborate on independent computational research with universities, laboratories, and independent thinkers.
        </p>
        <div className="pt-2">
          <Link
            href="/contact?topic=research"
            className="text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>Inquire for Research Alliance</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
