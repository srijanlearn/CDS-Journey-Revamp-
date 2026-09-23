# cdsjourney-clone — cdsjourney.com faithful clone

## Source
- Original URL: https://www.cdsjourney.com/
- Title: "cds.journey is India's most loved platform for Defence Exams"
- Stack (from RECON probes): static HTML + jQuery/Bootstrap/OwlCarousel, no SPA framework (react/vue/next false), no WebGL/canvas, no Lenis/GSAP. Sticky/fixed header, scroll-triggered carousel sections.
- License: no LICENSE file found on the public site. Treat page design/content as all-rights-reserved: local learning/draft use only, keep brand attribution, do NOT publicly redeploy without the owner's permission.

## Complexity / mode
- Complexity: L2 (content marketing + course commerce, jQuery carousels, ~4050px single page).
- Mode: faithful clone (default per workflow). All imagery/fonts/colors from true harvested assets; brand retained intentionally.

## Asset truth (do not eyeball)
- Images: `assets/images/...` — 31 files, 45/45 downloads OK (`RECON/asset-manifest.json`). Hero uses the real banner `Frame_211_8055kYy-*.webp`; course cards use the real course webps; illustration `sar-niche.svg`, phone `app-preview.png`, yellow brush `Mask group.png` all real.
- Fonts: `assets/fonts/fonts.css` linked; Poppins (display/buttons) + Jost (body). Poppins woff2 self-hosted under `assets/fonts/`.
- Colors (recon computed): body `#ffffff`/`#333333`, buttons + footer `rgb(2,63,71)` = `#023F47`, light band `#EEF7FA`, mint cards `#DDF3F1`-family, gold brush `#F5B301`.
- Tracking removed: Firebase + gtag-style scripts from the original were NOT carried over (clone ships zero third-party scripts; only Google-Fonts CSS link + local files).

## Original vs clone
| Area | Original | Clone | Status |
|---|---|---|---|
| Header/nav | sticky white nav, red-dot Live Batches, Mock dropdown, cart, Signup/Login | same, + working dropdown/mobile drawer | match |
| Hero | full-bleed banner webp | same file full-bleed | match |
| Hindi intro | headline + checklist illustration | same copy + same `sar-niche.svg` | match |
| Upcoming | 1-card Owl carousel | scroll-snap rail, real card | match |
| Live Batches | 6 cards in carousel row | 6 cards, 3-col grid (all visible, same cards/prices) | content match, layout adapted |
| Test Series | CDS 138 / NDA 94 / AFCAT 6 / CAPF 1 | same counts, real insignia images | match |
| Why Choose | 4 cells + No Books brush | same + real telegram icon + brush png | match |
| Instagram band | dark teal, store badges, phone | same, real assets | match |
| Footer | address, Company/Help links, socials | same | match |
| Login modal | email→OTP→verify | working 2-step demo flow | functional替身 |
| Cart | add-to-cart + toast | working cart drawer + totals + toast | functional替身 |

## Fidelity (machine-measured)
- Full-page 1440px pixel diff: ratio 0.230, meanAbs 0.105, height 4006 vs 4049 (43px delta). Residual = text anti-aliasing + original carousel mid-scroll state + image crops.
- Clone console: 0 errors / 0 pageErrors (original: 3 SVGInject fails + 1 classList pageError).
- `audit-clone.mjs --recon --strict`: passes (findings = intentional brand retention + govt disclaimer links + remote font URLs inside harvested fonts.css).
- Self-scores: structure 4/5, visual 4/5, interaction 4/5, responsive 5/5, content 5/5, functional 3/5 (backend flows are front-end stand-ins).

## Known gaps
- Live Batches grid vs original carousel row (deliberate: shows all 6 without interaction; heights verified closer).
- Login/OTP, checkout, search-filter are front-end demos (no backend).
- Sub-pages (course-detail, test-series, short-quiz) out of scope; route map saved in `RECON/routes/`.
- `assets/fonts/fonts.css` still references remote gstatic URLs (harvest artifact); Poppins woff2 files are local. For fully offline use, rewrite to local paths.

## Run
```powershell
node C:\Users\srija\AppData\Local\Temp\opencode\clone-serve.cjs .
# open http://127.0.0.1:8123/cdsjourney-clone.html
```

## Deploy-before checklist
- Replace brand/assets or obtain owner permission (no license = all rights reserved).
- Swap demo auth/cart for real backend before any production use.

## Phase 3 — impeccable-design-polish pass (2026-09-23)
- Removed dead carousel arrows on Live Batches grid; upcoming arrows now auto-hide when the rail can't scroll.
- Contrast fixes: disclaimer ticker + test-count badges darkened to `#b4232a` (≥4.5:1 on their backgrounds).
- Touch targets raised toward 44px: dropdown items, search results, pills, remove buttons, text buttons.
- Motion safety: `prefers-reduced-motion` disables ticker/blink/reveal/smooth-scroll; `<noscript>` fallback keeps content visible.
- A11y: `aria-expanded` synced on Mock Test dropdown; `lang="hi"` on Hindi headings.
- Re-verified: 0 console errors, 1440/768/390 render clean, no overflow or overlaps.
## Phase 2 — full-site scrape for redesign (2026-09-23)
- Route crawl found 25 URLs; deep-scraped 23 pages via real browser (text, headings, prices, images, links + full-page screenshots) into `content/pages/*.json`, `content/screenshots/`, index at `content/index.json`.
- Course tab pass (`*-tabs.json`): Overview/Subjects/Instructor panes clicked; instructor names captured (e.g. Anurag Tripathi, Pooja Budania, Sandeep Brar, Ashish Garg, Muskan Chahal, Ujjwal Tiwari).
- Course content lives largely in giant overview PNGs (up to ~15000px, syllabi/schedules/mentors/features) — all 20 downloaded to `assets/images/courses/` with browser UA (CDN permits it); verified rendering.
- `content/site-data.json` (43KB): redesign-ready dataset — brand/contact/socials, nav, hero, 7 courses (price/language/instructors/avatars/banner/overview/subject images), 4 test series (CDS 138 / NDA 94 / AFCAT 6 / CAPF 1), quiz exams+topics, materials, live-tests, current-affairs, full company/legal texts (privacy 21.8k chars).
- `content/image-manifest.json`: 27/27 original media URLs wired to local files, 0 missing.
- Known gaps: mock-test item lists render behind login (only category anchors captured; network capture showed no public test-list API — fixtureCount 0); two broken avatar slots (`/media/` bare URL) skipped; KILO OTA has no price (Coming Soon).
