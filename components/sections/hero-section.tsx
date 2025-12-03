"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Info } from "lucide-react";
import { Section } from "@/components/layout/section";

export default function HeroSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section className="py-10 sm:py-16">
      <motion.div
        layout
        className="relative min-h-[580px] sm:min-h-[620px] md:min-h-[440px] rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 sm:p-10"
      >
        {/* Barra lateral / acento con gradiente dependiente del estado */}
        <div
          className={`pointer-events-none absolute inset-y-4 left-3 w-[3px] rounded-full bg-gradient-to-b
          ${
            showMore
              ? "from-transparent via-sky-500/60 to-tertiary/80 dark:from-transparent dark:via-sky-400 dark:to-tertiary"
              : "from-tertiary/80 via-sky-500/60 to-transparent dark:from-tertiary dark:via-sky-400 dark:to-transparent"
          }`}
        />

        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          {/* Columna de texto */}
          <div className="flex-1 pl-4 sm:pl-6">
            <AnimatePresence mode="wait">
              {showMore ? (
                /* ===============================
                   ESTADO EXPANDIDO (Más sobre mí)
                   =============================== */
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 10, rotateX: -5 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -10, rotateX: 5 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {/* Encabezado unificado */}
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-tertiary">
                      Frontend & Mobile Developer
                    </p>
                    <p className="text-xs font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                      Gustavo Saavedra.
                    </p>
                  </div>

                  {/* Contenido largo */}
                  <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <p>
                      Me formé como{" "}
                      <span className="font-semibold text-tertiary">
                        Full Stack Developer
                      </span>{" "}
                      en el bootcamp Soy Henry (2025), trabajando con
                      tecnologías modernas como{" "}
                      <span className="font-medium">
                        React, Next.js, TypeScript, Tailwind CSS
                      </span>{" "}
                      y{" "}
                      <span className="font-medium">
                        Node.js / APIs REST en el backend
                      </span>
                      . Esa formación me dio una base sólida para entender el
                      ciclo completo de desarrollo de una aplicación.
                    </p>

                    <p>
                      Antes de dedicarme de lleno al desarrollo de software,
                      trabajé en la{" "}
                      <span className="font-medium">industria metalúrgica</span>{" "}
                      como programador industrial, diseñando lógica para{" "}
                      <span className="font-medium">
                        PLCs y controladores Arduino
                      </span>
                      . Ahí aprendí a resolver problemas en entornos reales, con
                      limitaciones de hardware y foco fuerte en confiabilidad.
                    </p>

                    <p>
                      Hoy continúo especializándome en{" "}
                      <span className="font-medium">
                        desarrollo web y mobile
                      </span>
                      , con énfasis en{" "}
                      <span className="font-medium">
                        React, Next.js, TypeScript, Tailwind CSS, React Native y
                        Expo
                      </span>
                      . Busco mi primera oportunidad profesional donde pueda
                      aportar tanto del lado del cliente como en la lógica de
                      negocio, y seguir creciendo como desarrollador full stack.
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* ==========================
                   ESTADO INICIAL (Intro)
                   ========================== */
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 10, rotateX: -5 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -10, rotateX: 5 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-tertiary">
                    Frontend & Mobile Developer
                  </p>

                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-50">
                    Hola, soy Gustavo Saavedra.
                  </h1>

                  <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
                    Soy desarrollador{" "}
                    <span className="font-medium">full stack</span> con foco en
                    la experiencia de usuario. Trabajo con{" "}
                    <span className="font-medium">
                      React, Next.js y TypeScript
                    </span>{" "}
                    para construir interfaces claras, rápidas y mantenibles.
                  </p>

                  <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
                    Actualmente estoy profundizando en{" "}
                    <span className="font-medium">desarrollo mobile</span> con{" "}
                    <span className="font-medium">React Native y Expo</span>,
                    llevando esas mismas experiencias a aplicaciones nativas
                    para iOS y Android.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón compacto con iconos */}
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              {showMore ? (
                <>
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Volver</span>
                </>
              ) : (
                <>
                  <Info className="h-3.5 w-3.5" />
                  <span>Más sobre mí</span>
                </>
              )}
            </button>
          </div>

          {/* Foto */}
          <div className="mt-4 flex w-full justify-center md:mt-0 md:w-auto">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-sky-500/5 to-transparent dark:from-tertiary/15 dark:via-sky-500/10" />
              <div className="relative flex h-full items-center justify-center px-4 text-center">
                <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  Próximamente
                  <br />
                  tu foto profesional
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
