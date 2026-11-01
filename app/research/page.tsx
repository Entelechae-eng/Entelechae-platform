import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const papers = [
  {
    id: "p1",
    code: "ET-RES-2026-01",
    title: "Deterministic Spatial Computing and Local-First State Verification",
    category: "SYSTEMS ARCHITECTURE",
    date: "OCTOBER 2026",
    abstract:
      "An investigation into zero-telemetry local-first runtimes that achieve absolute reproducibility across asynchronous distributed edge nodes using conflict-free replicated data types and hardware-accelerated state compression.",
    authors: "Entelechae Computational Systems Group",
    tags: ["Distributed Systems", "CRDTs", "WebAssembly", "Zero-Telemetry"],
  },
  {
    id: "p2",
    code: "ET-RES-2026-02",
    title: "Cognitive Ergonomics: Human-Computer Resonance in High-Density Workspaces",
    category: "HUMAN-TOOL INTERACTION",
    date: "SEPTEMBER 2026",
    abstract:
      "A formal study analyzing cognitive load, micro-latency thresholds, and spatial gesture ergonomics in next-generation creative tooling environments.",
    authors: "Entelechae Applied Design Labs",
    tags: ["Cognitive Ergonomics", "Micro-Latency", "Spatial UI", "Atelier Engine"],
  },
  {
    id: "p3",
    code: "ET-RES-2026-03",
    title: "Autonomous Synthesis and Non-Coercive Machine Intelligence",
    category: "COGNITIVE ARCHITECTURE",
    date: "AUGUST 2026",
    abstract:
      "Presents a computational paradigm where artificial intelligence operates strictly as an augmenting cognitive extension rather than an opaque, extractive black box.",
    authors: "Entelechae Cognitive Science Labs",
    tags: ["Cognitive Extension", "Deterministic Models", "Sovereignty"],
  },
];

const pillars = [
  {
    number: "01",
    title: "Generative Synthesis",
    subtitle: "New Cognitive Primitives",
    description:
      "We investigate models that understand structural relationships and spatial logic rather than purely linguistic statistical correlations.",
    image: "/images/research-sculpture.jpg",
  },
  {
    number: "02",
    title: "Deterministic Computing",
    subtitle: "Mathematical Certainty",
    description:
      "Eliminating the non-deterministic fragility of modern distributed SaaS in favor of formally verified, cryptographically signed computational pipelines.",
    image: "/images/research-statues.jpg",
  },
  {
    number: "03",
    title: "Human-Tool Resonance",
    subtitle: "Tactile Digital Mediums",
    description:
      "Crafting software environments that match human motor perception and thought speed at sub-8ms input latencies.",
    image: "/images/portrait-study.jpg",
  },
];

export default function ResearchPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* ─── Hero Header ─── */}
      <div className="space-y-6 max-w-3xl">
        <Badge variant="emerald" dot>
          ENTELECHAE RESEARCH LABS
        </Badge>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Ideas before they become{" "}
          <span className="italic font-serif font-light text-neutral-300">
            products.
          </span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl font-light leading-relaxed">
          Research is where future platforms begin. We conduct long-horizon computational
          investigations into cognitive systems, deterministic computing, and sovereign software architectures.
        </p>
      </div>

      {/* ─── Featured Paper Card ─── */}
      <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#14141c] to-[#0a0a0d] p-8 sm:p-12 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              FEATURED DISPATCH
            </span>
            <span className="text-xs font-mono text-neutral-500">{papers[0].code}</span>
          </div>
          <span className="text-xs font-mono text-neutral-400">{papers[0].date}</span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {papers[0].title}
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            {papers[0].abstract}
          </p>
          <div className="pt-2 text-xs font-mono text-neutral-400">
            AUTHORS: {papers[0].authors}
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {papers[0].tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/contact?topic=research"
            className="ekon-btn-primary"
          >
            <span>Request Full Paper Access</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* ─── Three Research Pillars ─── */}
      <div className="space-y-10">
        <div className="space-y-2">
          <Badge variant="default">RESEARCH DOMAINS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Foundational Investigation Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-2xl font-light text-neutral-500 group-hover:text-white transition-colors">
                    {pillar.number}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    ACTIVE
                  </span>
                </div>

                <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-white/10 my-4">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {pillar.subtitle}
                </p>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] mt-6">
                <Link
                  href="/contact?topic=research"
                  className="text-xs font-mono text-neutral-300 hover:text-white flex items-center justify-between"
                >
                  <span>Explore Findings</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Publications Index ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Publications & Theses Index
          </h2>
          <span className="text-xs font-mono text-neutral-400">
            SERIES 2026
          </span>
        </div>

        <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {papers.map((p) => (
            <div
              key={p.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-white/[0.02] px-4 rounded-2xl transition-colors"
            >
              <div className="lg:col-span-3 space-y-1">
                <span className="text-xs font-mono text-emerald-400 block">
                  {p.code}
                </span>
                <span className="text-xs font-mono text-neutral-500 block uppercase">
                  {p.category}
                </span>
                <span className="text-xs font-mono text-neutral-400 block">
                  {p.date}
                </span>
              </div>

              <div className="lg:col-span-7 space-y-2">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {p.abstract}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 flex justify-end">
                <Link
                  href="/contact?topic=research"
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-white/25 transition-all flex items-center gap-1.5"
                >
                  <FileText size={13} />
                  <span>Request</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Academic & Research Alliance CTA ─── */}
      <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#14141c] to-[#0a0a0d] p-10 sm:p-16 text-center space-y-6 shadow-2xl">
        <Badge variant="emerald" dot>
          ACADEMIC & LAB ALLIANCES
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Interested in joint computational research?
        </h2>
        <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
          We sponsor and collaborate on independent research initiatives with universities,
          private laboratories, and independent thinkers.
        </p>
        <div className="pt-4">
          <Link href="/contact?topic=research" className="ekon-btn-primary">
            <span>Inquire for Research Alliance</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
