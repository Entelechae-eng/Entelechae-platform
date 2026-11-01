"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  category: "all" | "platforms" | "research" | "ventures";
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  year: string;
  status: string;
  statusType?: "active" | "research" | "upcoming";
}

const projects: Project[] = [
  {
    id: "atelier",
    category: "platforms",
    categoryLabel: "Flagship Platform",
    title: "Atelier Studio",
    subtitle: "A place to make what matters",
    description:
      "A sovereign creative environment where ideas, computational logic, and digital craftsmanship converge into real products.",
    image: "/images/atelier-identity.jpg",
    href: "/platforms/atelier",
    year: "2026",
    status: "V1.0 LIVE",
    statusType: "active",
  },
  {
    id: "research",
    category: "research",
    categoryLabel: "Deep Labs",
    title: "Entelechae Research Labs",
    subtitle: "Ideas before they become products",
    description:
      "Foundational research papers and computational experiments exploring generative synthesis, cognitive ergonomics, and deterministic architectures.",
    image: "/images/research-statues.jpg",
    href: "/research",
    year: "2026",
    status: "ONGOING",
    statusType: "research",
  },
  {
    id: "sovereign",
    category: "ventures",
    categoryLabel: "Infrastructure",
    title: "Sovereign Runtime Framework",
    subtitle: "Zero-dependency computing",
    description:
      "Closed-loop platform infrastructure built from first principles for high availability, cryptographic privacy, and long-term autonomy.",
    image: "/images/entelechae-hero-arch.jpg",
    href: "/platforms#sovereign",
    year: "2026",
    status: "INTERNAL ALPHA",
    statusType: "upcoming",
  },
  {
    id: "company",
    category: "platforms",
    categoryLabel: "Studio & Capital",
    title: "Entelechae Parent Entity",
    subtitle: "Independent by design",
    description:
      "The stewardship engine behind our ecosystem, aligning patient capital, operational autonomy, and uncompromised engineering quality.",
    image: "/images/company-about.jpg",
    href: "/company",
    year: "2026",
    status: "ESTABLISHED",
    statusType: "active",
  },
];

const categories = [
  { id: "all", label: "All Works (4)" },
  { id: "platforms", label: "Platforms (2)" },
  { id: "research", label: "Research (1)" },
  { id: "ventures", label: "Ventures (1)" },
];

export function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-10">
      {/* Category Pills Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-neutral-400 hidden sm:block">
          SHOWING {filteredProjects.length} OF {projects.length} INITIATIVES
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e13]/80 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-500 shadow-xl"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  {project.categoryLabel}
                </span>
                <span className="text-neutral-600">•</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    project.statusType === "active"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-white/5 border-white/10 text-neutral-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-400">{project.year}</span>
            </div>

            {/* Thumbnail Preview */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 my-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Hover Floating Action */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 shadow-lg">
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={20}
                  className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

