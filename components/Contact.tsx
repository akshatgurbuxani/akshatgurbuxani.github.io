"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "@/data";

// =============================================================================
// Contact Component
// =============================================================================

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-10 lg:px-20 bg-black text-terminal-primary overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-[0.2em]"
          >
            init_connection
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-terminal-primary/30 w-20" />
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] opacity-50">Establishing Secure Tunnel</span>
            <div className="h-px bg-terminal-primary/30 w-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Terminal Form - Left */}
          <div className="lg:col-span-7 border border-terminal-primary/30 bg-terminal-primary/5 p-8 relative">
            {/* Window controls */}
            <div className="absolute top-0 left-0 right-0 border-b border-terminal-primary/30 p-2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>

            <form className="mt-10 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-terminal-primary opacity-70">SET</span>
                  <span className="text-white font-bold uppercase text-[10px]">SENDER_NAME</span>
                  <span className="text-gray-600">=</span>
                  <input 
                    type="text" 
                    className="flex-1 bg-transparent border-b border-terminal-primary/30 outline-none text-white font-mono py-1 focus:border-terminal-primary transition-all"
                    placeholder='"Your Name"'
                  />
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-terminal-primary opacity-70">SET</span>
                  <span className="text-white font-bold uppercase text-[10px]">SENDER_EMAIL</span>
                  <span className="text-gray-600">=</span>
                  <input 
                    type="email" 
                    className="flex-1 bg-transparent border-b border-terminal-primary/30 outline-none text-white font-mono py-1 focus:border-terminal-primary transition-all"
                    placeholder='"email@domain.com"'
                  />
                </div>

                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-4">
                    <span className="text-terminal-primary opacity-70">RUN</span>
                    <span className="text-white font-bold uppercase text-[10px]">MESSAGE_ENCODER</span>
                    <span className="text-gray-600">--input</span>
                  </div>
                  <textarea 
                    rows={5}
                    className="w-full bg-black/50 border border-terminal-primary/20 outline-none text-white font-mono p-4 focus:border-terminal-primary transition-all resize-none"
                    placeholder="Enter your message here..."
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ backgroundColor: "var(--terminal-primary)", color: "#000" }}
                className="w-full py-4 border border-terminal-primary uppercase font-bold text-xs tracking-[0.3em] transition-all duration-300"
              >
                [ SEND_PACKET ]
              </motion.button>
            </form>
          </div>

          {/* Social Nodes - Right */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] opacity-50">Global_Directories</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold text-white opacity-40 uppercase">Email_Primary</p>
                  <a href={`mailto:${PERSONAL.email}`} className="text-xl hover:text-white transition-all underline decoration-terminal-primary/30 underline-offset-8">
                    {PERSONAL.email}
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold text-white opacity-40 uppercase">Comm_Line</p>
                  <p className="text-xl">{PERSONAL.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] opacity-50">Social_Nodes</h3>
              <div className="grid grid-cols-1 gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border border-terminal-primary/10 p-4 hover:bg-terminal-primary hover:text-black transition-all"
                  >
                    <span className="text-[10px] font-bold opacity-50">NODE://</span>
                    <span className="text-lg font-bold uppercase tracking-widest">{link.name}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">_ACCESS</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Footer */}
        <div className="mt-40 pt-10 border-t border-terminal-primary/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[10px] uppercase font-bold tracking-[0.5em]">
           <div className="flex gap-10">
             <span>SYS_USER: AKSHAT</span>
             <span>ROLE: ML_ENGINEER</span>
           </div>
           <div className="flex gap-10">
             <span>UPTIME: {new Date().getFullYear() - 2021}Y_4M_12D</span>
             <span>© 2025_CORE</span>
           </div>
        </div>
      </div>
    </section>
  );
}
