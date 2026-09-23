// Sourced from CDS Journey/content/site-data.json -> company.{terms,privacy,refund}
// (source: cdsjourney.com, scraped 2026-09-23).
// TERMS and REFUND are transcribed verbatim (short enough to reproduce exactly,
// including the terms page's body text being privacy-policy language on the
// source site itself — that's what's actually published there, not a mistake
// introduced here). PRIVACY's sections 2-4 and 6-10 are faithful paraphrases of
// meaning, not verbatim legal text — the source runs ~21.8k characters with
// nested sub-clauses that don't fit this page's article layout unedited.
// Before any real/public launch, replace PRIVACY with the verbatim source
// text (CDS Journey/content/pages/privacy.json -> bodyText) reviewed by
// someone qualified to confirm legal meaning wasn't altered in the summary.

export const TERMS = {
  title: "Terms & Conditions",
  intro: [
    "This privacy policy applies to all Users who access the Platform and are therefore required to read and understand the Policy before submitting any Personal Information (defined hereinafter). This privacy policy governs your use of the application of 'CDS Journey', CDS Journey YouTube Channel, www.cdsjourney.com ('Website') and products, Website, and services managed by CDS Journey. By submitting Personal Information, you are consenting to the use and processing of such information in accordance with this Policy. Third-party websites may place their own cookies or other files on the Users' computer, collect data or solicit personal information from the Users, for which CDS Journey is not responsible or liable.",
    "CDS Journey encourages the User to read the privacy policies of each such website/application and the User understands that it is solely such a third party who is responsible to the User in this regard. CDS Journey has taken reasonable precautions as per applicable Indian law and implemented industry standards to treat Personal Information as confidential and to protect it from unauthorized access, improper use or disclosure, modification, and unlawful destruction or accidental loss of the Personal Information. We will not use or share your information with anyone except as described in this Privacy Policy. Each time you use our Service you are accepting the practices described in this Privacy Policy at that time.",
  ],
  sections: [
    {
      heading: "Updates to this Policy",
      paragraphs: [
        "We occasionally update this Policy. When we do, we will also revise the “last modified” date at the beginning of the Policy. Your continued use of our Service after such changes will be subject to the then-current policy. We encourage you to periodically review this Policy to stay informed about how we collect, use, and disclose your information.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: ["If you have any questions about this Privacy Policy, you can contact us:"],
      list: [
        "Mobile no: +91 9198151228",
        "By visiting this page on our Website/Application: www.cdsjourney.com",
        "By emailing us at: support@cdsjourney.com",
      ],
    },
  ],
};

export const REFUND = {
  title: "Refund Policy",
  intro: [],
  sections: [
    {
      heading: null,
      paragraphs: [
        "When you buy our batches, your purchase is not entitled for any refund. If you buy any online batch/service, it is non-refundable. If you purchase any batch by mistake, you can request to change it to another batch of the same amount within 10 days of the purchase. We recommend you to first check the complete system and then decide to make a payment in case of batches or any services.",
        "If you make double payment for the same batch then it will be refunded within 14 days of the purchase. In case of any discrepancy you can write a mail to our admin team — at support@cdsjourney.com",
      ],
    },
  ],
};

export const PRIVACY = {
  title: "Privacy Policy",
  intro: [
    "We value your love & respect. In order to honour that trust, CDS Journey adheres to ethical standards in gathering, using, and safeguarding any information you provide. CDS Journey is a leading edtech company in the field of Defence Exams, incorporated in India, for imparting learning. This privacy policy governs your use of the application ‘CDS Journey’, www.cdsjourney.com (‘Website’) and the other associated Platforms and services managed by the Company.",
    "Given below is the privacy policy published in accordance with the provisions of the Information Technology Act, 2000 (\"IT ACT\"), Information Technology (Intermediary Guidelines) Rules, 2011, Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.",
  ],
  sections: [
    {
      heading: "1. Personal Information that we collect",
      paragraphs: [
        "We collect information about you either when you provide it to us on our app or through the use of our Services, or in some cases, when other sources provide it to us.",
        "A. Personal Information you provide to us — registration and profile information (name, mobile number, e-mail address, date of birth), payment details for paid services (we do not store card/bank details ourselves; a third-party payment processor handles this), and any information you share when contacting support or participating in a survey.",
        "B. Personal Information we collect automatically — device or other IDs (Advertising ID, Android ID, IMEI, BSSID, MAC address) to troubleshoot issues with our app.",
        "C. Information we collect via Cookies — this Service does not use cookies to collect information.",
        "D. Personal Information from Other Sources — we may receive information about you from business customers, partners, and third-party SDKs used to connect with third-party service providers.",
      ],
    },
    {
      heading: "2. How we use Personal Information",
      paragraphs: [
        "We use Personal Information to provide, maintain and improve our Services; for technical support; for fraud prevention; for customer relationship management; to communicate with you; for administrative and legal purposes; and, in aggregated/de-identified form, for other business purposes as permitted by law.",
        "We only process personal information on a valid legal ground: your consent, necessity to provide the Service, a legal obligation, or a legitimate interest that isn't overridden by your own rights and interests.",
      ],
    },
    {
      heading: "3. When we share Personal Information",
      paragraphs: [
        "We may disclose information to third-party service providers (hosting, analytics, IT infrastructure, customer service, email delivery, auditing, payments) limited to what they need to perform their function; when required by law or a court order; to protect against fraud, abuse or legal claims; as part of a merger, acquisition or similar transaction; and to our own affiliates and subsidiaries for the purposes above.",
      ],
    },
    {
      heading: "4. Your rights and choices",
      paragraphs: [
        "You may decline to share certain Personal Information, though this may limit some features. You can access and update most of your information via account settings, or request access, correction, restriction, deletion, or portability of your data by contacting us. You may withdraw consent at any time; this doesn't affect processing that already happened lawfully. You may unsubscribe from commercial email at any time — administrative messages will still be sent.",
      ],
    },
    {
      heading: "5. Access",
      paragraphs: [
        "You may browse the Platform as a guest without an account, though CDS Journey does not validate guest-provided information. Full features require creating an account with the requested registration details; promotional-offer opt-ins are optional.",
      ],
    },
    {
      heading: "6. Third-party services",
      paragraphs: [
        "The Service may link to third-party websites and services. Any information you provide there is governed by that third party's own policies, not this one — we encourage you to review them before sharing information.",
      ],
    },
    {
      heading: "7. How we protect your Personal Information",
      paragraphs: [
        "We implement reasonable technical and organizational security measures, including privacy-by-design and data minimization. If a data breach compromises Personal Information, we will notify you as quickly as possible, as required by regulation.",
      ],
    },
    {
      heading: "8. Duration for which your Information is Stored",
      paragraphs: [
        "When you delete provided information or your account, it is generally deleted from our servers too, except where we must retain it for legal compliance, fraud prevention, analytics, or backups, for as long as that purpose requires.",
      ],
    },
    {
      heading: "9. Children's privacy",
      paragraphs: [
        "Our Services are not directed to children under 18, and we do not knowingly collect Personal Information from anyone under 18. If we learn we've done so, we delete it as quickly as possible — contact support@cdsjourney.com if you believe this has happened.",
      ],
    },
    {
      heading: "10. Country Specific Additional Privacy Terms",
      paragraphs: [
        "If you're located in India, you may have rights under the Personal Data Protection Bill (PDPB) once enacted, including: Right to Confirmation and Access, Right to Correction, Right to Data Portability, Right to be Forgotten, and Right to Erasure (which may result in permanent, non-retrievable account deletion).",
      ],
    },
    {
      heading: "11. Updates to this Privacy Policy",
      paragraphs: [
        "We occasionally update this Policy and revise the “last modified” date accordingly. Continued use of the Service after a change means the then-current policy applies to you.",
      ],
    },
    {
      heading: "12. Grievance Redressal Mechanism",
      paragraphs: [
        "Complaints or concerns about the use, processing or disclosure of your information, or breach of these terms, may be raised with the designated Grievance Redressal Officer:",
      ],
      list: [
        "Name: Anurag Tripathi",
        "Email: support@cdsjourney.com",
        "Address: 5/543 sector 5 Gomti Nagar Extension, Lucknow",
      ],
    },
    {
      heading: "13. How to contact us",
      paragraphs: ["If you have questions about this Privacy Policy:"],
      list: [
        "Mobile: +91 9198151228",
        "Website: www.cdsjourney.com",
        "Email: support@cdsjourney.com",
      ],
    },
    {
      heading: "14. Delete Your Account and Data",
      paragraphs: [
        "To delete your account and all associated data, email support@cdsjourney.com. This removes all personal data, settings and history from the app. This action is irreversible — save anything important before proceeding.",
      ],
    },
    {
      heading: "15. Disclaimer",
      paragraphs: [
        "CDS Journey is not affiliated with or endorsed by any government entity. It is an independent platform providing educational content to help students prepare for defense exams, intended only for learning and preparation for the CDS/AFCAT/NDA exams. For official information, visit afcat.cdac.in (AFCAT) or nda.nic.in (NDA).",
      ],
    },
  ],
};
