/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsExplorer } from './components/SolutionsExplorer';
import { ArchitecturePhilosophy } from './components/ArchitecturePhilosophy';
import { SignalLabSimulator } from './components/SignalLabSimulator';
import { GovProcurementHub } from './components/GovProcurementHub';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';
import { CapabilityStatementModal } from './components/CapabilityStatementModal';
import { ProcurementInquiryModal } from './components/ProcurementInquiryModal';

export default function App() {
  const [capabilityModalOpen, setCapabilityModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-neutral-950">
      
      {/* Strict 3-zone Header */}
      <Navbar
        onOpenCapabilityStatement={() => setCapabilityModalOpen(true)}
        onOpenInquiry={handleOpenInquiry}
      />

      <main className="flex-1">
        {/* Hero Section with Interactive Hotspots & Concrete Metrics */}
        <Hero
          onOpenCapabilityStatement={() => setCapabilityModalOpen(true)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 01. Solutions Catalog: Hardware, Software & Dual-Use Systems */}
        <SolutionsExplorer
          onOpenInquiry={handleOpenInquiry}
          onOpenCapabilityStatement={() => setCapabilityModalOpen(true)}
        />

        {/* 02. Architecture Philosophy: The Three Echoes Doctrine */}
        <ArchitecturePhilosophy />

        {/* 03. Live Interactive Signal Telemetry & Anti-Jam Simulator */}
        <SignalLabSimulator />

        {/* 04. Government & Defense Procurement Hub (CAGE, NAICS, CMMC, Vehicles) */}
        <GovProcurementHub
          onOpenCapabilityStatement={() => setCapabilityModalOpen(true)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 05. Operational Deployments & R&D Trials */}
        <CaseStudies
          onOpenInquiry={handleOpenInquiry}
        />
      </main>

      {/* Authoritative Footer */}
      <Footer
        onOpenCapabilityStatement={() => setCapabilityModalOpen(true)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Official 1-Page Federal Capability Statement Modal (Printable) */}
      <CapabilityStatementModal
        isOpen={capabilityModalOpen}
        onClose={() => setCapabilityModalOpen(false)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Procurement & RFP Submission Portal */}
      <ProcurementInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTopic={inquiryTopic}
      />

    </div>
  );
}
