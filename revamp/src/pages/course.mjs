import { breadcrumb, actionButton } from "../partials/layout.mjs";
import { COURSE_ASSETS, avatarForInstructor } from "../lib/course-assets.mjs";

function money(price) {
  return price ? price.replace("₹", "₹ ") : null;
}

// One template for all 7 course-detail pages (site-data.json -> courses[]).
// Structure: breadcrumb -> header (title/meta/enroll card/banner) -> overview
// image -> subjects grid (when present) -> instructor grid (when present).
// Sections are anchor-linked rather than JS tabs, so the page works with
// zero script and every section is independently linkable/indexable.
export function courseDetailPage(course, site) {
  const assets = COURSE_ASSETS[course.slug];
  if (!assets) {
    throw new Error(`course.mjs: no COURSE_ASSETS entry for slug "${course.slug}" — add one in src/lib/course-assets.mjs before building.`);
  }
  const isComingSoon = !course.price;
  const instructorNames = course.instructors || [];

  const sectionsNav = [
    "Overview",
    assets.subjects.length ? "Subjects" : null,
    instructorNames.length ? "Instructor" : null,
  ].filter(Boolean);

  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Course details" }, { label: course.title }])}

    <section class="detail-header">
      <div class="wrap detail-header-grid">
        <div>
          <h1>${course.title}</h1>
          <div class="detail-meta">
            <span>${course.language}</span>
            <span>&middot;</span>
            <span>${isComingSoon ? "Admissions open soon" : "Enrolling now"}</span>
          </div>
          <nav class="chip-row" aria-label="On this page">
            ${sectionsNav.map((s) => `<a class="chip" href="#${s.toLowerCase()}">${s}</a>`).join("")}
          </nav>
          <div style="margin-top:2rem">
            <img class="detail-visual" src="/assets/images/courses/${assets.thumb}" alt="" loading="lazy">
          </div>
        </div>
        <aside class="enroll-card">
          ${isComingSoon
            ? `<span class="badge badge-soon" style="margin-bottom:1rem">Coming Soon</span>`
            : `<span class="price">${money(course.price)}</span>`}
          <ul>
            <li>24-hour access once enrolled</li>
            <li>Live + recorded classes</li>
            <li>Personal Telegram doubt group</li>
          </ul>
          ${actionButton({
            href: "#",
            label: isComingSoon ? "Notify me when open" : "Add to cart",
            variant: "btn-primary btn-block",
            disabled: isComingSoon,
          })}
          <p style="margin-top:1rem;font-size:var(--text-xs);color:var(--color-text-muted)">
            Contact: <a href="tel:${course.contact.phone.replace(/\s+/g, "")}">${course.contact.phone}</a> ·
            <a href="mailto:${course.contact.email}">${course.contact.email}</a>
          </p>
        </aside>
      </div>
    </section>

    <section class="section" id="overview">
      <div class="wrap">
        <div class="section-head" style="margin-bottom:2rem">
          <h2>Overview</h2>
          <p>Full syllabus, schedule and batch details as published by CDS Journey.</p>
        </div>
        ${assets.overview
          ? `<details class="syllabus-reveal">
               <summary>View full syllabus &amp; schedule</summary>
               <img src="/assets/images/courses/${assets.overview}" alt="${course.title} — syllabus and schedule overview" loading="lazy">
             </details>`
          : `<p style="text-align:center;color:var(--color-text-muted)">Detailed overview not yet published for this batch.</p>`}
      </div>
    </section>

    ${assets.subjects.length ? `
    <section class="section section-alt" id="subjects">
      <div class="wrap">
        <div class="section-head" style="margin-bottom:2rem"><h2>Subjects covered</h2></div>
        <div class="subject-grid">
          ${assets.subjects.map((s) => `
          <div class="subject-card">
            <img src="/assets/images/courses/${s.src}" alt="" loading="lazy">
            <span>${s.label}</span>
          </div>`).join("")}
        </div>
      </div>
    </section>` : ""}

    ${instructorNames.length ? `
    <section class="section" id="instructor">
      <div class="wrap">
        <div class="section-head" style="margin-bottom:2rem"><h2>Your mentors</h2></div>
        <div class="instructor-grid">
          ${instructorNames.map((name) => {
            const avatar = avatarForInstructor(name);
            return `
          <div class="instructor-card">
            ${avatar ? `<img src="${avatar}" alt="" loading="lazy">` : `<div class="mark" style="width:5.5rem;height:5.5rem;border-radius:999px;margin:0 auto var(--space-3)"></div>`}
            <h3>${name}</h3>
          </div>`;
          }).join("")}
        </div>
      </div>
    </section>` : ""}
  </main>`;
}
