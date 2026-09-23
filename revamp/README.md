# CDS Journey — revamp

Redesign workspace. Zero-dependency static site: a small Node build script renders
real content from `src/data/site-data.json` (copied from `../CDS Journey/content/`)
through shared layout + page templates into plain HTML in `dist/`.

## Run

```powershell
cd revamp
node scripts/build.mjs   # renders dist/
node scripts/serve.mjs   # serves dist/ at http://127.0.0.1:8080
```

Open `http://127.0.0.1:8080/`, not the file directly — pages use root-absolute
asset/link paths (`/assets/...`, `/testseries/...`) so routes match the real
site's URL structure once every page exists, and that only resolves through a
server, not `file://`.

## Layout
- `src/styles/tokens.css` — design tokens (already established, see `docs/brand-guidelines.md`).
- `src/styles/base.css` — components built on those tokens.
- `src/partials/layout.mjs` — shared header/footer/page shell.
- `src/pages/*.mjs` — one file per page family, each exporting a render function.
- `docs/design-notes/*.md` — per-page rationale + Pre-Flight check results, written before/alongside each page.
- `docs/route-coverage.md` — the acceptance-gate tracker; update the relevant row whenever a page moves state.

## Status
Home page implemented (see `docs/design-notes/home.md`). Course-detail, test-series,
resources, support and legal pages are next — see `docs/route-coverage.md` for the
full list and `docs/brand-guidelines.md` §Delivery sequence for the order.
