import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'TURNAROUND & PICKUP',
    question: 'How fast is the turnaround time for pickup and delivery?',
    answer: 'Standard Wash & Fold and Steam Pressing orders are delivered back to your doorstep within 24 hours. Organic Dry Cleaning and Sneaker Restorations take 48 to 72 hours for thorough drying and quality inspection.',
  },
  {
    category: 'CONDO & HIGH-RISE CONCIERGE',
    question: 'How do pickups work for high-rise apartments and guarded condominiums?',
    answer: 'Our couriers can pick up directly from your unit front door, or from your building lobby / guardhouse security desk if you prefer contactless drop-off. You can specify driver instructions in the booking form.',
  },
  {
    category: 'SORTING & PREPARATION',
    question: 'Do I need to weigh or separate my clothes before handing them over?',
    answer: 'No preparation needed! Simply gather your garments in any bag or hamper. Our team weighs your load on calibrated digital scales at our studio and sorts items by fabric type, color tone, and wash temperature.',
  },
  {
    category: 'HYGIENE & ECO SAFETY',
    question: 'Are your cleaning products safe for sensitive skin, infants, and pets?',
    answer: '100% safe. We strictly use hypoallergenic organic enzyme detergents and zero toxic perchloroethylene (PCE) solvents. Every wash cycle concludes with a demineralized water rinse to eliminate irritants.',
  },
  {
    category: 'STAIN TREATMENT',
    question: 'What if my clothes have stubborn stains (wine, coffee, oil, ink)?',
    answer: 'Every garment is inspected under 5000K daylight lamps. Stains are pre-treated using specialized organic spot lifters tailored to protein, tannin, or oil-based soils before entering the main cleaning cycle.',
  },
  {
    category: 'PAYMENT & BILLING',
    question: 'What payment methods do you accept?',
    answer: 'We accept DuitNow QR, major credit/debit cards, Touch n Go eWallet, and online FPX bank transfers upon delivery confirmation.',
  },
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0D0D0E] swiss-border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 swiss-border-b pb-8">
          <div>
            <div className="font-mono text-xs text-[#888880] tracking-widest uppercase mb-2">
              [06] KNOWLEDGE BASE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#F3F3F1] uppercase">
              FREQUENTLY ASKED.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A0A09A]">
            <span>[ CLEAR ANSWERS TO YOUR GARMENT QUESTIONS ]</span>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4 font-mono">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#141416] border border-[#26262A] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#18181A] transition-colors cursor-pointer"
                  id={`faq-toggle-${idx}`}
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <div className="text-[10px] text-emerald-400 font-bold tracking-widest">
                      {faq.category}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#F3F3F1]">
                      {faq.question}
                    </div>
                  </div>

                  <div className="p-2 bg-[#0D0D0E] border border-[#26262A] text-[#F3F3F1] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs text-[#A0A09A] font-sans font-light leading-relaxed border-t border-[#26262A]/60 bg-[#0D0D0E]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
