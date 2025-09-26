import { Mail, Github, Linkedin, Phone, FileText } from "lucide-react";

const contacts = [
  {
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/GGustavoSaavedra",
    color: "text-gray-800",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/gustavo-gabriel-saavedra/",
    color: "text-blue-700",
  },
  {
    label: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:gustavo9418@gmail.com",
    color: "text-blue-600",
  },
  {
    label: "WhatsApp",
    icon: <Phone className="w-5 h-5" />,
    href: "https://wa.me/543854966864",
    color: "text-green-600",
  },
];

export default function ContactAndFooter() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-16 px-4 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Charlamos?</h2>
        <p className="mb-6 text-gray-600">
          Si te interesa contactarme o conocer más sobre mi perfil, podés
          descargar mi CV o escribirme directamente.
        </p>

        <div className="mb-8">
          <a
            href="https://drive.google.com/file/d/1vPAcnmn7dcC2imEZYGXHd1Z4KXe89gd3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition"
          >
            <FileText className="w-4 h-4" />
            Ver CV
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {contacts.map(({ label, icon, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition ${color}`}
              title={label}
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Gustavo Saavedra. Desarrollado con
          Next.js y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
