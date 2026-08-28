import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero/Hero";
import Education from "@/app/_components/Education/Education";
import Certifications from "@/app/_components/Certifications/Certifications";
import Skills from "@/app/_components/Skills/Skills";
import Projects from "@/app/_components/Projects/Projects";
import Contact from "@/app/_components/Contact/Contact";
import Footer from "@/app/_components/Footer";
import BackToTop from "@/app/_components/BackToTop";

export default function Home() {
  return (
    <main className="max-w-7xl md:w-4/5 mx-auto px-4 md:px-0">
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="flex-1 flex items-center">
          <Hero />
        </div>
      </div>

      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
