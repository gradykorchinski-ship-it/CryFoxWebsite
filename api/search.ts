import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const q = (req.query.q as string) || "";

  const target = "https://searxng.site/?q=" + encodeURIComponent(q);

  res.status(302).setHeader("Location", target);
  res.end();
}
