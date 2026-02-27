export default function handler(req, res) {
  res.status(200).json({
    name: "OpenCast Feed Engine",
    description: "A JSON-driven podcast feed generator that outputs a fully standards-compliant RSS feed.",
    version: "1.0.0",
    endpoints: {
      rss: "/api/rss",
      apiRoot: "/api",
      health: "/api/health"
    },
    docs: "https://open-cast-feed-json-2-rss.vercel.app//docs",
    author: "Eric Kouassi",
    message: "Welcome to the OpenCast Feed Engine root endpoint."
  });
}
