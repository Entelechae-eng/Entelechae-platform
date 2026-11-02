import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const perks = [
  {
    title: "Sovereign Ownership",
    description: "Meaningful founding equity and direct ownership of the intellectual property we create together.",
  },
  {
    title: "Deep Focus",
    description: "Strictly asynchronous, written-first studio culture without performative status meetings.",
  },
  {
    title: "Workstation Freedom",
    description: "Maximized hardware, unlimited research literature budget, and unrestricted local compute.",
  },
  {
    title: "Distributed Nodes",
    description: "Work from wherever your best thinking happens, connected across global studio nodes.",
  },
];

const openRoles = [
  {
    id: "r1",
    title: "Founding Systems Engineer",
    department: "PLATFORMS & RUNTIMES",
    location: "REMOTE / SAN FRANCISCO",
    type: "FULL-TIME",
    description:
      "Architect and optimize low-level native engines in Rust, C++, and WebAssembly for WebGPU pipelines.",
  },
  {
    id: "r2",
    title: "Computational Research Scientist",
    department: "RESEARCH LABS",
    location: "REMOTE / INTERNATIONAL",
    type: "FULL-TIME",
    description:
      "Lead theoretical investigations into generative synthesis and spatial representation models.",
  },
  {
    id: "r3",
    title: "Principal Interface Designer",
    department: "DESIGN & CRAFT",
    location: "REMOTE / LONDON",
    type: "FULL-TIME",
    description:
      "Craft the spatial visual language, fluid micro-interactions, and tactile design systems for Atelier.",
  },
];

export default function CareersPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 space-y-16 bg-black text-white select-none">
      {/* ─── Header ─── */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          CAREERS &amp; ROLES · 2026
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Build what gets built next.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          An elite, low-noise ensemble of engineers, researchers, and designers dedicated to sovereign software craftsmanship.
        </p>
      </div>

      {/* ─── Culture & Principles (Flat 4-Col, No Boxes) ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          STUDIO CULTURE
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((p) => (
            <div key={p.title} className="space-y-2">
              <h3 className="text-sm font-medium text-white tracking-tight">
                {p.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Open Roles (Flat Hairline List) ─── */}
      <div className="space-y-6 pt-8 border-t border-white/[0.08]">
        <div className="flex items-baseline justify-between">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            OPEN POSITIONS
          </div>
          <span className="text-[10px] font-mono text-neutral-500">3 ROLES AVAILABLE</span>
        </div>

        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {openRoles.map((role) => (
            <div
              key={role.id}
              className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500">
                  <span>{role.department}</span>
                  <span>·</span>
                  <span>{role.location}</span>
                </div>
                <h3 className="text-base font-medium text-white">
                  {role.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {role.description}
                </p>
              </div>

              <div className="shrink-0 pt-1">
                <Link
                  href={`/contact?role=${encodeURIComponent(role.title)}`}
                  className="text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1 underline underline-offset-4"
                >
                  <span>Apply</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── General Applications ─── */}
      <div className="pt-10 border-t border-white/[0.08] space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          GENERAL INITIATIVE
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
          Exceptional minds transcend rigid job descriptions. If you work in low-level systems, mathematical synthesis, or spatial design, send your proof of work.
        </p>
        <div className="pt-2">
          <a
            href="mailto:entelechae@gmail.com?subject=Entelechae%20General%20Application"
            className="text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>Send Unsolicited Proof of Work</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
