import Link from "next/link";
import { getGitHubData } from "@/app/_lib/github";
import FireAnimation from "@/app/_components/Skills/FireAnimation";

export default async function StreakCard() {
  const data = await getGitHubData("sakibnjr");

  return (
    <div className="h-full bg-[#121319] border border-neutral-800/80 rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between text-white shadow-xl shadow-black/10">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-orange-400/90 font-medium">LIVE // GITHUB</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white mb-1.5">
          GitHub Streak
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
          Real-time activity and open-source contributions tracking.
        </p>

        <div className="flex flex-col items-center justify-center py-4 bg-neutral-900/60 border border-neutral-800/80 rounded-2xl mb-5">
          <div className="mb-1">
            <FireAnimation />
          </div>
          <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-1">
            {data.streak}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-1">
            DAY STREAK
          </span>
          <Link
            href="https://github.com/sakibnjr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            github.com/sakibnjr
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="flex flex-col gap-1 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/60">
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-semibold">
            PUBLIC REPOS
          </span>
          <span className="text-2xl font-bold text-white">{data.publicRepos}</span>
        </div>

        <div className="flex flex-col gap-1 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800/60">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
            CONTRIBUTIONS
          </span>
          <span className="text-2xl font-bold text-white">{data.totalContributions}</span>
        </div>
      </div>
    </div>
  );
}
