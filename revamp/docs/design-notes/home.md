# Home page — design notes v0.1

Status: implemented in code, not yet reviewed in a real browser, not owner-approved.

## Structure (7 sections)
Hero &rarr; exam-insignia trust strip &rarr; Live batches &rarr; Free test series &rarr; Why choose &rarr; tagline/achievements reveal &rarr; app/community band. Adapted from the standard hook &rarr; proof &rarr; offer &rarr; stakes &rarr; CTA marketing-page narrative to fit a dense, commerce-plus-content coaching page rather than a pure SaaS landing page — real, observed sites in this vertical (Physics Wallah's `/defence`, Testbook's `/afcat`) are information-dense with exam-comparison tables and named-faculty credibility, not minimal single-message pages, so density here is a deliberate match to what this audience already trusts (Jakob's Law), not an oversight.

## Rules applied and why
- **Hero-stack discipline**: headline (the founder's own Hindi motto) + one subhead + exactly one filled CTA + one real photo. No trust strip or pricing teaser stuffed into the hero.
- **Eyebrow ceiling**: 7 sections &rarr; ceiling `ceil(7/3) = 3`. This page uses 1 ("Bharat's most-loved defence exam platform", the site's own real tagline, not invented copy).
- **Layout-family variety**: split (hero, app band) / grid (live batches, test series) / list (insignia strip, why-choose) / centered-stack (tagline reveal) — 4 families, none repeated more than twice.
- **One primary action per view**: only one filled/brand-color button exists on the entire page (the hero's "Explore live batches"). Every course card and test card uses an outline `btn-secondary` for its own "View details" / "View tests" action, specifically to avoid a grid of 6-7 equally loud filled buttons competing for attention — the per-item click target still works, it's just not visually shouting.
- **Real scarcity, not invented urgency**: the Kilo OTA batch is shown as "Coming Soon" because it genuinely has no price in the source data (`site-data.json` → `courses[0].price: null`), not a countdown gimmick.
- **Achievements are the business's own claims, labeled as such**: the 9 AIR-1s / thousands cleared / hundreds SSB-recommended figures are copied verbatim from the live About Us page, not generated — but they're self-reported, so the section carries an explicit "as reported by CDS Journey, not independently audited" caveat rather than presenting them as verified fact.
- **Gold as a small highlight, never small body text on white** (brand-guidelines.md rule): gold appears only as (a) a light-tint badge background with dark ink text on the "Coming Soon" badge, contrast-checked at ~6.4:1, and (b) the real gold-brush image asset as a decorative underline on "No books required", matching the original site's own use of that exact asset rather than inventing new gold decoration.
- **Motion**: header shadow-on-scroll, card hover-lift, and `:active` press-scale only — all transform/opacity, all under the 300ms ceiling, all disabled under `prefers-reduced-motion` via the tokens already defined in `tokens.css`. No scroll-triggered fade spam, so the motion-monotony check doesn't apply here.

## Pre-Flight results (Mode B checks run against the built `dist/index.html`)
| Check | Result |
|---|---|
| Eyebrow count | 1 used, ceiling 3 — pass |
| Marquee count | 0 (disclaimer bar is a static bar, not a moving ticker, by deliberate choice) — pass |
| Layout repetition | 4 families across 7 sections, max 2 uses each — pass |
| Motion monotony | No fade-spam sections at all — pass (not applicable) |
| Placeholder-copy scan | Only match is the literal, honest "Coming Soon" status badge — not unfinished copy — pass |
| One primary action per view | 1 filled button in the whole document — pass |

## Known gaps / not yet verified
- Not yet opened in an actual browser from this tool environment — no visual QA, no screen-reader pass, no Lighthouse/axe run yet. Treat as code-reviewed, not user-tested.
- Course-detail (`/course-detail/...`) and test-series (`/testseries/`, etc.) links point to the real intended local routes but those pages don't exist yet — they will 404 until built in the next phase.
- Hindi text (`सर नीचे और बस अपनी मेहनत`) line-height/shaping with the Noto Sans Devanagari fallback hasn't been checked on a real device.
- Full WCAG contrast audit only spot-checked by hand (hero text, badge, footer, muted body text) — not run through an automated checker yet.
- Logo/imagery reused as-is from the original scrape per brand-guidelines.md ("Preserve"); no redistribution/licensing permission obtained — this remains a local working build, not a public relaunch.

## Sources
- Content: `CDS Journey/content/site-data.json`, `CDS Journey/content/pages/home.json` (live scrape, 2026-09-23).
- Tokens/rules: `revamp/docs/brand-guidelines.md`, `revamp/src/styles/tokens.css` (already-committed v0.1).
- Competitor pattern grounding: `https://www.pw.live/defence`, `https://testbook.com/afcat` (fetched 2026-09-23; content/navigation observations only, not measured usability data).
- Design rules: design-machine skill (hero-stack discipline, eyebrow ceiling, layout-family variety, one-primary-action, motion timing/easing bands).
