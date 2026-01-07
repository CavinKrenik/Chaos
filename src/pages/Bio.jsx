import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import SEO from '../components/SEO';

const SKILLS = [
    {
        category: 'Core',
        items: ['HTML5', 'CSS3/SCSS', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'Rust', 'WebAssembly'],
        color: 'text-neonBlue',
    },
    {
        category: 'Frontend & Mobile',
        items: ['React', 'React Native/Expo', 'Next.js', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
        color: 'text-neonPink',
    },
    {
        category: 'Backend & Integrations',
        items: ['Node.js', 'Flask', 'PostgreSQL', 'Supabase', 'Stripe', 'Lemon Squeezy', 'Resend'],
        color: 'text-neonBlue',
    },
    {
        category: 'DevOps & QA',
        items: ['Git/GitHub', 'Docker', 'Playwright', 'Render', 'Netlify', 'Railway'],
        color: 'text-neonPink',
    },
    {
        category: 'AI & Automation',
        items: ['ML & RL', 'Predictive Modeling', 'LLM Integration', 'Prompt Engineering', 'Agentic Workflows'],
        color: 'text-neonBlue',
    },
    {
        category: 'Creative',
        items: ['UI/UX Design', 'Figma', 'Adobe Suite', 'Digital Art'],
        color: 'text-neonPink',
    },
];

function SkillCard({ category, items, color, delay }) {
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
            className="group relative rounded-xl bg-black/40 border border-white/10 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-xl z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1), 
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-20 p-8 h-full flex flex-col">
                {/* Header with decorative line */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-xl font-bold ${color} drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all`}>
                        {category}
                    </h3>
                    {/* Tech deco elements */}
                    <div className="flex gap-1">
                        <div className={`w-1 h-1 rounded-full ${color === 'text-neonBlue' ? 'bg-neonBlue' : 'bg-neonPink'}`}></div>
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    </div>
                </div>

                <ul className="space-y-3 flex-1">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-100 transition-colors text-sm font-mono">
                            <span className={`w-1 h-1 rounded-full ${color === 'text-neonBlue' ? 'bg-neonBlue' : 'bg-neonPink'} shadow-[0_0_5px_currentColor]`}></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function Bio() {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            <SEO
                title="About the Developer"
                description="I turn chaos into clean, usable systems. Discover my background in commercial fishing, arts, and full-stack development."
                url="/bio"
            />
            {/* Hero Bio Card */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-10 md:p-14 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-16 max-w-4xl mx-auto relative overflow-hidden">

                {/* Decorative background glow for Bio Card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <h1 className="text-4xl md:text-5xl font-bold text-neonBlue mb-8 text-center drop-shadow-[0_0_10px_rgba(0,255,255,0.4)] relative z-10">
                    BIO
                </h1>

                <div className="space-y-6 text-lg text-gray-200 leading-relaxed text-center md:text-left relative z-10">
                    <p>
                        I turn chaos into clean, usable systems—web apps, tools, and digital experiences that feel sharp and intentional.
                        I’m a former commercial fisherman who rebuilt my life through education, art, and code.
                    </p>
                    <p className="text-gray-300">
                        Today I design and build modern interfaces and full-stack products for visionaries, builders, and small teams ready to grow.
                        I bring structure, strategy, and striking design—so ideas don’t just look good, they ship.
                    </p>

                    {/* CTA / Status */}
                    <div className="pt-6 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                        <span className="flex items-center gap-2 text-neonBlue font-mono text-sm uppercase tracking-wider bg-neonBlue/10 px-4 py-2 rounded-full border border-neonBlue/20 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-neonBlue"></span>
                            Available for freelance / collabs
                        </span>
                        <a
                            href="https://github.com/CavinKrenik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                            github.com/CavinKrenik
                        </a>
                    </div>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Technical Arsenal</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPink mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((skillGroup, idx) => (
                    <SkillCard key={idx} {...skillGroup} delay={idx * 0.1} />
                ))}
            </div>
        </section>
    );
}