import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        {
          "text-center": align === "center",
          "text-left": align === "left",
        },
        className
      )}
      {...props}
    >
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
          dark ? "text-white" : "text-secondary-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg sm:text-xl max-w-3xl",
            align === "center" && "mx-auto",
            dark ? "text-secondary-300" : "text-secondary-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
