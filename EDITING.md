# Editing this site

Static site, no build step: edit files, commit, push to `main`, and the GitHub
Actions workflow redeploys.

## Where things live

| What | File / location |
|------|-----------------|
| Home / overview | `index.html` |
| Research & projects | `research.html` |
| Publications | `publications.html` |
| Experience timelines | `experience.html` |
| Biography, education, contact | `about.html` |
| Colours, fonts, spacing | `assets/css/tokens.css` |
| Shared component styles | `assets/css/styles.css` |
| Mobile menu / reveal / year | `assets/js/main.js` |
| Profile icons (SVG) | `assets/icons/` |
| CV | `cv.pdf` |

## Navigation

All five content pages share the same primary nav and order:

Home · Research · Publications · Experience · About · CV

When changing navigation:

1. Update the `nav__menu` list on **every** content page (`index.html`,
   `research.html`, `publications.html`, `experience.html`, `about.html`).
2. Set `aria-current="page"` only on the active item for that page.
3. Do not add Teaching, Education, Engineering or Contact as top-level items.

## Add a publication

1. Open `publications.html`.
2. Add a `<li class="pub" id="pub-…">` with year, title, authors, venue and
   DOI/PDF links.
3. Wrap Hisham's name in `<span class="me">…</span>`.
4. Optionally add a short preview row on `index.html` (keep to the two most
   relevant papers) and a related link from the matching project on
   `research.html`.

## Add a research project

1. Open `research.html` and place the project in the correct section:
   doctoral (`#doctoral` / `#plc-rv`), published research (`#projects` /
   `#rmlgym`), academic ML (`#applied-ai` / `#cifake`), or research software
   (`#research-software` / `#sigma2rml`).
2. Use `<article class="work-card">` with a category label, title, 2–4 sentence
   description, optional `.work-card__tech` line, and publication/repository
   links. Rely on typography and labels — do not add decorative project
   diagrams.
3. Keep Home previews short in `index.html` (details stay on Research).

## Update profile icons

SVG files live in `assets/icons/`:

- `google-scholar.svg`
- `orcid.svg`
- `github.svg`
- `linkedin.svg`

Hero and footer use icon-only `.profile-icon` links (`aria-label` + `title`).
About and Publications may use `.profile-link` (icon + text). After replacing
an SVG, hard-refresh to clear cache. Mask styles in `assets/css/styles.css`
reference these files via `url("../icons/…")`.

## Update the CV

Replace `cv.pdf` in the repository root. Nav and hero already link to
`cv.pdf` (`target="_blank"`). No other path changes are required unless you
rename the file.

## Voice and positioning notes

- Home / About / Research narratives: first person.
- Experience bullets: active CV style (“Developed…”, “Designed…”).
- About “Short bio”: third person only (for programmes/speakers).
- Keep industrial PhD wording as association/collaboration (COBO Group /
  Technoleader), not company employment.
- Malta visit: Dec 2025–Feb 2026; Apr–Jul 2026.
- Keep `30M+` and `5,000+/200+` only in Experience entries.

## Redirect stubs

| File | Destination |
|------|-------------|
| `engineering.html` | `experience.html#industry` |
| `teaching.html` | `experience.html#teaching` |
| `education.html` | `about.html#education` |
| `contact.html` | `about.html#contact` |

Keep `noindex, follow`. Do not list redirects in `sitemap.xml`.

## Deployment

- Push to `main` → `.github/workflows/deploy-pages.yml` deploys automatically.
- **One-time GitHub setting:** `Settings → Pages → Build and deployment →
  Source → GitHub Actions`. Without it the site shows "Site not found".
- Verify locally with a real HTTP server (not `file://`), e.g.
  `python -m http.server 8000` then open `http://localhost:8000/`.
