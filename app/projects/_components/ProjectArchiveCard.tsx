import { type Project } from "@/app/_types";

interface ProjectArchiveCardProps {
  project: Project;
  index: number;
}

export default function ProjectArchiveCard({
  project,
  index,
}: ProjectArchiveCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const liveUrl = project.live_url || project.liveUrl;
  const hasLiveUrl = !!liveUrl && liveUrl !== "#";
  const githubUrl = project.github_url || project.githubUrl;
  const hasGithubUrl = !!githubUrl && githubUrl !== "#";

  return (
    <div className="group relative rounded-[1.75rem] border border-neutral-800/90 bg-[#0d0f15] p-6 flex flex-col justify-between overflow-hidden hover:border-neutral-700/90 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-950/80 to-[#0c0d12] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Card Header: Number & Category */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold text-emerald-400">
            #{number}
          </span>
          <div className="flex items-center gap-1.5">
            {project.featured && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300">
                Featured
              </span>
            )}
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h2>
          {project.tagline && (
            <p className="text-xs font-mono text-neutral-400 mt-0.5">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-neutral-900/90 border border-neutral-700/50 text-[11px] font-mono text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Actions Footer */}
      <div className="relative z-10 flex items-center gap-2.5 pt-5 mt-4 border-t border-neutral-800/80">
        {hasLiveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-semibold transition-colors shadow-2xs"
          >
            <span>View Live</span>
            <span>→</span>
          </a>
        )}

        {hasGithubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/70 text-xs font-medium transition-colors"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
