import Link from "next/link";
import { Home, FolderKanban, TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl items-center px-4 py-16">
      <section className="w-full">
        <div className="mx-auto max-w-2xl">
          <div
            className="
              rounded-2xl border border-slate-200/70 bg-white/50 p-6 shadow-sm backdrop-blur
              dark:border-slate-800/60 dark:bg-slate-950/20 dark:shadow-none
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl
                  border border-slate-200/70 bg-white/60
                  dark:border-slate-800/60 dark:bg-slate-950/30
                "
              >
                <TriangleAlert className="h-5 w-5 text-secondary dark:text-tertiary" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Error <span className="font-semibold">404</span>
                </p>

                <h1 className="mt-1 text-balance text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                  No encontré esa página
                </h1>

                <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  La URL puede estar mal escrita o la página ya no existe. Podés
                  volver al inicio o navegar a Proyectos.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {/* Inicio */}
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

                  {/* Proyectos */}
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
                    Ver proyectos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
