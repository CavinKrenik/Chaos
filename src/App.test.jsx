import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

// Mock matchMedia for framer-motion/JS dom
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

describe('App Smoke Test', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText(/CHAOS/i)).toBeInTheDocument();
    });
});

describe('Home Page', () => {
    it('displays the massive hero text', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText('TO CODE')).toBeInTheDocument();
    });
});

describe('Portfolio Page', () => {
    it('renders project cards', () => {
        // We can't easily count exact cards without data mocking, 
        // but we can check if the section loads.
        render(
            <MemoryRouter>
                <Portfolio />
            </MemoryRouter>
        );
        expect(screen.getByText(/WORKS/i)).toBeInTheDocument();
        expect(screen.getByText(/SCROLL_DOWN_FOR_ACCESS/i)).toBeInTheDocument();
    });
});
