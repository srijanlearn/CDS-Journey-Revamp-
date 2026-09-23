# CDS Journey brand guidelines v0.1

Status: implementation direction, not owner-approved identity or completed redesign.

## Principle
A trusted mentor, built for daily preparation. Simple, premium and easy to use means clear information and restrained visual design, not decoration.

## Preserve
Keep the existing logo, recognisable deep teal/gold palette, genuine faculty images and natural Hindi voice. Use only source-backed course information. Record image/font provenance and obtain permission before a public branded launch. This repository is public; a branch is not a private preview.

## Visual system
| Role | Value | Usage |
|---|---|---|
| Brand | #023F47 | Primary actions and headings |
| Secondary | #0B6B76 | Supporting brand emphasis |
| Gold | #F5B301 | Small highlights with dark text |
| Paper | #F7F6F2 | Proposed quiet page background |
| Surface | #FFFFFF | Reading and interaction surfaces |
| Ink | #172B2D | Body copy |
| Muted ink | #526466 | Secondary copy |
| Border | #DCE4E2 | Decorative separators, not sole control boundaries |
| Control border | #637B7A | Form boundaries; verify actual contrast |
| Error | #B4232A | Error text plus a descriptive message |

Source palette: existing clone. Paper, ink, muted and border tokens are proposed additions. Test all foreground/background combinations; no accessibility certification is claimed.

## Typography
Poppins headings and Jost body preserve the source direction. Use a Devanagari-capable fallback and test Hindi shaping and line height. Font files must be licensed and their actual glyph coverage verified before self-hosting. Current fonts.css references remote URLs despite its self-hosted comment. Body target: 16–18px with approximately 1.6 line-height. Do not crop Hindi text or bake essential course details into images.

## Components and layout
Use an 8px base spacing rhythm with 4px refinements. Controls should have modest 8px radii, cards 16px, overlays 20px. Avoid shadows on every element. Gold is not a small-text colour on white. Prefer readable lists over card grids for dense resources. Marketing, course detail and test screens need distinct information density with shared tokens.

## Content and imagery
No fake testimonials, fabricated selection counts, generated faculty, guaranteed outcomes or artificial urgency. Keep coming-soon courses unavailable unless verified. Extract image-only syllabus content faithfully before restructuring it. Preserve policy meaning and source URLs. Use original logo assets without distortion; exact clear-space and minimum sizes remain to be validated.

## Interaction
One dominant action per task. All interactive controls need keyboard focus, loading/error/empty states, proper labels and useful feedback. Never simulate a successful payment or real OTP verification. Reduced-motion preference must be honoured. No decorative animation in timed tests. Aim for WCAG 2.2 AA, with manual and automated verification still required.

## Related work
Design brief: https://app.ashna.ai/artifact/6ab3d427ee3e03000c4615a9
Sources reviewed 2026-09-23: https://www.cdsjourney.com/ ; https://www.pw.live/defence ; https://testbook.com/cds . Competitor research covers content/navigation only, not measured usability results.
