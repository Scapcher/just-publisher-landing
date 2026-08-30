import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  arrow?: boolean;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-btn font-semibold transition-all duration-160 ease-spring group",
        "active:scale-[0.98]",
        size === "md" && "h-[56px] px-7 text-[15px]",
        size === "lg" && "h-[60px] px-8 text-base",
        variant === "primary" &&
          "bg-forest text-paper hover:bg-pine shadow-elev-1 hover:shadow-elev-2",
        variant === "ghost" && "text-ink underline underline-offset-4 hover:text-forest",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-160 ease-spring group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </a>
  );
}
