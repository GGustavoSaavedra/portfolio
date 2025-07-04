"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Hola, soy Gustavo Saavedra
      </h1>
      <p className="text-xl text-gray-600 max-w-xl mb-6">
        Desarrollador Frontend especializado en React y Next.js. Apasionado por
        crear experiencias web simples, limpias y efectivas.
      </p>

      <div className="flex gap-4">
        <Link
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Ver proyectos
        </Link>
        <Link
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
        >
          Contactarme
        </Link>
      </div>
    </section>
  );
}
