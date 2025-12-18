"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Info } from "lucide-react";
import { Section } from "@/components/layout/section";
import { CONTACTS } from "@/components/contact/contacts";
import Image from "next/image";

export default function HeroSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section className="pt-10 pb-10 sm:pt-14 sm:pb-10">
      <motion.div
        layout
        className="relative h-auto lg:h-[540px] rounded-2xl border border-slate-300 bg-slate-200/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70 sm:p-10"
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

        <div className="flex flex-col items-start gap-8 md:h-full md:flex-row md:items-center md:gap-10">
          {/* Columna de texto */}
          <div className="flex w-full flex-1 min-h-0 flex-col justify-center pl-4 sm:pl-6 md:h-full">
            {/* Área de contenido con scroll interno solo si es necesario */}
            <div
              className={`min-h-0 pr-1 ${
                showMore ? "md:flex-1 md:overflow-y-auto no-scrollbar" : ""
              }`}
            >
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
                    className="space-y-5 md:min-h-full md:flex md:flex-col md:justify-center"
                  >
                    <div className="space-y-2">
                      <p className="inline-flex">
                        <span className="inline-flex items-center rounded-full border border-tertiary/70 bg-primary px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-tertiary shadow-sm dark:bg-primary">
                          Frontend &amp; Mobile Developer
                        </span>
                      </p>
                      <p className="text-xs font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                        Gustavo Saavedra.
                      </p>
                    </div>

                    <div className="space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      <p>
                        Soy{" "}
                        <span className="font-semibold text-tertiary">
                          Full Stack Developer
                        </span>{" "}
                        formado en el bootcamp Soy Henry (2025), con foco en{" "}
                        <span className="font-medium">
                          React, Next.js, TypeScript y Tailwind CSS
                        </span>{" "}
                        , además de{" "}
                        <span className="font-medium">Node.js y APIs REST</span>
                        . Cuento con una base sólida del ciclo completo de
                        desarrollo de aplicaciones.
                      </p>

                      <p>
                        Previamente trabajé en la{" "}
                        <span className="font-medium">
                          industria metalúrgica
                        </span>{" "}
                        como programador industrial, desarrollando lógica para{" "}
                        <span className="font-medium">
                          PLCs y controladores Arduino
                        </span>
                        , lo que fortaleció mi enfoque en resolución de
                        problemas reales y confiabilidad.
                      </p>

                      <p>
                        Actualmente me especializo en{" "}
                        <span className="font-medium">
                          desarrollo web y mobile
                        </span>
                        , utilizando{" "}
                        <span className="font-medium">
                          React, Next.js, TypeScript, Tailwind CSS, React Native
                          y Expo
                        </span>
                        . Busco mi primera oportunidad profesional para aportar
                        en frontend y lógica de negocio, y seguir creciendo como
                        desarrollador full stack.
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
                    <p className="inline-flex">
                      <span className="inline-flex items-center rounded-full border border-tertiary/70 bg-primary px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-tertiary shadow-sm dark:bg-primary">
                        Frontend &amp; Mobile Developer
                      </span>
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-50">
                      Hola, soy Gustavo Saavedra.
                    </h1>

                    <p className="max-w-xl text-sm text-slate-700 sm:text-base dark:text-slate-300">
                      Soy desarrollador{" "}
                      <span className="font-medium">full stack</span> con foco
                      en la experiencia de usuario. Trabajo con{" "}
                      <span className="font-medium">
                        React, Next.js y TypeScript
                      </span>{" "}
                      para construir interfaces claras, rápidas y mantenibles.
                    </p>

                    <p className="max-w-xl text-sm text-slate-700 sm:text-base dark:text-slate-300">
                      Actualmente estoy profundizando en{" "}
                      <span className="font-medium">desarrollo mobile</span> con{" "}
                      <span className="font-medium">React Native y Expo</span>,
                      llevando esas mismas experiencias a aplicaciones nativas
                      para iOS y Android.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botón compacto, alineado al contenido */}
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
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

          {/* Foto + iconos de contacto */}
          <div className="mt-4 flex w-full flex-col items-center gap-4 md:mt-0 md:h-full md:w-auto md:justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:w-96 md:max-w-none">
              {/* Glow */}
              <div
                className="
                  pointer-events-none absolute -inset-6 rounded-[28px]
                  bg-[radial-gradient(closest-side,rgba(0,255,153,0.22),transparent_70%)]
                  blur-2xl
                  dark:bg-[radial-gradient(closest-side,rgba(59,130,246,0.22),transparent_70%)]
                "
              />

              {/* Gradient frame */}
              <div className="relative rounded-[28px] p-[2px] bg-gradient-to-br from-tertiary/80 via-sky-500/50 to-transparent dark:from-sky-400/70 dark:via-tertiary/60 dark:to-transparent">
                <div className="relative overflow-hidden rounded-[26px] bg-white/70 ring-1 ring-slate-900/10 backdrop-blur-md dark:bg-slate-950/40 dark:ring-white/10">
                  <div className="relative h-44 sm:h-52 md:h-64">
                    <Image
                      src="/images/foto-perfil.webp"
                      alt="Foto de perfil de Gustavo Saavedra"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-transparent dark:from-black/25" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {CONTACTS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition hover:text-tertiary"
                  title={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
