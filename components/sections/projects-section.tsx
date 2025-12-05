import { ProjectCard, type Project } from "../cards/project-card";

const projects: Project[] = [
  {
    title: "Proyecto en construcción",
    subtitle: "Frontend · Próximo proyecto",
    description:
      "Este espacio está reservado para un próximo proyecto destacado. Muy pronto vas a poder explorar el demo y revisar el código.",
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
    highlighted: true,
  },
  {
    title: "Proyecto en construcción",
    subtitle: "Mobile / Fullstack · Próximo proyecto",
    description:
      "Otro lugar reservado para un proyecto clave de mi portfolio. Estará enfocado en buenas prácticas, tests y experiencia de usuario.",
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
        {/* Contenedor tipo "ventana" mejorado */}
        <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 px-6 py-10 shadow-xl backdrop-blur sm:px-10 lg:px-14">
          {/* Barra degradada superior (similar Hero) */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-[3px] rounded-full bg-gradient-to-r from-tertiary/0 via-tertiary to-tertiary/0" />

          {/* Glow decorativo en esquinas */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-tertiary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-tertiary/5 blur-3xl" />

          {/* Contenido real encima de los efectos */}
          <div className="relative space-y-10">
            {/* Encabezado sección */}
            <header className="text-center">
              <p className="text-3xl sm:text-4xl font-title font-bold uppercase tracking-[0.25em] text-tertiary">
                Proyectos destacados
              </p>
            </header>

            {/* Grid de proyectos */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
