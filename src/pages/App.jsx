import React from 'react';
import logo from './assets/logoc2c.png'; // path to your logo

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center px-4">
      <img src={logo} alt="Chaos To Code Logo" className="h-20 mb-6 drop-shadow-lg" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Master AI by Doing</h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        Welcome to <span className="text-cyan-400 font-bold">Chaos To Code</span> — where you turn confusion into clarity through prompt engineering.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded hover:opacity-90 shadow">
          Explore Prompts
        </button>
        <button className="px-6 py-2 bg-pink-400 text-black font-semibold rounded hover:opacity-90 shadow">
          Test a Prompt
        </button>
      </div>
    </div>
  );
};

export default App;
