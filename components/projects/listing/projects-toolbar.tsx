"use client";

import { SlidersHorizontal } from "lucide-react";

export type ProjectsOrder = "recent" | "oldest" | "az" | "za";

type Props = {
  resultsCount: number;
  order: ProjectsOrder;
  onChangeOrder: (order: ProjectsOrder) => void;

  // 👇 Solo mobile
  showFiltersButton?: boolean;
  activeFiltersCount?: number;
  onOpenFilters?: () => void;
};

export function ProjectsToolbar({
  resultsCount,
  order,
  onChangeOrder,
  showFiltersButton = false,
  activeFiltersCount = 0,
  onOpenFilters,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3 shadow-sm ring-1 ring-secondary/10 dark:border-slate-800/60 dark:bg-slate-900/40 dark:ring-tertiary/10">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Proyectos
        </span>
        <span className="text-xs text-slate-600 dark:text-slate-300">
          {resultsCount} resultado{resultsCount === 1 ? "" : "s"}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <label className="sr-only" htmlFor="projects-order">
          Orden
        </label>
        <select
          id="projects-order"
          value={order}
          onChange={(e) => onChangeOrder(e.target.value as ProjectsOrder)}
          className="
            h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800
            shadow-sm outline-none transition
            focus:ring-2 focus:ring-secondary/40
            dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
            dark:focus:ring-tertiary/40
          "
        >
          <option value="recent">Más reciente</option>
          <option value="oldest">Más antiguo</option>
          <option value="az">Nombre (A–Z)</option>
          <option value="za">Nombre (Z–A)</option>
        </select>

        {showFiltersButton && (
          <button
            type="button"
            onClick={onOpenFilters}
            className="
              relative inline-flex h-10 items-center gap-2 rounded-xl border
              border-slate-200 bg-white px-4 text-sm font-medium text-slate-800
              shadow-sm transition
              hover:-translate-y-0.5 hover:border-secondary/60
              focus:outline-none focus:ring-2 focus:ring-secondary/40
              dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
              dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40
            "
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
            {activeFiltersCount > 0 && (
              <span
                className="
                  absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center
                  rounded-full bg-secondary px-1 text-[11px] font-semibold text-white
                  dark:bg-tertiary dark:text-slate-900
                "
                aria-label={`${activeFiltersCount} filtros activos`}
              >
                {activeFiltersCount}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
