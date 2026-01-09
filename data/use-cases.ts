import type { UseCase } from "@/types";

export const useCases: UseCase[] = [
  // Manufacturing Use Cases
  {
    id: "order-to-cash",
    industry: "manufacturing",
    title: "Order-to-Cash Automation",
    description:
      "Validate orders, check inventory, assess risk, and route to approval—all automatically. Reduce order processing time by 60% while maintaining accuracy.",
    benefits: [
      "Automatic order validation against inventory",
      "AI-powered credit risk assessment",
      "Configurable approval routing",
      "Real-time ERP synchronization",
    ],
    metrics: [
      { label: "Processing time reduction", value: "60%" },
      { label: "Error rate reduction", value: "95%" },
    ],
  },
  {
    id: "procurement",
    industry: "manufacturing",
    title: "Procurement Workflow",
    description:
      "Match POs to invoices, flag discrepancies, and approve payments automatically. Three-way matching in seconds, not hours.",
    benefits: [
      "Automated PO-invoice-receipt matching",
      "Discrepancy detection and flagging",
      "Supplier performance tracking",
      "Payment approval automation",
    ],
    metrics: [
      { label: "Time savings", value: "75%" },
      { label: "Cost per invoice", value: "-80%" },
    ],
  },
  {
    id: "production-planning",
    industry: "manufacturing",
    title: "Production Planning",
    description:
      "Optimize production schedules based on inventory levels, demand forecasts, and resource availability. AI-driven planning that adapts in real-time.",
    benefits: [
      "Demand-driven scheduling",
      "Resource optimization",
      "Capacity planning automation",
      "Real-time adjustment to changes",
    ],
    metrics: [
      { label: "Schedule optimization", value: "40%" },
      { label: "Inventory reduction", value: "25%" },
    ],
  },
  {
    id: "quality-assurance",
    industry: "manufacturing",
    title: "Quality Assurance",
    description:
      "Autonomous defect detection and corrective action workflows. Identify issues early, route to the right team, and track resolution.",
    benefits: [
      "Automated defect detection triggers",
      "Corrective action routing",
      "Root cause analysis support",
      "Quality metric tracking",
    ],
    metrics: [
      { label: "Detection speed", value: "10x" },
      { label: "Resolution time", value: "-50%" },
    ],
  },
  // Retail Use Cases
  {
    id: "inventory-optimization",
    industry: "retail",
    title: "Inventory Optimization",
    description:
      "Real-time stock movement tracking, automatic reordering, and AI-powered demand forecasting across all channels and locations.",
    benefits: [
      "Cross-channel inventory visibility",
      "Automatic reorder point triggers",
      "Demand forecasting by location",
      "Stockout prevention alerts",
    ],
    metrics: [
      { label: "Stockout reduction", value: "70%" },
      { label: "Inventory carrying cost", value: "-30%" },
    ],
  },
  {
    id: "order-fulfillment",
    industry: "retail",
    title: "Order Fulfillment",
    description:
      "Instant order routing to optimal fulfillment locations, automated allocation, and shipping coordination. Get orders out faster.",
    benefits: [
      "Intelligent fulfillment routing",
      "Automated inventory allocation",
      "Carrier selection optimization",
      "Real-time tracking updates",
    ],
    metrics: [
      { label: "Fulfillment speed", value: "50%" },
      { label: "Shipping cost savings", value: "20%" },
    ],
  },
  {
    id: "return-management",
    industry: "retail",
    title: "Return Management",
    description:
      "Automated returns processing with fraud detection, condition assessment routing, and inventory restocking workflows.",
    benefits: [
      "Automated return authorization",
      "Fraud pattern detection",
      "Condition-based routing",
      "Inventory restock automation",
    ],
    metrics: [
      { label: "Processing time", value: "-65%" },
      { label: "Fraud detection", value: "+40%" },
    ],
  },
  {
    id: "customer-service",
    industry: "retail",
    title: "Customer Service Automation",
    description:
      "Intelligent ticket routing, first-response automation, and escalation management. Meet SLAs consistently while reducing support costs.",
    benefits: [
      "AI-powered ticket triage",
      "Automated first responses",
      "Smart escalation routing",
      "SLA monitoring and alerts",
    ],
    metrics: [
      { label: "First response time", value: "-70%" },
      { label: "Resolution rate", value: "+35%" },
    ],
  },
];
