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
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-50 text-gray-800" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos</h2>

        <div className="grid gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-4">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver sitio
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-xl text-sm hover:bg-gray-300 transition"
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
