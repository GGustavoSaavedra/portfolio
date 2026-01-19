export type ProjectImage = {
  src: string;
  alt?: string;
};

export type ProjectStatus = "done" | "wip";
export type ProjectType = "web" | "mobile" | "api";
export type ProjectCategory = "frontend" | "backend" | "fullstack" | "mobile";

export type ProjectDecision = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  slug: string;
  year: number;
  status: ProjectStatus;
  type: ProjectType;
  categories: ProjectCategory[];

  showOnHome?: boolean;

  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  images: ProjectImage[];
  websiteUrl?: string;
  repoUrl?: string;
  highlighted?: boolean;
  decisions?: ProjectDecision[];
  role?: string;
  deliveryNote?: string;
};

export const projects: Project[] = [
  {
    id: "coming-soon-web",
    slug: "upcoming-frontend",
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
    slug: "bycarket",
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
    decisions: [
      {
        title: "Por qué Next.js + App Router",
        description:
          "Elegimos Next.js para SSR/SSG donde aportaba y una estructura de rutas clara. Priorizamos performance percibida y una base escalable para features nuevas.",
      },
      {
        title: "Autenticación y datos con Firebase",
        description:
          "Firebase simplificó auth y manejo de usuarios para el MVP. Permitió iterar rápido sin construir backend de identidad desde cero.",
      },
      {
        title: "Pagos con Stripe",
        description:
          "Integramos Stripe para manejar pagos de forma segura, delegando validaciones y flujo de checkout en una plataforma robusta y estándar.",
      },
      {
        title: "Persistencia en PostgreSQL",
        description:
          "Base relacional para garantizar consistencia en entidades del marketplace. Se priorizó un modelo claro y consultas previsibles.",
      },
      {
        title: "UI con Tailwind + componentes reutilizables",
        description:
          "Diseño consistente y rápido de iterar. Separamos componentes para mantener la UI escalable y evitar estilos dispersos.",
      },
    ],
    role: "Frontend Developer (equipo)",
    deliveryNote:
      "Demo enfocada en experiencia de usuario y flujo visual del producto.",
  },
  {
    id: "coming-soon-mobile",
    slug: "upcoming-mobile",
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
    slug: "upcoming-backend-api",
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

export const homeProjects = projects
  .filter((project) => project.showOnHome)
  .slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
