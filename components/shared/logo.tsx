import { cn } from "@/lib/utils";
import Link from "next/link";

export interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-bold text-xl",
        dark ? "text-white" : "text-secondary-900",
        className
      )}
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg rotate-6" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SA</span>
        </div>
      </div>
      <span>
        Sector<span className="text-primary-600">Agents</span>
        <span className="text-primary-400">.ai</span>
      </span>
    </Link>
  );
}
