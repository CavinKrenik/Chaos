// src/pages/Bio.jsx
import React from 'react';

const SKILLS = [
    {
        category: 'Core',
        items: ['HTML5', 'CSS3/SCSS', 'JavaScript (ES6+)', 'Python', 'Rust'],
        color: 'text-neonBlue',
    },
    {
        category: 'Frontend',
        items: ['React', 'Vite', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
        color: 'text-neonPink',
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Flask', 'PostgreSQL', 'SQLite', 'Supabase'],
        color: 'text-neonBlue',
    },
    {
        category: 'DevOps & Tools',
        items: ['Git/GitHub', 'Docker', 'Render', 'Netlify', 'Railway'],
        color: 'text-neonPink',
    },
    {
        category: 'AI & Automation',
        items: ['LLM Integration', 'Prompt Engineering', 'Agentic Workflows'],
        color: 'text-neonBlue',
    },
    {
        category: 'Creative',
        items: ['UI/UX Design', 'Figma', 'Adobe Suite', 'Digital Art'],
        color: 'text-neonPink',
    },
];

export default function Bio() {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            {/* Hero Bio Card */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-10 md:p-14 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-16 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-neonBlue mb-8 text-center drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">Bio</h1>

                <div className="space-y-6 text-lg text-gray-200 leading-relaxed text-center md:text-left">
                    <p>
                        From navigating the storm of chaos to forging a clear path in tech, I’ve turned my experience into transformation.
                        As a former commercial fisherman and recovering addict, I reclaimed my life through education, art, and code.
                    </p>
                    <p className="text-gray-300">
                        Now, I specialize in designing modern web apps and creative digital experiences for visionaries, builders, and businesses ready to grow.
                        I believe in making ideas real—through structure, strategy, and striking design.
                    </p>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Technical Arsenal</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPink mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.map((skillGroup, idx) => (
                    <div
                        key={idx}
                        className="group bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-neonPink/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,255,0.15)]"
                    >
                        <h3 className={`text-xl font-bold mb-6 ${skillGroup.color} drop-shadow-sm group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all`}>
                            {skillGroup.category}
                        </h3>
                        <ul className="space-y-3">
                            {skillGroup.items.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                    <span className={`w-1.5 h-1.5 rounded-full ${skillGroup.color === 'text-neonBlue' ? 'bg-neonBlue' : 'bg-neonPink'} shadow-[0_0_5px_currentColor]`}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
