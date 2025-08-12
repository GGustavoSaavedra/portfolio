"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-start max-w-3xl mx-auto px-6"
      style={{ scrollMarginTop: "100px" }}
    >
      <p className="text-teal-500 font-mono text-sm mb-4">Hola, mi nombre es</p>

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
    </section>
  );
}
