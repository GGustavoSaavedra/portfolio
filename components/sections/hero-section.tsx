import Link from "next/link";
import { Section } from "@/components/layout/section";

export default function HeroSection() {
  return (
    <Section className="py-10 sm:py-16">
      <div className="relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 sm:p-10">
        {/* Barra/acento lateral con tertiary */}
        <div className="pointer-events-none absolute inset-y-4 left-3 w-[3px] rounded-full bg-gradient-to-b from-tertiary/80 via-sky-500/60 to-transparent dark:from-tertiary dark:via-sky-400" />

        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          {/* Texto principal */}
          <div className="flex-1 space-y-5 pl-4 sm:pl-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-tertiary">
              Frontend & Mobile Developer
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-50">
              Hola, soy Gustavo Saavedra.
            </h1>

            <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Soy desarrollador full stack especializado en frontend. Trabajo
              con
              <span className="font-medium">
                {" "}
                React, Next.js y TypeScript
              </span>{" "}
              para construir interfaces claras, rápidas y mantenibles.
            </p>

            <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Actualmente estoy profundizando en{" "}
              <span className="font-medium">desarrollo mobile</span> con{" "}
              <span className="font-medium">React Native y Expo</span>, llevando
              esas mismas experiencias a aplicaciones nativas para iOS y
              Android.
            </p>

            <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Me interesa sumarme a equipos donde pueda aportar en la capa de
              interfaz, colaborar con diseño y producto, y seguir creciendo en
              performance, accesibilidad y buenas prácticas.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                Ver proyectos
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900/60"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Placeholder para foto */}
          <div className="mt-4 flex w-full justify-center md:mt-0 md:w-auto">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-sky-500/5 to-transparent dark:from-tertiary/15 dark:via-sky-500/10" />
              <div className="relative flex h-full items-center justify-center px-4 text-center">
                <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  Próximamente
                  <br />
                  foto profesional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
