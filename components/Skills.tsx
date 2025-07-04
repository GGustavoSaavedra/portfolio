import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import SkillCard from "./SkillCard";

const skills = [
  {
    title: "React",
    description: "Librería para construir interfaces de usuario.",
    icon: <SiReact className="text-blue-500" />,
  },
  {
    title: "Next.js",
    description: "Framework para apps React con SSR.",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    title: "TypeScript",
    description: "Superset de JavaScript tipado.",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    title: "Tailwind CSS",
    description: "Framework de utilidades CSS.",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    title: "GitHub",
    description: "Control de versiones y repositorio remoto.",
    icon: <SiGithub className="text-gray-800" />,
  },
];

export default function Skills() {
  return (
    <section className="mb-20" id="skills">
      <h2 className="text-3xl font-semibold mb-8">Tecnologías</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}
