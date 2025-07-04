// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-neonBlue mb-4">Contact / Hire Me</h1>
      <p className="text-gray-300 mb-8">
        Let’s connect and bring your ideas to life. Whether you need a custom website, web app, digital design, or consulting—I’m here to help.
      </p>

      <div className="text-left bg-black/60 p-6 rounded-xl border border-neonBlue mb-10">
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:cavinkrenik5@icloud.com" className="text-neonBlue underline">cavinkrenik5@icloud.com</a></p>
        <p className="mb-2"><strong>Phone:</strong> <a href="tel:3608687579" className="text-neonBlue underline">360-868-7579</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/CavinKrenik/AboutMe/blob/main/README_Version2.md" target="_blank" rel="noopener noreferrer" className="text-neonBlue underline">View About Me</a></p>
      </div>

      <form className="grid gap-4 text-left">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-black/40 border border-neonBlue text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neonBlue"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-black/40 border border-neonBlue text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neonBlue"
        />
        <textarea
          placeholder="How can I help you?"
          className="bg-black/40 border border-neonBlue text-white px-4 py-3 h-40 resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-neonBlue"
        ></textarea>
        <button
          type="submit"
          className="bg-neonPink hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
