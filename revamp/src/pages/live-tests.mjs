import { breadcrumb, emptyState } from "../partials/layout.mjs";

// /live-tests/ — genuinely "coming soon" on the source site. Shown as an
// honest empty state (NN/g: an empty state is a legitimate place to set
// expectations) rather than a fake feature or placeholder test list.
export function liveTestsPage() {
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Live tests" }])}
    ${emptyState({
      heading: "Exam वाली Feel, Exam से पहले",
      body: "Live, timed test rooms are coming soon. Follow the Telegram group or Instagram for the launch date.",
    })}
  </main>`;
}
