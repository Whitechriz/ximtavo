
const CATEGORY_QUERIES = {
  All: 'technology OR finance OR business OR cybersecurity OR telecommunications OR "artificial intelligence"',
  "Technology & AI":
    'technology OR "artificial intelligence" OR AI',
  Telecommunications:
    "telecommunications OR 5G OR mobile networks",
  "Finance & Markets":
    "finance OR markets OR fintech OR banking",
  "African Business":
    "Africa AND (business OR economy OR startups OR investment)",
  Cybersecurity:
    'cybersecurity OR "data breach" OR ransomware',
  "Digital Policy":
    '"digital policy" OR "data protection" OR "technology regulation"',
};

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "s-maxage=300, stale-while-revalidate=600"
  );

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    console.error("GNEWS_API_KEY is not configured");

    return res.status(500).json({
      error: "News service is not configured.",
    });
  }

  try {
    const requestUrl = new URL(
      req.url,
      "http://localhost"
    );

    const requestedCategory =
      requestUrl.searchParams.get("category") || "All";

    const category = Object.hasOwn(
      CATEGORY_QUERIES,
      requestedCategory
    )
      ? requestedCategory
      : "All";

    const requestedLimit = Number(
      requestUrl.searchParams.get("limit") || 10
    );

    const limit = Math.min(
      Math.max(
        Number.isFinite(requestedLimit)
          ? Math.floor(requestedLimit)
          : 10,
        1
      ),
      10
    );

    const params = new URLSearchParams({
      q: CATEGORY_QUERIES[category],
      lang: "en",
      max: String(limit),
      sortby: "publishedAt",
      apikey: apiKey,
    });

    const response = await fetch(
      `https://gnews.io/api/v4/search?${params.toString()}`
    );

    if (!response.ok) {
      console.error(
        "GNews returned status:",
        response.status
      );

      if (
        response.status === 401 ||
        response.status === 403
      ) {
        return res.status(502).json({
          error:
            "News provider rejected the API key or access.",
        });
      }

      if (response.status === 429) {
        return res.status(503).json({
          error:
            "News request limit reached. Try again later.",
        });
      }

      return res.status(502).json({
        error:
          "The news provider could not fulfill the request.",
      });
    }

    const data = await response.json();

    if (!Array.isArray(data.articles)) {
      return res.status(502).json({
        error:
          "The news provider returned an invalid response.",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("News API error:", error);

    return res.status(500).json({
      error: "Unable to retrieve news right now.",
    });
  }
}
