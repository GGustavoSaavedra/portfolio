import { Section } from "@/components/layout/section";

export default function AboutSection() {
  return (
    <Section id="about" className="py-10 sm:py-16">
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 sm:p-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
          Más sobre mí
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          De la programación industrial al desarrollo web & mobile
        </h2>

        <div className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed dark:text-slate-300">
          <p>
            Me formé como{" "}
            <span className="font-semibold text-tertiary">
              Full Stack Developer
            </span>{" "}
            en el bootcamp Soy Henry (2025), trabajando con tecnologías modernas
            como{" "}
            <span className="font-medium">
              React, Next.js, TypeScript, Tailwind CSS
            </span>{" "}
            y{" "}
            <span className="font-medium">
              Node.js / APIs REST en el backend
            </span>
            . Esa formación me dio una base sólida para entender el ciclo
            completo de desarrollo de una aplicación.
          </p>

          <p>
            Antes de dedicarme de lleno al desarrollo de software, trabajé en la{" "}
            <span className="font-medium">industria metalúrgica</span> como
            programador industrial, diseñando lógica para{" "}
            <span className="font-medium">PLCs y controladores Arduino</span>.
            Ahí aprendí a resolver problemas en entornos reales, con
            limitaciones de hardware y foco fuerte en confiabilidad.
          </p>

          <p>
            Hoy continúo especializándome en{" "}
            <span className="font-medium">desarrollo web y mobile</span>, con
            énfasis en{" "}
            <span className="font-medium">
              React, Next.js, TypeScript, Tailwind CSS, React Native y Expo
            </span>
            . Busco mi primera oportunidad profesional donde pueda aportar en
            proyectos reales, tanto del lado del cliente como en la lógica de
            negocio, y seguir creciendo como desarrollador full stack.
          </p>
        </div>
      </div>
    </Section>
  );
}
