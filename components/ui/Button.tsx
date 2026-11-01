import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300",
          {
            "bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80":
              variant === "primary",
            "border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black":
              variant === "outline",
            "text-black hover:opacity-60 dark:text-white": variant === "ghost",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
