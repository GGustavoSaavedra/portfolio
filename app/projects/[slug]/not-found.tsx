import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <section className="py-14">
      <Container>
        <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-8 text-center shadow-sm dark:border-slate-800/60 dark:bg-slate-950/40">
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Proyecto no encontrado
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Revisá la URL o volvé al listado de proyectos.
          </p>

          <Link
            href="/projects"
            className="
              mt-6 inline-flex items-center justify-center rounded-full
              bg-secondary px-5 py-2 text-sm font-medium text-white shadow-sm transition
              hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary/40
              dark:bg-tertiary dark:text-slate-900 dark:hover:bg-tertiary/90 dark:focus:ring-tertiary/40
            "
          >
            Volver a proyectos
          </Link>
        </div>
      </Container>
    </section>
  );
}
