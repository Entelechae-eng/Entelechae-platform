import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HeroVideo } from "@/components/ui/HeroVideo";

const platformItems = [
  {
    id: "atelier",
    title: "Atelier Studio",
    tag: "01 / FLAGSHIP PLATFORM",
    status: "V1.0 PRODUCTION",
    headline: "Native 120 FPS creative canvas engineered from first principles.",
    description:
      "Atelier integrates spatial canvas design and deterministic code execution with local-first cryptographic storage. Completely offline-capable with zero SaaS cloud dependencies.",
    image: "/images/atelier-garden.jpg",
    href: "/platforms/atelier",
    highlights: ["120 FPS WebGPU Engine", "Local Cryptographic Vault", "Zero Telemetry Lock-In"],
  },
  {
    id: "sovereign",
    title: "Sovereign Framework",
    tag: "02 / INFRASTRUCTURE",
    status: "PRIVATE ALPHA",
    headline: "Zero-dependency computing and cryptographic autonomy.",
    description:
      "The underlying substrate powering Entelechæ platforms. Built for complete process isolation, deterministic state replay, and decentralized edge resilience.",
    image: "/images/entelechae-hero-arch.jpg",
    href: "/platforms/atelier#framework",
    highlights: ["Air-Gapped Deployment", "Client-Side Encryption", "Deterministic State"],
  },
  {
    id: "future",
    title: "Autonomous Synthesis",
    tag: "03 / RESEARCH PIPELINE",
    status: "LABS RESEARCH",
    headline: "Foundational generative primitives and spatial hardware ergonomics.",
    description:
      "Experimental cognitive synthesis pipelines bridging deep mathematical models and high-throughput human-tool resonance.",
    image: "/images/parent-branches.jpg",
    href: "/research",
    highlights: ["Cognitive Synthesis", "Deterministic Agents", "Sensory Ergonomics"],
  },
];

export default function PlatformsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32 space-y-20 bg-black text-white select-none">
      {/* ─── Header ─── */}
      <div className="space-y-3 max-w-2xl">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          PLATFORMS &amp; ENVIRONMENTS
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
          Software built to endure.
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
          Entelechæ conceives and stewards sovereign software environments.
          We reject disposable tools to craft systems engineered for permanence.
        </p>
      </div>

      {/* ─── Featured Preview ─── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-500">
          <div>DEMONSTRATION: ATELIER V1</div>
          <Link
            href="/platforms/atelier"
            className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Case Study</span>
            <ArrowUpRight size={12} />
          </Link>
        </div>
        <HeroVideo />
      </div>

      {/* ─── Platform Portfolio (Flat Cursor Style, No Boxes) ─── */}
      <div className="space-y-16 border-t border-white/[0.08] pt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl sm:text-2xl font-normal text-white uppercase tracking-tight">
            Portfolio
          </h2>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            3 ACTIVE INITIATIVES
          </span>
        </div>

        <div className="space-y-16">
          {platformItems.map((platform) => (
            <div
              key={platform.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 border-b border-white/[0.06] last:border-b-0"
            >
              {/* Media */}
              <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-black">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-300 uppercase px-2 py-0.5 bg-black/70 backdrop-blur-sm rounded-[2px]">
                  {platform.status}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-6 space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  {platform.tag}
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                  {platform.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {platform.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono text-neutral-500 uppercase">
                  {platform.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-neutral-600" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    href={platform.href}
                    className="text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Inspect Platform</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
