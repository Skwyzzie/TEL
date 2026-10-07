import React, { useState } from 'react';
import { NAICS_CODES, CONTRACT_VEHICLES, COMPLIANCE_STANDARDS } from '../data/mockData';
import { Shield, Copy, Check, FileText, Building2, Lock, ArrowUpRight, Award } from 'lucide-react';

interface GovProcurementHubProps {
  onOpenCapabilityStatement: () => void;
  onOpenInquiry: (topic?: string) => void;
}

export const GovProcurementHub: React.FC<GovProcurementHubProps> = ({
  onOpenCapabilityStatement,
  onOpenInquiry
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="government" className="py-20 border-t border-neutral-800 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>04. Federal Acquisition &amp; Defense Contracting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Government Contract Ready.
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base leading-relaxed">
            Third Echo Labs is structured from inception to support Department of Defense (DoD), Intelligence Community (IC), 
            and federal civilian agency mission requirements under strict cybersecurity and export controls.
          </p>
        </div>

        {/* Federal Entity Identifier Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="text-xs font-mono text-neutral-400">CAGE CODE</div>
            <div className="my-2 flex items-center justify-between">
              <span className="text-xl font-mono font-bold text-white tracking-wider">9Z4E2</span>
              <button
                onClick={() => handleCopy('cage', '9Z4E2')}
                className="p-1.5 text-neutral-400 hover:text-cyan-400 rounded transition-colors cursor-pointer"
                title="Copy CAGE Code"
              >
                {copiedKey === 'cage' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-[11px] text-neutral-400">Defense Logistics Agency (DLA) Registered</div>
          </div>

          <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="text-xs font-mono text-neutral-400">UNIQUE ENTITY ID (UEI)</div>
            <div className="my-2 flex items-center justify-between">
              <span className="text-base font-mono font-bold text-white tracking-wider">MQ7KL82P9J41</span>
              <button
                onClick={() => handleCopy('uei', 'MQ7KL82P9J41')}
                className="p-1.5 text-neutral-400 hover:text-cyan-400 rounded transition-colors cursor-pointer"
                title="Copy UEI"
              >
                {copiedKey === 'uei' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-[11px] text-neutral-400">SAM.gov Active · SBA Small Business</div>
          </div>

          <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="text-xs font-mono text-neutral-400">CYBERSECURITY ACCREDITATION</div>
            <div className="my-2">
              <span className="text-base font-mono font-bold text-cyan-400">CMMC 2.0 LEVEL 2</span>
            </div>
            <div className="text-[11px] text-neutral-400">NIST SP 800-171 Rev 2 (110 Controls In Place)</div>
          </div>

          <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div className="text-xs font-mono text-neutral-400">CLEARANCE &amp; PERSONNEL</div>
            <div className="my-2">
              <span className="text-base font-mono font-bold text-emerald-400">US PERSONS ONLY</span>
            </div>
            <div className="text-[11px] text-neutral-400">FOCI-Mitigated Structure · Cleared Personnel</div>
          </div>

        </div>

        {/* NAICS Codes & Contract Vehicles Split */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: NAICS & Classification Directory (6 Cols) */}
          <div className="lg:col-span-6 rounded-lg border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-850 pb-3">
              <div>
                <h3 className="text-base font-display font-bold text-white">
                  Designated NAICS Codes
                </h3>
                <p className="text-xs text-neutral-400">North American Industry Classification System</p>
              </div>
              <button
                onClick={() => {
                  const allCodes = NAICS_CODES.map(n => `${n.code}: ${n.title}`).join('\n');
                  handleCopy('all-naics', allCodes);
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded cursor-pointer"
              >
                {copiedKey === 'all-naics' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy All Codes</span>
              </button>
            </div>

            <div className="divide-y divide-neutral-850">
              {NAICS_CODES.map((naics) => (
                <div key={naics.code} className="py-2.5 flex items-start justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-cyan-400">{naics.code}</span>
                      {naics.isPrimary && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                          PRIMARY
                        </span>
                      )}
                    </div>
                    <div className="text-neutral-300 leading-snug">{naics.title}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(`naics-${naics.code}`, naics.code)}
                    className="p-1 text-neutral-500 hover:text-neutral-300 shrink-0 cursor-pointer"
                    title={`Copy code ${naics.code}`}
                  >
                    {copiedKey === `naics-${naics.code}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>

            {/* PSC Codes summary */}
            <div className="pt-3 border-t border-neutral-850 text-xs font-mono text-neutral-400">
              <span className="text-neutral-200">FEDERAL PSC CODES:</span> AC13 (Defense R&amp;D: Weapons) · 5895 (Communications) · 5998 (Electrical Assemblies) · 7030 (IT Software)
            </div>
          </div>

          {/* Right Column: Contract Vehicles & Teaming (6 Cols) */}
          <div className="lg:col-span-6 rounded-lg border border-neutral-800 bg-neutral-950 p-6 space-y-4">
            <div className="border-b border-neutral-850 pb-3">
              <h3 className="text-base font-display font-bold text-white">
                Available Contract Vehicles &amp; Pathways
              </h3>
              <p className="text-xs text-neutral-400">Streamlined procurement channels for government buyers and prime integrators</p>
            </div>

            <div className="space-y-3">
              {CONTRACT_VEHICLES.map((vehicle) => (
                <div key={vehicle.id} className="p-3.5 rounded bg-neutral-900/70 border border-neutral-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white">{vehicle.name}</div>
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                      {vehicle.status}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-neutral-400">{vehicle.type}</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{vehicle.scope}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={onOpenCapabilityStatement}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Capability Statement (PDF)</span>
              </button>

              <button
                onClick={() => onOpenInquiry('Prime Teaming & FAR 19.7')}
                className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-cyan-300 cursor-pointer"
              >
                <span>Prime Teaming Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Security & Compliance Checklist */}
        <div className="mt-10 rounded-lg border border-neutral-800 bg-neutral-950 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-display font-bold text-white">
              Federal Security &amp; Supply Chain Integrity Controls
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMPLIANCE_STANDARDS.map((std, idx) => (
              <div key={idx} className="p-3.5 rounded bg-neutral-900/40 border border-neutral-850 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white">{std.standard}</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                    {std.status}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-neutral-400">{std.authority}</div>
                <p className="text-xs text-neutral-300 leading-normal">{std.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Procurement CTA Box */}
        <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-neutral-900 via-cyan-950/40 to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold text-white">Are you a Federal Contracting Officer or Prime Program Manager?</div>
            <div className="text-xs text-neutral-400">Request our full FAR compliance documentation, SAM.gov representations, or technical white papers.</div>
          </div>
          <button
            onClick={() => onOpenInquiry('Federal Contracting & RFP')}
            className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors whitespace-nowrap cursor-pointer shadow-md shadow-cyan-950"
          >
            Open Procurement Inquiry
          </button>
        </div>

      </div>
    </section>
  );
};
