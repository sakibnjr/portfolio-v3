interface SectionHeaderProps {
  badge?: string;
  number?: string;
  title: string;
  highlightedTitle?: string;
  suffix?: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  highlightedTitle,
  suffix,
  description,
  className = "mb-12 sm:mb-16",
  action,
  align = "left",
}: SectionHeaderProps) {
  const cleanBadge = badge
    ? badge.startsWith("//")
      ? badge.replace(/^\/\/\s*/, "")
      : badge
    : undefined;

  const headingText = [title, highlightedTitle, suffix]
    .filter(Boolean)
    .join(" ");

  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "sm:flex-row sm:items-end justify-between"
      } gap-6 w-full ${className}`}
    >
      <div className={`flex flex-col gap-3 sm:gap-4 w-full ${isCenter ? "items-center text-center" : ""}`}>
        {cleanBadge && (
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold">
            &#47;&#47; {cleanBadge}
          </p>
        )}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] w-full ${
            isCenter ? "text-center" : ""
          }`}
        >
          {headingText}
        </h2>
        {description && (
          <p
            className={`text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl ${
              isCenter ? "text-center mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
