export interface MetricData {
  id: string;
  label: string;
  value: string;
  delta: string;
  isPositive: boolean;
  history: number[]; // Sparkline data points
}

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
}

export interface MethodStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ProcessMovement {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormInput {
  name: string;
  phone: string;
  company: string;
  message: string;
}
