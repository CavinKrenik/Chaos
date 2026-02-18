export const PROJECTS = [
    {
        id: 'qora-fl',
        title: 'Qora-FL',
        description: 'Infrastructure for Decentralized Trust. A Rust/Python library for Byzantine-tolerant Federated Learning—born from 181 days in the field with IoT swarms.',
        tech: ['Rust', 'Python', 'Flower (flwr)', 'BFP-16', 'PyPI', 'crates.io'],
        live: 'https://pypi.org/project/qora-fl/',
        repo: 'https://github.com/CavinKrenik/qora-fl',
        type: 'featured',
        featured: true,
        details: (
            <div className="space-y-16 text-left">
                {/* 1. Narrative Header */}
                <section className="bg-gradient-to-r from-neonBlue/10 to-neonPink/10 p-8 rounded-xl border border-white/10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-neonBlue text-black px-3 py-1 rounded font-bold text-sm uppercase tracking-wide">
                            Production Library
                        </span>
                        <a href="https://pypi.org/project/qora-fl/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://img.shields.io/pypi/v/qora-fl?color=cyan&label=PyPI" alt="PyPI version" />
                        </a>
                        <a href="https://crates.io/crates/qora-fl" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="https://img.shields.io/crates/v/qora-fl?color=orange&label=crates.io" alt="crates.io version" />
                        </a>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                        The Road to Robust Consensus
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                        What started as decentralized agent experiments on untrusted ESP32 mesh networks became a production infrastructure library used by the global Federated Learning ecosystem. This is the story of 181 days in the field—and the vulnerabilities that demanded a better solution.
                    </p>
                </section>

                {/* 2. Key Performance Stats */}
                <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-black/40 p-6 rounded-xl border border-neonBlue/30 text-center">
                        <span className="block text-4xl font-bold text-neonBlue mb-2">&lt;10ms</span>
                        <span className="text-gray-400 text-sm">Aggregation (100K params)</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonPink/30 text-center">
                        <span className="block text-4xl font-bold text-neonPink mb-2">&gt;90%</span>
                        <span className="text-gray-400 text-sm">Accuracy Under Attack</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonBlue/30 text-center">
                        <span className="block text-4xl font-bold text-neonBlue mb-2">30%</span>
                        <span className="text-gray-400 text-sm">Byzantine Clients Suppressed</span>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-neonPink/30 text-center">
                        <span className="block text-4xl font-bold text-neonPink mb-2">0.3.1</span>
                        <span className="text-gray-400 text-sm">Current Release</span>
                    </div>
                </section>

                {/* 3. 3-Phase Evolution Timeline */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-neonBlue pl-4">The Three-Phase Journey</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4 bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neonBlue/10 border border-neonBlue/30 flex items-center justify-center">
                                <span className="text-neonBlue font-bold font-mono text-sm">01</span>
                            </div>
                            <div>
                                <a href="https://github.com/CavinKrenik/QRES" target="_blank" rel="noopener noreferrer" className="block text-lg font-bold text-white hover:text-neonBlue transition-colors mb-1">
                                    QRES — The Foundation ↗
                                </a>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Quorum-Oriented Robust Agentic Swarm. Built to handle data over untrusted, low-power ESP32 mesh networks. Established the core consensus model and fixed-point determinism. <span className="text-gray-500 font-mono text-xs">Published research · Zenodo DOI: 10.5281/zenodo.18261441</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonPink/30 transition-colors">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neonPink/10 border border-neonPink/30 flex items-center justify-center">
                                <span className="text-neonPink font-bold font-mono text-sm">02</span>
                            </div>
                            <div>
                                <a href="https://github.com/CavinKrenik/QRES_RaaS" target="_blank" rel="noopener noreferrer" className="block text-lg font-bold text-white hover:text-neonPink transition-colors mb-1">
                                    QRES_RaaS — The Deployment ↗
                                </a>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    181 days of autonomous IoT deployment in the field. This is where "Slander-Amplification" and non-deterministic floating-point errors were identified as critical vulnerabilities in standard Federated Learning.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-neonBlue/5 p-6 rounded-xl border border-neonBlue/20 hover:border-neonBlue/50 transition-colors">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neonBlue/20 border border-neonBlue/50 flex items-center justify-center">
                                <span className="text-neonBlue font-bold font-mono text-sm">03</span>
                            </div>
                            <div>
                                <a href="https://github.com/CavinKrenik/qora-fl" target="_blank" rel="noopener noreferrer" className="block text-lg font-bold text-neonBlue hover:text-white transition-colors mb-1">
                                    qora-fl — The Infrastructure ↗
                                </a>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    The clean-room, production-grade realization of those field lessons. Takes proven consensus logic and makes it available to the global FL ecosystem (Python / Flower / Rust) with a Rust core for overhead-free Byzantine tolerance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Technical Milestones */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Key Technical Milestones</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">BFP-16 Deterministic Execution</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Evolved from early less-than/greater-than compression experiments to a <strong>Block Floating-Point (BFP-16)</strong> execution path. Every aggregation is bit-perfect reproducible across heterogeneous hardware—eliminating the non-determinism that plagued the field deployment.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Rust Core Performance</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Shifted from experimental Python to a <strong>Rust aggregation core</strong>. Benchmark: <strong className="text-white">&lt;10ms for 100K parameters</strong>, making Byzantine security truly overhead-free. Python bindings (via PyO3) keep the data science ergonomics intact.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/5 hover:border-neonBlue/30 transition-colors">
                            <strong className="block text-neonBlue text-lg mb-2">Cubic Influence Formula</strong>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Reputation is first-class infrastructure: <code className="text-cyan-300 font-mono text-xs bg-black/60 px-1 rounded">min(rep³, 0.8)</code>. The cubic curve provides <strong>strong adversary suppression</strong> while the 0.8 cap prevents any single client from dominating—a direct countermeasure to Slander-Amplification.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Attack Evaluation */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-2">Attack Evaluation: Battle-Tested Proof</h3>
                    <p className="text-gray-400 text-sm mb-6">Performance under 30% Byzantine participation across standard and optimized attacks. All results from paper benchmarks on CIFAR-10 / MNIST.</p>
                    <div className="overflow-x-auto rounded-lg border border-white/10 mb-6">
                        <table className="w-full text-left text-sm min-w-max">
                            <thead className="bg-white/5 text-gray-300">
                                <tr>
                                    <th className="p-3">Attack</th>
                                    <th className="p-3">Dataset</th>
                                    <th className="p-3">FedAvg</th>
                                    <th className="p-3">Qora-FL (Trim. Mean)</th>
                                    <th className="p-3">Delta</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-400">
                                <tr>
                                    <td className="p-3 text-white">Label Flip (30%)</td>
                                    <td className="p-3">CIFAR-10</td>
                                    <td className="p-3 text-red-400 font-bold">~12%</td>
                                    <td className="p-3 text-neonBlue font-bold">~54%</td>
                                    <td className="p-3 text-neonPink font-bold">+42 pts</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-white">Label Flip (30%)</td>
                                    <td className="p-3">MNIST</td>
                                    <td className="p-3 text-red-400 font-bold">Degrades</td>
                                    <td className="p-3 text-neonBlue font-bold">~91–92%</td>
                                    <td className="p-3 text-neonPink font-bold">Converges</td>
                                </tr>
                                <tr className="bg-neonBlue/5">
                                    <td className="p-3 text-white font-semibold">Fang Optimized Poisoning</td>
                                    <td className="p-3">MNIST</td>
                                    <td className="p-3 text-red-400 font-bold">Fails</td>
                                    <td className="p-3 text-neonBlue font-bold">~89% <span className="text-xs text-gray-500">(w/ reputation)</span></td>
                                    <td className="p-3 text-neonPink font-bold">+45 pts vs TM alone</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-white">Slander-Amplification</td>
                                    <td className="p-3">IoT / QRES</td>
                                    <td className="p-3 text-red-400 font-bold">No defense</td>
                                    <td className="p-3 text-neonBlue font-bold">Suppressed</td>
                                    <td className="p-3 text-neonPink font-bold">181d Field-Proven</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-neonBlue/5 border border-neonBlue/20 rounded-lg p-4 text-sm text-gray-300">
                        <strong className="text-neonBlue">Key finding on Fang's optimized attack:</strong> Trimmed mean alone plateaus at ~44%—confirming that per-round defenses alone are insufficient. Trimmed mean <em>with Qora's reputation mechanism</em> recovers to <strong className="text-white">89%</strong> by excluding Byzantine clients after tracking their deviation across rounds.
                    </div>
                </section>

                {/* 6. Architecture of Trust */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Architecture of Trust</h3>
                    <div className="bg-black/60 p-6 rounded-xl border border-white/10 font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto">
                        <pre>{`Client Updates (n participants)
        │
        ▼
┌─────────────────────────┐
│   Byzantine Aggregator  │  ← Rust Core (<10ms / 100K params)
│   BFP-16 Deterministic  │
└────────────┬────────────┘
             │  Deviation Signal
             ▼
┌─────────────────────────┐
│   Reputation Manager    │  ← min(rep³, 0.8) Cubic Influence
│   Slander-Amplification │
│   Countermeasure        │
└────────────┬────────────┘
             │
             ▼
    Verified Global Update
    (Broadcast to all clients)`}</pre>
                    </div>
                </section>

                {/* 7. Positioning vs. Related Work */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-2">Where Qora-FL Stands</h3>
                    <p className="text-gray-400 text-sm mb-6">The only library combining all five robust aggregation methods, cross-round reputation, Flower integration, deterministic BFP-16, and real-world deployment validation.</p>
                    <div className="overflow-x-auto rounded-lg border border-white/10">
                        <table className="w-full text-left text-sm min-w-max">
                            <thead className="bg-white/5 text-gray-300">
                                <tr>
                                    <th className="p-3">System</th>
                                    <th className="p-3 text-center">Robust Agg.</th>
                                    <th className="p-3 text-center">Reputation</th>
                                    <th className="p-3 text-center">Framework</th>
                                    <th className="p-3 text-center">Deterministic</th>
                                    <th className="p-3 text-center">Deployed</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-400">
                                <tr>
                                    <td className="p-3 text-white">Krum (2017)</td>
                                    <td className="p-3 text-center">Krum only</td>
                                    <td className="p-3 text-center text-gray-600">—</td>
                                    <td className="p-3 text-center text-gray-600">—</td>
                                    <td className="p-3 text-center text-gray-600">—</td>
                                    <td className="p-3 text-center text-gray-500 text-xs">Sim</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-white">Yin et al. (2018)</td>
                                    <td className="p-3 text-center">TM / Med</td>
                                    <td className="p-3 text-center text-gray-600">—</td>
                                    <td className="p-3 text-center text-gray-600">—</td>
                                    <td className="p-3 text-center text-gray-600">—</td>
                                    <td className="p-3 text-center text-gray-500 text-xs">Sim</td>
                                </tr>
                                <tr>
                                    <td className="p-3 text-white">FLTrust (2022)</td>
                                    <td className="p-3 text-center">Trust-based</td>
                                    <td className="p-3 text-center text-yellow-400 text-xs">Server-side</td>
                                    <td className="p-3 text-center text-gray-500 text-xs">Custom</td>
                                    <td className="p-3 text-center text-gray-600">—</td>
                                    <td className="p-3 text-center text-gray-500 text-xs">Sim</td>
                                </tr>
                                <tr className="bg-neonBlue/5">
                                    <td className="p-3 text-neonBlue font-bold">Qora-FL</td>
                                    <td className="p-3 text-center text-neonBlue font-bold">All 5</td>
                                    <td className="p-3 text-center text-neonBlue font-bold">Deviation</td>
                                    <td className="p-3 text-center text-neonBlue font-bold">Flower</td>
                                    <td className="p-3 text-center text-neonBlue font-bold">BFP-16</td>
                                    <td className="p-3 text-center text-neonBlue font-bold text-xs">181 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 8. One-Line Flower Integration */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-2">One-Line Flower Integration</h3>
                    <p className="text-gray-400 text-sm mb-4">Drop-in Byzantine tolerance for any existing Flower (flwr) pipeline.</p>
                    <div className="bg-black/60 p-6 rounded-xl border border-neonBlue/20 font-mono text-sm overflow-x-auto">
                        <pre className="text-cyan-300">{`from qora import QoraStrategy

# Drop-in replacement for FedAvg — all standard Flower params work
strategy = QoraStrategy(
    aggregation_method="trimmed_mean",  # or "median", "krum", "multi_krum"
    trim_fraction=0.2,                  # tolerate up to 20% Byzantine clients
    min_fit_clients=10,
    min_evaluate_clients=10,
    min_available_clients=10,
)`}</pre>
                    </div>
                </section>

                {/* 8. Installation & Registry */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Installation & Registry</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-black/40 p-5 rounded-xl border border-white/10 hover:border-neonBlue/40 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-neonBlue font-bold text-sm uppercase tracking-wide">Python (PyPI)</span>
                                <a href="https://pypi.org/project/qora-fl/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-neonBlue transition-colors font-mono">pypi.org ↗</a>
                            </div>
                            <pre className="text-cyan-300 font-mono text-xs bg-black/40 p-3 rounded-lg overflow-x-auto">{`pip install qora-fl`}</pre>
                            <p className="text-gray-500 text-xs mt-2">Python &ge; 3.8</p>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border border-white/10 hover:border-orange-500/40 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-orange-400 font-bold text-sm uppercase tracking-wide">Rust (crates.io)</span>
                                <a href="https://crates.io/crates/qora-fl" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-orange-400 transition-colors font-mono">crates.io ↗</a>
                            </div>
                            <pre className="text-orange-300 font-mono text-xs bg-black/40 p-3 rounded-lg overflow-x-auto">{`cargo add qora-fl`}</pre>
                            <p className="text-gray-500 text-xs mt-2">Cargo.toml: qora-fl = "0.3.1"</p>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border border-white/10 hover:border-neonPink/40 transition-colors">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-neonPink font-bold text-sm uppercase tracking-wide">Flower Strategy</span>
                                <a href="https://pypi.org/project/qora-fl/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-neonPink transition-colors font-mono">pypi.org ↗</a>
                            </div>
                            <pre className="text-pink-300 font-mono text-xs bg-black/40 p-3 rounded-lg overflow-x-auto">{`pip install qora-fl[flower]`}</pre>
                            <p className="text-gray-500 text-xs mt-2">Includes flwr strategy adapter</p>
                        </div>
                    </div>
                </section>

                {/* 9. Links & Resources */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Links & Resources</h3>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://github.com/CavinKrenik/qora-fl" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue/50 px-5 py-3 rounded-lg transition-colors">
                            <span className="text-lg">💻</span>
                            <span className="text-white font-medium">qora-fl (Phase 3)</span>
                        </a>
                        <a href="https://github.com/CavinKrenik/QRES_RaaS" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonPink/50 px-5 py-3 rounded-lg transition-colors">
                            <span className="text-lg">🚀</span>
                            <span className="text-white font-medium">QRES_RaaS (Phase 2)</span>
                        </a>
                        <a href="https://github.com/CavinKrenik/QRES" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 px-5 py-3 rounded-lg transition-colors">
                            <span className="text-lg">📐</span>
                            <span className="text-white font-medium">QRES (Phase 1)</span>
                        </a>
                        <a href="https://pypi.org/project/qora-fl/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue/50 px-5 py-3 rounded-lg transition-colors">
                            <span className="text-lg">📦</span>
                            <span className="text-white font-medium">PyPI Package</span>
                        </a>
                        <a href="https://crates.io/crates/qora-fl" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 px-5 py-3 rounded-lg transition-colors">
                            <span className="text-lg">🦀</span>
                            <span className="text-white font-medium">crates.io Package</span>
                        </a>
                    </div>
                </section>
            </div>
        )
    },
    {
        id: 'qres',
        title: 'QRES',
        description: 'Phase 1: The Foundation. A decentralized neural swarm OS for Edge IoT—31.8x compression, 10K nodes on Azure, <1KB RAM/node. The research that made Qora-FL necessary.',
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
                            href="https://github.com/CavinKrenik/QRES/blob/main/paper/paper.pdf"
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