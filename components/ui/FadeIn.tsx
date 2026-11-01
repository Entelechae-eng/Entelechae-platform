"use client";

import { useEffect, useRef, ReactNode } from "react";

interface GucciFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  threshold?: number;
}

/**
 * GucciFadeIn — Matches Gucci's exact TextModule animation system.
 * Sets data-animate="true" when element enters viewport using IntersectionObserver.
 * CSS handles the actual animation: translateY(100%)→translateY(0%) + opacity 0→1
 * Easing: cubic-bezier(0.5, 0, 0, 1) — Gucci's signature deceleration curve.
 */
export function GucciFadeIn({ children, className = "", delay = 0, threshold = 0.1 }: GucciFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.animate = "true";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`g-text ${className}`}
      data-delay={delay}
    >
      {children}
    </div>
  );
}

interface GucciImageRevealProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  threshold?: number;
}

/**
 * GucciImageReveal — Matches Gucci's FancyImage animation.
 * CSS class g-image starts at scale(120%) and animates to scale(100%) on viewport entry.
 * Duration: 1.2s — Gucci's exact image transition duration.
 */
export function GucciImageReveal({ className = "", style, children, threshold = 0.05 }: GucciImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const img = el.querySelector("img, video, [data-reveal]") as HTMLElement | null;
    const target = img || el;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.dataset.animate = "true";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={style}>
      {children}
    </div>
  );
}

interface GucciInvertSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

/**
 * GucciInvertSection — Matches Gucci's newsletter/CTA color inversion.
 * When scrolled into view: background transitions from --background to --foreground,
 * and text transitions from --foreground to --background.
 * This is Gucci's signature "dark reveal" CTA section.
 */
export function GucciInvertSection({ children, className = "", threshold = 0.4 }: GucciInvertSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.animate = "true";
        } else {
          // Gucci resets on exit for scroll interactivity
          delete el.dataset.animate;
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`g-invert-section ${className}`}>
      {children}
    </div>
  );
}

// Legacy compatibility export
export { GucciFadeIn as FadeIn };
