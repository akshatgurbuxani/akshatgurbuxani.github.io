# akshat.dev

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


```
akshat.dev/
├── data/                   # All content data (single source of truth)
│   ├── personal.ts         # Name, bio, contact info, social links
│   ├── experience.ts        # Work experience
│   ├── education.ts        # Education and publications
│   ├── skills.ts           # Skills by category
│   ├── projects.ts         # Project details
│   └── index.ts            # Re-exports all data
├── types/                  # TypeScript interfaces
│   └── index.ts            # All type definitions
├── components/             # React components
│   ├── Hero.tsx            # Hero section with gradient text
│   ├── AtmosphericBackground.tsx # Aurora blobs with mouse tracking
│   ├── About.tsx           # About section with gradient cards
│   ├── Experience.tsx      # Timeline experience section
│   ├── Projects.tsx        # Project grid with gradient headers
│   ├── Skills.tsx          # Skills with gradient progress bars
│   ├── Education.tsx       # Education cards with gradient accents
│   ├── Contact.tsx          # Contact form with gradient buttons
│   ├── ThemeToggle.tsx     # Theme switcher
│   └── index.ts            # Component exports
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Dark/light theme state management
└── app/                    # Next.js app directory
    ├── layout.tsx          # Root layout
    ├── page.tsx            # Main page composition
    └── globals.css         # Global styles and CSS variables
```

### Architecture Diagram

```mermaid
graph TD
    Page[app/page.tsx<br/>Main Page] --> ThemeToggle[ThemeToggle<br/>Fixed Position]
    Page --> Hero[Hero Component<br/>Gradient Text]
    Page --> About[About Component]
    Page --> Experience[Experience Component<br/>Timeline]
    Page --> Projects[Projects Component<br/>Grid Layout]
    Page --> Skills[Skills Component<br/>Progress Bars]
    Page --> Education[Education Component]
    Page --> Contact[Contact Component<br/>Form + Social]
    
    Hero --> Background[AtmosphericBackground<br/>Aurora Blobs]
    
    subgraph AtmosphericBackground
        Background --> MouseTracking[Mouse Tracking<br/>useMotionValue + useSpring]
        Background --> AuroraBlobs[Aurora Blobs<br/>Purple/Blue/Pink/Cyan<br/>Blur + Mix Blend]
        Background --> GridPattern[Dot Grid Pattern<br/>Parallax Movement]
        Background --> Spotlight[Cursor Spotlight<br/>Purple Glow Effect]
        Background --> NoiseTexture[Noise Texture<br/>Subtle Grain]
        Background --> Vignette[Radial Vignette<br/>Edge Fade]
        MouseTracking --> AuroraBlobs
        MouseTracking --> GridPattern
        MouseTracking --> Spotlight
    end
    
    subgraph Data Layer
        PersonalData[data/personal.ts] --> Hero
        PersonalData --> About
        PersonalData --> Contact
        ExperienceData[data/experience.ts] --> Experience
        ProjectsData[data/projects.ts] --> Projects
        SkillsData[data/skills.ts] --> Skills
        EducationData[data/education.ts] --> Education
        Types[types/index.ts] --> AllComponents[All Components]
    end
    
    subgraph Theme System
        ThemeContext[ThemeContext<br/>Dark/Light State] --> ThemeToggle
        ThemeContext --> AllComponents
        Globals[globals.css<br/>CSS Variables<br/>--background<br/>--foreground<br/>--spotlight-color] --> AllComponents
        TailwindConfig[tailwind.config.ts<br/>Color System] --> AllComponents
    end
    
    subgraph Animations
        FramerMotion[Framer Motion] --> ScrollAnimations[Scroll-triggered<br/>Fade + Slide Up<br/>Stagger Children]
        FramerMotion --> MouseAnimations[Mouse-tracking<br/>Parallax Effects<br/>Smooth Spring]
        FramerMotion --> HoverAnimations[Hover Effects<br/>Scale + Shadow]
        ScrollAnimations --> AllComponents
        MouseAnimations --> Background
        HoverAnimations --> Cards[Card Components]
    end
    
    subgraph Color System
        LightMode[Light Mode<br/>Cream Background<br/>Purple/Pink Gradients] --> Globals
        DarkMode[Dark Mode<br/>Dark Background<br/>Lighter Purple/Pink] --> Globals
    end
    
    style Background fill:#9333ea,color:#fff
    style AuroraBlobs fill:#a855f7,color:#fff
    style ThemeContext fill:#ec4899,color:#fff
    style Hero fill:#8b5cf6,color:#fff
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

- **Colors**: Edit CSS variables in `app/globals.css` for theme colors
- **Gradients**: Update gradient classes in components (e.g., `from-purple-600 to-pink-600`)
- **Animations**: Adjust animation variants in component files (duration, easing)

## Features

- ✨ **Purple/Pink Gradient Theme** - Cohesive color system throughout
- 🌓 **Dark/Light Theme Toggle** - Smooth transitions between themes
- 🎨 **Aurora Blob Background** - Animated gradient blobs with mouse interaction
- 📱 **Fully Responsive** - Works on all screen sizes
- 🎬 **Smooth Animations** - Floaty, soft animations with Framer Motion
- 📊 **Timeline Experience** - Visual timeline with gradient dots
- 📈 **Skill Progress Bars** - Animated progress bars with gradient fills
- 🎴 **Project Cards** - Hover effects with gradient headers
- 📝 **Contact Form** - Email form with gradient submit button
- 🔒 **Type-Safe** - Full TypeScript coverage

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and interactions

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page composition
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── Hero.tsx           # Hero section with gradient text
│   ├── AtmosphericBackground.tsx # Aurora blobs background
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Experience timeline
│   ├── Projects.tsx       # Projects grid
│   ├── Skills.tsx         # Skills with progress bars
│   ├── Education.tsx      # Education cards
│   ├── Contact.tsx        # Contact form
│   ├── ThemeToggle.tsx    # Theme switcher
│   └── index.ts           # Component exports
├── contexts/             # React contexts
│   └── ThemeContext.tsx  # Theme state management
├── data/                 # Content data (single source of truth)
│   ├── personal.ts        # Personal information
│   ├── experience.ts     # Work experience
│   ├── education.ts      # Education and publications
│   ├── skills.ts         # Skills by category
│   ├── projects.ts       # Project details
│   └── index.ts          # Data exports
├── types/                # TypeScript type definitions
│   └── index.ts          # All type interfaces
└── public/              # Static assets
```

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

- Components use TypeScript with strict typing
- Framer Motion for all animations
- Tailwind CSS for styling
- Data separated from presentation logic
- Consistent naming conventions

## License

MIT
