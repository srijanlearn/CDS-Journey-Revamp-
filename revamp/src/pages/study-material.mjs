import { breadcrumb } from "../partials/layout.mjs";

export function studyMaterialPage() {
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Study material" }])}
    <section class="hero" style="padding-bottom:2rem">
      <div class="wrap" style="text-align:center;max-width:40rem">
        <h1 style="font-size:var(--text-2xl)">All defence exam study material</h1>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="resource-list">
          <div class="resource-row">
            <div class="num">1</div>
            <div><h3>Handwritten notes</h3><p>Exam-focused notes, PDFs and quizzes for every subject.</p></div>
          </div>
          <div class="resource-row">
            <div class="num">2</div>
            <div><h3>Current affairs</h3><p>Daily and monthly digests. <a href="/current-affairs/" style="color:var(--color-brand-secondary);text-decoration:underline">See status</a>.</p></div>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
