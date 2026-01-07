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
        tech: ['Rust', 'Python', 'WebAssembly', 'SNNs', 'P2P', 'No_Std'],
        live: null,
        repo: 'https://github.com/CavinKrenik/QRES',
        type: 'featured',
        featured: true,
        details: (
            <div className="space-y-16 text-left">
                {/* 1. Hero / Abstract */}
                <section>
                    <h3 className="text-3xl font-bold text-neonBlue mb-6">The "Singularity Engine"</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        QRES is a paradigm shift from "Storage" to "Intelligence." It acts as a neural memory cortex, storing only anomalies while predicting norms. By leveraging Spiking Neural Networks (SNNs) and a federated P2P architecture, it allows IoT swarms to share "compression intelligence" without ever sharing raw data.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm font-mono text-neonPink">
                        <span className="bg-white/5 px-3 py-1 rounded border border-white/10">v10.5 (Hybrid Era)</span>
                        <span className="bg-white/5 px-3 py-1 rounded border border-white/10">License: Apache 2.0</span>
                        <span className="bg-white/5 px-3 py-1 rounded border border-white/10">Build: Passing</span>
                    </div>
                </section>

                {/* 2. The Problem & Solution */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                            The Problem: Data Obesity
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                            The world generates 400 exabytes of data daily. We transmit the same repetitive signals (sine waves, sensor streams) billions of times, wasting energy and hindering efficient AI adaptation.
                        </p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <h4 className="text-xl font-bold text-neonBlue mb-4 flex items-center gap-2">
                            The Solution: Bio-Mimetic
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                            QRES mimics synaptic plasticity. For a robot's sensor feed or a heartbeat monitor, it learns the structure dynamically, storing only the "surprise" (entropy) and predicting the rest.
                        </p>
                    </div>
                </section>

                {/* 3. Technical Deep Dive */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-neonBlue pl-4">Under the Hood</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Fixed-Point Determinism</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Built on <strong>Q16.16 fixed-point arithmetic</strong>. This guarantees bit-perfect reproducibility across x86, ARM, RISC-V, and WASM targets, preventing "Butterfly Effect" drift in neural weights.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">The "Living Brain"</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                An autonomous background daemon that manages an ensemble of predictors (Linear, Spectral, SNNs). It optimizes the codec's weights without blocking the hot path.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Zero-Copy Residuals</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Unlike Arithmetic Coding, QRES writes residuals directly to the stream. If the prediction is high-accuracy, it uses unary prefix codes to store data with minimal bits.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Privacy-First Federation</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Nodes share <em>mathematical probability weights</em> (the "how"), not raw files (the "what"). Hospitals and banks can collaborate on efficiency without risking user privacy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Architecture ASCII */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">System Architecture</h3>
                    <div className="bg-black p-6 rounded-lg font-mono text-[10px] md:text-sm text-neonPink leading-relaxed overflow-x-auto border border-white/10 shadow-[0_0_30px_rgba(255,0,255,0.1)]">
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

                {/* Benchmarks & Use Cases */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <section>
                        <h3 className="text-xl font-bold text-white mb-6">Mini Benchmarks</h3>
                        <div className="overflow-x-auto rounded-lg border border-white/10">
                            <table className="w-full text-left text-sm min-w-max">
                                <thead className="bg-white/5 text-gray-300">
                                    <tr>
                                        <th className="p-3">Dataset</th>
                                        <th className="p-3">Ratio</th>
                                        <th className="p-3">Speed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-400">
                                    <tr>
                                        <td className="p-3 text-white">Sensor Stream</td>
                                        <td className="p-3 text-neonBlue">~0.15 (6.6x)</td>
                                        <td className="p-3">300+ MB/s</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">Server Logs</td>
                                        <td className="p-3 text-neonBlue">~0.19 (5.2x)</td>
                                        <td className="p-3">200 MB/s</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">CSV Data</td>
                                        <td className="p-3 text-neonBlue">~0.76 (1.3x)</td>
                                        <td className="p-3">150 MB/s</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-6">When to Use</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex gap-3">
                                <span className="text-neonBlue text-lg font-bold">/</span>
                                <div>
                                    <strong className="block text-white">IoT Telemetry</strong>
                                    <span className="text-gray-500">Highly repetitive sensor logs</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-neonBlue text-lg font-bold">/</span>
                                <div>
                                    <strong className="block text-white">Edge Networks</strong>
                                    <span className="text-gray-500">Where bandwidth is costly</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-600 text-lg font-bold">X</span>
                                <div>
                                    <strong className="block text-gray-400">High-Entropy Data</strong>
                                    <span className="text-gray-600">Encrypted files, random noise</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-gray-600 text-lg font-bold">X</span>
                                <div>
                                    <strong className="block text-gray-400">General Purpose</strong>
                                    <span className="text-gray-600">If raw speed is priority (use LZ4)</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 6. Quickstart */}
                <section className="bg-white/5 p-8 rounded-xl border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Quickstart
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-400 mb-2 text-sm">1. Install Python Package</p>
                            <div className="bg-black p-4 rounded-lg border border-white/10 font-mono text-xs md:text-sm text-cyan-300 overflow-x-auto">
                                {`pip install qres
# Compress a file
python3 -c "import qres; print(f'Compressed: {len(qres.compress(open(\"README.md\", \"rb\").read()))} bytes')" `}
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-2 text-sm">2. Build the Daemon (Rust)</p>
                            <div className="bg-black p-4 rounded-lg border border-white/10 font-mono text-xs md:text-sm text-cyan-300 overflow-x-auto">
                                {`cargo build --release --bin qres_daemon
./target/release/qres_daemon start`}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Real-World Impact */}
                <section className="border-t border-white/10 pt-12">
                    <h3 className="text-3xl font-bold text-white mb-8">Real-World Impact</h3>

                    <div className="grid gap-8">
                        <div className="flex gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Brain-Like Robotics</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    QRES allows robots to learn from vast sensory streams with ultra-efficiency (~19% compression). This enables <strong>Onboard ML</strong>—drones learning flight patterns from compressed telemetry without needing a cloud connection.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">The Digital Library of Alexandria</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Because of our <strong>Fixed-Point Determinism</strong>, a file compressed today will decompress bit-perfectly on the quantum computers of 2100. It makes QRES one of the few formats safe for long-term civilizational archival.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">The "Infinite" Sensor Network</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    With superior ratios on periodic data, IoT devices can transmit 5x more fidelity. Think real-time climate monitoring in the arctic or long-lasting medical implants that evolve with the patient.
                                </p>
                            </div>
                        </div>
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