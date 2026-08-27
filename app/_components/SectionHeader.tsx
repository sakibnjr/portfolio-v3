interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlightedTitle,
  description,
  className = "mb-16",
}: SectionHeaderProps) {
  const cleanBadge = badge.startsWith("//")
    ? badge.replace(/^\/\/\s*/, "")
    : badge;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-semibold">
        &#47;&#47; {cleanBadge}
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
        {title} {highlightedTitle}
      </h2>
      <p className="text-neutral-500 text-sm sm:text-base max-w-xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}
