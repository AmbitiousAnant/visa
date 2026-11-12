import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CORRIDORS } from '../data/corridors';
import { CheckCircle2, Clock, Award, Compass, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface InternationalCorridorsProps {
  selectedCorridorId?: string;
  onOpenInquiry: (initialData?: { interestType?: 'international' | 'domestic'; countryOrCircuit?: string }) => void;
}

export const InternationalCorridors: React.FC<InternationalCorridorsProps> = ({
  selectedCorridorId,
  onOpenInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // React to marquee or external corridor selection
  useEffect(() => {
    if (selectedCorridorId) {
      if (selectedCorridorId === 'all') {
        setActiveFilter('all');
      } else {
        const found = CORRIDORS.find(
          (c) => c.id === selectedCorridorId || c.countriesIncluded.some((ci) => ci.toLowerCase().includes(selectedCorridorId.toLowerCase()))
        );
        if (found) {
          setActiveFilter(found.id);
        }
      }
    }
  }, [selectedCorridorId]);

  const filteredCorridors =
    activeFilter === 'all'
      ? CORRIDORS
      : CORRIDORS.filter((c) => c.id === activeFilter);

  return (
    <section id="international-corridors" className="relative py-24 bg-obsidian-900/60 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Global Visa & Bespoke Holiday Corridors</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-ivory-100 tracking-tight mb-4">
            Elite International Destinations
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From complex multi-entry Schengen visas and 10-year US B1/B2 filings to express 48-hour Dubai e-Visas. Every corridor is paired with handpicked 4★/5★ luxury stays and private chauffeur excursions.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                : 'bg-navy-900/80 text-slate-300 hover:text-gold-300 border border-slate-700/60'
            }`}
          >
            <Filter className="w-3 h-3" />
            <span>All Corridors ({CORRIDORS.length})</span>
          </button>

          {CORRIDORS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveFilter(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                activeFilter === c.id
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-gold-glow'
                  : 'bg-navy-900/80 text-slate-300 hover:text-gold-300 border border-slate-700/60'
              }`}
            >
              <img src={c.flagUrl} alt="" className="w-4 h-3 rounded object-cover" />
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Corridors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCorridors.map((corridor, idx) => (
              <motion.div
                key={corridor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-gold-500/50 flex flex-col justify-between group shadow-xl"
              >
                {/* Image Banner */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={corridor.heroImage}
                    alt={corridor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-obsidian-950/80 border border-gold-500/40 text-gold-300 text-xs font-bold backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-gold-400" />
                      {corridor.badge}
                    </span>
                  </div>

                  {/* Flag Icon */}
                  <div className="absolute top-4 right-4 w-11 h-7 rounded shadow-lg border border-white/30 overflow-hidden">
                    <img src={corridor.flagUrl} alt="" className="w-full h-full object-cover" />
                  </div>

                  {/* Title & Region */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 mb-1 group-hover:text-gold-300 transition-colors">
                      {corridor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light flex items-center gap-1.5">
                      <span>{corridor.region}</span>
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  {/* Processing & Success Rate Stats */}
                  <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-navy-950/80 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Timeline</div>
                        <div className="text-xs font-semibold text-ivory-100">{corridor.processingTime}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Track Record</div>
                        <div className="text-xs font-semibold text-emerald-400">{corridor.successRate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Visa Concierge Inclusions */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      Door-to-Door Visa Services Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {corridor.visaServices.map((service, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Tour Itineraries */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      Signature Luxury Tour Packages:
                    </h4>
                    <div className="space-y-3">
                      {corridor.samplePackages.map((pkg, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3.5 rounded-xl bg-navy-900/60 border border-slate-800 hover:border-gold-500/30 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-sm font-bold text-ivory-100">{pkg.title}</span>
                            <span className="text-[11px] font-semibold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20 whitespace-nowrap">
                              {pkg.duration}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                            {pkg.highlights.map((h, hIdx) => (
                              <span key={hIdx} className="bg-navy-950/80 px-2 py-0.5 rounded text-slate-300 border border-slate-700/60">
                                • {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pre-fill Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() =>
                        onOpenInquiry({
                          interestType: 'international',
                          countryOrCircuit: corridor.name,
                        })
                      }
                      className="btn-gold w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Get Visa / Custom Package for {corridor.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
