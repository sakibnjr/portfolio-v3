"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { useActiveSection } from "@/app/_hooks/useActiveSection";
import MobileNav from "@/app/_components/MobileNav";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Education", href: "education" },
  { label: "Certifications", href: "certifications" },
  { label: "Publications", href: "publications" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const getHref = (href: string) => {
    if (href === "projects" && !isHome) {
      return "/projects";
    }
    return isHome ? `#${href}` : `/#${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200/60 shadow-xs py-2.5 sm:py-3"
          : "bg-transparent py-2 sm:py-4"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl md:w-4/5 mx-auto px-4 md:px-0 flex items-center justify-between"
      >
        <Link
          href={isHome ? "#home" : "/"}
          aria-label="Go to homepage"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          SN
        </Link>

        <ul className="hidden md:flex items-center gap-1 border border-neutral-200/70 p-1.5 rounded-2xl bg-white/60 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]">
          {navLinks.map((link) => {
            const isLinkActive = isHome
              ? activeSection === link.href
              : (link.href === "projects" && pathname.startsWith("/projects"));

            return (
              <li key={link.href}>
                <Link
                  href={getHref(link.href)}
                  className={
                    isLinkActive
                      ? "bg-neutral-900 text-white px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all shadow-xs"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-xl"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            className="bg-neutral-900 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors shadow-xs"
            href={isHome ? "#contact" : "/#contact"}
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-neutral-700 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg transition-colors cursor-pointer"
          aria-label="Open mobile menu"
          aria-expanded={isOpen}
        >
          <HiBars3 className="w-6 h-6" />
        </button>
      </nav>

      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={navLinks.map((link) => ({
          label: link.label,
          href: getHref(link.href),
        }))}
        activeSection={
          isHome
            ? activeSection
            : (pathname.startsWith("/projects") ? "/projects" : "")
        }
        hireMeHref={isHome ? "#contact" : "/#contact"}
        homeHref={isHome ? "#home" : "/"}
      />
    </header>
  );
}
