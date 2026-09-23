import { breadcrumb, actionButton } from "../partials/layout.mjs";

// Itemized mock-test lists exist in the source scrape only for AFCAT and CAPF
// (see CDS Journey/NOTES.md: "mock-test item lists render behind login" for
// CDS/NDA — the crawler never saw a public list). Rather than inventing
// plausible-looking test names for CDS/NDA, this template shows the real
// aggregate count with an honest note instead of fabricated rows.
const ITEMIZED_TESTS = {
  AFCAT: [
    { name: "AFCAT 2026 (II) MOCK TEST 5", locked: false },
    { name: "AFCAT 2026 (II) MOCK TEST 4", locked: false },
    { name: "AFCAT 2026 (II) MOCK TEST 3", locked: false },
    { name: "AFCAT 2026 (I) PYQ", locked: false },
    { name: "AFCAT 2026 (II) MOCK TEST-2", locked: false },
    { name: "AFCAT 2026 (II) MOCK TEST-1", locked: false },
  ].map((t) => ({ ...t, specs: "100 Q · +3.0 / -1.0 marks · 120 mins · one-time retake" })),
  CAPF: [
    { name: "DELTA BATCH MOCK TEST -1", locked: true, specs: "100 Q · +2.0 / -0.67 marks · 120 mins · one-time retake" },
  ],
};

const EXAM_LABEL = {
  CDS: "CDS", NDA: "NDA", AFCAT: "AFCAT", CAPF: "CAPF",
};

export function testDetailPage(examKey, site) {
  const count = site.testCounts[examKey];
  const items = ITEMIZED_TESTS[examKey];

  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Mock tests", href: "/testseries/" }, { label: EXAM_LABEL[examKey] }])}

    <section class="detail-header">
      <div class="wrap">
        <h1>${EXAM_LABEL[examKey]} mock tests</h1>
        <div class="detail-meta">
          <span class="badge badge-live">Free</span>
          <span>24-hour accessible</span>
          <span>&middot;</span>
          <span>Exam-based pattern</span>
          <span>&middot;</span>
          <span>${count} tests available</span>
        </div>
        <div class="chip-row" style="margin-top:1rem">
          <span class="chip" aria-current="true">Full length test</span>
          <span class="chip">Short quiz</span>
          ${examKey === "CDS" ? '<span class="chip">Math</span>' : ""}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${items ? `
        <div class="mocktest-list">
          ${items.map((t) => `
          <div class="mocktest-row ${t.locked ? "is-locked" : ""}">
            <div>
              <h3>${t.name}</h3>
              <div class="specs">${t.specs}</div>
            </div>
            ${actionButton({ href: "#", label: t.locked ? "Locked" : "Attempt", variant: "btn-secondary", disabled: t.locked })}
          </div>`).join("")}
        </div>
        ` : `
        <div class="empty-state" style="padding-top:0">
          <p><strong>${count} ${EXAM_LABEL[examKey]} mock tests</strong> are available on the platform.</p>
          <p>The individual test list requires a logged-in session on the source site and wasn't publicly reachable during content capture, so it isn't reproduced here to avoid inventing test names — enroll to see the live list.</p>
          <a class="btn btn-primary" href="#" style="margin-top:1rem">Enroll now</a>
        </div>
        `}
      </div>
    </section>
  </main>`;
}
