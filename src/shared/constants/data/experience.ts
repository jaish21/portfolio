import type { Experience } from "@/shared/types/data";
export const experiences: Experience[] = [
  {
    company: "Rippling",
    role: "Software Engineer II",
    location: "Bengaluru, India",
    period: "September 2024 – November 2025",
    description:
      "Led frontend architecture and development across Global Payroll, Identity Management, Devices, Apps, and Automation product domains.",
    highlights: [
      "Led architecture and development of the Global Payroll Withholdings Platform supporting onboarding for 41+ countries.",
      "Served as frontend technical lead, driving scalable React patterns, frontend standards, and reusable component systems.",
      "Established scalable Playwright-based testing infrastructure to improve reliability, observability, and release confidence.",
      "Optimized application performance through frontend profiling, route-level optimizations, and backend integration analysis.",
    ],
  },
  {
    company: "Rippling",
    role: "Software Engineer – UI",
    location: "Bengaluru, India",
    period: "December 2020 – April 2023",
    description:
      "Built scalable customer-facing frontend systems using React and TypeScript across multiple Rippling product areas.",
    highlights: [
      "Led migration of Identity Management modules from JavaScript to TypeScript.",
      "Refactored legacy apps into modern functional React architectures using hooks and reusable components.",
      "Improved frontend performance using route-based code splitting and optimization techniques.",
      "Built testing coverage using Jest and React Testing Library.",
    ],
  },
  {
    company: "Rippling",
    role: "Software Development Engineer in Test",
    location: "Bengaluru, India",
    period: "June 2018 – December 2020",
    description:
      "Built scalable automation frameworks and improved CI/CD quality pipelines for engineering teams.",
    highlights: [
      "Built WebdriverIO frameworks for end-to-end, integration, and regression testing.",
      "Improved automation scalability through reusable tooling and modular architecture.",
      "Dockerized browser extension testing workflows for environment consistency.",
    ],
  },
  {
    company: "Aurigo Software Technologies",
    role: "Automation QA Engineer",
    location: "Bengaluru, India",
    period: "August 2016 – June 2018",
    description:
      "Developed Selenium WebDriver automation frameworks for enterprise infrastructure and construction management platforms.",
    highlights: [
      "Built reusable automation utilities using C# and object-oriented programming.",
      "Improved regression testing efficiency through modular automation workflows.",
    ],
  },
];
