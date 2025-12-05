"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  websiteUrl?: string;
  repoUrl?: string;
  badge?: string;
  highlighted?: boolean;
};

type Props = Project;

export const ProjectCard = ({
  title,
  subtitle,
  description,
  techStack,
  imageSrc,
  websiteUrl,
  repoUrl,
  badge,
  highlighted,
}: Props) => {
  const isUpcoming =
    techStack.includes("Próximamente") ||
    websiteUrl === "#" ||
    websiteUrl === undefined;

  const containerClasses = [
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/90 shadow-sm transition",
    highlighted
      ? "border-tertiary/70 shadow-[0_14px_35px_rgba(15,23,42,0.22)]"
      : "border-slate-200/70 hover:border-tertiary/70 hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)] dark:border-slate-800/70",
  ].join(" ");

  return (
    <motion.article
      layout
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={containerClasses}
    >
      {/* Glow / overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-tertiary/7 via-sky-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-tertiary/10 dark:via-sky-500/10" />

      <div className="relative flex h-full flex-col p-5">
        {/* Imagen */}
        <div className="mb-4">
          <div className="relative w-full overflow-hidden rounded-xl border border-slate-200/70 bg-neutral-100/80 dark:border-slate-800/60 dark:bg-slate-900/80">
            <Image
              src={imageSrc}
              alt={title}
              width={640}
              height={400}
              className="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-40"
            />

            {badge && (
              <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-900/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-tertiary shadow-sm backdrop-blur-md dark:bg-slate-950/90">
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              {title}
            </h3>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200/70 bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer pegado abajo → altura más pareja entre cards */}
          <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {!isUpcoming && websiteUrl && websiteUrl !== "#" && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-secondary/90"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Ver sitio</span>
                </a>
              )}

              {!isUpcoming && repoUrl && repoUrl !== "#" && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-tertiary hover:text-tertiary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Ver código</span>
                </a>
              )}

              {isUpcoming && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-slate-400/60 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 shadow-sm dark:border-slate-500/70">
                  <ArrowRight className="h-3.5 w-3.5 text-tertiary" />
                  En construcción
                </span>
              )}
            </div>

            <span className="hidden items-center gap-1 text-[11px] font-medium text-slate-500 group-hover:text-tertiary sm:inline-flex">
              Explorar detalles
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
