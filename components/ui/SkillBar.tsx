"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  index?: number;
  gradient?: string;
  animated?: boolean;
}

export default function SkillBar({
  skill,
  index = 0,
  gradient = "from-purple-500 to-pink-500",
  animated = true,
}: SkillBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {skill.proficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        {animated ? (
          <motion.div
            className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
          />
        ) : (
          <div
            className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
            style={{ width: `${skill.proficiency}%` }}
          />
        )}
      </div>
    </div>
  );
}
