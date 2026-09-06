import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

export type TabType = "other" | "featured" | "all";

interface ProjectsFilterBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  otherCount: number;
  featuredCount: number;
  allCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  totalFiltered: number;
  totalInTab: number;
  onResetFilters: () => void;
}

export default function ProjectsFilterBar({
  activeTab,
  onTabChange,
  otherCount,
  featuredCount,
  allCount,
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  totalFiltered,
  totalInTab,
  onResetFilters,
}: ProjectsFilterBarProps) {
  const hasActiveFilters = !!searchQuery || selectedCategory !== "all";

  return (
    <div className="flex flex-col gap-3">
      {/* Top Controls: Tabs and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Tab Selector */}
        <div className="inline-flex p-1 rounded-xl bg-neutral-100 border border-neutral-200/80 self-start">
          <button
            type="button"
            onClick={() => onTabChange("other")}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "other"
                ? "bg-white text-neutral-900 shadow-2xs font-semibold"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Other ({otherCount})
          </button>
          <button
            type="button"
            onClick={() => onTabChange("featured")}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "featured"
                ? "bg-white text-neutral-900 shadow-2xs font-semibold"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Featured ({featuredCount})
          </button>
          <button
            type="button"
            onClick={() => onTabChange("all")}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-white text-neutral-900 shadow-2xs font-semibold"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            All ({allCount})
          </button>
        </div>

        {/* Search Box */}
        <div className="relative w-full sm:w-72">
          <HiMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search title, stack, keyword..."
            className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-white rounded-xl border border-neutral-200/90 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200/50 placeholder:text-neutral-400 transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5 cursor-pointer"
            >
              <HiXMark className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Chips */}
      {categories.length > 0 && (
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs no-scrollbar">
          <span className="text-neutral-400 font-mono text-[11px] mr-1 select-none shrink-0">
            Category:
          </span>
          <button
            type="button"
            onClick={() => onCategoryChange("all")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === "all"
                ? "bg-neutral-900 text-white shadow-2xs font-semibold"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? "bg-neutral-900 text-white shadow-2xs font-semibold"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Results Indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-0.5">
        <span>
          Showing {totalFiltered} of {totalInTab} projects
        </span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-emerald-600 hover:underline cursor-pointer font-medium"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
