# Editing this site

Static site, no build step: edit files, commit, push to `main`, and the GitHub
Actions workflow redeploys. Everything visitors see is on `index.html`.

## Where things live

| What | File / location |
|------|-----------------|
| All page content | `index.html` (one section per topic) |
| Colours, fonts, spacing | `assets/css/tokens.css` |
| Component styles | `assets/css/styles.css` |
| Mobile menu / reveal / year | `assets/js/main.js` |
| Favicon | `assets/favicon.svg` |
| Diagrams | `assets/images/projects/*.svg` |
| CV | `cv.pdf` |

## Common edits

**Experience:** in `index.html`, find `id="experience"`. Each role is a
`<li class="entry">` inside a `.timeline` list. There are two tracks
(`Research & academic`, `Industry & software engineering`). Copy an existing
`entry` block and edit the role, org, dates (`entry__dates`), context, bullet
points (`entry__points`), and `entry__tech`.

**Publications:** find `id="publications"`. Each paper is a `<li class="pub">`
with a stable id (`pub-dsn`, `pub-rmlgym`) used by the "publication details"
links in Selected work. Wrap Hisham's name in `<span class="me">…</span>` so it
is emphasised consistently. Add DOI/PDF links inside `.pub__links`.

**Selected work:** find `id="research"`. Each project is an `<article
class="work-card">`. Only add a `<figure class="work-card__figure">` with an
image when the diagram genuinely explains the work (and give it real `alt`
text). Keep to a small number of strong entries.

**Links / CV:** profile links (Scholar, ORCID, GitHub, LinkedIn) appear in the
hero, the Contact section, and the footer — update all three. The CV link points
to `cv.pdf` from the nav and hero.

**Education:** find `id="education"`. Each degree is a `<li class="edu">`.

## Adding a new section

1. Add a `<section class="section" id="new-id" aria-labelledby="new-title">`
   inside `<main>` with a `<h2 class="section__title" id="new-title">`.
2. Add a matching `<li><a href="#new-id">…</a></li>` in the `nav__menu`.
3. Put content in `.wrap` and reuse existing component classes rather than
   adding page-specific CSS.

## Deployment

- Push to `main` → `.github/workflows/deploy-pages.yml` deploys automatically.
- **One-time GitHub setting:** `Settings → Pages → Build and deployment →
  Source → GitHub Actions`. Without it the site shows "Site not found".
- Verify locally with a real HTTP server (not `file://`), e.g.
  `python -m http.server 8000` then open `http://localhost:8000/`.
