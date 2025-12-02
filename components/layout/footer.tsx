import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-6 text-xs text-slate-400">
      <Container className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Gustavo Saavedra.</p>
        <p className="flex gap-4">
          <a
            href="https://github.com/GGustavoSaavedra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-gabriel-saavedra/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </Container>
    </footer>
  );
}
