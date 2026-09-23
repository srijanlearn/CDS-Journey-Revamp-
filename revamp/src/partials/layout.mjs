// Shared chrome: disclaimer bar, header/nav, footer.
// One dominant filled action per view (brand-guidelines.md "Interaction"):
// the header's own CTA is deliberately a secondary/outline button so it never
// competes with a page's primary hero CTA.

export function disclaimerBar() {
  return `
  <div class="disclaimer">
    <div class="wrap">
      <p>Disclaimer: CDS Journey is an independent exam-preparation platform, not affiliated with or endorsed by any government body conducting CDS, AFCAT, NDA or CAPF. Official sources: <a href="https://www.upsc.gov.in/" rel="noopener">upsc.gov.in</a> (CDS), <a href="https://www.afcat.cdac.in/" rel="noopener">afcat.cdac.in</a> (AFCAT), <a href="https://nda.nic.in/" rel="noopener">nda.nic.in</a> (NDA).</p>
    </div>
  </div>`;
}

export function siteHeader(active = "") {
  const link = (href, label, key, extra = "") =>
    `<a href="${href}" ${active === key ? 'aria-current="page"' : ""}>${extra}${label}</a>`;
  return `
  <header class="site-header" data-site-header>
    <div class="wrap nav">
      <a class="brand" href="/" aria-label="CDS Journey home">
        <img src="/assets/images/brand/cds-logo2-83af84a5b4.png" alt="" width="36" height="18">
        <span class="brand-name">CDS Journey</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        ${link("/#live-batches", "Live Batches", "home", '<span class="live-dot" aria-hidden="true"></span>')}
        ${link("/short-quiz/", "Time-Bound Test", "quiz")}
        ${link("/testseries/", "Mock Tests", "testseries")}
        ${link("/study-material/", "Study Material", "materials")}
        ${link("/current-affairs/", "Current Affairs", "current-affairs")}
      </nav>
      <div class="nav-right">
        <button class="icon-btn" aria-label="Search batches"><img src="/assets/images/brand/search-icon.png" alt=""></button>
        <button class="icon-btn" aria-label="View cart, 0 items">
          <img src="/assets/images/brand/cart-icon.svg" alt="">
        </button>
        <a class="btn btn-secondary" href="#login">Login / Signup</a>
      </div>
    </div>
  </header>`;
}

export function siteFooter(site) {
  const { contact, socials } = site;
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <h4>CDS Journey</h4>
          <p>${contact.address}</p>
          <p style="margin-top:.5rem">Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
          <p>Phone / WhatsApp: <a href="tel:${contact.phone.replace(/\s+/g, "")}">${contact.phone}</a></p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us/">About Us</a></li>
            <li><a href="/contact-us/">Contact Us</a></li>
            <li><a href="/faq/">FAQ's</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms-conditions/">Terms & Conditions</a></li>
            <li><a href="/privacy-policy/">Privacy Policy</a></li>
            <li><a href="/refund-policy/">Refund / Cancellation Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 CDS Journey. All rights reserved.</span>
        <span style="display:flex;gap:1rem">
          <a href="${socials.instagram}" rel="noopener">Instagram</a>
          <a href="${socials.youtube}" rel="noopener">YouTube</a>
          <a href="${socials.x}" rel="noopener">X</a>
        </span>
      </div>
    </div>
  </footer>`;
}

export function breadcrumb(trail) {
  // trail: [{label, href?}] — only the last item is "current"; a middle item
  // with no href (e.g. a non-linkable category label) is plain text, not
  // marked current.
  const parts = trail.map((item, i) => {
    const isLast = i === trail.length - 1;
    const sep = i > 0 ? '<span aria-hidden="true">/</span>' : "";
    let node;
    if (isLast) node = `<span aria-current="page">${item.label}</span>`;
    else if (item.href) node = `<a href="${item.href}">${item.label}</a>`;
    else node = `<span>${item.label}</span>`;
    return sep + node;
  }).join("");
  return `<nav class="wrap breadcrumb" aria-label="Breadcrumb">${parts}</nav>`;
}

// Renders a disabled action as an inert element (not a real link) so
// aria-disabled is actually true, not just labeled true on a clickable <a>.
export function actionButton({ href, label, variant = "btn-primary", disabled = false }) {
  if (disabled) {
    return `<span class="btn ${variant}" aria-disabled="true">${label}</span>`;
  }
  return `<a class="btn ${variant}" href="${href}">${label}</a>`;
}

export function emptyState({ heading, body }) {
  return `
  <section class="section">
    <div class="wrap">
      <div class="empty-state">
        <div class="mark" aria-hidden="true">&#9203;</div>
        <h1>${heading}</h1>
        <p>${body}</p>
      </div>
    </div>
  </section>`;
}

export function pageShell({ title, description, active, bodyClass = "", content }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" href="/assets/images/brand/cds-logo2-83af84a5b4.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Jost:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles/tokens.css">
<link rel="stylesheet" href="/styles/base.css">
</head>
<body class="${bodyClass}">
${disclaimerBar()}
${siteHeader(active)}
${content}
<script>
(function(){
  var header = document.querySelector('[data-site-header]');
  if(!header) return;
  window.addEventListener('scroll', function(){
    header.classList.toggle('is-scrolled', window.scrollY > 4);
  }, { passive: true });
})();
</script>
</body>
</html>`;
}
