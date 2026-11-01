"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home,", href: "/" },
  { label: "Work,", href: "/platforms" },
  { label: "About,", href: "/company" },
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
          className={`w-full max-w-7xl mx-auto px-6 sm:px-12 py-5 sm:py-6 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          {/* Exact Ekon Logo: E. */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white font-bold text-2xl tracking-tighter group"
          >
            <span className="font-sans">E.</span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity ml-1">
              ENTELECHÆ
            </span>
          </Link>

          {/* Exact Ekon Nav Items: Home, Work, About, Contact */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium tracking-tight transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              <span>Work with us</span>
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neutral-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/98 flex flex-col justify-center px-8 sm:px-12 md:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors"
                >
                  {item.label.replace(",", "")}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-white text-black font-semibold text-center text-sm uppercase tracking-wider"
                >
                  Work with us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
