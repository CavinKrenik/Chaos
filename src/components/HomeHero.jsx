import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="text-center py-24 px-6 bg-black/30 backdrop-blur-sm rounded-2xl max-w-5xl mx-auto border border-white/5 shadow-2xl">
      <img
        src="/logo.png"
        alt="Chaos to Code Logo"
        className="mx-auto w-24 md:w-32 h-auto mb-8 animate-spin-slow drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
      />
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-neonBlue via-white to-neonPink bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.2)]">
        From Chaos to Code
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        I help individuals and organizations turn messy ideas into polished websites, apps, and digital solutions.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Link
          to="/portfolio"
          className="bg-neonPink/90 hover:bg-neonPink text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_#ff00ff] hover:-translate-y-1"
        >
          View My Work
        </Link>
        <Link
          to="/services"
          className="bg-black/40 backdrop-blur border border-neonBlue text-neonBlue hover:bg-neonBlue/10 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_#00ffff] hover:-translate-y-1"
        >
          See What I Offer
        </Link>
      </div>
    </section>
  );
}
