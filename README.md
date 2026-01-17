# CryFoxWebsite

Marketing website for **CryFox** — a modern, privacy-first browser brand concept.

Built with **Astro** + **Tailwind CSS** and designed as a clean, “browser-landing-page” style site (Waterfox-ish vibes, but original code/content).

## Tech Stack

- **Astro** (pages + layouts)
- **Tailwind CSS** (styling)
- **TypeScript** (Astro project type checking)
- **Vite** (dev server / bundler via Astro)

## Project Structure

Key folders you’ll care about:

- `src/pages/` — Routes (each page is its own file)
  - `index.astro` — landing page
  - `features.astro`, `download.astro`, `privacy.astro`, `support.astro`, `about.astro`
  - `blog/index.astro`, `blog/[slug].astro`
- `src/layouts/` — Shared layout(s)
  - `MainLayout.astro`
- `src/styles/` — Global styles
  - `global.css`
- `public/` — Static assets (favicon, images, etc.)

Astro routing note: `src/pages/features.astro` becomes `/features` (not `/features.astro`).

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
