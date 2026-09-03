import React from 'react';
import { ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface CTAProps {
  onOpenBooking: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#0D0D0E] swiss-border-b relative overflow-hidden swiss-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181A] border border-[#26262A] rounded-full text-xs font-mono text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>JOIN OVER 2,500+ KL RESIDENTS WHO NEVER DO LAUNDRY AGAIN</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-mono tracking-tighter text-[#F3F3F1] uppercase max-w-5xl mx-auto leading-none">
          WE MAKE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#F3F3F1] to-[#888880]">
            DIRTY DISAPPEAR.
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#A0A09A] font-light leading-relaxed">
          Book your doorstep pickup in under 60 seconds. Free delivery across Kuala Lumpur and Selangor on all orders above RM 40.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-mono text-xs">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#F3F3F1] text-[#0D0D0E] font-bold px-8 py-4 text-sm tracking-wider hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-2 cursor-pointer"
            id="cta-schedule-btn"
          >
            <span>SCHEDULE DOORSTEP PICKUP</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/601130719502?text=Hello%20BLANC%20Laundry,%20I%20would%20like%20to%20book%20a%20doorstep%20pickup."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-[#26262A] bg-[#141416] text-[#F3F3F1] font-bold px-6 py-4 hover:border-emerald-400 hover:text-emerald-400 transition-all flex items-center justify-center gap-2"
            id="cta-whatsapp-btn"
          >
            <PhoneCall className="w-4 h-4" />
            <span>CHAT WHATSAPP (+60 11-3071 9502)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
