
const GNEWS_API_URL = "/api/news";

export const INTELLIGENCE_CATEGORIES = [
  "All",
  "Technology & AI",
  "Telecommunications",
  "Finance & Markets",
  "African Business",
  "Cybersecurity",
  "Digital Policy",
];

export async function fetchIntelligence({
  category = "All",
  limit = 10,
  signal,
} = {}) {
  const params = new URLSearchParams({
    category,
    limit: String(
      Math.min(Math.max(Number(limit) || 10, 1), 10)
    ),
  });

  const response = await fetch(
    `${GNEWS_API_URL}?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal,
    }
  );

  if (!response.ok) {
    let message = `News request failed (${response.status}).`;

    try {
      const errorData = await response.json();

      if (errorData?.error) {
        message = errorData.error;
      }
    } catch {
      // Keep the default error message.
    }

    throw new Error(message);
  }

  const result = await response.json();

  if (!Array.isArray(result.articles)) {
    throw new Error(
      "The news service returned an invalid article response."
    );
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
