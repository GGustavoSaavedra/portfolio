"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCarousel } from "@/components/cards/project-carousel";
import type { Project } from "@/data/projects";

type Props = Pick<
  Project,
  | "title"
  | "subtitle"
  | "description"
  | "images"
  | "lifecycle"
  | "status"
  | "websiteUrl"
>;

function isValidWebsiteUrl(url?: string) {
  if (!url) return false;
  if (url === "#") return false;
  return true;
}

export function ProjectGallery({
  title,
  subtitle,
  description,
  images,
  lifecycle,
  status,
  websiteUrl,
}: Props) {
  const hasLiveDemo = isValidWebsiteUrl(websiteUrl);
  const isWipNoDemo = status === "wip" && !hasLiveDemo;

  const badge = (() => {
    if (status === "done") return "Finalizado";
    if (status === "wip" && lifecycle === "active" && hasLiveDemo)
      return "Activo";
    if (status === "wip" && !hasLiveDemo) return "En desarrollo";
    return "En progreso";
  })();

  const badgeNode = (() => {
    if (badge === "Activo") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-2.5 py-1 text-[10px] font-medium text-secondary dark:bg-tertiary/20 dark:text-tertiary">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary dark:bg-tertiary" />
          {badge}
        </span>
      );
    }

    if (badge === "En desarrollo") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary dark:bg-tertiary" />
          {badge}
        </span>
      );
    }

    return (
      <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        {badge}
      </span>
    );
  })();

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

        {badgeNode}
      </div>

      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-6">
        <div className="relative">
          <div className={isWipNoDemo ? "grayscale opacity-70" : ""}>
            <ProjectCarousel images={images} aspectClassName="aspect-[4/3]" />
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
    </div>
  );
}
