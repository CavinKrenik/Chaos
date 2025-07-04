import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-r from-black via-dark to-black rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-neonBlue mb-4">
        Ready to Bring Your Vision to Life?
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Whether you need a web app, portfolio site, or a full design-to-launch solution — I'm here to help.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-neonPink hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-xl transition"
      >
        Contact Me
      </Link>
    </section>
  );
}
