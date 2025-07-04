import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-neonBlue mb-4">
        Dive Into the Chaos.
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Start experimenting, exploring, and sharing prompts that unlock creativity. Join the prompt revolution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/prompt-lab"
          className="bg-neonPink hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Enter Prompt Lab
        </Link>
        <Link
          to="/prompt-gallery"
          className="border-2 border-neonBlue hover:bg-neonBlue text-white font-bold py-3 px-8 rounded-xl transition"
        >
          Explore Gallery
        </Link>
      </div>
    </section>
  );
}
