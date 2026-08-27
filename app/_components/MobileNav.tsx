"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { HiXMark } from "react-icons/hi2";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  activeSection: string;
}

export default function MobileNav({ isOpen, onClose, navLinks, activeSection }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs h-dvh bg-white p-6 shadow-2xl flex flex-col justify-between z-10"
            aria-label="Mobile Navigation"
          >
            <div>
              <header className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Link href="#home" onClick={onClose} className="text-xl font-bold tracking-tight">SN</Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-black focus:outline-none rounded-lg transition-colors cursor-pointer"
                  aria-label="Close mobile menu"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </header>

              <nav aria-label="Mobile menu links" className="mt-6">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.2 }}
                    >
                      <Link
                        href={`#${link.href}`}
                        onClick={onClose}
                        className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          activeSection === link.href ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100 hover:text-black"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            <motion.footer
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.2 }}
              className="pt-6 border-t border-gray-100"
            >
              <Link
                href="#contact"
                onClick={onClose}
                className="flex items-center justify-center w-full bg-black text-white px-4 py-3 rounded-xl text-base font-medium hover:bg-gray-800 transition-colors shadow-sm"
              >
                Hire Me
              </Link>
            </motion.footer>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
