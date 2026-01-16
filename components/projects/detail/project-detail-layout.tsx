import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectGallery } from "./project-gallery";
import { ProjectFacts } from "./project-facts";
import { ProjectDecisions } from "./project-decisions";

type Props = {
  project: Project;
};

export function ProjectDetailLayout({ project }: Props) {
  const isUpcoming =
    project.techStack.includes("Próximamente") ||
    project.websiteUrl === "#" ||
    project.websiteUrl === undefined;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="text-sm font-medium text-slate-700 transition hover:text-secondary dark:text-slate-300 dark:hover:text-tertiary"
        >
          ← Volver a proyectos
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <ProjectGallery
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          images={project.images}
        />

        <ProjectFacts
          techStack={project.techStack}
          websiteUrl={project.websiteUrl}
          repoUrl={project.repoUrl}
          isUpcoming={isUpcoming}
        />
      </div>

      <ProjectDecisions decisions={project.decisions} />
    </div>
  );
}
