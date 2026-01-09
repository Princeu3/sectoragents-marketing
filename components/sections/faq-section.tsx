"use client";

import { motion, useReducedMotion } from "motion/react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="faq">
      <Container size="md">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers. If you don't see what you're looking for, reach out to our team."
        />

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-xl border border-secondary-200 overflow-hidden data-[state=open]:ring-2 data-[state=open]:ring-primary-500 data-[state=open]:border-primary-500 transition-all"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-50 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HelpCircle className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="font-semibold text-secondary-900 pr-4">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-secondary-400 flex-shrink-0 transition-transform duration-200",
                        "group-data-[state=open]:rotate-180"
                      )}
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                  <div className="px-5 pb-5 pl-17">
                    <div className="pl-12 text-secondary-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-secondary-50 rounded-2xl"
        >
          <p className="text-secondary-700 mb-2">Still have questions?</p>
          <p className="text-primary-600 font-semibold">
            Email us at hello@sectoragents.ai
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
