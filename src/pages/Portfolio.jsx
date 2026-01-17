import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import SEO from '../components/SEO';

// Spotlight Card Component
function ProjectCard({ project, featured = false }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Large featured cards span 2 cols on md+ screens
  const spanClass = featured ? 'md:col-span-2 row-span-2' : 'col-span-1 row-span-1';

  return (
    <Link
      to={`/portfolio/${project.id}`}
      className={`group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden ${spanClass} flex flex-col`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-3xl z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {/* Border Highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-3xl z-30"
        style={{
          background: useMotionTemplate`
                 radial-gradient(
                 400px circle at ${mouseX}px ${mouseY}px,
                 rgba(0, 255, 255, 0.4),
                 transparent 40%
                 )
             `,
          maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
          maskComposite: `exclude`,
          WebkitMaskComposite: `xor`,
          padding: `1px`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col p-6 md:p-8 h-full">
        {/* Header Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {featured && <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black bg-cyan-400 rounded-md">FEATURED</span>}
          {project.tech.slice(0, 2).map((t, i) => (
            <span key={i} className="px-2 py-1 text-[10px] font-mono border border-white/10 rounded-md text-slate-400 group-hover:text-cyan-200 transition-colors">{t}</span>
          ))}
        </div>

        {/* Title & Desc */}
        <h3 className={`font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors ${featured ? 'text-4xl md:text-5xl lg:text-6xl mt-auto' : 'text-2xl'}`}>
          {project.title}
        </h3>
        {!featured && (
          <p className="text-slate-400 text-sm leading-relaxed mt-2 line-clamp-3">
            {project.description}
          </p>
        )}

        {featured && (
          <div className="mt-4 max-w-xl border-l-2 border-cyan-500 pl-4">
            <p className="text-xl text-slate-300">
              {project.description}
            </p>
            {project.id === 'dataghost' && (
              <p className="text-sm text-slate-500 mt-2 font-mono">
                         // AUTOMATED DATA REMOVAL ENGINE
              </p>
            )}
          </div>
        )}

        {/* Action Icon */}
        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
          <span className="font-mono text-xs text-slate-500 group-hover:text-cyan-300 transition-colors">001 // CASE_STUDY</span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const featuredOnly = PROJECTS.filter(p => p.type === 'featured');
  const otherProjects = PROJECTS.filter(p => p.type !== 'featured');

  return (
    <div className="max-w-[1600px] mx-auto py-32 px-4 md:px-8">
      <SEO
        title="Projects"
        description="A curated selection of AI, web, and creative coding projects exploring experimental ideas and real-world applications."
        url="/portfolio"
      />
      {/* Page Header */}
      <div className="mb-24 md:mb-32">
        <h1 className="text-[12vw] md:text-[8vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 leading-[0.8]">
          WORKS
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-8 border-t border-white/10 pt-8">
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light">
            A curated selection of digital products, engineering experiments, and architectural systems.
          </p>
          <span className="font-mono text-xs md:text-sm text-cyan-500 mt-4 md:mt-0 animate-pulse">
            SCROLL_DOWN_FOR_ACCESS ↓
          </span>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">

        {/* Featured Items - Span larger areas */}
        {featuredOnly.map((project) => (
          <ProjectCard key={project.id} project={project} featured={true} />
        ))}

        {/* Standard Items - Regular grid cells */}
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} featured={false} />
        ))}

        {/* GitHub CTA Card */}
        <a
          href="https://github.com/CavinKrenik"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 row-span-1 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] flex flex-col items-center justify-center p-8 group hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all duration-300"
        >
          {/* GitHub Logo */}
          <div className="w-16 h-16 mb-6 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="font-bold text-lg text-white mb-1 group-hover:text-cyan-400 transition-colors">
              View More Projects
            </p>
            <p className="font-mono text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
              github.com/CavinKrenik
            </p>
          </div>

          {/* Arrow indicator */}
          <div className="mt-6 flex items-center gap-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
            <span className="font-mono text-xs">EXPLORE</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </a>

      </div>
    </div>
  );
}
