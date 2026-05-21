export type Sector = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
};

export const SECTORS: Sector[] = [
  {
    slug: "warehouse",
    title: "Warehouse",
    tagline: "Experts in Large-Scale Electrical Design.",
    description:
      "We design and build safe, high-capacity electrical systems for warehouses and distribution centers. Our work supports everything from high bay lighting to automation, conveyors, and advanced power management for logistics.",
    coverImage:
      "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751401471/Ca_Greenhouse-1_ffz9cb.heic",
  },
  {
    slug: "retail",
    title: "Retail & Food Chain",
    tagline: "Lighting Up Customer Experiences.",
    description:
      "We have helped power and remodel spaces for major retail and restaurant chains.",
    coverImage:
      "https://res.cloudinary.com/dtqxebti9/image/upload/v1753735143/IMG_3945_n42ciu.jpg",
  },
  {
    slug: "evcharge",
    title: "EV Charging Stations",
    tagline: "Powering a Greener Future.",
    description:
      "Exclusive Energy & Electric installs, integrates, and maintains electric vehicle charging stations for commercial, public, and private clients across Southern California.",
    coverImage:
      "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751402873/Toyo_Ev_GOAT_chargers-1_hs2njc.jpg",
  },
  {
    slug: "offices",
    title: "Office Projects",
    tagline: "Creating Productive, Energy-Efficient Workspaces.",
    description:
      "From new construction to tenant improvements, we provide comprehensive electrical and lighting solutions for modern office environments.",
    coverImage:
      "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751402017/Sysparo-1_z7iuxc.jpg",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    tagline: "Welcoming Spaces, Powered Right.",
    description:
      "Lighting, AV, and electrical infrastructure for hotels, restaurants, and hospitality venues across Southern California.",
    coverImage:
      "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751403403/Hyatt_Irvine_-_1_prjoof.heic",
  },
  {
    slug: "government",
    title: "Government Projects",
    tagline: "Proven Experience in Public Sector Construction.",
    description:
      "Our team delivers high-quality electrical and lighting solutions for fire stations, city buildings, police stations, and other government projects.",
    coverImage:
      "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751398014/Firesttion_8_1_1_w4h2go.jpg",
  },
  {
    slug: "miscellaneous",
    title: "Miscellaneous",
    tagline: "All Other Projects.",
    description:
      "Explore a variety of unique, challenging, or specialty electrical and lighting projects we have completed.",
    coverImage:
      "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751402525/Rexford_ps3tuq.heic",
  },
];

export const SECTOR_SLUGS = SECTORS.map((s) => s.slug);

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
