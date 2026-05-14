import { Section } from "@/shared/components/layout/Section";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";

export function AboutSection() {
  return (
    <Section id="about">
      <FadeIn>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="About"
            title="Software engineer focused on scalable product experiences."
          />

          <div className="space-y-5 text-[#5a4e63] dark:text-[#d6c9df]">
            <p>
              I have 8 years of experience building customer-facing web
              applications, frontend platforms, and developer tooling across
              SaaS and product engineering environments.
            </p>

            <p>
              My work focuses on React, TypeScript, frontend architecture,
              design systems, state management, performance optimization, and
              testing infrastructure.
            </p>

            <p>
              At Rippling, I worked across workflow-heavy operational platforms
              including Identity Management, Global Payroll, Devices, and
              Automation systems.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
