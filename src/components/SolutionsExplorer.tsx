import React, { useState } from 'react';
import { SOLUTIONS } from '../data/mockData';
import { SolutionCategory, SolutionItem } from '../types';
import { Cpu, Shield, CheckCircle2, SlidersHorizontal, X, ArrowUpRight, FileCheck } from 'lucide-react';

interface SolutionsExplorerProps {
  onOpenInquiry: (systemName?: string) => void;
  onOpenCapabilityStatement: () => void;
}

export const SolutionsExplorer: React.FC<SolutionsExplorerProps> = ({
  onOpenInquiry,
  onOpenCapabilityStatement
}) => {
  const [activeCategory, setActiveCategory] = useState<SolutionCategory>('all');
  const [selectedSystem, setSelectedSystem] = useState<SolutionItem | null>(null);

  const filteredSolutions = SOLUTIONS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="solutions" className="py-20 border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-850">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
              01. Integrated Solutions Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Hardware &amp; Software Engineered to Survive.
            </h2>
            <p className="text-neutral-400 mt-2 max-w-2xl text-sm sm:text-base">
              Dual-use systems built for severe electronic warfare, extreme thermal swings, and air-gapped autonomy. 
              Deployable independently or unified into a single mission stack.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              All Systems ({SOLUTIONS.length})
            </button>
            <button
              onClick={() => setActiveCategory('hardware')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'hardware'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Rugged Hardware
            </button>
            <button
              onClick={() => setActiveCategory('software')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'software'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Deterministic Software
            </button>
            <button
              onClick={() => setActiveCategory('dual-use')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'dual-use'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Dual-Use Grids
            </button>
          </div>
        </div>

        {/* Asymmetric Product Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((item, index) => {
            const isMarquee = index === 0;
            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors overflow-hidden group ${
                  isMarquee ? 'lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Top Image & Header */}
                <div>
                  <div className={`relative overflow-hidden bg-neutral-900 ${isMarquee ? 'aspect-[16/8]' : 'aspect-[16/9]'}`}>
                    <img
                      src={item.primaryImage}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                    
                    {/* Unboxed Metadata in upper corner */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-300">
                      <span className="bg-neutral-950/80 px-2 py-0.5 border border-neutral-800 rounded">
                        {item.badgeCategory}
                      </span>
                      <span className="bg-neutral-950/80 px-2 py-0.5 border border-cyan-800 text-cyan-400 rounded font-semibold">
                        {item.trlLevel}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-display font-bold text-white tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-neutral-300 mt-0.5 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Unboxed Technical Specs (Zero-pill discipline) */}
                    <div className="p-3 rounded bg-neutral-950 border border-neutral-850 space-y-2 text-xs font-mono">
                      {item.specs.computeThroughput && (
                        <div className="flex justify-between items-center text-neutral-400">
                          <span>THROUGHPUT:</span>
                          <span className="text-white font-medium">{item.specs.computeThroughput}</span>
                        </div>
                      )}
                      {item.specs.determinism && (
                        <div className="flex justify-between items-center text-neutral-400">
                          <span>DETERMINISM:</span>
                          <span className="text-cyan-400 font-medium">{item.specs.determinism}</span>
                        </div>
                      )}
                      {item.specs.operatingTemp && (
                        <div className="flex justify-between items-center text-neutral-400">
                          <span>THERMAL SPEC:</span>
                          <span className="text-neutral-200">{item.specs.operatingTemp}</span>
                        </div>
                      )}
                      {item.specs.cryptography && (
                        <div className="flex justify-between items-center text-neutral-400">
                          <span>SECURITY:</span>
                          <span className="text-emerald-400 truncate max-w-[200px]">{item.specs.cryptography}</span>
                        </div>
                      )}
                    </div>

                    {/* Key features checklist */}
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {item.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-5 pb-5 pt-2 border-t border-neutral-850 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedSystem(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Inspect Full Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenInquiry(`Procurement of ${item.name}`)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-neutral-100 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Request Spec Sheet</span>
                    <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Catalog Action Bar */}
        <div className="mt-12 p-6 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Need Customized Hardware Integration or FAR/DFARS Teaming?</h4>
              <p className="text-xs text-neutral-400">We license core intellectual property, design custom carrier boards, and co-bid on SBIR/STTR solicitations.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenCapabilityStatement}
              className="w-full md:w-auto px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-700 rounded transition-colors cursor-pointer"
            >
              View Capability Statement
            </button>
            <button
              onClick={() => onOpenInquiry('Custom System Engineering')}
              className="w-full md:w-auto px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors whitespace-nowrap cursor-pointer"
            >
              Schedule Engineering Briefing
            </button>
          </div>
        </div>

      </div>

      {/* Deep Specification Inspection Modal */}
      {selectedSystem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-750 rounded-xl p-6 shadow-2xl space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <span>{selectedSystem.badgeCategory}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-white font-semibold">{selectedSystem.trlLevel}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight mt-1">
                  {selectedSystem.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {selectedSystem.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedSystem(null)}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Deep Description */}
            <div className="space-y-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedSystem.fullDescription}
              </p>

              {/* Technical Specifications Table */}
              <div className="rounded border border-neutral-800 bg-neutral-950 overflow-hidden">
                <div className="px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 text-xs font-mono font-semibold text-neutral-200">
                  SYSTEM PARAMETERS &amp; ARCHITECTURAL SPECIFICATIONS
                </div>
                <div className="divide-y divide-neutral-850 text-xs font-mono">
                  {selectedSystem.specs.architecture && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Core Architecture:</span>
                      <span className="col-span-2 text-neutral-100">{selectedSystem.specs.architecture}</span>
                    </div>
                  )}
                  {selectedSystem.specs.computeThroughput && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Compute / Throughput:</span>
                      <span className="col-span-2 text-cyan-400 font-semibold">{selectedSystem.specs.computeThroughput}</span>
                    </div>
                  )}
                  {selectedSystem.specs.powerDraw && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Power Envelope:</span>
                      <span className="col-span-2 text-neutral-200">{selectedSystem.specs.powerDraw}</span>
                    </div>
                  )}
                  {selectedSystem.specs.operatingTemp && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Operating Temperature:</span>
                      <span className="col-span-2 text-neutral-200">{selectedSystem.specs.operatingTemp}</span>
                    </div>
                  )}
                  {selectedSystem.specs.chassisIngress && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Ingress / Mechanical:</span>
                      <span className="col-span-2 text-neutral-200">{selectedSystem.specs.chassisIngress}</span>
                    </div>
                  )}
                  {selectedSystem.specs.cryptography && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Cryptographic Standard:</span>
                      <span className="col-span-2 text-emerald-400">{selectedSystem.specs.cryptography}</span>
                    </div>
                  )}
                  {selectedSystem.specs.interfaces && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Physical Interfaces:</span>
                      <span className="col-span-2 text-neutral-200">
                        {selectedSystem.specs.interfaces.join(' · ')}
                      </span>
                    </div>
                  )}
                  {selectedSystem.specs.compliance && (
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-neutral-400">Qualification &amp; Standards:</span>
                      <span className="col-span-2 text-cyan-400">
                        {selectedSystem.specs.compliance.join(' · ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Target Missions List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Validated Mission Profiles
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedSystem.targetMissions.map((mission, mIdx) => (
                    <span key={mIdx} className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                      {mission}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <button
                onClick={() => setSelectedSystem(null)}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white cursor-pointer"
              >
                Close Spec Sheet
              </button>
              <button
                onClick={() => {
                  const sysName = selectedSystem.name;
                  setSelectedSystem(null);
                  onOpenInquiry(`Procurement & Specs for ${sysName}`);
                }}
                className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded cursor-pointer"
              >
                Request Procurement Package (CUI / RFP)
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
