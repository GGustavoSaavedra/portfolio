"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCarousel } from "./project-carousel";
import { getProjectBadge } from "@/lib/project-status";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";

type Props = Project;

export function FeaturedProjectCard({
  slug,
  title,
  subtitle,
  description,
  techStack,
  images,
  highlighted,
  lifecycle,
  status,
  websiteUrl,
}: Props) {
  const badge = getProjectBadge({ status, lifecycle, websiteUrl });
  const isWipNoDemo = badge.isWipNoDemo;

  const containerClasses = [
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border transition",
    "bg-white dark:bg-slate-900/80",
    "border-slate-300/80 shadow-[0_10px_24px_rgba(15,23,42,0.12)] hover:border-secondary/70 hover:shadow-[0_14px_30px_rgba(15,23,42,0.18)] dark:border-slate-800/70 dark:shadow-sm dark:hover:border-tertiary/70",
  ].join(" ");

  const shownTech = techStack.slice(0, 4);
  const remaining = techStack.length - shownTech.length;

  const ctaLabel = isWipNoDemo ? "Ver avance" : "Ver detalles";

  return (
    <motion.article
      layout
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={containerClasses}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/8 via-sky-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-tertiary/10 dark:via-sky-500/10" />

      <div className="relative flex h-full flex-col p-4">
        <div className="mb-3">
          <div className="relative">
            <div
              className={
                isWipNoDemo ? "grayscale opacity-70 transition" : "transition"
              }
            >
              <ProjectCarousel images={images} />
            </div>

            {isWipNoDemo && (
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 backdrop-blur dark:bg-slate-950/60 dark:text-slate-50 dark:ring-slate-700">
                  En desarrollo
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                {title}
              </h3>

              <ProjectStatusBadge
                status={status}
                lifecycle={lifecycle}
                websiteUrl={websiteUrl}
              />
            </div>
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
                className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}

            {remaining > 0 && (
              <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                +{remaining}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between pt-4">
            <Link
              href={`/projects/${slug}`}
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
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
