<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:164e63,50:0891b2,100:72e3e8&height=210&section=header&text=Cybersecurity-Lab%20Portal&fontSize=44&fontColor=ffffff&fontAlignY=38&desc=The%20web%20portal%20of%20the%20ELTE%20Cybersecurity%20Lab&descSize=14&descAlignY=60&animation=fadeIn" width="100%" alt="Cybersecurity-Lab Portal"/>

<p>
  <a href="https://elte-cybersec.github.io/"><img alt="Live Site" src="https://img.shields.io/badge/🌐_Open_Live_Site-elte--cybersec.github.io-0891b2?style=for-the-badge&labelColor=164e63"></a>
  <a href="https://github.com/elte-cybersec"><img alt="Organisation" src="https://img.shields.io/badge/🏛️_GitHub_Org-elte--cybersec-1e3a8a?style=for-the-badge&labelColor=172554"></a>
</p>

<sub><i>Source code for the public web portal of the <a href="https://www.inf.elte.hu/en">ELTE Faculty of Informatics</a> Cybersecurity Lab</i></sub>

</div>

<br/>

## 🎯 About this repository

This repository holds the source code for the lab's public web portal. The site presents the lab's research projects, codebases, publications, team, and interactive cybersecurity tools in one place, with a chapter-like structure designed to grow as the lab grows.

The portal is built as a static client-side application and hosted directly from this repository through GitHub Pages.

<div align="right"><sub><a href="https://elte-cybersec.github.io/">Open the live portal →</a></sub></div>

---

## 🧱 Tech stack

<table>
  <tr>
    <td width="33%" valign="top">
      <h3>⚛️ Frontend</h3>
      <sub>React with TypeScript, Material UI components, Emotion for styling, React Router with hash routing for GitHub Pages compatibility.</sub>
    </td>
    <td width="33%" valign="top">
      <h3>⚡ Build</h3>
      <sub>Vite for the dev server and production bundle. Markdown content for the CodeBases pages is loaded at build time through Vite's glob import.</sub>
    </td>
    <td width="33%" valign="top">
      <h3>🚀 Hosting</h3>
      <sub>Deployed as a static bundle to GitHub Pages. No backend, no database, no server-side rendering. Everything lives in the static output.</sub>
    </td>
  </tr>
</table>

---

## 📁 What is inside

- `src/components/` — React components, grouped by page
- `src/data/` — typed data files that drive every page (team, publications, projects, research, operations, gallery, etc.)
- `src/content/` — Markdown files, one per repository, rendered on the CodeBases page
- `src/types/` — shared TypeScript interfaces
- `src/utils/` — small helpers (asset path resolver, Markdown parser, gallery page builder, publication filters)
- `src/theme/` — Material UI theme configuration and dark/light mode context
- `public/` — static assets (logos, avatars, gallery photos, publication venue images)
- `portal-docs/` — LaTeX source for the full project documentation

---

## 🧩 How the portal is structured

Each page reads its content from one or more files in `src/data/`. Adding a team member, a publication, a research area, or a project is a single-file change. Components only read data and render it, they do not hold content directly. This keeps the portal editable without touching component code, and it lets the lab grow the content over time without breaking layouts.

The CodeBases page is a special case: it reads Markdown files from `src/content/`, one per repository, and renders them as a navigable course rather than as one long scroll. A small convention (`#` for the title, `##` for topics, `###` for sub-topics) keeps every repository's documentation consistent.

---

## 🛠️ Local development

```bash
npm install
npm run dev
```

The dev server runs at the URL Vite prints in the terminal. Build the production bundle with `npm run build`. The output lives in `dist/` and is what GitHub Pages serves.

---

## 📖 Documentation

Full project documentation lives in `portal-docs/` as LaTeX source. It covers the user-facing walkthrough of each page, the developer-facing architecture and design decisions, and the remaining gaps to be addressed in future iterations. Build instructions are in `portal-docs/README.md`.

---

<div align="center">

<p>
  <a href="https://elte-cybersec.github.io/"><img alt="Visit Site" src="https://img.shields.io/badge/🌐_Visit_the_Live_Portal-dc2626?style=for-the-badge&labelColor=7f1d1d"></a>
</p>

<sub>Eötvös Loránd University · Faculty of Informatics · Department of Computer Algebra · Budapest, Hungary</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:72e3e8,50:0891b2,100:164e63&height=80&section=footer" width="100%" alt=""/>

</div>