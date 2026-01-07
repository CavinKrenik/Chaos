import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function HomeHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background Grid - Animated */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none animate-pulse-slow"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Eyebrow / Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs md:text-sm font-mono text-cyan-200 tracking-wider">SYSTEM ONLINE // READY TO BUILD</span>
        </motion.div>

        {/* Massive Typography */}
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 select-none text-center w-full">
            CHAOS
          </h1>

          <div className="relative my-4 group cursor-default w-full flex justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.div
              className="absolute -inset-8 bg-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <h1 className="relative z-10 text-[5vw] md:text-[3vw] font-mono text-cyan-400 tracking-[0.5em] md:tracking-[1em] uppercase border-y border-cyan-500/30 py-2 glitch-text text-center ml-[0.5em] md:ml-[1em]">
              TO CODE
            </h1>
          </div>
        </div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed"
        >
          Forging clarity from entropy. I build high-performance digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-6"
        >
          <a href="/portfolio" className="group relative px-8 py-4 bg-cyan-500 text-black font-bold text-lg tracking-wide overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">VIEW PROJECTS</span>
            <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
          </a>
          <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-mono hover:bg-white/5 transition-colors">
            CONTACT_ME
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block text-xs font-mono text-slate-600">
        LAT: 45.5017° N<br />LONG: 73.5673° W
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block text-xs font-mono text-slate-600 text-right">
        MEMORY: 64GB OK<br />STATUS: OPTIMAL
      </div>
    </section>
  );
}
