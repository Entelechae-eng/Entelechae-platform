"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Shield } from "lucide-react";

export function BentoGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Card 1: Large Featured Card - Atelier (Spans 8 cols) */}
        <div className="md:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121217] to-[#0a0a0d] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-500 shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-700" />

          {/* Top meta */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-neutral-300">
                FLAGSHIP 01
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                ACTIVE
              </span>
            </div>
            <Link
              href="/platforms/atelier"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Media preview */}
          <div className="relative my-8 w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/atelier-garden.jpg"
              alt="Atelier platform preview"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80">
              <span>NATIVE WORKFLOW CANVAS</span>
              <span>EST. 2026</span>
            </div>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Atelier — A place to make what matters.
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              Our inaugural creative platform. A considered environment where ideas, computational logic, and digital craftsmanship converge into real products.
            </p>
            <div className="pt-3 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                Creative Studio
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                Sovereign Architecture
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                Zero Latency
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Research & Synthesis (Spans 4 cols) */}
        <div className="md:col-span-4 group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121217] to-[#0a0a0d] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-500 shadow-xl">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-neutral-300">
              LABS 02
            </span>
            <Link
              href="/research"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative my-6 w-full h-44 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/research-sculpture.jpg"
              alt="Research sculpture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Deep Research.
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Ideas before they become products. Exploring generative cognition, deterministic computation, and systems of consequence.
            </p>
          </div>
        </div>

        {/* Card 3: Sovereign Infrastructure (Spans 5 cols) */}
        <div className="md:col-span-5 group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121217] to-[#0a0a0d] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-500 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-neutral-300">
              GOVERNANCE 03
            </span>
            <Shield size={20} className="text-neutral-400" />
          </div>

          <div className="py-8 space-y-4">
            <div className="text-5xl sm:text-6xl font-bold tracking-tighter text-white font-mono">
              100%
            </div>
            <div className="text-base text-neutral-300 font-medium tracking-tight">
              Sovereign & Independent Architecture
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              Zero platform lock-in. Entelechae builds closed-loop, resilient platforms designed to endure over decades.
            </p>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>PATIENT CAPITAL</span>
            <span>ENDURING CODE</span>
          </div>
        </div>

        {/* Card 4: Company & Long View (Spans 7 cols) */}
        <div className="md:col-span-7 group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121217] to-[#0a0a0d] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-500 shadow-xl">
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-neutral-300">
              COMPANY 04
            </span>
            <Link
              href="/company"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative my-6 w-full h-48 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/city-architecture.jpg"
              alt="City architecture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-300">
              THE 100-YEAR HORIZON
            </div>
          </div>

          <div className="relative z-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Independent by Design.
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-xl">
              An independent parent technology company building with patience, precision, and an uncompromising long view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
