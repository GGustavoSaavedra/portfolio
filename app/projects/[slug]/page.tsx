import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getProjectBySlug } from "@/data/projects";
import { ProjectDetailLayout } from "@/components/projects/detail/project-detail-layout";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <ProjectDetailLayout project={project} />
      </Container>
    </section>
  );
}
