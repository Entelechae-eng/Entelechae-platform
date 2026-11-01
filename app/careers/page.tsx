import Link from "next/link";
import { ArrowUpRight, Zap, Shield, Globe, Clock, Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const perks = [
  {
    icon: Shield,
    title: "Sovereign Ownership",
    description: "Meaningful founding equity and direct ownership of the intellectual property we create together.",
  },
  {
    icon: Clock,
    title: "Deep, Uninterrupted Work",
    description: "We abhor performative status meetings. Our culture is strictly asynchronous, written, and deep-focus first.",
  },
  {
    icon: Zap,
    title: "State-of-the-Art Gear",
    description: "Maxed hardware, unlimited book/paper allowances, and local workstation budget for peak technical freedom.",
  },
  {
    icon: Globe,
    title: "Global Studio Nodes",
    description: "Work from wherever you produce your best thinking. Fully supported distributed studio model.",
  },
];

const openRoles = [
  {
    id: "r1",
    title: "Founding Systems Engineer",
    department: "PLATFORMS & RUNTIMES",
    location: "REMOTE / SAN FRANCISCO / LONDON",
    type: "FULL-TIME",
    description:
      "Architect and optimize our low-level native engines in Rust, C++, and WebAssembly. You will define the rendering pipelines and memory architectures of Atelier.",
    requirements: [
      "Deep mastery of Rust and modern systems programming",
      "Experience with WebGPU, Metal, or Vulkan rendering pipelines",
      "Obsession with sub-8ms latency and deterministic execution graphs",
    ],
  },
  {
    id: "r2",
    title: "Computational Research Scientist",
    department: "RESEARCH LABS",
    location: "REMOTE / INTERNATIONAL",
    type: "FULL-TIME",
    description:
      "Lead theoretical investigations into generative synthesis, cognitive ergonomics, and spatial representation models before industry adoption.",
    requirements: [
      "Demonstrated track record of original computational publications",
      "Fluency in mathematical formalisms and generative synthesis",
      "Ability to translate theoretical theses into working proof-of-concepts",
    ],
  },
  {
    id: "r3",
    title: "Principal Interface Designer",
    department: "DESIGN & CRAFT",
    location: "REMOTE / LONDON / TOKYO",
    type: "FULL-TIME",
    description:
      "Craft the spatial visual language, fluid micro-interactions, and tactile design systems for Atelier and future Entelechae platforms.",
    requirements: [
      "Exceptional portfolio demonstrating uncompromising taste and craft",
      "Fluency in modern web animations, shaders, and spatial design tools",
      "Deep respect for editorial typography and cognitive ergonomic balance",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* ─── Hero Header ─── */}
      <div className="space-y-6 max-w-4xl">
        <Badge variant="emerald" dot>
          CAREERS & ROLES 2026
        </Badge>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Build what gets{" "}
          <span className="italic font-serif font-light text-neutral-300">
            built next.
          </span>
        </h1>
        <p className="text-neutral-400 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl">
          We are assembling an elite, low-noise ensemble of engineers, researchers, and
          designers dedicated to sovereign software and generational craftsmanship.
        </p>
      </div>

      {/* ─── Culture & Perks Bento Grid ─── */}
      <div className="space-y-8">
        <div className="space-y-2">
          <Badge variant="default">CULTURE OF CRAFT</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How we work together.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-7 space-y-4 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Open Roles ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <Badge variant="default">CURRENT OPENINGS</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
              Open Positions
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-400">
            3 POSITIONS AVAILABLE
          </span>
        </div>

        <div className="space-y-6">
          {openRoles.map((role) => (
            <div
              key={role.id}
              className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 sm:p-10 hover:border-white/20 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      {role.department}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">{role.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                    {role.title}
                  </h3>
                </div>

                <div className="text-xs font-mono text-neutral-400">
                  {role.location}
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-4xl">
                {role.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                  Core Attributes:
                </span>
                <ul className="space-y-2">
                  {role.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-xs sm:text-sm text-neutral-400 font-light"
                    >
                      <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-end">
                <Link
                  href={`/contact?role=${encodeURIComponent(role.title)}`}
                  className="ekon-btn-primary"
                >
                  <span>Apply for this role</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── General Applications ─── */}
      <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#14141c] to-[#0a0a0d] p-10 sm:p-16 text-center space-y-6 shadow-2xl">
        <Badge variant="emerald" dot>
          GENERAL INITIATIVE
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Don&apos;t see your specific discipline?
        </h2>
        <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
          Exceptional minds transcend rigid job titles. If you are an exceptional
          mathematician, low-level hacker, or spatial craftsperson, send us your proof of work.
        </p>
        <div className="pt-4">
          <a
            href="mailto:entelechae@gmail.com?subject=Entelechae%20General%20Application"
            className="ekon-btn-primary"
          >
            <span>Send Unsolicited Proof of Work</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
