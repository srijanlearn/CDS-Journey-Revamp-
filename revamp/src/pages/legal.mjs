import { breadcrumb } from "../partials/layout.mjs";

export function legalPage(doc, crumbLabel) {
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: crumbLabel }])}
    <section class="section">
      <div class="wrap legal-article">
        <h1>${doc.title}</h1>
        <p class="legal-updated">Last reviewed 2026-09-23.</p>
        ${doc.intro.map((p) => `<p>${p}</p>`).join("")}
        ${doc.sections.map((s) => `
          ${s.heading ? `<h2>${s.heading}</h2>` : ""}
          ${s.paragraphs.map((p) => `<p>${p}</p>`).join("")}
          ${s.list ? `<ul>${s.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : ""}
        `).join("")}
      </div>
    </section>
  </main>`;
}
