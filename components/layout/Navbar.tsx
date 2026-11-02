"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/platforms" },
  { label: "Research", href: "/research" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <div
          className={`w-full max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-black/85 backdrop-blur-md border-b border-white/[0.08]"
              : "bg-transparent"
          }`}
        >
          {/* Logo: E. ENTELECHÆ */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-medium text-base sm:text-lg tracking-tight group"
          >
            <span>E.</span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              ENTELECHÆ
            </span>
          </Link>

          {/* Minimal Cursor / Meta Style Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-mono tracking-wider transition-colors duration-200 uppercase ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Initiate Action Button (Minimal Cursor Pill, No Brackets) */}
            <Link
              href="/contact"
              className="px-3.5 py-1 rounded-full text-xs font-mono tracking-wider text-neutral-300 hover:text-black hover:bg-white border border-white/15 hover:border-white transition-all uppercase"
            >
              Initiate
            </Link>
          </nav>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-8 flex flex-col gap-6 md:hidden text-xs font-mono uppercase tracking-wider"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white pt-3 border-t border-white/[0.08] flex items-center justify-between"
            >
              <span>Initiate Contact</span>
              <span>→</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
