import React from 'react';

export const PROJECTS = [
    {
        id: 'qres',
        title: 'QRES',
        description: 'Decentralized Neural Swarm OS for Edge IoT—31.8x compression, 10,000 nodes verified on Azure, <1KB RAM per node, 100% protocol success.',
        tech: ['Rust', 'no_std', 'Tokio', 'Q16.16 Fixed-Point', 'Azure Cloud', 'Differential Privacy'],
        live: 'https://zenodo.org/records/18261441',
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
                        <a href="https://zenodo.org/records/18261441" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.18261441.svg" alt="DOI: 10.5281/zenodo.18261441" />
                        </a>
                        <a href="https://orcid.org/0009-0008-9183-1278" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://img.shields.io/badge/ORCID-0009--0008--9183--1278-green.svg" alt="ORCID" />
                        </a>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                        QRES: Decentralized Neural Swarm Operating System for Edge IoT
                    </h3>
                    <p className="text-gray-400 mb-4">
                        <strong className="text-white">Cavin Krenik</strong> — Olympic College | Published January 2026
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                        <span>📄 Updated: v18.0 Verified Benchmark</span>
                    </div>
                </section>

                {/* 2. Key Results Stats */}
                <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-black/40 p-6 rounded-xl border border-neonBlue/30 text-center">
                        <span className="block text-4xl font-bold text-neonBlue mb-2">31.8x</span>
                        <span className="text-gray-400 text-sm">Compression Ratio (Peak)</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonPink/30 text-center">
                        <span className="block text-4xl font-bold text-neonPink mb-2">10,000</span>
                        <span className="text-gray-400 text-sm">Nodes Simulated (Azure)</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonBlue/30 text-center">
                        <span className="block text-4xl font-bold text-neonBlue mb-2">&lt;1 KB</span>
                        <span className="text-gray-400 text-sm">RAM Overhead per Node</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonPink/30 text-center">
                        <span className="block text-4xl font-bold text-neonPink mb-2">100%</span>
                        <span className="text-gray-400 text-sm">Protocol Success Rate</span>
                    </div>
                </section>

                {/* 3. Abstract */}
                <section>
                    <h3 className="text-2xl font-bold text-neonBlue mb-4">Abstract</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Constrained edge devices in IoT networks face severe limitations in bandwidth and reliability that make traditional Federated Learning (sending MBs of weights) impossible. <strong className="text-white">QRES (Quantum-Relational Encoding System)</strong> is a decentralized operating system that replaces heavy weight synchronization with deterministic "silent" consensus.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        By combining a Q16.16 fixed-point core with biologically inspired Lamarckian persistence, QRES guarantees bit-perfect reproducibility across heterogeneous hardware (ARM/x86). We empirically verified the system on Microsoft Azure, scaling to <strong className="text-neonBlue">10,000 concurrent nodes</strong> on a single commodity vCPU with negligible memory impact (O(1) amortized growth). The system achieves up to <strong className="text-neonBlue">31.8x compression</strong> on telemetry data, outperforming standard algorithms like Zstd while maintaining 100% consensus reliability.
                    </p>
                </section>

                {/* 4. Key Contributions */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-neonBlue pl-4">Key Contributions</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">"Silent Consensus" via Bit-Perfect Determinism</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Replaced non-deterministic floating-point math with a custom <strong>Q16.16 Fixed-Point Engine</strong>. This allows 10,000+ devices to agree on a model state without transmitting raw weights—if the predictive error is zero, zero bandwidth is used.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Massive Scalability (O(1) Memory)</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Engineered a <strong>no_std Rust actor runtime</strong> that leverages allocator amortization. Azure stress tests proved the system can manage 10,000 nodes with &lt;0.70 KB of RAM overhead per node, eliminating memory fragmentation risks.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Lamarckian Persistence (Self-Healing)</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Introduced a <strong>"GeneStorage" layer</strong> that persists learned behaviors across power cycles. Unlike stateless FL clients, QRES nodes recover 100% of their intelligence instantly after a reboot.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Experimental Evaluation */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Experimental Evaluation (v18.0)</h3>

                    {/* Verified Scalability Table */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-neonPink mb-4">Verified Scalability (Azure Standard_D2s)</h4>
                        <p className="text-gray-400 text-sm mb-4">Stress test of the consensus runtime on a single 2-vCPU Cloud VM.</p>
                        <div className="overflow-x-auto rounded-lg border border-white/10">
                            <table className="w-full text-left text-sm min-w-max">
                                <thead className="bg-white/5 text-gray-300">
                                    <tr>
                                        <th className="p-3">Simulated Nodes</th>
                                        <th className="p-3">Total RAM (MB)</th>
                                        <th className="p-3">RAM / Node</th>
                                        <th className="p-3">Success Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-400">
                                    <tr>
                                        <td className="p-3 text-white">1,000</td>
                                        <td className="p-3">1.72 MB</td>
                                        <td className="p-3">1.76 KB</td>
                                        <td className="p-3 text-neonBlue">100%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">5,000</td>
                                        <td className="p-3">24.64 MB</td>
                                        <td className="p-3">5.05 KB</td>
                                        <td className="p-3 text-neonBlue">100%</td>
                                    </tr>
                                    <tr className="bg-neonBlue/5">
                                        <td className="p-3 text-white font-semibold">10,000</td>
                                        <td className="p-3">25.83 MB</td>
                                        <td className="p-3 text-neonPink font-bold">0.70 KB</td>
                                        <td className="p-3 text-neonBlue font-bold">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Compression Efficiency Table */}
                    <div>
                        <h4 className="text-lg font-semibold text-neonPink mb-4">Compression Efficiency vs. Industry Standard</h4>
                        <p className="text-gray-400 text-sm mb-4">QRES "Prediction-as-Compression" vs. Zstandard (Facebook).</p>
                        <div className="overflow-x-auto rounded-lg border border-white/10">
                            <table className="w-full text-left text-sm min-w-max">
                                <thead className="bg-white/5 text-gray-300">
                                    <tr>
                                        <th className="p-3">Dataset</th>
                                        <th className="p-3">Domain</th>
                                        <th className="p-3">QRES Ratio</th>
                                        <th className="p-3">Zstd Ratio</th>
                                        <th className="p-3">Gain</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-400">
                                    <tr className="bg-neonBlue/5">
                                        <td className="p-3 text-white font-semibold">SmoothSine</td>
                                        <td className="p-3">Telemetry</td>
                                        <td className="p-3 text-neonBlue font-bold">31.8x</td>
                                        <td className="p-3">2.1x</td>
                                        <td className="p-3 text-neonPink font-bold">15x</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">Wafer</td>
                                        <td className="p-3">Manufacturing</td>
                                        <td className="p-3 text-neonBlue">4.98x</td>
                                        <td className="p-3">3.55x</td>
                                        <td className="p-3">1.4x</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white">ECG5000</td>
                                        <td className="p-3">Medical</td>
                                        <td className="p-3 text-neonBlue">4.98x</td>
                                        <td className="p-3">1.8x</td>
                                        <td className="p-3">2.7x</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 6. Technical Stack */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Technical Stack (v18.0)</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Core</span>
                            <span className="text-gray-400 text-sm">Rust (no_std, Tokio Async Runtime)</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Math</span>
                            <span className="text-gray-400 text-sm">Custom Q16.16 Fixed-Point Engine</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Infrastructure</span>
                            <span className="text-gray-400 text-sm">Azure Cloud (Standard_D2s_v3)</span>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                            <span className="block text-neonBlue font-bold mb-1">Privacy</span>
                            <span className="text-gray-400 text-sm">Differential Privacy (ε=1.0) + ECDH Masking</span>
                        </div>
                    </div>
                </section>

                {/* 7. Citation */}
                <section className="bg-black/60 p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">Citation</h3>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(`@software{krenik2026qres,
  author    = {Krenik, Cavin},
  title     = {{QRES: A Decentralized Operating System for Neural Swarms}},
  month     = jan,
  year      = 2026,
  publisher = {Zenodo},
  version   = {v18.0-verified},
  doi       = {10.5281/zenodo.18261441},
  url       = {https://github.com/CavinKrenik/QRES}
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
                    <pre className="text-xs text-cyan-300 overflow-x-auto font-mono leading-relaxed">{`@software{krenik2026qres,
  author    = {Krenik, Cavin},
  title     = {{QRES: A Decentralized Operating System for Neural Swarms}},
  month     = jan,
  year      = 2026,
  publisher = {Zenodo},
  version   = {v18.0-verified},
  doi       = {10.5281/zenodo.18261441},
  url       = {https://github.com/CavinKrenik/QRES}
}`}</pre>
                </section>

                {/* 8. Links & Resources */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Links & Resources</h3>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/CavinKrenik/QRES/blob/main/paper/QRES__Biologically_Inspired_Secure_Federated_Learning_for_Edge_IoT_Devices.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue/50 px-5 py-3 rounded-lg transition-colors"
                        >
                            <span className="text-lg">📄</span>
                            <span className="text-white font-medium">View Paper PDF</span>
                        </a>
                        <a
                            href="https://zenodo.org/records/18261441"
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
        id: 'dataghost',
        title: 'DataGhost',
        description: 'The simplest, most transparent way to disappear from data brokers. We blast 70+ opt-out requests and CC you on every single email.',
        tech: ['Next.js 14', 'Supabase', 'Playwright', 'Resend', 'Stripe'],
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
                            <span><strong>User Pays:</strong> $49 via Stripe (one-time).</span>
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
        id: 'recovr',
        title: 'RecovrSocial',
        description: 'A mobile-first web app for people in recovery to connect, share clean dates, and discover sober events.',
        tech: ['React Native', 'Expo'],
        live: 'http://recovrsocial.com',
        repo: 'https://github.com/CavinKrenik/RecovrSocial',
        type: 'website',
        featured: false,
    },
];