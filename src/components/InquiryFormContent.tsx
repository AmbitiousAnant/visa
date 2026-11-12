import React, { useState, useEffect } from 'react';
import { submitInquiry, InquiryPayload } from '../lib/supabase';
import { ConfirmationCard } from './ConfirmationCard';
import { Sparkles, Globe, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

interface InquiryFormContentProps {
  initialInterestType?: 'international' | 'domestic' | 'both';
  initialCountryOrCircuit?: string;
  isCompact?: boolean;
}

const INTERNATIONAL_COUNTRIES = [
  'Schengen Europe',
  'UAE / Dubai',
  'United Kingdom',
  'USA',
  'Canada',
  'Singapore',
  'Thailand',
  'Bali / Indonesia',
  'Japan',
  'Australia',
  'Other Country',
];

const DOMESTIC_CIRCUITS_LIST = [
  'Royal Rajasthan',
  'Kashmir & Ladakh',
  'Kerala & South India',
  'Goa & Coastal Elite',
  'Himachal Pradesh',
  'Uttarakhand & Corbett',
  'Andaman & Nicobar',
  'North-East & Darjeeling',
  'Other Indian State',
];

export const InquiryFormContent: React.FC<InquiryFormContentProps> = ({
  initialInterestType = 'international',
  initialCountryOrCircuit = '',
  isCompact = false,
}) => {
  const [interestType, setInterestType] = useState<'international' | 'domestic' | 'both'>(initialInterestType);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  // International Fields
  const [country, setCountry] = useState(
    initialInterestType === 'international' && initialCountryOrCircuit ? initialCountryOrCircuit : 'Schengen Europe'
  );
  const [otherCountry, setOtherCountry] = useState('');
  const [internationalVisaMode, setInternationalVisaMode] = useState<'visa_only' | 'visa_and_package'>('visa_and_package');

  // Domestic Fields
  const [domesticCircuit, setDomesticCircuit] = useState(
    initialInterestType === 'domestic' && initialCountryOrCircuit ? initialCountryOrCircuit : 'Royal Rajasthan'
  );
  const [otherCircuit, setOtherCircuit] = useState('');
  const [domesticPackagePreference, setDomesticPackagePreference] = useState<'curated_signature' | 'custom_tailored'>('curated_signature');
  const [hotelTier, setHotelTier] = useState<'3_star' | '4_star' | '5_star'>('4_star');

  // Notes
  const [message, setMessage] = useState('');

  // Status
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryPayload | null>(null);
  const [isDemoResult, setIsDemoResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync when initial props change
  useEffect(() => {
    if (initialInterestType) {
      setInterestType(initialInterestType);
    }
    if (initialCountryOrCircuit) {
      if (initialInterestType === 'domestic') {
        const matched = DOMESTIC_CIRCUITS_LIST.find((c) =>
          c.toLowerCase().includes(initialCountryOrCircuit.toLowerCase())
        );
        setDomesticCircuit(matched || initialCountryOrCircuit);
      } else {
        const matched = INTERNATIONAL_COUNTRIES.find((c) =>
          c.toLowerCase().includes(initialCountryOrCircuit.toLowerCase())
        );
        setCountry(matched || initialCountryOrCircuit);
      }
    }
  }, [initialInterestType, initialCountryOrCircuit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic client validation
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setErrorMessage('Please fill in your name, mobile number, and email.');
      return;
    }

    const payload: InquiryPayload = {
      fullName: fullName.trim(),
      phone: phone.startsWith('+91') ? phone.trim() : `+91 ${phone.trim()}`,
      email: email.trim(),
      interestType,
      country: country === 'Other Country' ? otherCountry : country,
      internationalVisaMode: interestType !== 'domestic' ? internationalVisaMode : undefined,
      domesticCircuit: domesticCircuit === 'Other Indian State' ? otherCircuit : domesticCircuit,
      domesticPackagePreference: interestType !== 'international' ? domesticPackagePreference : undefined,
      hotelTier: interestType !== 'international' ? hotelTier : undefined,
      message: message.trim(),
    };

    setLoading(true);
    const result = await submitInquiry(payload);
    setLoading(false);

    if (result.success) {
      setIsDemoResult(result.isDemo);
      setSubmittedData(payload);
    } else {
      setErrorMessage(result.error || 'Failed to submit inquiry. Please retry or contact directly on WhatsApp.');
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  if (submittedData) {
    return <ConfirmationCard formData={submittedData} onReset={handleReset} isDemo={isDemoResult} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 1. Contact Information Row */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Vikramaditya Sharma"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700/80 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-ivory-100 placeholder:text-slate-500 text-sm transition-all outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5">
              Mobile Number (WhatsApp) <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-sm text-slate-400 font-mono">+91</span>
              <input
                type="tel"
                required
                placeholder="98910 45669"
                value={phone.replace(/^\+91\s*/, '')}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700/80 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-ivory-100 placeholder:text-slate-500 text-sm font-mono transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-slate-700/80 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-ivory-100 placeholder:text-slate-500 text-sm transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* 2. Interactive Service Toggle */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
          What Are You Interested In? <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setInterestType('international')}
            className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
              interestType === 'international'
                ? 'bg-gold-500 text-obsidian-950 border-gold-400 shadow-gold-glow'
                : 'bg-navy-900/60 text-slate-300 border-slate-700/60 hover:text-gold-300'
            }`}
          >
            <Globe className="w-3.5 h-3.5 mx-auto mb-1" />
            <span className="block leading-tight">International Visa & Tour</span>
          </button>

          <button
            type="button"
            onClick={() => setInterestType('domestic')}
            className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
              interestType === 'domestic'
                ? 'bg-gold-500 text-obsidian-950 border-gold-400 shadow-gold-glow'
                : 'bg-navy-900/60 text-slate-300 border-slate-700/60 hover:text-gold-300'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 mx-auto mb-1" />
            <span className="block leading-tight">Domestic Indian Trip</span>
          </button>

          <button
            type="button"
            onClick={() => setInterestType('both')}
            className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
              interestType === 'both'
                ? 'bg-gold-500 text-obsidian-950 border-gold-400 shadow-gold-glow'
                : 'bg-navy-900/60 text-slate-300 border-slate-700/60 hover:text-gold-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 mx-auto mb-1" />
            <span className="block leading-tight">Both (Global + India)</span>
          </button>
        </div>
      </div>

      {/* 3. CONDITIONAL FIELD A: International Visa & Tour */}
      {(interestType === 'international' || interestType === 'both') && (
        <div className="p-4 sm:p-5 rounded-2xl bg-navy-900/40 border border-gold-500/20 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-300">
            <Globe className="w-4 h-4 text-gold-400" />
            <span>International Visa & Destination Selection</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-300 mb-2">
              Select Destination Country / Region:
            </label>
            <div className="flex flex-wrap gap-2">
              {INTERNATIONAL_COUNTRIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCountry(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    country === c
                      ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                      : 'bg-navy-950 text-slate-300 hover:text-gold-300 border border-slate-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {country === 'Other Country' && (
              <input
                type="text"
                placeholder="Specify country name..."
                value={otherCountry}
                onChange={(e) => setOtherCountry(e.target.value)}
                className="mt-2 w-full px-3 py-2 rounded-lg bg-navy-950 border border-slate-700 text-xs text-ivory-100"
              />
            )}
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
              Service Scope Required:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <label
                className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                  internationalVisaMode === 'visa_only'
                    ? 'bg-gold-500/15 border-gold-500 text-gold-200 font-semibold'
                    : 'bg-navy-950/60 border-slate-800 text-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="intlVisaMode"
                  checked={internationalVisaMode === 'visa_only'}
                  onChange={() => setInternationalVisaMode('visa_only')}
                  className="hidden"
                />
                <CheckCircle2
                  className={`w-4 h-4 ${
                    internationalVisaMode === 'visa_only' ? 'text-gold-400' : 'text-slate-600'
                  }`}
                />
                <span>Need Visa Only (Doorstep)</span>
              </label>

              <label
                className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                  internationalVisaMode === 'visa_and_package'
                    ? 'bg-gold-500/15 border-gold-500 text-gold-200 font-semibold'
                    : 'bg-navy-950/60 border-slate-800 text-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="intlVisaMode"
                  checked={internationalVisaMode === 'visa_and_package'}
                  onChange={() => setInternationalVisaMode('visa_and_package')}
                  className="hidden"
                />
                <CheckCircle2
                  className={`w-4 h-4 ${
                    internationalVisaMode === 'visa_and_package' ? 'text-gold-400' : 'text-slate-600'
                  }`}
                />
                <span>Visa + Complete Tour Package</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* 4. CONDITIONAL FIELD B: Domestic Indian Trips */}
      {(interestType === 'domestic' || interestType === 'both') && (
        <div className="p-4 sm:p-5 rounded-2xl bg-navy-900/40 border border-gold-500/20 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-300">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>Domestic Indian Holiday Circuit</span>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-300 mb-2">
              Select Circuit / Destination:
            </label>
            <div className="flex flex-wrap gap-2">
              {DOMESTIC_CIRCUITS_LIST.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setDomesticCircuit(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    domesticCircuit === c
                      ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                      : 'bg-navy-950 text-slate-300 hover:text-gold-300 border border-slate-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {domesticCircuit === 'Other Indian State' && (
              <input
                type="text"
                placeholder="Specify state / destinations..."
                value={otherCircuit}
                onChange={(e) => setOtherCircuit(e.target.value)}
                className="mt-2 w-full px-3 py-2 rounded-lg bg-navy-950 border border-slate-700 text-xs text-ivory-100"
              />
            )}
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
              Package Preference:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label
                className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                  domesticPackagePreference === 'curated_signature'
                    ? 'bg-gold-500/15 border-gold-500 text-gold-200 font-semibold'
                    : 'bg-navy-950/60 border-slate-800 text-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="domPackagePref"
                  checked={domesticPackagePreference === 'curated_signature'}
                  onChange={() => setDomesticPackagePreference('curated_signature')}
                  className="hidden"
                />
                <CheckCircle2
                  className={`w-4 h-4 ${
                    domesticPackagePreference === 'curated_signature' ? 'text-gold-400' : 'text-slate-600'
                  }`}
                />
                <span>Our Curated Signature Plans (3★–5★)</span>
              </label>

              <label
                className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                  domesticPackagePreference === 'custom_tailored'
                    ? 'bg-gold-500/15 border-gold-500 text-gold-200 font-semibold'
                    : 'bg-navy-950/60 border-slate-800 text-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="domPackagePref"
                  checked={domesticPackagePreference === 'custom_tailored'}
                  onChange={() => setDomesticPackagePreference('custom_tailored')}
                  className="hidden"
                />
                <CheckCircle2
                  className={`w-4 h-4 ${
                    domesticPackagePreference === 'custom_tailored' ? 'text-gold-400' : 'text-slate-600'
                  }`}
                />
                <span>Build My Own Unique Custom Plan</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
              Preferred Hotel Tier:
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { tier: '3_star', label: '3★ Comfort' },
                { tier: '4_star', label: '4★ Premium' },
                { tier: '5_star', label: '5★ Luxury' },
              ].map((h) => (
                <button
                  key={h.tier}
                  type="button"
                  onClick={() => setHotelTier(h.tier as '3_star' | '4_star' | '5_star')}
                  className={`py-2 rounded-lg font-medium transition-all border cursor-pointer ${
                    hotelTier === h.tier
                      ? 'bg-gold-500 text-obsidian-950 font-bold border-gold-400'
                      : 'bg-navy-950 text-slate-300 border-slate-700'
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. Special Notes / Message (Optional) */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5">
          Special Notes / Dates / Family Group Size (Optional)
        </label>
        <textarea
          rows={isCompact ? 2 : 3}
          placeholder="e.g. Traveling in December with family (2 adults, 1 child). Need visa for Switzerland + Paris hotel suggestions."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-navy-950/80 border border-slate-700/80 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-ivory-100 placeholder:text-slate-500 text-xs sm:text-sm transition-all outline-none resize-none"
        />
      </div>

      {/* 6. Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Connecting to Concierge Desk...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Request Doorstep Callback</span>
          </>
        )}
      </button>

      <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        <span>100% Free Doorstep Consultation & Zero Obligation Assessment</span>
      </div>
    </form>
  );
};
