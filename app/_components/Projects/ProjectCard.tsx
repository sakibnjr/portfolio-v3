import Link from "next/link";
import { type Project } from "@/app/_types";

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}

export default function ProjectCard({
  project,
  index,
  isActive,
  onSelect,
}: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const liveUrl = project.live_url || project.liveUrl || "#";
  const githubUrl =
    project.github_url || project.githubUrl || "https://github.com/sakibnjr";

  return (
    <div
      onClick={onSelect}
      className={`relative min-h-[460px] md:min-h-0 md:h-[520px] rounded-[2rem] overflow-hidden transition-all duration-500 ease-out select-none border border-neutral-800/80 bg-[#0d0f15] w-full ${
        isActive
          ? "md:flex-[3.5] lg:flex-[4] shadow-2xl shadow-black/40 md:min-w-[320px] lg:min-w-[380px]"
          : "md:flex-1 md:min-w-[64px] lg:min-w-[72px] md:hover:border-neutral-700/80 md:opacity-75 md:hover:opacity-100 md:cursor-pointer"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-950/90 to-[#0c0d12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Expanded View: Always open on mobile, open on desktop if active */}
      <div
        className={`relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between text-white ${
          isActive ? "flex" : "flex md:hidden"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold text-emerald-400">
            {number}
          </span>
          <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
            {project.category}
          </span>
        </div>

        <div className="flex flex-col gap-4 max-w-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-neutral-400">{project.tagline}</p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-neutral-900/90 border border-neutral-700/50 text-[11px] font-mono text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Link
              href={liveUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-semibold transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Live</span>
              <span>→</span>
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/70 text-xs font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span>GitHub</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Collapsed Strip: Only on desktop when inactive */}
      {!isActive && (
        <div className="hidden md:flex relative z-10 h-full p-4 sm:p-6 flex-col justify-between items-center text-neutral-400">
          <span className="text-xs font-mono font-medium">{number}</span>
          <div className="[writing-mode:vertical-rl] rotate-180 text-sm font-semibold tracking-wider text-neutral-300 uppercase whitespace-nowrap">
            {project.title}
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
        </div>
      )}
    </div>
  );
}
