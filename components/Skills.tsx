"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data";
import type { SkillCategory, Skill } from "@/types";

// =============================================================================
// Skill Item
// =============================================================================

function SkillProgressBar({ skill, index }: { skill: Skill; index: number }) {
  const totalBlocks = 20;
  const activeBlocks = Math.round((skill.proficiency / 100) * totalBlocks);
  const blocks = "█".repeat(activeBlocks) + "░".repeat(totalBlocks - activeBlocks);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center group"
    >
      <div className="sm:col-span-4">
        <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>
      <div className="sm:col-span-6 flex items-center gap-4">
        <span className="text-terminal-primary font-mono text-xs hidden sm:block">[</span>
        <span className="text-terminal-primary font-mono tracking-tighter text-xs">
          {blocks}
        </span>
        <span className="text-terminal-primary font-mono text-xs hidden sm:block">]</span>
      </div>
      <div className="sm:col-span-2 text-right">
        <span className="text-[10px] font-bold opacity-50">{skill.proficiency}%</span>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Skill Category
// =============================================================================

function SkillCategorySection({ category, catIndex }: { category: SkillCategory; catIndex: number }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-bold bg-terminal-primary text-black px-2">
          {category.name.toUpperCase().replace(/\s+/g, "_")}
        </h3>
        <div className="h-px bg-terminal-primary/20 flex-1" />
      </div>
      
      <div className="grid gap-4 pl-4 border-l border-terminal-primary/10">
        {category.skills.map((skill, i) => (
          <SkillProgressBar key={skill.name} skill={skill} index={catIndex * 10 + i} />
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// Skills Component
// =============================================================================

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-10 lg:px-20 bg-black text-terminal-primary">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-terminal-primary opacity-70">admin@akshat.dev:~$</span>
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] border-b-2 border-terminal-primary">
            ./analyze_toolkit.sh --detailed
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategorySection key={category.id} category={category} catIndex={index} />
          ))}
        </div>

        {/* System Stats Footer */}
        <div className="mt-32 p-8 border border-terminal-primary/20 bg-terminal-primary/5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold opacity-50">Core_Engine_Accuracy</p>
              <div className="flex items-end gap-2 text-3xl font-bold italic">
                <span>87</span>
                <span className="text-xs pb-1">PCT</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold opacity-50">Model_Optimization</p>
              <div className="flex items-end gap-2 text-3xl font-bold italic">
                <span>70</span>
                <span className="text-xs pb-1">PCT_GAIN</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold opacity-50">Operational_Efficiency</p>
              <div className="flex items-end gap-2 text-3xl font-bold italic">
                <span>85</span>
                <span className="text-xs pb-1">PCT_REDUCTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
