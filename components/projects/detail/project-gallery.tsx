"use client";

import { ProjectCarousel } from "@/components/cards/project-carousel";
import type { Project } from "@/data/projects";

type Props = Pick<Project, "title" | "subtitle" | "description" | "images">;

export function ProjectGallery({
  title,
  subtitle,
  description,
  images,
}: Props) {
  return (
    <div
      className="
        rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm
        ring-1 ring-secondary/10
        dark:border-slate-800/60 dark:bg-slate-950/30 dark:ring-tertiary/10
        sm:p-5
      "
    >
      <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
        {title}
      </h1>

      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-4">
        <ProjectCarousel images={images} aspectClassName="aspect-[4/3]" />
      </div>
    </div>
  );
}
