import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Do I need to code or customize workflows?",
    answer:
      "No coding required. Our workflows are pre-built by domain experts and deployed without any code changes. You configure business rules through a simple interface, but the underlying automation is ready to go out of the box.",
  },
  {
    id: "2",
    question: "How long does implementation take?",
    answer:
      "Typically 2-4 weeks from trial to production. This includes workflow configuration, system integrations, testing, and training. Simple use cases can go live even faster. Our team handles the heavy lifting.",
  },
  {
    id: "3",
    question: "What happens if the AI makes a mistake?",
    answer:
      "Every AI decision is explainable—you can see the reasoning, evidence, and confidence score. For high-stakes decisions, configurable Human-in-the-Loop (HITL) approval gates ensure humans stay in control. The AI proposes, you decide.",
  },
  {
    id: "4",
    question: "Can I use this with my legacy ERP system?",
    answer:
      "Yes. We have pre-built connectors for 50+ systems including SAP, Oracle, Microsoft Dynamics, NetSuite, and more. For custom or legacy systems, we offer adapter development and API integration support.",
  },
  {
    id: "5",
    question: "How does this handle compliance requirements?",
    answer:
      "We're SOC2 Type II, HIPAA, and GDPR certified. Every action is logged with immutable audit trails. Compliance reports can be generated automatically, and data residency options let you choose where your data lives (US, EU, or APAC).",
  },
  {
    id: "6",
    question: "What if I need to migrate to self-hosted later?",
    answer:
      "Our cloud-agnostic architecture fully supports migration from managed services to self-hosted deployment. Your workflows, configurations, and data can be migrated with our support. No vendor lock-in.",
  },
  {
    id: "7",
    question: "What support is included?",
    answer:
      "We provide email and chat support with business hours coverage. Premium support with 24/7 response is also available. Enterprise customers can add dedicated success managers and priority support packages.",
  },
  {
    id: "8",
    question: "How secure is my data?",
    answer:
      "Your data is protected with enterprise-grade security: TLS 1.3 encryption in transit, AES-256 at rest, multi-tenant isolation, and complete audit trails. We offer data residency options across US, EU, and APAC regions.",
  },
];
