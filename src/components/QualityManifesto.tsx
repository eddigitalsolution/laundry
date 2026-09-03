import { ShieldCheck, Leaf, Flame, Cpu, RefreshCw } from 'lucide-react';

export const QualityManifesto: React.FC = () => {
  const manifestoItems = [
    {
      icon: Leaf,
      title: 'SOLVENT-FREE DRY CLEANING',
      spec: 'ZERO PERCHLOROETHYLENE (PCE)',
      description: 'We replace toxic carcinogenic petroleum solvents with biodegradable silicone & organic liquid CO2 processes. Safe for human skin and sensitive luxury fabrics.',
    },
    {
      icon: RefreshCw,
      title: 'CLOSED-LOOP WATER PURIFICATION',
      spec: '< 5 PPM TOTAL DISSOLVED SOLIDS',
      description: 'Demineralized reverse-osmosis water filtered after every cycle. Prevents mineral crusting, color fading, and harsh detergent residue in natural fibers.',
    },
    {
      icon: Flame,
      title: '4.5 BAR VACUUM STEAM PRESS',
      spec: 'ZERO SHINE & ZERO SCORCH',
      description: 'Hand-pressed with Italian vacuum steam tables. Maintains structural shoulder canvassing in suits and delivers razor-sharp sleeve creases without shine.',
    },
    {
      icon: Cpu,
      title: 'RFID GARMENT TRACKING',
      spec: '100% CHAIN OF CUSTODY',
      description: 'Every garment is tagged with passive micro-RFID chips upon collection. Instant location tracking from hamper collection to doorstep delivery.',
    },
  ];

  return (
    <section className="py-24 bg-[#0D0D0E] swiss-border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 swiss-border-b pb-8">
          <div>
            <div className="font-mono text-xs text-[#888880] tracking-widest uppercase mb-2">
              [05] ARCHITECTURAL SPECIFICATIONS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#F3F3F1] uppercase">
              QUALITY MANIFESTO.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#A0A09A]">
            <span>[ SWISS HYGIENE & FABRIC PROTECTION GUARANTEE ]</span>
          </div>
        </div>

        {/* 4-Column Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#26262A] border border-[#26262A]">
          {manifestoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#0D0D0E] p-8 flex flex-col justify-between hover:bg-[#141416] transition-all group">
                <div>
                  <div className="w-10 h-10 bg-[#18181A] border border-[#26262A] flex items-center justify-center text-[#F3F3F1] mb-6 group-hover:border-[#F3F3F1] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-wider mb-2">
                    {item.spec}
                  </div>

                  <h3 className="text-lg font-bold font-mono text-[#F3F3F1] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A0A09A] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#26262A] font-mono text-[9px] text-[#888880] flex items-center justify-between">
                  <span>STANDARD {idx + 1}.0</span>
                  <span className="text-[#F3F3F1]">ENFORCED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 p-6 bg-[#141416] border border-[#26262A] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-[#F3F3F1]">
              FULL GARMENT REPLACEMENT GUARANTEE: Insured care for designer apparel and luxury textiles up to RM 5,000 per piece.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
