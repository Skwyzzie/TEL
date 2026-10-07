import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ShieldCheck, Building2, ExternalLink } from 'lucide-react';
import { NAICS_CODES } from '../data/mockData';

interface CapabilityStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: (topic?: string) => void;
}

export const CapabilityStatementModal: React.FC<CapabilityStatementModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
THIRD ECHO LABS LLC - CAPABILITY STATEMENT
CAGE: 9Z4E2 | UEI: MQ7KL82P9J41 | SBA Small Business
Primary NAICS: 541715 (R&D in Physical & Engineering Sciences)
Web: https://thirdecholabs.com | Liaison: gov@thirdecholabs.com

CORE COMPETENCIES:
1. Ruggedized Tactical Edge Compute (135 TOPS INT8, conduction-cooled, MIL-STD-810H, -40°C to +85°C)
2. Formally Verified Microkernel RTOS (Sub-400ns determinism, zero heap fragmentation, DO-178C DAL-A)
3. Multi-Aperture Acoustic & RF Sensor Systems (Micro-Doppler counter-sUAS, directional phased array)
4. Swarm Consensus & Anti-Jam Protocols (GPS-denied relative navigation, Byzantine fault tolerant)

DIFFERENTIATORS:
- 100% US-Designed & Manufactured (Section 889 NDAA Compliant, Zero Banned Silicon)
- Modular Open Systems Approach (MOSA) ensuring rapid insertion and zero proprietary lock-in
- CMMC 2.0 Level 2 Architecture implementing 110 NIST SP 800-171 controls
- Rapid Prototyping Cycle: Prototype hardware delivery in 12 weeks vs. 18-month prime cycles

NAICS CODES: 541715 (Primary), 541512, 334511, 334418, 541330, 541519
PSC CODES: AC13, 5895, 5998, 7030
SECURITY: ITAR Registered | Cleared Personnel on Staff | US Persons Only
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-neutral-700 bg-neutral-900 shadow-2xl overflow-hidden">
        
        {/* Top Control Bar (Hidden in Print) */}
        <div className="no-print px-6 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider">
              Federal Acquisition Capability Statement (1-Pager)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-750 hover:border-neutral-600 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 py-1 text-xs font-mono text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-750 hover:border-neutral-600 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-neutral-100 print:text-black print:bg-white print:p-0">
          
          {/* Document Header */}
          <div className="border-b-2 border-cyan-500 pb-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 print:text-neutral-700 tracking-wider">
                DEFENSE &amp; GOVERNMENT SOLUTIONS DIVISION
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white print:text-black tracking-tight mt-0.5">
                THIRD ECHO LABS LLC
              </h1>
              <p className="text-xs text-neutral-300 print:text-neutral-800 mt-1 max-w-xl">
                Dual-use sovereign edge computing hardware and formally verified deterministic microkernel software for contested multi-domain operations.
              </p>
            </div>

            {/* Entity Identification Box */}
            <div className="p-3 rounded bg-neutral-950 border border-neutral-800 print:bg-neutral-100 print:border-neutral-300 font-mono text-xs space-y-1 min-w-[220px]">
              <div className="flex justify-between">
                <span className="text-neutral-400 print:text-neutral-600">CAGE CODE:</span>
                <span className="font-bold text-cyan-300 print:text-black">9Z4E2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 print:text-neutral-600">UEI:</span>
                <span className="font-bold text-neutral-100 print:text-black">MQ7KL82P9J41</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 print:text-neutral-600">SOCIOECONOMIC:</span>
                <span className="text-neutral-200 print:text-black">Small Business</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400 print:text-neutral-600">PRIMARY NAICS:</span>
                <span className="font-bold text-cyan-400 print:text-black">541715</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono uppercase font-bold text-cyan-400 print:text-neutral-900 tracking-wider flex items-center gap-2">
              <span>01. Core Competencies</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded bg-neutral-950/60 border border-neutral-850 print:border-neutral-300 print:bg-white space-y-1">
                <div className="font-semibold text-white print:text-black">Tactical Edge Hardware Acceleration</div>
                <p className="text-neutral-300 print:text-neutral-700 leading-relaxed">
                  Design and fabrication of MIL-STD-810H/461G compliant conduction-cooled computing chassis delivering 135 TOPS INT8 neural inference. Built with MIL-DTL-38999 circular interfaces for harsh vibrational environments (-45°C to +85°C).
                </p>
              </div>

              <div className="p-3.5 rounded bg-neutral-950/60 border border-neutral-850 print:border-neutral-300 print:bg-white space-y-1">
                <div className="font-semibold text-white print:text-black">Formally Verified Deterministic RTOS</div>
                <p className="text-neutral-300 print:text-neutral-700 leading-relaxed">
                  Bare-metal capabilities-based microkernel (EchoKernel) written in certified safe Rust. Guarantees sub-400ns interrupt response, zero heap fragmentation, and hardware-enforced cryptographic boundaries for DO-178C DAL-A flight avionics.
                </p>
              </div>

              <div className="p-3.5 rounded bg-neutral-950/60 border border-neutral-850 print:border-neutral-300 print:bg-white space-y-1">
                <div className="font-semibold text-white print:text-black">Multi-Aperture Acoustic &amp; RF Arrays</div>
                <p className="text-neutral-300 print:text-neutral-700 leading-relaxed">
                  Co-located 32-element MEMS acoustic micro-Doppler arrays and wideband direct-sampling RF receivers. Specialized in detecting stealth radio-silent Class 1-3 uncrewed drones at ranges up to 4.5km.
                </p>
              </div>

              <div className="p-3.5 rounded bg-neutral-950/60 border border-neutral-850 print:border-neutral-300 print:bg-white space-y-1">
                <div className="font-semibold text-white print:text-black">GPS-Denied Swarm Consensus (Synapse-Mesh)</div>
                <p className="text-neutral-300 print:text-neutral-700 leading-relaxed">
                  Byzantine fault-tolerant distributed state machine enabling autonomous multi-agent teams to collaboratively localize, de-conflict, and execute mission objectives without external satellite navigation or cloud servers.
                </p>
              </div>
            </div>
          </div>

          {/* Differentiators & Past Performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Differentiators */}
            <div className="space-y-3">
              <h2 className="text-sm font-mono uppercase font-bold text-cyan-400 print:text-neutral-900 tracking-wider">
                02. Corporate Differentiators
              </h2>
              <ul className="space-y-2 text-xs text-neutral-300 print:text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 print:text-black font-bold">▪</span>
                  <span><strong>100% US-Based Supply Chain:</strong> Full Section 889 NDAA certification. Zero banned Chinese telecommunications components or obscure tier-3 silicon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 print:text-black font-bold">▪</span>
                  <span><strong>Modular Open Systems Approach (MOSA):</strong> Standard STANAG 4754 and open ROS2/gRPC interfaces guarantee zero vendor lock-in for program managers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 print:text-black font-bold">▪</span>
                  <span><strong>CMMC 2.0 Level 2 Enforced:</strong> All engineering workspaces, build servers, and source repositories adhere strictly to NIST SP 800-171 Rev 2 controls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 print:text-black font-bold">▪</span>
                  <span><strong>Rapid Hardware Iteration Velocity:</strong> 12-week design-to-deployment cycle vs. traditional prime contractor 18-month lead times.</span>
                </li>
              </ul>
            </div>

            {/* Past Performance & Readiness */}
            <div className="space-y-3">
              <h2 className="text-sm font-mono uppercase font-bold text-cyan-400 print:text-neutral-900 tracking-wider">
                03. Technology Readiness &amp; Trials
              </h2>
              <div className="space-y-2 text-xs text-neutral-300 print:text-neutral-800">
                <div className="p-2.5 rounded bg-neutral-950/60 border border-neutral-850 print:border-neutral-300 print:bg-white">
                  <div className="font-semibold text-white print:text-black">Project Zephyr-Echo (TRL 7)</div>
                  <div className="text-neutral-400 print:text-neutral-600">Autonomous Arctic Counter-sUAS Acoustic/RF Sentry Grid. 4,300 hrs continuous uptime at -38°C.</div>
                </div>
                <div className="p-2.5 rounded bg-neutral-950/60 border border-neutral-850 print:border-neutral-300 print:bg-white">
                  <div className="font-semibold text-white print:text-black">Project HyperVigil (TRL 8)</div>
                  <div className="text-neutral-400 print:text-neutral-600">Sub-Orbital Flight Avionics Control Module. Bounded &lt; 240ns actuator jitter under 25G re-entry buffet.</div>
                </div>
                <div className="p-2.5 rounded bg-neutral-950/60 border border-neutral-850 print:border-neutral-300 print:bg-white">
                  <div className="font-semibold text-white print:text-black">Project Strata-Echo (TRL 6)</div>
                  <div className="text-neutral-400 print:text-neutral-600">Subterranean Acoustic Telemetry through 1.8km solid rock. 7.5-year autonomous battery endurance.</div>
                </div>
              </div>
            </div>

          </div>

          {/* NAICS, PSC & Corporate Data Footer */}
          <div className="pt-4 border-t border-neutral-800 print:border-neutral-300 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <div className="font-bold text-neutral-200 print:text-black mb-1">NAICS CODES</div>
              <div className="text-neutral-400 print:text-neutral-600 text-[11px] space-y-0.5">
                <div>541715 (Primary R&amp;D Physical)</div>
                <div>541512 (Computer Systems Design)</div>
                <div>334511 (Nav &amp; Guidance Systems)</div>
                <div>334418 (PCB Assembly Mfg)</div>
                <div>541330 (Military Engineering)</div>
              </div>
            </div>

            <div>
              <div className="font-bold text-neutral-200 print:text-black mb-1">PRODUCT SERVICE CODES</div>
              <div className="text-neutral-400 print:text-neutral-600 text-[11px] space-y-0.5">
                <div>AC13 (R&amp;D Defense Systems)</div>
                <div>5895 (Comm Equipment Misc)</div>
                <div>5998 (Electrical Assemblies)</div>
                <div>7030 (IT Software)</div>
              </div>
            </div>

            <div>
              <div className="font-bold text-neutral-200 print:text-black mb-1">POINT OF CONTACT</div>
              <div className="text-neutral-400 print:text-neutral-600 text-[11px] space-y-0.5">
                <div className="text-white print:text-black font-semibold">Federal Contracting Liaison</div>
                <div>Third Echo Labs LLC</div>
                <div>Huntsville R&amp;D Lab &amp; D.C. Office</div>
                <div className="text-cyan-400 print:text-neutral-800">gov@thirdecholabs.com</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Actions (Hidden in Print) */}
        <div className="no-print px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
          <div className="text-xs text-neutral-400">
            ITAR Controlled Technical Summary · Distribution Statement A (Public Release)
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry('Federal Capability Statement Follow-up');
              }}
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded cursor-pointer"
            >
              Initiate Federal RFP / Teaming Discussion
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
