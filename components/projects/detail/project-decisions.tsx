"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ProjectDecision } from "@/data/projects";

type Props = {
  decisions?: ProjectDecision[];
};

export function ProjectDecisions({ decisions }: Props) {
  const items = decisions ?? [];

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/30 sm:p-6">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
          Decisiones clave
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Próximamente voy a documentar el enfoque técnico y las decisiones de
          implementación de este proyecto.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm
        ring-1 ring-secondary/10
        dark:border-slate-800/60 dark:bg-slate-950/30 dark:ring-tertiary/10
        sm:p-6
      "
    >
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
          Decisiones clave
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          Algunas decisiones técnicas y de producto que guiaron el desarrollo.
        </p>
      </div>

      <div className="space-y-2">
        {items.map((item, idx) => (
          <DecisionRow key={`${item.title}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function DecisionRow({ item }: { item: ProjectDecision }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white/70 dark:border-slate-800/60 dark:bg-slate-950/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left
          transition
          hover:bg-slate-100/70
          focus:outline-none focus:ring-2 focus:ring-secondary/30
          dark:hover:bg-slate-900/45 dark:focus:ring-tertiary/30
        "
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-slate-900 dark:text-slate-50">
          {item.title}
        </span>

        <ChevronDown
          className={[
            "h-4 w-4 shrink-0 text-slate-500 transition-transform dark:text-slate-400",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="border-t border-slate-200/70 dark:border-slate-800/60"
          >
            <div className="px-4 py-3.5">
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
