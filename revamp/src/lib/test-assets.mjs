// Real routes from CDS Journey/content/index.json — preserved so links match
// the source site's URL structure (route-coverage.md "preserve URLs" gate).
export const EXAM_ROUTES = {
  CDS: "/test-series/19/cds-mock-test/",
  NDA: "/test-series/3/nda/",
  AFCAT: "/test-series/2/afcat/",
  CAPF: "/test-series/9/capf/",
};

export const EXAM_ICONS = {
  CDS: "/assets/images/exams/cds-insignia.png",
  NDA: "/assets/images/exams/nda-insignia.gif",
  AFCAT: "/assets/images/exams/afcat-insignia.png",
  CAPF: null,
};

export function testCard(name, count, { linkToDetail = false } = {}) {
  const icon = EXAM_ICONS[name];
  const href = linkToDetail ? EXAM_ROUTES[name] : "/testseries/";
  return `
  <article class="test-card">
    ${icon
      ? `<img class="icon" src="${icon}" alt="${name} insignia" loading="lazy">`
      : `<div class="icon-fallback" aria-hidden="true">${name}</div>`}
    <h3>${name}</h3>
    <div>
      <span class="count">${count}</span>
      <div class="count-label">free mock tests · English</div>
    </div>
    <a class="btn btn-secondary btn-block" href="${href}">View tests</a>
  </article>`;
}
