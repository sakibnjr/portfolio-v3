import TextReveal from "@/app/_components/TextReveal";
import Certifications from "@/app/_pages/_sections/Certifications";
import Education from "@/app/_pages/_sections/Education";

export default function About() {
  return (
    <section id="about" className="space-y-20">
      <TextReveal text="I design and engineer software at the intersection of performance, modern design, and scalable architecture. Driven by curiosity and craft, I focus on building high-impact web applications with clean code, intuitive interactions, and uncompromising attention to detail." />

      <Education />

      <Certifications />
    </section>
  );
}
