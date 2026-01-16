"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SearchX, RotateCcw } from "lucide-react";
import type { Project } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/cards/featured-project-card";

type Props = {
  projects: Project[];
  onClearFilters?: () => void;
};

const itemMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.26, ease: "easeOut" as const },
};

export function ProjectsGrid({ projects, onClearFilters }: Props) {
  if (projects.length === 0) {
    return (
      <motion.div
        layout
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="grid place-items-center rounded-2xl border border-slate-200/70 bg-white/60 p-8 text-center shadow-sm dark:border-slate-800/60 dark:bg-slate-950/30 sm:p-12"
      >
        <div className="max-w-md">
          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-700 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/50 dark:text-slate-200">
            <SearchX className="h-5 w-5" />
          </div>

          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            No hay resultados
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Probá cambiar o quitar algunos filtros para ver más proyectos.
          </p>

          {onClearFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="
                mt-5 inline-flex items-center gap-2 rounded-full
                bg-secondary px-4 py-2 text-sm font-medium text-white
                shadow-sm transition
                hover:-translate-y-0.5 hover:bg-secondary/90
                focus:outline-none focus:ring-2 focus:ring-secondary/40
                dark:bg-tertiary dark:text-slate-900
                dark:hover:bg-tertiary/90 dark:focus:ring-tertiary/40
              "
            >
              <RotateCcw className="h-4 w-4" />
              Limpiar filtros
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      <AnimatePresence mode="sync">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={itemMotion.initial}
            animate={itemMotion.animate}
            exit={itemMotion.exit}
            transition={itemMotion.transition}
          >
            <FeaturedProjectCard {...project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
