import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Software Engineer ||`,
  description:
    "Software engineer specializing in React, TypeScript, frontend architecture, performance optimization, and scalable product engineering.",
  keywords: [
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Frontend Architecture",
    "Product Engineering",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | Software Engineer ||`,
    description:
      "Software engineer specializing in React, TypeScript, frontend architecture, performance optimization, and scalable product engineering.",
    url: "https://YOUR_DOMAIN.com",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/ja_initials.png",
        width: 1200,
        height: 630,
        alt: "Jaya Aishwarya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Engineer ||`,
    description:
      "Software engineer specializing in React, TypeScript, scalable product engineering, and frontend architecture.",
    images: [
      {
        url: "/ja_initials.png",
        width: 1200,
        height: 630,
        alt: "Jaya Aishwarya Portfolio",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
