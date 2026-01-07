import React from 'react';

export const PROJECTS = [
    {
        id: 'dataghost',
        title: 'DataGhost',
        description: 'The simplest, most transparent way to disappear from data brokers. We blast 70+ opt-out requests and CC you on every single email.',
        tech: ['Next.js 14', 'Supabase', 'Playwright', 'Resend', 'Lemon Squeezy'],
        live: 'https://dataghost.me',
        repo: null,
        type: 'featured',
        featured: true,
        details: (
            <div className="space-y-12 text-left">
                <section>
                    <h3 className="text-2xl font-bold text-neonBlue mb-4">The Simplest Way to Disappear</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        No account. No subscription. No dashboard. No bullshit. DataGhost blasts 70+ opt-out requests to data brokers and CCs you on every single email so you can verify the work yourself.
                    </p>
                </section>

                <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-2xl font-bold text-neonPink mb-6">How It Works (The "Stateful" Flow)</h3>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex gap-3">
                            <span className="text-neonBlue font-bold">1.</span>
                            <span><strong>User Pays:</strong> $49 via Lemon Squeezy (one-time).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-neonBlue font-bold">2.</span>
                            <span><strong>Immediate Action:</strong> The Next.js app creates a "Pending Job" in Supabase and instantly sends ~70 automated opt-out emails via Resend.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-neonBlue font-bold">3.</span>
                            <span><strong>Background Protocol:</strong> The Worker (hosted on Railway) launches a headless browser (Playwright) to physically fill out removal forms for brokers that reject emails.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-neonBlue font-bold">4.</span>
                            <span><strong>The Ghost Protocol:</strong> We re-scan weekly for 45 days. On Day 46, a hard-deletion cron job wipes the user data from our database permanently.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Tech Stack (2025 Architecture)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Frontend</span>
                            <span className="text-gray-400">Next.js 14 (App Router) + Tailwind + shadcn/ui</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Backend</span>
                            <span className="text-gray-400">Server Actions + Supabase (Postgres)</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Worker</span>
                            <span className="text-gray-400">Node.js + Playwright (Microservice on Railway)</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Infrastructure</span>
                            <span className="text-gray-400">Netlify (Frontend) + Railway (Worker)</span>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'qres',
        title: 'QRES: Quantum-Relational Encoding System',
        description: 'A neural, deterministic compression engine for the IoT and Edge Computing era, leveraging SNNs and a federated P2P architecture.',
        tech: ['Rust', 'Python', 'WebAssembly', 'SNNs', 'P2P'],
        live: null,
        repo: 'https://github.com/CavinKrenik/QRES',
        type: 'featured',
        featured: true, // Promoted to featured since it's a showcase project
        details: (
            <div className="space-y-12 text-left">
                <section>
                    <h3 className="text-2xl font-bold text-neonBlue mb-4">Neural, Deterministic Compression</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        QRES is a compression framework built for structured time-series data. Unlike general-purpose compressors (like Zstd or Gzip), QRES allows nodes to share "compression intelligence" (models) without sharing raw data, making it ideal for bandwidth-constrained IoT swarms and privacy-preserving analytics.
                    </p>
                    <p className="text-gray-400 italic border-l-4 border-neonPink pl-4">
                        "Building the neural pathways for a self-optimizing internet."
                    </p>
                </section>

                <section className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <h3 className="text-2xl font-bold text-neonPink mb-6">Core Features</h3>
                    <ul className="grid gap-4 md:grid-cols-2">
                        <li className="bg-black/40 p-4 rounded-lg">
                            <strong className="block text-white mb-1">Neural Prediction Engine</strong>
                            <span className="text-sm text-gray-400">Utilizes Spiking Neural Networks (SNNs) to predict and compress repetitive data streams.</span>
                        </li>
                        <li className="bg-black/40 p-4 rounded-lg">
                            <strong className="block text-white mb-1">Deterministic Architecture</strong>
                            <span className="text-sm text-gray-400">Built on Q16.16 fixed-point arithmetic for bit-perfect reproducibility across x86, ARM, and WASM.</span>
                        </li>
                        <li className="bg-black/40 p-4 rounded-lg">
                            <strong className="block text-white mb-1">Federated Learning</strong>
                            <span className="text-sm text-gray-400">Nodes exchange model weights to improve compression ratios without transmitting data ("Hive Mind").</span>
                        </li>
                        <li className="bg-black/40 p-4 rounded-lg">
                            <strong className="block text-white mb-1">Edge-Native</strong>
                            <span className="text-sm text-gray-400">Core logic is <code>no_std</code> compatible, capable of running on bare-metal embedded devices.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Architecture</h3>
                    <div className="bg-black p-6 rounded-lg font-mono text-xs md:text-sm text-neonBlue overflow-x-auto border border-white/10">
                        <pre>{`
┌─────────────────────────────────────────────────────────────┐
│                    QRES Architecture                        │
├─────────────────────────────────────────────────────────────┤
│  Input Data  →  [SNN Predictor]  →  [TNC Fusion]  →  Output │
│       ↑              ↓                   ↓             ↓    │
│       └── [MetaBrain RL Agent] ←─ [Mixer Weights] ←────┘    │
│                      ↓                                      │
│              [P2P Hive Mind]  ←→  [Other Nodes]             │
└─────────────────────────────────────────────────────────────┘
            `}</pre>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Performance Mini-Benchmarks</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-gray-300">
                            <thead className="text-neonPink uppercase text-sm border-b border-white/10">
                                <tr>
                                    <th className="pb-3">Dataset</th>
                                    <th className="pb-3">Type</th>
                                    <th className="pb-3">Ratio</th>
                                    <th className="pb-3">Speed</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="py-3 font-medium text-white">Sensor Stream</td>
                                    <td className="py-3">IoT Telemetry</td>
                                    <td className="py-3 text-neonBlue">~0.15 (6.6x)</td>
                                    <td className="py-3">300+ MB/s</td>
                                </tr>
                                <tr>
                                    <td className="py-3 font-medium text-white">Server Logs</td>
                                    <td className="py-3">Time-series</td>
                                    <td className="py-3 text-neonBlue">~0.19 (5.2x)</td>
                                    <td className="py-3">200 MB/s</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'restinplace',
        title: 'Rest In Place',
        description: 'A digital gallery born from a photography assignment, exploring the quiet collision between human memory and the natural world.',
        tech: ['React', 'Photography', 'Netlify'],
        live: 'https://moonlit-custard-23ab7f.netlify.app/',
        repo: 'https://github.com/CavinKrenik/RESTINPLACE',
        type: 'website',
        featured: false,
    },
    {
        id: 'seedsync',
        title: 'Seed Sync — Role Assignment Tool',
        description: 'Assign Human Design roles to team members in a conscious community. Built with React, Flask, and SQLite.',
        tech: ['React', 'Flask', 'SQLite'],
        live: 'https://glowing-sunflower-d8af4c.netlify.app/',
        repo: 'https://github.com/CavinKrenik/SEEDTEAM',
        type: 'web-app',
        featured: false,
    },
    {
        id: 'recovr',
        title: 'RecovrSocial',
        description: 'A mobile-first web app for people in recovery to connect, share clean dates, and discover sober events.',
        tech: ['React Native', 'Expo'],
        live: 'http://recovrsocial.com',
        repo: 'https://github.com/CavinKrenik/RecovrSocial',
        type: 'website',
        featured: false,
    },
    {
        id: 'dropfizz',
        title: 'DropFizzers',
        description: 'A custom-built online store for my sister\'s business, DropFizz. Designed to sell eco-friendly cleaning tablets.',
        tech: ['React', 'Stripe', 'Formspree'],
        live: 'https://dropfizzers.com/',
        repo: 'https://github.com/CavinKrenik/DropFizz',
        type: 'website',
        featured: false,
    },
    {
        id: 'seedstudio',
        title: 'The Seed Studio',
        description: 'A fully functional e-commerce platform with an integrated admin dashboard for managing products, inventory, and orders.',
        tech: ['React', 'Node', 'Commerce'],
        live: null,
        repo: 'https://github.com/CavinKrenik/TheSeedStore',
        type: 'web-app',
        featured: false,
    },
    {
        id: 'seedplants',
        title: 'Seed Plants — Garden Tracker',
        description: 'Track garden progress with plant care info, photos, and admin tools.',
        tech: ['React', 'Flask'],
        live: 'https://seedplants.netlify.app/',
        repo: 'https://github.com/CavinKrenik/SEED_PLANTS',
        type: 'web-app',
        featured: false,
    },
    {
        id: 'customweb',
        title: 'Custom Web App',
        description: 'A React-powered AI Tool Library.',
        tech: ['React', 'AI Integration'],
        live: 'https://subtle-flan-dd1ced.netlify.app/',
        repo: null,
        type: 'lab',
        featured: false,
    },
    {
        id: 'business',
        title: 'Business Website',
        description: 'A fast-loading re-build of small business website — mobile-optimized and SEO ready.',
        tech: ['HTML', 'CSS', 'JS'],
        live: 'https://relax-therapy-wellness.deploypad.app/',
        repo: null,
        type: 'website',
        featured: false,
    },
];
