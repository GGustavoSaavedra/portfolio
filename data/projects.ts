export type ProjectImage = {
  src: string;
  alt?: string;
};

export type ProjectStatus = "done" | "wip";
export type ProjectType = "web" | "mobile" | "api";
export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile";

export type Project = {
  // 🔑 Identidad y control
  id: string;
  year: number;
  status: ProjectStatus;
  type: ProjectType;
  categories: ProjectCategory[];

  // 🏠 Control explícito de Home
  showOnHome?: boolean;

  // 🎨 Datos actuales (compatibles con la UI existente)
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  images: ProjectImage[];
  websiteUrl?: string;
  repoUrl?: string;
  highlighted?: boolean;
};

export const projects: Project[] = [
  {
    id: "coming-soon-web",
    year: 2026,
    status: "wip",
    type: "web",
    categories: ["frontend"],
    showOnHome: true,

    title: "Proyecto en construcción",
    subtitle: "Frontend · Próximo proyecto",
    description:
      "Espacio reservado para un próximo proyecto destacado. Muy pronto vas a poder explorar el demo y revisar el código.",
    techStack: ["Próximamente"],
    images: [],
    websiteUrl: "#",
    repoUrl: "#",
  },
  {
    id: "bycarket",
    year: 2025,
    status: "done",
    type: "web",
    categories: ["fullstack", "frontend"],
    showOnHome: true,
    highlighted: true,

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
    images: [
      { src: "/images/projects/bycarket/01.png", alt: "ByCarket - Landing" },
      { src: "/images/projects/bycarket/02.png", alt: "ByCarket - Home" },
      { src: "/images/projects/bycarket/03.png", alt: "ByCarket - Categories" },
      { src: "/images/projects/bycarket/04.png", alt: "ByCarket - Mobile" },
    ],
    websiteUrl: "https://bycarket-front-main.vercel.app/",
    repoUrl: "https://github.com/GGustavoSaavedra/bycarket--front",
  },
  {
    id: "coming-soon-mobile",
    year: 2026,
    status: "wip",
    type: "mobile",
    categories: ["mobile", "fullstack"],
    showOnHome: true,

    title: "Proyecto en construcción",
    subtitle: "Mobile / Fullstack · Próximo proyecto",
    description:
      "Otro lugar reservado para un proyecto clave de mi portfolio, enfocado en buenas prácticas, tests y experiencia de usuario.",
    techStack: ["Próximamente"],
    images: [],
    websiteUrl: "#",
    repoUrl: "#",
  },
  {
    id: "coming-soon-api",
    year: 2026,
    status: "wip",
    type: "api",
    categories: ["backend"],

    title: "Proyecto en construcción",
    subtitle: "Backend / API · Próximo proyecto",
    description:
      "Reservado para un proyecto orientado a arquitectura, validaciones, autenticación y buenas prácticas en APIs.",
    techStack: ["Próximamente"],
    images: [],
    websiteUrl: "#",
    repoUrl: "#",
  },
];

// 🏠 Proyectos que se muestran en Home (máx. 3)
export const homeProjects = projects
  .filter((project) => project.showOnHome)
  .slice(0, 3);
