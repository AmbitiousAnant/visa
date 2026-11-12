import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../config/brandConfig';
import { Phone, Mail, MessageCircle, Award, CheckCircle2 } from 'lucide-react';

export const AboutConcierge: React.FC = () => {
  return (
    <section id="about-us" className="relative py-24 bg-obsidian-900/80 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder & Trust Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Personal Accountability & Trust</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-ivory-100 tracking-tight leading-tight">
              Meet {BRAND.founder} & The {BRAND.shortName} Ethos
            </h2>

            <p className="text-base sm:text-lg text-gold-300/90 font-medium leading-relaxed">
              "{BRAND.positioning}"
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Unlike generic, impersonal booking engines or faceless visa agents who leave you scrambling for appointment slots, <strong>{BRAND.brandName}</strong> was founded on a simple, uncompromising promise: <em>The full headache is ours — you only enjoy the journey.</em>
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Under <strong>{BRAND.founder}</strong>'s direct supervision, every international visa dossier is personally audited to match strict consular standards. From physical document collection at your residence to high-precision financial declarations, VIP appointment slot monitoring, and hand-delivered stamped passports, our clients experience flawless execution and total transparency.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>100% Transparent Documentation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Zero Hidden Costs or Surprise Fees</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Personal Concierge on Speed-Dial</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ivory-100 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Unrivaled Client Happiness Track Record</span>
              </div>
            </div>

            {/* Direct Clickable Contact Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {/* Phone Badge */}
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-navy-950 border border-gold-500/40 hover:border-gold-500 text-ivory-100 hover:text-gold-300 transition-all shadow-md group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Direct Phone</div>
                  <div className="text-sm font-bold">{BRAND.phoneFormatted}</div>
                </div>
              </a>

              {/* WhatsApp Badge */}
              <a
                href={`https://wa.me/91${BRAND.phone}?text=Hello%20Rajiv%20Thakkur%20Ji%2C%20I%20am%20reaching%20out%20via%20the%20Vishwa%20Setu%20website%20for%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 transition-all shadow-md group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-obsidian-950 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-400">Priority WhatsApp</div>
                  <div className="text-sm font-bold">{BRAND.phone}</div>
                </div>
              </a>

              {/* Email Badge */}
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-navy-950 border border-slate-700 hover:border-gold-500 text-ivory-100 hover:text-gold-300 transition-all shadow-md group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Official Email</div>
                  <div className="text-sm font-semibold">{BRAND.email}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Luxury Trust Card & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-3xl p-8 border border-gold-500/30 relative overflow-hidden shadow-2xl">
              {/* Subtle gold decorative corner glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center text-obsidian-950 shadow-gold-glow font-serif text-2xl font-black">
                  RT
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ivory-100">
                    {BRAND.founder}
                  </h3>
                  <p className="text-xs text-gold-400 font-semibold tracking-wide uppercase">
                    Founder & Principal Concierge
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {BRAND.brandName}
                  </p>
                </div>
              </div>

              {/* Guarantee Quote */}
              <blockquote className="italic text-sm text-slate-300 border-l-2 border-gold-500 pl-4 py-1 mb-6">
                "When a family entrusts their international holiday or visa to Vishwa Setu, they don't just get a service; they get my personal telephone number and my guarantee of zero stress."
              </blockquote>

              {/* Trust Metric Counters */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800">
                  <div className="font-serif text-2xl font-extrabold text-gold-400">100%</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Door-to-Door Care</div>
                </div>
                <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800">
                  <div className="font-serif text-2xl font-extrabold text-gold-400">Top Tier</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Client Happiness</div>
                </div>
                <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800">
                  <div className="font-serif text-2xl font-extrabold text-gold-400">24x7</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Dedicated Support</div>
                </div>
                <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800">
                  <div className="font-serif text-2xl font-extrabold text-gold-400">0%</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Paperwork Headache</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
