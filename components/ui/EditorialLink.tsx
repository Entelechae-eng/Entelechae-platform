import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface EditorialLinkProps extends Omit<React.ComponentProps<typeof Link>, "href" | "children" | "className"> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function EditorialLink({ href, children, className, ...props }: EditorialLinkProps) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-3", className)}
      style={{
        fontFamily: "var(--font-geist-sans), Helvetica Neue, Arial, sans-serif",
        fontSize: "10px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        textDecoration: "none",
        transition: "opacity 0.4s ease",
      }}
      {...props}
    >
      <span
        style={{
          display: "inline-block",
          width: "2rem",
          height: "1px",
          backgroundColor: "currentColor",
          opacity: 0.5,
          transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
        className="group-hover:w-12"
      />
      <span className="group-hover:opacity-50 transition-opacity duration-500">{children}</span>
    </Link>
  );
}
