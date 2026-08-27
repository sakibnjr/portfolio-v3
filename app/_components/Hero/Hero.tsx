import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import userImage from "@/public/Nahid.jpg";
import SkillMarquee from "@/app/_components/Hero/SkillMarquee";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12 lg:gap-16 min-h-[calc(100vh-6rem)] py-8"
    >
      <div className="flex flex-col gap-6 max-w-2xl overflow-hidden">
        <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
          SOFTWARE ENGINEER • FRONTEND ADDICTIVE • PROBLEM SOLVER
        </p>

        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-900 leading-[1.05]">
          Md. Najmus Sakib Nahid.
        </h2>

        <h1 className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal">
          CSE Graduate — Full Stack Developer building modern web apps with
          React, Next.js &amp; Node.js. Focused on clean code, great UX, and
          shipping products that matter.
        </h1>

        <p className="flex items-center gap-1.5 text-sm font-medium text-neutral-500">
          <HiLocationMarker className="w-4 h-4 text-red-500" />
          <span>Dhaka, Bangladesh</span>
        </p>

        <div className="flex flex-col gap-3 overflow-hidden">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            EXPERT AT
          </p>
          <SkillMarquee />
        </div>

        <nav
          aria-label="Hero actions"
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full"
        >
          <button className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white font-medium px-7 py-3.5 rounded-2xl transition-all cursor-pointer shadow-xs text-center">
            Explore My Work
          </button>
          <button className="w-full sm:w-auto border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-medium px-7 py-3.5 rounded-2xl transition-all cursor-pointer text-center">
            Download Resume
          </button>
        </nav>
      </div>

      <div className="hidden lg:flex items-center justify-end">
        <figure className="relative w-full max-w-[460px] lg:max-w-[500px] aspect-[4/4.8] rounded-[2.5rem] overflow-hidden shadow-xs">
          <Image
            src={userImage}
            alt="Sakib Nahid"
            fill
            className="object-cover"
            placeholder="blur"
            priority
            sizes="(max-width: 1024px) 100vw, 500px"
          />
        </figure>
      </div>
    </section>
  );
}
