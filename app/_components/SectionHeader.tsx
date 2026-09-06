interface SectionHeaderProps {
  badge?: string;
  number?: string;
  title: string;
  highlightedTitle?: string;
  suffix?: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  title,
  highlightedTitle,
  suffix,
  description,
  className = "mb-12 sm:mb-16",
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 pb-6 border-b border-neutral-200/50 ${className}`}
    >
      {/* Left: Heading */}
      <div className="flex-1 max-w-xl lg:max-w-2xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
          {title}{" "}
          {highlightedTitle ? (
            <span className="text-emerald-600 font-serif italic">
              {highlightedTitle}
            </span>
          ) : null}
          {suffix ? ` ${suffix}` : null}
        </h2>
      </div>

      {/* Right: Description with accent border */}
      {description || action ? (
        <div className="flex-1 md:max-w-md lg:max-w-lg flex flex-col gap-3 md:pl-6 md:border-l-2 md:border-emerald-500/40">
          {description ? (
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          ) : null}
          {action ? <div className="pt-1">{action}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
