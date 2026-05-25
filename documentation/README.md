# ELTE Cybersecurity Lab Portal - Documentation

LaTeX source for the project documentation. Built on the `elteikthesis` class.

## File Structure

- `main.tex` — main file, compile this one
- `references.bib` — bibliography
- `elteikthesis.cls` — ELTE thesis class (do not edit)
- `chapters/`
  - `01_introduction.tex`
  - `02_user_documentation.tex`
  - `03_developer_documentation.tex`
  - `04_challenges_and_improvements.tex`
- `images/` — drop screenshots here

## How to Build in TeX Studio

1. Open `main.tex` and set it as the master document: Options -> Root document -> Set current document as root.
2. Set the build engine to pdfLaTeX, then Biber, then pdfLaTeX twice more.
3. Build with F5 (Build and View).

If TeX Studio reports missing references on the first build, run the full cycle manually: `pdflatex`, then `biber`, then `pdflatex` twice.

## Adding Images

Drop image files (png, jpg, pdf) into the `images/` folder. In a chapter, reference them like this:

```latex
\begin{figure}[H]
    \centering
    \includegraphics[width=0.78\textwidth]{images/your_image.png}
    \caption{Caption goes here.}
    \label{fig:your-label}
\end{figure}
```

The `[H]` specifier pins the figure to the exact position it is written. This is intentional, the document uses fixed placement so screenshots stay next to the prose that introduces them. Without `[H]` the compiler may float the figure several pages ahead.

The screenshots from the website (Projects, Research, Operations, CodeBases, Publications, Team, Mini Apps, Gallery, Contact, GitHub) all live in `images/`. Suggested file names:

- `images/home_page.png`
- `images/projects_page.png`
- `images/research_page.png`
- `images/operations_page.png`
- `images/codebases_page.png`
- `images/codebases_detail.png`
- `images/publications_page.png`
- `images/team_page.png`
- `images/miniapps_page.png`
- `images/gallery_page.png`
- `images/contact_page.png`
- `images/github_org_page.png`

## Adjusting Metadata

In `main.tex`:

- `\title{...}` for the document title
- `\author{...}` for the author name
- `\supervisor{...}` and `\affiliation{...}` for the supervisor
- `\date{2026}` for the year

## Adding a New Chapter

1. Create a new file in `chapters/`, e.g. `chapters/05_new_chapter.tex`.
2. Open it with a chapter header:

```latex
\chapter{New Chapter}\label{ch:new}
```

3. Add an `\input{chapters/05_new_chapter.tex}` line in `main.tex` inside the main content block.

## Adding a New Bibliography Entry

Edit `references.bib` and add a new entry. Cite it in a chapter with `\cite{key}`.

## Notes

The `lmodern` package is loaded on top of `elteikthesis` to fix a font ligature issue. Without it, words containing `fi` and `fl` render with the leading character dropped (so `finished` becomes `nished`). Do not remove the `\usepackage{lmodern}` line in `main.tex`.