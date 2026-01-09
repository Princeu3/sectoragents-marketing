import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        {
          "bg-secondary-100 text-secondary-800": variant === "default",
          "bg-primary-100 text-primary-800": variant === "primary",
          "bg-secondary-800 text-white": variant === "secondary",
          "bg-accent-100 text-accent-800": variant === "accent",
          "border border-secondary-300 text-secondary-700": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
