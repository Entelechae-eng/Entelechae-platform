import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "pill" | "emerald";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "default",
  className = "",
  dot = false,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase transition-colors";

  const variants = {
    default: "border border-white/10 text-neutral-400 bg-transparent",
    outline: "border border-white/10 text-neutral-500 hover:text-neutral-300",
    pill: "bg-white/10 text-white font-medium border border-white/10",
    emerald: "border border-white/10 text-neutral-300 bg-transparent", // alias for backward-compat without colors
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-400" />
        </span>
      )}
      {children}
    </span>
  );
}
