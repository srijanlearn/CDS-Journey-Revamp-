// Minimal static file server for local preview of dist/. No dependencies.
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), "dist");
const port = process.env.PORT || 8080;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

http.createServer(async (req, res) => {
  try {
    let reqPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(root, reqPath);
    let st = await stat(filePath).catch(() => null);
    if (st?.isDirectory() || !st) {
      filePath = path.join(root, reqPath, "index.html");
    }
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(port, () => console.log(`Serving ${root} on http://127.0.0.1:${port}`));
