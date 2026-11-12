import React from 'react';
import { InquiryFormContent } from './InquiryFormContent';
import { BRAND } from '../config/brandConfig';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export const InquirySection: React.FC = () => {
  return (
    <section id="contact-inquiry" className="relative py-24 bg-gradient-to-b from-obsidian-950 via-navy-950/70 to-obsidian-950 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Pitch & Concierge Information */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doorstep Booking Desk</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-ivory-100 tracking-tight leading-tight">
              Let's Eliminate The Paperwork Headache
            </h2>

            <p className="text-base text-slate-300 font-light leading-relaxed">
              Whether you need Schengen VFS slots, a 10-year US B1/B2 visa dossier, express 48-hour Dubai approvals, or a private royal tour of Rajasthan with chauffeured Innova Crystas — our dedicated team is at your command.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-4">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-gold-500/50 transition-all text-ivory-100 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">Direct Founder Hotline</div>
                  <div className="text-sm font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
                    {BRAND.phoneFormatted} (Rajiv Thakkur)
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-gold-500/50 transition-all text-ivory-100 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">Official Priority Email</div>
                  <div className="text-sm font-semibold text-ivory-100 group-hover:text-gold-300 transition-colors">
                    {BRAND.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-navy-900/60 border border-slate-800 text-ivory-100">
                <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-gold-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-bold text-slate-400">Headquarters & Service Area</div>
                  <div className="text-sm font-medium text-slate-300">
                    {BRAND.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-5 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-gold-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Zero Obligation Doorstep Assessment</span>
              </div>
              <p className="font-light">
                We review your passport expiry, previous travel history, and financial checklist before collecting any fees.
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-gold-500/30 shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-slate-800">
                <h3 className="font-serif text-2xl font-bold text-ivory-100">
                  Schedule Free Doorstep Consultation
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fill in your details below. Rajiv Thakkur's desk will prepare your tailored corridor plan and connect with you shortly.
                </p>
              </div>

              <InquiryFormContent initialInterestType="international" isCompact={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
