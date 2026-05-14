"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((value) => !value)}
      aria-label="Toggle theme"
      className="flex h-10 items-center gap-2 rounded-full border border-[#e8dde9]/80 bg-[#f8f5f9]/70 px-4 text-sm font-medium text-[#2d2235] backdrop-blur-md transition hover:border-[#5b2a86] hover:bg-[#f2e8f8]/80 dark:border-[#4a3957] dark:bg-[#241b2c]/80 dark:text-[#e9dff0] dark:hover:border-[#d8b4fe] dark:hover:bg-[#c084fc]/10"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
