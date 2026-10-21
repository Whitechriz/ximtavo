
import { useEffect, useState } from "react";
import {
  ArrowRight,
  RadioTower,
  RefreshCw,
  Newspaper,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import IntelligenceCard from "./IntelligenceCard";
import IntelligenceFilters from "./IntelligenceFilters";
import { fetchIntelligence } from "../../services/intelligenceService";

export default function XimTavoIntelligence() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [stories, setStories] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStories() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchIntelligence({
          category,
          limit: 3,
          signal: controller.signal,
        });

        if (!controller.signal.aborted) {
          setStories(data.slice(0, 3));
        }
      } catch (err) {
        if (
          !controller.signal.aborted &&
          err.name !== "AbortError"
        ) {
          setError(
            err.message || "Unable to load the latest stories."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadStories();

    return () => controller.abort();
  }, [category, retry]);

  const sectionClass = isDark
    ? "bg-[#0b1118] text-white"
    : "bg-[#F5F4F0] text-[#0A0A0A]";

  const mutedText = isDark
    ? "text-slate-400"
    : "text-gray-600";

  const panelClass = isDark
    ? "border-white/10 bg-white/[0.03]"
    : "border-black/10 bg-white";

  return (
    <section
      id="ximtavo-intelligence"
      aria-labelledby="intelligence-heading"
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 lg:py-28 ${sectionClass}`}
    >
      {isDark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ff6a00]/[0.08] blur-3xl"
        />
      )}

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff8a36]">
              <RadioTower size={16} />
              XimTavo Intelligence
            </div>

            <h2
              id="intelligence-heading"
              className="text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Signals shaping{" "}
              <span className="font-semibold text-[#ff8a36]">
                tomorrow.
              </span>
            </h2>

            <p className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${mutedText}`}>
              Stay informed on technology, finance and African
              business developments shaping the digital economy.
            </p>
          </div>

          <a
            href="/insights"
            className="inline-flex w-fit items-center gap-2 border-b border-[#ff6a00] pb-2 text-sm font-medium transition hover:text-[#ff8a36]"
          >
            Explore all insights <ArrowRight size={17} />
          </a>
        </div>

        <div className="mb-8">
          <IntelligenceFilters
            activeCategory={category}
            onCategoryChange={setCategory}
          />
        </div>

        {loading ? (
          <div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            aria-label="Loading news stories"
            aria-busy="true"
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`overflow-hidden rounded-2xl border ${panelClass}`}
              >
                <div className={`h-52 animate-pulse ${isDark ? "bg-white/[0.06]" : "bg-gray-200"}`} />
                <div className="space-y-4 p-6">
                  <div className={`h-4 w-28 animate-pulse rounded ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
                  <div className={`h-6 w-full animate-pulse rounded ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
                  <div className={`h-4 w-4/5 animate-pulse rounded ${isDark ? "bg-white/10" : "bg-gray-200"}`} />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className={`rounded-2xl border px-6 py-12 text-center ${panelClass}`}>
            <p className="font-medium text-[#ff8a36]">
              Unable to load intelligence
            </p>
            <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
              {error}
            </p>

            <button
              type="button"
              onClick={() => setRetry((value) => value + 1)}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#ff6a00] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#e85f00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff6a00]"
            >
              <RefreshCw size={15} />
              Try again
            </button>
          </div>
        ) : stories.length === 0 ? (
          <div className={`rounded-2xl border px-6 py-12 text-center ${panelClass}`}>
            <Newspaper
              size={30}
              className="mx-auto text-[#ff8a36]"
            />
            <p className="mt-4 text-lg font-medium">
              No stories available yet
            </p>
            <p className={`mt-2 text-sm ${mutedText}`}>
              Try another category or check back later.
            </p>
          </div>
        ) : (
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <IntelligenceCard
                key={story.id}
                story={story}
              />
            ))}
          </div>
        )}

        <div className={`mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-5 ${isDark ? "border-white/10" : "border-black/10"}`}>
          <p className={`text-xs leading-5 ${mutedText}`}>
            Articles link to their original publishers.
          </p>

          <a
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#ff8a36] transition hover:text-[#ff6a00]"
          >
            More stories <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
