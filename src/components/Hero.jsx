import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="text-center py-24">
      {/* Logo above the title */}
      <img
        src="/logo.png"
        alt="Chaos to Code Logo"
        className="mx-auto w-24 md:w-32 h-auto mb-6"
      />

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neonBlue mb-6">
        Welcome to Chaos to Code
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Master AI prompt engineering and build creative superpowers — from chaos, we code.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6">
        <Link
          to="/prompt-lab"
          className="bg-neonPink hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Enter Prompt Lab
        </Link>
        <Link
          to="/prompt-gallery"
          className="border border-neonPink text-neonPink hover:bg-neonPink hover:text-black font-semibold py-3 px-6 rounded-xl transition"
        >
          Explore Gallery
        </Link>
      </div>
    </section>
  );
}
