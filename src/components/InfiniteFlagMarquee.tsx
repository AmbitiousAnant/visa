import React from 'react';
import { WORLD_FLAGS, FlagItem } from '../data/flags';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface InfiniteFlagMarqueeProps {
  onSelectCountry?: (countryId: string) => void;
}

export const InfiniteFlagMarquee: React.FC<InfiniteFlagMarqueeProps> = ({ onSelectCountry }) => {
  const handleFlagClick = (flag: FlagItem) => {
    // 1. Trigger parent filter/highlight callback
    if (onSelectCountry) {
      onSelectCountry(flag.corridorId || flag.id);
    }

    // 2. Smoothly scroll to international corridors or domestic circuits
    const targetElement = document.getElementById(
      flag.corridorId === 'domestic-circuits' ? 'domestic-circuits' : 'international-corridors'
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Double array for seamless infinite marquee loop
  const duplicatedFlags = [...WORLD_FLAGS, ...WORLD_FLAGS];

  return (
    <section className="relative py-6 bg-gradient-to-b from-obsidian-950/90 via-navy-950/80 to-obsidian-950/90 border-y border-gold-500/20 overflow-hidden backdrop-blur-md z-10">
      {/* Subtle top indicator */}
      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between text-xs tracking-wider uppercase text-gold-400/80 font-semibold">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
          Click any country flag to inspect visa corridor & custom itineraries
        </span>
        <span className="hidden sm:flex items-center gap-1 text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
          VIP Doorstep Document Collection Available Pan-India
        </span>
      </div>

      {/* Infinite scrolling ribbon */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient edge fades for smooth visual masking */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian-950 via-obsidian-950/80 to-transparent z-10" />

        <div className="marquee-track flex gap-4 py-2">
          {duplicatedFlags.map((flag, index) => (
            <button
              key={`${flag.id}-${index}`}
              onClick={() => handleFlagClick(flag)}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-navy-900/60 hover:bg-gold-500/10 border border-gold-500/20 hover:border-gold-500/60 transition-all duration-300 shadow-lg hover:shadow-gold-glow flex-shrink-0 cursor-pointer"
              title={`Explore ${flag.name} Visa Concierge`}
            >
              <div className="w-8 h-5 rounded overflow-hidden shadow-sm border border-white/20 flex-shrink-0">
                <img
                  src={flag.flagUrl}
                  alt={flag.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-ivory-100 group-hover:text-gold-300 transition-colors flex items-center gap-1">
                  {flag.name}
                  <ArrowRight className="w-3 h-3 text-gold-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  {flag.processingTime}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
