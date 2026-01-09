import type { PainPoint } from "@/types";

export const painPoints: PainPoint[] = [
  // Manufacturing Pain Points
  {
    id: "mfg-orders",
    industry: "manufacturing",
    pain: {
      title: "Manual order processing causing delays and errors",
      description:
        "Teams spend hours validating orders, checking inventory, and routing approvals manually. Errors lead to costly corrections and customer dissatisfaction.",
      icon: "FileWarning",
    },
    solution: {
      title: "AI-powered order validation with automated approvals",
      description:
        "AI agents validate orders in seconds, check inventory in real-time, and route to approval gates automatically. Human oversight only when needed.",
      feature: "Order-to-Cash Automation",
    },
  },
  {
    id: "mfg-visibility",
    industry: "manufacturing",
    pain: {
      title: "Supply chain visibility gaps",
      description:
        "Disconnected systems create blind spots. Teams can't see real-time inventory, pending orders, or potential stockouts until it's too late.",
      icon: "Eye",
    },
    solution: {
      title: "Real-time connector integration with ERPs",
      description:
        "Deep integrations with SAP, Oracle, Dynamics, and 50+ systems provide live inventory tracking, demand signals, and proactive alerts.",
      feature: "Deep Business System Integration",
    },
  },
  {
    id: "mfg-compliance",
    industry: "manufacturing",
    pain: {
      title: "High operational overhead in compliance and auditing",
      description:
        "Manual audit trails, scattered documentation, and time-consuming compliance reporting drain resources and increase risk.",
      icon: "ClipboardCheck",
    },
    solution: {
      title: "Immutable audit logs and automated compliance",
      description:
        "Every AI decision is logged with reasoning and evidence. SOC2, HIPAA, and GDPR compliance built-in. Audit reports generated automatically.",
      feature: "Explainable AI & Human Oversight",
    },
  },
  // Retail Pain Points
  {
    id: "retail-fulfillment",
    industry: "retail",
    pain: {
      title: "Slow order fulfillment affecting customer satisfaction",
      description:
        "Manual order routing, inventory allocation, and shipping coordination create bottlenecks. Customers wait, satisfaction drops.",
      icon: "Package",
    },
    solution: {
      title: "Instant order processing with automated allocation",
      description:
        "AI agents process orders instantly, allocate from optimal locations, and coordinate shipping. 50-70% faster fulfillment cycles.",
      feature: "Order Fulfillment Automation",
    },
  },
  {
    id: "retail-inventory",
    industry: "retail",
    pain: {
      title: "Inventory mismatches across locations",
      description:
        "Disconnected inventory systems lead to overselling, stockouts, and lost sales. Reconciliation takes hours of manual work.",
      icon: "BarChart3",
    },
    solution: {
      title: "Real-time synchronization and demand forecasting",
      description:
        "AI-powered inventory sync across all channels. Predictive demand forecasting prevents stockouts and overstock situations.",
      feature: "Inventory Optimization",
    },
  },
  {
    id: "retail-service",
    industry: "retail",
    pain: {
      title: "Inconsistent customer service SLAs",
      description:
        "Support tickets pile up. Response times vary wildly. Escalations are missed. Customer experience suffers.",
      icon: "Headphones",
    },
    solution: {
      title: "Automated request routing and escalation",
      description:
        "AI agents handle first-line responses, route complex issues to the right team, and ensure SLAs are met with automated escalation.",
      feature: "Customer Service Automation",
    },
  },
];
