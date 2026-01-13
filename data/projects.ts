// data/projects.ts

export type ProjectImage = {
  src: string;
  alt?: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  images: ProjectImage[];
  websiteUrl?: string;
  repoUrl?: string;
  badge?: string;
  highlighted?: boolean;
};

export const projects: Project[] = [
  {
    title: "Proyecto en construcción",
    subtitle: "Frontend · Próximo proyecto",
    description:
      "Espacio reservado para un próximo proyecto destacado. Muy pronto vas a poder explorar el demo y revisar el código.",
    techStack: ["Próximamente"],
    images: [],
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
    // Por ahora podés repetir la misma imagen. Luego reemplazás por capturas reales.
    images: [
      { src: "/images/projects/bycarket/01.png", alt: "ByCarket - Home" },
      { src: "/images/projects/bycarket/01.png", alt: "ByCarket - Listado" },
      { src: "/images/projects/bycarket/01.png", alt: "ByCarket - Detalle" },
    ],
    websiteUrl: "https://bycarket-front-main.vercel.app/",
    repoUrl: "https://github.com/GGustavoSaavedra/bycarket--front",
    badge: "Proyecto final · Soy Henry",
    highlighted: true,
  },
  {
    title: "Proyecto en construcción",
    subtitle: "Mobile / Fullstack · Próximo proyecto",
    description:
      "Otro lugar reservado para un proyecto clave de mi portfolio, enfocado en buenas prácticas, tests y experiencia de usuario.",
    techStack: ["Próximamente"],
    images: [],
    websiteUrl: "#",
    repoUrl: "#",
    badge: "Muy pronto",
  },
];
