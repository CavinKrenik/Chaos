import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Master AI by Doing</h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        Welcome to <span className="text-neonBlue font-bold">Chaos To Code</span> — where you turn confusion into clarity through prompt engineering.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-neonBlue text-black font-semibold rounded hover:opacity-80">
          Explore Prompts
        </button>
        <button className="px-6 py-2 bg-neonPink text-black font-semibold rounded hover:opacity-80">
          Test a Prompt
        </button>
      </div>
    </div>
  );
};

export default App;
