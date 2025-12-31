"use client";

import {
  Card,
  Hero,
  About,
  Experience,
  Skills,
  Education,
  Contact,
  ThemeToggle,
} from "@/components";
import { ProjectCard, PROJECTS } from "@/components/Projects";

// =============================================================================
// Home Page - Deck of Cards UI
// =============================================================================

export default function Home() {
  // Calculate card indices for proper z-index stacking
  // Hero = 0, About = 1, Experience = 2, Projects = 3...(3+n-1), Skills, Education, Contact
  const projectStartIndex = 3;
  const skillsIndex = projectStartIndex + PROJECTS.length;
  const educationIndex = skillsIndex + 1;
  const contactIndex = educationIndex + 1;

  return (
    <main className="relative w-full">
      {/* Theme Toggle - Fixed Position */}
      <ThemeToggle />

      {/* Hero Section - First Card */}
      <Card index={0} id="hero">
        <Hero />
      </Card>

      {/* About Section */}
      <Card index={1} id="about">
        <About />
      </Card>

      {/* Experience Section */}
      <Card index={2} id="experience">
        <Experience />
      </Card>

      {/* Project Cards - Each project is its own card in the deck */}
      {PROJECTS.map((project, index) => {
        // Use consistent project ID format for navigation
        const projectId = `project-${String(index + 1).padStart(2, '0')}`;
        return (
          <Card
            key={project.id}
            index={projectStartIndex + index}
            id={projectId}
          >
            <ProjectCard project={project} index={index} />
          </Card>
        );
      })}

      {/* Skills Section */}
      <Card index={skillsIndex} id="skills">
        <Skills />
      </Card>

      {/* Education Section */}
      <Card index={educationIndex} id="education">
        <Education />
      </Card>

      {/* Contact Section - Last Card */}
      <Card index={contactIndex} id="contact">
        <Contact />
      </Card>
    </main>
  );
}
