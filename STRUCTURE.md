# Project Structure

## Overview

This repository is a small Next.js 16.2.7 App Router portfolio using React 19, TypeScript, and Tailwind CSS 4. The root-level `AGENTS.md` contains the project-wide agent rules and the required instruction to consult the installed Next.js documentation before changing framework APIs.

## Directory Map

```text
.
|-- app/
|   |-- layout.tsx             # Root layout, metadata, fonts, and shared header
|   |-- page.tsx               # Home hero, identity animation, and section links
|   |-- globals.css            # Theme tokens, shared components, responsive styles
|   |-- site-navigation.tsx    # Desktop links and interactive mobile menu
|   |-- theme-toggle.tsx       # Light/night mode state and persistence
|   |-- about/page.tsx         # About route content
|   |-- project/page.tsx       # Selected projects route content
|   `-- cv/page.tsx            # Experience, education, and skills route content
|-- public/                    # Static assets; currently empty
|-- AGENTS.md                  # Always-on project rules
|-- CLAUDE.md                  # References AGENTS.md
|-- next.config.ts             # Next.js configuration
|-- postcss.config.mjs         # Tailwind CSS 4 PostCSS plugin
|-- eslint.config.mjs          # ESLint configuration
|-- tsconfig.json              # TypeScript configuration
|-- package.json               # Scripts and dependencies
`-- README.md                  # Default create-next-app README; may not reflect current branding
```

## Where to Make Changes

- **Add or edit a route:** use the corresponding `app/<route>/page.tsx`. New routes use the App Router folder convention and should also be added to `app/site-navigation.tsx` and, where appropriate, the home section links in `app/page.tsx`.
- **Change the shared header:** `app/layout.tsx` owns the global shell and font loading. `app/site-navigation.tsx` owns navigation interactions; `app/theme-toggle.tsx` owns theme switching and persistence. Keep these responsibilities separate.
- **Change visual styles:** `app/globals.css` is the shared stylesheet and source of truth for theme tokens, typography, header layout, responsive behavior, and page components. Prefer existing CSS variables and class patterns over page-specific hard-coded colors.
- **Change the animated home identity:** `app/page.tsx` contains the accessible name/role markup; its animation timing and transitions are in `app/globals.css`. Keep the two labels exclusive, preserve the three-second handoff, and respect reduced-motion preferences.
- **Add static files:** place them in `public/` and reference them using the framework's supported public asset conventions.

## App Behavior

- Routes currently available: `/`, `/about`, `/project`, and `/cv`.
- The root layout is shared by every route. Pages are Server Components by default; the navigation and theme toggle are Client Components because they use state and browser APIs.
- The theme toggle stores the selected theme in `localStorage` and falls back to the system color preference when no choice has been saved.
- The mobile menu is controlled by `site-navigation.tsx`; keep its accessible labels, `aria-expanded`, route-close behavior, and CSS breakpoint in sync.
- The home hero alternates `Chua Zu Mei` and `Fullstack developer` in a six-second cycle, with a three-second handoff.

## Tooling

- `npm run dev` starts the development server.
- `npm run lint` runs ESLint.
- `npm run build` runs a production build.
- Read the relevant guide under `node_modules/next/dist/docs/` before changing Next.js APIs; see `AGENTS.md` for the full project rules.
