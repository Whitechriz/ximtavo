
export const INTELLIGENCE_CATEGORIES = [
  "All",
  "Technology & AI",
  "Telecommunications",
  "Finance & Markets",
  "African Business",
  "Cybersecurity",
  "Digital Policy",
];

const CATEGORY_API_VALUES = {
  All: "all",
  "Technology & AI": "technology",
  Telecommunications: "telecommunications",
  "Finance & Markets": "finance",
  "African Business": "business",
  Cybersecurity: "cybersecurity",
  "Digital Policy": "policy",
};

export async function fetchIntelligence({
  category = "All",
  limit = 10,
  signal,
} = {}) {
  const apiCategory = CATEGORY_API_VALUES[category] || "all";

  const params = new URLSearchParams({
    category: apiCategory,
    limit: String(Math.min(Math.max(Number(limit) || 10, 1), 10)),
  });

  const response = await fetch(`/api/news?${params.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  let result;

  try {
    result = await response.json();
  } catch {
    throw new Error("The news server returned an invalid response.");
  }

  if (!response.ok) {
    throw new Error(
      result.message || `News request failed (${response.status}).`
    );
  }

  if (!Array.isArray(result.articles)) {
    throw new Error("The news server returned an invalid article response.");
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
      summary: article.description || article.content || "",
      category,
      publisher: article.source?.name || "Original publisher",
      publishedAt: article.publishedAt || null,
      url: article.url,
      imageUrl: article.image || null,
    }));
}

export function filterIntelligenceStories(stories, category = "All") {
  if (category === "All") return stories;

  return stories.filter((story) => story.category === category);
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
