import { Section } from "@/shared/components/layout/Section";
import { Card } from "@/shared/components/ui/Card";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { ListItem } from "@/shared/components/ui/ListItem";
import { experiences } from "@/shared/constants/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <FadeIn>
        <div className="mb-10">
          <p className="text-sm font-medium text-[#6b5a74] dark:text-[#cbb8d9]">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#17131c] dark:text-white ">
            Frontend engineering, platform ownership, and product delivery
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <Card key={`${experience.company}-${experience.role}`}>
              <FadeIn>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#17131c] dark:text-white ">
                      {experience.role}
                    </h3>

                    <p className="text-[#5a4e63] dark:text-[#d6c9df] ">
                      {experience.company} · {experience.location}
                    </p>
                  </div>

                  <p className="text-sm text-[#6b5a74] dark:text-[#cbb8d9]">
                    {experience.period}
                  </p>
                </div>

                <p className="mt-4 max-w-3xl text-[#5a4e63] dark:text-[#d6c9df] ">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <ListItem key={highlight}>{highlight}</ListItem>
                  ))}
                </ul>
              </FadeIn>
            </Card>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
