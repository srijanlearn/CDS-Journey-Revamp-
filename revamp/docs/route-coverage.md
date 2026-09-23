# Whole-site route coverage

Status: Home implemented in code (`revamp/src/pages/home.mjs`, built via `npm run build` → `revamp/dist/`), not yet browser-tested. All other pages still pending.
Source: CDS Journey/content/index.json, 23 captured entries. Captured data is not proof of working routes. Preserve URLs or explicitly document redirects. Query variants require separate tests. Historical notes mention a different 25-route crawl; reconcile during discovery.

| Page | Source path | Implementation / QA |
|---|---|---|
| Home | / | Implemented (code review only) / Not run in a browser yet — see `docs/design-notes/home.md` |
| KILO OTA | /course-detail/kilo-ota-batch-cds-1-2027/ | Pending / Not run |
| INDIA CAPF P1+P2 | /course-detail/india-batch-p1-p2-capf-2027/ | Pending / Not run |
| LIMA NDA | /course-detail/lima-batch-nda-1-2027/ | Pending / Not run |
| INDIA CAPF P2 | /course-detail/india-batch-paper-2-capf-2027/ | Pending / Not run |
| KILO Math | /course-detail/kilo-math-batch-cds-1-2027/ | Pending / Not run |
| JULIET AFCAT | /course-detail/juliet-batch-afcat-1-2027/ | Pending / Not run |
| SSB Psych | /course-detail/ssb-psych-batch/ | Pending / Not run |
| CDS tests | /test-series/19/cds-mock-test/ | Pending / Not run |
| NDA tests | /test-series/3/nda/ | Pending / Not run |
| AFCAT tests | /test-series/2/afcat/ | Pending / Not run |
| CAPF tests | /test-series/9/capf/ | Pending / Not run |
| Test catalogue | /testseries/ | Pending / Not run |
| Short quiz | /short-quiz/ | Pending / Not run |
| Live tests | /live-tests/ | Pending / Not run |
| Study material | /study-material/ | Pending / Not run |
| Current affairs | /current-affairs/?lang=%27hindi%27 | Pending / Not run |
| About | /about-us/ | Pending / Not run |
| Contact | /contact-us/ | Pending / Not run |
| FAQ | /faq/ | Pending / Not run |
| Terms | /terms-conditions/ | Pending / Not run |
| Privacy | /privacy-policy/ | Pending / Not run |
| Refund | /refund-policy/ | Pending / Not run |

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
GitHub file commits do not execute the app. No local runtime, browser rendering, lint, build, type-check, unit or E2E test result is currently available. A runnable app and CI setup are still required. No production readiness or same-day guarantee is asserted.
