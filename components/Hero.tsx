"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/data";
import { useEffect, useState } from "react";

// =============================================================================
// Helper Components
// =============================================================================

function TypewriterLine({ text, delay = 0, onComplete }: { text: string; delay?: number; onComplete?: () => void }) {
  return (
    <motion.p
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: text.length * 0.02, delay, ease: "linear" }}
      onAnimationComplete={onComplete}
      className="overflow-hidden whitespace-nowrap border-r-2 border-transparent"
    >
      <span className="text-terminal-primary opacity-70">admin@akshat.dev:~$ </span>
      {text}
    </motion.p>
  );
}

// =============================================================================
// ASCII Art for Name
// =============================================================================

const ASCII_NAME = `
   _   _  ______ _   _   ___ _____ 
  / \\ / |/  ____| | | | / _ \\_   _|
 / ^ \\| |  /    | |_| |/ /_\\ \\| |  
/ / \\ \\ | |     |  _  |  _  || |  
\\_/  \\_\\_\\______| | | |_| |_||_|  
`;

// =============================================================================
// Hero Component
// =============================================================================

export default function Hero() {
  const [bootPhase, setBootSequence] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(1), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-10 font-mono text-terminal-primary">
      <div className="w-full max-w-4xl space-y-4">
        {/* Terminal Header */}
        <div className="border border-terminal-primary p-2 flex justify-between items-center opacity-50 text-[10px]">
          <span>SYSTEM_VERSION: 1.0.4</span>
          <span>LOCATION: {PERSONAL.location.toUpperCase().replace(", ", "_")}</span>
          <span>STATUS: ONLINE</span>
        </div>

        {/* Boot Sequence */}
        <div className="space-y-1 text-sm sm:text-base">
          <TypewriterLine text="init_system --verbose" delay={0.5} onComplete={() => setBootSequence(2)} />
          {bootPhase >= 2 && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-gray-500"
            >
              [ OK ] Loading kernel modules...<br />
              [ OK ] Accessing neural core...<br />
              [ OK ] Authenticating user: AKSHAT_GURBUXANI
            </motion.p>
          )}
          {bootPhase >= 2 && (
            <TypewriterLine text="display_profile --identity" delay={1.5} onComplete={() => setBootSequence(3)} />
          )}
        </div>

        {/* ASCII Identity */}
        {bootPhase >= 3 && (
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[6px] sm:text-[10px] md:text-xs leading-none font-bold py-6 text-terminal-primary"
          >
            {ASCII_NAME}
          </motion.pre>
        )}

        {/* Main Info */}
        {bootPhase >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="border-l-4 border-terminal-primary pl-6 py-4 space-y-4"
          >
            <h1 className="text-2xl sm:text-4xl font-bold tracking-widest">
              {PERSONAL.title.toUpperCase()}
            </h1>
            <p className="text-lg opacity-80 max-w-2xl italic">
              &gt; {PERSONAL.tagline}
            </p>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:bg-terminal-primary hover:text-black px-4 py-2 border border-terminal-primary transition-colors uppercase font-bold text-sm"
              >
                [ VIEW_PROJECTS ]
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:bg-terminal-primary hover:text-black px-4 py-2 border border-terminal-primary transition-colors uppercase font-bold text-sm"
              >
                [ CONTACT_SYS_ADMIN ]
              </button>
            </div>
          </motion.div>
        )}

        {/* Cursor */}
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "stepEnd" }}
          className="w-3 h-6 bg-terminal-primary inline-block align-middle ml-2"
        />
      </div>
    </section>
  );
}
