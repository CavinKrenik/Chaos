// src/App.jsx
import React from "react";
import logo from "./assets/logoc2c_resized.png";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Top Nav */}
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Chaos to Code Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold">chaostocode.com</h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Prompt Lab</a>
          <a href="#" className="hover:text-blue-400">Gallery</a>
          <a href="#" className="hover:text-blue-400">Challenges</a>
          <a href="#" className="hover:text-blue-400">Profiles</a>
          <a href="#" className="hover:text-blue-400">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Chaos to Code</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Learn prompt engineering, test AI tools, and join a galactic community of builders and dreamers.
        </p>
        <a
          href="#"
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-lg font-semibold transition"
        >
          Enter the Prompt Lab
        </a>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Chaos to Code. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
