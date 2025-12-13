// src/pages/Services.jsx
import React from 'react';

const SERVICES = [
  {
    title: 'Web App Development',
    desc: 'Custom React/Vite apps, dynamic dashboards, interactive UIs, data integration, API work.'
  },
  {
    title: 'Website Design',
    desc: 'Modern, responsive websites built with clean code and purposeful design — personal, business, or portfolio.'
  },
  {
    title: 'Branding & Digital Content',
    desc: 'Logos, banners, icons, social graphics, custom site illustrations, and themed UI kits.'
  },
  {
    title: 'Tech Consultation',
    desc: 'Guidance for planning apps, tech stacks, feature sets, workflows, and launching online.'
  }
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-neonBlue mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">Services</h2>
      <p className="text-gray-300 mb-16 text-lg max-w-2xl mx-auto">
        I help individuals and businesses turn chaotic ideas into clean, effective digital experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-neonPink/50 hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] transition-all duration-300 group"
          >
            <h3 className="text-2xl font-semibold text-neonPink mb-4 group-hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.8)] transition-all">{service.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
