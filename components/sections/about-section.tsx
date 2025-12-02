import { Section } from "@/components/layout/section";

export default function AboutSection() {
  return (
    <Section id="about" className="py-16">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Sobre mí</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Soy desarrollador full stack especializado en frontend. Vengo de un
          background de programación industrial (PLC y Arduino) y actualmente
          enfocado en construir aplicaciones web y móviles con React, Next.js,
          TypeScript y React Native.
        </p>
      </div>
    </Section>
  );
}
