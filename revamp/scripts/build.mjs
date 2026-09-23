// Zero-dependency static site build. Reads real content from src/data,
// renders each page with the shared layout, writes static HTML to dist/,
// and copies styles + curated assets alongside it. Mirrors the source
// site's own stack choice (no framework) per ../CDS Journey/NOTES.md.
import { mkdir, rm, cp, writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { pageShell } from "../src/partials/layout.mjs";
import { homePage } from "../src/pages/home.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");

async function loadSiteData() {
  const raw = await readFile(path.join(root, "src/data/site-data.json"), "utf8");
  return JSON.parse(raw);
}

async function writePage(relPath, html) {
  const outPath = path.join(dist, relPath, "index.html");
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");
  console.log("wrote", path.relative(root, outPath));
}

async function build() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });

  const site = await loadSiteData();

  await writePage("", pageShell({
    title: "CDS Journey — India's most-loved platform for defence exams",
    description: "Live batches, free mock tests and study material for CDS, NDA, AFCAT and CAPF, led by mentors who cleared the same exams.",
    active: "home",
    content: homePage(site),
  }));

  await mkdir(path.join(dist, "styles"), { recursive: true });
  await cp(path.join(root, "src/styles/tokens.css"), path.join(dist, "styles/tokens.css"));
  await cp(path.join(root, "src/styles/base.css"), path.join(dist, "styles/base.css"));
  await cp(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });

  console.log("\nBuild complete ->", path.relative(process.cwd(), dist));
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
