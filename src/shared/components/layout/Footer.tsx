import { siteConfig } from "@/config/site.config";
import { Container } from "@/shared/components/layout/Container";

const footerLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Resume", href: siteConfig.links.resume },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e8dde9] py-8 dark:border-[#3b2d47]">
      <Container className="flex flex-col gap-4 text-sm text-[#6b5a74] dark:text-[#cbb8d9] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition hover:text-[#5b2a86] dark:hover:text-[#d8b4fe]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
