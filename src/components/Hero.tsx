import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../config/brandConfig';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (initialData?: { interestType?: 'international' | 'domestic'; countryOrCircuit?: string }) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1920&auto=format&fit=crop', // Swiss Alps
    title: 'Swiss Alps & European Romance',
    location: 'Schengen Europe Corridor',
  },
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop', // Burj Khalifa Dubai
    title: 'Royal Dubai & Arabian Horizons',
    location: 'UAE 48-Hour e-Visa Corridor',
  },
  {
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1920&auto=format&fit=crop', // Kashmir Dal Lake
    title: 'Paradise on Earth: Kashmir & Ladakh',
    location: 'Signature Indian Luxury Stays',
  },
  {
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop', // London Big Ben
    title: 'Historic Great Britain & London Heritage',
    location: 'UK Visitor & Family Dossier',
  },
  {
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1920&auto=format&fit=crop', // Jaipur Rajasthan
    title: 'Royal Rajasthan Heritage Palaces',
    location: 'Private Chauffeur Domestic Circuit',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCorridors = () => {
    const target = document.getElementById('international-corridors');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Carousel with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO_SLIDES[currentSlide].image})`,
            }}
          />
        </AnimatePresence>

        {/* Deep Multi-Layer Vignette & Obsidian Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-obsidian-950/60" />
        <div className="absolute inset-0 bg-obsidian-950/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Elite Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/80 border border-gold-500/40 backdrop-blur-xl shadow-gold-glow mb-6"
        >
          <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gold-300">
            ✨ {BRAND.tagline} — Complete Door-to-Door Visa & Travel Concierge
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-ivory-100 leading-[1.15] mb-6 max-w-4xl"
        >
          The World at Your Doorstep.{' '}
          <span className="text-gold-gradient block mt-1">
            Zero Paperwork Headache.
          </span>
        </motion.h1>

        {/* Subtitle / Subtagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 font-light"
        >
          {BRAND.subTagline} From physical document collection at your living room to embassy appointments, stamped passport delivery, and 3★–5★ customized luxury holidays.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <button
            onClick={() => onOpenInquiry()}
            className="btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-gold-glow-lg group cursor-pointer"
          >
            <span>Plan My Visa & Trip Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToCorridors}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-ivory-100 border border-gold-500/30 hover:border-gold-500/60 backdrop-blur-md text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Global & Domestic Corridors</span>
            <span className="text-gold-400">↓</span>
          </button>
        </motion.div>

        {/* Trust & Happiness Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 border-t border-slate-800/80"
        >
          <div className="p-3 sm:p-4 rounded-xl bg-navy-950/60 border border-gold-500/15 backdrop-blur-md text-left">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Doorstep Pickup</span>
            </div>
            <div className="text-ivory-100 text-xs sm:text-sm font-bold">Raw Docs to Stamped Passports</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-navy-950/60 border border-gold-500/15 backdrop-blur-md text-left">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-1">
              <Award className="w-4 h-4" />
              <span>Happiness Record</span>
            </div>
            <div className="text-ivory-100 text-xs sm:text-sm font-bold">Top Verified Client Satisfaction</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-navy-950/60 border border-gold-500/15 backdrop-blur-md text-left">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Transparent</span>
            </div>
            <div className="text-ivory-100 text-xs sm:text-sm font-bold">Embassy-Grade Vetted Files</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-navy-950/60 border border-gold-500/15 backdrop-blur-md text-left">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-1">
              <MapPin className="w-4 h-4" />
              <span>Personal Desk</span>
            </div>
            <div className="text-ivory-100 text-xs sm:text-sm font-bold">Led by Rajiv Thakkur</div>
          </div>
        </motion.div>

        {/* Current Active Slide Indicator */}
        <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
          <span>Active Visual: <strong className="text-gold-300 font-medium">{HERO_SLIDES[currentSlide].title}</strong> ({HERO_SLIDES[currentSlide].location})</span>
        </div>
      </div>
    </section>
  );
};
