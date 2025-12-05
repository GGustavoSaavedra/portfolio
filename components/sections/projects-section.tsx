import { ProjectCard, type Project } from "../cards/project-card";

const projects: Project[] = [
  {
    title: "Proyecto en construcción",
    subtitle: "Frontend · Próximo proyecto",
    description:
      "Espacio reservado para un próximo proyecto destacado. Muy pronto vas a poder explorar el demo y revisar el código.",
    techStack: ["Próximamente"],
    imageSrc: "/images/placeholder.png",
    websiteUrl: "#",
    repoUrl: "#",
    badge: "Muy pronto",
  },
  {
    title: "ByCarket",
    subtitle: "Marketplace de vehículos usados",
    description:
      "Marketplace de autos donde los usuarios pueden publicar, buscar, comprar o vender vehículos usados. Proyecto final del bootcamp Soy Henry, desarrollado en equipo.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "PostgreSQL",
      "Stripe",
    ],
    imageSrc: "/images/bycarket.png",
    websiteUrl: "https://bycarket-front-main.vercel.app/",
    repoUrl: "https://github.com/GGustavoSaavedra/bycarket--front",
    badge: "Proyecto final · Soy Henry",
    highlighted: true, // solo para estilo sutil, ya no cambia layout
  },
  {
    title: "Proyecto en construcción",
    subtitle: "Mobile / Fullstack · Próximo proyecto",
    description:
      "Otro lugar reservado para un proyecto clave de mi portfolio, enfocado en buenas prácticas, tests y experiencia de usuario.",
    techStack: ["Próximamente"],
    imageSrc: "/images/placeholder.png",
    websiteUrl: "#",
    repoUrl: "#",
    badge: "Muy pronto",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-background py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-slate-200/80 px-6 py-10 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 sm:px-10 lg:px-14">
          {/* Barra degradada superior */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-[3px] rounded-full bg-gradient-to-r from-tertiary/0 via-tertiary to-tertiary/0" />

          {/* Glows decorativos */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-tertiary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative space-y-8">
            {/* Encabezado simple como querías */}
            <header className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Proyectos destacados
              </h2>
            </header>

            {/* Grid: 3 columnas iguales en desktop */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
