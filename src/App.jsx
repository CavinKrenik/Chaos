import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-sans">
        <header className="bg-black/30 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-neonBlue drop-shadow-[0_0_5px_rgba(0,255,255,0.6)]">chaostocode</h1>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-300 hover:text-neonPink transition-all duration-300 hover:drop-shadow-[0_0_5px_#ff00ff]">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-neonPink transition-all duration-300 hover:drop-shadow-[0_0_5px_#ff00ff]">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-neonPink transition-all duration-300 hover:drop-shadow-[0_0_5px_#ff00ff]">Services</Link></li>
              <li><Link to="/bio" className="text-gray-300 hover:text-neonPink transition-all duration-300 hover:drop-shadow-[0_0_5px_#ff00ff]">Bio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-neonPink transition-all duration-300 hover:drop-shadow-[0_0_5px_#ff00ff]">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="relative">
          <div className="absolute inset-0 bg-stars animate-pulseSlow opacity-10 z-0" />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
