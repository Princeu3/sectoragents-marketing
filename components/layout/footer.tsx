"use client";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Logo dark />
              <p className="mt-4 text-secondary-400 text-sm max-w-xs">
                Enterprise AI that automates what matters. Intelligent workflows
                for manufacturing and retail operations.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-secondary-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-secondary-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              &copy; {currentYear} SectorAgent.ai. All rights reserved.
            </p>
            <p className="text-secondary-500 text-sm">
              Enterprise AI for Manufacturing & Retail
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
