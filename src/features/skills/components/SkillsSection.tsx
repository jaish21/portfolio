import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { skillGroups } from "@/shared/constants/data/skills";
import { Badge } from "@/shared/components/ui/Badge";
import { Card } from "@/shared/components/ui/Card";
import { Section } from "@/shared/components/layout/Section";
import { FadeIn } from "@/shared/components/ui/FadeIn";

export function SkillsSection() {
  return (
    <Section id="skills">
      <FadeIn>
        <SectionHeader eyebrow="Skills" title="Technologies and strengths" />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <FadeIn key={group.title}>
              <Card key={group.title}>
                <h3 className="text-lg font-semibold text-[#17131c] dark:text-white dark:text-white">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
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
