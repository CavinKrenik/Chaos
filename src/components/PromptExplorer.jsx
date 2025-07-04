import React, { useState } from 'react';

export default function PromptExplorer() {
  const [prompt, setPrompt] = useState('');
  const [preview, setPreview] = useState('');

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setPreview(prompt);
  };

  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-neonBlue mb-4">Prompt Explorer</h2>
      <p className="text-gray-300 mb-6">
        Type a prompt below and click <span className="text-neonPink font-semibold">Generate</span> to preview your creative spark.
      </p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        className="w-full p-4 rounded-lg bg-black text-white border border-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-neonPink"
        placeholder="Enter your AI prompt here..."
      />
      <button
        onClick={handleGenerate}
        className="bg-neonPink hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-xl transition"
      >
        Generate
      </button>

      {preview && (
        <div className="mt-8 p-6 bg-black border border-neonPink rounded-xl">
          <h3 className="text-xl font-semibold text-neonBlue mb-2">Prompt Preview:</h3>
          <p className="text-white whitespace-pre-wrap">{preview}</p>
        </div>
      )}
    </section>
  );
}
