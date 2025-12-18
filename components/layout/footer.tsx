import { FileText } from "lucide-react";
import { CONTACTS } from "@/components/contact/contacts";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-6 bg-[#0a192f] text-slate-100 pt-16 pb-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Charlamos?</h2>

        <p className="mb-8 text-slate-400">
          Si te interesa contactarme o conocer más sobre mi perfil, podés
          descargar mi CV o escribirme directamente.
        </p>

        <div className="mb-10">
          <a
            href="https://drive.google.com/file/d/1vPAcnmn7dcC2imEZYGXHd1Z4KXe89gd3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-[#0a192f] font-semibold rounded-xl text-sm hover:bg-teal-400 transition"
          >
            <FileText className="w-5 h-5" />
            Ver CV
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          {CONTACTS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 transition transform hover:scale-110 hover:text-teal-400"
              title={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Gustavo Saavedra. Desarrollado con
          Next.js y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
