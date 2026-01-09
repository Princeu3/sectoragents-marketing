"use client";

import { motion, useReducedMotion } from "motion/react";
import { Calendar, Play, Settings, Rocket, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    icon: Calendar,
    number: 1,
    title: "Schedule a Demo",
    description: "See live workflows specific to your industry. Takes just 5 minutes to book.",
    duration: "30 min",
  },
  {
    icon: Play,
    number: 2,
    title: "Free Trial",
    description: "Access our managed sandbox with sample workflows. 14 days, no credit card required.",
    duration: "14 days",
  },
  {
    icon: Settings,
    number: 3,
    title: "Implementation",
    description: "Our team configures your workflows and system integrations based on your needs.",
    duration: "2-4 weeks",
  },
  {
    icon: Rocket,
    number: 4,
    title: "Go Live",
    description: "Activate automation and start capturing value immediately. We're with you every step.",
    duration: "Day 1",
  },
];

export function GettingStartedSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="getting-started" background="gray">
      <Container>
        <SectionHeading
          title="Get Started in Days, Not Months"
          subtitle="A clear pathway from demo to production. We make implementation fast and painless."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number with Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-secondary-100">
                      <step.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-100 h-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-medium mb-3">
                      {step.duration}
                    </span>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile/Tablet Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-5 h-5 text-primary-400 rotate-90 sm:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-600 mb-6">
            Ready to transform your operations? Contact us to learn more.
          </p>
          <p className="text-primary-600 font-medium">
            Email us at hello@sectoragents.ai
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
