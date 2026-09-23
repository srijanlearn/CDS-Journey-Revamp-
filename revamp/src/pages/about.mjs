import { breadcrumb } from "../partials/layout.mjs";

// Content transcribed verbatim from CDS Journey/content/site-data.json ->
// company.about.body (source: cdsjourney.com/about-us/, scraped 2026-09-23).
export function aboutPage() {
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "About us" }])}
    <section class="hero" style="padding-bottom:2rem">
      <div class="wrap" style="max-width:44rem;text-align:center">
        <h1 style="font-size:var(--text-2xl)">What we do</h1>
        <p class="hero-sub" style="margin:1rem auto 0">CDS Journey is a coaching platform dedicated to preparing students for CDS, AFCAT and NDA exams, along with SSB interview training &mdash; high-quality content, structured learning and expert mentorship for aspirants of the Indian Armed Forces.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap legal-article">
        <h2>Our key offerings</h2>
        <p><strong>1. Live batches</strong> &mdash; structured batches for CDS (IMA &amp; OTA), AFCAT and NDA, plus a dedicated SSB guidance batch covering OIR, PPDT, GTO and personal-interview coaching.</p>
        <p><strong>2. Test series &amp; practice mocks</strong> &mdash; exam-simulating mock tests across CDS, AFCAT and NDA, plus SSB screening practice (OIR &amp; PPDT).</p>
      </div>
    </section>

    <section class="tagline-reveal section-alt">
      <div class="wrap">
        <h2 style="font-size:var(--text-lg);margin-bottom:1.5rem">Our achievements</h2>
        <div class="stats">
          <div class="stat"><b>9</b><span>AIR-1 ranks in the last 3 years, across exams</span></div>
          <div class="stat"><b>1000s</b><span>aspirants cleared CDS, AFCAT and NDA</span></div>
          <div class="stat"><b>100s</b><span>SSB-recommended, now serving officers</span></div>
        </div>
        <p class="caveat">Figures as reported by CDS Journey; not independently audited.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap" style="text-align:center;max-width:36rem">
        <h2 style="font-size:var(--text-lg);margin-bottom:1rem">Our motto</h2>
        <p class="hindi" style="font-family:var(--font-heading);font-size:var(--text-xl);color:var(--color-brand)" lang="hi">"सर नीचे और बस अपनी मेहनत"</p>
        <p style="margin-top:1rem;color:var(--color-text-muted)">&mdash; Anurag Tripathi, Founder</p>
        <p style="margin-top:1rem;color:var(--color-text-muted)">We believe discipline, consistency and the right guidance are the keys to success in defence exams.</p>
      </div>
    </section>
  </main>`;
}
