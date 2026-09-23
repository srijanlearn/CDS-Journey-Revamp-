# Course-detail & test-detail templates — design notes v0.1

Status: implemented in code, link-checked, not browser-tested, not owner-approved.

## Why one template each, not 11 bespoke pages
The 7 course pages and 4 test-series pages share the same structure and differ only
in data (per design-machine's UX rule: "if a user learns one detail page, they've
learned them all" — structural consistency is the goal for a multi-page product,
unlike a single long-scroll landing page where layout *variety* is the goal). One
template per family means a design change only has to happen once, and every
instance stays pixel-consistent automatically.

## Course-detail (`src/pages/course.mjs`)
- Breadcrumb &rarr; header (title, meta, banner image, sticky-feeling enroll card) &rarr;
  anchor-linked Overview / Subjects / Instructor sections (no JS tabs — every
  section is independently linkable and works with zero script).
- The enroll card is the page's one filled/primary action; "Coming Soon" batches
  render that action as an inert `<span aria-disabled="true">` via the shared
  `actionButton()` helper, not a clickable `href="#"` — an `aria-disabled` label
  on something that's still fully clickable is worse than no label at all.
- Instructor photos are matched to instructor **names**, not array position.
  `site-data.json`'s `instructors` and `avatars` arrays for a course aren't
  guaranteed to be in the same order (verified: `course-kilo-ota` lists
  instructors as [Anurag, Pooja, Ashish] but avatars as [anurag, ashish, pooja]) —
  pairing by index would silently show the wrong photo next to the wrong name.
  `avatarForInstructor(name)` in `src/lib/course-assets.mjs` looks up by the
  instructor's actual name instead.
- SSB Psych has no overview image in the source data; the template shows honest
  placeholder text ("Detailed overview not yet published for this batch") rather
  than reusing a different course's image or leaving a blank gap.

## Test-detail (`src/pages/test.mjs`)
- AFCAT and CAPF have real itemized mock-test lists in the source scrape (test
  name, question count, marking scheme, duration). CDS and NDA do not — the
  crawler never reached a public list (see `CDS Journey/NOTES.md`: "mock-test
  item lists render behind login"). Rather than inventing plausible-looking test
  names for CDS/NDA to make the page "look complete," this template shows the
  real aggregate count (138 / 94) with an explicit note that the itemized list
  needs a login the crawler didn't have. Fabricating specifics for unreachable
  data is exactly the failure mode this project's own research flags as the
  wrong move (see design-machine's Block Library: "honest partial disclosure
  beats confident fabrication").
- Every mock-test row uses an outline `btn-secondary` action, not a filled
  primary — AFCAT's page has 6 real, independent test rows, and rendering all 6
  as filled brand-color buttons would violate one-primary-action-per-view (this
  was in fact caught by `/code-review` and fixed; see commit history).

## Pre-Flight results
Both templates are small (2-4 sections) and use anchor navigation instead of
decorative eyebrows, so the eyebrow ceiling, layout-repetition and
motion-monotony checks don't meaningfully apply. Checked directly against the
built output for all 11 pages in this family:
| Check | Result |
|---|---|
| One primary action per view | Pass on all 11 pages (verified via grep sweep after the AFCAT fix) |
| Placeholder-copy scan | Pass (only literal "Coming Soon" status labels, not unfinished copy) |
| Internal links resolve | Pass (curl sweep against `node scripts/serve.mjs`, all 200) |

## Known gaps
- No real browser/screen-reader QA yet.
- Course "Add to cart" / test "Attempt" actions have no real backend — they're
  visually correct dead ends, same category of gap the original clone project
  already disclosed for login/checkout.
