import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectGallery } from "./project-gallery";
import { ProjectFacts } from "./project-facts";
import { ProjectDecisions } from "./project-decisions";
import { ArrowLeft } from "lucide-react";

type Props = {
  project: Project;
};

export function ProjectDetailLayout({ project }: Props) {
  const isUpcoming =
    project.techStack.includes("Próximamente") ||
    project.websiteUrl === "#" ||
    project.websiteUrl === undefined;

  return (
    <div className="space-y-6 pt-8">
      <div className="relative">
        <div className="absolute -top-4 left-0">
          <Link
            href="/projects"
            className="
              inline-flex items-center gap-2 rounded-full
              border border-slate-200/70 bg-white/50 px-4 py-2
              text-sm font-medium text-slate-700 shadow-sm backdrop-blur
              transition
              hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-white/70 hover:text-slate-900
              focus:outline-none focus:ring-2 focus:ring-secondary/30
              dark:border-slate-800/60 dark:bg-slate-950/20 dark:text-slate-300 dark:shadow-none
              dark:hover:border-tertiary/40 dark:hover:bg-slate-950/35 dark:hover:text-slate-50
              dark:focus:ring-tertiary/30
            "
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Proyectos
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <ProjectGallery
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          images={project.images}
          lifecycle={project.lifecycle}
        />

        <ProjectFacts
          techStack={project.techStack}
          websiteUrl={project.websiteUrl}
          repoUrl={project.repoUrl}
          isUpcoming={isUpcoming}
          role={project.role}
          deliveryNote={project.deliveryNote}
        />
      </div>

      <ProjectDecisions decisions={project.decisions} />
    </div>
  );
}
