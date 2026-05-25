"use client";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Education,
  Projects,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
