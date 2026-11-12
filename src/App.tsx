import React, { useState } from 'react';
import { AmbientFlagsBg } from './components/AmbientFlagsBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfiniteFlagMarquee } from './components/InfiniteFlagMarquee';
import { VisaProcessTimeline } from './components/VisaProcessTimeline';
import { InternationalCorridors } from './components/InternationalCorridors';
import { DomesticShowcase } from './components/DomesticShowcase';
import { AboutConcierge } from './components/AboutConcierge';
import { InquirySection } from './components/InquirySection';
import { InquiryModal } from './components/InquiryModal';
import { FloatingCTA } from './components/FloatingCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<{
    interestType?: 'international' | 'domestic' | 'both';
    countryOrCircuit?: string;
  }>({
    interestType: 'international',
    countryOrCircuit: '',
  });

  const [selectedCorridorId, setSelectedCorridorId] = useState<string>('all');

  const handleOpenInquiry = (initialData?: {
    interestType?: 'international' | 'domestic' | 'both';
    countryOrCircuit?: string;
  }) => {
    if (initialData) {
      setModalInitialData(initialData);
    } else {
      setModalInitialData({ interestType: 'international', countryOrCircuit: '' });
    }
    setModalOpen(true);
  };

  const handleSelectCountryFromMarquee = (countryId: string) => {
    setSelectedCorridorId(countryId);
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-ivory-100 selection:bg-gold-500 selection:text-obsidian-950">
      {/* 1. Ambient Floating Parallax Translucent Flags Layer */}
      <AmbientFlagsBg />

      {/* 2. Floating Glassmorphic Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* 3. Hero Section (Full Viewport Pure Screen Flow) */}
      <main className="relative z-10">
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 4. Interactive Infinite Flag Ribbon */}
        <InfiniteFlagMarquee onSelectCountry={handleSelectCountryFromMarquee} />

        {/* 5. "The Full Headache Is Ours" — 4-Step Door-to-Door Visa Concierge */}
        <VisaProcessTimeline onOpenInquiry={() => handleOpenInquiry({ interestType: 'international' })} />

        {/* 6. International Visa & Custom Tour Corridors */}
        <InternationalCorridors
          selectedCorridorId={selectedCorridorId}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 7. Domestic Trips & Planning System ("We Plan, You Enjoy") */}
        <DomesticShowcase onOpenInquiry={handleOpenInquiry} />

        {/* 8. About Us & Trust Banner (Rajiv Thakkur) */}
        <AboutConcierge />

        {/* 9. Standout Embedded Inquiry Booking Lounge */}
        <InquirySection />
      </main>

      {/* 10. Luxury Footer */}
      <Footer />

      {/* 11. Persistent Floating CTAs (WhatsApp & Doorstep Consultation) */}
      <FloatingCTA onOpenInquiry={() => handleOpenInquiry()} />

      {/* 12. Interactive Modal (Triggered by CTAs & Country Cards with Pre-fill) */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterestType={modalInitialData.interestType}
        initialCountryOrCircuit={modalInitialData.countryOrCircuit}
      />
    </div>
  );
};

export default App;
