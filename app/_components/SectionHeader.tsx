interface SectionHeaderProps {
  count: string;
  title: string;
  subTitle: string;
}

export default function SectionHeader({
  count,
  subTitle,
  title,
}: SectionHeaderProps) {
  return (
    <header className="mb-20">
      <p className="uppercase tracking-widest text-blue-600">
        <span className="border rounded-full p-2">{count}</span> {subTitle}
      </p>

      <h2 className="text-5xl font-bold mt-4 flex items-center gap-6 after:content-[''] after:h-px after:bg-gray-200 after:flex-1">
        {title}
      </h2>
    </header>
  );
}
