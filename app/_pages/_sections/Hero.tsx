import Image from "next/image";
import UserImage from "@/public/Nahid.jpg";
import { TechMarquee } from "@/app/_components/TechMarquee";
import Button from "@/app/_components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-20"
    >
      <div className="w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 space-y-7">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-gray-500">
            Software Engineer • Frontend Specialist • Problem Solver
          </p>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-gray-900">
            Sakib Nahid.
          </h1>

          <div className="space-y-3 max-w-2xl">
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-normal">
              CSE Graduate &mdash; Full Stack Developer building modern web apps
              with React, Next.js &amp; Node.js. Focused on clean code, great
              UX, and shipping products that matter.
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-wide pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
              Expert at
            </p>
            <TechMarquee />
          </div>

          <div className="flex flex-wrap gap-4 pt-3">
            <Button text="Explore My Work" type="primary" href="#projects" />
            <Button
              text="Download Resume"
              type="secondary"
              href="/nahid.pdf"
              target="_blank"
            />
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full aspect-[4/5] min-h-[460px] lg:min-h-[560px] shadow-xl rounded-3xl overflow-hidden border border-gray-100">
          <Image
            src={UserImage}
            priority
            quality={80}
            placeholder="blur"
            alt="Sakib Nahid"
            fill
            sizes="auto"
            className="object-cover "
          />
        </div>
      </div>
    </section>
  );
}
