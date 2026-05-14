import type { Project } from "@/shared/types/data";

export const projects: Project[] = [
  {
    title: "Global Payroll Withholdings Platform",
    description:
      "Configurable self-service payroll platform supporting complex operational workflows across multiple countries.",
    problem:
      "Existing payroll workflows were hardcoded, making onboarding and maintenance difficult as scale increased.",
    ownership:
      "Led frontend architecture and implementation, designing scalable React patterns, state management, and reusable workflow UI systems.",
    impact:
      "Enabled onboarding for 41+ countries with a much more scalable product foundation.",
    techStack: [
      "React",
      "TypeScript",
      "State Management",
      "Frontend Architecture",
    ],
  },
  {
    title: "Frontend Testing Platform",
    description:
      "Shared testing infrastructure for frontend reliability and release confidence across product teams.",
    problem:
      "Frontend testing workflows lacked consistency, making releases slower and less predictable.",
    ownership:
      "Architected scalable Playwright-based testing infrastructure and established frontend testing standards.",
    impact:
      "Improved engineering velocity, release confidence, and shared testing reliability across teams.",
    techStack: ["Playwright", "Jest", "React Testing Library", "CI/CD"],
  },
  {
    title: "Identity Management Modernization",
    description:
      "Modernization of legacy frontend systems into scalable React + TypeScript architecture.",
    problem:
      "Legacy JavaScript modules were harder to maintain, extend, and scale.",
    ownership:
      "Led migration to TypeScript, modern React patterns, reusable components, and performance improvements.",
    impact:
      "Improved maintainability, type safety, and application performance.",
    techStack: ["React", "TypeScript", "Redux", "Performance Optimization"],
  },
  {
    title: "Bloom AI",
    description:
      "Personal AI-powered notes and productivity application focused on clean writing and AI-assisted workflows.",
    problem:
      "Most productivity tools feel cluttered and AI integrations often feel bolted on.",
    ownership:
      "Designed and built the product end-to-end with focus on scalable frontend architecture and user experience.",
    impact:
      "Demonstrates product thinking, frontend craftsmanship, and modern AI product implementation.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI"],
    link: "https://bloom-ai-rho.vercel.app/",
  },
];
