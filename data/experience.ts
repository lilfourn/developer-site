export interface ExperienceMetrics {
  linesOfCode: string;
  pullRequests: number;
  deployments: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  cardTitle: string;
  period: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  description: string;
  highlights?: string[];
  techStack?: string[];
  metrics?: ExperienceMetrics;
}

export const experiences: Experience[] = [
  {
    id: "dimensional-2026",
    company: "Dimensional Fund Advisors",
    role: "Incoming Software Engineering Intern",
    location: "Austin, TX",
    cardTitle: "Summer 2026",
    period: "Jun 1, 2026 - Aug 1, 2026",
    logo: "/Dimensional_Fund_Advisors_Logo.svg.png",
    logoWidth: 3840,
    logoHeight: 1113,
    description: "Starting this summer in the Austin, TX office.",
  },
  {
    id: "asure-2025",
    company: "Asure Software",
    role: "Software Engineer Intern",
    location: "Austin, TX",
    cardTitle: "Summer 2025",
    period: "Jun 2025 - Aug 2025",
    logo: "/asure-loho.svg",
    logoWidth: 500,
    logoHeight: 500,
    description: "Built production AI systems for enterprise payroll & HR platform",
    highlights: [
      "Designed and built AI agent using Claude (Bedrock) for Canadian tax operations",
      "Architected end-to-end AWS infrastructure (Lambda, DynamoDB, API Gateway)",
      "Shipped customer-facing LLM feature serving thousands of users daily",
    ],
    techStack: [
      "Python",
      "AWS Lambda",
      "Bedrock (Claude)",
      "DynamoDB",
      "Jenkins",
      "API Gateway",
    ],
    metrics: {
      linesOfCode: "5,000+",
      pullRequests: 47,
      deployments: 34,
    },
  },
];
