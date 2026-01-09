"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next, prefersReducedMotion]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <SectionWrapper id="testimonials" background="gradient">
      <Container>
        <SectionHeading
          title="Trusted by Industry Leaders"
          subtitle="See what operations teams are saying about SectorAgents."
        />

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="p-8 lg:p-12 relative overflow-hidden" variant="elevated">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-600" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="text-xl lg:text-2xl text-secondary-800 leading-relaxed mb-8">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-14 h-14 rounded-full bg-secondary-200 flex items-center justify-center">
                      <User className="w-7 h-7 text-secondary-400" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900">
                        {currentTestimonial.author}
                      </p>
                      <p className="text-secondary-600">
                        {currentTestimonial.title}
                      </p>
                      <p className="text-secondary-500 text-sm">
                        {currentTestimonial.company}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="ml-auto hidden sm:inline-flex capitalize"
                    >
                      {currentTestimonial.industry}
                    </Badge>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-secondary-100">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-secondary-200 flex items-center justify-center text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-secondary-200 flex items-center justify-center text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary-600 w-6"
                        : "bg-secondary-300 hover:bg-secondary-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </SectionWrapper>
  );
}
