
export default async function handler(req, res) {
  // Allow requests from your website
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        message: "GNews API key is not configured on the server.",
      });
    }

    const category = req.query.category || "all";

    const queries = {
      all: "technology OR finance OR business OR cybersecurity OR telecommunications OR artificial intelligence",
      technology: "technology OR artificial intelligence OR innovation",
      telecommunications: "telecommunications OR mobile networks OR 5G",
      finance: "finance OR markets OR banking OR fintech",
      business: "African business OR African economy OR startups",
      cybersecurity: "cybersecurity OR data security OR cyber attacks",
      policy: "digital policy OR technology regulation OR digital economy",
    };

    const query = queries[category] || queries.all;

    const params = new URLSearchParams({
      q: query,
      lang: "en",
      max: "10",
      sortby: "publishedAt",
      apikey: apiKey,
    });

    const response = await fetch(
      `https://gnews.io/api/v4/search?${params.toString()}`
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        message: data.errors?.[0] || "Unable to fetch news from GNews.",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("News API error:", error);

    return res.status(500).json({
      message: "An error occurred while fetching news.",
    });
  }
}
