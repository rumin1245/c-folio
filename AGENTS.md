<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Context

- This is a Next.js 16.2.7 App Router portfolio built with React 19, TypeScript, and Tailwind CSS 4.
- Existing routes are `/`, `/about`, `/project`, and `/cv`. Keep shared navigation and theme controls in the root layout; add route-specific content in its page file.
- Keep pages as Server Components by default. Use a Client Component only for browser APIs, state, or event handlers, and keep that boundary as small as possible.
- Use `next/link` for internal navigation and `next/font` for bundled fonts.

## Next.js Guidance

- Before changing Next.js APIs or conventions, read the relevant guide in `node_modules/next/dist/docs/`. Follow the installed version's guidance rather than assumptions from other Next.js releases.
- Preserve the App Router structure and existing TypeScript conventions.

## Visual Design

- Use Baloo Paaji as the site-wide font. Keep the Next-hosted font variable and the CSS font fallback aligned.
- The light theme uses a white page background. The dark theme uses a black page background. Do not use `#A8BEDF` as a page background.
- Use the portfolio palette for accents, text, panels, and details: `#A8BEDF`, `#C7D5E8`, `#EFE4D4`, and `#D8C9BA`. Preserve readable foreground/background contrast in both themes.
- Keep theme colors centralized in CSS custom properties in `app/globals.css`; avoid introducing unrelated hard-coded colors in components.
- Keep the desktop navigation beside the theme control. At widths up to 900px, use the three-line menu button; preserve its accessible open/close behavior and the mobile header positioning.
- The home hero alternates `Chua Zu Mei` and `Fullstack developer`, one at a time, on a six-second cycle with a three-second handoff. Keep the same motion in both directions, prevent overlap, and respect `prefers-reduced-motion`.
- Keep layouts responsive and preserve visible focus states, semantic headings, accessible control labels, and keyboard operation.

## Portfolio Content

- Do not invent the owner's biography, location, employment history, education, project details, or skills. Keep clearly editable prompts until the owner provides accurate information.
- Keep the short welcome and identity copy in the home hero; avoid changing it into generic product or marketing copy.

## Validation

- Use `npm run lint` for lint checks and `npm run build` for production build validation after relevant changes.
- For visual or interaction changes, verify the affected route at desktop and mobile widths, including the light and dark themes when applicable.
