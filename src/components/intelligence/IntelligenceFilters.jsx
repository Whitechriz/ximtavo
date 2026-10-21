
import { INTELLIGENCE_CATEGORIES } from "../../services/intelligenceService";
import { useTheme } from "../../context/ThemeContext";

export default function IntelligenceFilters({
  activeCategory,
  onCategoryChange,
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="flex gap-2 overflow-x-auto pb-3"
      aria-label="Filter intelligence stories by category"
    >
      {INTELLIGENCE_CATEGORIES.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={active}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] ${
              active
                ? "border-[#ff6a00] bg-[#ff6a00] text-white"
                : isDark
                  ? "border-white/10 bg-white/[0.03] text-slate-300 hover:border-[#ff6a00]/50 hover:text-white"
                  : "border-black/10 bg-white text-gray-700 hover:border-[#ff6a00]/50 hover:text-[#ff6a00]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
