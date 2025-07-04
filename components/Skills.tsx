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
    description: "Framework para apps React con SSR y SSG.",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    title: "TypeScript",
    description: "Superset de JavaScript con tipado estático.",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    title: "Tailwind CSS",
    description: "Framework de utilidades para estilos rápidos y responsivos.",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    title: "GitHub",
    description: "Control de versiones, colaboración y deploy.",
    icon: <SiGithub className="text-gray-800" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center text-gray-600 mb-10">
          Estas son las tecnologías y herramientas que manejo actualmente.
        </p>

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
      </div>
    </section>
  );
}
