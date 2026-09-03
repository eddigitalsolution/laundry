import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BookingFormData } from '../types';

interface PickupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PickupModal: React.FC<PickupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    pickupDate: 'TODAY (EXPRESS)',
    timeSlot: '14:00 - 17:00 (AFTERNOON)',
    serviceType: 'WASH & FOLD (RM 8/KG)',
    estimatedWeightKg: 5,
    specialInstructions: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = encodeURIComponent(
      `Hello BLANC Laundry! I have submitted a pickup booking:\n\n` +
        `👤 Name: ${formData.name}\n` +
        `📞 Phone: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `📍 Address: ${formData.address}\n` +
        `📅 Date: ${formData.pickupDate}\n` +
        `⏰ Time Slot: ${formData.timeSlot}\n` +
        `🧺 Service: ${formData.serviceType}\n` +
        `⚖️ Est Weight: ${formData.estimatedWeightKg} kg\n` +
        `📝 Notes: ${formData.specialInstructions || 'None'}\n\n` +
        `Please confirm my doorstep pickup!`
    );

    // Open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(`https://wa.me/601130719502?text=${text}`, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0D0D0E] border border-[#26262A] w-full max-w-2xl p-6 sm:p-8 relative my-8 text-[#F3F3F1] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#18181A] border border-[#26262A] text-[#888880] hover:text-[#F3F3F1] hover:bg-[#26262A] transition-all cursor-pointer"
          id="pickup-modal-close"
          aria-label="Close pickup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-[#26262A] pb-4">
          <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-1">
            [ 24H DOORSTEP CONCIERGE ]
          </div>
          <h3 className="text-2xl font-black font-mono tracking-tight uppercase text-[#F3F3F1]">
            SCHEDULE LAUNDRY PICKUP
          </h3>
          <p className="text-xs text-[#A0A09A] font-light mt-1">
            Our courier arrives with tagged hampers. Doorstep pickup across Kuala Lumpur & Selangor.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 font-mono">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#F3F3F1]">BOOKING DISPATCHED TO WHATSAPP</h4>
            <p className="text-xs text-[#A0A09A] max-w-md mx-auto">
              Redirecting you to WhatsApp Business (+60 11-3071 9502) to finalize your pickup confirmation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-[#F3F3F1] text-[#0D0D0E] text-xs font-bold px-6 py-2"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pickup-input-name" className="block text-[10px] text-[#888880] uppercase mb-1">
                  FULL NAME *
                </label>
                <input
                  id="pickup-input-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Alexander Vance"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="pickup-input-phone" className="block text-[10px] text-[#888880] uppercase mb-1">
                  PHONE / WHATSAPP NUMBER *
                </label>
                <input
                  id="pickup-input-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. +60 12 345 6789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                />
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pickup-input-email" className="block text-[10px] text-[#888880] uppercase mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  id="pickup-input-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="pickup-input-address" className="block text-[10px] text-[#888880] uppercase mb-1">
                  PICKUP ADDRESS (KL / SELANGOR) *
                </label>
                <input
                  id="pickup-input-address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder="Unit, Condo/Building, Street Name"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                />
              </div>
            </div>

            {/* Quick Location Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] text-[#888880] mr-1">QUICK AREA:</span>
              {['KLCC', 'Bangsar', 'Mont Kiara', 'Damansara', 'Petaling Jaya', 'Subang'].map((chip) => (
                <button
                  type="button"
                  key={chip}
                  onClick={() => setFormData((prev) => ({ ...prev, address: `${prev.address ? prev.address + ', ' : ''}${chip}` }))}
                  className="text-[10px] bg-[#18181A] border border-[#26262A] px-2 py-0.5 text-[#A0A09A] hover:text-[#F3F3F1] hover:border-[#F3F3F1] cursor-pointer"
                >
                  +{chip}
                </button>
              ))}
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label htmlFor="pickup-select-date" className="block text-[10px] text-[#888880] uppercase mb-1">
                  PREFERRED PICKUP DATE *
                </label>
                <select
                  id="pickup-select-date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                >
                  <option value="TODAY (EXPRESS)">TODAY (EXPRESS)</option>
                  <option value="TOMORROW">TOMORROW</option>
                  <option value="IN 2 DAYS">IN 2 DAYS</option>
                  <option value="THIS WEEKEND">THIS WEEKEND</option>
                </select>
              </div>

              <div>
                <label htmlFor="pickup-select-timeslot" className="block text-[10px] text-[#888880] uppercase mb-1">
                  2-HOUR TIME WINDOW *
                </label>
                <select
                  id="pickup-select-timeslot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                >
                  <option value="09:00 - 12:00 (MORNING)">09:00 - 12:00 (MORNING)</option>
                  <option value="14:00 - 17:00 (AFTERNOON)">14:00 - 17:00 (AFTERNOON)</option>
                  <option value="19:00 - 21:00 (EVENING)">19:00 - 21:00 (EVENING)</option>
                </select>
              </div>
            </div>

            {/* Service & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label htmlFor="pickup-select-service" className="block text-[10px] text-[#888880] uppercase mb-1">
                  PRIMARY SERVICE *
                </label>
                <select
                  id="pickup-select-service"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                >
                  <option value="WASH & FOLD (RM 8/KG)">WASH & FOLD (RM 8/KG)</option>
                  <option value="ORGANIC DRY CLEAN (FROM RM 25)">ORGANIC DRY CLEAN (FROM RM 25)</option>
                  <option value="ARTISAN STEAM PRESS (RM 12/SHIRT)">ARTISAN STEAM PRESS (RM 12/SHIRT)</option>
                  <option value="SNEAKER RESTORATION (RM 45/PAIR)">SNEAKER RESTORATION (RM 45/PAIR)</option>
                  <option value="BULKY BEDDING (RM 35/PIECE)">BULKY BEDDING (RM 35/PIECE)</option>
                </select>
              </div>

              <div>
                <label htmlFor="pickup-input-weight" className="block text-[10px] text-[#888880] uppercase mb-1">
                  ESTIMATED WEIGHT (KG)
                </label>
                <input
                  id="pickup-input-weight"
                  name="estimatedWeightKg"
                  type="number"
                  min="1"
                  max="100"
                  value={formData.estimatedWeightKg}
                  onChange={handleChange}
                  className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pickup-textarea-notes" className="block text-[10px] text-[#888880] uppercase mb-1">
                SPECIAL GARMENT INSTRUCTIONS / STAIN NOTES
              </label>
              <textarea
                id="pickup-textarea-notes"
                name="specialInstructions"
                rows={2}
                placeholder="e.g. Delicates in separate mesh bag, stain on left sleeve of white shirt."
                value={formData.specialInstructions}
                onChange={handleChange}
                className="w-full bg-[#141416] border border-[#26262A] p-3 text-[#F3F3F1] focus:border-[#F3F3F1] focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#F3F3F1] text-[#0D0D0E] font-bold py-4 text-sm tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                id="pickup-form-submit"
              >
                <span>CONFIRM PICKUP & SYNC WITH WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
