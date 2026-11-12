import React from 'react';
import { BRAND } from '../config/brandConfig';
import { isSupabaseConfigured } from '../lib/supabase';
import { Globe, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden text-slate-400 text-xs">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center text-obsidian-950 shadow-gold-glow">
                <Globe className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-ivory-100 block">
                  {BRAND.brandName}
                </span>
                <span className="text-gold-400 text-[11px] font-semibold tracking-wider uppercase">
                  "{BRAND.tagline}"
                </span>
              </div>
            </div>

            <p className="text-slate-300 font-light leading-relaxed max-w-sm">
              {BRAND.subTagline} Complete end-to-end peace of mind for family vacations, corporate delegations, and luxury domestic circuits.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${BRAND.phone}`}
                className="p-2.5 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-obsidian-950 text-slate-300 transition-colors border border-slate-800"
                title="Call Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${BRAND.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-navy-900 hover:bg-emerald-500 hover:text-white text-emerald-400 transition-colors border border-slate-800"
                title="WhatsApp Desk"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="p-2.5 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-obsidian-950 text-slate-300 transition-colors border border-slate-800"
                title="Email Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Visa Corridors */}
          <div>
            <h4 className="font-serif text-sm font-bold text-ivory-100 uppercase tracking-wider mb-4 text-gold-400">
              Visa Corridors
            </h4>
            <ul className="space-y-2">
              <li><a href="#international-corridors" className="hover:text-gold-300 transition-colors">Schengen Europe (France, Swiss)</a></li>
              <li><a href="#international-corridors" className="hover:text-gold-300 transition-colors">UAE & Dubai Express 48h</a></li>
              <li><a href="#international-corridors" className="hover:text-gold-300 transition-colors">United Kingdom Standard Visitor</a></li>
              <li><a href="#international-corridors" className="hover:text-gold-300 transition-colors">USA B1/B2 & Canada Dossier</a></li>
              <li><a href="#international-corridors" className="hover:text-gold-300 transition-colors">Singapore & Bali Tropical</a></li>
              <li><a href="#international-corridors" className="hover:text-gold-300 transition-colors">Japan & Australia Subclass 600</a></li>
            </ul>
          </div>

          {/* Quick Links: Domestic Circuits */}
          <div>
            <h4 className="font-serif text-sm font-bold text-ivory-100 uppercase tracking-wider mb-4 text-gold-400">
              Domestic Luxury
            </h4>
            <ul className="space-y-2">
              <li><a href="#domestic-circuits" className="hover:text-gold-300 transition-colors">Royal Rajasthan Palaces</a></li>
              <li><a href="#domestic-circuits" className="hover:text-gold-300 transition-colors">Kashmir & Ladakh Houseboats</a></li>
              <li><a href="#domestic-circuits" className="hover:text-gold-300 transition-colors">Kerala Tea Estates & Backwaters</a></li>
              <li><a href="#domestic-circuits" className="hover:text-gold-300 transition-colors">Goa Beachfront & Private Yachts</a></li>
              <li><a href="#domestic-circuits" className="hover:text-gold-300 transition-colors">Himachal & Uttarakhand Cottages</a></li>
              <li><a href="#domestic-circuits" className="hover:text-gold-300 transition-colors">Andaman Coral & North-East</a></li>
            </ul>
          </div>

          {/* Concierge Desk & Supabase Server Status */}
          <div>
            <h4 className="font-serif text-sm font-bold text-ivory-100 uppercase tracking-wider mb-4 text-gold-400">
              Concierge Status
            </h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                <div className="text-[10px] uppercase font-bold text-slate-400">Principal Concierge</div>
                <div className="text-xs font-bold text-ivory-100">{BRAND.founder}</div>
                <div className="text-[11px] text-gold-400 font-mono mt-0.5">{BRAND.phoneFormatted}</div>
              </div>

              {/* Supabase Status Indicator */}
              <div className="p-2.5 rounded-xl bg-navy-900/60 border border-slate-800 flex items-center justify-between">
                <span className="text-[10px] uppercase text-slate-400">Supabase Cloud Vault</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {isSupabaseConfigured ? 'Connected' : 'Local Vault Active'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {BRAND.brandName}. All Rights Reserved. Curated with excellence by {BRAND.founder}.
            </p>
            <p className="mt-1 text-slate-400 font-light max-w-2xl">
              *Disclaimer: Visa approval and issuance are the sole prerogative of the respective sovereign embassies, high commissions, and consulates. {BRAND.shortName} provides professional concierge guidance, dossier preparation, slot scheduling, verified bookings, and doorstep logistics.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-navy-900 hover:bg-gold-500 hover:text-obsidian-950 text-slate-300 transition-colors border border-slate-800 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
