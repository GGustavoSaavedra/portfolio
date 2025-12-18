import Image from "next/image";
import { FileText, Send } from "lucide-react";
import { CONTACTS } from "@/components/contact/contacts";

export function Footer() {
  return (
    <footer
      id="contact"
      className="
        mt-6
        backdrop-blur
        bg-brand-800/80 dark:bg-primary/95
        border-t border-secondary/40 dark:border-primary/60
        shadow-[0_-10px_30px_-18px_rgba(0,0,0,0.65)]
        text-slate-100
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* ───────────── TOP ───────────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* ───── Izquierda: Logo + CV ───── */}
          <div
            className="
              flex flex-col items-center text-center
              rounded-2xl p-6 backdrop-blur
              bg-white/70 dark:bg-primary/55
              border border-secondary/25 dark:border-primary/55
              ring-1 ring-white/10
              shadow-[0_14px_40px_-26px_rgba(0,0,0,0.9)]
              transition
              hover:translate-y-[-1px]
              hover:border-secondary/40 dark:hover:border-primary/65
              hover:shadow-[0_18px_50px_-28px_rgba(0,0,0,0.95)]
            "
          >
            <Image
              src="/images/logoBlack.webp"
              alt="Logo Gustavo Saavedra"
              width={96}
              height={96}
              className="h-16 w-auto dark:hidden"
            />

            <Image
              src="/images/logoNavbar.webp"
              alt="Logo Gustavo Saavedra"
              width={96}
              height={96}
              className="hidden h-16 w-auto dark:block"
            />

            <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
              Gustavo Saavedra
            </h3>

            <p className="mt-2 max-w-sm text-base text-slate-700 dark:text-slate-300">
              Si querés conocer mi perfil y experiencia, podés ver o descargar
              mi CV.
            </p>

            <a
              href="https://drive.google.com/file/d/1CWx769pKbSMlgU1T-s1xjPxwsAPPOUSN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-2.5
                text-sm font-semibold
                bg-tertiary text-slate-900
                hover:opacity-90
                transition
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-tertiary/60
              "
            >
              <FileText className="h-5 w-5" />
              Descargar CV
            </a>
          </div>

          {/* ───── Derecha: CTA + Form ───── */}
          <div
            className="
              rounded-2xl p-6 backdrop-blur
              bg-white/70 dark:bg-primary/55
              border border-secondary/25 dark:border-primary/55
              ring-1 ring-white/10
              shadow-[0_14px_40px_-26px_rgba(0,0,0,0.9)]
              transition
              hover:translate-y-[-1px]
              hover:border-secondary/40 dark:hover:border-primary/65
              hover:shadow-[0_18px_50px_-28px_rgba(0,0,0,0.95)]
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
              ¿Trabajamos juntos?
            </h3>

            <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
              Si querés proponer una oportunidad, proyecto o simplemente hacer
              networking, dejame tus datos y te respondo.
            </p>

            <form className="mt-5 grid gap-3">
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span className="text-slate-700 dark:text-slate-200">
                    Nombre
                  </span>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="
  h-11 rounded-xl px-3 text-sm
  bg-white/70 dark:bg-primary/55
  border border-secondary/25 dark:border-primary/70
  ring-0 dark:ring-1 dark:ring-white/10
  text-slate-900 dark:text-slate-100
  placeholder:text-slate-500
  focus:outline-none focus:ring-2 focus:ring-tertiary/35
  dark:focus:ring-tertiary/45
  transition
"
                  />
                </label>

                <label className="grid gap-1 text-sm">
                  <span className="text-slate-700 dark:text-slate-200">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="
  h-11 rounded-xl px-3 text-sm
  bg-white/70 dark:bg-primary/55
  border border-secondary/25 dark:border-primary/70
  ring-0 dark:ring-1 dark:ring-white/10
  text-slate-900 dark:text-slate-100
  placeholder:text-slate-500
  focus:outline-none focus:ring-2 focus:ring-tertiary/35
  dark:focus:ring-tertiary/45
  transition
"
                  />
                </label>
              </div>

              <button
                type="button"
                className="
      mt-1 inline-flex h-11 items-center justify-center gap-2
      rounded-xl bg-tertiary px-4
      text-sm font-semibold text-slate-900
      hover:opacity-90
      transition
      focus:outline-none focus-visible:ring-2
      focus-visible:ring-tertiary/60
    "
              >
                <Send className="h-4 w-4" />
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* ───────────── BOTTOM ───────────── */}
        <div
          className="
            mt-10 rounded-2xl p-5 backdrop-blur
            bg-white/60 dark:bg-primary/45
            border border-secondary/25 dark:border-primary/50
            ring-1 ring-white/10
          "
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-5">
              {CONTACTS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="
        group
        inline-flex h-11 w-11 items-center justify-center
        rounded-xl
        text-slate-700 dark:text-slate-200
        transition
        hover:text-tertiary
        focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary/55
      "
                >
                  <Icon className="h-6 w-6 transition-colors group-hover:text-tertiary group-focus-visible:text-tertiary" />
                </a>
              ))}
            </div>

            <p className="text-center text-base text-slate-800 dark:text-slate-400">
              © {new Date().getFullYear()} Gustavo Saavedra. Desarrollado con
              Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
