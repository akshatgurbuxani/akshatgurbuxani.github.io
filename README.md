# akshat.dev

Personal portfolio site built with **Next.js (App Router)** + **TypeScript** + **Tailwind**. This repo is configured for **static export** (`output: "export"`), so the build output is the `out/` directory.

## Run locally

### Prereqs
- Node.js 18+

### Dev server

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build (static export) + preview

```bash
npm run build
```

This generates `out/`. Preview it locally:

```bash
cd out
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Architecture

### High-level setup
- **App shell**: `app/layout.tsx` imports `app/globals.css` and wraps the app in `ThemeProvider` (`contexts/ThemeContext.tsx`).
- **Page composition**: `app/page.tsx` renders `Navbar`, `Hero`, and section components wrapped in `Card` containers.
- **Content**: `data/*.ts` is the source of truth (personal info, experience, projects, etc.) consumed by section components.

### Project structure (key files)

```
akshat.dev/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (ThemeProvider)
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles
├── components/             # React components (sections + shared)
│   ├── ui/                 # Reusable UI primitives
│   │   ├── icons/          # Icon components
│   │   ├── SectionHeader.tsx
│   │   └── index.ts
│   ├── Navbar.tsx          # Nav + integrated theme toggle
│   ├── Hero.tsx
│   ├── AtmosphericBackground.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── ProjectModal.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Card.tsx
│   └── index.ts
├── contexts/
│   └── ThemeContext.tsx    # Theme state management
├── data/                   # Portfolio content (source of truth)
│   ├── personal.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── education.ts
│   └── index.ts
├── constants/              # App constants (paths, section IDs, etc.)
│   ├── app.ts
│   └── index.ts
├── types/
│   └── index.ts            # Shared TypeScript types
├── utils/
│   └── animations.ts       # Shared animation helpers
└── public/
    └── akshat_gurbuxani_resume.pdf
```

### Architecture diagram

```mermaid
graph TD
    Browser[Browser] --> NextApp["Next.js (App Router)"]
    NextApp --> Layout["app/layout.tsx (globals.css + ThemeProvider)"]
    Layout --> Page["app/page.tsx (page composition)"]

    Page --> UI["UI components (components/*)"]
    UI --> UIPrimitives["UI primitives (components/ui/*)"]

    UI --> Content["Content (data/*)"]
    UI --> Theme["Theme (contexts/ThemeContext.tsx)"]
    UI --> Assets["Static assets (public/*)"]
```

### Important components
- **`components/Navbar.tsx`**: nav links, integrated theme toggle, clock, resume link.
- **`components/Hero.tsx`** + **`components/AtmosphericBackground.tsx`**: hero + animated background.
- **`components/Projects.tsx`** + **`components/ProjectModal.tsx`**: project grid + modal details.
- **`contexts/ThemeContext.tsx`**: theme state + toggling used by `Navbar` and global styles.

## Update content
- **`data/personal.ts`**: name/title/bio/social + nav links
- **`data/experience.ts`**: experience timeline
- **`data/projects.ts`**: project list + links
- **`data/education.ts`**: education

## License
MIT
