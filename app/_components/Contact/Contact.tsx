import SectionHeader from "@/app/_components/SectionHeader";
import ContactInfo from "@/app/_components/Contact/ContactInfo";
import ContactForm from "@/app/_components/Contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <SectionHeader
        badge="CONTACT"
        title="Let's build something"
        highlightedTitle="great together"
        description=""
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
