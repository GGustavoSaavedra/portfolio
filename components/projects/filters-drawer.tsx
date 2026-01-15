"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function FiltersDrawer({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]"
        aria-label="Cerrar filtros"
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-slate-200/70 bg-white p-4 shadow-2xl dark:border-slate-800/60 dark:bg-slate-950">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Filtros
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Ajustá la búsqueda de proyectos
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800
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

        <div className="mt-4 rounded-xl border border-dashed border-slate-300/70 p-3 text-xs text-slate-600 dark:border-slate-700/70 dark:text-slate-300">
          (Acá van categorías, tecnologías, año, tipo, etc.)
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            className="
              flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800
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
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
