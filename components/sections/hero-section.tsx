import { Section } from "@/components/layout/section";

export default function HeroSection() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
          Frontend & Mobile Developer
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hola, soy Gustavo Saavedra.
        </h1>
        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          Desarrollador orientado a frontend con foco en React, Next.js y
          TypeScript. Construyo interfaces claras, rápidas y mantenibles.
        </p>
      </div>
    </Section>
  );
}
