import { breadcrumb, emptyState } from "../partials/layout.mjs";

export function currentAffairsPage() {
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Current affairs" }])}
    ${emptyState({
      heading: "Current Affairs: Daily and Monthly",
      body: "Daily and monthly current-affairs digests are coming soon. In the meantime, notes are available under Study Material.",
    })}
  </main>`;
}
