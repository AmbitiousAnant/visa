import React from 'react';
import { motion } from 'framer-motion';
import { CORE_PILLARS, DOMESTIC_CIRCUITS, DomesticCircuit } from '../data/domesticCircuits';
import { Hotel, Car, Compass, Camera, Sparkles, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface DomesticShowcaseProps {
  onOpenInquiry: (initialData?: { interestType?: 'international' | 'domestic'; countryOrCircuit?: string }) => void;
}

const PILLAR_ICONS = {
  Hotel: Hotel,
  Car: Car,
  Compass: Compass,
  Camera: Camera,
};

export const DomesticShowcase: React.FC<DomesticShowcaseProps> = ({ onOpenInquiry }) => {
  return (
    <section id="domestic-circuits" className="relative py-24 bg-obsidian-950 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Incredible India Luxury Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-ivory-100 tracking-tight mb-4">
            Domestic Luxury Holidays: "We Plan, You Enjoy"
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Experience India with zero logistical strain. Heritage palace stays, private chauffeur-driven Innova Crystas, curated VIP access, and professional on-trip family photography.
          </p>
        </div>

        {/* 4 CORE PILLARS BANNER */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xs uppercase font-bold tracking-widest text-gold-400">
              The 4 Uncompromising Pillars of Every Vishwa Setu Indian Holiday
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar, idx) => {
              const IconComponent = PILLAR_ICONS[pillar.iconName as keyof typeof PILLAR_ICONS] || Sparkles;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-gold-500/40 relative group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-2xl font-black text-slate-700 group-hover:text-gold-400/40 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-ivory-100 mb-1 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <div className="text-xs font-semibold text-gold-400/90 mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 6 SIGNATURE DOMESTIC CIRCUITS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 mb-2">
              6 Curated Signature Indian Circuits
            </h3>
            <p className="text-sm text-slate-400">
              Select any circuit below to receive Rajiv Thakkur's customized quotation and day-by-day itinerary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOMESTIC_CIRCUITS.map((circuit: DomesticCircuit, idx: number) => (
              <motion.div
                key={circuit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-gold-500/50 flex flex-col justify-between group shadow-xl"
              >
                {/* Circuit Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={circuit.heroImage}
                    alt={circuit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-obsidian-950/80 border border-gold-500/40 text-gold-300 text-xs font-bold backdrop-blur-md">
                      {circuit.badge}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-navy-950/80 text-slate-200 text-[11px] font-mono border border-slate-700 backdrop-blur-md">
                      {circuit.duration}
                    </span>
                  </div>

                  {/* Title & Destinations */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="font-serif text-xl font-bold text-ivory-100 mb-0.5 group-hover:text-gold-300 transition-colors">
                      {circuit.name}
                    </h4>
                    <p className="text-xs text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>{circuit.subTitle}</span>
                    </p>
                  </div>
                </div>

                {/* Circuit Highlights Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    {circuit.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transport & Photography Badges */}
                  <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Car className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span className="line-clamp-1">{circuit.transport}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gold-300/90 font-medium">
                      <Camera className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span className="line-clamp-1">{circuit.photographyFeature}</span>
                    </div>
                  </div>

                  {/* Pre-fill Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() =>
                        onOpenInquiry({
                          interestType: 'domestic',
                          countryOrCircuit: circuit.name,
                        })
                      }
                      className="btn-gold w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Plan {circuit.name} Holiday</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Tailor-Made Domestic Pitch */}
        <div className="mt-16 p-8 rounded-2xl bg-navy-950/80 border border-gold-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100 mb-1">
              Want to Build Your Own Unique State Circuit?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Whether you wish to combine Kerala + Goa, or need a pilgrimage tour in Varanasi & Ayodhya, we craft custom tailor-made itineraries with private chauffeured cars.
            </p>
          </div>
          <button
            onClick={() =>
              onOpenInquiry({
                interestType: 'domestic',
                countryOrCircuit: 'Custom Unique Plan',
              })
            }
            className="btn-gold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Customize My Trip</span>
          </button>
        </div>
      </div>
    </section>
  );
};
