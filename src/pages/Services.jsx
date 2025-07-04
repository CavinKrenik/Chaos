// src/pages/Services.jsx
import React from 'react';

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-neonBlue mb-6">Services</h2>
      <p className="text-gray-300 mb-10">
        I help individuals and businesses turn chaotic ideas into clean, effective digital experiences.
      </p>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="bg-black/60 rounded-2xl p-6 border border-neonBlue hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-neonPink mb-2">Web App Development</h3>
          <p className="text-gray-300 text-sm">
            Custom React/Vite apps, dynamic dashboards, interactive UIs, data integration, API work.
          </p>
        </div>

        <div className="bg-black/60 rounded-2xl p-6 border border-neonBlue hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-neonPink mb-2">Website Design</h3>
          <p className="text-gray-300 text-sm">
            Modern, responsive websites built with clean code and purposeful design — personal, business, or portfolio.
          </p>
        </div>

        <div className="bg-black/60 rounded-2xl p-6 border border-neonBlue hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-neonPink mb-2">Branding & Digital Content</h3>
          <p className="text-gray-300 text-sm">
            Logos, banners, icons, social graphics, custom site illustrations, and themed UI kits.
          </p>
        </div>

        <div className="bg-black/60 rounded-2xl p-6 border border-neonBlue hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-neonPink mb-2">Tech Consultation</h3>
          <p className="text-gray-300 text-sm">
            Guidance for planning apps, tech stacks, feature sets, workflows, and launching online.
          </p>
        </div>
      </div>
    </section>
  );
}
