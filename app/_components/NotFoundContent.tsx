"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { LuArrowLeft, LuHouse, LuFolderGit2, LuMail, LuCompass } from "react-icons/lu";

const quickLinks = [
  { label: "Home", href: "/", icon: LuHouse },
  { label: "Projects", href: "/#projects", icon: LuFolderGit2 },
  { label: "Contact", href: "/#contact", icon: LuMail },
];

export default function NotFoundContent() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between max-w-7xl md:w-4/5 mx-auto px-4 md:px-0">
      {/* Top Navigation */}
      <header className="py-6 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          SN
        </Link>
        <Link
          href="/"
          className="text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 border border-neutral-200/80 px-3.5 py-1.5 rounded-xl hover:bg-neutral-100/60 transition-all shadow-xs"
        >
          Back to Portfolio
        </Link>
      </header>

      {/* Main 404 Hero Section */}
      <main className="flex-1 flex items-center justify-center py-12 sm:py-16">
        <div className="w-full max-w-2xl text-center flex flex-col items-center">
          {/* Monospace Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono text-emerald-700 mb-6 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold">&#47;&#47; ERROR 404</span>
          </motion.div>

          {/* Large 404 Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-4 select-none"
          >
            <span className="text-8xl sm:text-9xl font-extrabold tracking-tighter text-neutral-900/90 font-mono">
              404
            </span>
            <div className="absolute -inset-4 -z-10 bg-radial from-emerald-100/60 via-transparent to-transparent blur-2xl opacity-70 pointer-events-none" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-3"
          >
            Lost in Cyberspace?
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-neutral-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8"
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-10"
          >
            <button
              type="button"
              onClick={handleGoBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-6 py-3 rounded-2xl transition-all cursor-pointer shadow-xs text-sm"
            >
              <LuArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-medium px-6 py-3 rounded-2xl transition-all cursor-pointer shadow-xs text-sm"
            >
              <LuHouse className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </motion.div>

          {/* Quick Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-md p-4 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
              <LuCompass className="w-3.5 h-3.5" />
              <span>Quick Navigation</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-neutral-200/70 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 text-xs font-medium transition-all shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500">
          <Link
            href="/"
            className="tracking-tight text-neutral-900 text-base hover:opacity-80 transition-opacity"
          >
            sakibnjr<span className="text-emerald-500 font-mono">.tech</span>
          </Link>

          <p className="font-mono text-xs text-neutral-400 text-center">
            &copy; {new Date().getFullYear()} Md. Najmus Sakib Nahid
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Open to work</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
