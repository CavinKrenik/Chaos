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
        title: 'QRES',
        description: 'Published research combining SNNs and swarm intelligence for privacy-preserving federated learning on edge IoT devices—22:1 compression, Byzantine-tolerant.',
        tech: ['Rust', 'Python', 'Azure VMs', 'SNNs', 'Differential Privacy', 'Zero-Knowledge Proofs'],
        live: 'https://doi.org/10.5281/zenodo.18193906',
        repo: 'https://github.com/CavinKrenik/QRES',
        type: 'featured',
        featured: true,
        details: (
            <div className="space-y-16 text-left">
                {/* 1. Publication Hero */}
                <section className="bg-gradient-to-r from-neonBlue/10 to-neonPink/10 p-8 rounded-xl border border-white/10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="bg-neonBlue text-black px-3 py-1 rounded font-bold text-sm uppercase tracking-wide">
                            Published Research
                        </span>
                        <a href="https://doi.org/10.5281/zenodo.18193906" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.18193906.svg" alt="DOI: 10.5281/zenodo.18193906" />
                        </a>
                        <a href="https://orcid.org/0009-0008-9183-1278" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://img.shields.io/badge/ORCID-0009--0008--9183--1278-green.svg" alt="ORCID" />
                        </a>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                        QRES: Biologically-Inspired Secure Federated Learning for Edge IoT Devices
                    </h3>
                    <p className="text-gray-400 mb-4">
                        <strong className="text-white">Cavin Krenik</strong> — Olympic College | Published January 2026
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                        <span>📄 5 pages</span>
                        <span>📊 5 figures</span>
                        <span>🔗 14+ references</span>
                        <span>🏷️ v15.2-paper</span>
                    </div>
                </section>

                {/* 2. Key Results Stats */}
                <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-black/40 p-6 rounded-xl border border-neonBlue/30 text-center">
                        <span className="block text-4xl font-bold text-neonBlue mb-2">22:1</span>
                        <span className="text-gray-400 text-sm">Compression Ratio</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonPink/30 text-center">
                        <span className="block text-4xl font-bold text-neonPink mb-2">20-30%</span>
                        <span className="text-gray-400 text-sm">Privacy Overhead</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonBlue/30 text-center">
                        <span className="block text-4xl font-bold text-neonBlue mb-2">49%</span>
                        <span className="text-gray-400 text-sm">Byzantine Tolerance</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonPink/30 text-center">
                        <span className="block text-4xl font-bold text-neonPink mb-2">100</span>
                        <span className="text-gray-400 text-sm">Nodes Validated</span>
                    </div>
                </section>

                {/* 3. Abstract */}
                <section>
                    <h3 className="text-2xl font-bold text-neonBlue mb-4">Abstract</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Federated learning enables collaborative model training across distributed devices while keeping raw data local. However, constrained edge devices in IoT networks face severe limitations in bandwidth, memory, and computational resources that restrict the applicability of standard federated learning approaches. We present <strong className="text-white">TensorSwarm</strong>, a compression-first federated learning system that combines biologically-inspired spiking neural networks with swarm intelligence for privacy-preserving model training on edge IoT devices.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        Our system achieves <strong className="text-neonBlue">22:1 average compression</strong> on IoT time-series data while maintaining 20-30% overhead for a complete privacy stack including differential privacy, secure aggregation via ECDH pairwise masking, and zero-knowledge proofs using Pedersen commitments. Through empirical evaluation on Azure VM clusters scaling from 10 to 100 nodes, we demonstrate convergence within 13 rounds, Byzantine fault tolerance up to 49% malicious participants via Krum aggregation, and regime change recovery in 3-4 rounds on average.
                    </p>
                </section>

                {/* 4. Key Contributions */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-neonBlue pl-4">Key Contributions</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Fixed-Point SNN Ensemble</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Deterministic temporal prediction using <strong>Q16.16 fixed-point arithmetic</strong>, ensuring bit-perfect reproducibility across heterogeneous edge hardware (ARM, RISC-V, WASM).
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Complete Privacy Stack</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Layered privacy with <strong>Differential Privacy (ε=1.0)</strong>, ECDH-based Secure Aggregation, and Zero-Knowledge Proofs via Pedersen commitments for verifiable contributions.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Scalable Evaluation</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Empirical validation on <strong>Azure VM clusters</strong> from 10-100 nodes, demonstrating sub-linear communication overhead and Byzantine resilience via Krum aggregation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Experimental Evaluation */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Experimental Evaluation</h3>

                    {/* Privacy Overhead Table */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-neonPink mb-4">Privacy Overhead Analysis</h4>
                        <div className="overflow-x-auto rounded-lg border border-white/10">
                            <table className="w-full text-left text-sm min-w-max">
                                <thead className="bg-white/5 text-gray-300">
                                    <tr>
                                        <th className="p-3">Configuration</th>
                                        <th className="p-3">Latency (ms)</th>
                                        <th className="p-3">Memory (MB)</th>
                                        <th className="p-3">Overhead</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-400">
                                    <tr>
                                        <td className="p-3 text-white">Baseline (No Privacy)</td>
                                        <td className="p-3">45</td>
                                        <td className="p-3">12</td>
                                        <td className="p-3 text-gray-500">—</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">DP Only</td>
                                        <td className="p-3">52</td>
                                        <td className="p-3">14</td>
                                        <td className="p-3 text-neonBlue">+15%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">Secure Aggregation</td>
                                        <td className="p-3">58</td>
                                        <td className="p-3">18</td>
                                        <td className="p-3 text-neonBlue">+29%</td>
                                    </tr>
                                    <tr className="bg-neonBlue/5">
                                        <td className="p-3 text-white font-semibold">Full Stack (DP + SA + ZK)</td>
                                        <td className="p-3">61</td>
                                        <td className="p-3">22</td>
                                        <td className="p-3 text-neonPink font-bold">+35%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Convergence Comparison */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-neonPink mb-4">Convergence Comparison (vs. Baselines)</h4>
                        <div className="overflow-x-auto rounded-lg border border-white/10">
                            <table className="w-full text-left text-sm min-w-max">
                                <thead className="bg-white/5 text-gray-300">
                                    <tr>
                                        <th className="p-3">Algorithm</th>
                                        <th className="p-3">Rounds to Converge</th>
                                        <th className="p-3">Final Accuracy</th>
                                        <th className="p-3">Communication</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-400">
                                    <tr>
                                        <td className="p-3 text-white">FedAvg</td>
                                        <td className="p-3">12</td>
                                        <td className="p-3">91.2%</td>
                                        <td className="p-3">1.0× (baseline)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">FedProx</td>
                                        <td className="p-3">10</td>
                                        <td className="p-3">92.8%</td>
                                        <td className="p-3">1.0×</td>
                                    </tr>
                                    <tr className="bg-neonBlue/5">
                                        <td className="p-3 text-white font-semibold">TensorSwarm</td>
                                        <td className="p-3">13</td>
                                        <td className="p-3">90.5%</td>
                                        <td className="p-3 text-neonBlue font-bold">0.045× (22:1)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Scalability Analysis */}
                    <div>
                        <h4 className="text-lg font-semibold text-neonPink mb-4">Scalability Analysis (Azure VMs)</h4>
                        <div className="overflow-x-auto rounded-lg border border-white/10">
                            <table className="w-full text-left text-sm min-w-max">
                                <thead className="bg-white/5 text-gray-300">
                                    <tr>
                                        <th className="p-3">Nodes</th>
                                        <th className="p-3">Round Time</th>
                                        <th className="p-3">Aggregation</th>
                                        <th className="p-3">Throughput</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-400">
                                    <tr>
                                        <td className="p-3 text-white">10</td>
                                        <td className="p-3">1.2s</td>
                                        <td className="p-3">180ms</td>
                                        <td className="p-3">8.3 rounds/min</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">50</td>
                                        <td className="p-3">2.8s</td>
                                        <td className="p-3">420ms</td>
                                        <td className="p-3">4.3 rounds/min</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">100</td>
                                        <td className="p-3">4.5s</td>
                                        <td className="p-3">890ms</td>
                                        <td className="p-3 text-neonBlue">2.7 rounds/min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6. Technical Stack */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Technical Stack (v15.2)</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Core</span>
                            <span className="text-gray-400 text-sm">Rust (no_std compatible)</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Bindings</span>
                            <span className="text-gray-400 text-sm">Python + WebAssembly</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Infrastructure</span>
                            <span className="text-gray-400 text-sm">Azure VM Clusters</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Arithmetic</span>
                            <span className="text-gray-400 text-sm">Q16.16 Fixed-Point</span>
                        </div>
                    </div>
                </section>

                {/* 7. Citation */}
                <section className="bg-black/60 p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">Citation</h3>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(`@software{krenik2026tensorswarm,
  author    = {Krenik, Cavin},
  title     = {{TensorSwarm: Biologically-Inspired Secure 
                Federated Learning for Edge IoT Devices}},
  month     = jan,
  year      = 2026,
  publisher = {Zenodo},
  version   = {v15.2-paper},
  doi       = {10.5281/zenodo.18193906},
  url       = {https://doi.org/10.5281/zenodo.18193906}
}`);
                                const btn = document.activeElement;
                                const originalText = btn.textContent;
                                btn.textContent = 'Copied!';
                                setTimeout(() => btn.textContent = originalText, 2000);
                            }}
                            className="bg-neonBlue hover:bg-neonBlue/80 text-black px-4 py-2 rounded font-semibold text-sm transition-colors"
                        >
                            Copy Citation
                        </button>
                    </div>
                    <pre className="text-xs text-cyan-300 overflow-x-auto font-mono leading-relaxed">{`@software{krenik2026tensorswarm,
  author    = {Krenik, Cavin},
  title     = {{TensorSwarm: Biologically-Inspired Secure 
                Federated Learning for Edge IoT Devices}},
  month     = jan,
  year      = 2026,
  publisher = {Zenodo},
  version   = {v15.2-paper},
  doi       = {10.5281/zenodo.18193906},
  url       = {https://doi.org/10.5281/zenodo.18193906}
}`}</pre>
                </section>

                {/* 8. Links & Resources */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Links & Resources</h3>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/CavinKrenik/QRES/blob/main/paper/TensorSwarm__Biologically_Inspired_Secure_Federated_Learning_for_Edge_IoT_Devices.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue/50 px-5 py-3 rounded-lg transition-colors"
                        >
                            <span className="text-lg">📄</span>
                            <span className="text-white font-medium">View Paper PDF</span>
                        </a>
                        <a
                            href="https://doi.org/10.5281/zenodo.18193906"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue/50 px-5 py-3 rounded-lg transition-colors"
                        >
                            <span className="text-lg">🔗</span>
                            <span className="text-white font-medium">View on Zenodo</span>
                        </a>
                        <a
                            href="https://orcid.org/0009-0008-9183-1278"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue/50 px-5 py-3 rounded-lg transition-colors"
                        >
                            <span className="text-lg">🎓</span>
                            <span className="text-white font-medium">ORCID Profile</span>
                        </a>
                        <a
                            href="https://github.com/CavinKrenik/QRES"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue/50 px-5 py-3 rounded-lg transition-colors"
                        >
                            <span className="text-lg">💻</span>
                            <span className="text-white font-medium">GitHub Repository</span>
                        </a>
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