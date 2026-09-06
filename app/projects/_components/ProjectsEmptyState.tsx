interface ProjectsEmptyStateProps {
  onReset: () => void;
}

export default function ProjectsEmptyState({
  onReset,
}: ProjectsEmptyStateProps) {
  return (
    <div className="min-h-[280px] rounded-3xl border border-neutral-200/80 bg-neutral-50/50 flex flex-col items-center justify-center p-8 text-center gap-3">
      <p className="text-neutral-700 font-semibold">No projects found</p>
      <p className="text-xs text-neutral-500 max-w-sm">
        We couldn&apos;t find any projects matching your current search or category filter.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 text-xs font-medium px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-all cursor-pointer"
      >
        Reset Filters
      </button>
    </div>
  );
}
