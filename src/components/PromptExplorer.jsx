// src/components/PromptExplorer.jsx
import { useState } from 'react';

const samplePrompts = [
  "Write a story about a robot learning emotions.",
  "Explain quantum physics like I'm five.",
  "Generate a social media post about AI art tools.",
  "What if Shakespeare wrote a startup pitch?",
];

export default function PromptExplorer() {
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const handleSelect = (prompt) => {
    setSelectedPrompt(prompt);
  };

  return (
    <section id="explorer" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-neonBlue">Prompt Explorer</h2>
      <p className="text-gray-300 mb-8">
        Click a prompt to preview it. Use these for practice or inspiration!
      </p>
      <div className="grid gap-4 sm:grid-cols-2 text-left mb-6">
        {samplePrompts.map((prompt, index) => (
          <button
            key={index}
            className="bg-black/50 hover:bg-black/70 border border-neonPink text-white p-4 rounded transition text-sm sm:text-base"
            onClick={() => handleSelect(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
      {selectedPrompt && (
        <div className="bg-black/60 border border-neonBlue text-white p-6 rounded-lg mt-4">
          <h3 className="text-xl font-bold mb-2 text-neonPink">Selected Prompt:</h3>
          <p className="italic">{selectedPrompt}</p>
        </div>
      )}
    </section>
  );
}
