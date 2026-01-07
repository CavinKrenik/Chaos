import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// 1. Reusing your Spotlight Card Logic for consistency
function ServiceCard({ title, desc, tags, delay }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex flex-col h-full"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-3xl z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 0, 255, 0.15), 
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20 p-8 flex flex-col h-full">
        {/* Decorative Number */}
        <span className="text-xs font-mono text-slate-500 mb-4 group-hover:text-cyan-400 transition-colors">
          // SERVICE_NODE
        </span>

        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-neonPink transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-8 flex-1">
          {desc}
        </p>

        {/* Tech/Tool Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
          {tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-slate-500 uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const SERVICES = [
  {
    title: 'Web App Engineering',
    desc: 'Full-stack applications built for scale. I handle the architecture, database design, and frontend interactivity to create seamless user experiences.',
    tags: ['React', 'Next.js', 'Supabase', 'Node.js']
  },
  {
    title: 'Creative Web Design',
    desc: 'Breaking the mold of generic templates. I build immersive, motion-heavy websites that tell a story and keep users engaged.',
    tags: ['Framer Motion', 'Tailwind', 'UI/UX', 'Figma']
  },
  {
    title: 'Brand Identity',
    desc: 'Digital-first branding. From logo systems to social assets, I create consistent visual languages that cut through the noise.',
    tags: ['Vectors', 'Design Systems', 'Typography']
  },
  {
    title: 'Technical Consulting',
    desc: 'Unsure of the roadmap? I help plan tech stacks, review code, and strategize MVP launches for startups and creators.',
    tags: ['Architecture', 'MVP Strategy', 'Code Review']
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <SEO
        title="Services"
        description="Web app engineering, creative web design, and technical consulting. I bridge the gap between chaotic ideas and shipping code."
        url="/services"
      />

      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPink">CAPABILITIES</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Bridging the gap between chaotic ideas and shipping code.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-32">
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} {...s} delay={i * 0.1} />
        ))}
      </div>

      {/* New Section: "The Process" */}
      <div className="border-t border-white/10 pt-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">THE PROTOCOL</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            { step: '01', title: 'Discovery', text: 'We dissect the chaos. I learn your goals, audience, and technical constraints.' },
            { step: '02', title: 'Development', text: 'Iterative sprints. You see progress weekly, not just at the finish line.' },
            { step: '03', title: 'Deployment', text: 'Launch day isn\'t the end. I ensure smooth handoff and scalable hosting.' }
          ].map((item, i) => (
            <div key={i} className="bg-black/20 p-8 rounded-2xl border border-white/5">
              <span className="text-4xl font-mono font-bold text-white/10 mb-4 block">{item.step}</span>
              <h3 className="text-xl font-bold text-neonBlue mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-32 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-neonBlue transition-all duration-300 hover:scale-105"
        >
          <span>START A PROJECT</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>

    </div>
  );
}
