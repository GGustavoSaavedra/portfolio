"use client";

import type { Project } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/cards/featured-project-card";

type Props = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <FeaturedProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
