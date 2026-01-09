"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

export interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "gradient" | "dark";
}

export function SectionWrapper({
  className,
  background = "white",
  children,
  id,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        {
          "bg-white": background === "white",
          "bg-secondary-50": background === "gray",
          "bg-gradient-to-br from-primary-50 via-white to-accent-50": background === "gradient",
          "bg-secondary-900 text-white": background === "dark",
        },
        className
      )}
    >
      {children}
    </motion.section>
  );
}
