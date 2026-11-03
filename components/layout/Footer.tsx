"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LiveClock } from "@/components/ui/LiveClock";

const pageLinks = [
  { label: "Overview", href: "/" },
  { label: "Platforms", href: "/platforms" },
  { label: "Research", href: "/research" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const platformLinks = [
  { label: "Entelechae Visuals", href: "https://entele-visuals.vercel.app/", external: true },
  { label: "Entelechae Code", href: "https://entelechae-code.vercel.app/", external: true },
  { label: "Platform Overview", href: "/platforms", external: false },
  { label: "Atelier Studio", href: "/platforms/atelier", external: false },
];

const githubLinks = [
  { label: "GitHub @Entelechae-eng", href: "https://github.com/Entelechae-eng", external: true },
  { label: "Entele-visuals Repo", href: "https://github.com/Entelechae-eng/Entele-visuals", external: true },
  { label: "Entelechae-platform Repo", href: "https://github.com/Entelechae-eng/Entelechae-platform", external: true },
  { label: "Sovereign Charter", href: "/legal", external: false },
];

const stewards = [
  { label: "Rain sahu (Co-Founder)", href: "mailto:sahurain15@gmail.com" },
  { label: "Tantresh Sahu (Co-Founder)", href: "mailto:tantreshsahu@gmail.com" },
  { label: "Studio Inquiries", href: "mailto:entelechae@gmail.com" },
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

        {/* 4 Columns (Minimal Typographic Lists, Zero Boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-xs font-mono">
          {/* Navigation Pages */}
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

          {/* Official Platforms */}
          <div className="space-y-4">
            <span className="text-neutral-500 uppercase tracking-widest block">
              Platforms
            </span>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={11} className="text-neutral-600" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering & GitHub */}
          <div className="space-y-4">
            <span className="text-neutral-500 uppercase tracking-widest block">
              GitHub &amp; Code
            </span>
            <ul className="space-y-2.5">
              {githubLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={11} className="text-neutral-600" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Stewardship */}
          <div className="space-y-4">
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
