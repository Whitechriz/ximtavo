
import { useEffect, useState } from "react";
import { ArrowLeft, RadioTower, RefreshCw } from "lucide-react";
import IntelligenceCard from "../components/intelligence/IntelligenceCard";
import IntelligenceFilters from "../components/intelligence/IntelligenceFilters";
import { fetchIntelligence } from "../services/intelligenceService";

export default function Insights() {
  const [stories, setStories] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchIntelligence({
          category,
          limit: 30,
          signal: controller.signal,
        });

        setStories(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unable to load insights.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [category]);

  return (
    <main className="min-h-screen bg-[#0b1118] px-5 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <a
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} /> Back to XimTavo
        </a>

        <header className="mb-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff8a36]">
            <RadioTower size={16} />
            XimTavo Intelligence
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Insights for a{" "}
            <span className="text-[#ff8a36]">changing world.</span>
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Explore developments in technology, finance, African business,
            telecommunications and digital policy.
          </p>
        </header>

        <div className="mb-8">
          <IntelligenceFilters
            activeCategory={category}
            onCategoryChange={setCategory}
          />
        </div>

        {loading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-72 animate-pulse rounded-2xl border border-white/10 bg-white/[0.04]"
              />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-white/10 p-8 text-center">
            <p className="text-slate-300">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#ff9a55]"
            >
              <RefreshCw size={15} /> Try again
            </button>
          </div>
        ) : stories.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-10 text-center">
            <p className="text-lg font-medium">No published stories yet</p>
            <p className="mt-2 text-sm text-slate-400">
              Please check back later for the latest updates.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-5 text-sm text-slate-400">
              {stories.length} {stories.length === 1 ? "story" : "stories"}
            </p>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story) => (
                <IntelligenceCard key={story.id} story={story} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
