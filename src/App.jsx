import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-sans">
        <header className="bg-black/80 backdrop-blur sticky top-0 z-50 shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-neonBlue">chaostocode</h1>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-neonPink">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-neonPink">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-neonPink">Services</Link></li>
              <li><Link to="/about" className="hover:text-neonPink">About</Link></li>
              <li><Link to="/contact" className="hover:text-neonPink">Contact</Link></li>
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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
