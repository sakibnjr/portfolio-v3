import Button from "@/app/_components/Button";
import About from "@/app/_pages/_sections/About";
import Experience from "@/app/_pages/_sections/Experience";
import Hero from "@/app/_pages/_sections/Hero";
import Project from "@/app/_pages/_sections/Project";
import Skills from "@/app/_pages/_sections/Skills";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />

      <About />

      <Project />

      <Experience />

      <Skills />

      <section id="contact" className="pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-widest text-blue-600">Contact</p>

          <h2 className="text-6xl font-bold mt-6">
            Let&apos;s Build Something Amazing.
          </h2>

          <p className="mt-8 text-xl text-gray-600">
            Have a project in mind? I&apos;d love to hear about it.
          </p>

          <Button text="Get In Touch" type="primary" className="mt-10" />
        </div>
      </section>
    </main>
  );
}
