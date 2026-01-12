"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Brain,
  Plug,
  Lightbulb,
  Users,
  Shield,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { features, workflowSteps } from "@/data/features";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Plug,
  Lightbulb,
  Users,
  Shield,
  Cloud,
};

export function FeaturesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeading
          title="How SectorAgent Works"
          subtitle="Intelligent automation that understands your business processes and adapts to your needs."
        />

        {/* Workflow Diagram */}
        <div className="mb-16 lg:mb-24">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30 mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary-600">{step.description}</p>
                  </div>

                  {/* Mobile Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <ArrowRight className="w-5 h-5 text-primary-400 rotate-90 sm:rotate-0" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Brain;

            return (
              <motion.div
                key={feature.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 lg:p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
