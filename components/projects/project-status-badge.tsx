"use client";

import { getProjectBadge } from "@/lib/project-status";
import type { Project } from "@/data/projects";

type Props = Pick<Project, "status" | "lifecycle" | "websiteUrl">;

export function ProjectStatusBadge(props: Props) {
  const badge = getProjectBadge(props);

  const base =
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium";

  const toneClass =
    badge.tone === "accent"
      ? "bg-secondary/10 text-secondary dark:bg-tertiary/20 dark:text-tertiary"
      : badge.tone === "wip"
        ? "bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700"
        : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400";

  return (
    <span className={`${base} ${toneClass}`}>
      {badge.showDot && (
        <span
          className={[
            "h-1.5 w-1.5 rounded-full bg-secondary dark:bg-tertiary",
            badge.pulseDot ? "animate-pulse opacity-70" : "",
          ].join(" ")}
        />
      )}
      {badge.label}
    </span>
  );
}
