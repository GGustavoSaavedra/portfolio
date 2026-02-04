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
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <ProjectGallery
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          images={project.images}
          lifecycle={project.lifecycle}
          status={project.status}
          websiteUrl={project.websiteUrl}
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
