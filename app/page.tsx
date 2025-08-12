import About from "@/components/About";
import ContactAndFooter from "@/components/ContactAndFooter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactAndFooter />
    </main>
  );
}
