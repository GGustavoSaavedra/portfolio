import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 max-w-7xl mx-auto">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
