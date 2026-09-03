import React from 'react';
import { Calendar, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      title: 'SCHEDULE & BAG',
      subtitle: 'INSTANT BOOKING IN 60 SECONDS',
      description: 'Select your preferred pickup window. Gather your garments into any bag. Our driver brings eco-friendly tagged laundry hampers.',
      icon: Calendar,
      tag: 'STEP 01 // DISPATCH',
    },
    {
      number: '02',
      title: 'CLEAN & SANITIZE',
      subtitle: 'SWISS LAB PROCESS',
      description: 'Items are sorted, stain-treated, washed with biodegradable enzymes, and pressed under 4.5 bar dry vacuum steam.',
      icon: Truck,
      tag: 'STEP 02 // TREATMENT',
    },
    {
      number: '03',
      title: '24H CRISP RETURN',
      subtitle: 'DOORSTEP DELIVERY GUARANTEE',
      description: 'Delivered fresh and pristine to your door within 24 hours in breathable anti-dust archival garment bags.',
      icon: CheckCircle2,
      tag: 'STEP 03 // FULFILLMENT',
    },
  ];

  return (
    <section className="py-24 bg-[#0D0D0E] swiss-border-b relative swiss-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 swiss-border-b pb-8">
          <div>
            <div className="font-mono text-xs text-[#888880] tracking-widest uppercase mb-2">
              [03] OPERATIONAL WORKFLOW
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#F3F3F1] uppercase">
              HOW IT WORKS.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A0A09A]">
            <span>[ ZERO FRICTION DOORSTEP CONCIERGE ]</span>
          </div>
        </div>

        {/* 3-Column Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#26262A] border border-[#26262A]">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D0D0E] p-8 flex flex-col justify-between relative hover:bg-[#141416] transition-all group"
              >
                <div>
                  {/* Top Monospaced Numbering */}
                  <div className="flex justify-between items-center mb-8 font-mono">
                    <span className="text-5xl font-black text-[#26262A] group-hover:text-[#F3F3F1] transition-colors">
                      {st.number}
                    </span>
                    <span className="text-[10px] text-[#A0A09A] border border-[#26262A] px-2 py-0.5 bg-[#18181A]">
                      {st.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 bg-[#18181A] border border-[#26262A] flex items-center justify-center text-[#F3F3F1] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-mono text-[10px] text-[#888880] uppercase tracking-widest mb-1">
                    {st.subtitle}
                  </div>

                  <h3 className="text-2xl font-bold font-mono text-[#F3F3F1] mb-4">
                    {st.title}
                  </h3>

                  <p className="text-xs text-[#A0A09A] font-light leading-relaxed mb-6">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#26262A] font-mono text-[10px] text-[#888880] flex items-center justify-between">
                  <span>PHASE {st.number} COMPLIANT</span>
                  <span className="text-emerald-400">READY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Trigger Banner */}
        <div className="mt-8 p-6 bg-[#141416] border border-[#26262A] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[#F3F3F1]">NEXT PICKUP WINDOW: TODAY (14:00 - 16:00)</span>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#F3F3F1] text-[#0D0D0E] font-bold px-6 py-3 hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="how-it-works-book-btn"
          >
            <span>RESERVE PICKUP SLOT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
