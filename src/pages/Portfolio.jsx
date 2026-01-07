import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const ProjectCard = ({ project, featured = false }) => (
  <Link
    to={`/portfolio/${project.id}`}
    className={`
      group relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-md border border-white/10 
      transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:border-neonBlue
      flex flex-col text-left p-6 md:p-8 hover:-translate-y-1 cursor-pointer h-full
    `}
  >
    {/* Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue to-neonPink opacity-0 group-hover:opacity-10 transition duration-500 blur-xl"></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex flex-wrap gap-2 mb-4">
        {featured && (
          <span className="bg-neonPink/20 text-neonPink text-xs uppercase font-bold px-2 py-1 rounded border border-neonPink/50">Featured</span>
        )}
        {project.tech.slice(0, 3).map((t, i) => (
          <span key={i} className="bg-cyan-900/30 text-cyan-200 text-xs px-2 py-1 rounded border border-cyan-500/20">{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-gray-500 text-xs py-1 px-1">+{project.tech.length - 3}</span>
        )}
      </div>

      <h3 className={`font-bold text-white mb-3 group-hover:text-neonBlue transition-colors ${featured ? 'text-3xl' : 'text-xl'}`}>
        {project.title}
      </h3>

      <p className={`text-gray-300 mb-6 flex-grow ${featured ? 'text-lg' : 'text-sm'}`}>
        {project.description}
      </p>

      <div className="mt-auto text-neonBlue font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center text-sm uppercase tracking-wide">
        View Case Study
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </div>
    </div>
  </Link>
);

export default function Portfolio() {
  const featuredOnly = PROJECTS.filter(p => p.type === 'featured');
  const webApps = PROJECTS.filter(p => p.type === 'web-app');
  const websites = PROJECTS.filter(p => p.type === 'website');
  const labs = PROJECTS.filter(p => p.type === 'lab');

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-neonBlue mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">Projects Hub</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A collection of my work in engineering, design, and experimentation.
          From complex SaaS platforms to digital art galleries.
        </p>
      </div>

      {/* Featured Section */}
      <section className="mb-20">
        <h3 className="text-2xl text-white font-bold mb-8 border-l-4 border-neonPink pl-4">Featured Work</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredOnly.map(project => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      </section>

      {/* Web Applications */}
      {webApps.length > 0 && (
        <section className="mb-20">
          <h3 className="text-2xl text-white font-bold mb-8 border-l-4 border-neonBlue pl-4">Web Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webApps.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Websites */}
      {websites.length > 0 && (
        <section className="mb-20">
          <h3 className="text-2xl text-white font-bold mb-8 border-l-4 border-neonBlue pl-4">Websites</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Labs & Experiments */}
      {labs.length > 0 && (
        <section className="mb-20">
          <h3 className="text-2xl text-white font-bold mb-8 border-l-4 border-neonBlue pl-4">Labs & Experiments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
