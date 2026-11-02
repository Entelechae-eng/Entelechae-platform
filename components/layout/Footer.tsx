"use client";

import Link from "next/link";
import { LiveClock } from "@/components/ui/LiveClock";

const pageLinks = [
  { label: "Overview", href: "/" },
  { label: "Platforms", href: "/platforms" },
  { label: "Atelier Studio", href: "/platforms/atelier" },
  { label: "Research", href: "/research" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Sovereign Framework", href: "/platforms" },
  { label: "Cognitive Ergonomics", href: "/research" },
  { label: "Terms of Service", href: "/legal" },
  { label: "Privacy Charter", href: "/legal" },
  { label: "Security Policy", href: "/legal" },
];

const stewards = [
  { label: "Rain sahu (Co-Founder)", href: "mailto:sahurain15@gmail.com" },
  { label: "Tantresh Sahu (Co-Founder)", href: "mailto:entelechae@gmail.com" },
  { label: "Direct Inquiries", href: "mailto:entelechae@gmail.com" },
  { label: "GitHub Architecture", href: "https://github.com/Entelechae-eng/Entelechae-platform" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-12 border-t border-white/[0.08]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Top Minimal CTA */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-2 max-w-xl">
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              ENTELECHÆ STUDIO
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              We design and engineer sovereign software platforms with 100-year horizons.
              Direct inquiries and research collaborations are welcomed.
            </p>
          </div>

          <Link
            href="/contact"
            className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors shrink-0 self-start sm:self-auto"
          >
            Initiate →
          </Link>
        </div>

        {/* 3 Columns (Minimal Typographic Lists, Zero Boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-xs font-mono">
          <div className="space-y-4">
            <span className="text-neutral-500 uppercase tracking-widest block">
              Pages
            </span>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-neutral-500 uppercase tracking-widest block">
              Systems
            </span>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 col-span-2 md:col-span-1">
            <span className="text-neutral-500 uppercase tracking-widest block">
              Stewardship
            </span>
            <ul className="space-y-2.5">
              {stewards.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Minimal Meta Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.08] text-[11px] font-mono uppercase tracking-wider text-neutral-500">
          <div>ENTELECHÆ © 2026</div>
          <div>SAHURAIN &amp; TANTRESH SAHU</div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <LiveClock />
          </div>
          <div>SAN FRANCISCO · NEW DELHI</div>
        </div>
      </div>
    </footer>
  );
}
