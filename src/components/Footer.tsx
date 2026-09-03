import React from 'react';
import { Shirt, PhoneCall, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#09090A] text-[#888880] swiss-border-t font-mono text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 swiss-border-b">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F3F3F1] text-[#0D0D0E] flex items-center justify-center font-bold">
                <Shirt className="w-4 h-4" />
              </div>
              <span className="font-mono font-black text-lg text-[#F3F3F1] tracking-widest">
                BLANC<span className="text-[#888880] font-light">.LNDR</span>
              </span>
            </div>
            <p className="text-[11px] font-sans font-light text-[#A0A09A] leading-relaxed">
              Swiss minimalist garment care studio. We make dirty disappear through organic dry cleaning, eco-wash, and 4.5 bar steam pressing.
            </p>
            <div className="text-[10px] text-[#A0A09A]">
              EST. 2026 / KUALA LUMPUR, MALAYSIA
            </div>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-[#F3F3F1] uppercase tracking-wider mb-2">
              CONTACT & DISPATCH
            </div>
            <a
              href="https://wa.me/601130719502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 font-bold hover:underline"
              id="footer-whatsapp-link"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+60 11-3071 9502</span>
            </a>
            <div className="text-[11px] text-[#A0A09A]">
              WhatsApp Concierge Response &lt; 5 Minutes
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#A0A09A] pt-2">
              <Clock className="w-3.5 h-3.5 text-[#F3F3F1]" />
              <span>DAILY 08:00 - 22:00</span>
            </div>
          </div>

          {/* Service Coverage */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-[#F3F3F1] uppercase tracking-wider mb-2">
              COVERAGE RADIUS
            </div>
            <ul className="space-y-1 text-[11px] text-[#A0A09A]">
              <li>• KUALA LUMPUR CITY CENTRE (KLCC)</li>
              <li>• BANGSAR & BUKIT DAMANSARA</li>
              <li>• MONT KIARA & SRI HARTAMAS</li>
              <li>• PETALING JAYA & SUBANG JAYA</li>
              <li>• AMPANG & CHERAS</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-[#F3F3F1] uppercase tracking-wider mb-2">
              GARMENT CARE SPEC
            </div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#F3F3F1] text-left cursor-pointer">
                  → SCHEDULE DOORSTEP PICKUP
                </button>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F3F3F1]">
                  → EXPLORE THE SHIRT JOURNEY
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3F3F1]">
                  → VIEW RATES & SERVICES
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#F3F3F1]">
                  → CALCULATE ESTIMATE TALLY
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#888880]">
          <div>
            © 2026 BLANC GARMENT CARE STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};
