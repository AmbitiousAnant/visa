/**
 * CENTRAL BRAND & CONCIERGE CONFIGURATION
 * Easily switch brand identity, contact details, and messaging in one place.
 */

export interface BrandConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  founder: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  positioning: string;
  experienceBadge: string;
  operatingHours: string;
  location: string;
}

export const BRAND: BrandConfig = {
  // Primary brand active:
  brandName: "Vishwa Setu Visa & Holidays",
  shortName: "Vishwa Setu",

  // ALTERNATIVE BRAND NAMES (Uncomment if needed):
  // brandName: "Thakkur Global Visa & Holidays",
  // shortName: "Thakkur Global",
  // brandName: "ShubhYatra Global Concierge",
  // shortName: "ShubhYatra",

  tagline: "We Plan, You Enjoy",
  subTagline: "Door-to-Door International Visa Arrangements & Bespoke Luxury Holidays — The Full Headache is Ours!",
  founder: "Rajiv Thakkur",
  phone: "9891045669",
  phoneFormatted: "+91 9891045669",
  email: "thakkur.raj73@gmail.com",
  positioning: "Best Past Clients Happiness Record | Complete End-to-End Concierge",
  experienceBadge: "100% Transparent Documentation | Zero Rejection Strategy",
  operatingHours: "24x7 VIP Concierge Desk",
  location: "New Delhi & Pan-India Doorstep Service",
};

/**
 * Generates an instant WhatsApp chat URL with a tailored, pre-filled message
 */
export function getWhatsAppInquiryUrl(params: {
  fullName?: string;
  phone?: string;
  email?: string;
  interestType?: string;
  destination?: string;
  visaOnlyOrPackage?: string;
  hotelTier?: string;
  message?: string;
}): string {
  const cleanPhone = "919891045669";
  const lines: string[] = [
    `🌟 *New Doorstep Concierge Inquiry — ${BRAND.shortName}*`,
    `----------------------------------------`,
  ];

  if (params.fullName) lines.push(`👤 *Name:* ${params.fullName}`);
  if (params.phone) lines.push(`📱 *Phone:* ${params.phone}`);
  if (params.email) lines.push(`✉️ *Email:* ${params.email}`);
  if (params.interestType) lines.push(`🎯 *Interest:* ${params.interestType}`);
  if (params.destination) lines.push(`📍 *Target Destination / Country:* ${params.destination}`);
  if (params.visaOnlyOrPackage) lines.push(`📋 *Service Scope:* ${params.visaOnlyOrPackage}`);
  if (params.hotelTier) lines.push(`🏨 *Hotel Category:* ${params.hotelTier}`);
  if (params.message) lines.push(`💬 *Notes:* ${params.message}`);

  lines.push(`----------------------------------------`);
  lines.push(`"We Plan, You Enjoy! Please assist me with end-to-end planning."`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${cleanPhone}?text=${text}`;
}
