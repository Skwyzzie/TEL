import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Send, CheckCircle2, AlertCircle, FileText, Lock } from 'lucide-react';

interface ProcurementInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ProcurementInquiryModal: React.FC<ProcurementInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTopic
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Federal Government / DoD Contract',
    classificationLevel: 'Unclassified',
    solicitationNumber: '',
    message: '',
    ndaRequired: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (defaultTopic) {
      setFormData((prev) => ({ ...prev, inquiryType: defaultTopic }));
    }
  }, [defaultTopic]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Official email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid official email address';
    }
    if (!formData.organization.trim()) errs.organization = 'Agency or company name is required';
    if (!formData.message.trim()) errs.message = 'Please provide brief details of your mission or RFP requirements';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const randomId = `TEL-GOV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setTrackingId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: 'Federal Government / DoD Contract',
      classificationLevel: 'Unclassified',
      solicitationNumber: '',
      message: '',
      ndaRequired: false
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-750 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Procurement &amp; Teaming Portal
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="space-y-6 text-center py-6 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  Inquiry Dispatched to Federal Contracting Liaison
                </h3>
                <p className="text-xs text-neutral-400 mt-1 max-w-md mx-auto">
                  Your procurement briefing request has been encrypted and routed to our defense contracts team in Huntsville &amp; Washington D.C.
                </p>
              </div>

              <div className="p-4 rounded bg-neutral-950 border border-neutral-800 max-w-md mx-auto font-mono text-xs space-y-1.5 text-left">
                <div className="flex justify-between">
                  <span className="text-neutral-500">TRACKING REFERENCE:</span>
                  <span className="font-bold text-cyan-400">{trackingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">CLASSIFICATION SCOPE:</span>
                  <span className="text-neutral-200">{formData.classificationLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">SLA TARGET:</span>
                  <span className="text-emerald-400 font-semibold">&lt; 24 Business Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">SECURE ENCLAVE:</span>
                  <span className="text-neutral-300">NIST SP 800-171 CUI Compliant</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 max-w-md mx-auto">
                For urgent program office matters requiring mutual bilateral NDAs or classified courier exchanges, email <strong className="text-white">gov@thirdecholabs.com</strong> with reference <strong>{trackingId}</strong>.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
                >
                  Return to Third Echo Labs
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-neutral-400 border-b border-neutral-800 pb-3">
                Third Echo Labs accepts RFIs, RFPs, OTA consortia solicitations, and Tier-1 prime teaming inquiries under strict CMMC/ITAR safeguarding protocols.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Major Marcus Vance / Dr. Elena Rostova"
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded text-white"
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    OFFICIAL / WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@agency.mil or name@primecorp.com"
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded text-white"
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    AGENCY / COMMAND / PRIME CONTRACTOR *
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. USAF AFLCMC / NAVAIR / Lockheed Martin / DIU"
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded text-white"
                  />
                  {errors.organization && <p className="text-[11px] text-rose-400 mt-1">{errors.organization}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    INQUIRY CLASSIFICATION SCOPE
                  </label>
                  <select
                    value={formData.classificationLevel}
                    onChange={(e) => setFormData({ ...formData, classificationLevel: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded text-white"
                  >
                    <option value="Unclassified">Unclassified (Distribution Statement A)</option>
                    <option value="Controlled Unclassified Information (CUI)">CUI / Controlled Unclassified Info</option>
                    <option value="Secret Eligible / Classified Briefing Required">Secret Clearance Required (SIPRNET/In-Person SCIF)</option>
                    <option value="Commercial OEM Integration">Commercial Dual-Use OEM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    TOPIC / PATHWAY
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded text-white"
                  >
                    <option value="Federal Government / DoD Contract">Federal Government / DoD Contract</option>
                    <option value="SBIR / STTR Proposal Teaming">SBIR / STTR Proposal Teaming</option>
                    <option value="Prime Contractor Subcontracting (FAR 19.7)">Prime Contractor Subcontracting</option>
                    <option value="Custom Hardware Prototype Engineering">Custom Hardware Prototype Engineering</option>
                    <option value="EchoKernel RTOS Air-Gapped Evaluation">EchoKernel RTOS Software Evaluation</option>
                    <option value="General Systems Briefing">General Systems Briefing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    SOLICITATION / RFP # (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={formData.solicitationNumber}
                    onChange={(e) => setFormData({ ...formData, solicitationNumber: e.target.value })}
                    placeholder="e.g. W911NF-26-S-0001 / FA8650-26-C-XXXX"
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">
                  STATEMENT OF REQUIREMENTS / MISSION SCOPE *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline operational requirements, environmental envelope, compute/sensor specifications, timeline, or teaming structure..."
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 focus:border-cyan-400 focus:outline-none rounded text-white resize-none"
                />
                {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="ndaReq"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  className="rounded border-neutral-700 bg-neutral-950 text-cyan-400 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="ndaReq" className="text-xs text-neutral-300 cursor-pointer select-none">
                  Request bilateral Mutual Non-Disclosure Agreement (NDA) prior to technical debrief
                </label>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-mono">
                  <Lock className="w-3 h-3 text-cyan-500" />
                  <span>NIST SP 800-171 SAFEGUARDED</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3.5 py-2 text-xs font-medium text-neutral-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer shadow-sm shadow-cyan-950"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Procurement Briefing</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
