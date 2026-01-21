"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCarousel } from "@/components/cards/project-carousel";
import type { Project } from "@/data/projects";

type Props = Pick<
  Project,
  "title" | "subtitle" | "description" | "images" | "lifecycle"
>;

export function ProjectGallery({
  title,
  subtitle,
  description,
  images,
  lifecycle,
}: Props) {
  const isActive = lifecycle === "active";

  return (
    <div
      className="
        rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm
        ring-1 ring-secondary/10
        dark:border-slate-800/60 dark:bg-slate-950/30 dark:ring-tertiary/10
        sm:p-5
      "
    >
      <div className="mb-3">
        <Link
          href="/projects"
          className="
            group inline-flex items-center gap-2
            rounded-full px-3 py-1.5
            text-sm font-medium
            text-slate-600 dark:text-slate-300
            bg-transparent
            transition
            hover:text-slate-900 dark:hover:text-slate-50
            hover:bg-white/40 dark:hover:bg-slate-950/25
            ring-1 ring-transparent
            hover:ring-secondary/20 dark:hover:ring-tertiary/20
            focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30
            dark:focus-visible:ring-tertiary/30
          "
        >
          <ArrowLeft
            className="
              h-4 w-4
              transition-transform
              group-hover:-translate-x-0.5
            "
            aria-hidden="true"
          />
          Proyectos
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          {title}
        </h1>

        {isActive ? (
          <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-[10px] font-medium text-secondary dark:bg-tertiary/20 dark:text-tertiary">
            Activo
          </span>
        ) : (
          <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            Finalizado
          </span>
        )}
      </div>

      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-6">
        <ProjectCarousel images={images} aspectClassName="aspect-[4/3]" />
      </div>
    </div>
  );
}
