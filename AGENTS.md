# Portfolio Design and Engineering Guide

This repository is Akshat Gurbuxani's personal portfolio and resume site. Treat it as a polished product, not a collection of visual experiments. The site must communicate the work clearly, feel distinctive, and remain fast and comfortable on both phones and laptops.

## Product priorities

Use this order when tradeoffs arise:

1. Clear content hierarchy and legibility.
2. Fast, stable interaction on real mobile hardware.
3. Accessible and predictable behavior.
4. A cohesive, premium visual system.
5. Decorative novelty.

The site's main job is to help a visitor quickly understand who Akshat is, what he has built, and how to contact him. Visual effects must support that job.

## Visual direction

- Default to a paper-like blue or navy theme, but avoid pushing the canvas so dark that it reads as black. The blue should feel like ink, pigment, or dyed paper rather than a glowing screen backdrop.
- Use a Midjourney-adjacent visual mood: pixelated, computational, atmospheric, and editorial, but visibly authored by a person. Take inspiration from the mood without copying another product's interface or brand assets.
- Do not use an Apple-like glass, mirror, or frosted-interface treatment as the primary design language.
- Tenbin Labs is a useful reference for immersive spatial composition and a strong central visual, but it is too dark, sleek, and factory-finished for this portfolio. Do not copy its polished Web3-product tone.
- Favor the character of a hand-drawn painting, screen print, collage, or illustrated technical notebook over the perfection of an industrial product render.
- Let negative space be intentional. Fill large displays through composition, background artwork, scale, and rhythm rather than covering every area with a card.
- Use warm off-white, chalk, cool gray, and pale blue pixel structures against the blue field. Pixels may form fragments, constellations, diagrams, or a globe rather than uniform decorative noise.
- Consider a globe or orbital system as a recurring visual anchor. It should feel abstract, dithered, incomplete, and hand-composed—not like a stock 3D Earth render.
- UI-like marks in the background may include coordinates, ticks, paths, nodes, labels, marginal notes, or small panels. Let some lines wobble, terminate early, overlap, or vary in weight while preserving legibility.
- Use foreground cards selectively. Mix structured content surfaces with borderless editorial groupings, annotations, and open space so the site does not resemble a uniform dashboard.
- Prefer paper texture, subtle grain, imperfect strokes, offset layers, and irregular pixel clusters over glass, chrome, neon bloom, or flawless geometric repetition.
- Use asymmetry, editorial scale, and grouped content to make wide screens feel intentional. Do not merely increase gaps at desktop widths.
- Motion should feel tight and responsive: short distances, stepped or quantized movement where appropriate, restrained easing, and coordinated transitions.
- Keep the palette disciplined but tactile: paper blue, navy ink, off-white pigment, a small range of faded blues, and at most one warmer signal accent.

## Pixel background system

Treat the background as an authored pixel illustration, not an always-running particle effect or a mathematically perfect grid.

- Establish a strong static frame first so the page still feels complete with animation disabled.
- Use a bounded pixel field and a small number of focal structures. Vary density, alignment, scale, and dropout so the result does not look procedurally tiled.
- Prefer an authored bitmap or sprite, precomputed SVG, CSS mask, or a low-resolution canvas scaled with intentionally visible pixels. Choose the cheapest technique that preserves the intended look.
- A globe may be rendered as sparse latitude/longitude samples, a dithered sphere, a stippled ink form, or an orbital point cloud with missing and uneven marks. It should not require Three.js unless a prototype proves that real 3D materially improves the result.
- Add texture with restraint. Grain and irregularity should be visible enough to remove the factory finish without reducing text clarity or making the page look distressed.
- Motion should be slow and sparse in the background: occasional scans, small orbital shifts, line traces, or pixel-state changes. Foreground feedback may remain quick.
- Reduced-motion mode should stop orbiting, parallax, scanning, and continuous pixel updates while preserving the same static art direction.
- Pause animation when the document is hidden and when the visual is off-screen. Cap device-pixel ratio and frame rate for any canvas implementation.
- The background must never reduce text contrast, intercept input, or produce distracting flicker.

## Responsive design

Phone and laptop experiences must both feel polished and intentional. They do not need to use one predetermined responsive strategy.

- A component may scale fluidly from laptop to phone when that preserves its hierarchy, readability, and interaction quality.
- A component may instead rearrange, simplify, or use a substantially different phone composition when space or interaction demands it.
- Make this choice component by component. Do not force a separate mobile UI where fluid resizing works, and do not preserve a desktop composition when it becomes cramped or awkward.
- Keep the information architecture and visual identity coherent even when layout structures differ.
- Do not rely on hover for meaning or access to content. Every interaction must work with touch and keyboard.
- Maintain touch targets of at least 44 by 44 CSS pixels and sufficient spacing between adjacent targets.
- Avoid fixed viewport-height assumptions on mobile. Account for dynamic browser chrome and safe-area insets where relevant.
- Test at representative narrow, medium, laptop, and wide layouts. Also test long text, zoom, and landscape phone layouts.
- On large displays, distinguish intentional negative space from accidental unused canvas. Use scale, background structures, and editorial grouping where the composition needs balance; do not add content merely to occupy every gap.

## Performance rules

- Keep the initial experience useful without waiting for animation or client-side JavaScript.
- Prefer server-rendered/static markup. Add `"use client"` only at the smallest boundary that needs browser state or interaction.
- Prefer CSS for simple transitions, gradients, shadows, and decorative effects. Use JavaScript animation only when it materially improves the interaction.
- Animate `transform` and `opacity` where possible. Avoid continuous animation of blur, large shadows, filters, layout properties, or full-screen canvases.
- Respect `prefers-reduced-motion`; the reduced experience must remain complete and visually intentional.
- Do not identify low-powered devices only by screen width. Use capability and preference signals, and make expensive enhancements progressive.
- Lazy-load nonessential interactive features and heavy media. Do not ship 3D or canvas runtimes for decoration unless profiling shows a clear benefit within the performance budget.
- Prevent layout shift by reserving media dimensions and keeping initial layout deterministic.
- Treat dependency weight, runtime work, hydration cost, and memory usage as part of every library decision.
- Target a good mobile Core Web Vitals experience: LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1 at the 75th percentile.

## Library policy

Favor established, actively maintained libraries when they replace difficult, error-prone behavior. Good candidates include accessible interaction primitives, focus management, dialogs, icons, class composition, schema validation, and focused animation orchestration.

Do not use dependency count as a goal. Before adding a package, verify that it:

- solves a real problem that is not already handled well by the platform or current stack;
- works with static export and the existing Next.js architecture;
- supports accessibility and keyboard interaction;
- is tree-shakeable or otherwise small for the imported feature;
- does not duplicate a capability already in the project;
- is actively maintained and has a stable public API;
- does not require a server, runtime secret, or unsupported GitHub Pages feature;
- remains smooth on mid-range phones.

Prefer one library per responsibility. Avoid overlapping component suites, multiple animation engines, broad utility packages for one small helper, and effect libraries that add permanent render loops.

When evaluating a library, record why it is needed, its client-side cost, and the native/CSS alternative. Use proven components according to their documented patterns instead of creating ad hoc approximations.

### Pretext

Consider `@chenglou/pretext` when the design genuinely needs programmatic multiline text measurement or manual line layout, such as text flowing around an irregular globe, shrink-wrapped dynamic labels, virtualized variable-height content, or text rendered into Canvas or SVG.

- Do not use Pretext for ordinary headings, paragraphs, buttons, or cards; native semantic HTML and CSS are the default.
- Prefer the core package and its documented APIs over an additional wrapper unless the wrapper provides a demonstrated benefit.
- Keep visible portfolio copy in semantic DOM elements whenever possible. Pretext may calculate geometry while the browser still paints the text.
- Synchronize its font, size, line height, letter spacing, locale, and wrapping rules with the rendered CSS, and wait for custom fonts before relying on measurements.
- Prototype and measure it before adoption. Keep it only if it removes real layout complexity or measurable reflow work.
- Treat it as a focused layout tool, not as the site's rendering framework.

## Static hosting constraints

The site is deployed as a static export to GitHub Pages. Preserve that model unless the user explicitly approves an architectural change.

- No server-only routes, middleware-dependent behavior, runtime databases, or secret-bearing API calls.
- All routes and assets must work from the configured deployment base path.
- External forms or analytics must degrade safely and must not expose private credentials.
- Build-time content and local typed data are preferred for portfolio information.
- Validate the production export, not only the development server.

## Frontend architecture

- Keep content in typed data modules and presentation in components.
- Establish design tokens for color, spacing, type, radius, elevation, material, and motion. Components should consume tokens rather than invent nearby values.
- Build a small set of deliberate primitives: container, section, surface/card, button/link, chip, dialog/drawer, and typography styles.
- Use semantic HTML before adding ARIA. Preserve logical heading order, landmarks, focus visibility, and descriptive link text.
- Keep component APIs small and composable. Avoid components with many visual boolean flags.
- Colocate a component-specific behavior with that component; keep shared tokens and genuinely shared primitives centralized.
- Avoid scattered magic values, copy-pasted animation objects, and long Tailwind class strings repeated across files. Use typed variants or shared primitives where repetition is meaningful.
- Do not abstract one-off markup prematurely. Extract only a clear reusable concept.
- Icons should come from one consistent, accessible icon system unless a brand mark requires an official asset.
- Do not introduce a global state library for local UI state.

## Motion system

Define a limited motion vocabulary before adding individual animations:

- instant feedback for press and selection;
- short transitions for hover, focus, and local state;
- slightly longer entrances for sections and overlays;
- rare ambient motion, isolated from primary content.

Use consistent durations and easing tokens. Entrances should generally run once and should not delay access to content. Scroll-linked and pointer-following effects must be subtle, opt-in enhancements and must not run continuously when off-screen.

## Quality bar

Before considering a visual change complete:

- run lint, type checks, and the production static build;
- inspect phone and laptop layouts in a real browser;
- test keyboard navigation, visible focus, escape behavior, and focus restoration for overlays;
- test dark-theme contrast and foreground readability over every background state;
- test reduced motion and touch input;
- check for overflow, layout shift, console errors, and hydration warnings;
- profile the result on a mobile-sized viewport with CPU/network throttling when adding animation or a dependency;
- verify the site remains understandable with decorative effects disabled.

## Current-code caution

The existing site uses Framer Motion, Three.js/React Three Fiber, full-screen canvas effects, pointer tracking, and large blurred layers. Do not assume these should survive the redesign. Audit each effect against the pixel-background system and mobile performance goals. Reuse the current canvas or 3D code only if it is simpler and faster than a purpose-built SVG, sprite, or deliberately low-resolution canvas treatment.

Do not begin large visual implementation work without first agreeing on the content hierarchy, page composition, design tokens, core material recipes, and representative mobile and desktop layouts.
