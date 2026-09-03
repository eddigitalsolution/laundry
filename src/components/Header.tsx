import React, { useState, useEffect } from 'react';
import { Shirt, ArrowUpRight, Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0D0E]/90 backdrop-blur-md swiss-border-b py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            id="header-brand-logo"
          >
            <div className="w-7 h-7 bg-[#F3F3F1] text-[#0D0D0E] flex items-center justify-center font-mono font-bold text-xs">
              <Shirt className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="font-extrabold text-base tracking-widest text-[#F3F3F1]">
                BLANC
              </span>
              <span className="text-[10px] text-[#888880] tracking-widest uppercase">
                / GARMENT CARE
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
            <a
              href="#process"
              className="text-[#A0A09A] hover:text-[#F3F3F1] transition-colors"
              id="nav-link-process"
            >
              PROCESS
            </a>
            <a
              href="#services"
              className="text-[#A0A09A] hover:text-[#F3F3F1] transition-colors"
              id="nav-link-services"
            >
              SERVICES
            </a>
            <a
              href="#pricing"
              className="text-[#A0A09A] hover:text-[#F3F3F1] transition-colors"
              id="nav-link-pricing"
            >
              PRICING
            </a>
            <a
              href="#faq"
              className="text-[#A0A09A] hover:text-[#F3F3F1] transition-colors"
              id="nav-link-faq"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action & WhatsApp Dispatch */}
          <div className="hidden lg:flex items-center gap-5 font-mono text-xs">
            <a
              href="https://wa.me/601130719502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#A0A09A] hover:text-emerald-400 transition-colors"
              id="header-whatsapp-direct"
              aria-label="Contact WhatsApp +60 11-3071 9502"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>+60 11-3071 9502</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-[#F3F3F1] text-[#0D0D0E] font-bold px-4 py-2 hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
              id="header-btn-book-pickup"
            >
              <span>SCHEDULE PICKUP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F3F3F1] p-2 bg-[#18181A] border border-[#26262A]"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 bg-[#141416] border border-[#26262A] flex flex-col gap-4 font-mono text-xs tracking-wider">
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A0A09A] hover:text-[#F3F3F1] py-1"
            >
              PROCESS
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A0A09A] hover:text-[#F3F3F1] py-1"
            >
              SERVICES
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A0A09A] hover:text-[#F3F3F1] py-1"
            >
              PRICING
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A0A09A] hover:text-[#F3F3F1] py-1"
            >
              FAQ
            </a>
            <div className="pt-3 border-t border-[#26262A] flex flex-col gap-3">
              <a
                href="https://wa.me/601130719502"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>+60 11-3071 9502 (WhatsApp)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#F3F3F1] text-[#0D0D0E] font-bold py-3 text-center"
              >
                SCHEDULE PICKUP
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
