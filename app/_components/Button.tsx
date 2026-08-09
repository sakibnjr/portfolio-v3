import Link from "next/link";

interface ButtonProps {
  text: string;
  type?: "primary" | "secondary" | "link" | string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({
  text,
  type = "primary",
  href,
  target,
  rel,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center relative group overflow-hidden rounded-full px-9 py-4 font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300";

  const primaryStyles =
    "text-white bg-black border border-neutral-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_-4px_rgba(0,0,0,0.3)] hover:bg-neutral-900 hover:border-neutral-700 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_12px_24px_-4px_rgba(0,0,0,0.4)]";

  const secondaryStyles =
    "text-gray-900 bg-white/40 backdrop-blur-xl backdrop-saturate-180 border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/65 hover:border-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_8px_24px_rgba(0,0,0,0.1)]";

  const linkStyles =
    "text-gray-900 bg-white/60 backdrop-blur-xl border border-gray-300 hover:border-gray-900 hover:bg-white/90 shadow-sm";

  const getVariantStyles = () => {
    if (type === "secondary") return secondaryStyles;
    if (type === "link") return linkStyles;
    return primaryStyles;
  };

  const combinedClasses = `${baseStyles} ${getVariantStyles()} ${className}`.trim();

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {text}
    </span>
  );

  if (href || type === "link") {
    const finalHref = href || "#";
    const isExternal = finalHref.startsWith("http");
    return (
      <Link
        href={finalHref}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={combinedClasses}
      >
        {content}
      </Link>
    );
  }

  return <button className={combinedClasses}>{content}</button>;
}
