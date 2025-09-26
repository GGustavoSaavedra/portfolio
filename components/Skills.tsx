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
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    title: "Next.js",
    description: "Framework para apps React con SSR y SSG.",
    icon: <SiNextdotjs className="text-slate-100" />,
  },
  {
    title: "TypeScript",
    description: "Superset de JavaScript con tipado estático.",
    icon: <SiTypescript className="text-blue-400" />,
  },
  {
    title: "Tailwind CSS",
    description: "Framework de utilidades para estilos rápidos y responsivos.",
    icon: <SiTailwindcss className="text-cyan-300" />,
  },
  {
    title: "GitHub",
    description: "Control de versiones, colaboración y deploy.",
    icon: <SiGithub className="text-slate-200" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 sm:px-12 md:px-20 bg-[#0a192f]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-title font-bold mb-6 text-slate-100 text-center">
          Skills
        </h2>
        <p className="text-center text-slate-400 mb-12">
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
