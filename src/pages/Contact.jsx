// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-24 px-6 text-center">
      <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center">

        {/* Email Icon */}
        <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 text-neonBlue drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Contact
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed">
          Ready to start a project? <br />
          Click below to send me an email directly.
        </p>

        <a
          href="mailto:cavinkrenik5@icloud.com"
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-neonPink rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neonPink hover:bg-pink-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] active:scale-95"
        >
          <span className="relative text-lg tracking-wide">Send Email</span>
          <svg className="w-5 h-5 ml-3 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>

        <div className="mt-12 pt-8 border-t border-white/10 w-full">
          <p className="text-gray-400 text-sm">
            Or verify my work on <a href="https://github.com/CavinKrenik" target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-white transition-colors underline decoration-neonBlue/50 hover:decoration-white">GitHub</a>
          </p>
        </div>

      </div>
    </section>
  );
}
