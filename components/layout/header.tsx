"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { navigation } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto rounded-2xl border transition-all duration-500 ease-out",
          isScrolled
            ? "mt-4 max-w-4xl bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-white/20"
            : "mt-0 max-w-7xl bg-transparent shadow-none border-transparent"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-14 px-4 lg:px-6" : "h-16 lg:h-20 px-0"
          )}
        >
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-secondary-600 hover:text-primary-600"
                    : "text-secondary-800 hover:text-primary-600"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              size="sm"
              onClick={() => scrollToSection("#getting-started")}
              className={cn(
                "transition-all duration-300",
                isScrolled && "scale-95"
              )}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-secondary-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={cn(
              "lg:hidden border-t border-secondary-100",
              isScrolled ? "bg-white/90 rounded-b-2xl" : "bg-white"
            )}
          >
            <div className="py-4 px-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-secondary-700 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-secondary-100">
                <Button
                  className="w-full"
                  onClick={() => scrollToSection("#getting-started")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
