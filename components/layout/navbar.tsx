"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-20 backdrop-blur",
        "bg-brand-800/70 dark:bg-primary/90",
        "border-b border-secondary/35 dark:border-primary/60",
        "transition-all duration-300",
        isScrolled
          ? "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.65)] border-secondary/55 dark:border-primary/70"
          : "shadow-none",
      ].join(" ")}
    >
      <Container className="relative flex h-18 items-center">
        {/* Izquierda: logo */}
        <Link href="/" className="flex items-center" onClick={handleClose}>
          <span className="group relative inline-flex items-center justify-center">
            {/* halo sutil (solo hover) */}
            <span
              className="
                pointer-events-none absolute -inset-2 rounded-full
                opacity-0 blur-[10px] transition-all duration-300
                group-hover:opacity-40 group-hover:scale-110
                dark:bg-tertiary/30 bg-secondary/90
              "
            />
            <Image
              src="/images/logoNavbar.webp"
              alt="Logo"
              width={64}
              height={64}
              className="relative h-10 w-auto md:h-11 transition-transform duration-300 ease-in-out group-hover:scale-[1.04]"
              priority
            />
          </span>
        </Link>

        {/* Centro: links (solo desktop) */}
        <nav className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-2 text-xl sm:flex">
          {LINKS.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative rounded-full px-3 py-1.5 transition-all duration-200",
                  active
                    ? "text-white bg-white/20 dark:text-tertiary dark:bg-white/5"
                    : "text-slate-100 hover:text-white hover:bg-white/10 dark:hover:text-tertiary dark:hover:bg-white/5",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute left-1/2 -bottom-0.5 h-[2px] -translate-x-1/2 rounded-full transition-all duration-200",
                    active ? "w-6 opacity-100" : "w-0 opacity-0",
                    "bg-white/80 dark:bg-tertiary",
                  ].join(" ")}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Derecha: toggle desktop + hamburguesa mobile */}
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

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

        {/* Overlay + Menú desplegable mobile animado */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay para cerrar tocando afuera */}
              <motion.div
                className="fixed inset-0 z-10 bg-black/30 sm:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              />

              {/* Panel del menú */}
              <motion.div
                className="absolute right-0 top-14 z-20 w-52 rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:hidden"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="mb-2 flex justify-end">
                  <ThemeToggle />
                </div>

                <nav className="mb-2 flex flex-col gap-1 border-t border-slate-100 pt-2 text-xl dark:border-slate-800">
                  {LINKS.map((link) => {
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleClose}
                        className={[
                          "rounded-lg px-3 py-2 transition-colors",
                          active
                            ? "bg-slate-100 text-secondary font-medium dark:bg-slate-800/80 dark:text-tertiary"
                            : "text-slate-700 hover:bg-slate-100 hover:text-secondary dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-tertiary",
                        ].join(" ")}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
