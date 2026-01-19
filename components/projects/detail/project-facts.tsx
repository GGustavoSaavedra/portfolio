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
  const hasWebsite = websiteUrl && websiteUrl !== "#";
  const hasRepo = repoUrl && repoUrl !== "#";

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
        {hasWebsite && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex w-full items-center justify-center rounded-xl
              bg-secondary px-4 py-2 text-sm font-medium text-white
              shadow-sm transition
              hover:-translate-y-0.5 hover:bg-secondary/90
              focus:outline-none focus:ring-2 focus:ring-secondary/40
              dark:bg-tertiary dark:text-slate-900
              dark:hover:bg-tertiary/90 dark:focus:ring-tertiary/40
            "
          >
            Visitar página
          </a>
        )}

        {hasRepo && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex w-full items-center justify-center rounded-xl
              border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800
              shadow-sm transition
              hover:border-secondary/60
              focus:outline-none focus:ring-2 focus:ring-secondary/40
              dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
              dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40
            "
          >
            Ir a GitHub
          </a>
        )}

        {!hasWebsite && !hasRepo && (
          <div className="rounded-xl border border-dashed border-slate-300/70 bg-slate-100/60 px-4 py-3 text-center text-sm font-medium text-slate-600 dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-300">
            Proyecto en construcción · Links disponibles próximamente
          </div>
        )}
      </div>
    </aside>
  );
}
