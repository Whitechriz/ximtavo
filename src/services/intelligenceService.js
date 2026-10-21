
const GNEWS_API_URL = "https://gnews.io/api/v4/search";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const INTELLIGENCE_CATEGORIES = [
  "All",
  "Technology & AI",
  "Telecommunications",
  "Finance & Markets",
  "African Business",
  "Cybersecurity",
  "Digital Policy",
];

const CATEGORY_QUERIES = {
  All: 'technology OR finance OR business OR cybersecurity OR telecommunications OR "artificial intelligence"',
  "Technology & AI":
    'technology OR "artificial intelligence" OR AI',
  Telecommunications:
    'telecommunications OR 5G OR mobile networks',
  "Finance & Markets":
    'finance OR markets OR fintech OR banking',
  "African Business":
    'Africa AND (business OR economy OR startups OR investment)',
  Cybersecurity:
    'cybersecurity OR "data breach" OR ransomware',
  "Digital Policy":
    '"digital policy" OR "data protection" OR "technology regulation"',
};

export async function fetchIntelligence({
  category = "All",
  limit = 10,
  signal,
} = {}) {
  if (!API_KEY) {
    throw new Error(
      "Missing GNews API key. Add VITE_GNEWS_API_KEY to your .env file and restart Vite."
    );
  }

  const params = new URLSearchParams({
    q: CATEGORY_QUERIES[category] || CATEGORY_QUERIES.All,
    lang: "en",
    max: String(Math.min(Math.max(Number(limit) || 10, 1), 10)),
    sortby: "publishedAt",
    apikey: API_KEY,
  });

  const response = await fetch(
    `${GNEWS_API_URL}?${params.toString()}`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
      signal,
    }
  );

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error(
        "GNews rejected the API key or access. Check your key and plan."
      );
    }

    if (response.status === 429) {
      throw new Error(
        "GNews request limit reached. Please try again later."
      );
    }

    throw new Error(
      `GNews request failed (${response.status}).`
    );
  }

  const result = await response.json();

  if (!Array.isArray(result.articles)) {
    throw new Error("GNews returned an invalid article response.");
  }

  const seen = new Set();

  return result.articles
    .filter((article) => {
      if (!article?.title || !article?.url) return false;

      if (seen.has(article.url)) return false;
      seen.add(article.url);

      return true;
    })
    .map((article, index) => ({
      id: article.url || `${article.title}-${index}`,
      title: article.title,
      summary: article.description || "",
      category,
      publisher: article.source?.name || "Original publisher",
      publishedAt: article.publishedAt || null,
      url: article.url,
      imageUrl: article.image || null,
    }));
}

export function filterIntelligenceStories(
  stories,
  category = "All"
) {
  if (category === "All") return stories;

  return stories.filter(
    (story) => story.category === category
  );
}

export function formatIntelligenceDate(date) {
  if (!date) return "Date unavailable";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsed);
}
