// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-neonBlue mb-6">My Journey</h2>
      <p className="text-lg text-gray-300 mb-6">
        From navigating the storm of chaos to forging a clear path in tech, I’ve turned my experience into transformation.
        As a former commercial fisherman and recovering addict, I reclaimed my life through education, art, and code.
      </p>
      <p className="text-md text-gray-400 mb-6">
        Now, I specialize in designing modern web apps and creative digital experiences for visionaries, builders, and businesses ready to grow.
        I believe in making ideas real—through structure, strategy, and striking design.
      </p>
      <div className="border border-neonPink p-6 rounded-xl bg-black/40">
        <p className="text-neonPink font-semibold mb-2">Key Skills:</p>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>React, Vite, Tailwind, Flask, SQLite</li>
          <li>AI Integration & Prompt Engineering</li>
          <li>Responsive Design & SEO</li>
          <li>Branding & Visual Storytelling</li>
        </ul>
      </div>
    </section>
  );
}
