"use client";

import Image from "next/image";
import { FileText, BadgeCheck } from "lucide-react";
import { CONTACTS } from "@/components/contact/contacts";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer
      id="contact"
      className="
        mt-6
        backdrop-blur
        bg-brand-800/65 dark:bg-primary/95
        border-t border-secondary/40 dark:border-primary/60
        shadow-[0_-10px_30px_-18px_rgba(0,0,0,0.65)]
        text-slate-100
      "
    >
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* ───── Izquierda: Logo + CV + Certificado ───── */}
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

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 md:text-2xl">
              Gustavo Saavedra
            </h3>

            <p className="mt-2 max-w-sm text-base text-slate-700 dark:text-slate-300">
              Si querés conocer mi perfil, formación y experiencia, podés
              descargar mi CV o consultar mis credenciales.
            </p>

            <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://drive.google.com/file/d/1CWx769pKbSMlgU1T-s1xjPxwsAPPOUSN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2 rounded-xl
                  px-5 py-2.5
                  text-sm font-semibold
                  bg-white/70 text-secondary border border-secondary/35
                  hover:bg-secondary hover:text-white hover:border-secondary/60
                  transition
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-secondary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white

                  dark:bg-slate-950/40 dark:text-slate-100 dark:border-tertiary/35
                  dark:hover:bg-slate-950/55 dark:hover:border-tertiary/60 dark:hover:text-tertiary
                  dark:focus-visible:ring-tertiary/55 dark:focus-visible:ring-offset-slate-950
                "
              >
                <FileText className="h-5 w-5" />
                Descargar CV
              </a>

              <a
                href="https://drive.google.com/file/d/1JvN_DOICkY4HObSf-DR7KxuuTL_cpG7G/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Certificado Full Stack - Soy Henry"
                className="
                  group inline-flex items-center justify-center gap-2 rounded-xl
                  px-4 py-2
                  text-sm font-medium
                  bg-white/40 text-slate-700 border border-slate-300/60
                  transition
                  hover:border-secondary/50 hover:text-slate-900 hover:bg-white/60
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30

                  dark:bg-slate-950/20 dark:text-slate-300 dark:border-slate-800/60
                  dark:hover:border-tertiary/40 dark:hover:bg-slate-950/35 dark:hover:text-slate-50
                  dark:focus-visible:ring-tertiary/30
                "
              >
                <BadgeCheck className="h-5 w-5 text-secondary/80 group-hover:text-secondary dark:text-tertiary/80 dark:group-hover:text-tertiary" />
                Certificado
              </a>
            </div>
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
              md:flex md:flex-col md:justify-center
            "
          >
            <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 md:text-2xl">
              ¿Trabajamos juntos?
            </h3>

            <p className="mt-2 text-base text-slate-700 dark:text-slate-300">
              Si querés proponer una oportunidad, proyecto o simplemente hacer
              networking, dejame tus datos y te respondo.
            </p>

            <ContactForm />
          </div>
        </div>

        {/* ───────────── BOTTOM ───────────── */}
        <div
          className="
            mt-8 rounded-2xl px-5 py-4 backdrop-blur
            bg-white/50 dark:bg-primary/40
            border border-secondary/20 dark:border-primary/45
            ring-1 ring-white/5
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
                    group inline-flex h-10 w-10 items-center justify-center
                    rounded-xl
                    text-slate-700 dark:text-slate-300
                    transition
                    hover:text-secondary hover:scale-[1.06]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40
                    dark:hover:text-tertiary dark:focus-visible:ring-tertiary/50
                  "
                >
                  <Icon
                    className="
                      h-5 w-5 transition
                      group-hover:text-secondary group-focus-visible:text-secondary
                      group-hover:drop-shadow-[0_0_10px_rgba(30,64,175,0.25)]
                      dark:group-hover:text-tertiary dark:group-focus-visible:text-tertiary
                      dark:group-hover:drop-shadow-[0_0_12px_rgba(0,255,153,0.22)]
                    "
                  />
                </a>
              ))}
            </div>

            <p className="text-center text-sm text-slate-600 dark:text-slate-500">
              © {new Date().getFullYear()} Gustavo Saavedra. Desarrollado con
              Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
