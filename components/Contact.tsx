"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "@/data";

// =============================================================================
// Contact Component
// =============================================================================

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-10 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left - Large Heading */}
          <div className="lg:col-span-7">
             <motion.h2 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-huge font-bold tracking-tighter leading-none mb-20"
             >
               Let&apos;s<br />Talk
             </motion.h2>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                <div>
                   <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6">Contact Details</p>
                   <a href={`mailto:${PERSONAL.email}`} className="block text-2xl font-serif italic hover:opacity-50 transition-opacity mb-2">
                     {PERSONAL.email}
                   </a>
                   <p className="text-xl font-light opacity-60">{PERSONAL.phone}</p>
                </div>
                
                <div>
                   <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6">Social Network</p>
                   <div className="flex flex-col gap-3">
                      {SOCIAL_LINKS.map((link) => (
                        <a 
                          key={link.name} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-bold uppercase tracking-tighter hover:italic hover:pl-2 transition-all duration-300"
                        >
                          {link.name}
                        </a>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Right - Minimal Form */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-20 lg:pt-0 lg:pl-20">
             <form className="space-y-12">
                <div className="group border-b border-white/20 focus-within:border-white transition-colors py-4">
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent outline-none text-2xl font-light placeholder:opacity-20"
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div className="group border-b border-white/20 focus-within:border-white transition-colors py-4">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent outline-none text-2xl font-light placeholder:opacity-20"
                    placeholder="name@company.com"
                  />
                </div>
                
                <div className="group border-b border-white/20 focus-within:border-white transition-colors py-4">
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">Inquiry</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-transparent outline-none text-2xl font-light placeholder:opacity-20 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                <motion.button 
                  whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                  className="w-full py-6 border border-white uppercase tracking-[0.4em] font-bold text-xs transition-all duration-500"
                >
                  Submit Inquiry
                </motion.button>
             </form>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">
             Built by Akshat Gurbuxani
           </p>
           <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">
             © {new Date().getFullYear()} Editorial Studio
           </p>
        </div>
      </div>
    </section>
  );
}
