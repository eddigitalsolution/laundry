import React from 'react';
import { ServiceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItemWithImage extends ServiceItem {
  image: string;
}

const SERVICES: ServiceItemWithImage[] = [
  {
    id: 'wash-fold',
    code: 'SVC-01',
    title: 'WASH & FOLD',
    category: 'DAILY WEAR CARE',
    turnaround: '24 HOURS',
    pricePerKgOrItem: 'RM 8.00 / KG',
    description: 'Everyday casual wear, t-shirts, towels, and gym apparel washed in eco-detergents, tumble dried at low temperature, and precision folded.',
    features: ['Min 5 kg per order', 'Hypoallergenic detergent', 'Sorted by fabric & color', 'Delivered in sealed eco-bags'],
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dry-clean',
    code: 'SVC-02',
    title: 'ORGANIC DRY CLEAN',
    category: 'LUXURY & FORMAL',
    turnaround: '48 HOURS',
    pricePerKgOrItem: 'FROM RM 25.00 / ITEM',
    description: 'Solvent-free organic dry cleaning for tailored suits, wool coats, silk dresses, and delicate cashmere knitwear without harsh chemical smells.',
    features: ['Zero toxic PCE solvents', 'Individual garment bag', 'Hand-finish inspection', 'Fabric longevity protection'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'steam-press',
    code: 'SVC-03',
    title: 'ARTISAN STEAM PRESS',
    category: 'BUSINESS SHIRTS',
    turnaround: '24 HOURS',
    pricePerKgOrItem: 'RM 12.00 / SHIRT',
    description: 'High-pressure vacuum steam pressing for business Oxford shirts and formal trousers. Sharp creases with zero fabric shine residue.',
    features: ['Collars & cuffs reinforced', 'Choice of hanger or folded', 'Crisp arm crease option', 'Zero shine technology'],
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sneaker-lab',
    code: 'SVC-04',
    title: 'SNEAKER RESTORATION',
    category: 'FOOTWEAR CARE',
    turnaround: '72 HOURS',
    pricePerKgOrItem: 'FROM RM 45.00 / PAIR',
    description: 'Hand cleaning for leather, suede, canvas, and knit sneakers. Deep midsole scrub, lace washing, and UV-C antibacterial deodorization.',
    features: ['Deep sole & upper scrub', 'Suede fiber conditioning', 'UV-C sterilization sweep', 'Water repellent coating'],
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'household-linens',
    code: 'SVC-05',
    title: 'BEDDING & HOUSEHOLD',
    category: 'BULKY TEXTILES',
    turnaround: '48 HOURS',
    pricePerKgOrItem: 'FROM RM 35.00 / PIECE',
    description: 'Deep thermal washing and dust-mite sanitization for duvets, comforters, heavy curtains, bedsheets, and sofa covers.',
    features: ['99.9% dust mite elimination', 'High-capacity drum wash', 'Fresh lavender eco-mist', 'Vacuum-sealed storage options'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
  },
];

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-24 bg-[#0D0D0E] swiss-border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 swiss-border-b pb-8">
          <div>
            <div className="font-mono text-xs text-[#888880] tracking-widest uppercase mb-2">
              [02] GARMENT CARE MENU
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#F3F3F1] uppercase">
              SERVICES & SPECIFICATIONS.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A0A09A]">
            <span>[ ALL SERVICES INCLUDE DOORSTEP PICKUP & DELIVERY ]</span>
          </div>
        </div>

        {/* Modular Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26262A] border border-[#26262A]">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-[#0D0D0E] p-8 flex flex-col justify-between hover:bg-[#141416] transition-all group relative overflow-hidden"
            >
              <div>
                {/* Real Service Photography Preview */}
                <div className="w-full h-36 mb-6 overflow-hidden border border-[#26262A] relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-2 left-2 px-2 py-0.5 border border-[#26262A] bg-[#0D0D0E]/90 text-[10px] font-mono text-[#F3F3F1]">
                    {s.code}
                  </div>
                  <div className="absolute top-2 right-2 text-[10px] font-mono font-bold text-emerald-400 bg-[#0D0D0E]/90 px-2 py-0.5 border border-[#26262A]">
                    {s.turnaround}
                  </div>
                </div>

                <div className="font-mono text-[10px] text-[#888880] tracking-widest uppercase mb-1">
                  {s.category}
                </div>

                <h3 className="text-2xl font-bold font-mono text-[#F3F3F1] mb-3 group-hover:text-white transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs text-[#A0A09A] font-light leading-relaxed mb-6">
                  {s.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8 border-t border-[#26262A] pt-4 font-mono text-[11px] text-[#888880]">
                  {s.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#F3F3F1]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Booking Trigger */}
              <div className="pt-4 border-t border-[#26262A] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-[#888880]">RATE</div>
                  <div className="font-mono text-sm font-bold text-[#F3F3F1]">{s.pricePerKgOrItem}</div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="p-3 bg-[#18181A] border border-[#26262A] text-[#F3F3F1] hover:bg-[#F3F3F1] hover:text-[#0D0D0E] transition-all group-hover:border-[#F3F3F1] cursor-pointer"
                  id={`service-book-${s.id}`}
                  aria-label={`Book ${s.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Custom Requirement Card */}
          <div className="bg-[#18181A] p-8 flex flex-col justify-between border border-[#26262A] relative">
            <div>
              <div className="font-mono text-xs text-amber-400 mb-6">[ CUSTOM ORDER ]</div>
              <h3 className="text-2xl font-bold font-mono text-[#F3F3F1] mb-3">
                COMMERCIAL & HAUTE COUTURE
              </h3>
              <p className="text-xs text-[#A0A09A] font-light leading-relaxed mb-6">
                Specialized handling for fashion shows, boutique hotels, bridal wear, leather restoration, and bulk corporate laundry contracts.
              </p>
            </div>

            <a
              href="https://wa.me/601130719502?text=Hello%20BLANC%20Laundry,%20I%20have%20a%20custom/corporate%20laundry%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#F3F3F1] text-[#0D0D0E] font-mono text-xs font-bold py-3 text-center hover:bg-white transition-all flex items-center justify-center gap-2"
              id="service-custom-inquiry"
            >
              <span>INQUIRE VIA WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
