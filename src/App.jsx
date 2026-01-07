import { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

function NavBar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/services', label: 'SERVICES' },
    { path: '/bio', label: 'BIO' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 md:px-3 md:py-3 shadow-2xl flex items-center gap-1 md:gap-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-2 md:px-6 md:py-3 rounded-xl text-xs md:text-sm font-bold tracking-wider transition-colors duration-300"
            >
              <span className={`relative z-10 ${isActive ? 'text-black' : 'text-slate-400 hover:text-white'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-cyan-400 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function PageWrapper({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-transparent text-white selection:bg-cyan-500/30 font-sans pb-32">
        {/* Persistent Grid Background */}
        <div className="fixed inset-0 bg-grid-pattern opacity-30 z-[-1] pointer-events-none" />

        {/* Ambient Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] z-[-1]" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px] z-[-1]" />

        {/* Brand Logo - Top Left */}
        <div className="fixed top-8 left-8 z-40 mix-blend-difference hidden md:block">
          <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-75 transition-opacity">
            CHAOSTOCODE
          </Link>
        </div>

        <NavBar />

        <main className="relative z-10">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<ProjectDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
        </main>
      </div>
    </Router>
  );
}
