import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const WhatsAppButton: React.FC = () => {
  const cleanPhone = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const message = encodeURIComponent("Hello SIMCON Technology, I would like to enquire about engineering testing and geotechnical services.");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SIMCON on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#062B5C] text-white hover:bg-[#1268B3] border border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-5 h-5 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
        <MessageCircle className="w-5 h-5 fill-current" />
      </div>
      <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
        Technical Enquiry
      </span>
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    </a>
  );
};
