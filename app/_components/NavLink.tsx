"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const sectionId = href.replace("#", "");

  useEffect(() => {
    if (!sectionId) return;

    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        });
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: 0,
      },
    );

    observer.observe(targetSection);
    return () => observer.disconnect();
  }, [sectionId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`liquid-glass-link ${
        isActive ? "liquid-glass-link--active" : ""
      }`}
    >
      {children}
    </Link>
  );
}
