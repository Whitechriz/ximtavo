
import { ArrowUpRight, Clock3, Newspaper } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { formatIntelligenceDate } from "../../services/intelligenceService";

export default function IntelligenceCard({ story, featured = false }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-white/10 bg-[#111820] hover:border-[#ff6a00]/60"
          : "border-black/10 bg-white shadow-sm hover:border-[#ff6a00]/60 hover:shadow-lg"
      } ${featured ? "lg:flex-row" : ""}`}
    >
      {story.imageUrl && (
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${story.title}`}
          className={`block overflow-hidden ${
            isDark ? "bg-[#1b2631]" : "bg-gray-100"
          } ${featured ? "lg:w-[44%] lg:shrink-0" : ""}`}
        >
          <img
            src={story.imageUrl}
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className={`h-52 w-full object-cover transition duration-500 group-hover:scale-105 ${
              featured ? "lg:h-full lg:min-h-[300px]" : ""
            }`}
            onError={(event) => {
              event.currentTarget.parentElement.style.display = "none";
            }}
          />
        </a>
      )}

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-3 py-1 text-xs font-medium text-[#ff8a36]">
            {story.category}
          </span>

          <span
            className={`flex items-center gap-1 text-xs ${
              isDark ? "text-slate-400" : "text-gray-500"
            }`}
          >
            <Clock3 size={13} />
            {formatIntelligenceDate(story.publishedAt)}
          </span>
        </div>

        <h3
          className={`font-semibold leading-snug transition-colors group-hover:text-[#ff8a36] ${
            isDark ? "text-white" : "text-gray-950"
          } ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}
        >
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]"
          >
            {story.title}
          </a>
        </h3>

        {story.summary && (
          <p
            className={`mt-3 line-clamp-3 text-sm leading-7 ${
              isDark ? "text-slate-400" : "text-gray-600"
            }`}
          >
            {story.summary}
          </p>
        )}

        <div
          className={`mt-auto flex items-end justify-between gap-3 border-t pt-5 mt-6 ${
            isDark ? "border-white/10" : "border-black/10"
          }`}
        >
          <div
            className={`flex min-w-0 items-center gap-2 text-xs ${
              isDark ? "text-slate-400" : "text-gray-500"
            }`}
          >
            <Newspaper size={15} className="shrink-0 text-[#ff6a00]" />
            <span className="truncate">{story.publisher}</span>
          </div>

          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#ff8a36] transition hover:text-[#ff6a00]"
          >
            Read story <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
