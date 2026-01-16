"use client";

import type { Project } from "@/data/projects";

type Props = Pick<Project, "techStack" | "websiteUrl" | "repoUrl"> & {
  isUpcoming: boolean;
};

export function ProjectFacts({
  techStack,
  websiteUrl,
  repoUrl,
  isUpcoming,
}: Props) {
  return (
    <aside className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/30 sm:p-5">
      <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
        Tecnologías
      </h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200/70 bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        <a
          href={websiteUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={isUpcoming}
          className={[
            "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition",
            isUpcoming
              ? "pointer-events-none border border-slate-200 bg-white/40 text-slate-400 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-500"
              : "bg-secondary text-white hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary/40 dark:bg-tertiary dark:text-slate-900 dark:hover:bg-tertiary/90 dark:focus:ring-tertiary/40",
          ].join(" ")}
        >
          Visitar página
        </a>

        <a
          href={repoUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={isUpcoming}
          className={[
            "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition",
            isUpcoming
              ? "pointer-events-none border border-slate-200 bg-white/40 text-slate-400 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-500"
              : "border border-slate-200 bg-white text-slate-800 hover:border-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40",
          ].join(" ")}
        >
          Ir a GitHub
        </a>
      </div>
    </aside>
  );
}
