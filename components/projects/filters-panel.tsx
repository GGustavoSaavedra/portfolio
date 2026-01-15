"use client";

import type {
  ProjectCategory,
  ProjectStatus,
  ProjectType,
} from "@/data/projects";

type FiltersState = {
  categories: ProjectCategory[];
  type: ProjectType | "all";
  status: ProjectStatus | "all";
  order: "recent" | "oldest" | "az" | "za";
};

type Props = {
  filters: FiltersState;
  onToggleCategory: (cat: ProjectCategory) => void;
  onChangeType: (type: ProjectType | "all") => void;
  onChangeStatus: (status: ProjectStatus | "all") => void;
  onClear: () => void;
};

const CATEGORY_LABELS: Record<Exclude<ProjectCategory, "mobile">, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Fullstack",
};

const TYPE_LABELS: Record<ProjectType, string> = {
  web: "Web",
  mobile: "Mobile",
  api: "API",
};

export function FiltersPanel({
  filters,
  onToggleCategory,
  onChangeType,
  onChangeStatus,
  onClear,
}: Props) {
  const categories: Exclude<ProjectCategory, "mobile">[] = [
    "frontend",
    "backend",
    "fullstack",
  ];
  const types: ProjectType[] = ["web", "mobile", "api"];

  const hasActive =
    filters.categories.length > 0 ||
    filters.type !== "all" ||
    filters.status !== "all";

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Filtros
        </h2>
      </div>

      <div className="space-y-5">
        {/* Categorías */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Categorías
          </p>
          <div className="space-y-2">
            {categories.map((cat) => {
              const checked = filters.categories.includes(cat);
              return (
                <label
                  key={cat}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm text-slate-800 transition hover:border-secondary/60 dark:border-slate-800/60 dark:bg-slate-950/50 dark:text-slate-100 dark:hover:border-tertiary/60"
                >
                  <span>{CATEGORY_LABELS[cat]}</span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleCategory(cat)}
                    className="h-4 w-4 accent-secondary dark:accent-tertiary"
                  />
                </label>
              );
            })}
          </div>
        </div>

        {/* Tipo */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Tipo
          </p>
          <select
            value={filters.type}
            onChange={(e) =>
              onChangeType(e.target.value as ProjectType | "all")
            }
            className="
              h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800
              shadow-sm outline-none transition
              focus:ring-2 focus:ring-secondary/40
              dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
              dark:focus:ring-tertiary/40
            "
          >
            <option value="all">Todos</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {TYPE_LABELS[t]}
              </option>
            ))}
          </select>
        </div>

        {/* Estado */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Estado
          </p>
          <select
            value={filters.status}
            onChange={(e) =>
              onChangeStatus(e.target.value as ProjectStatus | "all")
            }
            className="
              h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800
              shadow-sm outline-none transition
              focus:ring-2 focus:ring-secondary/40
              dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
              dark:focus:ring-tertiary/40
            "
          >
            <option value="all">Todos</option>
            <option value="done">Finalizado</option>
            <option value="wip">En construcción</option>
          </select>
        </div>

        <button
          type="button"
          onClick={onClear}
          disabled={!hasActive}
          className="
            w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800
            shadow-sm transition
            hover:border-secondary/60 disabled:cursor-not-allowed disabled:opacity-60
            focus:outline-none focus:ring-2 focus:ring-secondary/40
            dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
            dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40
          "
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
