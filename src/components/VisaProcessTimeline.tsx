import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../config/brandConfig';
import { Home, FileCheck2, CalendarClock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface VisaProcessTimelineProps {
  onOpenInquiry: () => void;
}

const STEPS = [
  {
    step: '01',
    title: 'Doorstep Document Pickup',
    subtitle: 'Zero Travel. Zero Waiting.',
    description:
      'Our bonded concierge executive visits your residence or workplace to collect your raw documents, passport copies, photos, and financial papers securely.',
    icon: Home,
    perk: 'Tamper-Proof Secure Transit Vaults',
  },
  {
    step: '02',
    title: 'Precision Dossier & Financials',
    subtitle: 'Embassy-Grade Perfection',
    description:
      'We draft customized embassy cover letters, confirmed luxury flight/hotel itineraries, mandatory travel insurance, and audit your bank statements & ITR for zero-rejection compliance.',
    icon: FileCheck2,
    perk: '99%+ First-Attempt Visa Success Rate',
  },
  {
    step: '03',
    title: 'Priority VFS & Embassy Slots',
    subtitle: 'VIP Appointment Desk',
    description:
      'Our team manages 24/7 automated slot monitoring for early appointment dates, biometric scheduling, and provides 1-on-1 mock question prep for embassy interviews.',
    icon: CalendarClock,
    perk: 'Express & Super-Priority Slot Tracking',
  },
  {
    step: '04',
    title: 'Stamped Passport at Your Door',
    subtitle: 'We Plan, You Enjoy!',
    description:
      'Track your application in real-time. Once stamped by the Embassy/Consulate, your passport and official visa are hand-delivered directly back to your doorstep.',
    icon: ShieldCheck,
    perk: 'Complete Peace of Mind & Insurance',
  },
];

export const VisaProcessTimeline: React.FC<VisaProcessTimelineProps> = ({ onOpenInquiry }) => {
  return (
    <section id="visa-process" className="relative py-24 bg-obsidian-950/70 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Vishwa Setu Guarantee</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-ivory-100 tracking-tight mb-4">
            "The Full Headache Is Ours"
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            International visas used to mean stressful queues, tricky financial paperwork, and rejected forms. Under {BRAND.founder}’s 4-step door-to-door concierge, you relax at home while we orchestrate every single detail.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between group"
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-extrabold text-slate-700 group-hover:text-gold-400/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ivory-100 mb-3 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Highlight Perk */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-gold-300/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <span>{item.perk}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950 border border-gold-500/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-ivory-100 mb-1">
              Need Doorstep Document Collection Today?
            </h4>
            <p className="text-sm text-slate-300">
              Our executive can visit your office or residence anywhere in the Delhi NCR / Pan-India network.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="btn-gold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Request Doorstep Pickup</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
