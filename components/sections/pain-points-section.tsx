"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  FileWarning,
  Eye,
  ClipboardCheck,
  Package,
  BarChart3,
  Headphones,
  ArrowRight,
  Factory,
  ShoppingBag,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { painPoints } from "@/data/pain-points";

const iconMap: Record<string, React.ElementType> = {
  FileWarning,
  Eye,
  ClipboardCheck,
  Package,
  BarChart3,
  Headphones,
};

export function PainPointsSection() {
  const [activeIndustry, setActiveIndustry] = useState<"manufacturing" | "retail">("manufacturing");
  const prefersReducedMotion = useReducedMotion();

  const filteredPainPoints = painPoints.filter((p) => p.industry === activeIndustry);

  return (
    <SectionWrapper id="solutions" background="gray">
      <Container>
        <SectionHeading
          title="Your Challenges, Solved"
          subtitle="We understand the operational pain points that slow your business down. Here's how SectorAgents transforms them into competitive advantages."
        />

        {/* Industry Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-secondary-200 rounded-xl">
            <button
              onClick={() => setActiveIndustry("manufacturing")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeIndustry === "manufacturing"
                  ? "bg-white text-secondary-900 shadow-sm"
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
                  ? "bg-white text-secondary-900 shadow-sm"
                  : "text-secondary-600 hover:text-secondary-900"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Retail
            </button>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="space-y-8">
          {filteredPainPoints.map((item, index) => {
            const Icon = iconMap[item.pain.icon] || FileWarning;

            return (
              <motion.div
                key={item.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center"
              >
                {/* Pain Card */}
                <div className="p-6 lg:p-8 rounded-2xl bg-white border border-red-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
                        The Pain
                      </p>
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">
                        {item.pain.title}
                      </h3>
                      <p className="text-secondary-600">{item.pain.description}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-primary-500" />
                </div>

                {/* Solution Card */}
                <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 shadow-sm">
                  <div>
                    <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      The Solution
                    </p>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      {item.solution.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">{item.solution.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                      Powered by {item.solution.feature}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
