"use client";

import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Education,
  Contact,
  ThemeToggle,
} from "@/components";

// =============================================================================
// Home Page
// =============================================================================

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Theme Toggle - Fixed Position */}
      <ThemeToggle />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
