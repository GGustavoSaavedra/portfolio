"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = useMemo(() => {
    if (!mounted) return "light";
    return theme === "system" ? systemTheme : theme;
  }, [mounted, theme, systemTheme]);

  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    const apply = () => {
      flushSync(() => setTheme(nextTheme));
    };

    if (
      typeof document === "undefined" ||
      typeof (document as any).startViewTransition !== "function"
    ) {
      apply();
      return;
    }

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduceMotion) {
      apply();
      return;
    }

    (document as any).startViewTransition(() => {
      apply();
    });
  };

  // Skeleton (evita mismatch)
  if (!mounted) {
    return (
      <button
        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm
                   dark:border-slate-700 dark:bg-slate-900"
        aria-label="Cambiar tema"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={isDark ? "Tema claro" : "Tema oscuro"}
      className="
        group relative inline-flex h-10 w-10 items-center justify-center rounded-full
        border border-slate-300 bg-white text-slate-700 shadow-sm
        transition-all duration-200
        hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md
        active:translate-y-0 active:scale-[0.97] active:shadow-sm
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white

        dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100
        dark:hover:border-slate-500 dark:hover:bg-slate-800/60
        dark:focus-visible:ring-tertiary/35 dark:focus-visible:ring-offset-slate-950
      "
    >
      {/* Halo sutil en hover (no invade, pero suma “peso”) */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-200
          group-hover:opacity-100
          bg-secondary/10 dark:bg-tertiary/10
        "
      />

      {/* Iconos cross-fade + micro rotación para feedback */}
      <span className="relative grid place-items-center">
        <Sun
          className={[
            "h-[18px] w-[18px] transition-all duration-200",
            isDark
              ? "rotate-0 scale-100 opacity-100 text-tertiary"
              : "-rotate-90 scale-75 opacity-0",
          ].join(" ")}
        />
        <Moon
          className={[
            "absolute h-[18px] w-[18px] transition-all duration-200",
            !isDark
              ? "rotate-0 scale-100 opacity-100 text-secondary"
              : "rotate-90 scale-75 opacity-0",
          ].join(" ")}
        />
      </span>
    </button>
  );
}
