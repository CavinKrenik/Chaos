// src/pages/Portfolio.jsx
import React from 'react';

const PROJECTS = [
  {
    id: 'dataghost',
    title: 'DataGhost',
    description: 'The simplest, most transparent way to disappear from data brokers. We blast 70+ opt-out requests and CC you on every single email. No account. No subscription. No dashboard. No bullshit.',
    tech: ['Next.js 14', 'Supabase', 'Playwright', 'Resend', 'Lemon Squeezy'],
    live: 'https://dataghost.me',
    repo: null,
    featured: true,
  },
  {
    id: 'seedsync',
    title: 'Seed Sync — Role Assignment Tool',
    description: 'Assign Human Design roles to team members in a conscious community. Built with React, Flask, and SQLite.',
    tech: ['React', 'Flask', 'SQLite'],
    live: 'https://glowing-sunflower-d8af4c.netlify.app/',
    repo: 'https://github.com/CavinKrenik/SEEDTEAM',
    featured: false,
  },
  {
    id: 'qres',
    title: 'QRES — Quantum-Relational Encoding System',
    description: 'A prototype for a novel data encoding model that uses relational states between bits instead of traditional base-N counting. QRES demonstrates high-efficiency compression.',
    tech: ['Python', 'Rust'],
    live: null,
    repo: 'https://github.com/CavinKrenik/QRES',
    featured: false,
  },
  {
    id: 'recovr',
    title: 'RecovrSocial',
    description: 'A mobile-first web app for people in recovery to connect, share clean dates, and discover sober events.',
    tech: ['React Native', 'Expo'],
    live: 'http://recovrsocial.com',
    repo: 'https://github.com/CavinKrenik/RecovrSocial',
    featured: false,
  },
  {
    id: 'seedstudio',
    title: 'The Seed Studio',
    description: 'A fully functional e-commerce platform with an integrated admin dashboard for managing products, inventory, and orders.',
    tech: ['React', 'Node', 'Commerce'],
    live: 'https://theseedstudio.store/',
    repo: 'https://github.com/CavinKrenik/TheSeedStore',
    featured: false,
  },
  {
    id: 'seedplants',
    title: 'Seed Plants — Garden Tracker',
    description: 'Track garden progress with plant care info, photos, and admin tools.',
    tech: ['React', 'Flask'],
    live: 'https://seedplants.netlify.app/',
    repo: 'https://github.com/CavinKrenik/SEED_PLANTS',
    featured: false,
  },
  {
    id: 'customweb',
    title: 'Custom Web App',
    description: 'A React-powered AI Tool Library.',
    tech: ['React', 'AI Integration'],
    live: 'https://subtle-flan-dd1ced.netlify.app/',
    repo: null,
    featured: false,
  },
  {
    id: 'business',
    title: 'Business Website',
    description: 'A fast-loading re-build of small business website — mobile-optimized and SEO ready.',
    tech: ['HTML', 'CSS', 'JS'],
    live: 'https://relax-therapy-wellness.deploypad.app/',
    repo: null,
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-neonBlue mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">Portfolio</h2>
      <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
        Explore the creative projects I've brought to life — from interactive web apps to sleek modern websites and digital art.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`
              group relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-md border border-white/10 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:border-neonBlue
              flex flex-col text-left p-8
              ${project.featured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
            `}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue to-neonPink opacity-0 group-hover:opacity-10 transition duration-500 blur-xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.featured && (
                  <span className="bg-neonPink/20 text-neonPink text-xs uppercase font-bold px-2 py-1 rounded border border-neonPink/50">Featured</span>
                )}
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-cyan-900/30 text-cyan-200 text-xs px-2 py-1 rounded border border-cyan-500/20">{t}</span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

              <div className="flex gap-4 mt-auto">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-neonBlue font-semibold hover:text-white transition-colors border-b border-neonBlue hover:border-white pb-0.5">
                    Live Demo
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    <span>View Code</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
