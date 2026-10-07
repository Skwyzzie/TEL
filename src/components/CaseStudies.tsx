import React from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { ShieldCheck, Cpu, Terminal, ArrowUpRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenInquiry: (topic?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenInquiry }) => {
  return (
    <section id="casestudies" className="py-20 border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-850">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
              05. Operational Trials &amp; R&amp;D Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Validated in Contested Conditions.
            </h2>
            <p className="text-neutral-400 mt-2 max-w-2xl text-sm sm:text-base">
              Third Echo Labs designs for edge environments where GPS fails, electronic warfare is pervasive, and cloud infrastructure does not exist.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            TECHNOLOGY READINESS ENVELOPE: <span className="text-cyan-400 font-semibold">TRL 6 - TRL 8</span>
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="mt-10 space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="rounded-lg border border-neutral-800 bg-neutral-900/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Media Column (5 Cols) */}
              <div className="lg:col-span-5 relative bg-neutral-900 aspect-[16/10] lg:aspect-auto">
                <img
                  src={study.image}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent" />
                
                {/* Mission Codename Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-neutral-950/90 border border-cyan-800 font-mono text-xs font-bold text-cyan-400 tracking-wider">
                    {study.codename}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-neutral-300">
                  <div className="text-neutral-500 uppercase text-[10px]">ENVIRONMENT:</div>
                  <div className="text-white font-medium">{study.missionEnvironment}</div>
                </div>
              </div>

              {/* Data & Content Column (7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Client Sector / Authority */}
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wide">
                    {study.clientSector}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {study.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="p-3.5 rounded bg-neutral-950 border border-neutral-850 text-xs">
                    <span className="font-mono text-cyan-400 font-semibold block mb-1">
                      TECHNICAL BREAKTHROUGH:
                    </span>
                    <p className="text-neutral-300 leading-normal">
                      {study.technicalBreakthrough}
                    </p>
                  </div>
                </div>

                {/* Proof-Adjacent Quantitative Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-850">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-xl sm:text-2xl font-display font-bold text-white tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-cyan-400 mt-0.5">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-2">
                        {m.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stack and Action bar */}
                <div className="pt-4 border-t border-neutral-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                  <div className="space-y-1 text-neutral-400">
                    <div>
                      <span className="text-neutral-300 font-medium">HW:</span> {study.hardwareProfile}
                    </div>
                    <div>
                      <span className="text-neutral-300 font-medium">SW:</span> {study.softwareStack}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenInquiry(`Technical debrief on ${study.codename}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
                  >
                    <span>Request Trial Briefing</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
