import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 max-w-7xl mx-auto">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
