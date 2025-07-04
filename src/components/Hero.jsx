// src/components/Hero.jsx
import logo from '../assets/logoc2c.png';

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-black/60">
      <img src={logo} alt="Chaos To Code Logo" className="mx-auto h-24 mb-6 drop-shadow-lg" />
      <h1 className="text-4xl md:text-5xl font-bold text-neonBlue mb-4">
        Master AI by Doing
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
        Welcome to <span className="text-neonPink font-semibold">Chaos To Code</span> — where you turn confusion into clarity through interactive prompt engineering.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#explorer" className="px-6 py-3 bg-neonBlue text-black rounded font-semibold hover:opacity-90 transition">
          Explore Prompts
        </a>
        <a href="/prompt-lab" className="px-6 py-3 bg-neonPink text-black rounded font-semibold hover:opacity-90 transition">
          Test a Prompt
        </a>
      </div>
    </section>
  );
}
