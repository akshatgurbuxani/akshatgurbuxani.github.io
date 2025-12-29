"use client";

import { motion } from "framer-motion";
import { EDUCATION, PUBLICATIONS } from "@/data";
import type { Education as EducationType, Publication } from "@/types";

// =============================================================================
// Animation Variants
// =============================================================================

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// =============================================================================
// Education Item
// =============================================================================

function EducationItem({ education }: { education: EducationType }) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 border-b border-gray-100 dark:border-neutral-900 last:border-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
           <p className="text-xl font-bold uppercase mb-2 tracking-tighter leading-none">
             {education.institution}
           </p>
           <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
             {education.startDate} — {education.endDate}
           </p>
        </div>
        
        <div className="md:col-span-8">
           <h4 className="text-2xl font-serif italic mb-4">
             {education.degree} in {education.field}
           </h4>
           {education.activities && (
             <div className="mt-6 space-y-2">
               {education.activities.map((activity, i) => (
                 <p key={i} className="text-sm text-gray-500 dark:text-gray-400 font-light">
                    • {activity}
                 </p>
               ))}
             </div>
           )}
           {education.coursework && (
             <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {education.coursework.map((course, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest text-gray-400">
                    {course}
                  </span>
                ))}
             </div>
           )}
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Publication Item
// =============================================================================

function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-8 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 group"
    >
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
             <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">Research Publication</p>
             <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 leading-none">
               {publication.title}
             </h3>
             <p className="text-lg font-serif italic opacity-70">
               {publication.description}
             </p>
          </div>
          <div className="text-right">
             <p className="text-xs uppercase tracking-widest mb-2">{publication.venue}</p>
             <p className="text-xs font-bold uppercase tracking-widest">{publication.status}</p>
          </div>
       </div>
    </motion.div>
  );
}

// =============================================================================
// Education Component
// =============================================================================

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-10 lg:px-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32">
           <div className="lg:col-span-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-large font-bold tracking-tighter leading-none mb-10"
              >
                Edu.
              </motion.h2>
              <div className="hidden lg:block w-px h-64 bg-black dark:bg-white opacity-10" />
           </div>

           <div className="lg:col-span-8">
              <div className="border-t border-black dark:border-white">
                 {EDUCATION.map((edu) => (
                   <EducationItem key={edu.id} education={edu} />
                 ))}
              </div>
           </div>
        </div>

        {PUBLICATIONS.length > 0 && (
          <div className="mt-40">
             <div className="flex items-center gap-10 mb-16">
                <h3 className="text-sm font-bold uppercase tracking-[0.4em] whitespace-nowrap">Selected Publications</h3>
                <div className="w-full h-px bg-black dark:bg-white opacity-10" />
             </div>
             
             <div className="space-y-10">
                {PUBLICATIONS.map((pub) => (
                  <PublicationItem key={pub.id} publication={pub} />
                ))}
             </div>
          </div>
        )}
      </div>
    </section>
  );
}
