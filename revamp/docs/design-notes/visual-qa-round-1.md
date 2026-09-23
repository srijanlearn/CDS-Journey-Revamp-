# Visual QA round 1 — real browser, not just code review

Status: run once, findings fixed and re-verified. Not a substitute for a human pass.

## Method
Installed Playwright + headless Chromium in a scratch directory (kept out of this
repo — the site itself stays zero-dependency), built the real site
(`node scripts/build.mjs`), served it (`node scripts/serve.mjs`), and drove it
with an actual browser: navigated to 10 representative pages across every page
family at both 1440px and 390px, captured full-page screenshots, and asserted
on `console` errors, `pageerror` events, failed network requests, and
`naturalWidth === 0` (broken images) for every `<img>`. Also drove two real
interactions: the FAQ accordion (`<details>` open/close) and the header's
scroll-shadow class toggle.

**Automated result:** 0 console errors, 0 page errors, 0 failed requests, 0
broken images, both interactions correct — across every page tested, both
before and after the fixes below.

**What automation didn't catch, that looking at the actual screenshots did:**

1. **Course overview images were unscaled 10-15k px syllabus PNGs**, making
   `course-detail/kilo-ota-batch-cds-1-2027/` render at 16,423px tall by
   default — a real UX failure invisible to any HTML/console check, only
   visible by actually looking at the rendered page. Fixed by wrapping the
   overview image in a `<details class="syllabus-reveal">` disclosure
   (collapsed by default, same zero-JS pattern as the FAQ accordion) —
   collapsed height is now 1,467px; the full image is still there, one click
   away, nothing was deleted.
2. **Two subject-image captions didn't match what the images actually show.**
   `subject-batch-detail-1.webp` visually reads "Internal Security" but was
   labeled "Batch details"; `subject-batch-sheet.webp` visually reads
   "Baatcheet" but was labeled "Batch sheet". Both were guesses from the
   original filenames rather than the actual image content — wrong in a way
   no automated check would catch, since the HTML was valid and the image
   loaded fine. Fixed by reading the actual rendered images and relabeling to
   match (`src/lib/course-assets.mjs`).
3. **The active-nav indicator was wrong on 7 pages** (About, Contact, FAQ,
   Live Tests, and the three legal pages all incorrectly highlighted "Live
   Batches" as the current nav item, since `build.mjs` passed `active: "home"`
   for all of them by copy-paste default). Fixed by passing `active: ""` for
   pages that don't correspond to any nav item — confirmed via the actual
   DOM (`grep` for `aria-current` in the built HTML), not just visually.

## What still hasn't been checked
No screen-reader pass, no Lighthouse/axe run, no real mobile device, no
cross-browser check (Chromium only), no test-series pages other than AFCAT
visually reviewed, no keyboard-only navigation walkthrough. This round proves
"renders without errors and matches its own content," not full accessibility
or cross-browser conformance.
