"use client";

import { useState } from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "#projects", label: "Proyectos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-secondary/40 bg-brand-800/80 backdrop-blur dark:border-primary/70 dark:bg-primary/95">
      <Container className="relative flex h-18 items-center">
        {/* Izquierda: logo */}
        <Link href="/" className="flex items-center" onClick={handleClose}>
          <Image
            src="/images/logoNavbar.png"
            alt="Logo"
            width={110}
            height={46}
            className="w-[110px] md:w-[130px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg animate-float"
            priority
          />
        </Link>

        {/* Centro: links (solo desktop) */}
        <nav className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-6 text-xl sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-slate-100 transition-colors duration-200 hover:text-tertiary
                 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                 after:bg-tertiary after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Derecha: toggle desktop + hamburguesa mobile */}
        <div className="ml-auto flex items-center gap-2">
          {/* Toggle solo en desktop */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Botón hamburguesa solo mobile */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-slate-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:focus-visible:ring-offset-slate-950 sm:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Menú desplegable mobile */}
        {isOpen && (
          <div className="absolute right-0 top-14 w-48 rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:hidden">
            <div className="mb-2 flex justify-end">
              <ThemeToggle />
            </div>
            <nav className="mb-2 flex flex-col gap-2 border-t border-slate-100 pt-2 text-xl dark:border-slate-800">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="rounded-md px-2 py-1 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
