"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCarousel } from "./project-carousel";

type Props = Project;

export function FeaturedProjectCard({
  title,
  subtitle,
  description,
  techStack,
  images,
  websiteUrl,
  highlighted,
}: Props) {
  const isUpcoming =
    techStack.includes("Próximamente") ||
    websiteUrl === "#" ||
    websiteUrl === undefined;

  const containerClasses = [
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/90 shadow-sm transition",
    highlighted
      ? // Light: secondary (azul) | Dark: tertiary (verde)
        "border-secondary/70 shadow-[0_14px_35px_rgba(15,23,42,0.22)] dark:border-tertiary/70"
      : // Light: hover secondary | Dark: hover tertiary
        "border-slate-200/70 hover:border-secondary/70 hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)] dark:border-slate-800/70 dark:hover:border-tertiary/70",
  ].join(" ");

  const shownTech = techStack.slice(0, 4);
  const remaining = techStack.length - shownTech.length;

  return (
    <motion.article
      layout
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={containerClasses}
    >
      {/* Glow: Light secondary / Dark tertiary */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/8 via-sky-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-tertiary/10 dark:via-sky-500/10" />

      <div className="relative flex h-full flex-col p-4">
        <div className="mb-3">
          <div className="relative">
            <ProjectCarousel images={images} />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              {title}
            </h3>
          </div>

          <p
            className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300
                        overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
          >
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {shownTech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200/70 bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}

            {remaining > 0 && (
              <span className="rounded-full border border-slate-200/70 bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                +{remaining}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-4">
            {!isUpcoming ? (
              <button
                type="button"
                className="
                  inline-flex items-center gap-2 rounded-full
                  bg-secondary px-4 py-2 text-sm font-medium text-white
                  shadow-sm transition
                  hover:-translate-y-0.5 hover:bg-secondary/90
                  focus:outline-none focus:ring-2 focus:ring-secondary/40
                  dark:bg-tertiary dark:text-slate-900
                  dark:hover:bg-tertiary/90 dark:focus:ring-tertiary/40
                "
              >
                Ver detalles
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-slate-400/60 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 dark:border-slate-500/70">
                <ArrowRight className="h-4 w-4 text-tertiary" />
                En construcción
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
