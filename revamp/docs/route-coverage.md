# Whole-site route coverage

Status: All 23 pages implemented in code and building cleanly (`npm run build` → `revamp/dist/`). Every internal link across the built site was verified to return HTTP 200 from a local static server. A `/code-review` pass found 4 real bugs (disabled buttons still clickable, a breadcrumb aria-current bug, a build-crash risk on missing course data, an instructor/avatar name-mismatch bug) — fixed. A real-browser Playwright pass (10 pages, 1440px + 390px, console/network/broken-image assertions + 2 live interactions) found 0 runtime errors but 3 more real issues only visible by looking at the rendered output: a 16,000px-tall unscaled syllabus image, two subject-image captions that didn't match what the images actually show, and a wrong active-nav highlight on 7 pages — all fixed, see `docs/design-notes/visual-qa-round-1.md`. Still outstanding: screen-reader pass, Lighthouse/axe, cross-browser, real device testing.
Source: CDS Journey/content/index.json, 23 captured entries. Query variants (e.g. current-affairs' `?lang=` param) are not separately implemented — same page serves both. Historical notes mention a different 25-route crawl; not reconciled.

| Page | Source path | Implementation / QA |
|---|---|---|
| Home | / | Implemented, link-checked / No browser/screen-reader QA yet — see `docs/design-notes/home.md` |
| KILO OTA | /course-detail/kilo-ota-batch-cds-1-2027/ | Implemented, link-checked / No browser/screen-reader QA yet |
| INDIA CAPF P1+P2 | /course-detail/india-batch-p1-p2-capf-2027/ | Implemented, link-checked / No browser/screen-reader QA yet |
| LIMA NDA | /course-detail/lima-batch-nda-1-2027/ | Implemented, link-checked / No browser/screen-reader QA yet |
| INDIA CAPF P2 | /course-detail/india-batch-paper-2-capf-2027/ | Implemented, link-checked / No browser/screen-reader QA yet |
| KILO Math | /course-detail/kilo-math-batch-cds-1-2027/ | Implemented, link-checked / No browser/screen-reader QA yet |
| JULIET AFCAT | /course-detail/juliet-batch-afcat-1-2027/ | Implemented, link-checked / No browser/screen-reader QA yet |
| SSB Psych | /course-detail/ssb-psych-batch/ | Implemented, link-checked / No browser/screen-reader QA yet (no overview image in source data — honest placeholder text shown) |
| CDS tests | /test-series/19/cds-mock-test/ | Implemented / Aggregate count only — itemized list not public in source, honest note shown instead of invented rows |
| NDA tests | /test-series/3/nda/ | Implemented / same aggregate-only caveat as CDS |
| AFCAT tests | /test-series/2/afcat/ | Implemented / itemized (6 real mock tests from source scrape) |
| CAPF tests | /test-series/9/capf/ | Implemented / itemized (1 real, locked mock test from source scrape) |
| Test catalogue | /testseries/ | Implemented, link-checked / No browser QA yet |
| Short quiz | /short-quiz/ | Implemented as a browse-by-category page / No quiz-item data existed in source to list, documented as a known gap rather than fabricated |
| Live tests | /live-tests/ | Implemented as an honest "coming soon" empty state (matches source site's own real status) |
| Study material | /study-material/ | Implemented, link-checked / No browser QA yet |
| Current affairs | /current-affairs/ | Implemented as an honest "coming soon" empty state (matches source site's own real status) |
| About | /about-us/ | Implemented / achievement figures labeled as self-reported, not audited |
| Contact | /contact-us/ | Implemented, link-checked / No browser QA yet |
| FAQ | /faq/ | Implemented as a native `<details>` accordion (zero JS) / No browser QA yet |
| Terms | /terms-conditions/ | Implemented, verbatim source text / No legal review |
| Privacy | /privacy-policy/ | Implemented, sections 2-4 & 6-10 are faithful paraphrases not verbatim text — see `src/lib/legal-content.mjs` header / No legal review |
| Refund | /refund-policy/ | Implemented, verbatim source text / No legal review |

## Additional discovery
Cart /student-dashboard/view/cart is referenced outside the index. Login, checkout, dashboard, lessons, test-taking and results need authorized inspection and documented API contracts. Do not fabricate source routes or working integrations. Quiz topic/exam query variants need inventory and deep-link tests.

## Page acceptance gates
| Gate | Required evidence |
|---|---|
| Content | Source fields and sections mapped; missing data explicit; policies preserved |
| Routing | Direct URL, refresh, back/forward, query filters, invalid route and cross-links tested |
| Interaction | All actions functional or clearly unavailable; loading, empty, error and retry states |
| Responsive | Narrow mobile, tablet, desktop, zoom and Hindi text overflow checked |
| Accessibility | Keyboard order, focus, labels, headings, contrast and reduced-motion checks |
| Security | No untrusted HTML injection; validate URLs; no secrets or fake auth/payment success |
| Review | Full diff read, shared-component impact checked, focused review findings resolved |
| Automation | Build, lint, type-check and relevant unit/E2E tests pass |

## Delivery sequence
1. Inspect full existing source and source schemas; add characterization and migration tests before behavioral changes.
2. Establish shared layouts, semantic tokens, data validation and URL mapping.
3. Implement course family, test family, resources, support and legal pages plus homepage.
4. Audit every page individually; shared templates do not excuse missing content.
5. Add integrations only against verified contracts; document backend blockers.
6. Review diffs, run checks, resolve findings, and request merge approval. Keep main and the clone untouched until approved.

## Execution boundary
The build (`node scripts/build.mjs`) and a local static server (`node scripts/serve.mjs`) have both actually been run, and every internal link across all 23 pages was curl-checked for a 200 response — this is real, not just a file commit. What's still missing: no real browser rendering, no screen-reader pass, no Lighthouse/axe run, no visual regression check, no CI. Treat this as "builds and links correctly," not "production ready."
