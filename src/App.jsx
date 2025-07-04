// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PromptLab from './pages/PromptLab';
import PromptGallery from './pages/PromptGallery';
import Hero from './components/Hero';
import PromptExplorer from './components/PromptExplorer';
import CallToAction from './components/CallToAction';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-sans">
        <header className="bg-black/80 backdrop-blur sticky top-0 z-50 shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-neonBlue">chaostocode</h1>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-neonPink">Home</Link></li>
              <li><Link to="/prompt-lab" className="hover:text-neonPink">Prompt Lab</Link></li>
              <li><Link to="/prompt-gallery" className="hover:text-neonPink">Gallery</Link></li>
            </ul>
          </nav>
        </header>
        <main className="relative">
          <div className="absolute inset-0 bg-stars animate-pulseSlow opacity-10 z-0" />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prompt-lab" element={<PromptLab />} />
              <Route path="/prompt-gallery" element={<PromptGallery />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
