import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectDetailLayout } from "@/components/projects/detail/project-detail-layout";

export function generateStaticParams() {
  // Coherente con sitemap: no generamos páginas para proyectos en construcción.
  return projects
    .filter((p) => p.status === "done")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.status !== "done") {
    return {
      title: "Proyecto no encontrado | Gustavo Saavedra",
    };
  }

  return {
    title: `${project.title} | Proyectos`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Proyectos`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: project.images?.[0]?.src
        ? [
            {
              url: project.images[0].src,
              alt: project.images[0].alt ?? project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project || project.status !== "done") notFound();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <ProjectDetailLayout project={project} />
      </Container>
    </section>
  );
}
