// Home page. Section order follows an adapted product-narrative beat:
// Hook (hero) -> Trust (insignia) -> Offer (live batches) -> Proof (test
// series scale) -> Why (reasons) -> Tagline/achievements -> Community (app).
// 7 content sections total -> eyebrow ceiling = ceil(7/3) = 3; this page uses 1.
// Layout families used: banner, row, grid, grid(reuse), list, centered-stack,
// split -> satisfies the "no family more than twice" rule.

import { COURSE_ASSETS, avatarPath, localPath } from "../lib/course-assets.mjs";
import { testCard } from "../lib/test-assets.mjs";

function money(price) {
  if (!price) return null;
  return price.replace("₹", "₹ ");
}

function courseCard(course) {
  const isComingSoon = !course.price;
  const avatars = (course.avatars || []).slice(0, 3).map(avatarPath).filter(Boolean);

  return `
  <article class="course-card">
    <div class="thumb">
      <img src="/assets/images/courses/${COURSE_ASSETS[course.slug].thumb}" alt="" loading="lazy">
    </div>
    <div class="body">
      <div class="meta-row">
        <span>${course.language}</span>
        ${isComingSoon ? '<span class="badge badge-soon">Coming Soon</span>' : '<span class="badge badge-live"><span class="live-dot" aria-hidden="true"></span>Enrolling</span>'}
      </div>
      <h3>${course.title}</h3>
      ${avatars.length ? `<div class="mentor-row" aria-label="Mentors">${avatars.map((src) => `<img src="${src}" alt="" loading="lazy">`).join("")}</div>` : ""}
      <div class="meta-row" style="margin-top:auto">
        ${isComingSoon ? '<span></span>' : `<span class="price">${money(course.price)}</span>`}
        <a class="btn btn-secondary" href="${localPath(course.url)}">
          View details
        </a>
      </div>
    </div>
  </article>`;
}

export function homePage(site) {
  const courses = site.courses;
  const counts = site.testCounts;

  return `
  <main id="main">
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <p class="hero-eyebrow">Bharat's most-loved defence exam platform</p>
          <h1 lang="hi">सर नीचे और बस अपनी मेहनत</h1>
          <p class="hero-sub">Head down, just hard work. Live classes, mock tests, notes and doubt support for CDS, NDA, AFCAT, CAPF and SSB &mdash; guided by mentors who've walked the same path.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#live-batches">Explore live batches</a>
            <span class="hero-note">All mock tests, notes and magazines are free.</span>
          </div>
        </div>
        <div class="hero-visual">
          <img src="/assets/images/brand/hero-banner.webp" alt="CDS Journey students preparing for defence exams" width="1440" height="600">
        </div>
      </div>
    </section>

    <section class="insignia-strip" aria-label="Exams covered">
      <div class="wrap insignia-row">
        <div class="insignia-item"><img src="/assets/images/exams/cds-insignia.png" alt="" loading="lazy"><span>CDS</span></div>
        <div class="insignia-item"><img src="/assets/images/exams/nda-insignia.gif" alt="" loading="lazy"><span>NDA</span></div>
        <div class="insignia-item"><img src="/assets/images/exams/afcat-insignia.png" alt="" loading="lazy"><span>AFCAT</span></div>
        <div class="insignia-item"><span class="icon-fallback" style="width:1.75rem;height:1.75rem;font-size:10px" aria-hidden="true">CAPF</span><span>CAPF</span></div>
        <div class="insignia-item"><span>+ SSB Interview guidance</span></div>
      </div>
    </section>

    <section class="section" id="live-batches">
      <div class="wrap">
        <div class="section-head">
          <h2>Live batches</h2>
          <p>Structured, mentor-led batches for the 2027 exam cycle. Prices shown are the platform's current listed fees.</p>
        </div>
        <div class="card-grid">
          ${courses.map(courseCard).join("\n")}
        </div>
      </div>
    </section>

    <section class="section section-alt" id="test-series">
      <div class="wrap">
        <div class="section-head">
          <h2>Free test series</h2>
          <p>Exam-pattern mock tests, sectional practice and PYQ analysis &mdash; free, accessible any time.</p>
        </div>
        <div class="test-grid">
          ${testCard("CDS", counts.CDS, { linkToDetail: true })}
          ${testCard("NDA", counts.NDA, { linkToDetail: true })}
          ${testCard("AFCAT", counts.AFCAT, { linkToDetail: true })}
          ${testCard("CAPF", counts.CAPF, { linkToDetail: true })}
        </div>
      </div>
    </section>

    <section class="section" id="why-choose">
      <div class="wrap">
        <div class="section-head">
          <h2>Why choose CDS Journey</h2>
        </div>
        <div class="reason-list">
          <div class="reason-item"><div class="mark" aria-hidden="true">1</div><div><h3>Live interactive classes</h3><p>Taught directly by founder Anurag Tripathi and the mentor team, with real-time doubt-solving.</p></div></div>
          <div class="reason-item"><div class="mark" aria-hidden="true">2</div><div><h3>Personal Telegram groups</h3><p>Every batch gets its own Telegram group, plus a direct line to Anurag Bhaiya for doubts.</p></div></div>
          <div class="reason-item"><div class="mark" aria-hidden="true">3</div><div><h3>Time-bound practice</h3><p>Section-wise and full-length tests built for accuracy and exam-day time management.</p></div></div>
          <div class="reason-item"><div class="mark" aria-hidden="true">4</div><div><h3 class="brush-underline">No books required</h3><p>Everything you need &mdash; notes, PDFs and recorded classes &mdash; lives inside the app.</p></div></div>
        </div>
      </div>
    </section>

    <section class="tagline-reveal section-alt">
      <div class="wrap">
        <p class="hindi" lang="hi">सर नीचे और बस अपनी मेहनत</p>
        <div class="stats">
          <div class="stat"><b>9</b><span>AIR-1 ranks in 3 years</span></div>
          <div class="stat"><b>1000s</b><span>aspirants cleared CDS / AFCAT / NDA</span></div>
          <div class="stat"><b>100s</b><span>SSB-recommended, now serving officers</span></div>
        </div>
        <p class="caveat">Figures as reported by CDS Journey (About Us); not independently audited.</p>
      </div>
    </section>

    <section class="band">
      <div class="wrap band-grid">
        <div>
          <h2>Take it with you</h2>
          <p>Follow along on Instagram and YouTube, or install the app for offline notes and recorded classes.</p>
          <div class="store-badges">
            <a href="https://play.google.com/store/apps/details?id=com.cds.cdsjourney" aria-label="Get it on Google Play"><img src="/assets/images/brand/google-play-badge.svg" alt=""></a>
            <a href="https://apps.apple.com/in/app/cds-journey/id6443427955" aria-label="Download on the App Store"><img src="/assets/images/brand/apple-badge.png" alt=""></a>
          </div>
          <div class="social-links">
            <a class="icon-btn" href="https://www.instagram.com/cds.journey" aria-label="Instagram"><img src="/assets/images/social/instagram.svg" alt=""></a>
            <a class="icon-btn" href="https://youtube.com/@cdsjourney" aria-label="YouTube"><img src="/assets/images/social/youtube.svg" alt=""></a>
            <a class="icon-btn" href="https://x.com/cdsjourney_" aria-label="X"><img src="/assets/images/social/twitter.svg" alt=""></a>
          </div>
        </div>
        <div class="band-visual"><img src="/assets/images/brand/app-preview.png" alt="CDS Journey app preview" loading="lazy"></div>
      </div>
    </section>
  </main>`;
}
