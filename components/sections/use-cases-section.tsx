"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Factory, ShoppingBag, ChevronDown, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCases } from "@/data/use-cases";

export function UseCasesSection() {
  const [activeIndustry, setActiveIndustry] = useState<"manufacturing" | "retail">("manufacturing");
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredCases = useCases.filter((uc) => uc.industry === activeIndustry);

  return (
    <SectionWrapper id="use-cases" background="gray">
      <Container>
        <SectionHeading
          title="Use Cases That Deliver"
          subtitle="Pre-built workflows designed by industry experts. See exactly how SectorAgents automates your critical processes."
        />

        {/* Industry Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white rounded-xl shadow-sm border border-secondary-200">
            <button
              onClick={() => setActiveIndustry("manufacturing")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeIndustry === "manufacturing"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-secondary-600 hover:text-secondary-900"
              }`}
            >
              <Factory className="w-4 h-4" />
              Manufacturing
            </button>
            <button
              onClick={() => setActiveIndustry("retail")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeIndustry === "retail"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-secondary-600 hover:text-secondary-900"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Retail
            </button>
          </div>
        </div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Card
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCase === useCase.id
                      ? "ring-2 ring-primary-500"
                      : "hover:shadow-lg"
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedCase(expandedCase === useCase.id ? null : useCase.id)
                    }
                    className="w-full text-left p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-secondary-900 mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-secondary-600 text-sm">
                          {useCase.description}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-secondary-400 flex-shrink-0 transition-transform ${
                          expandedCase === useCase.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Metrics Preview */}
                    {useCase.metrics && (
                      <div className="flex gap-4 mt-4">
                        {useCase.metrics.map((metric) => (
                          <Badge key={metric.label} variant="accent">
                            {metric.value} {metric.label}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedCase === useCase.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-secondary-100 pt-4">
                          <h4 className="font-semibold text-secondary-900 mb-3">
                            Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            {useCase.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2 text-sm text-secondary-600"
                              >
                                <Check className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </SectionWrapper>
  );
}
