// Maps site-data.json course slugs to the curated local asset files copied
// into revamp/assets/images/courses (see git history for provenance — all
// filenames trace back to CDS Journey/content/image-manifest.json).

export const COURSE_ASSETS = {
  "course-kilo-ota": { thumb: "kilo-ota.webp", overview: "kilo-ota-overview.png", subjects: [] },
  "course-india-capf12": { thumb: "india-capf12.webp", overview: "india-capf12-overview.png", subjects: [
    { src: "subject-mentor-session.webp", label: "Mentor session" },
    { src: "subject-batch-detail-1.webp", label: "Batch details" },
  ] },
  "course-lima-nda": { thumb: "lima-nda.webp", overview: "lima-nda-overview.png", subjects: [] },
  "course-india-capf2": { thumb: "india-capf2.webp", overview: "india-capf2-overview.png", subjects: [
    { src: "subject-mentor-session.webp", label: "Mentor session" },
    { src: "subject-batch-detail-1.webp", label: "Batch details" },
  ] },
  "course-kilo-math": { thumb: "kilo-math.webp", overview: "kilo-math-overview.png", subjects: [] },
  "course-juliet-afcat": { thumb: "juliet-afcat.webp", overview: "juliet-afcat-overview.png", subjects: [
    { src: "subject-batch-detail-2.webp", label: "Batch details" },
    { src: "subject-english.webp", label: "English" },
    { src: "subject-maths.webp", label: "Mathematics" },
    { src: "subject-math-sheet.webp", label: "Maths practice sheet" },
    { src: "subject-general-awareness.webp", label: "General awareness" },
    { src: "subject-reasoning.webp", label: "Reasoning" },
    { src: "subject-batch-sheet.webp", label: "Batch sheet" },
  ] },
  "course-ssb-psych": { thumb: "ssb-psych.webp", overview: null, subjects: [
    { src: "subject-ssb-psychology.webp", label: "SSB psychology" },
  ] },
};

const AVATAR_FILES = {
  anurag_bhaiya: "anurag_bhaiya.jpg",
  ashish_sir: "ashish_sir.jpg",
  pooja_maam_UKItbrn: "pooja_maam_UKItbrn.jpg",
  sandeep_sir: "sandeep_sir.jpg",
};

// Decorative use only (e.g. "up to 3 mentor faces" on a course card, with no
// claim about which specific instructor is shown) — matches by substring
// against the source image path.
export function avatarPath(sourcePath) {
  const key = Object.keys(AVATAR_FILES).find((k) => sourcePath.includes(k));
  return key ? `/assets/images/courses/${AVATAR_FILES[key]}` : null;
}

// site-data.json's `instructors` (names) and `avatars` (image paths) arrays
// are NOT positionally aligned — e.g. course-kilo-ota lists instructors as
// [Anurag, Pooja, Ashish] but avatars as [anurag, ashish, pooja]. Pairing by
// array index silently mismatches names to photos. Look up by name instead.
const INSTRUCTOR_AVATARS = {
  "Anurag Tripathi": "anurag_bhaiya.jpg",
  "Ashish Garg": "ashish_sir.jpg",
  "Pooja Budania": "pooja_maam_UKItbrn.jpg",
  "Sandeep Brar": "sandeep_sir.jpg",
  // Ujjwal Tiwari and Muskan Chahal have no captured avatar — renders the
  // initials placeholder instead of a photo, which is correct, not a bug.
};

export function avatarForInstructor(name) {
  const file = INSTRUCTOR_AVATARS[name];
  return file ? `/assets/images/courses/${file}` : null;
}

export function localPath(absoluteUrl) {
  return new URL(absoluteUrl).pathname;
}
