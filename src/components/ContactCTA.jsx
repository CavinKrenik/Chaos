import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="py-20 px-6 text-center bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/10 to-neonPink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Ready to Bring Your <span className="text-neonBlue">Vision</span> to Life?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Whether you need a web app, portfolio site, or a full design-to-launch solution — I'm here to help.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-black font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:bg-neonBlue hover:scale-105 hover:shadow-[0_0_20px_#00ffff]"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
