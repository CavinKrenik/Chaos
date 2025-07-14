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
          <h3 className="text-neonPink text-xl font-semibold mb-2">Seed Sync — Role Assignment Tool</h3>
          <p className="text-gray-300 mb-2">Assign Human Design roles to team members in a conscious community. Built with React, Flask, and SQLite.</p>
          <div className="flex justify-center gap-4">
            <a href="https://glowing-sunflower-d8af4c.netlify.app/" target="_blank" className="text-neonBlue underline hover:text-white">Live Site</a>
            <a href="https://github.com/CavinKrenik/SEEDTEAM" target="_blank" className="text-neonBlue underline hover:text-white">GitHub Repo</a>
          </div>
        </div>

        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">QRES — Quantum-Relational Encoding System</h3>
          <p className="text-gray-300 mb-2">
            A prototype for a novel data encoding model that uses relational states between bits instead of traditional base-N counting.
            QRES demonstrates high-efficiency compression with chunked data reconstruction and full decompression validation.
            Built using Python and Rust.
          </p>
          <div className="flex justify-center">
            <a href="https://github.com/CavinKrenik/QRES" target="_blank" className="text-neonBlue underline hover:text-white">GitHub Repo</a>
          </div>
        </div>


        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">RecovrSocial — Clean & Sober Social App</h3>
          <p className="text-gray-300 mb-2">
            A mobile-first web app for people in recovery to connect, share clean dates, and discover sober events. Built with React Native and Expo.
          </p>
          <div className="flex justify-center gap-4">
            <a href="http://recovrsocial.com" target="_blank" className="text-neonBlue underline hover:text-white">Live Site</a>
            <a href="https://github.com/CavinKrenik/RecovrSocial" target="_blank" className="text-neonBlue underline hover:text-white">GitHub Repo</a>
          </div>
        </div>

                <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">The Seed Studio — Online Store & Admin Panel</h3>
          <p className="text-gray-300 mb-2">
            A fully functional e-commerce platform with an integrated admin dashboard for managing products, inventory, and orders.
            Includes responsive design, secure routing, and streamlined user experience. Built with modern web technologies.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://theseedstudio.store/" target="_blank" className="text-neonBlue underline hover:text-white">Live Site</a>
            <a href="https://github.com/CavinKrenik/TheSeedStore" target="_blank" className="text-neonBlue underline hover:text-white">GitHub Repo</a>
          </div>
        </div>


        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">Seed Plants — Garden Tracker</h3>
          <p className="text-gray-300 mb-2">Track garden progress with plant care info, photos, and admin tools. Built using React and Flask.</p>
          <div className="flex justify-center gap-4">
            <a href="https://seedplants.netlify.app/" target="_blank" className="text-neonBlue underline hover:text-white">Live Site</a>
            <a href="https://github.com/CavinKrenik/SEED_PLANTS" target="_blank" className="text-neonBlue underline hover:text-white">GitHub Repo</a>
          </div>
        </div>

        <div className="bg-black/50 p-6 rounded-lg shadow-md border border-neonBlue hover:scale-105 transition-transform">
          <h3 className="text-neonPink text-xl font-semibold mb-2">Custom Web App</h3>
          <p className="text-gray-300 mb-2">A React-powered AI Tool Library</p>
          <a href="https://subtle-flan-dd1ced.netlify.app/" className="text-neonBlue underline hover:text-white">View Project →</a>
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
