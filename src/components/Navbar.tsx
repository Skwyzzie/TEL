import React, { useState } from 'react';
import { Menu, X, Shield, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenCapabilityStatement: () => void;
  onOpenInquiry: (defaultTopic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCapabilityStatement,
  onOpenInquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-display text-xl font-bold tracking-wider text-neutral-100 hover:text-cyan-400 transition-colors uppercase"
        >
          Third Echo Labs
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          <a 
            href="#solutions" 
            className="hover:text-neutral-100 transition-colors"
          >
            Solutions
          </a>
          <a 
            href="#architecture" 
            className="hover:text-neutral-100 transition-colors"
          >
            The Three Echoes
          </a>
          <a 
            href="#signallab" 
            className="hover:text-neutral-100 transition-colors"
          >
            Signal Lab
          </a>
          <a 
            href="#government" 
            className="hover:text-neutral-100 transition-colors"
          >
            Defense & Gov
          </a>
          <a 
            href="#casestudies" 
            className="hover:text-neutral-100 transition-colors"
          >
            Deployments
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCapabilityStatement}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-750 hover:border-neutral-600 rounded transition-colors whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Capability Sheet</span>
          </button>
          
          <button
            onClick={() => onOpenInquiry('Government Contract & RFP')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors whitespace-nowrap cursor-pointer shadow-sm shadow-cyan-950"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Procurement Portal</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm text-neutral-300">
            <a 
              href="#solutions" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Solutions (Hardware & Software)
            </a>
            <a 
              href="#architecture" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              The Three Echoes Architecture
            </a>
            <a 
              href="#signallab" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Signal Lab & Telemetry
            </a>
            <a 
              href="#government" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Defense & Federal Procurement
            </a>
            <a 
              href="#casestudies" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400 transition-colors"
            >
              Operational Deployments
            </a>
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCapabilityStatement();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-700 rounded"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              View Capability Statement
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Government Contract & RFP');
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded"
            >
              <Shield className="w-4 h-4" />
              Procurement & RFP Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
