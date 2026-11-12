export interface CorePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface DomesticCircuit {
  id: string;
  name: string;
  subTitle: string;
  badge: string;
  heroImage: string;
  destinations: string[];
  duration: string;
  highlights: string[];
  transport: string;
  stays: string;
  photographyFeature: string;
}

export const CORE_PILLARS: CorePillar[] = [
  {
    number: "01",
    title: "3★ to 5★ Handpicked Premium Hotels & Resorts",
    subtitle: "Heritage Palaces, Mountain Villas & Beachfront Suites",
    description: "Every property is personally vetted by Rajiv Thakkur's team for hygiene, warm hospitality, gourmet cuisine, and royal views.",
    iconName: "Hotel",
  },
  {
    number: "02",
    title: "Private Chauffeur-Driven AC Transport",
    subtitle: "Innova Crysta, Fortuner & Luxury VIP Coaches",
    description: "Experienced, polite, English/Hindi speaking uniformed chauffeurs dedicated entirely to your family 24x7 throughout the journey.",
    iconName: "Car",
  },
  {
    number: "03",
    title: "Curated VIP Sightseeing & Local Experiences",
    subtitle: "Zero Queue Waits, Private Guides & Exclusive Access",
    description: "Skip ticket queues with pre-booked VIP passes, insider culinary trails, private boat hires, and authentic folk performances.",
    iconName: "Compass",
  },
  {
    number: "04",
    title: "Dedicated On-Trip Photography & Candid Sessions",
    subtitle: "Capture Every Precious Family Memory Forever",
    description: "Complimentary planned candid photography sessions at iconic landmarks so you bring home gallery-worthy memories without hassle.",
    iconName: "Camera",
  },
];

export const DOMESTIC_CIRCUITS: DomesticCircuit[] = [
  {
    id: "rajasthan",
    name: "Royal Rajasthan",
    subTitle: "Jaipur, Udaipur, Jaisalmer & Jodhpur",
    badge: "Heritage Royalty & Desert Forts",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop", // Amber Fort & Jaipur Palace
    destinations: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
    duration: "6 Nights / 7 Days or 8 Nights / 9 Days",
    highlights: [
      "Royal Heritage Palace Stays & Private Courtyards",
      "Sam Sand Dunes Luxury Swiss Tents & Camel Safari",
      "Private Sunset Boat Cruise on Lake Pichola, Udaipur",
      "Mehrangarh Fort Guided VIP Walk & Blue City Exploration",
    ],
    transport: "Private AC Innova Crysta throughout with Highway toll/parking included",
    stays: "Handpicked 4★ & 5★ Heritage Haveli / Palaces",
    photographyFeature: "Golden Hour Royal Portrait Session at City Palace & Thar Desert Dunes",
  },
  {
    id: "kashmir-ladakh",
    name: "Kashmir & Ladakh",
    subTitle: "Srinagar, Gulmarg, Pahalgam & Leh",
    badge: "Paradise on Earth & High Passes",
    heroImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop", // Dal Lake Shikara
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Leh"],
    duration: "5 Nights / 6 Days or 7 Nights / 8 Days",
    highlights: [
      "Exclusive Luxury Dal Lake Wood-Carved Houseboat Stay",
      "Gulmarg Gondola Phase 1 & Phase 2 Snow Peaks Experience",
      "Pahalgam Betaab Valley & Aru Valley Pine Forest Drives",
      "Private Shikara Sunset Ride with Traditional Kehwa Service",
    ],
    transport: "Dedicated Local 4x4 / AC SUV with experienced mountain chauffeurs",
    stays: "Deluxe Heritage Houseboat + 4★/5★ Mountain Valley Pine Resorts",
    photographyFeature: "Traditional Kashmiri Pheran Shikara Shoot & Snow-Peak Candid Session",
  },
  {
    id: "kerala-south",
    name: "Kerala & South India",
    subTitle: "Munnar, Alleppey, Kovalam & Ooty",
    badge: "Serene Backwaters & Mist-Clad Tea Hills",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop", // Kerala Houseboat
    destinations: ["Munnar", "Thekkady", "Alleppey", "Kovalam", "Wayanad"],
    duration: "5 Nights / 6 Days or 6 Nights / 7 Days",
    highlights: [
      "Exclusive Private AC Luxury Houseboat with Personal Chef",
      "Munnar Endless Green Tea Plantations & Waterfall Drives",
      "Periyar Wildlife Sanctuary Spice Plantation Tour",
      "Authentic Kathakali & Kalaripayattu Martial Arts Evening",
    ],
    transport: "Dedicated AC Sedan / Innova Crysta with courteous local driver",
    stays: "Colonial Tea Estate Bungalows & 5★ Beachfront Ayurvedic Resorts",
    photographyFeature: "Tea Garden Morning Mist Walk & Houseboat Deck Sunset Family Portraits",
  },
  {
    id: "goa-coastal",
    name: "Goa & Coastal Elite",
    subTitle: "North & South Goa Luxury Beachside",
    badge: "Sun, Sand, Private Yachts & Portuguese Heritage",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop", // Goa Tropical Beach
    destinations: ["Candolim", "Morjim", "Cavelossim", "Panaji", "Palolem"],
    duration: "3 Nights / 4 Days or 4 Nights / 5 Days",
    highlights: [
      "3★ to 5★ Direct Beachfront Luxury Resorts with Private Cabanas",
      "Private 2-Hour Sunset Catamaran / Yacht Cruise on Mandovi River",
      "Old Goa Latin Quarter (Fontainhas) Guided Heritage Walking Tour",
      "Curated VIP Beach Shack Dining & Water Sports Coordination",
    ],
    transport: "Private Chauffeur-Driven AC Car for airport transfers and daily sightseeing",
    stays: "5★ Taj / Marriott or Boutique Luxury Beach Resorts",
    photographyFeature: "Golden Hour Beachside Candid Shoot & Portuguese Heritage Street Session",
  },
  {
    id: "himachal-uttarakhand",
    name: "Himachal & Uttarakhand",
    subTitle: "Shimla, Manali, Dharamshala, Mussoorie, Nainital & Corbett",
    badge: "Valley-View Cottages & Pristine Pines",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop", // Himalayan Valley & Pines
    destinations: ["Shimla", "Manali", "Dharamshala", "Mussoorie", "Nainital", "Jim Corbett"],
    duration: "5 Nights / 6 Days or 7 Nights / 8 Days",
    highlights: [
      "Breathtaking Panoramic Mountain & Snow-Valley Balcony Cottages",
      "Solang Valley Adventure & Atal Tunnel Crossing",
      "Private 4x4 Jeep Safari in Jim Corbett National Park",
      "Mall Road Strolls & Historic British-Era Heritage Sites",
    ],
    transport: "Private Hill-Specialist Innova Crysta / SUV with verified chauffeurs",
    stays: "Handpicked 4★/5★ Mountain Resorts & Boutique Apple Orchard Cottages",
    photographyFeature: "Pine Forest Walking Trail Shoot & Mountain Sunrise Drone / Candid Stills",
  },
  {
    id: "andaman-northeast",
    name: "Andaman & North-East",
    subTitle: "Havelock, Neil Island, Gangtok, Darjeeling & Shillong",
    badge: "Turquoise Lagoons & Cloud-Topped Monasteries",
    heroImage: "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=1200&auto=format&fit=crop", // Andaman Turquoise Sea
    destinations: ["Port Blair", "Havelock Island", "Neil Island", "Gangtok", "Darjeeling", "Shillong"],
    duration: "5 Nights / 6 Days or 6 Nights / 7 Days",
    highlights: [
      "Radhanagar Beach White Sands (Ranked Top 10 in the World)",
      "Makruzz Premium Private Catamaran Ferry Tickets Pre-Booked",
      "Elephanta Island Coral Snorkeling & Undersea Sea-Walk",
      "Darjeeling Tiger Hill Kanchenjunga Sunrise & Heritage Toy Train",
    ],
    transport: "Private Island Transfers & AC Mountain Cruisers with local coordinators",
    stays: "Luxury Sea-Facing Beachfront Cottages & Tea Estate Boutiques",
    photographyFeature: "Crystal Clear Coral Beach Shoot & Kanchenjunga Sunrise Golden Silhouette",
  },
];
