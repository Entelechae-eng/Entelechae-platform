import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Shield, Globe, Users, Target } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const pillars = [
  {
    number: "01",
    title: "Mission",
    subtitle: "Platforms For Consequence",
    description:
      "Entelechae exists to build enduring software platforms and foundational computational systems. We prioritize long-term utility over short-lived hype cycles.",
    icon: Target,
  },
  {
    number: "02",
    title: "People",
    subtitle: "Pioneering Minds",
    description:
      "Led by founders Sahurain and Tantresh Sahu alongside a tightly knit ensemble of systems architects, mathematicians, and interface craftspeople.",
    icon: Users,
  },
  {
    number: "03",
    title: "Global Nodes",
    subtitle: "Distributed & Sovereign",
    description:
      "Operating across strategic studio and research nodes including San Francisco, London, Tokyo, and New Delhi, unified by asynchronous deep work.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Sovereign Capital",
    subtitle: "Patient & Uncompromising",
    description:
      "We operate free from the frantic demands of short-term venture milestones. Our capital structure ensures sovereign governance for the next 100 years.",
    icon: Shield,
  },
];

const timeline = [
  {
    year: "2024",
    title: "Genesis & Thesis Formulation",
    description:
      "Entelechae was founded to address the systemic fragility of modern cloud software and establish an independent parent technology entity.",
  },
  {
    year: "2025",
    title: "Atelier Architecture & Runtimes",
    description:
      "Engineered the core Atelier desktop engine from first principles, establishing our local-first cryptographic canvas and 120 FPS WebGPU pipeline.",
  },
  {
    year: "2026",
    title: "Production Cohort & Research Labs",
    description:
      "Launch of the Atelier V1 private creator cohort and formal inauguration of Entelechae Computational Research Labs.",
  },
  {
    year: "HORIZON",
    title: "Autonomous Ecosystems",
    description:
      "Incubating subsequent sovereign platforms in generative synthesis, cognitive ergonomics, and decentralized computing.",
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
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* ─── Hero Header ─── */}
      <div className="space-y-6 max-w-4xl">
        <Badge variant="emerald" dot>
          THE PARENT COMPANY
        </Badge>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Independent by{" "}
          <span className="italic font-serif font-light text-neutral-300">
            design.
          </span>
        </h1>
        <p className="text-neutral-400 text-lg sm:text-2xl font-light leading-relaxed max-w-3xl">
          An independent parent technology company building with patience,
          precision, and an uncompromising long view.
        </p>
      </div>

      {/* ─── Studio Photo Showcase ─── */}
      <div className="relative w-full h-72 sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <Image
          src="/images/company-about.jpg"
          alt="Entelechae company and studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/80">
          <span>ENTELECHAE PARENT HEADQUARTERS</span>
          <span>ESTABLISHED 2024</span>
        </div>
      </div>

      {/* ─── Company Manifesto ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 pt-8 border-t border-white/[0.08]">
        <div className="lg:col-span-5 space-y-4">
          <Badge variant="default">OUR MANIFESTO</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            The discipline of patient technology.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
          <p>
            The software industry has developed a structural pathology: building disposable products designed to be
            acquired, abandoned, or constantly monetized with coercive engagement loops. Craft has been sacrificed
            for growth hacking.
          </p>
          <p>
            <strong className="text-white font-medium">Entelechae operates under an inverted premise.</strong> We take
            our name from the classical Greek concept of <em className="italic text-neutral-200">entelecheia</em>—the
            inherent drive within a seed to realize its fullest form. We architect parent platforms designed to stand
            for decades, prioritizing sovereignty, mathematical beauty, and direct human empowerment.
          </p>
        </div>
      </div>

      {/* ─── Four Pillars Bento Grid ─── */}
      <div className="space-y-8">
        <div className="space-y-2">
          <Badge variant="default">FOUNDATIONAL PILLARS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How we structure our stewardship.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 space-y-4 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl text-neutral-500 font-light">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {pillar.subtitle}
                </p>
                <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Leadership & Founders ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="space-y-2">
          <Badge variant="default">LEADERSHIP</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Founders & Stewards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 space-y-4 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-white/25 transition-all"
                >
                  Contact
                </a>
              </div>

              <div className="pt-2 text-sm text-neutral-400 font-light leading-relaxed">
                <span className="text-xs font-mono text-neutral-500 block uppercase mb-1">
                  CORE FOCUS:
                </span>
                {member.focus}
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
                <a href={`mailto:${member.email}`} className="hover:text-white transition-colors">
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Timeline ─── */}
      <div className="space-y-8 pt-8 border-t border-white/[0.08]">
        <div className="space-y-2">
          <Badge variant="default">CHRONOLOGY</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Journey & Trajectory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-3xl border border-white/10 bg-[#0e0e13]/70 p-6 space-y-3"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#14141c] to-[#0a0a0d] p-10 sm:p-16 text-center space-y-6 shadow-2xl">
        <Badge variant="emerald" dot>
          DIRECT CORRESPONDENCE
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Shape the future with Entelechae.
        </h2>
        <p className="text-neutral-400 text-base max-w-xl mx-auto font-light leading-relaxed">
          We welcome conversations with researchers, designers, systems engineers, and partners who share our dedication to uncompromised digital craft.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/contact" className="ekon-btn-primary">
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/careers" className="ekon-btn-secondary">
            <span>Explore Open Roles</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
