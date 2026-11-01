import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { HeroVideo } from "@/components/ui/HeroVideo";

const platformItems = [
  {
    id: "atelier",
    title: "Atelier Studio",
    tag: "FLAGSHIP PLATFORM 01",
    status: "V1.0 IN PRODUCTION",
    statusVariant: "emerald" as const,
    headline: "A considered environment for turning ideas into real products.",
    description:
      "Atelier is Entelechae's inaugural software platform: an ultra-fast, native creative environment engineered from first principles. It brings together spatial canvas design, deterministic code execution, and modular workspace logic without bloated SaaS dependencies.",
    image: "/images/atelier-garden.jpg",
    video: "/images/atelier-white-video.mp4",
    href: "/platforms/atelier",
    highlights: ["Native 120 FPS Performance", "Local-First Cryptographic Storage", "Infinite Modular Canvas"],
  },
  {
    id: "sovereign",
    title: "Sovereign Framework",
    tag: "INFRASTRUCTURE 02",
    status: "PRIVATE ALPHA",
    statusVariant: "default" as const,
    headline: "Zero-dependency computing and cryptographic autonomy.",
    description:
      "The underlying systems framework that powers Entelechae platforms. Designed for complete isolation, deterministic state replay, and resilience across decentralized edge nodes.",
    image: "/images/entelechae-hero-arch.jpg",
    href: "/platforms/atelier#framework",
    highlights: ["Zero Cloud Vendor Lock-In", "End-to-End Encryption", "Air-Gapped Deployment Ready"],
  },
  {
    id: "future",
    title: "Autonomous Synthesis",
    tag: "LABS INITIATIVE 03",
    status: "IN RESEARCH",
    statusVariant: "default" as const,
    headline: "Next-generation platforms born from our computational labs.",
    description:
      "Future platforms currently in our research pipeline, bridging generative AI primitives, high-throughput cognitive pipelines, and spatial hardware interfaces.",
    image: "/images/parent-branches.jpg",
    href: "/research",
    highlights: ["Generative Cognition", "Deterministic Agents", "Spatial Human-Tool Resonance"],
  },
];

export default function PlatformsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* ─── Hero Header ─── */}
      <div className="space-y-6 max-w-3xl">
        <Badge variant="emerald" dot>
          PLATFORMS & ENVIRONMENTS
        </Badge>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Software built to{" "}
          <span className="italic font-serif font-light text-neutral-300">
            endure.
          </span>
        </h1>
        <p className="text-neutral-400 text-base sm:text-xl font-light leading-relaxed">
          Entelechae conceives, architects, and stewards sovereign software platforms.
          We don&apos;t build disposable tools; we craft enduring environments for what gets built next.
        </p>
      </div>

      {/* ─── Featured Video Preview ─── */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            FEATURED FILM: ATELIER V1
          </div>
          <Link
            href="/platforms/atelier"
            className="text-xs font-mono text-white hover:text-neutral-300 flex items-center gap-1"
          >
            <span>Read Case Study</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <HeroVideo />
      </div>

      {/* ─── Platforms List ─── */}
      <div className="space-y-16">
        <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Platform Portfolio
          </h2>
          <span className="text-xs font-mono text-neutral-400">
            3 ACTIVE INITIATIVES
          </span>
        </div>

        <div className="space-y-12">
          {platformItems.map((platform) => (
            <div
              key={platform.id}
              className="rounded-3xl border border-white/10 bg-[#0e0e13]/80 p-8 sm:p-12 hover:border-white/20 transition-all duration-500 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                {/* Left Media */}
                <div className="lg:col-span-6 relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 group">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                    <span>{platform.tag}</span>
                    <span className="text-emerald-400">{platform.status}</span>
                  </div>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge variant={platform.statusVariant} dot>
                      {platform.tag}
                    </Badge>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {platform.title}
                  </h3>

                  <p className="text-lg text-neutral-300 font-medium tracking-tight">
                    {platform.headline}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                      Architectural Pillars:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {platform.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      href={platform.href}
                      className="ekon-btn-primary"
                    >
                      <span>Explore {platform.title}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#121217] to-[#09090c] p-10 sm:p-14 text-center space-y-6">
        <Badge variant="emerald" dot>
          PARTNERSHIP & ACCESS
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Interested in deploying or co-developing platforms?
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          We welcome conversations with studios, independent researchers, and enterprises seeking sovereign software environments.
        </p>
        <div className="pt-2">
          <Link href="/contact" className="ekon-btn-primary">
            <span>Initiate Platform Dialogue</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
