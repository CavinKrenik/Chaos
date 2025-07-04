import React from 'react';

export default function PromptGallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-neonBlue mb-6">🖼️ Prompt Gallery</h1>
      <p className="text-lg text-gray-300 mb-8">
        Browse a collection of community-tested AI prompts. In the future, you’ll be able to explore, remix, and save your favorites.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="bg-black/40 border border-gray-700 rounded-xl p-6 hover:border-neonPink transition">
            <h2 className="text-xl font-semibold text-neonGreen mb-2">Prompt Title {n}</h2>
            <p className="text-gray-300 text-sm">This is a placeholder for a future featured prompt example.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
