"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LiveClock } from "@/components/ui/LiveClock";

const pageLinks = [
  { label: "Homepage", href: "/" },
  { label: "Our Platforms", href: "/platforms" },
  { label: "Atelier Studio", href: "/platforms/atelier" },
  { label: "Research Labs", href: "/research" },
  { label: "Company & Manifesto", href: "/company" },
  { label: "Contact Us", href: "/contact" },
];

const sectionLinks = [
  { label: "Our Disciplines", href: "/#services" },
  { label: "Endorsements", href: "/#testimonials" },
  { label: "FAQ's", href: "/#faq" },
  { label: "Parent Foundation", href: "/company" },
  { label: "Sovereign Framework", href: "/platforms" },
];

const socialLinks = [
  { label: "Sahurain (Co-Founder)", href: "mailto:sahurain15@gmail.com" },
  { label: "Tantresh Sahu (Co-Founder)", href: "mailto:entelechae@gmail.com" },
  { label: "entelechae@gmail.com", href: "mailto:entelechae@gmail.com" },
  { label: "sahurain15@gmail.com", href: "mailto:sahurain15@gmail.com" },
  { label: "GitHub Architecture", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-8 overflow-hidden border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 space-y-20">
        {/* Top Text & CTA Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-16 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            <h5 className="text-sm font-semibold tracking-wider uppercase text-neutral-400">
              <Link href="/#hero" className="hover:text-white transition-colors">
                ENTELECHÆ STUDIO®
              </Link>
            </h5>
            <h4 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-white leading-tight">
              Are you interested in collaborating to elevate sovereign computing?
            </h4>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-[3px] bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors self-start md:self-auto shrink-0"
          >
            <span>WORK WITH US</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 3 Links Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          {/* Pages */}
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              PAGES
            </p>
            <ul className="space-y-3.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              SECTIONS
            </p>
            <ul className="space-y-3.5">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stewardship & Coordinates */}
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              STEWARDSHIP & COORDINATES
            </p>
            <ul className="space-y-3.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Meta Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 uppercase tracking-wider pt-2">
          <div>ENTELECHÆ 2026. ALL RIGHTS RESERVED.</div>
          <div className="text-white/70">
            FOUNDED BY SAHURAIN &amp; TANTRESH SAHU
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <LiveClock />
          </div>
          <div>SAN FRANCISCO · NEW DELHI</div>
        </div>

        {/* Monumental Ekon-Style Footer Banner */}
        <div className="pt-8 overflow-hidden select-none pointer-events-none">
          <p className="text-[12vw] font-bold uppercase tracking-tighter leading-none text-white/[0.07] text-center whitespace-nowrap">
            ENTELECHÆ STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
