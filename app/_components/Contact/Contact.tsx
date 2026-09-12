"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeader from "@/app/_components/SectionHeader";
import ContactInfo from "@/app/_components/Contact/ContactInfo";
import ContactForm from "@/app/_components/Contact/ContactForm";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-20 lg:py-24 scroll-mt-12 md:scroll-mt-16"
    >
      <div className="max-w-7xl md:w-4/5 mx-auto px-4 md:px-0 flex flex-col items-center">
        <SectionHeader
          title="Let's build something"
          highlightedTitle="great"
          suffix="together"
          description="Have a project in mind, an opportunity, or just want to connect? Let's talk."
          align="center"
          className="mb-6 sm:mb-8"
        />

        <div className="max-w-xl w-full mx-auto">
          <ContactInfo onOpenForm={() => setIsModalOpen(true)} />
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
              role="dialog"
              aria-modal="true"
              aria-label="Contact form modal"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 26, stiffness: 280 }}
                className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl shadow-black/50"
              >
                <ContactForm onClose={() => setIsModalOpen(false)} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
