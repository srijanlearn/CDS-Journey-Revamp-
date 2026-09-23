import { breadcrumb } from "../partials/layout.mjs";
import { testCard } from "../lib/test-assets.mjs";

// The catalogue page (/testseries/). Source quote used as the page's tagline
// reveal is real, scraped copy from the live site's own testseries page.
export function testSeriesPage(site) {
  const counts = site.testCounts;
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Mock tests" }])}
    <section class="hero" style="padding-bottom:2rem">
      <div class="wrap" style="text-align:center;max-width:44rem">
        <h1 style="font-size:var(--text-2xl)">All defence exam mock tests</h1>
        <p class="hero-sub" style="margin:1rem auto 0">&ldquo;Compare yourself to who you were yesterday, not to who someone else is today.&rdquo; &mdash; Jordan Peterson</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="test-grid">
          ${testCard("CDS", counts.CDS, { linkToDetail: true })}
          ${testCard("NDA", counts.NDA, { linkToDetail: true })}
          ${testCard("AFCAT", counts.AFCAT, { linkToDetail: true })}
          ${testCard("CAPF", counts.CAPF, { linkToDetail: true })}
        </div>
      </div>
    </section>
  </main>`;
}
