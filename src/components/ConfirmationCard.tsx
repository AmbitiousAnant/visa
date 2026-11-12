import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, getWhatsAppInquiryUrl } from '../config/brandConfig';
import { Check, MessageCircle, RotateCcw, ShieldCheck, Sparkles, Phone } from 'lucide-react';

interface ConfirmationCardProps {
  formData: {
    fullName: string;
    phone: string;
    email: string;
    interestType: 'international' | 'domestic' | 'both';
    country?: string;
    internationalVisaMode?: 'visa_only' | 'visa_and_package';
    domesticCircuit?: string;
    domesticPackagePreference?: 'curated_signature' | 'custom_tailored';
    hotelTier?: '3_star' | '4_star' | '5_star';
    message?: string;
  };
  onReset: () => void;
  isDemo?: boolean;
}

export const ConfirmationCard: React.FC<ConfirmationCardProps> = ({
  formData,
  onReset,
  isDemo,
}) => {
  // Determine displayed destination
  const destination =
    formData.interestType === 'both'
      ? `${formData.country || 'Global Corridor'} & ${formData.domesticCircuit || 'Domestic Circuit'}`
      : formData.interestType === 'international'
      ? formData.country || 'International Visa & Tour'
      : formData.domesticCircuit || 'Domestic Holiday';

  const scope =
    formData.internationalVisaMode === 'visa_only'
      ? 'Visa Only'
      : formData.internationalVisaMode === 'visa_and_package'
      ? 'Visa + Complete Tour Package'
      : formData.domesticPackagePreference === 'custom_tailored'
      ? 'Custom Tailored Circuit'
      : 'Curated Signature Plan';

  const hotelTierLabel =
    formData.hotelTier === '5_star'
      ? '5-Star Luxury'
      : formData.hotelTier === '4_star'
      ? '4-Star Premium'
      : '3-Star Comfort';

  const waUrl = getWhatsAppInquiryUrl({
    fullName: formData.fullName,
    phone: formData.phone,
    email: formData.email,
    interestType:
      formData.interestType === 'both'
        ? 'International + Domestic'
        : formData.interestType === 'international'
        ? 'International Visa / Tour'
        : 'Domestic Trip & Planning',
    destination: destination,
    visaOnlyOrPackage: scope,
    hotelTier: hotelTierLabel,
    message: formData.message,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="p-8 sm:p-10 text-center rounded-3xl bg-navy-950/90 border border-gold-500/40 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
    >
      {/* Background ambient gold burst */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Golden checkmark celebration badge */}
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 text-obsidian-950 shadow-gold-glow-lg mb-6 border-2 border-gold-200">
        <Check className="w-10 h-10 stroke-[3]" />
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
        <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
        <span>{isDemo ? 'VIP Consultation Recorded' : 'VIP Doorstep Consultation Booked'}</span>
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-ivory-100 mb-4">
        Thank You, {formData.fullName}!
      </h3>

      {/* Specific user prompt message */}
      <div className="p-5 rounded-2xl bg-obsidian-950/70 border border-gold-500/20 text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-xl mx-auto">
        Your inquiry for <strong className="text-gold-300 font-semibold">{destination}</strong> has been received.{' '}
        <strong className="text-ivory-100 font-semibold">{BRAND.founder}</strong> and our dedicated Visa & Travel Concierge Team will contact you shortly on{' '}
        <strong className="text-gold-300 font-mono font-semibold">{formData.phone}</strong> with complete tailored details.{' '}
        <span className="text-gold-400 font-serif italic block mt-2 text-sm">
          "Remember — {BRAND.tagline}!"
        </span>
      </div>

      {/* Inquiry Summary Mini Table */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-lg mx-auto mb-8 text-left text-xs">
        <div className="p-2.5 rounded-lg bg-navy-900/60 border border-slate-800">
          <span className="text-[10px] uppercase text-slate-400 block font-semibold">Service</span>
          <span className="font-semibold text-ivory-100">{formData.interestType.toUpperCase()}</span>
        </div>
        <div className="p-2.5 rounded-lg bg-navy-900/60 border border-slate-800">
          <span className="text-[10px] uppercase text-slate-400 block font-semibold">Scope</span>
          <span className="font-semibold text-ivory-100">{scope}</span>
        </div>
        <div className="p-2.5 rounded-lg bg-navy-900/60 border border-slate-800 col-span-2 sm:col-span-1">
          <span className="text-[10px] uppercase text-slate-400 block font-semibold">Priority</span>
          <span className="font-semibold text-emerald-400">Doorstep Executive</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
        {/* WhatsApp Instant Trigger */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex-1 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Priority Alert via WhatsApp</span>
        </a>

        {/* Reset / New Inquiry */}
        <button
          onClick={onReset}
          className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-ivory-100 border border-slate-700 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-gold-400" />
          <span>Submit Another</span>
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
        <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-gold-300">
          <Phone className="w-3.5 h-3.5 text-gold-400" />
          <span>Call Rajiv Thakkur: {BRAND.phoneFormatted}</span>
        </a>
      </div>
    </motion.div>
  );
};
