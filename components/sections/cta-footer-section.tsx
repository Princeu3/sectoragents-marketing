"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CTAFooterSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-500/20 via-transparent to-transparent" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your operations?
          </h2>
          <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
            Join industry leaders who are already saving time, reducing errors,
            and scaling their businesses with intelligent automation.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            onClick={() => scrollToSection("#getting-started")}
            className="bg-white text-primary-700 hover:bg-primary-50 shadow-xl shadow-black/20"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-primary-200 text-sm mb-4">Trusted by operations teams at</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {["Manufacturing Co.", "Retail Group", "Global Supply", "Tech Industries", "Enterprise Inc."].map(
                (company) => (
                  <span key={company} className="text-white font-medium">
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
