// src/App.jsx
import React from 'react';
import logo from './assets/logoc2c.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white font-sans relative overflow-hidden">
      
      {/* Animated Starfield BG */}
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-30 animate-pulseSlow z-0 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 backdrop-blur sticky top-0">
        <h1 className="text-2xl font-bold tracking-wide">chaostocode.com</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-cyan-400">Home</a>
          <a href="#" className="hover:text-cyan-400">Prompt Lab</a>
          <a href="#" className="hover:text-cyan-400">Prompt Gallery</a>
          <a href="#" className="hover:text-cyan-400">Challenges</a>
          <a href="#" className="hover:text-cyan-400">Profiles</a>
          <a href="#" className="hover:text-cyan-400">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 py-24 relative z-10">
        <img src={logo} alt="Chaos To Code Logo" className="h-24 mb-6 drop-shadow-lg mx-auto" />
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Welcome to <span className="text-cyan-400">Chaos to Code</span>
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-gray-300">
          Learn prompt engineering, test AI tools, and join a galactic community of builders and dreamers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-8 rounded-full text-lg transition">
            Explore Prompts
          </a>
          <a href="#" className="bg-pink-400 hover:bg-pink-500 text-black font-bold py-3 px-8 rounded-full text-lg transition">
            Test a Prompt
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {features.map((feature, i) => (
          <div key={i} className="bg-white bg-opacity-5 p-6 rounded-2xl shadow-lg border border-cyan-500">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-90 text-sm text-gray-400 py-8 px-6 text-center relative z-10">
        <div className="mb-2 space-x-4">
          <a href="#" className="hover:text-cyan-400">Privacy</a>
          <a href="#" className="hover:text-cyan-400">Terms</a>
          <a href="#" className="hover:text-cyan-400">Contact</a>
        </div>
        <div className="text-xs">&copy; 2025 Chaos to Code. All rights reserved.</div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Prompt Lab",
    desc: "Experiment with AI prompts and test output in real-time.",
  },
  {
    title: "Prompt Gallery",
    desc: "Browse community-tested prompts and remix your favorites.",
  },
  {
    title: "Prompt Challenges",
    desc: "Join weekly battles, climb the ranks, and win rewards.",
  },
  {
    title: "Profiles",
    desc: "Track your learning, save favorites, and share your growth.",
  },
  {
    title: "Learn AI",
    desc: "Get started with GPT, DALL·E, Claude, and more.",
  },
  {
    title: "Galactic UI",
    desc: "Dark mode UI designed for space travelers and dreamers.",
  },
];
