import { BUSINESS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: SITE_NAME,
    legalName: BUSINESS.legalName,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    foundingDate: BUSINESS.founded,
    image: `${SITE_URL}/exclusive-logo.png`,
    logo: `${SITE_URL}/exclusive-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: BUSINESS.hoursDays,
        opens: BUSINESS.hoursOpen,
        closes: BUSINESS.hoursClose,
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Southern California" },
      { "@type": "AdministrativeArea", name: "Riverside County" },
      { "@type": "AdministrativeArea", name: "Orange County" },
      { "@type": "AdministrativeArea", name: "Los Angeles County" },
      { "@type": "AdministrativeArea", name: "San Bernardino County" },
    ],
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.linkedin,
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: `California Electrical Contractor License #${BUSINESS.license}`,
      },
    ],
    knowsAbout: [
      "Tenant Improvements",
      "Commercial Electrical",
      "Industrial Electrical",
      "EV Charging Stations",
      "Warehouse Power",
      "Energy-Efficient Lighting",
      "Lighting Retrofits",
      "Warehouse Automation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
