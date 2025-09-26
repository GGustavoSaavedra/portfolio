import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ByCarket",
    description:
      "Marketplace de autos donde los usuarios pueden publicar, buscar, comprar o vender vehículos usados. Proyecto final del bootcamp Soy Henry, desarrollado en equipo.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
      "Stripe",
    ],
    imageSrc: "/images/bycarket.png",
    websiteUrl: "https://bycarket-front-main.vercel.app/",
    repoUrl: "https://github.com/GGustavoSaavedra/bycarket--front",
  },
  {
    title: "Proyecto en construcción",
    description:
      "Este espacio está reservado para un próximo proyecto. Muy pronto estará disponible aquí.",
    techStack: ["Próximamente"],
    imageSrc: "/images/placeholder.png",
    websiteUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Proyecto en construcción",
    description:
      "Este espacio está reservado para un próximo proyecto. Muy pronto estará disponible aquí.",
    techStack: ["Próximamente"],
    imageSrc: "/images/placeholder.png",
    websiteUrl: "#",
    repoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      className="py-20 px-6 sm:px-12 md:px-20 bg-[#0a192f]"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-title font-bold text-slate-100 mb-12 text-center">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="bg-[#112240] rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Imagen */}
              <div className="relative w-full h-64">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-400">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#233554] text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition ${
                      project.websiteUrl === "#"
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver sitio
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition ${
                      project.repoUrl === "#"
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-[#233554] text-slate-300 hover:bg-[#2d3e5d]"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    Código fuente
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
