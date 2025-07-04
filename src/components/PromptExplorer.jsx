// src/pages/PromptExplorer.jsx
import React, { useState } from 'react';

export default function PromptExplorer() {
  const [prompt, setPrompt] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    alert('Prompt copied! Paste it into ChatGPT.');
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-neonBlue mb-4">Prompt Explorer</h2>
      <p className="text-gray-300 mb-8">
        Type or paste your prompt below. Then try it out in ChatGPT.
      </p>
      <textarea
        className="w-full h-40 p-4 bg-black/60 text-white border border-neonBlue rounded-lg resize-none mb-6"
        placeholder="Write your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <button
          onClick={handleCopy}
          className="bg-neonPink hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Copy Prompt
        </button>
        <a
          href="https://chat.openai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neonBlue underline hover:text-white"
        >
          Try in ChatGPT →
        </a>
      </div>
    </div>
  );
}
