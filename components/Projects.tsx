import Image from "next/image";

const projects = [
  {
    title: "ByCarket",
    description:
      "Marketplace de autos donde los usuarios pueden publicar, buscar, comprar o vender vehículos usados. Proyecto final del bootcamp Soy Henry, desarrollado en equipo.",
    techStack:
      "Next.js · React · Tailwind · TypeScript · Firebase · PostgreSQL · Stripe",
    imageSrc: "/bycarket.png",
    websiteUrl: "https://bycarket-front-main.vercel.app/",
    repoUrl: "https://github.com/GGustavoSaavedra/bycarket--front",
  },
];

export default function Projects() {
  return (
    <section className="mb-20" id="projects">
      <h2 className="text-3xl font-semibold mb-8">Proyectos</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="md:w-1/2 h-48 md:h-auto relative">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500">{project.techStack}</p>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition"
                >
                  Ver sitio
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl text-sm hover:bg-gray-300 transition"
                >
                  Código fuente
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
