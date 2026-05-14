import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import { FadeIn } from "@/shared/components/ui/FadeIn";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden py-0" id="home">
      <div className="pointer-events-none absolute right-10 top-20 -z-10 h-64 w-64 rounded-full bg-[#5b2a86]/10 blur-3xl dark:bg-[#c084fc]/12" />

      <Container className="grid items-center gap-12 py-8 md:py-16 md:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-[#6b5a74] dark:text-[#cbb8d9]">
              Software Engineer II · React · TypeScript
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-[#17131c] dark:text-white md:text-6xl">
              Hi, I’m Jaya.
              <br />I build performant{" "}
              <span className="text-[#5b2a86] dark:text-[#d8b4fe]">
                frontend applications
              </span>{" "}
              at scale.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a4e63] dark:text-[#d6c9df]">
              I’m a software engineer with 8 years of experience building
              scalable React and TypeScript applications, frontend platforms,
              testing infrastructure, and product-focused user experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="#projects">View Work</ButtonLink>
              <ButtonLink
                href={siteConfig.links.resume}
                variant="secondary"
                download
              >
                Download Resume
              </ButtonLink>
              <ButtonLink
                href={siteConfig.links.linkedin}
                variant="secondary"
                external
              >
                LinkedIn
              </ButtonLink>

              <ButtonLink
                href={siteConfig.links.github}
                variant="secondary"
                external
              >
                GitHub
              </ButtonLink>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-4xl bg-[#eadcf4] rotate-6 dark:bg-[#3b2d47]" />

            <div className="relative h-full w-full overflow-hidden rounded-4xl border border-[#e8dde9] bg-white shadow-xl dark:border-[#3b2d47] dark:bg-[#241b2c]">
              <Image
                src="/jaya_avatar.jpeg"
                alt="Jaya Aishwarya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
