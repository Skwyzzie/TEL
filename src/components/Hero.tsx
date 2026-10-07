import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Terminal, Layers } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  onOpenCapabilityStatement: () => void;
  onOpenInquiry: (topic?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCapabilityStatement, onOpenInquiry }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: '34%',
      y: '58%',
      title: 'Billet Titanium Aegis Node',
      desc: 'Conduction-cooled MIL-STD-810H edge compute chassis with dual lock-step ARM R52 cores.'
    },
    {
      id: 2,
      x: '62%',
      y: '42%',
      title: 'Direct-Sampling RF Bus',
      desc: 'Ultra-wideband cognitive transceiver architecture for electronic anti-jam resilience.'
    },
    {
      id: 3,
      x: '78%',
      y: '68%',
      title: 'Deterministic Fiber Telemetry',
      desc: 'Sub-400ns interrupt latency isolated microkernel bus running EchoKernel.'
    }
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial gradient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-900/15 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Trust & Readiness Metadata (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-cyan-400 font-mono tracking-wide">
              <span>CAGE 9Z4E2</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>UEI MQ7KL82P9J41</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>CMMC 2.0 LEVEL 2 READY</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>ITAR COMPLIANT</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>US-DESIGNED & MANUFACTURED</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.08] text-balance">
              Sovereign Edge Systems for Contested Domains.
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Third Echo Labs develops dual-use ruggedized hardware and deterministic microkernel software. 
              We engineer deployable computing nodes, acoustic-RF sensor grids, and resilient distributed protocols 
              built to maintain mission autonomy under total electronic denial.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors shadow-sm"
              >
                <span>Explore Systems Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenInquiry('Federal Contracting & SBIR')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-750 hover:border-neutral-600 rounded transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Gov & Prime Partner Intake</span>
              </button>

              <button
                onClick={onOpenCapabilityStatement}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Capability One-Sheet</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Concrete Quantitative Value Metrics (Claim-to-proof adjacency) */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  135 <span className="text-xs font-mono font-normal text-cyan-400">TOPS</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Tactical On-Node Neural Inference</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  &lt; 400 <span className="text-xs font-mono font-normal text-cyan-400">ns</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Deterministic Microkernel Latency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  TRL 7-8
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">Technology Readiness Level Envelope</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Visual Anchor with Interactive Hotspots */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              
              {/* Fallback styling container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <img
                  src={HERO_IMAGE}
                  alt="Third Echo Labs engineering development workbench with ruggedized hardware nodes"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // graceful fallback
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Visual measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Hotspot triggers on image */}
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                    style={{ left: h.x, top: h.y }}
                    aria-label={`Inspect ${h.title}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950/90 border border-cyan-400 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold hover:scale-125 transition-transform cursor-pointer shadow-lg shadow-cyan-950 z-20"
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-30" />
                    {h.id}
                  </button>
                ))}

                {/* Hotspot card display */}
                {activeHotspot !== null && (
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-neutral-950/95 border border-cyan-500/40 rounded shadow-xl backdrop-blur-md z-30 animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-display font-semibold text-cyan-300">
                        {hotspots.find(h => h.id === activeHotspot)?.title}
                      </span>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-neutral-400 hover:text-white px-1 font-mono text-xs cursor-pointer"
                      >
                        [Close]
                      </button>
                    </div>
                    <p className="text-xs text-neutral-300 mt-1 leading-normal">
                      {hotspots.find(h => h.id === activeHotspot)?.desc}
                    </p>
                  </div>
                )}
              </div>

              {/* Lab Telemetry Bar */}
              <div className="px-4 py-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-neutral-300">R&amp;D LAB 01 / HUNTSVILLE</span>
                </div>
                <div className="text-neutral-500">
                  CLICK HOTSPOTS (1-3) TO INSPECT
                </div>
              </div>

            </div>

            {/* Quick architectural badge list below photo */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-neutral-400 font-mono">
              <div className="p-2 border border-neutral-850 rounded bg-neutral-900/50 flex flex-col items-center justify-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>RISC-V / ARM Matrix</span>
              </div>
              <div className="p-2 border border-neutral-850 rounded bg-neutral-900/50 flex flex-col items-center justify-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Rust Microkernel</span>
              </div>
              <div className="p-2 border border-neutral-850 rounded bg-neutral-900/50 flex flex-col items-center justify-center gap-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Multi-Static Array</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
