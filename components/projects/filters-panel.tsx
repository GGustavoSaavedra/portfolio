"use client";

export function FiltersPanel() {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40">
      <div className="mb-3">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          Filtros
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          Ajustá la búsqueda de proyectos
        </p>
      </div>

      <div className="space-y-3">
        <div className="rounded-xl border border-dashed border-slate-300/70 p-3 text-xs text-slate-600 dark:border-slate-700/70 dark:text-slate-300">
          (Acá van categorías, tecnologías, año, tipo, etc.)
        </div>

        <button
          type="button"
          className="
            w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800
            shadow-sm transition
            hover:border-secondary/60
            focus:outline-none focus:ring-2 focus:ring-secondary/40
            dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100
            dark:hover:border-tertiary/60 dark:focus:ring-tertiary/40
          "
          disabled
        >
          Limpiar (próximamente)
        </button>
      </div>
    </div>
  );
}
