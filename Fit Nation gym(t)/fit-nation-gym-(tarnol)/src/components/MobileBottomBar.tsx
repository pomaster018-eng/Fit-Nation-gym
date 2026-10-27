import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E0E0E]/95 backdrop-blur-md border-t border-[#262626] px-4 py-2.5 flex items-center gap-3 shadow-2xl">
      <a
        href={`tel:${GYM_INFO.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FFE600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl active:scale-[0.98] transition-transform font-stylish shadow-md shadow-[#FFE600]/20"
      >
        <Phone className="w-3.5 h-3.5" />
        Call Now
      </a>

      <a
        href={GYM_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1C1C1C] border border-[#333333] hover:border-[#FFE600] text-white font-bold text-xs uppercase tracking-wider rounded-xl active:scale-[0.98] transition-transform"
      >
        <MessageSquare className="w-3.5 h-3.5 text-[#FFE600]" />
        WhatsApp
      </a>

      <a
        href={GYM_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Google Maps directions"
        className="p-2.5 bg-[#1C1C1C] border border-[#333333] text-[#FFE600] rounded-xl active:scale-[0.98]"
      >
        <Navigation className="w-4 h-4" />
      </a>
    </div>
  );
};
