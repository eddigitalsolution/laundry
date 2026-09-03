import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShieldCheck, Clock, Leaf } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 25,
        y: (e.clientY / innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden swiss-grid swiss-border-b"
    >
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 sm:grid-cols-6 max-w-7xl mx-auto px-4 opacity-15">
        <div className="border-r border-[#F3F3F1]"></div>
        <div className="border-r border-[#F3F3F1]"></div>
        <div className="border-r border-[#F3F3F1]"></div>
        <div className="border-r border-[#F3F3F1] hidden sm:block"></div>
        <div className="border-r border-[#F3F3F1] hidden sm:block"></div>
      </div>

      {/* Top Monospaced Metadata Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] font-mono text-[#888880] uppercase tracking-widest pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>EST. 2026 // SWISS GARMENT CARE ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>[ LAT: 3.1390° N, LON: 101.6869° E ]</span>
            <span className="hidden md:inline-block text-[#F3F3F1] font-bold">[ 24H EXPRESS TURNAROUND ]</span>
          </div>
        </div>
      </div>

      {/* Centered Main Hero Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Huge Swiss Typography Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181A] border border-[#26262A] text-[10px] font-mono text-emerald-400 mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PRECISION ECO-LAUNDRY & ORGANIC DRY CLEANING</span>
            </div>

            <h1 className="text-[12vw] sm:text-[11vw] lg:text-[9.5vw] font-black tracking-tighter leading-[0.85] uppercase text-[#F3F3F1] font-mono select-none">
              WE MAKE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#F3F3F1] to-[#888880]">
                DIRTY
              </span>{' '}
              DISAPPEAR.
            </h1>
          </motion.div>

          {/* Centered Single Real Shirt Photograph (3D Tilt) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
            }}
            className="relative my-8 sm:my-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center group cursor-pointer"
            onClick={onOpenBooking}
          >
            {/* Ambient Backlight Aura */}
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>

            {/* Rotating Matrix Ring */}
            <div className="absolute inset-2 border border-[#F3F3F1]/15 rounded-full animate-[spin_35s_linear_infinite] pointer-events-none"></div>

            {/* Center Real Shirt Photo Frame */}
            <div className="relative w-full h-full bg-[#141416]/90 border border-[#26262A] p-4 shadow-2xl transition-all duration-500 group-hover:border-[#F3F3F1]/50 flex flex-col justify-between overflow-hidden">
              
              {/* Header Monospaced Tag */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[#888880] border-b border-[#26262A] pb-2 z-10">
                <span>SPEC: OXFORD 100% COTTON</span>
                <span className="text-emerald-400 font-bold">[ PRISTINE REAL PHOTO ]</span>
              </div>

              {/* Real High-Resolution Shirt Photo */}
              <div className="relative w-full h-48 sm:h-64 my-auto overflow-hidden border border-[#26262A]">
                <img
                  src="/images/dry_shirt.jpg"
                  alt="Real Pristine Oxford Dress Shirt"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Footer Spec Bar */}
              <div className="pt-2 border-t border-[#26262A] flex justify-between items-center text-[10px] font-mono text-[#888880] z-10">
                <span>REAL PHOTOGRAPHY // SWISS LAB</span>
                <span className="text-[#F3F3F1] font-bold">SCHEDULE PICKUP →</span>
              </div>

            </div>
          </motion.div>

          {/* Subtitle & Immediate Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl text-center space-y-5"
          >
            <p className="text-xs sm:text-sm text-[#A0A09A] font-light leading-relaxed">
              Precision garment washing, solvent-free eco dry cleaning, and hand-pressed perfection. Doorstep pickup and 24-hour delivery across KL & Selangor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 font-mono text-xs">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-[#F3F3F1] text-[#0D0D0E] font-bold px-8 py-3.5 hover:bg-white transition-all shadow-xl cursor-pointer"
                id="hero-cta-pickup"
              >
                SCHEDULE PICKUP — FREE DELIVERY
              </button>

              <a
                href="#process"
                className="w-full sm:w-auto border border-[#26262A] bg-[#141416] text-[#F3F3F1] font-bold px-6 py-3.5 hover:border-[#F3F3F1] transition-all flex items-center justify-center gap-2"
                id="hero-cta-journey"
              >
                <span>EXPLORE SHIRT JOURNEY</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Key Feature Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#26262A] border border-[#26262A]">
          <div className="bg-[#0D0D0E] p-4 flex items-center gap-3">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="font-mono text-xs font-bold text-[#F3F3F1]">24H DOORSTEP RETURN</div>
              <div className="text-[10px] text-[#888880]">Same-day pickup, next-day delivery</div>
            </div>
          </div>
          <div className="bg-[#0D0D0E] p-4 flex items-center gap-3">
            <Leaf className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="font-mono text-xs font-bold text-[#F3F3F1]">ORGANIC SURFACTANTS</div>
              <div className="text-[10px] text-[#888880]">Zero toxic PCE solvents used</div>
            </div>
          </div>
          <div className="bg-[#0D0D0E] p-4 flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
            <div>
              <div className="font-mono text-xs font-bold text-[#F3F3F1]">GARMENT GUARANTEE</div>
              <div className="text-[10px] text-[#888880]">Insured care for luxury fabrics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
