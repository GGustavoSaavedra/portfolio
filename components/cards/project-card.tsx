import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  websiteUrl: string;
  repoUrl: string;
  badge?: string;
  highlighted?: boolean;
};

type ProjectCardProps = Project;

export function ProjectCard({
  title,
  subtitle,
  description,
  techStack,
  imageSrc,
  websiteUrl,
  repoUrl,
  badge,
  highlighted,
}: ProjectCardProps) {
  const isPlaceholder = websiteUrl === "#" && repoUrl === "#";

  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/80 backdrop-blur-sm transition-transform transition-shadow duration-300",
        highlighted
          ? "border-tertiary/70 shadow-xl hover:-translate-y-2 hover:shadow-2xl"
          : "border-border shadow-sm hover:-translate-y-1 hover:shadow-lg",
      ].join(" ")}
    >
      {/* Imagen */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Degradado superior */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Badge */}
        {badge && (
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-tertiary/40 bg-tertiary/10 px-3 py-1 text-xs font-medium text-tertiary backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>

          {subtitle && (
            <p className="text-xs font-medium uppercase tracking-wide text-tertiary/90">
              {subtitle}
            </p>
          )}

          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-1 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={isPlaceholder ? undefined : websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={isPlaceholder}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
              isPlaceholder
                ? "cursor-not-allowed opacity-40"
                : "bg-tertiary text-slate-950 hover:brightness-110"
            }`}
          >
            <ExternalLink className="h-4 w-4" />
            Ver sitio
          </a>

          <a
            href={isPlaceholder ? undefined : repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={isPlaceholder}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
              isPlaceholder
                ? "cursor-not-allowed opacity-40"
                : "border border-border bg-transparent text-foreground hover:bg-muted/60"
            }`}
          >
            <Github className="h-4 w-4" />
            Código fuente
          </a>
        </div>
      </div>
    </article>
  );
}
