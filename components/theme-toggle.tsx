"use client";

import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";

const THEME_STORAGE_KEY = "theme";

function resolveInitialTheme(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const prefersDark = resolveInitialTheme();
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const handleCheckedChange = (checked: boolean) => {
    setIsDark(checked);
    const root = document.documentElement;
    root.classList.toggle("dark", checked);
    window.localStorage.setItem(THEME_STORAGE_KEY, checked ? "dark" : "light");
  };

  if (!isMounted) {
    return (
      <div
        className="h-6 w-11 animate-pulse rounded-full bg-muted"
        aria-hidden="true"
      />
    );
  }

  return (
    <Switch
      aria-label="Toggle dark mode"
      checked={isDark}
      onCheckedChange={handleCheckedChange}
    />
  );
}
