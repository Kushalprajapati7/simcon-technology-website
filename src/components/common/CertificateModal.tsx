import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { ACCREDITATIONS, AccreditationCertificate } from '@/data/certificates';

interface CertificateModalProps {
  certificate: AccreditationCertificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose
}) => {
  const [currentCert, setCurrentCert] = useState<AccreditationCertificate | null>(certificate);

  useEffect(() => {
    setCurrentCert(certificate);
  }, [certificate]);

  const currentIndex = ACCREDITATIONS.findIndex(c => c.id === currentCert?.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + ACCREDITATIONS.length) % ACCREDITATIONS.length;
    setCurrentCert(ACCREDITATIONS[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % ACCREDITATIONS.length;
    setCurrentCert(ACCREDITATIONS[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex !== -1) {
        const prevIdx = (currentIndex - 1 + ACCREDITATIONS.length) % ACCREDITATIONS.length;
        setCurrentCert(ACCREDITATIONS[prevIdx]);
      }
      if (e.key === 'ArrowRight' && currentIndex !== -1) {
        const nextIdx = (currentIndex + 1) % ACCREDITATIONS.length;
        setCurrentCert(ACCREDITATIONS[nextIdx]);
      }
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, currentIndex, onClose]);

  if (!certificate || !currentCert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Matching Image 2) */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-slate-200/90 bg-[#F8FAFC]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#062B5C] flex items-center justify-center text-white shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#2B7EC8]" />
            </div>
            <div className="min-w-0">
              <h3 id="cert-modal-title" className="text-sm sm:text-base lg:text-lg font-bold font-display text-[#062B5C] truncate">
                NABL Accreditation Certificate — {currentCert.code}
              </h3>
              <p className="text-xs text-slate-500 font-mono truncate mt-0.5">
                {currentCert.standard} • {currentCert.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-4">
            <a
              href={currentCert.imagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1268B3] hover:text-[#062B5C] hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
              title="Open full resolution certificate in new tab"
            >
              <span className="hidden sm:inline">Open Original</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal 2-Column Split Body (Matching Image 2) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#F4F7FB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
            {/* Left Column (lg:col-span-7): Certificate Document Preview with Carousel Controls */}
            <div className="lg:col-span-7 flex items-center justify-between gap-2 sm:gap-4">
              {/* Prev Arrow Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 shadow-sm flex items-center justify-center text-[#062B5C] hover:text-[#1268B3] transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
                aria-label="View previous certificate"
                title="Previous certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Document Frame */}
              <div className="flex-1 bg-white p-2 sm:p-3 rounded-xl border border-slate-300 shadow-md flex items-center justify-center max-h-[66vh] overflow-hidden">
                <img
                  src={currentCert.imagePath}
                  alt={`NABL Certificate ${currentCert.code} - ${currentCert.location}`}
                  className="max-h-[62vh] w-auto object-contain rounded"
                  loading="lazy"
                />
              </div>

              {/* Next Arrow Button */}
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 shadow-sm flex items-center justify-center text-[#062B5C] hover:text-[#1268B3] transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
                aria-label="View next certificate"
                title="Next certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column (lg:col-span-5): Certificate Details Card */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div>
                <h4 className="text-base sm:text-lg font-bold font-display text-[#062B5C] pb-3 border-b border-slate-100">
                  Certificate Details
                </h4>

                {/* Structured Metadata Key-Value List */}
                <div className="divide-y divide-slate-100 my-4 text-xs sm:text-sm">
                  <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-medium">Laboratory</span>
                    <span className="font-bold text-[#062B5C] sm:text-right">{currentCert.location}</span>
                  </div>
                  <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-medium">NABL Certificate No.</span>
                    <span className="font-mono font-bold text-[#062B5C] sm:text-right">{currentCert.code}</span>
                  </div>
                  <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-medium">Standard</span>
                    <span className="font-mono font-bold text-[#D71920] sm:text-right">{currentCert.standard}</span>
                  </div>
                  <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-medium">Valid Until</span>
                    <span className="font-mono font-bold text-[#062B5C] sm:text-right">{currentCert.validUntil}</span>
                  </div>
                  <div className="py-2.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <span className="text-slate-500 font-medium shrink-0">Scope</span>
                    <span className="font-semibold text-slate-700 sm:text-right leading-snug">{currentCert.scope}</span>
                  </div>
                </div>

                {/* Scope Description Box */}
                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-[#062B5C] block mb-1">Scope Summary:</span>
                  {currentCert.scopeDescription}
                </div>
              </div>

              {/* Status Footer (Clean & Non-AI, No Download PDF Button) */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/70 text-xs font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active &amp; NABL Accredited
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {currentIndex !== -1 ? `${currentIndex + 1} of ${ACCREDITATIONS.length}` : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
