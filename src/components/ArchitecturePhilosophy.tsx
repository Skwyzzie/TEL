import React, { useState } from 'react';
import { Waves, Cpu, Radio, ShieldAlert, Check, X } from 'lucide-react';

export const ArchitecturePhilosophy: React.FC = () => {
  const [activeEcho, setActiveEcho] = useState<number>(1);

  const echoStages = [
    {
      stage: 1,
      title: 'First Echo: Physical Ingestion & Raw Conversion',
      subtitle: 'Zero-latency sensor transduction at the electromagnetic and acoustic edge',
      icon: Waves,
      description: 'Physical contact with contested physics. We bypass brittle intermediate translation bridges with direct-RF sampling and micro-machined MEMS acoustic arrays. Raw signals are digitized at the antenna boundary with sub-nanosecond timestamping.',
      technicalKey: 'Acoustic & RF Direct Sampling · 4 GSPS Ultra-Low Noise Front-End · Zero Dropped Frames',
      metrics: '192 kHz Acoustic / 6 GHz RF Sampling'
    },
    {
      stage: 2,
      title: 'Second Echo: Deterministic Edge Synthesis',
      subtitle: 'Air-gapped on-platform neural inference without cloud or GPS tethering',
      icon: Cpu,
      description: 'Computing where the mission happens. EchoKernel enforces formal mathematical memory isolation while our conduction-cooled NPU computes target classification, beamforming, and trajectory estimation in under 400 nanoseconds.',
      technicalKey: 'Formally Verified Rust Microkernel · 135 TOPS INT8 Conduction Compute · Multi-Level Security (MLS)',
      metrics: '< 400 ns Microkernel Context Switch'
    },
    {
      stage: 3,
      title: 'Third Echo: Autonomous Mission Actuation',
      subtitle: 'Byzantine fault-tolerant consensus and closed-loop multi-agent response',
      icon: Radio,
      description: 'The return pulse that reshapes the battlespace. Dispersed nodes synthesize a shared operational picture via Synapse-Mesh. The system autonomously coordinates counter-jamming frequencies, steers physical kinetic/electronic countermeasures, and closes the kill-chain.',
      technicalKey: 'P2P Gossip Swarm Consensus · Multi-Domain Closed-Loop Control · Resilient to 60% Node Loss',
      metrics: '120 ms Full Swarm Consensus'
    }
  ];

  const comparisonData = [
    {
      dimension: 'Supply Chain & Sourcing',
      legacy: 'Proprietary foreign ASICs with 24-month lead times & obscure tier-3 provenance',
      thirdEcho: 'Section 889 NDAA compliant, 100% US-manufactured open RISC-V/ARM architecture',
      better: true
    },
    {
      dimension: 'Software Architecture',
      legacy: 'Bloated legacy Linux kernels with unbounded jitter and non-deterministic memory',
      thirdEcho: 'Formally verified bare-metal microkernel with mathematically guaranteed timing budgets',
      better: true
    },
    {
      dimension: 'Connectivity Dependency',
      legacy: 'Cloud-dependent telemetry pipelines that collapse under active electronic warfare jamming',
      thirdEcho: 'Fully air-gapped, sovereign autonomy with decentralized swarm mesh consensus',
      better: true
    },
    {
      dimension: 'Procurement & Upgrades',
      legacy: '10+ year program cycles with proprietary hardware locks and sole-source lock-in',
      thirdEcho: 'Modular Open Systems Approach (MOSA) with rapid software drop-ins and TRL 7-8 readiness',
      better: true
    }
  ];

  return (
    <section id="architecture" className="py-20 border-t border-neutral-800 bg-neutral-900/40 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
            02. Engineering Doctrine
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            The Three Echoes Framework.
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base leading-relaxed">
            Named after the physics of acoustic resonance and radar return signatures, Third Echo Labs organizes systems around three deterministic feedback loops.
          </p>
        </div>

        {/* Interactive 3-Echo Stages */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {echoStages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeEcho === stage.stage;
            return (
              <div
                key={stage.stage}
                onClick={() => setActiveEcho(stage.stage)}
                className={`p-6 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-neutral-950 border-cyan-500/60 shadow-lg shadow-cyan-950/30'
                    : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-400">
                      PHASE 0{stage.stage}
                    </span>
                    <span className={`p-2 rounded ${isActive ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800' : 'bg-neutral-900 text-neutral-400'}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mt-4">
                    {stage.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mt-1">
                    {stage.subtitle}
                  </div>

                  <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-850 space-y-2">
                  <div className="text-xs font-mono text-neutral-400">
                    BENCHMARK: <span className="text-white font-semibold">{stage.metrics}</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-tight">
                    {stage.technicalKey}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparative Analysis Table: Legacy vs. Third Echo Labs */}
        <div className="mt-16 rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden">
          <div className="p-5 bg-neutral-900/80 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-display font-bold text-white">
                Modular Open Systems Approach (MOSA) vs. Legacy Prime Monoliths
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                How Third Echo Labs accelerates defense procurement velocity without vendor lock-in.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <ShieldAlert className="w-4 h-4" />
              <span>FAR PART 12 &amp; 15 COMPLIANT</span>
            </div>
          </div>

          <div className="divide-y divide-neutral-850 text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 p-3.5 bg-neutral-900/30 font-mono text-xs text-neutral-400 font-semibold">
              <div className="md:col-span-3">CRITICAL DIMENSION</div>
              <div className="md:col-span-4 text-rose-300">TRADITIONAL PRIME DEFENSE SUPPLIER</div>
              <div className="md:col-span-5 text-cyan-300">THIRD ECHO LABS SOLUTION</div>
            </div>

            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 gap-3 items-center">
                <div className="md:col-span-3 font-semibold text-neutral-200 text-xs font-mono">
                  {row.dimension}
                </div>
                <div className="md:col-span-4 text-neutral-400 text-xs flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.legacy}</span>
                </div>
                <div className="md:col-span-5 text-neutral-200 text-xs flex items-start gap-2 bg-cyan-950/20 p-2 rounded border border-cyan-900/40">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{row.thirdEcho}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
