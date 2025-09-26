"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12"
      style={{ scrollMarginTop: "100px" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-shrink-0 w-48 h-48 rounded-full bg-neutral-700 flex items-center justify-center shadow-lg mb-8 md:mb-0 md:mr-12"
      >
        <span className="text-neutral-400 font-mono text-sm">Foto aquí</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col items-start"
      >
        <p className="text-teal-500 font-mono text-sm mb-4">
          Hola, mi nombre es
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-4 leading-tight">
          Gustavo Saavedra.
        </h1>

        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-400 mb-6 leading-relaxed max-w-xl">
          Desarrollador Frontend especializado en React y Next.js, creando
          experiencias web simples y efectivas.
        </h2>

        <div className="flex gap-6">
          <Link
            href="#projects"
            className="text-teal-500 border border-teal-500 rounded px-6 py-3 font-mono text-sm hover:bg-teal-500 hover:text-[#0a192f] transition-colors"
          >
            Ver proyectos
          </Link>

          <Link
            href="#contact"
            className="text-slate-100 border border-slate-100 rounded px-6 py-3 font-mono text-sm hover:bg-slate-100 hover:text-[#0a192f] transition-colors"
          >
            Contactarme
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
