export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  problem: string;
  ownership: string;
  impact: string;
  link?: string;
  github?: string;
};
export type SkillGroup = {
  title: string;
  skills: string[];
};
