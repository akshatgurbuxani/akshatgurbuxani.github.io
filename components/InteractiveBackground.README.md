# Interactive Particle Flow Architecture

The `InteractiveBackground` component provides a high-performance, organic background effect using the HTML5 Canvas API. It is designed to be lightweight, fluid, and reactive to user input.

## 🏗️ Architectural Overview

### 1. Canvas-Based Rendering
Unlike SVG, which creates a DOM element for every visual item, Canvas uses a single drawing surface. This allows us to animate hundreds of particles at 60fps with minimal CPU/GPU overhead.

### 2. Particle Physics Engine
Each particle is an instance of a `Particle` class that manages its own:
- **Kinematics**: Position (`x`, `y`) and velocity (`vx`, `vy`).
- **Organic Drift**: Natural movement simulation using random offsets.
- **Magnetic Repulsion**: Physics-based "flight" from the mouse cursor.
- **Boundary Management**: Intelligent wrapping to keep the field populated.

### 3. Reactive Interactions
- **Mouse Tracking**: Particles respond to the user's cursor in real-time.
- **Scroll Integration**: Page scrolling applies a vertical delta to the particle field, making the background feel "anchored" to the content.
- **Dynamic Resizing**: The canvas automatically recalibrates on window resize to ensure full-screen coverage.

## 📁 Implementation Details

- **File**: `components/InteractiveBackground.tsx`
- **Hook Strategy**: Uses `useEffect` for the main animation loop and `useRef` for high-frequency state (mouse, particles) to avoid unnecessary React re-renders.
- **Theme Support**: Uses theme-aware colors (Purple, Pink, Blue) with adjustable opacity for dark/light modes.

## 🚀 Performance Optimization
- **Animation Loop**: Uses `requestAnimationFrame` for browser-synced refreshes.
- **Memory Management**: Particles are pre-allocated and reused to avoid garbage collection spikes.
- **Pointer Events**: Set to `none` to ensure the background never interferes with buttons or links.
