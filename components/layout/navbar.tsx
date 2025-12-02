"use client";

import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoNavbar.png"
            alt="Logo"
            width={110}
            height={46}
            className="w-[90px] md:w-[110px] h-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg animate-float"
            priority
          />
        </Link>

        <nav className="hidden gap-6 text-xs sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
