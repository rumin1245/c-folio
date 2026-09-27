# C.Z.M | Portfolio

A personal portfolio for Chua Zu Mei, a full-stack developer. The site includes an animated introduction, selected projects, an about page, a CV page, responsive navigation, and persistent light/night themes.

## Run Locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is already occupied, Next.js may choose another available port and print its URL in the terminal.

## GitHub Pages Deployment

This project is exported as a static site into `out/` and deployed to [https://rumin1245.github.io/c-folio/](https://rumin1245.github.io/c-folio/). Production builds use `/c-folio` as the base path; local development keeps the root URL.

The workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever changes are pushed to `main`. In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. After pushing, check the **Actions** tab and wait for the Pages deployment to complete.

## Routes

| Route | Page |
| --- | --- |
| `/` | Welcome hero, rotating name/role, and portfolio section links |
| `/about` | Biography and background |
| `/project` | Selected project entries |
| `/cv` | Experience, education, and skills |

## Features

- Baloo Paaji, self-hosted through `next/font`.
- Responsive header with desktop links, a mobile menu, and a sticky desktop position.
- Light theme on white and night theme on black, with the portfolio palette used for accents and content surfaces.
- A six-second home identity animation that alternates between “Chua Zu Mei” and “Fullstack developer,” with a three-second handoff and reduced-motion support.
- Theme preference saved in local storage, with system preference used until the visitor chooses a theme.

## Project Map

| Path | Responsibility |
| --- | --- |
| `app/layout.tsx` | Root layout, metadata, fonts, and shared header |
| `app/page.tsx` | Home hero and section links |
| `app/about/page.tsx` | About route |
| `app/project/page.tsx` | Projects route |
| `app/cv/page.tsx` | CV route |
| `app/site-navigation.tsx` | Interactive navigation and mobile menu |
| `app/theme-toggle.tsx` | Light/night mode control and persistence |
| `app/globals.css` | Theme tokens, typography, layout, and responsive styling |
| `public/` | Static assets |

See [STRUCTURE.md](STRUCTURE.md) for the architecture guide and [AGENTS.md](AGENTS.md) for project-specific implementation rules.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the static export in `out/` |
| `npm run start` | Starts the Next.js server; not used for the GitHub Pages export |

## Notes for Contributors and AI Agents

- Read `AGENTS.md` before making project changes and consult `STRUCTURE.md` to find the owning file for a change.
- This project uses Next.js 16.2.7. Before changing Next.js APIs or conventions, read the relevant installed guide under `node_modules/next/dist/docs/`; do not assume APIs from a different version.
- Keep pages as Server Components by default. Keep browser state and event handling inside the existing small Client Components unless a new client boundary is necessary.
- Keep the palette and shared styles in `app/globals.css`. Preserve responsive behavior, keyboard access, and reduced-motion handling.
- Do not invent personal, education, employment, project, or skills information. Use accurate owner-provided details or leave an editable prompt.
