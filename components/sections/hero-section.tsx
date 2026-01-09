"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

const stats = [
  { icon: Clock, value: "40-60%", label: "Reduction in manual processing" },
  { icon: Zap, value: "$150K-500K", label: "Annual savings per facility" },
  { icon: Shield, value: "99.9%", label: "Uptime SLA" },
];

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent-200/30 rounded-full blur-3xl" />

      <Container className="relative z-10 py-16 lg:py-24">
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={prefersReducedMotion ? {} : itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered Enterprise Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={prefersReducedMotion ? {} : itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 tracking-tight"
          >
            Enterprise AI that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              automates what matters
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={prefersReducedMotion ? {} : itemVariants}
            className="mt-6 text-lg sm:text-xl text-secondary-600 max-w-2xl mx-auto"
          >
            Intelligent workflows for manufacturing and retail operations.
            Reduce manual work, eliminate errors, and scale your business with
            AI agents that understand your industry.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReducedMotion ? {} : itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => setIsVideoOpen(true)}
              className="group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              See SectorAgents in Action
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#getting-started")}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            variants={prefersReducedMotion ? {} : itemVariants}
            className="mt-6 text-sm text-secondary-500"
          >
            14-day free trial • No credit card required • SOC2 & HIPAA compliant
          </motion.p>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          variants={prefersReducedMotion ? {} : itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-secondary-100"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-3xl font-bold text-secondary-900">{stat.value}</p>
                <p className="text-sm text-secondary-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl mx-4 aspect-video bg-secondary-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close video"
            >
              ×
            </button>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg opacity-75">Video demo placeholder</p>
                <p className="text-sm opacity-50 mt-2">Replace with actual video embed</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
