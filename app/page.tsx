import { HeroSection } from "@/components/sections/hero-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { ROICalculatorSection } from "@/components/sections/roi-calculator-section";
import { SecuritySection } from "@/components/sections/security-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GettingStartedSection } from "@/components/sections/getting-started-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTAFooterSection } from "@/components/sections/cta-footer-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <UseCasesSection />
      <ROICalculatorSection />
      <SecuritySection />
      <TestimonialsSection />
      <GettingStartedSection />
      <FAQSection />
      <CTAFooterSection />
    </>
  );
}
