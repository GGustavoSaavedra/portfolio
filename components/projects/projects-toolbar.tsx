"use client";

import { SlidersHorizontal } from "lucide-react";

type Props = {
  resultsCount: number;
  onOpenFilters: () => void;
};

export function ProjectsToolbar({ resultsCount, onOpenFilters }: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Proyectos
        </span>
        <span className="text-xs text-slate-600 dark:text-slate-300">
          {resultsCount} resultado{resultsCount === 1 ? "" : "s"}
        </span>
      </div>

      <button
        type="button"
        onClick={onOpenFilters}
        className="
          inline-flex items-center gap-2 rounded-full border
          border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800
          shadow-sm transition
          hover:-translate-y-0.5 hover:border-secondary/60
          focus:outline-none focus:ring-2 focus:ring-secondary/40
          dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
          dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40
        "
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filtros
      </button>
    </div>
  );
}
