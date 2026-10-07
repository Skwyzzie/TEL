import React from 'react';
import { Shield, FileText, Mail, MapPin, Building2 } from 'lucide-react';

interface FooterProps {
  onOpenCapabilityStatement: () => void;
  onOpenInquiry: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCapabilityStatement,
  onOpenInquiry
}) => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-850">
          
          {/* Brand & Mission (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-display text-lg font-bold text-white tracking-wider uppercase block">
              Third Echo Labs
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Engineering sovereign dual-use edge computing hardware, formally verified microkernel RTOS, 
              and autonomous multi-agent swarm protocols for defense, aerospace, and critical infrastructure.
            </p>
            <div className="pt-2 text-neutral-500 font-mono text-[11px] space-y-0.5">
              <div>CAGE: 9Z4E2 · UEI: MQ7KL82P9J41</div>
              <div>PRIMARY NAICS: 541715 (R&amp;D Physical Sciences)</div>
              <div>CMMC 2.0 LEVEL 2 READY · ITAR COMPLIANT</div>
            </div>
          </div>

          {/* Systems Navigation (2 Cols) */}
          <div className="md:col-span-2 space-y-2">
            <div className="font-mono text-neutral-200 uppercase tracking-wider text-[11px] font-semibold">
              Solutions
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">Aegis-Node 4X</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">EchoKernel RTOS</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">Phased-Echo 900</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">Synapse-Mesh Protocol</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">SpectraGuard SDR</a>
              </li>
            </ul>
          </div>

          {/* Defense & Federal (3 Cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-neutral-200 uppercase tracking-wider text-[11px] font-semibold">
              Federal Acquisition
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={onOpenCapabilityStatement}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Capability Statement (1-Pager)
                </button>
              </li>
              <li>
                <a href="#government" className="hover:text-cyan-400 transition-colors">
                  NAICS &amp; PSC Code Registry
                </a>
              </li>
              <li>
                <a href="#government" className="hover:text-cyan-400 transition-colors">
                  SBIR / STTR Teaming
                </a>
              </li>
              <li>
                <a href="#government" className="hover:text-cyan-400 transition-colors">
                  Prime Subcontracting (FAR 19.7)
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry('Classified / CUI Briefing')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Request CUI / Technical Debrief
                </button>
              </li>
            </ul>
          </div>

          {/* Facilities & Liaison (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-neutral-200 uppercase tracking-wider text-[11px] font-semibold">
              Facilities &amp; Operations
            </div>
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Huntsville Systems Lab</div>
                  <div className="text-neutral-400 text-[11px]">Cummings Research Park · Huntsville, AL</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Capital Region Federal Liaison</div>
                  <div className="text-neutral-400 text-[11px]">Crystal City Corridor · Arlington, VA</div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-mono text-[11px]">gov@thirdecholabs.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & ITAR Compliance Notices */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Third Echo Labs LLC. All rights reserved. Registered Defense Contractor.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>ITAR Controlled Technical Data Protocols</span>
            <span aria-hidden="true">·</span>
            <span>Section 889 NDAA Compliant</span>
            <span aria-hidden="true">·</span>
            <span>NIST SP 800-171 Safeguarded</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
