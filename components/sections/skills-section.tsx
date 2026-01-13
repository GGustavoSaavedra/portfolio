import { Section } from "@/components/layout/section";
import type { ElementType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSequelize,
  SiExpo,
  SiReactquery,
  SiJquery,
  SiVite,
  SiGithub,
  SiGit,
  SiVercel,
  SiPostman,
  SiFigma,
  SiTrello,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import SkillCard from "../cards/skill-card";

type SkillItem = {
  title: string;
  Icon: ElementType;
};

const skills: SkillItem[] = [
  // FRONTEND CORE
  { title: "HTML5", Icon: SiHtml5 },
  { title: "CSS3", Icon: SiCss3 },
  { title: "JavaScript", Icon: SiJavascript },
  { title: "TypeScript", Icon: SiTypescript },
  { title: "React", Icon: SiReact },
  { title: "Next.js", Icon: SiNextdotjs },
  { title: "Vite", Icon: SiVite },
  { title: "jQuery", Icon: SiJquery },

  // ESTILOS / UI
  { title: "Tailwind CSS", Icon: SiTailwindcss },
  { title: "Bootstrap", Icon: SiBootstrap },

  // STATE MANAGEMENT
  { title: "Redux", Icon: SiRedux },
  { title: "TanStack Query", Icon: SiReactquery },

  // MOBILE
  { title: "React Native", Icon: SiReact },
  { title: "Expo", Icon: SiExpo },

  // BACKEND / DB
  { title: "Node.js", Icon: SiNodedotjs },
  { title: "Express", Icon: SiExpress },
  { title: "PostgreSQL", Icon: SiPostgresql },
  { title: "MySQL", Icon: SiMysql },
  { title: "MongoDB", Icon: SiMongodb },
  { title: "Sequelize", Icon: SiSequelize },

  // HERRAMIENTAS / WORKFLOW
  { title: "Git", Icon: SiGit },
  { title: "GitHub", Icon: SiGithub },
  { title: "Vercel", Icon: SiVercel },
  { title: "Postman", Icon: SiPostman },
  { title: "Figma", Icon: SiFigma },
  { title: "Trello", Icon: SiTrello },
  { title: "VS Code", Icon: Code2 },
];

export default function SkillsSection() {
  return (
    <Section id="skills" className="pt-10 pb-10">
      <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-slate-200/80 px-5 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 sm:px-10 sm:py-10 lg:px-10">
        {/* Barra superior: azul en light / tertiary en dark */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-[3px] rounded-full bg-gradient-to-r from-sky-500/0 via-sky-500 to-sky-500/0 dark:from-tertiary/0 dark:via-tertiary dark:to-tertiary/0" />

        {/* Glows: azul en light / tertiary en dark */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl dark:bg-tertiary/10" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative space-y-6 sm:space-y-8">
          <header className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-slate-50">
              Tecnologías y herramientas
            </h2>
          </header>

          <div className="max-h-[520px] overflow-y-auto no-scrollbar pr-1 sm:max-h-none sm:overflow-visible">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  Icon={skill.Icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
