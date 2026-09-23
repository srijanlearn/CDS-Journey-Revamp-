import { breadcrumb } from "../partials/layout.mjs";

// /short-quiz/ — a browse-by-category entry point. The source scrape never
// captured actual quiz-item data behind these filters (no public list API),
// so this renders the real exam/topic categories only, rather than
// fabricating quiz titles that don't exist in the source.
export function quizPage(site) {
  const { exams, topics } = site.quizTopics;
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Time-bound test" }])}
    <section class="hero" style="padding-bottom:2rem">
      <div class="wrap" style="text-align:center;max-width:40rem">
        <h1 style="font-size:var(--text-2xl)">Ace your preparation with CDS Journey</h1>
        <p class="hero-sub" style="margin:1rem auto 0" lang="hi">सर नीचे और बस अपनी मेहनत</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap" style="max-width:44rem">
        <h2 style="font-size:var(--text-lg);margin-bottom:1rem">Choose an exam</h2>
        <div class="chip-row">
          <span class="chip" aria-current="true">All</span>
          ${exams.map((e) => `<span class="chip">${e}</span>`).join("")}
        </div>
        <h2 style="font-size:var(--text-lg);margin:2rem 0 1rem">Choose a topic</h2>
        <div class="chip-row">
          <span class="chip" aria-current="true">All</span>
          ${topics.map((t) => `<span class="chip">${t}</span>`).join("")}
        </div>
        <a class="btn btn-primary" style="margin-top:2rem" href="/testseries/">Start a time-bound test</a>
      </div>
    </section>
  </main>`;
}
