import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowLeft, FolderKanban, Home, TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div
            className="
              rounded-2xl border border-slate-200/70 bg-white/50 p-8 shadow-sm backdrop-blur
              dark:border-slate-800/60 dark:bg-slate-950/20 dark:shadow-none
            "
          >
            <div className="flex flex-col items-center text-center">
              <div
                className="
                  inline-flex h-12 w-12 items-center justify-center rounded-2xl
                  border border-slate-200/70 bg-white/60
                  dark:border-slate-800/60 dark:bg-slate-950/30
                "
              >
                <TriangleAlert className="h-6 w-6 text-secondary dark:text-tertiary" />
              </div>

              <p className="mt-4 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                ERROR 404
              </p>

              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                Proyecto no encontrado
              </h1>

              <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Puede que el enlace esté mal escrito, o que el proyecto ya no
                esté disponible. Volvé al listado para explorar los proyectos
                publicados.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/projects"
                  className="
                    group inline-flex items-center gap-2 rounded-full
                    border border-slate-200/70 bg-white/50 px-4 py-2
                    text-sm font-medium text-slate-700 shadow-sm backdrop-blur
                    transition
                    hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-white/70 hover:text-slate-900
                    focus:outline-none focus:ring-2 focus:ring-secondary/30
                    dark:border-slate-800/60 dark:bg-slate-950/20 dark:text-slate-300 dark:shadow-none
                    dark:hover:border-tertiary/40 dark:hover:bg-slate-950/35 dark:hover:text-slate-50
                    dark:focus:ring-tertiary/30
                    dark:hover:shadow-[0_0_0_1px_rgba(0,255,153,0.12),0_0_24px_rgba(0,255,153,0.10)]
                  "
                >
                  <FolderKanban className="h-4 w-4 text-secondary/90 transition group-hover:text-secondary dark:text-tertiary/90 dark:group-hover:text-tertiary" />
                  Volver a proyectos
                </Link>

                <Link
                  href="/"
                  className="
                    group inline-flex items-center gap-2 rounded-full
                    border border-slate-200/70 bg-white/50 px-4 py-2
                    text-sm font-medium text-slate-700 shadow-sm backdrop-blur
                    transition
                    hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-white/70 hover:text-slate-900
                    focus:outline-none focus:ring-2 focus:ring-secondary/30
                    dark:border-slate-800/60 dark:bg-slate-950/20 dark:text-slate-300 dark:shadow-none
                    dark:hover:border-tertiary/40 dark:hover:bg-slate-950/35 dark:hover:text-slate-50
                    dark:focus:ring-tertiary/30
                    dark:hover:shadow-[0_0_0_1px_rgba(0,255,153,0.12),0_0_24px_rgba(0,255,153,0.10)]
                  "
                >
                  <Home className="h-4 w-4 text-secondary/90 transition group-hover:text-secondary dark:text-tertiary/90 dark:group-hover:text-tertiary" />
                  Ir al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
