// src/components/CallToAction.jsx
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 text-center bg-black/70 border-t border-neonBlue">
      <h2 className="text-3xl font-bold text-neonPink mb-4">Ready to Transform Chaos Into Code?</h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Whether you're a beginner or an AI enthusiast, Chaos to Code gives you the tools, prompts, and inspiration to build your skills and have fun doing it.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <Link
          to="/prompt-lab"
          className="px-6 py-3 bg-neonBlue text-black font-semibold rounded hover:opacity-90 shadow transition"
        >
          Try the Prompt Lab
        </Link>
        <Link
          to="/prompt-gallery"
          className="px-6 py-3 bg-neonPink text-black font-semibold rounded hover:opacity-90 shadow transition"
        >
          Browse Prompt Gallery
        </Link>
      </div>
    </section>
  );
}
