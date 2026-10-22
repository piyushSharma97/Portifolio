"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme !== "light";
  const label = isDark ? labels.light : labels.dark;

  return (
    <button
      aria-label={label}
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      {mounted ? (
        isDark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />
      ) : (
        <span className="toggle-placeholder" />
      )}
    </button>
  );
}
