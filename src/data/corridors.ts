export interface TourPackage {
  title: string;
  duration: string;
  highlights: string[];
}

export interface Corridor {
  id: string;
  name: string;
  region: string;
  badge: string;
  heroImage: string;
  flagUrl: string;
  countriesIncluded: string[];
  visaServices: string[];
  processingTime: string;
  successRate: string;
  samplePackages: TourPackage[];
  popularCity: string;
}

export const CORRIDORS: Corridor[] = [
  {
    id: "schengen-europe",
    name: "Schengen Europe",
    region: "France, Switzerland, Italy, Germany & Austria",
    badge: "Most Requested European Corridor",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop", // Swiss Alps & Lauterbrunnen
    flagUrl: "https://flagcdn.com/w320/eu.png",
    countriesIncluded: ["France", "Switzerland", "Italy", "Germany", "Austria"],
    visaServices: [
      "Multi-Country Schengen Dossier Architecture",
      "VFS / TLS Priority Slot Scheduling & Biometric Support",
      "Embassy-Grade Detailed Daily Travel Itinerary",
      "Verifiable Confirmed Air Ticket & Luxury Hotel Vouchers",
      "Mandatory €30,000+ Travel Medical Insurance Cover",
      "Personal Financial & ITR Documentation Audit",
    ],
    processingTime: "10-15 Business Days",
    successRate: "99.4% Approval Track Record",
    samplePackages: [
      {
        title: "Swiss Alps & Parisian Romance",
        duration: "7 Nights / 8 Days",
        highlights: ["Eiffel Tower VIP Access", "Seine River Dinner Cruise", "Jungfraujoch - Top of Europe", "Lucerne Lake Steamer"],
      },
      {
        title: "Grand Italian & Mediterranean Odyssey",
        duration: "9 Nights / 10 Days",
        highlights: ["Rome Colosseum Private Tour", "Florence Uffizi Gallery", "Venice Private Gondola Ride", "Amalfi Coastal Drive"],
      },
    ],
    popularCity: "Paris & Zurich",
  },
  {
    id: "uae-dubai",
    name: "UAE & Middle East",
    region: "Dubai, Abu Dhabi & Ras Al Khaimah",
    badge: "Express 48-Hour e-Visa Corridor",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", // Dubai Skyline & Burj Khalifa
    flagUrl: "https://flagcdn.com/w320/ae.png",
    countriesIncluded: ["United Arab Emirates", "Dubai", "Abu Dhabi"],
    visaServices: [
      "Express 24 to 48-Hour Official Tourist e-Visa",
      "Zero-Hassle Family & Large Group Approvals",
      "OK-to-Board Airline Coordination",
      "Multi-Entry 30 / 60-Day Flexible Options",
      "Doorstep Document Verification",
    ],
    processingTime: "24-48 Hours Guaranteed",
    successRate: "99.9% Instant Issuance",
    samplePackages: [
      {
        title: "Royal Dubai Marina, Burj Khalifa & Desert Safari Escape",
        duration: "4 Nights / 5 Days",
        highlights: ["Burj Khalifa 124th/125th Floor Lounge", "VIP 4x4 Dune Bashing Desert Safari", "Marina Luxury Dhow Yacht Cruise", "Dubai Mall & Gold Souk Tour"],
      },
      {
        title: "Abu Dhabi Yas Island Family Luxury",
        duration: "5 Nights / 6 Days",
        highlights: ["Ferrari World Unlimited Passes", "Warner Bros. World", "Sheikh Zayed Grand Mosque Private Tour", "Emirates Palace High Tea"],
      },
    ],
    popularCity: "Dubai Downtown",
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    region: "London, England & Scottish Highlands",
    badge: "Royal Heritage & Family Corridor",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop", // London Big Ben & Thames
    flagUrl: "https://flagcdn.com/w320/gb.png",
    countriesIncluded: ["England", "Scotland", "Wales"],
    visaServices: [
      "Standard Visitor (6-Month, 2-Year, 5-Year & 10-Year) Filing",
      "VFS Priority & Super Priority Biometric Slot Booking",
      "UKVI Financial Sponsorship & Evidence Dossier Prep",
      "Employment Ties & Property Valuation Documentation Guidance",
      "Comprehensive Cover Letter by Senior Visa Architects",
    ],
    processingTime: "3-4 Weeks (Priority 5-Day Available)",
    successRate: "98.9% Approval Track Record",
    samplePackages: [
      {
        title: "Royal London & Scottish Highlands Heritage Tour",
        duration: "8 Nights / 9 Days",
        highlights: ["Buckingham Palace & Tower of London", "Windsor Castle Day Trip", "First-Class Train to Edinburgh", "Loch Ness & Highlands Scenic Drive"],
      },
    ],
    popularCity: "London & Edinburgh",
  },
  {
    id: "usa-canada",
    name: "USA & Canada",
    region: "North American Luxury Corridor",
    badge: "10-Year Long-Validity Visas",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop", // NYC Manhattan Skyline
    flagUrl: "https://flagcdn.com/w320/us.png",
    countriesIncluded: ["United States", "Canada"],
    visaServices: [
      "US B1/B2 Tourist & Business DS-160 Precision Filing",
      "24/7 Monitoring for Early US Embassy Biometric/Interview Slots",
      "1-on-1 Visa Mock Interview Coaching with Rajiv Thakkur's Desk",
      "Canada Visitor Visa Portal Filing & VFS Passport Submission",
      "Complete Family Ties, Assets & Ties to India Dossier",
    ],
    processingTime: "Slot Monitoring + 3-5 Days Post-Interview",
    successRate: "97.8% Approval Rate",
    samplePackages: [
      {
        title: "East & West Coast American Dream",
        duration: "10 Nights / 11 Days",
        highlights: ["New York Times Square & Statue of Liberty", "Las Vegas Strip & Helicopter Night Tour", "Grand Canyon West Rim", "Los Angeles & Hollywood Hills"],
      },
      {
        title: "Canadian Rockies & Niagara Luxury Trail",
        duration: "8 Nights / 9 Days",
        highlights: ["Banff National Park & Lake Louise", "Columbia Icefield Glacier Skywalk", "Toronto CN Tower VIP Dining", "Niagara Falls Hornblower Cruise"],
      },
    ],
    popularCity: "New York & Banff",
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    region: "Singapore, Bali, Thailand, Malaysia & Vietnam",
    badge: "Tropical Beach & Family Favorite",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop", // Singapore Marina Bay Sands
    flagUrl: "https://flagcdn.com/w320/sg.png",
    countriesIncluded: ["Singapore", "Thailand", "Malaysia", "Bali (Indonesia)", "Vietnam"],
    visaServices: [
      "Direct Authorized Agent Submission for Singapore e-Visa",
      "Thailand e-Visa / Fast-Track Visa-on-Arrival Clearance",
      "Malaysia eNTRI / Tourist Pass Electronic Filing",
      "Bali electronic Visa on Arrival (e-VoA) & QR Customs Pass",
      "Seamless Multi-Country Southeast Asian Transfers",
    ],
    processingTime: "2-4 Business Days",
    successRate: "99.8% Approval Rate",
    samplePackages: [
      {
        title: "Singapore Marina Bay & Sentosa Family Cruise",
        duration: "4 Nights / 5 Days",
        highlights: ["Gardens by the Bay Cloud Forest", "Universal Studios VIP Access", "Marina Bay Sands Infinity Pool Experience", "Night Safari Tram"],
      },
      {
        title: "Tropical Bali Private Pool Villa Retreat",
        duration: "5 Nights / 6 Days",
        highlights: ["Ubud Floating Breakfast in Private Villa", "Tegalalang Rice Terraces Swing", "Nusa Penida Kelingking Beach Boat Tour", "Uluwatu Sunset Temple Fire Dance"],
      },
    ],
    popularCity: "Singapore & Ubud",
  },
  {
    id: "japan-australia",
    name: "Japan & Australia",
    region: "East Asia & Pacific Luxury Horizons",
    badge: "Exotic Culture & Pacific Wonders",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", // Mount Fuji & Cherry Blossoms
    flagUrl: "https://flagcdn.com/w320/jp.png",
    countriesIncluded: ["Japan", "Australia", "New Zealand"],
    visaServices: [
      "Japan Sticker Visa & Official eVisa Submission",
      "Australia Subclass 600 Fast-Track Online Filing",
      "Certified Day-by-Day Itinerary & Accommodation Proofs",
      "Financial Verification & Income Proof Preparation",
      "End-to-End Tracking until Visa Grant Notification",
    ],
    processingTime: "7-15 Business Days",
    successRate: "98.7% Approval Rate",
    samplePackages: [
      {
        title: "Tokyo, Mount Fuji & Kyoto Cherry Blossom Trail",
        duration: "7 Nights / 8 Days",
        highlights: ["Shinkansen Bullet Train Passes", "Mount Fuji 5th Station & Lake Kawaguchiko", "Kyoto Fushimi Inari Shrine Walk", "Tokyo Shibuya Sky Deck"],
      },
      {
        title: "Sydney Opera & Gold Coast Explorer",
        duration: "8 Nights / 9 Days",
        highlights: ["Sydney Opera House Guided Tour", "Bondi Beach Coastal Walk", "Blue Mountains Scenic World", "Gold Coast Surfers Paradise Helicopter Tour"],
      },
    ],
    popularCity: "Tokyo & Sydney",
  },
];
