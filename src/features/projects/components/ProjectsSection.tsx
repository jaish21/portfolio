import { projects } from "@/shared/constants/data/projects";
import { Section } from "@/shared/components/layout/Section";
import { Card } from "@/shared/components/ui/Card";
import { Badge } from "@/shared/components/ui/Badge";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import codingAnimation from "@/shared/assets/lottie/coding.json";
import { LottieAnimation } from "@/shared/components/ui/LottieAnimation";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <FadeIn>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            description="Large-scale product engineering, frontend platform work, and personal product building."
          />

          <div className="hidden md:block opacity-70">
            <LottieAnimation
              animationData={codingAnimation}
              className="h-32 w-32"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <FadeIn key={project.title}>
              <Card key={project.title}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-[#17131c] dark:text-white">
                    {project.title}
                  </h3>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-[#6b5a74] transition hover:text-[#5b2a86] dark:text-[#cbb8d9] dark:hover:text-[#d8b4fe]"
                    >
                      Visit →
                    </a>
                  )}
                </div>

                <p className="mt-4 text-[#5a4e63] dark:text-[#d6c9df] ">
                  {project.description}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-[#2d2235] dark:text-[#f5f3f7] ">
                      Problem
                    </p>
                    <p className="mt-1 text-sm text-[#5a4e63] dark:text-[#d6c9df] ">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#2d2235] dark:text-[#f5f3f7] ">
                      Ownership
                    </p>
                    <p className="mt-1 text-sm text-[#5a4e63] dark:text-[#d6c9df]">
                      {project.ownership}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#2d2235] dark:text-[#f5f3f7]">
                      Impact
                    </p>
                    <p className="mt-1 text-sm text-[#5a4e63] dark:text-[#d6c9df]">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
