export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
    <html>
      <head>
        <title>OpenCast Feed Engine — API Docs</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: auto; }
          h1 { color: #333; }
          code { background: #f4f4f4; padding: 3px 6px; border-radius: 4px; }
          pre { background: #f4f4f4; padding: 12px; border-radius: 6px; }
        </style>
      </head>
      <body>
        <h1>OpenCast Feed Engine — API Documentation</h1>
        <p>A lightweight JSON-driven podcast feed generator.</p>

        <h2>Endpoints</h2>
        <ul>
          <li><code>/api/rss</code> — Generates the RSS feed</li>
          <li><code>/api</code> — API root</li>
          <li><code>/api/health</code> — Health check</li>
        </ul>

        <h2>Feed Structure</h2>
        <p>The feed is generated from <code>/data/podcast.json</code>.</p>

        <h2>Author</h2>
        <p>Eric Kouassi</p>
      </body>
    </html>
  `);
}
