export default function handler(req, res) {
  res.status(200).json({
    name: "OpenCast Feed Engine",
    description: "A JSON-driven podcast feed generator that outputs a fully standards-compliant RSS feed.",
    version: "1.0.0",
    endpoints: {
      rss: "/api/rss",
      apiRoot: "/api",
      health: "/api/health",
      docs: "/docs"
    },
    author: "Eric Kouassi"
  });
}
