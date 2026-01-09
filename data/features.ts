import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "intelligent-agents",
    icon: "Brain",
    title: "Intelligent Agents",
    description:
      "Multi-step reasoning and context-aware decisions. AI agents that understand your business processes and adapt to changing conditions.",
  },
  {
    id: "deep-integrations",
    icon: "Plug",
    title: "Deep Integrations",
    description:
      "SAP, Oracle, Dynamics, NetSuite, and 50+ systems. One platform connects everything with real-time API connectivity.",
  },
  {
    id: "explainable-ai",
    icon: "Lightbulb",
    title: "Explainable AI",
    description:
      "Full transparency on every decision. See the reasoning, understand the confidence, and trust the outcomes.",
  },
  {
    id: "human-control",
    icon: "Users",
    title: "Human Control",
    description:
      "Configurable approval gates ensure critical decisions stay human-led. AI proposes, humans decide when it matters.",
  },
  {
    id: "enterprise-security",
    icon: "Shield",
    title: "Enterprise Security",
    description:
      "SOC2, HIPAA, GDPR compliant. Multi-tenant isolation, end-to-end encryption, and complete audit trails.",
  },
  {
    id: "flexible-deployment",
    icon: "Cloud",
    title: "Flexible Deployment",
    description:
      "Managed services or self-hosted. Deploy on Azure or GCP based on your data sovereignty needs. No lock-in.",
  },
];

export const workflowSteps = [
  {
    id: "trigger",
    number: 1,
    title: "Trigger",
    description: "Event, schedule, or manual activation starts the workflow",
  },
  {
    id: "ai-decision",
    number: 2,
    title: "AI Agent Decision",
    description: "Context analysis, multi-step reasoning, and action planning",
  },
  {
    id: "system-action",
    number: 3,
    title: "System Action",
    description: "ERP, database, and API integrations execute automatically",
  },
  {
    id: "human-oversight",
    number: 4,
    title: "Human Oversight",
    description: "Configurable approval gates for critical decisions",
  },
  {
    id: "completion",
    number: 5,
    title: "Completion",
    description: "Audit logging, notifications, and workflow finalization",
  },
];
