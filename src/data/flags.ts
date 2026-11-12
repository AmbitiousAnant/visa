/**
 * World flags with verified high-resolution FlagCDN PNGs
 * Completely eliminates Windows Unicode Emoji rendering bugs.
 */

export interface FlagItem {
  id: string;
  name: string;
  iso: string;
  flagUrl: string;
  visaType: string;
  processingTime: string;
  corridorId?: string; // Corresponds to corridor section
}

export const WORLD_FLAGS: FlagItem[] = [
  {
    id: "schengen-eu",
    name: "Schengen Europe",
    iso: "eu",
    flagUrl: "https://flagcdn.com/w320/eu.png",
    visaType: "Multi-Entry Tourist & Business",
    processingTime: "10-15 Days",
    corridorId: "schengen-europe",
  },
  {
    id: "france",
    name: "France",
    iso: "fr",
    flagUrl: "https://flagcdn.com/w320/fr.png",
    visaType: "Schengen Short-Stay",
    processingTime: "10-12 Days",
    corridorId: "schengen-europe",
  },
  {
    id: "switzerland",
    name: "Switzerland",
    iso: "ch",
    flagUrl: "https://flagcdn.com/w320/ch.png",
    visaType: "Alpine Luxury Corridor",
    processingTime: "8-12 Days",
    corridorId: "schengen-europe",
  },
  {
    id: "uae",
    name: "UAE & Dubai",
    iso: "ae",
    flagUrl: "https://flagcdn.com/w320/ae.png",
    visaType: "Express 30/60 Day e-Visa",
    processingTime: "24-48 Hours",
    corridorId: "uae-dubai",
  },
  {
    id: "uk",
    name: "United Kingdom",
    iso: "gb",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    visaType: "Standard Visitor & Family",
    processingTime: "3-4 Weeks (Priority Avail)",
    corridorId: "united-kingdom",
  },
  {
    id: "usa",
    name: "United States",
    iso: "us",
    flagUrl: "https://flagcdn.com/w320/us.png",
    visaType: "B1/B2 10-Year Multiple",
    processingTime: "Slot Monitoring & Filing",
    corridorId: "usa-canada",
  },
  {
    id: "canada",
    name: "Canada",
    iso: "ca",
    flagUrl: "https://flagcdn.com/w320/ca.png",
    visaType: "Multiple Entry Visitor Visa",
    processingTime: "4-6 Weeks",
    corridorId: "usa-canada",
  },
  {
    id: "japan",
    name: "Japan",
    iso: "jp",
    flagUrl: "https://flagcdn.com/w320/jp.png",
    visaType: "Single & Multi-Entry Sticker/e-Visa",
    processingTime: "7-10 Days",
    corridorId: "japan-australia",
  },
  {
    id: "australia",
    name: "Australia",
    iso: "au",
    flagUrl: "https://flagcdn.com/w320/au.png",
    visaType: "Subclass 600 Fast-Track",
    processingTime: "15-20 Days",
    corridorId: "japan-australia",
  },
  {
    id: "singapore",
    name: "Singapore",
    iso: "sg",
    flagUrl: "https://flagcdn.com/w320/sg.png",
    visaType: "e-Visa & SG Arrival Card",
    processingTime: "3-5 Days",
    corridorId: "southeast-asia",
  },
  {
    id: "thailand",
    name: "Thailand",
    iso: "th",
    flagUrl: "https://flagcdn.com/w320/th.png",
    visaType: "e-Visa / Visa on Arrival Prep",
    processingTime: "3-5 Days",
    corridorId: "southeast-asia",
  },
  {
    id: "indonesia",
    name: "Bali & Indonesia",
    iso: "id",
    flagUrl: "https://flagcdn.com/w320/id.png",
    visaType: "e-VoA & Customs Concierge",
    processingTime: "Instant / 24 Hours",
    corridorId: "southeast-asia",
  },
  {
    id: "india",
    name: "India (Domestic Elite)",
    iso: "in",
    flagUrl: "https://flagcdn.com/w320/in.png",
    visaType: "VIP Pan-India Domestic Holidays",
    processingTime: "Immediate Concierge",
    corridorId: "domestic-circuits",
  },
];
