import { useState } from 'react';
import { PhoneCall, Plus, Minus, Check } from 'lucide-react';

interface PricingItem {
  id: string;
  name: string;
  unitPrice: number;
  unit: string;
  count: number;
}

export const PricingCalculator: React.FC = () => {
  const [items, setItems] = useState<PricingItem[]>([
    { id: 'wash-fold', name: 'Wash & Fold (Daily Wear)', unitPrice: 8, unit: 'kg', count: 5 },
    { id: 'business-shirts', name: 'Business Shirts (Steam Pressed)', unitPrice: 12, unit: 'pcs', count: 3 },
    { id: 'suits', name: 'Luxury Suit (Dry Clean)', unitPrice: 35, unit: 'sets', count: 0 },
    { id: 'sneakers', name: 'Sneakers (Deep Clean)', unitPrice: 45, unit: 'pairs', count: 0 },
    { id: 'duvet', name: 'King Duvet / Comforter', unitPrice: 38, unit: 'pcs', count: 0 },
  ]);

  const updateCount = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newCount = Math.max(0, item.count + delta);
          return { ...item, count: newCount };
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce((acc, item) => acc + item.count * item.unitPrice, 0);
  const deliveryFee = subtotal >= 40 ? 0 : 8;
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;

  const whatsappMessage = encodeURIComponent(
    `Hello BLANC Laundry! I calculated my estimated order:\n` +
      items
        .filter((i) => i.count > 0)
        .map((i) => `• ${i.name}: ${i.count} ${i.unit} (RM ${i.count * i.unitPrice})`)
        .join('\n') +
      `\n\nSubtotal: RM ${subtotal}\nDelivery: ${deliveryFee === 0 ? 'FREE' : 'RM 8'}\nEstimated Total: RM ${total}\n\nI would like to schedule a pickup!`
  );

  return (
    <section id="pricing" className="py-24 bg-[#0D0D0E] swiss-border-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 swiss-border-b pb-8">
          <div>
            <div className="font-mono text-xs text-[#888880] tracking-widest uppercase mb-2">
              [04] TRANSPARENT TARIFFS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#F3F3F1] uppercase">
              PRICING CALCULATOR.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-emerald-400">
            <span>[ FREE DELIVERY ON ORDERS OVER RM 40 ]</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#141416] border border-[#26262A] p-6 sm:p-10">
          
          {/* Left Column: Interactive Sliders & Counters */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs text-[#888880] uppercase tracking-wider mb-2">
              SELECT GARMENT QUANTITIES & WEIGHT
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0D0D0E] border border-[#26262A] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs"
                >
                  <div>
                    <div className="font-bold text-[#F3F3F1]">{item.name}</div>
                    <div className="text-[10px] text-[#888880] mt-0.5">
                      RM {item.unitPrice} per {item.unit}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-[#18181A] border border-[#26262A]">
                      <button
                        onClick={() => updateCount(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-[#F3F3F1] hover:bg-[#26262A] transition-colors cursor-pointer"
                        id={`pricing-minus-${item.id}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-12 text-center font-bold text-[#F3F3F1]">
                        {item.count} <span className="text-[10px] text-[#888880]">{item.unit}</span>
                      </span>
                      <button
                        onClick={() => updateCount(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#F3F3F1] hover:bg-[#26262A] transition-colors cursor-pointer"
                        id={`pricing-plus-${item.id}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="w-20 text-right font-bold text-[#F3F3F1]">
                      RM {item.count * item.unitPrice}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#0D0D0E] border border-[#26262A] font-mono text-[11px] text-[#888880] flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Prices include anti-bacterial wash, steam finish, and eco-packaging.</span>
            </div>
          </div>

          {/* Right Column: Order Summary & WhatsApp Dispatch */}
          <div className="lg:col-span-5 bg-[#0D0D0E] border border-[#26262A] p-6 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[#888880] uppercase tracking-wider mb-4 border-b border-[#26262A] pb-2">
                ESTIMATED RECEIPT TALLY
              </div>

              {/* Selected Breakdown */}
              <div className="space-y-2 mb-6 max-h-48 overflow-y-auto pr-1">
                {items.filter((i) => i.count > 0).length === 0 ? (
                  <div className="text-xs font-mono text-[#888880] py-8 text-center">
                    Select quantities on the left to compute instant estimate.
                  </div>
                ) : (
                  items
                    .filter((i) => i.count > 0)
                    .map((i) => (
                      <div key={i.id} className="flex justify-between items-center font-mono text-xs">
                        <span className="text-[#A0A09A]">
                          {i.name} × {i.count} {i.unit}
                        </span>
                        <span className="text-[#F3F3F1]">RM {i.count * i.unitPrice}</span>
                      </div>
                    ))
                )}
              </div>

              {/* Calculations */}
              <div className="border-t border-[#26262A] pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between text-[#888880]">
                  <span>SUBTOTAL</span>
                  <span>RM {subtotal}</span>
                </div>
                <div className="flex justify-between text-[#888880]">
                  <span>DOORSTEP DELIVERY</span>
                  <span className={deliveryFee === 0 ? 'text-emerald-400 font-bold' : ''}>
                    {deliveryFee === 0 ? 'FREE (PROMO)' : `RM ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#F3F3F1] pt-2 border-t border-[#26262A]">
                  <span>ESTIMATED TOTAL</span>
                  <span className="text-emerald-400">RM {total}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-6 space-y-3">
              <a
                href={`https://wa.me/601130719502?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full font-mono text-xs font-bold py-4 px-4 flex items-center justify-center gap-2 transition-all ${
                  total > 0
                    ? 'bg-emerald-500 text-[#0D0D0E] hover:bg-emerald-400 cursor-pointer shadow-lg'
                    : 'bg-[#18181A] text-[#888880] cursor-not-allowed border border-[#26262A]'
                }`}
                id="pricing-whatsapp-dispatch"
              >
                <PhoneCall className="w-4 h-4" />
                <span>SEND ORDER ESTIMATE TO WHATSAPP</span>
              </a>

              <div className="text-[10px] font-mono text-[#888880] text-center">
                OFFICIAL WHATSAPP BUSINESS: +60 11-3071 9502
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
