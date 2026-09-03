import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignatureProcess } from './components/SignatureProcess';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { PricingCalculator } from './components/PricingCalculator';
import { QualityManifesto } from './components/QualityManifesto';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { PickupModal } from './components/PickupModal';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0E] text-[#F3F3F1] relative selection:bg-[#E2E2DE] selection:text-[#0D0D0E]">
      {/* Fixed Navigation Header */}
      <Header onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />
        <SignatureProcess />
        <Services onOpenBooking={() => setIsBookingModalOpen(true)} />
        <HowItWorks onOpenBooking={() => setIsBookingModalOpen(true)} />
        <PricingCalculator />
        <QualityManifesto />
        <FAQ />
        <CTA onOpenBooking={() => setIsBookingModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Interactive Booking Modal */}
      <PickupModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;
