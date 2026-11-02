import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Mission",
    subtitle: "Platforms For Consequence",
    description: "Entelechæ builds enduring computational systems, prioritizing generational utility over transient hype cycles.",
  },
  {
    number: "02",
    title: "Stewards",
    subtitle: "Pioneering Minds",
    description: "Founded by Sahurain and Tantresh Sahu alongside systems architects and mathematical researchers.",
  },
  {
    number: "03",
    title: "Global Nodes",
    subtitle: "Distributed & Sovereign",
    description: "Operating across San Francisco and New Delhi, unified by asynchronous deep focus.",
  },
  {
    number: "04",
    title: "Sovereign Capital",
    subtitle: "Patient & Uncompromising",
    description: "Capital governance structured for a century-scale horizon, free from short-term venture milestones.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Genesis & Thesis",
    description: "Established to address the fragility of cloud software through sovereign computing architecture.",
  },
  {
    year: "2025",
    title: "Atelier Runtimes",
    description: "Engineered the native WebGPU engine and local-first cryptographic storage canvas.",
  },
  {
    year: "2026",
    title: "Production Cohort",
    description: "Inaugurated the Atelier private cohort and foundational Computational Research Labs.",
  },
  {
    year: "HORIZON",
    title: "Autonomous Ecosystems",
    description: "Long-horizon platforms in generative synthesis, cognitive ergonomics, and decentralized resilience.",
  },
];

const team = [
  {
    name: "Sahurain",
    role: "Co-Founder & Systems Architect",
    email: "sahurain15@gmail.com",
    focus: "Platform Architecture, Runtimes & Distributed Computing",
  },
  {
    name: "Tantresh Sahu",
    role: "Co-Founder & Director of Technology",
    email: "tantreshsahu@gmail.com",
    focus: "Computational Logic, Interface Engineering & Sovereign Infrastructure",
  },
];

export default function CompanyPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-16 bg-black text-white select-none">
      {/* ─── Header ─── */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          THE PARENT COMPANY
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Independent by design.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          An independent parent technology company building with patience, precision, and an uncompromising long view.
        </p>
      </div>

      {/* ─── Studio Photo Showcase (Flat Minimal Frame) ─── */}
      <div className="relative w-full aspect-[21/9] sm:h-80 overflow-hidden border border-white/10 bg-black">
        <Image
          src="/images/company-about.jpg"
          alt="Entelechæ Studio"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
          <span>ENTELECHÆ HEADQUARTERS</span>
          <span>ESTABLISHED 2024</span>
        </div>
      </div>

      {/* ─── Manifesto ─── */}
      <div className="space-y-4 max-w-2xl pt-6 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          OUR MANIFESTO
        </div>
        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          The software industry has normalized disposable products designed for rapid exits and advertising telemetry.
          Entelechæ architects parent platforms designed to endure for decades through mathematical elegance and local user sovereignty.
        </p>
      </div>

      {/* ─── Four Pillars (Minimal 4-Col, No Boxes) ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          FOUNDATIONAL PILLARS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div key={p.number} className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-600 block">
                {p.number}
              </span>
              <h3 className="text-sm font-medium text-white tracking-tight">
                {p.title}
              </h3>
              <p className="text-[11px] font-mono uppercase text-neutral-500">
                {p.subtitle}
              </p>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Founders & Stewards (Flat Borderless List) ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          STEWARDSHIP
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((member) => (
            <div key={member.name} className="space-y-3 pb-6 border-b border-white/[0.06]">
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white">
                  {member.name}
                </h3>
                <p className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">
                  {member.role}
                </p>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {member.focus}
              </p>
              <div className="pt-1">
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Chronology (Flat Horizontal Layout) ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          CHRONOLOGY
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item) => (
            <div key={item.year} className="space-y-2">
              <span className="text-[11px] font-mono text-neutral-400 block uppercase">
                {item.year}
              </span>
              <h3 className="text-xs font-medium uppercase tracking-wider text-white">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Minimal Bottom Section ─── */}
      <div className="pt-10 border-t border-white/[0.08] space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          CORRESPONDENCE
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
          We welcome dialogue with researchers, engineers, and studios aligned with sovereign software craft.
        </p>
        <div className="pt-2 flex items-center gap-6 text-xs font-mono">
          <Link
            href="/contact"
            className="text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>Direct Inquiry</span>
            <ArrowUpRight size={13} />
          </Link>
          <Link
            href="/careers"
            className="text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            Open Roles
          </Link>
        </div>
      </div>
    </div>
  );
}
