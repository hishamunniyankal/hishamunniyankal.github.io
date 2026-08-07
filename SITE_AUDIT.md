# Site Audit — hishamunniyankal.github.io

Audit of the personal profile site before the redesign, plus the proposed final
architecture. Written from a full read of every HTML page, all CSS/JS, the
GitHub Pages workflow, `README.md`, `EDITING.md`, `cv.pdf`, and the project SVGs.

`cv.pdf` was **not modified**. Website↔CV inconsistencies are listed in section
"Factual inconsistencies" and "Website vs. CV".

---

## 1. Current information architecture

Eight separate HTML files, each a full page with duplicated `<head>`, top nav,
and an "On this site" sidebar (`page-toc`):

- `index.html` — hero, "What I Do", "Impact Highlights", "How I Build Systems",
  "Featured Work" cards, a "Welcome" section, and seven navigation tiles.
- `about.html` — biography, snapshot aside, topic tag cloud.
- `research.html` — four research cards with SVG diagrams.
- `engineering.html` — two architecture figures + "what I built" / "how I work".
- `publications.html` — two papers + Scholar/ORCID note.
- `teaching.html` — a single teaching-support entry.
- `education.html` — four degree cards with emoji icons.
- `contact.html` — affiliation address, emails, profiles.

Navigation is triplicated: the sticky top nav, the sidebar (`page-toc`), and the
homepage tiles all point at the same eight destinations.

## 2. Content inventory

| Item | Location(s) | Notes |
|------|-------------|-------|
| Hero name/roles/CTAs | index | 5 equally weighted buttons |
| "Open to collaboration" badge | index hero | vague; pulsing dot |
| Runtime verification / PLC / DSN theme | index (×4), research (×4), about, engineering, publications | heavily repeated |
| 30M+ events/day | index "What I Do", index Impact, index Featured, about, engineering (×2), siem SVG | 6+ repetitions |
| 5,000+ students / 200+ schools | index Impact, index Featured, about, engineering (×2) | repeated |
| ST→C transpilation | index Featured, research (×2), engineering | repeated |
| RMLGym | index Featured, research, publications | repeated |
| Education (4 degrees) | education.html | grades shown |
| Teaching support | teaching.html | one short entry |
| Contact (affiliation, emails, profiles) | contact.html | wrong institutional email |
| SVG diagrams | rv-pou, phd-toolchain, rmlgym-flow, siem-streaming, laravel-edu-stack, trace-eval | 6 diagrams; rv-pou/phd/rmlgym reused across index + research |

## 3. Repeated content

- The runtime-verification / DSN 2025 story appears on the home page (three
  separate sections), the research page (three cards), the about page, and the
  publications page.
- `30M+ events/day` appears in at least six places, including inside the
  `siem-streaming.svg` diagram text.
- `5,000+ students` / `200+ schools` appears four times.
- `rv-pou-monitoring.svg`, `phd-toolchain.svg`, and `rmlgym-flow.svg` are each
  used twice (home "Featured Work" and again on the research page).
- Marketing framing ("problem → shipped → outcome") repeats verbatim in nearly
  every card.

## 4. Thin or unnecessary pages

- `teaching.html` — a single paragraph; does not justify a top-level page.
- `education.html` — four cards; fits comfortably inside a Background section.
- The homepage "Welcome" section explains the repository's file split — internal
  detail visitors do not need.
- The seven homepage navigation tiles duplicate the top nav and sidebar.

## 5. Factual inconsistencies (pre-redesign)

- **PhD status:** `<title>` reads "PhD" and about copy implies a completed PhD
  ("Highly accomplished Ph.D. Researcher" wording also lives in the CV). Hisham
  is a **doctoral researcher (PhD ongoing)**, not a PhD holder.
- **Institutional email:** `contact.html` shows `hisham.unniyankal@unige.edu.com`,
  which is not a valid unige address. Correct: `hisham.unniyankal@edu.unige.it`.
- **DSN 2025 authors:** site listed "Federico Parodi, Andrea Alessi". Correct
  authors: Hisham Unniyankal, Davide Ancona, Angelo Ferrando, Fabio Parodi,
  Alessandro Alessi, Federico Bottino.
- **DSN venue framing:** described as "flagship / top-tier dependability venue".
  It appears in the **Industry Track of IEEE/IFIP DSN 2025**; marketing
  superlatives removed.
- **RMLGym year:** site said 2024; it is a **2023** entry in CEUR Workshop
  Proceedings, Vol. 3579.
- **"Shipped" for academic software:** RV framework / transpilers described as
  "shipped". They were developed/implemented/evaluated/published, not released.
- **Industrial partner naming:** about used "COBO Group" only; the CV names
  **Technoleader SRL** (and the PhD engagement line also references COBO). Both
  are now stated as "Technoleader SRL and COBO S.p.A."
- **University name:** mixed "Università degli Studi di Genova" / "University of
  Genova". Standardised to **University of Genoa** in English text.
- **AI assistants as expertise:** about copy promoted "AI coding assistants".
  Removed from the biography per scope.

## 6. Website vs. CV inconsistencies (CV not edited)

- CV job title is "Doctoral Researcher" and the profile summary opens with
  "Highly accomplished" — the website must avoid that self-description.
- CV lists only a Gmail address, a phone number, and LinkedIn. The institutional
  email (`hisham.unniyankal@edu.unige.it`) is **not** on the CV — it comes from
  the task brief. **TODO (confirm with Hisham).**
- CV writes the DSN authors with initials ("Parodi F, Alessi A, Bottino F"). The
  full first names used on the site (Fabio, Alessandro, Federico) come from the
  task brief. **TODO (confirm spelling/order with Hisham).**
- CV does not give an explicit year for RMLGym (only "Vol-3579"). Year 2023 comes
  from the task brief / CEUR Vol-3579 publication date. **TODO (confirm).**
- CV names the industrial PhD collaborator as "Technoleader SRL"; the research
  line also mentions "University of Genova & COBO Group". Site wording:
  "Technoleader SRL and COBO S.p.A." **TODO (confirm exact legal names).**
- CV Freelance Software Engineer duration text reads "1 year 1 month" but the
  dates are "Apr 2020 – present". Site uses the dates. **TODO (confirm).**
- CV does not mention the **University of Malta** visiting period; that entry
  comes from the previous site content and the task brief. **TODO (confirm dates
  and nature of the visit).**
- CV lists many academic projects (Speaker ID, COVID-19 dashboard, Real-vs-AI
  classifier, Sigma2RML, text summarization, timeseries anonymization, image
  generation, multi-agent marketplace, Fourier/Wavelet, Mandelbrot). Only a
  focused subset is surfaced on the site to keep it credible and scannable.

## 7. Visual-design problems

- Excessive nested cards, gradient bands, a gridline hero background, a pulsing
  status dot, monospaced text used for body-like content, and many badges/labels.
- Heavy hover animations (lift + shadow) on most cards.
- Two accent colours (teal + violet) used decoratively throughout, diluting
  hierarchy.
- Repeated architecture diagrams add noise rather than explanation.

## 8. Accessibility problems

- `index.html` skip link targets `#main-content`, but `<main id="main-content">`
  contained only the low-value "Welcome"/tiles block near the page bottom — so
  "skip to content" jumped past the hero and all real content.
- The sidebar `<aside class="page-toc" aria-label="Site navigation">` duplicated
  the primary nav landmark name.
- Emoji degree icons conveyed meaning with no text alternative context.
- `.reveal` sets `opacity: 0` with no non-JS fallback — content is invisible if
  JavaScript fails or the observer never fires (only mitigated for reduced
  motion).
- The mobile menu toggle had no Escape-to-close and no focus management.
- Favicon is an emoji data-URI (⚡), not a real icon; flagged by best-practice
  audits.

## 9. Responsive / mobile problems

- The wide `--layout-max: min(92vw, 1420px)` plus multi-column card grids leave
  very long line lengths on large screens (poor readability, no ~65–72ch cap).
- Uppercase letter-spaced nav wraps to two rows at mid widths.
- Body text and captions rely on small monospaced type that is hard to read on
  phones.

## 10. SEO / metadata problems

- Title/description describe a completed "PhD" and the broad "formal methods,
  data systems & AI" positioning.
- No canonical URL, no Open Graph or Twitter metadata, no JSON-LD, no
  `robots.txt`, no sitemap, no custom `404.html`.
- Emoji-data-URI favicon.

## 11. Maintainability problems

- Nav + sidebar duplicated across eight files; `EDITING.md` documents the chore
  of editing "every HTML file" when a link changes.
- Five CSS files with page-specific selectors (`.eng-*`, `.teach-*`, `.edu-*`,
  `.home-*`) that duplicate general card/list patterns.
- Unused/rarely used tokens and reveal-delay classes.

## 12. Deployment problems

- Public URL returned GitHub Pages' "Site not found" 404.
- The workflow was `jekyll-gh-pages.yml`, running `actions/jekyll-build-pages`
  even though the site is plain static HTML/CSS/JS (no Jekyll needed).
- Most likely root cause: **Pages source not set to "GitHub Actions"** (and/or
  Pages not enabled) in repository settings — a setting that cannot be changed
  from the local environment. See section "Deployment status" below.

---

## 13. Proposed final architecture

One primary profile page (`index.html`) with anchored sections, a compact sticky
nav, and lightweight redirect stubs for the old URLs.

Section order:

1. Hero (`#top`) — name, role, two-sentence statement, affiliation, primary
   actions (research, experience, CV, contact) + secondary profile links.
2. Profile / About (`#profile`) — short bio + evidence-backed capability groups.
3. Experience (`#experience`) — two tracks: research/academic and industry.
4. Selected work (`#research`) — up to four project cards.
5. Publications (`#publications`) — two papers with correct authors + DOI/PDF.
6. Education (`#education`) — degrees (teaching lives in Experience).
7. Contact (`#contact`) — institutional email first, profiles, no phone.

Compact primary nav: Profile · Experience · Selected Work · Publications ·
Education · Contact · **CV** (distinct action).

Old pages become redirect stubs (meta refresh + canonical + `noindex` + JS +
visible fallback link):

- `about.html` → `/#profile`
- `engineering.html` → `/#experience`
- `research.html` → `/#research`
- `publications.html` → `/#publications`
- `teaching.html` → `/#experience`
- `education.html` → `/#education`
- `contact.html` → `/#contact`

## 14. Keep / merge / rewrite / remove table

| Current section | Decision | Destination |
|-----------------|----------|-------------|
| Home hero | Rewrite | `#top` hero (focused role + 4 actions + profile links) |
| "Open to collaboration" badge | Rewrite | specific line in Profile + Contact |
| "What I Do" list | Merge | folded into Profile capabilities |
| "Impact Highlights" band | Remove | metrics moved into Experience (once each) |
| "How I Build Systems" | Remove | negative/defensive framing dropped |
| "Featured Work" cards | Merge → Rewrite | `#research` Selected work |
| "Welcome" + explanation | Remove | internal repo detail, not needed |
| 7 homepage tiles | Remove | replaced by compact nav |
| Sidebar "On this site" | Remove | duplicated the top nav |
| about.html biography | Rewrite | `#profile` |
| about.html tag cloud | Rewrite | capability groups in `#profile` |
| research.html cards | Merge | `#research` Selected work (dedup diagrams) |
| engineering.html systems | Rewrite | `#experience` industry track |
| publications.html | Rewrite | `#publications` (correct authors/year/venue) |
| teaching.html | Merge | `#experience` research track (single entry) |
| education.html | Merge | `#education` (no emoji, grades de-emphasised) |
| contact.html | Rewrite | `#contact` (institutional email, no phone) |
| jekyll-gh-pages.yml | Replace | static upload/deploy Pages workflow |
| Emoji favicon | Replace | `assets/favicon.svg` monogram |
| 5 CSS files | Consolidate | `tokens.css` + `styles.css` |
| main.js (sidebar/reveal) | Rewrite | minimal, accessible mobile menu |

## 15. Selected-work rationale (dedup decision)

The brief suggests up to four selected works and separately requires a rich
Experience section. To avoid presenting the security-analytics pipeline and the
education platform **twice** (once as a job, once as a project) and repeating the
same metrics, the split is:

- **Experience** is the single home for employment detail and the numbers
  `30M+ events/day` (Bluecast) and `5,000+ students / 200+ schools` (freelance
  education platform). Each number appears exactly once, in its entry.
- **Selected work** presents four distinct research/engineering artifacts that
  are *not* employment entries: RV for PLC POUs, the Structured Text→C
  transpiler, RMLGym, and the Sigma2RML transpiler.

This satisfies both "maximum four selected works" and the deduplication rules.

## 16. Deployment status (see also final report)

- Code side: the Jekyll workflow is replaced by an official static-site Pages
  workflow (`.github/workflows/deploy-pages.yml`) plus a `.nojekyll` marker.
- Settings side (**manual, cannot be done locally**):
  `Repository Settings → Pages → Build and deployment → Source → GitHub Actions`.
  Until this is set, the site will keep returning "Site not found".
