import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { BRAND } from '../config/brandConfig';

interface FloatingCTAProps {
  onOpenInquiry: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenInquiry }) => {
  return (
    <>
      {/* Bottom Left Quick WhatsApp Bubble */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={`https://wa.me/91${BRAND.phone}?text=Hello%20Rajiv%20Thakkur%20Ji%2C%20I%20would%20like%20to%20inquire%20about%20Visa%20%26%20Holiday%20planning%20with%20Vishwa%20Setu.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-300/40"
          title="Direct WhatsApp with Rajiv Thakkur"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Bottom Right Glowing Gold Consultation Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onOpenInquiry}
          className="relative group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gold-200"
          aria-label="Book Free Doorstep Consultation"
        >
          {/* Animated ping ring */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-300"></span>
          </span>

          <Sparkles className="w-4 h-4 text-obsidian-950" />
          <span className="font-extrabold tracking-wide">
            Book Doorstep Consultation
          </span>
        </button>
      </div>
    </>
  );
};
