import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { AccreditationCertificate } from '@/data/certificates';

interface CertificateModalProps {
  certificate: AccreditationCertificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F7F8FA]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#062B5C] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-[#2B7EC8]" />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-base font-bold text-[#062B5C]">
                NABL Accreditation Certificate — {certificate.code}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {certificate.standard} • {certificate.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={certificate.imagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1268B3] hover:text-[#062B5C] hover:bg-slate-200/50 rounded transition-colors"
            >
              Open Original <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-md transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image View */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center">
          <img
            src={certificate.imagePath}
            alt={`NABL Accreditation Certificate ${certificate.code} - ${certificate.location}`}
            className="max-h-[70vh] w-auto object-contain rounded border border-slate-300 shadow-md"
            loading="lazy"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <span>{certificate.scopeDescription}</span>
          <button
            onClick={onClose}
            className="self-end sm:self-auto px-4 py-1.5 text-xs font-semibold text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
