import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="text-center py-24 px-4 bg-black/70 backdrop-blur rounded-xl max-w-5xl mx-auto">
      <img
        src="/logo.png"
        alt="Chaos to Code Logo"
        className="mx-auto w-24 md:w-32 h-auto mb-6 animate-spin-slow"
      />
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neonBlue mb-6">
        From Chaos to Code
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
        I help individuals and organizations turn messy ideas into polished websites, apps, and digital solutions.
      </p>
      <div className="flex justify-center gap-6">
        <Link
          to="/portfolio"
          className="bg-neonPink hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          View My Work
        </Link>
        <Link
          to="/services"
          className="border border-neonPink text-neonPink hover:bg-neonPink hover:text-black font-semibold py-3 px-6 rounded-xl transition"
        >
          See What I Offer
        </Link>
      </div>
    </section>
  );
}
