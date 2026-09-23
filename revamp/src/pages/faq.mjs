import { breadcrumb } from "../partials/layout.mjs";

// Q&A pairs transcribed verbatim from site-data.json -> company.faq.body
// (source: cdsjourney.com/faq/, scraped 2026-09-23).
const FAQS = [
  { q: "What makes CDS Journey different from other coaching platforms?", a: "We focus on concept-based learning rather than rote memorization. Our structured classes, high-quality study material, and personalized mentorship ensure that students are exam-ready." },
  { q: "Do you provide study material along with the classes?", a: "Yes, we provide comprehensive PDFs, notes, and quizzes for each subject, along with recorded classes for revision." },
  { q: "How can I enroll in a batch?", a: "Visit the Live Batches section and choose the batch you want to enroll in." },
  { q: "How do I access class recordings?", a: "All recorded classes are available inside the app. Log in with your registered ID to access recordings anytime." },
  { q: "How do I purchase a batch?", a: "Select the batch, add it to the cart, go to the cart section, and complete the payment process to confirm your enrollment." },
  { q: "Is there any free content available?", a: "Yes — free high-quality YouTube lectures with PYQ analysis, free digital notes, and free mock tests." },
  { q: "How can I contact CDS Journey for queries?", a: "Email support@cdsjourney.com or call/WhatsApp +91 9198151228." },
];

export function faqPage() {
  return `
  <main id="main">
    ${breadcrumb([{ label: "Home", href: "/" }, { label: "FAQ" }])}
    <section class="hero" style="padding-bottom:2rem">
      <div class="wrap" style="text-align:center;max-width:36rem">
        <h1 style="font-size:var(--text-2xl)">Frequently asked questions</h1>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="accordion">
          ${FAQS.map((f, i) => `
          <details ${i === 0 ? "open" : ""}>
            <summary>${f.q}</summary>
            <div class="answer">${f.a}</div>
          </details>`).join("")}
        </div>
        <p style="text-align:center;margin-top:2rem;color:var(--color-text-muted)">
          Still have questions? <a href="mailto:support@cdsjourney.com" style="color:var(--color-brand-secondary);text-decoration:underline">support@cdsjourney.com</a> ·
          <a href="tel:+919198151228" style="color:var(--color-brand-secondary);text-decoration:underline">+91 9198151228</a>
        </p>
      </div>
    </section>
  </main>`;
}
