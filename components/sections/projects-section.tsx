import { Section } from "@/components/layout/section";
import { FeaturedProjectCard } from "@/components/cards/featured-project-card";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="pt-10 pb-10">
      <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-slate-200/80 px-6 py-10 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 sm:px-10 lg:px-10">
        {/* Barra degradada superior */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-[3px] rounded-full bg-gradient-to-r from-tertiary/0 via-tertiary to-tertiary/0" />

        {/* Glows decorativos */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-tertiary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative space-y-8">
          <header className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl md:text-4xl">
              Proyectos destacados
            </h2>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FeaturedProjectCard
                key={`${project.title}-${index}`}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
