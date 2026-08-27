import Hero from "@/app/_components/Hero/Hero";
import Education from "@/app/_components/Education/Education";
import Certifications from "@/app/_components/Certifications/Certifications";
import Skills from "@/app/_components/Skills/Skills";
import Projects from "@/app/_components/Projects/Projects";
import Contact from "@/app/_components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
