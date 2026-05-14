import { AboutSection } from "@/features/about/components/AboutSection";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { Container } from "@/shared/components/layout/Container";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Container>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Container>
    </main>
  );
}
