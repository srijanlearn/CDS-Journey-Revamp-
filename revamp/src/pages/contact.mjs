import { breadcrumb } from "../partials/layout.mjs";

export function contactPage(site) {
  const { contact } = site;
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "Contact us" }])}
    <section class="hero" style="padding-bottom:2rem">
      <div class="wrap" style="text-align:center;max-width:36rem">
        <h1 style="font-size:var(--text-2xl)">Contact us</h1>
      </div>
    </section>
    <section class="section">
      <div class="wrap contact-grid">
        <div class="contact-card">
          <div class="mark" aria-hidden="true">&#128205;</div>
          <h3>Address</h3>
          <p>${contact.address}</p>
        </div>
        <div class="contact-card">
          <div class="mark" aria-hidden="true">&#9993;</div>
          <h3>Email</h3>
          <p><a href="mailto:${contact.email}">${contact.email}</a></p>
        </div>
        <div class="contact-card">
          <div class="mark" aria-hidden="true">&#128222;</div>
          <h3>Phone / WhatsApp</h3>
          <p><a href="tel:${contact.phone.replace(/\s+/g, "")}">${contact.phone}</a></p>
        </div>
      </div>
    </section>
  </main>`;
}
