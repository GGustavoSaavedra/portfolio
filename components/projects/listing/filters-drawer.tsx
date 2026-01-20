"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type {
  ProjectCategory,
  ProjectFormat,
  ProjectStatus,
  ProjectType,
} from "@/data/projects";
import type { ProjectsOrder } from "./projects-toolbar";

type FiltersState = {
  categories: ProjectCategory[];
  technologies: string[];
  type: ProjectType | "all";
  status: ProjectStatus | "all";
  format: ProjectFormat | "all";
  order: ProjectsOrder;
};

type Props = {
  open: boolean;
  onClose: () => void;

  filters: FiltersState;
  techOptions: string[];
  onToggleCategory: (cat: ProjectCategory) => void;
  onToggleTechnology: (tech: string) => void;
  onChangeType: (type: ProjectType | "all") => void;
  onChangeStatus: (status: ProjectStatus | "all") => void;
  onChangeFormat: (format: ProjectFormat | "all") => void;
  onChangeOrder: (order: ProjectsOrder) => void;
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

const FORMAT_LABELS: Record<ProjectFormat, string> = {
  product: "Producto",
  "case-study": "Proyecto técnico",
};

export function FiltersDrawer({
  open,
  onClose,
  filters,
  techOptions,
  onToggleCategory,
  onToggleTechnology,
  onChangeType,
  onChangeStatus,
  onChangeFormat,
  onChangeOrder,
  onClear,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const categories: Exclude<ProjectCategory, "mobile">[] = [
    "frontend",
    "backend",
    "fullstack",
  ];
  const types: ProjectType[] = ["web", "mobile", "api"];
  const formats: ProjectFormat[] = ["product", "case-study"];

  const hasActive =
    filters.categories.length > 0 ||
    filters.technologies.length > 0 ||
    filters.type !== "all" ||
    filters.status !== "all" ||
    filters.format !== "all";

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Cerrar filtros"
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />

          {/* Panel */}
          <motion.div
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-slate-200/70 bg-white shadow-2xl ring-1 ring-secondary/10 dark:border-slate-800/60 dark:bg-slate-950 dark:ring-tertiary/10"
            initial={{ x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            role="dialog"
            aria-modal="true"
            aria-label="Filtros"
          >
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Filtros
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Ajustá la búsqueda
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800
                    shadow-sm transition
                    hover:border-secondary/60
                    focus:outline-none focus:ring-2 focus:ring-secondary/40
                    dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
                    dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40
                  "
                >
                  Cerrar
                </button>
              </div>

              <div className="mt-4 space-y-5">
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
                            onChange={() =>
                              onToggleCategory(cat as ProjectCategory)
                            }
                            className="h-4 w-4 accent-secondary dark:accent-tertiary"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Tecnologías (select + chips) */}
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Tecnologías
                    </p>

                    {filters.technologies.length > 0 && (
                      <span className="text-[11px] text-slate-600 dark:text-slate-300">
                        {filters.technologies.length} seleccionada
                        {filters.technologies.length === 1 ? "" : "s"}
                      </span>
                    )}
                  </div>

                  <select
                    defaultValue=""
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value && !filters.technologies.includes(value)) {
                        onToggleTechnology(value);
                      }
                      e.currentTarget.value = "";
                    }}
                    className="
                      h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800
                      shadow-sm outline-none transition
                      focus:ring-2 focus:ring-secondary/40
                      dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
                      dark:focus:ring-tertiary/40
                    "
                  >
                    <option value="" disabled>
                      Seleccionar tecnología
                    </option>
                    {techOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>

                  {filters.technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {filters.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                        >
                          {tech}
                          <button
                            type="button"
                            onClick={() => onToggleTechnology(tech)}
                            className="
                              rounded-full p-0.5 transition
                              hover:bg-secondary/15 dark:hover:bg-tertiary/15
                              focus:outline-none focus:ring-2 focus:ring-secondary/30
                              dark:focus:ring-tertiary/30
                            "
                            aria-label={`Quitar ${tech}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
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

                {/* Formato */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Formato
                  </p>
                  <select
                    value={filters.format}
                    onChange={(e) =>
                      onChangeFormat(e.target.value as ProjectFormat | "all")
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
                    {formats.map((f) => (
                      <option key={f} value={f}>
                        {FORMAT_LABELS[f]}
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
                    <option value="wip">Activo</option>
                  </select>
                </div>

                {/* Orden */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Orden
                  </p>
                  <select
                    value={filters.order}
                    onChange={(e) =>
                      onChangeOrder(e.target.value as ProjectsOrder)
                    }
                    className="
                      h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800
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
                </div>
              </div>
            </div>

            <div className="mt-auto border-t border-slate-200/70 p-4 dark:border-slate-800/60">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClear}
                  disabled={!hasActive}
                  className="
                    flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800
                    shadow-sm transition
                    hover:border-secondary/60 disabled:cursor-not-allowed disabled:opacity-60
                    focus:outline-none focus:ring-2 focus:ring-secondary/40
                    dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
                    dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40
                  "
                >
                  Limpiar
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    flex-1 rounded-xl bg-secondary px-3 py-2 text-sm font-medium text-white
                    shadow-sm transition
                    hover:-translate-y-0.5 hover:bg-secondary/90
                    focus:outline-none focus:ring-2 focus:ring-secondary/40
                    dark:bg-tertiary dark:text-slate-900
                    dark:hover:bg-tertiary/90 dark:focus:ring-tertiary/40
                  "
                >
                  Ver resultados
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
