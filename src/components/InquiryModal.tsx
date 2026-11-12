import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InquiryFormContent } from './InquiryFormContent';
import { BRAND } from '../config/brandConfig';
import { X, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterestType?: 'international' | 'domestic' | 'both';
  initialCountryOrCircuit?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialInterestType = 'international',
  initialCountryOrCircuit = '',
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-xl transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-gradient-to-b from-navy-900/95 via-obsidian-950/98 to-obsidian-950 border border-gold-500/35 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-navy-800/80 hover:bg-gold-500 hover:text-obsidian-950 text-slate-300 transition-all border border-slate-700/80 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-left mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Door-to-Door Visa & Luxury Concierge</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
                Plan Your Journey With {BRAND.shortName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
                {BRAND.tagline} • Executive pickup and end-to-end bespoke itineraries managed by {BRAND.founder}.
              </p>
            </div>

            {/* Dynamic Inquiry Form */}
            <InquiryFormContent
              initialInterestType={initialInterestType}
              initialCountryOrCircuit={initialCountryOrCircuit}
              isCompact={true}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
