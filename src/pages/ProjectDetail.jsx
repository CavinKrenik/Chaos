import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import SEO from '../components/SEO';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl text-neonPink font-bold mb-4">Project Not Found</h2>
                <Link to="/portfolio" className="text-neonBlue hover:text-white underline">
                    Return to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-20 px-6">
            <SEO
                title={project.title}
                description={project.description}
                url={`/portfolio/${project.id}`}
            />
            {/* Back Button */}
            <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                Back to Portfolio
            </Link>

            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">

                {/* Header */}
                <div className="p-8 md:p-12 border-b border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/10 to-neonPink/10 opacity-20"></div>
                    <div className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span key={i} className="bg-cyan-900/30 text-cyan-200 text-xs px-2 py-1 rounded border border-cyan-500/20">{t}</span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            {project.title}
                        </h1>

                        <div className="flex gap-4">
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-neonBlue text-black font-bold py-3 px-6 rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                                    Live Demo
                                </a>
                            )}
                            {project.repo && (
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-5 md:p-12">
                    {project.details ? project.details : (
                        <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
                    )}
                </div>

            </div>
        </div>
    );
}
