import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProcessStage, ProcessStageId } from '../types';

const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'DIRTY',
    label: 'DIRTY',
    subLabel: 'COLLECTION & INSPECTION',
    stepNumber: '01',
    description: 'Garments arrive with everyday urban stains, organic oils, and fabric creasing. Each item undergoes micro-inspection under 5000K daylight simulation.',
    technicalDetails: 'Stain mapping across collar, cuffs, and underarms using non-invasive UV spectrum.',
    metrics: [
      { label: 'SOIL RATING', value: 'CLASS 4' },
      { label: 'FABRIC TENSION', value: 'UNEVEN' },
      { label: 'HYGIENE SCORE', value: '42%' },
    ],
    visualTheme: {
      badgeBg: 'bg-amber-950/40 border-amber-800/40',
      badgeText: 'text-amber-400',
      shirtStateName: 'DIRTY / UNTREATED',
      accentColor: '#D97706',
    },
  },
  {
    id: 'WASH',
    label: 'WASH',
    subLabel: 'MOLECULAR SURFACTANT EXTRACTION',
    stepNumber: '02',
    description: 'Immersed in temperature-controlled demineralized water with biodegradable enzyme surfactants that lift grease without weakening cotton fibers.',
    technicalDetails: '30°C ultra-gentle reverse tumble cycle with acoustic bubble injection.',
    metrics: [
      { label: 'WATER PURITY', value: '< 5 PPM' },
      { label: 'ENZYME PH', value: '7.2 BALANCED' },
      { label: 'HYGIENE SCORE', value: '88%' },
    ],
    visualTheme: {
      badgeBg: 'bg-cyan-950/40 border-cyan-800/40',
      badgeText: 'text-cyan-400',
      shirtStateName: 'WASHING / SURFACTANT SUBMERGED',
      accentColor: '#06B6D4',
    },
  },
  {
    id: 'DRY',
    label: 'DRY',
    subLabel: 'LAMINAR HEAT AIRFLOW',
    stepNumber: '03',
    description: 'Gentle moisture extraction using humidity-sensing warm air circulation. Prevents fiber shrinkage while restoring natural cotton loft.',
    technicalDetails: '45°C constant velocity humidity sensor cutoff at exactly 4% residual dampness.',
    metrics: [
      { label: 'AIR VELOCITY', value: '14 M/S' },
      { label: 'TEMP CONTROL', value: '45°C STABLE' },
      { label: 'HYGIENE SCORE', value: '96%' },
    ],
    visualTheme: {
      badgeBg: 'bg-orange-950/40 border-orange-800/40',
      badgeText: 'text-orange-400',
      shirtStateName: 'DRYING / AIRFLOW THERMAL',
      accentColor: '#F97316',
    },
  },
  {
    id: 'FOLD',
    label: 'FOLD',
    subLabel: 'ARTISAN STEAM & CREASE ALIGNMENT',
    stepNumber: '04',
    description: 'High-pressure vacuum steam ironing followed by geometric precision folding. Collars reinforced with recycled archival cardboards.',
    technicalDetails: '120°C dry steam pressing at 4.5 bar pressure with zero shine residue.',
    metrics: [
      { label: 'STEAM BAR', value: '4.5 PRESSURE' },
      { label: 'FOLD ANGLE', value: '90.0° PERFECT' },
      { label: 'CREASE MATRIX', value: 'ALIGNED' },
    ],
    visualTheme: {
      badgeBg: 'bg-indigo-950/40 border-indigo-800/40',
      badgeText: 'text-indigo-400',
      shirtStateName: 'FOLDING / STEAM PRESSED',
      accentColor: '#818CF8',
    },
  },
  {
    id: 'CLEAN',
    label: 'CLEAN',
    subLabel: 'ARCHIVAL PACKAGING & RETURN',
    stepNumber: '05',
    description: 'Pristine shirt sealed in breathable dust-proof garment bags, tagged with RFID tracking, and prepped for 24-hour doorstep delivery.',
    technicalDetails: 'Final UV-C sterilization sweep before sealing in anti-static protective sleeve.',
    metrics: [
      { label: 'STERILITY', value: '99.99%' },
      { label: 'WRINKLE RATING', value: 'ZERO DEFECT' },
      { label: 'HYGIENE SCORE', value: '100%' },
    ],
    visualTheme: {
      badgeBg: 'bg-emerald-950/40 border-emerald-800/40',
      badgeText: 'text-emerald-400',
      shirtStateName: 'CLEAN / READY FOR DELIVERY',
      accentColor: '#10B981',
    },
  },
];

export const SignatureProcess: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<ProcessStageId>('DIRTY');
  const activeIndex = PROCESS_STAGES.findIndex((s) => s.id === activeStageId);
  const currentStage = PROCESS_STAGES[activeIndex];

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % PROCESS_STAGES.length;
    setActiveStageId(PROCESS_STAGES[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + PROCESS_STAGES.length) % PROCESS_STAGES.length;
    setActiveStageId(PROCESS_STAGES[prevIdx].id);
  };

  return (
    <section id="process" className="py-24 bg-[#0D0D0E] swiss-border-b relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section Tag */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 swiss-border-b pb-8">
          <div>
            <div className="font-mono text-xs text-[#888880] tracking-widest uppercase mb-2">
              [01] SIGNATURE SHIRT TRAVEL
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#F3F3F1] uppercase">
              THE SHIRT JOURNEY.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A0A09A] font-light mt-4 md:mt-0">
            Watch the shirt transform step-by-step from soiled urban garment to crisp archival perfection through our Swiss cleaning pipeline.
          </p>
        </div>

        {/* Step Selector Tab Navigation */}
        <div className="grid grid-cols-5 gap-px bg-[#26262A] border border-[#26262A] mb-8 font-mono text-xs">
          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`py-4 px-2 text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                  isActive
                    ? 'bg-[#18181A] text-[#F3F3F1] font-bold border-b-2 border-[#F3F3F1]'
                    : 'bg-[#0D0D0E] text-[#888880] hover:text-[#F3F3F1] hover:bg-[#141416]'
                }`}
                id={`process-tab-${stage.id.toLowerCase()}`}
              >
                <span className="text-[10px] text-[#A0A09A]">0{idx + 1}</span>
                <span className="tracking-wider">{stage.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#141416] border border-[#26262A] p-6 sm:p-10 relative">
          
          {/* Left Column: Stage Metadata & Typography */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2.5 py-1 text-xs font-mono font-bold border ${currentStage.visualTheme.badgeBg} ${currentStage.visualTheme.badgeText}`}>
                  STAGE {currentStage.stepNumber} // {currentStage.label}
                </span>
                <span className="text-xs font-mono text-[#888880]">
                  {activeIndex + 1} OF 5 STAGES
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-[#F3F3F1] mb-3">
                {currentStage.subLabel}
              </h3>

              <p className="text-sm text-[#A0A09A] font-light leading-relaxed mb-6">
                {currentStage.description}
              </p>

              <div className="p-4 bg-[#0D0D0E] border border-[#26262A] text-xs font-mono space-y-1">
                <div className="text-[#888880] font-bold">TECHNICAL SPECIFICATION:</div>
                <div className="text-[#F3F3F1]">{currentStage.technicalDetails}</div>
              </div>
            </div>

            {/* Metrics Matrix */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#26262A]">
              {currentStage.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#0D0D0E] p-3 border border-[#26262A]">
                  <div className="font-mono text-[9px] text-[#888880] uppercase tracking-wider">{m.label}</div>
                  <div className="font-mono text-sm font-bold text-[#F3F3F1] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Pure Text Step Switch Buttons (Zero Icons) */}
            <div className="flex items-center gap-4 pt-2 font-mono text-xs">
              <button
                onClick={handlePrev}
                className="px-5 py-2.5 bg-[#0D0D0E] border border-[#26262A] text-[#F3F3F1] hover:border-[#F3F3F1] transition-all cursor-pointer"
                id="process-btn-prev"
              >
                ← PREV STAGE
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-[#F3F3F1] text-[#0D0D0E] font-bold hover:bg-white transition-all cursor-pointer"
                id="process-btn-next"
              >
                NEXT STAGE →
              </button>
            </div>
          </div>

          {/* Right Column: Full-Screen Pure Photography Canvas (Zero Icons) */}
          <div className="lg:col-span-8 relative min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] bg-[#0D0D0E] border border-[#26262A] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            
            {/* Background Swiss Grid */}
            <div className="absolute inset-0 swiss-grid opacity-25 pointer-events-none"></div>

            {/* Dynamic Vignette Animations */}
            <AnimatePresence mode="wait">
              {activeStageId === 'DIRTY' && (
                <motion.div
                  key="dirty-fx"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none z-10"
                >
                  <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-amber-900/20 rounded-full filter blur-2xl"></div>
                </motion.div>
              )}

              {activeStageId === 'WASH' && (
                <motion.div
                  key="wash-fx"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none z-10"
                >
                  <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-[1px]"></div>
                </motion.div>
              )}

              {activeStageId === 'DRY' && (
                <motion.div
                  key="dry-fx"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none z-10"
                ></motion.div>
              )}

              {activeStageId === 'FOLD' && (
                <motion.div
                  key="fold-fx"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none z-10"
                ></motion.div>
              )}

              {activeStageId === 'CLEAN' && (
                <motion.div
                  key="clean-fx"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none z-10"
                ></motion.div>
              )}
            </AnimatePresence>

            {/* FULL SCREEN PURE PHOTOGRAPHY CONTAINER (ZERO ICONS) */}
            <motion.div
              key={activeStageId}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] overflow-hidden border border-[#26262A] shadow-2xl group"
            >
              {activeStageId === 'DIRTY' && (
                <div className="w-full h-full relative">
                  <img
                    src="/images/dirty_shirt.jpg"
                    alt="Stage 01 DIRTY Real Photo - BLANC Swiss Laundry"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent opacity-60"></div>
                </div>
              )}

              {activeStageId === 'WASH' && (
                <div className="w-full h-full relative">
                  <img
                    src="/images/wash_shirt.jpg"
                    alt="Stage 02 WASH Real Photo - BLANC Swiss Laundry"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-cyan-950/25 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent opacity-60"></div>
                </div>
              )}

              {activeStageId === 'DRY' && (
                <div className="w-full h-full relative">
                  <img
                    src="/images/dry_shirt.jpg"
                    alt="Stage 03 DRY Real Photo - BLANC Swiss Laundry"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent opacity-60"></div>
                </div>
              )}

              {activeStageId === 'FOLD' && (
                <div className="w-full h-full relative">
                  <img
                    src="/images/fold_shirt.jpg"
                    alt="Stage 04 FOLD Real Photo - BLANC Swiss Laundry"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-indigo-950/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent opacity-60"></div>
                </div>
              )}

              {activeStageId === 'CLEAN' && (
                <div className="w-full h-full relative">
                  <img
                    src="/images/clean_shirt.jpg"
                    alt="Stage 05 CLEAN Real Photo - BLANC Swiss Laundry"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent opacity-70"></div>
                </div>
              )}

              {/* Pure Monospaced Text Overlays (Zero Icons) */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[11px] font-mono z-20">
                <span className="bg-[#0D0D0E]/80 backdrop-blur-md px-3 py-1 border border-[#26262A] text-[#F3F3F1]">
                  SWISS LAB CANVASSING // FULL-CONTAINER VIEW
                </span>
                <span className={`px-3 py-1 font-bold border backdrop-blur-md ${currentStage.visualTheme.badgeBg} ${currentStage.visualTheme.badgeText}`}>
                  0{activeIndex + 1} / 05
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0E]/90 backdrop-blur-md border border-[#26262A] px-4 py-2.5 flex justify-between items-center text-xs font-mono z-20">
                <span className="text-[#A0A09A]">STATE: {currentStage.visualTheme.shirtStateName}</span>
                <span className={`font-bold ${currentStage.visualTheme.badgeText}`}>
                  STAGE {currentStage.stepNumber} COMPLIANT
                </span>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
