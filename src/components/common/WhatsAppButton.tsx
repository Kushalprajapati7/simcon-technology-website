import React from 'react';
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
      className="w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 pointer-events-auto shrink-0"
    >
      <svg
        className="w-6 h-6 fill-current transition-transform group-hover:scale-105 shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.768.46 3.492 1.332 5.008L2 22l5.12-1.343c1.472.802 3.125 1.226 4.911 1.226 5.535 0 10.031-4.496 10.031-10.031C22.062 6.496 17.566 2 12.031 2zm0 18.368c-1.545 0-3.056-.415-4.375-1.2l-.314-.187-3.25.852.867-3.167-.205-.327A8.286 8.286 0 0 1 3.737 12.03c0-4.573 3.72-8.293 8.294-8.293 4.574 0 8.294 3.72 8.294 8.293 0 4.574-3.72 8.294-8.294 8.294zm4.542-6.204c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.124-1.05-.387-2-1.234-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.383.11-.507.112-.112.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.485-.407-.419-.56-.427-.145-.008-.311-.01-.477-.01-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.124.166 1.756 2.682 4.254 3.761.594.257 1.059.41 1.421.525.598.19 1.142.163 1.572.099.48-.072 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
      </svg>
    </a>
  );
};
