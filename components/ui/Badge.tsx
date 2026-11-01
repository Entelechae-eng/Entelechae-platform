import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "emerald" | "outline" | "pill";
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
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-colors";

  const variants = {
    default: "bg-white/[0.05] border border-white/10 text-neutral-300 backdrop-blur-md",
    emerald: "bg-emerald-500/[0.08] border border-emerald-500/25 text-emerald-400 backdrop-blur-md",
    outline: "border border-white/15 text-neutral-400 hover:text-white",
    pill: "bg-white/10 text-white font-medium",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          {variant === "emerald" && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              variant === "emerald" ? "bg-emerald-500" : "bg-neutral-400"
            }`}
          />
        </span>
      )}
      {children}
    </span>
  );
}

