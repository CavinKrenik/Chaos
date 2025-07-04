// src/pages/Portfolio.jsx
import React from 'react';

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-neonBlue mb-6">Portfolio</h2>
      <p className="text-gray-300 text-lg mb-8">
        Explore the creative projects I've brought to life — from interactive web apps to sleek modern websites and digital art.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">Custom Web App</h3>
          <p className="text-gray-300 mb-2">A React-powered AI prompt trainer with animations, routing, and live editing tools.</p>
          <a href="#" className="text-neonBlue underline hover:text-white">View Project →</a>
        </div>

        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">Business Website</h3>
          <p className="text-gray-300 mb-2">A fast-loading marketing site for a small business — mobile-optimized and SEO ready.</p>
          <a href="#" className="text-neonBlue underline hover:text-white">View Project →</a>
        </div>

        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">Brand Identity Kit</h3>
          <p className="text-gray-300 mb-2">Visual design for logos, social banners, and branded assets with consistent theming.</p>
          <a href="#" className="text-neonBlue underline hover:text-white">View Project →</a>
        </div>

        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">E-commerce UI</h3>
          <p className="text-gray-300 mb-2">Modern frontend layout for an online shop with dark theme, Tailwind CSS, and responsive flow.</p>
          <a href="#" className="text-neonBlue underline hover:text-white">View Project →</a>
        </div>
      </div>
    </div>
  );
}
