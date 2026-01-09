export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface UseCase {
  id: string;
  industry: "manufacturing" | "retail";
  title: string;
  description: string;
  benefits: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface PainPoint {
  id: string;
  industry: "manufacturing" | "retail";
  pain: {
    title: string;
    description: string;
    icon: string;
  };
  solution: {
    title: string;
    description: string;
    feature: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  industry: "manufacturing" | "retail";
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
