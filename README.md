# Academic Portfolio

Personal academic portfolio website for Arifa Sultana Sadia, an undergraduate
pharmacy student at Manarat International University, Bangladesh, built with
plain **HTML**, **CSS** and **JavaScript**.

## Overview

The site presents an academic profile in a clean, professional format:

- **Home / Introduction** — name, professional title and short introduction
- **About Me** — background, academic snapshot and activities
- **Education** — education timeline
- **Research Interests** — research fields of interest
- **Academic Achievements** — awards and recognitions
- **Skills** — techniques, tools and languages
- **Contact** — academic contact details

## Project Structure

```
My-Academic-Portfolio/
├── index.html              # Single-page portfolio website
├── css/
│   └── style.css           # Styles, responsive rules, animations
├── js/
│   └── script.js           # Navigation, scroll behaviour, reveals
├── assets/                 # Placeholder for future images
├── portfolio.tex           # LaTeX source of the academic portfolio
├── README.md
├── .gitignore
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment workflow
```

## Features

- Fully responsive layout for desktop, tablet and mobile.
- Subtle scroll-reveal animations and smooth single-page navigation.
- Academic design with serif headings and a calm, paper-toned palette.
- No backend, no paid services and no third-party APIs (beyond optional
  font loading, with system-font fallbacks).
- Contact details are placeholders; no real personal data is included.

## Content Notes

- The website content reflects the academic information provided by the
  author (name, education, research interests, achievements, skills).
- Placeholder values still present: `[Field / Institution]` (higher studies
  goal) and `[ORCID_iD]` / `[Scholar Profile URL]` (research profiles).

## Getting Started

Open `index.html` directly in a browser, or serve the folder locally:

```bash
# from the project root
python -m http.server 8000
# then visit http://localhost:8000
```

## Deployment — GitHub Pages

The repository is prepared for GitHub Pages deployment:

1. Push this repository to GitHub (default branch, e.g. `main`).
2. In repository settings, enable **GitHub Pages**.
3. Under **Build and deployment**, set Source to **GitHub Actions**.
4. Push to the default branch; the included workflow
   (`.github/workflows/deploy.yml`) builds and publishes the site.

Alternatively, with Source set to **Deploy from a branch**, choose the
`main` branch and the `/ (root)` folder.

## Placeholder Policy

All personal details that were not provided — such as the higher studies goal
or research profile identifiers — are **placeholders** (e.g. `[Field / Institution]`,
`[ORCID_iD]`, `[Scholar Profile URL]`) and must be replaced with verified
information before publishing.

## License

Add your preferred license here.
