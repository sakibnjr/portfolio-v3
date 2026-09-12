"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollPosition >= documentHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      if (scrollPosition < 80) {
        setActiveSection(sectionIds[0]);
        return;
      }

      const triggerPoint = windowHeight * 0.7;

      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds.join(",")]);

  return activeSection;
}
