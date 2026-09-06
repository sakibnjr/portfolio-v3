import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

export default function ProjectsHeader() {
  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      {/* Top Banner / Breadcrumb */}
      <div className="flex items-center justify-between gap-3 py-2 border-b border-neutral-200/80">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <HiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        <Link
          href="https://github.com/sakibnjr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
        >
          <span>Explore Sakib&apos;s GitHub</span>
          <span>↗</span>
        </Link>
      </div>

      {/* Page Title Section */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
          Projects &amp;{" "}
          <span className="text-emerald-600 font-serif italic">Works</span>
        </h1>

        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
          A collection of web apps, open-source repositories, and side projects I have built.
        </p>
      </div>
    </div>
  );
}
