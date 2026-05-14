import { siteConfig } from "@/config/site.config";
import { Section } from "@/shared/components/layout/Section";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { ButtonLink } from "@/shared/components/ui/ButtonLink";
import contactAnimation from "@/shared/assets/lottie/message.json";
import { LottieAnimation } from "@/shared/components/ui/LottieAnimation";

export function ContactSection() {
  return (
    <Section id="contact">
      <FadeIn>
        <div className="rounded-3xl border border-[#e8dde9] bg-white/80 px-6 py-12 text-[#17131c] shadow-sm dark:border-[#3b2d47] dark:bg-[#241b2c] md:px-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-medium text-[#5b2a86] dark:text-[#d8b4fe]">
                Contact
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold text-[#17131c] dark:text-white">
                Let’s build scalable, polished frontend products.
              </h2>

              <p className="mt-4 max-w-2xl text-[#5a4e63] dark:text-[#d6c9df]">
                I’m open to senior frontend and product engineering roles
                focused on React, TypeScript, frontend architecture,
                performance, and user experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={`mailto:${siteConfig.email}`}>
                  Email Me
                </ButtonLink>

                <ButtonLink
                  href={siteConfig.links.linkedin}
                  variant="secondary"
                  external
                >
                  LinkedIn
                </ButtonLink>
              </div>
            </div>

            <div className="hidden justify-center md:flex">
              <LottieAnimation
                animationData={contactAnimation}
                className="h-40 w-40 opacity-80"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
