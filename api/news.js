
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "News API configuration is missing",
    });
  }

  try {
    const query =
      'technology OR finance OR business OR cybersecurity OR telecommunications OR "artificial intelligence"';

    const url = new URL("https://gnews.io/api/v4/search");
    url.searchParams.set("q", query);
    url.searchParams.set("lang", "en");
    url.searchParams.set("max", "3");
    url.searchParams.set("sortby", "publishedAt");
    url.searchParams.set("apikey", apiKey);

    const response = await fetch(url);

    if (!response.ok) {
      console.error("GNews API status:", response.status);

      return res.status(502).json({
        error: "Unable to retrieve news",
      });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("News request failed:", error);

    return res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
}
