# Portfolio

Akshat Gurbuxani's personal portfolio, built as a static Next.js site for GitHub Pages.

## Stack

- Next.js App Router with static export
- React and TypeScript
- Tailwind CSS plus a small global token system
- Radix Dialog for accessible project details
- A code-native SVG illustration system for the pixel globe and background artwork

The rendered site does not use a WebGL runtime, continuous canvas loop, theme provider, or global pointer listener. Most sections are server-rendered; the projects section is the primary client boundary.

## Local development

Requires Node.js 18 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production export

```bash
npm run lint
npm run build
```

The static site is written to `out/`. To inspect the actual export:

```bash
cd out
python3 -m http.server 3000
```

## Project structure

- `app/` — metadata, page composition, and global design tokens
- `components/PixelScene.tsx` — deterministic SVG background illustration
- `components/` — portfolio sections and project dialog
- `components/ui/` — small reusable interface primitives
- `data/` — typed portfolio content
- `types/` — shared content types
- `constants/` — external paths and app constants
- `AGENTS.md` — design, performance, accessibility, and library decisions

## Content updates

- `data/personal.ts` — identity, biography, contact details, and navigation
- `data/experience.ts` — professional experience
- `data/projects.ts` — selected projects
- `data/education.ts` — education and publications
- `data/skills.ts` — working technologies

## Design and accessibility

The visual system uses a paper-like navy field, warm off-white typography, uneven pixel structures, and editorial layouts. Background motion is limited to lightweight CSS animation and is frozen by `prefers-reduced-motion`. Project details use Radix Dialog for focus management, keyboard interaction, and accessible naming.

See `AGENTS.md` before making visual or architectural changes.

## License

MIT
