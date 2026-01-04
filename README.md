# portfolio

> **Disclaimer:** This code runs on vibes and prayers

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Architecture

### Project Structure

```
akshat.dev/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and CSS variables
├── components/             # React components
│   ├── ui/                 # Reusable UI primitives
│   │   ├── icons/          # Icon components (GitHub, LinkedIn, etc.)
│   │   ├── SectionHeader.tsx # Reusable section header
│   │   └── index.ts        # UI component exports
│   ├── Hero.tsx            # Hero section with gradient text
│   ├── AtmosphericBackground.tsx # Aurora blobs with mouse tracking
│   ├── About.tsx           # About section with gradient cards
│   ├── Experience.tsx      # Timeline experience section
│   ├── Projects.tsx        # Project grid with modal
│   ├── Skills.tsx          # Skills with gradient progress bars
│   ├── Education.tsx       # Education cards with gradient accents
│   ├── Contact.tsx         # Contact section with social links
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── ProjectModal.tsx    # Project detail modal
│   ├── Card.tsx            # Section wrapper component
│   └── index.ts            # Component exports
├── constants/              # Design system & app constants
│   ├── design.ts           # Design tokens (colors, gradients, spacing)
│   ├── app.ts              # App-specific constants (paths, configs)
│   └── index.ts            # Constants exports
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Dark/light theme state management
├── data/                   # Content data (single source of truth)
│   ├── personal.ts         # Name, bio, contact info, social links
│   ├── experience.ts       # Work experience
│   ├── education.ts        # Education and publications
│   ├── skills.ts           # Skills by category
│   ├── projects.ts         # Project details
│   └── index.ts            # Data exports
├── types/                  # TypeScript interfaces
│   └── index.ts            # All type definitions
├── utils/                  # Utility functions
│   └── animations.ts       # Reusable animation variants
└── public/                 # Static assets
    └── akshat_gurbuxani_resume.pdf
```

### Architecture Principles

1. **Separation of Concerns**: Clear separation between data, presentation, and logic
2. **DRY (Don't Repeat Yourself)**: Reusable components and constants
3. **Type Safety**: Full TypeScript coverage with strict typing
4. **Design System**: Centralized design tokens for consistency
5. **Component Composition**: Small, focused, reusable components

### Architecture Diagram

```mermaid
graph TD
    Layout[app/layout.tsx] --> ThemeProvider[ThemeProvider]
    ThemeProvider --> Page[app/page.tsx]

    Page --> Navbar[Navbar]
    Page --> Hero[Hero]
    Page --> AboutCard[Card #about]
    Page --> ExperienceCard[Card #experience]
    Page --> ProjectsCard[Card #projects]
    Page --> EducationCard[Card #education]
    Page --> ContactCard[Card #contact]

    AboutCard --> About[About]
    ExperienceCard --> Experience[Experience]
    ProjectsCard --> Projects[Projects]
    EducationCard --> Education[Education]
    ContactCard --> Contact[Contact]
    
    Navbar --> ThemeToggleButton[ThemeToggleButton (internal)]
    
    Hero --> AtmosphericBackground[AtmosphericBackground]
    
    Projects --> ProjectCard[ProjectCard (internal)]
    Projects --> ProjectModal[ProjectModal]
    
    subgraph Data[Data Layer]
        PersonalData[data/personal.ts]
        ExperienceData[data/experience.ts]
        ProjectsData[data/projects.ts]
        EducationData[data/education.ts]
        Types[types/index.ts]
    end
    
    subgraph Theme[Theme System]
        ThemeContext[ThemeContext]
        Globals[globals.css]
    end
    
    PersonalData --> Hero
    PersonalData --> About
    PersonalData --> Contact
    PersonalData --> Navbar
    ExperienceData --> Experience
    ProjectsData --> Projects
    EducationData --> Education
    Types --> AllComponents[All Components]
    
    ThemeContext --> Navbar
    ThemeContext --> AllComponents
    Globals --> AllComponents
    
    style Projects fill:#9333ea,color:#fff
    style ProjectModal fill:#a855f7,color:#fff
    style ThemeContext fill:#ec4899,color:#fff
```

## Advanced Components

### Atmospheric Background
The hero section features animated aurora blobs with interactive mouse tracking.

- **Aurora Blobs**: Four gradient blobs (purple, blue, pink, cyan) with blur effects that float and animate
- **Mouse Tracking**: Parallax movement using Framer Motion's `useMotionValue` and `useSpring` for smooth following
- **Dot Grid Pattern**: Animated grid that shifts with mouse movement
- **Cursor Spotlight**: Purple glow effect that follows the cursor position
- **Noise Texture**: Subtle grain overlay for texture
- **Radial Vignette**: Edge fade effect for depth

### Hero Section
- **Gradient Text**: Name uses purple→pink→blue gradient with `bg-clip-text`
- **Smooth Animations**: Floaty entrance with blur and scale effects (1.2s duration)
- **Gradient Buttons**: Primary button with purple→pink gradient, secondary with border
- **Scroll Indicator**: Animated arrow that pulses

### Section Components
All sections follow a consistent pattern:
- **Gradient Headers**: Section titles with purple→pink gradient text
- **Gradient Underlines**: Animated underline bars
- **Card Styling**: Rounded corners, soft shadows, gradient accents
- **Smooth Reveals**: Scroll-triggered animations with stagger

## Customization

### Updating Content

All content is in the `data/` directory. Edit these files to update your portfolio:

- **`data/personal.ts`** - Your name, title, bio, contact info, social links
- **`data/experience.ts`** - Work history with descriptions and technologies
- **`data/education.ts`** - Education, activities, coursework, publications
- **`data/skills.ts`** - Skills grouped by category with proficiency levels
- **`data/projects.ts`** - Featured projects with highlights and links

### Styling

The project uses a centralized design system for consistent styling:

- **Design Tokens**: All colors, gradients, spacing, and typography are defined in `constants/design.ts`
- **Theme Colors**: CSS variables in `app/globals.css` for theme colors
- **Gradients**: Use constants from `constants/design.ts` (e.g., `GRADIENTS.primary.both`)
- **Animations**: Reusable animation variants in `utils/animations.ts`
- **Icons**: Reusable icon components in `components/ui/icons/`

#### Updating the Design System

1. **Colors & Gradients**: Edit `constants/design.ts`
2. **Animation Timing**: Modify `ANIMATION_DURATION` and `EASING` in `constants/design.ts`
3. **Spacing**: Update `SPACING` scale in `constants/design.ts`
4. **Theme Colors**: Update CSS variables in `app/globals.css`

## Features

- ✨ **Purple/Pink Gradient Theme** - Cohesive color system throughout
- 🌓 **Dark/Light Theme Toggle** - Smooth transitions between themes
- 🎨 **Aurora Blob Background** - Animated gradient blobs with mouse interaction
- 📱 **Fully Responsive** - Works on all screen sizes
- 🎬 **Smooth Animations** - Floaty, soft animations with Framer Motion
- 📊 **Timeline Experience** - Visual timeline with gradient dots
- 📈 **Skill Progress Bars** - Animated progress bars with gradient fills
- 🎴 **Stacked Project Accordion** - Scroll-triggered accordion with click-to-expand
- 📝 **Contact Form** - Email form with gradient submit button
- 🔒 **Type-Safe** - Full TypeScript coverage

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and interactions

## Code Quality & Best Practices

### Design System

The project follows a design system approach with centralized constants:

- **`constants/design.ts`**: Design tokens (colors, gradients, spacing, typography, animations)
- **`constants/app.ts`**: Application-specific constants (paths, section IDs, configs)
- **`utils/animations.ts`**: Reusable animation variants and helpers

### Reusable Components

- **`components/ui/icons/`**: Icon components (GitHub, LinkedIn, ExternalLink, Email, Download)
- **`components/ui/SectionHeader.tsx`**: Standardized section headers with gradient text
- **`components/Card.tsx`**: Section wrapper component

### Code Organization

- **Data Layer**: All content in `data/` directory with helper functions
- **Type Safety**: Comprehensive TypeScript types in `types/`
- **Component Structure**: Feature components in `components/`, UI primitives in `components/ui/`
- **Utilities**: Helper functions in `utils/`

### Development Guidelines

1. **Use Constants**: Always use constants from `constants/` instead of hardcoding values
2. **Reuse Components**: Use UI components from `components/ui/` instead of duplicating
3. **Animation Utilities**: Use animation helpers from `utils/animations.ts`
4. **Type Safety**: Maintain strict TypeScript typing, avoid `any` types
5. **Component Composition**: Build complex components from smaller, reusable pieces

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Code Style

- **TypeScript**: Strict typing with comprehensive type definitions
- **Framer Motion**: All animations use reusable variants from `utils/animations.ts`
- **Tailwind CSS**: Utility-first styling with design tokens from constants
- **Component Pattern**: Functional components with clear separation of concerns
- **Naming Conventions**: 
  - Components: PascalCase (e.g., `SectionHeader.tsx`)
  - Files: camelCase for utilities, PascalCase for components
  - Constants: UPPER_SNAKE_CASE (e.g., `ANIMATION_DURATION`)

### Architecture Improvements

This codebase has been refactored to follow senior engineer best practices:

- ✅ **Design System**: Centralized design tokens eliminate hardcoded values
- ✅ **Reusable Components**: Icon and UI components reduce duplication
- ✅ **Animation Utilities**: Standardized animation variants for consistency
- ✅ **Type Safety**: Comprehensive TypeScript coverage
- ✅ **Code Organization**: Clear separation between data, presentation, and logic

See `ARCHITECTURE_ANALYSIS.md` for detailed analysis and improvement roadmap.

## License

MIT
