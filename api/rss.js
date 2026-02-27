import { buildRssXml } from "../buildRssXml.js";

export default function handler(req, res) {
  const data = require("../data/podcast.json");

  const xml = buildRssXml(data.channel, data.episodes);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
