"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Server,
  Globe,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trustBadges = [
  { name: "SOC2 Type II", icon: Shield, certified: true },
  { name: "HIPAA", icon: FileCheck, certified: true },
  { name: "GDPR", icon: Globe, certified: true },
  { name: "FedRAMP", icon: Server, certified: false, label: "In Progress" },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "TLS 1.3 in transit, AES-256 at rest. Your data is protected at every stage.",
  },
  {
    icon: Server,
    title: "Multi-Tenant Isolation",
    description: "Complete tenant isolation with dedicated resources. No data mixing, ever.",
  },
  {
    icon: Eye,
    title: "Full Audit Trails",
    description: "Every action logged with immutable audit trails for complete accountability.",
  },
  {
    icon: Globe,
    title: "Data Residency",
    description: "Choose where your data lives: US, EU, or APAC regions available.",
  },
];

const authMethods = [
  "Azure Active Directory",
  "Google Workspace",
  "Custom OIDC",
  "SAML 2.0",
];

export function SecuritySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="security" background="dark">
      <Container>
        <SectionHeading
          title="Enterprise-Grade Security"
          subtitle="Built for the most demanding security and compliance requirements. Your data protection is our priority."
          dark
        />

        {/* Trust Badges */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.name}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl ${
                badge.certified
                  ? "bg-white/10 border border-white/20"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  badge.certified ? "bg-accent-500/20" : "bg-secondary-600/30"
                }`}
              >
                <badge.icon
                  className={`w-5 h-5 ${
                    badge.certified ? "text-accent-400" : "text-secondary-400"
                  }`}
                />
              </div>
              <div>
                <p className="font-semibold text-white">{badge.name}</p>
                {badge.label && (
                  <p className="text-xs text-secondary-400">{badge.label}</p>
                )}
              </div>
              {badge.certified && (
                <Check className="w-5 h-5 text-accent-400 ml-2" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-300">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Authentication Methods */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-secondary-400 mb-4">
            Enterprise authentication via OAuth 2.0:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {authMethods.map((method) => (
              <Badge
                key={method}
                variant="outline"
                className="border-white/20 text-white"
              >
                {method}
              </Badge>
            ))}
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
