export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  highlights?: string[];
};
