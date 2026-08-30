interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  className?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  badge,
  title,
  highlightedTitle,
  description,
  className = "mb-12 sm:mb-16",
  action,
}: SectionHeaderProps) {
  const cleanBadge = badge.startsWith("//")
    ? badge.replace(/^\/\/\s*/, "")
    : badge;

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 ${className}`}
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-semibold">
          &#47;&#47; {cleanBadge}
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900">
          {title} {highlightedTitle}
        </h2>
        {description ? (
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
