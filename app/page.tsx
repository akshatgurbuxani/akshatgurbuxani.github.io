"use client";

import {
  Navbar,
  Card,
  Hero,
  About,
  Experience,
  Education,
  Projects,
  Contact,
} from "@/components";

// =============================================================================
// Home Page - Clean Scrolling UI
// =============================================================================

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <Card id="about">
        <About />
      </Card>

      {/* Experience Section */}
      <Card id="experience">
        <Experience />
      </Card>

      {/* Projects Section */}
      <Card id="projects">
        <Projects />
      </Card>

      {/* Education Section */}
      <Card id="education">
        <Education />
      </Card>

      {/* Contact Section */}
      <Card id="contact">
        <Contact />
      </Card>
    </main>
  );
}
