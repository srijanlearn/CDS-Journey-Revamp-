// Zero-dependency static site build. Reads real content from src/data,
// renders each page with the shared layout, writes static HTML to dist/,
// and copies styles + curated assets alongside it. Mirrors the source
// site's own stack choice (no framework) per ../CDS Journey/NOTES.md.
import { mkdir, rm, cp, writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { pageShell } from "../src/partials/layout.mjs";
import { homePage } from "../src/pages/home.mjs";
import { courseDetailPage } from "../src/pages/course.mjs";
import { testDetailPage } from "../src/pages/test.mjs";
import { testSeriesPage } from "../src/pages/testseries.mjs";
import { quizPage } from "../src/pages/quiz.mjs";
import { liveTestsPage } from "../src/pages/live-tests.mjs";
import { currentAffairsPage } from "../src/pages/current-affairs.mjs";
import { studyMaterialPage } from "../src/pages/study-material.mjs";
import { aboutPage } from "../src/pages/about.mjs";
import { contactPage } from "../src/pages/contact.mjs";
import { faqPage } from "../src/pages/faq.mjs";
import { legalPage } from "../src/pages/legal.mjs";
import { localPath } from "../src/lib/course-assets.mjs";
import { EXAM_ROUTES } from "../src/lib/test-assets.mjs";
import { TERMS, PRIVACY, REFUND } from "../src/lib/legal-content.mjs";

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

  // Home
  await writePage("", pageShell({
    title: "CDS Journey — India's most-loved platform for defence exams",
    description: "Live batches, free mock tests and study material for CDS, NDA, AFCAT and CAPF, led by mentors who cleared the same exams.",
    active: "home",
    content: homePage(site),
  }));

  // Course detail x7
  for (const course of site.courses) {
    await writePage(localPath(course.url), pageShell({
      title: `${course.title} | CDS Journey`,
      description: `${course.title} — ${course.language} batch on CDS Journey.`,
      active: "home",
      content: courseDetailPage(course, site),
    }));
  }

  // Test-series detail x4 (real routes from content/index.json)
  for (const [exam, route] of Object.entries(EXAM_ROUTES)) {
    await writePage(route, pageShell({
      title: `${exam} mock tests | CDS Journey`,
      description: `Free ${exam} mock tests — exam-pattern, 24-hour accessible.`,
      active: "testseries",
      content: testDetailPage(exam, site),
    }));
  }

  await writePage("/testseries", pageShell({
    title: "Mock Tests | CDS Journey",
    description: "Free mock tests for CDS, NDA, AFCAT and CAPF.",
    active: "testseries",
    content: testSeriesPage(site),
  }));

  await writePage("/short-quiz", pageShell({
    title: "Time-Bound Test | CDS Journey",
    description: "Practice by exam and topic with CDS Journey's time-bound tests.",
    active: "quiz",
    content: quizPage(site),
  }));

  await writePage("/live-tests", pageShell({
    title: "Live Tests | CDS Journey",
    description: "Live, timed test rooms — coming soon.",
    active: "",
    content: liveTestsPage(),
  }));

  await writePage("/current-affairs", pageShell({
    title: "Current Affairs | CDS Journey",
    description: "Daily and monthly current affairs — coming soon.",
    active: "current-affairs",
    content: currentAffairsPage(),
  }));

  await writePage("/study-material", pageShell({
    title: "Study Material | CDS Journey",
    description: "Handwritten notes and current affairs for defence exam preparation.",
    active: "materials",
    content: studyMaterialPage(),
  }));

  await writePage("/about-us", pageShell({
    title: "About Us | CDS Journey",
    description: "What CDS Journey does, offers and has achieved for defence exam aspirants.",
    active: "",
    content: aboutPage(),
  }));

  await writePage("/contact-us", pageShell({
    title: "Contact Us | CDS Journey",
    description: "Address, email and phone/WhatsApp contact for CDS Journey.",
    active: "",
    content: contactPage(site),
  }));

  await writePage("/faq", pageShell({
    title: "FAQ | CDS Journey",
    description: "Frequently asked questions about batches, payments and free content.",
    active: "",
    content: faqPage(),
  }));

  await writePage("/terms-conditions", pageShell({
    title: "Terms & Conditions | CDS Journey",
    description: "Terms and conditions for using CDS Journey.",
    active: "",
    content: legalPage(TERMS, "Terms & Conditions"),
  }));

  await writePage("/privacy-policy", pageShell({
    title: "Privacy Policy | CDS Journey",
    description: "How CDS Journey collects, uses and protects your personal information.",
    active: "",
    content: legalPage(PRIVACY, "Privacy Policy"),
  }));

  await writePage("/refund-policy", pageShell({
    title: "Refund Policy | CDS Journey",
    description: "CDS Journey's refund and cancellation policy.",
    active: "",
    content: legalPage(REFUND, "Refund Policy"),
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
