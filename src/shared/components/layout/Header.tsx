"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "@/shared/constants/navigation";
import { siteConfig } from "@/config/site.config";
import { ThemeToggle } from "@/shared/components/layout/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "rounded-sm text-sm text-[#5a4e63] transition hover:text-[#5b2a86] focus:outline-none focus:ring-2 focus:ring-[#5b2a86] focus:ring-offset-4 focus:ring-offset-[#f8f5f9] dark:text-[#d6c9df] dark:hover:text-[#d8b4fe] dark:focus:ring-[#d8b4fe] dark:focus:ring-offset-[#1a1420]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dde9]/80 bg-[#f4e1fa]/40 shadow-[0_8px_30px_rgba(91,42,134,0.08)] backdrop-blur-xl dark:border-[#3b2d47]/80 dark:bg-[#1a1420]/60 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-[#17131c] transition hover:text-[#5b2a86] dark:text-white dark:hover:text-[#d8b4fe]"
        >
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#d8cbe0] bg-white shadow-sm dark:border-[#4a3957] dark:bg-[#241b2c]">
            <Image
              src="/ja_initials.png"
              alt="JA"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8dde9]/80 bg-[#f8f5f9]/70 backdrop-blur-md transition hover:border-[#5b2a86] dark:border-[#4a3957] dark:bg-[#241b2c]/80 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-[#e8dde9]/80 bg-[#f8f5f9]/90 px-6 py-4 backdrop-blur-xl dark:border-[#3b2d47]/80 dark:bg-[#1a1420]/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#5a4e63] transition-colors duration-200 hover:bg-[#f2e8f8] hover:text-[#5b2a86] active:bg-[#eadcf4] dark:text-[#d6c9df] dark:hover:bg-[#2a2131] dark:hover:text-[#d8b4fe] dark:active:bg-[#35293f]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
