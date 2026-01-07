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

  const NAV_ITEMS = [
    {
      path: '/',
      label: 'HOME',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      path: '/portfolio',
      label: 'PORTFOLIO',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    },
    {
      path: '/services',
      label: 'SERVICES',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      path: '/bio',
      label: 'BIO',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    },
    {
      path: '/contact',
      label: 'CONTACT',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md md:w-auto md:max-w-none">
      <div className="flex items-center justify-between md:justify-center md:gap-8 px-2 py-3 md:px-8 md:py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 group flex flex-col md:flex-row items-center gap-1 md:gap-2 ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              {/* Active Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              {/* Icon - Always visible, slightly larger on mobile for touch targets */}
              <span className="text-xl md:text-lg relative z-10">
                {item.icon}
              </span>

              {/* Label - Hidden on very small screens (using sm:block instead of xs:block), Visible on slightly larger mobile & Desktop */}
              <span className="text-[10px] md:text-sm font-medium tracking-wide hidden sm:block relative z-10">
                {item.label}
              </span>

              {/* Mobile Active Dot (Replacing label if space is tight) */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full md:hidden"></span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
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
        <div className="fixed top-6 left-6 z-40 hidden md:block">
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl hover:border-cyan-500/50 hover:bg-black/60 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.6)]"></div>
            <span className="text-sm font-bold tracking-widest text-gray-200 group-hover:text-white">
              CHAOSTOCODE
            </span>
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
