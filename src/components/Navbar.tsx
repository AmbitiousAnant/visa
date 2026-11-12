import React, { useState, useEffect } from 'react';
import { BRAND } from '../config/brandConfig';
import { Phone, MessageCircle, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (initialData?: { interestType?: 'international' | 'domestic'; countryOrCircuit?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '4-Step Concierge', href: '#visa-process' },
    { label: 'Global Corridors', href: '#international-corridors' },
    { label: 'Domestic Luxury', href: '#domestic-circuits' },
    { label: 'Why Vishwa Setu', href: '#about-us' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-gold-500/20 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a 
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform duration-300 border border-gold-300/40">
            <Globe className="w-6 h-6 text-obsidian-950 stroke-[2.2]" />
          </div>
          <div>
            <div className="font-serif text-lg sm:text-xl font-bold tracking-wide text-ivory-100 flex items-center gap-1.5">
              <span>{BRAND.shortName}</span>
              <span className="text-gold-400 font-sans text-xs uppercase px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/30 font-semibold tracking-wider">
                Luxury
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-sans tracking-wide">
              {BRAND.tagline} • International Visa & Holidays
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm font-medium text-slate-300 hover:text-gold-300 transition-colors tracking-wide relative py-1 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right Action Contacts & Modal Trigger */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct Phone Call */}
          <a
            href={`tel:${BRAND.phone}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-900/60 hover:bg-navy-800 text-slate-300 hover:text-gold-400 border border-slate-700/60 transition-all text-xs font-semibold"
            title="Call Rajiv Thakkur Desk"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{BRAND.phoneFormatted}</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={`https://wa.me/91${BRAND.phone}?text=Hello%20Rajiv%20Thakkur%20Ji%2C%20I%20am%20interested%20in%20International%20Visa%20%26%20Holiday%20planning%20with%20Vishwa%20Setu.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Glowing CTA Button */}
          <button
            onClick={() => onOpenInquiry()}
            className="btn-gold px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-navy-900/80 text-gold-400 border border-gold-500/20 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/95 backdrop-blur-2xl border-b border-gold-500/30 px-5 pt-4 pb-6 mt-2 space-y-4 shadow-2xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-gold-300 border-b border-slate-800/80 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="btn-gold w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Doorstep Consultation</span>
            </button>

            <div className="flex gap-2">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-navy-900 text-slate-300 border border-slate-700 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call {BRAND.phoneFormatted}</span>
              </a>
              <a
                href={`https://wa.me/91${BRAND.phone}?text=Hello%20Rajiv%20Thakkur%20Ji%2C%20I%20would%20like%20to%20plan%20a%20trip%20with%20Vishwa%20Setu.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
