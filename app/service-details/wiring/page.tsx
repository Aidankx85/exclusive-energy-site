import ServiceDetail from "../../components/ServiceDetail";

export default function TenantImprovementsPage() {
  return (
    <ServiceDetail
      number="01"
      title="Tenant Improvements"
      subtitle="Commercial buildouts wired clean and inspection-ready."
      heroImage="/what1.jpeg"
      intro="We've been the electrical subcontractor of choice for tenant improvements across Southern California since 2007. Whether you're a general contractor bidding out a fast-track TI for a national retailer or a building owner reconfiguring office layouts, we deliver electrical scope that closes out on schedule."
      scope={[
        "New service entrances and panel installs",
        "Branch circuit rough-in and trim",
        "Lighting, fixtures, and lighting controls",
        "Low-voltage rough-in (data, AV, security back-boxes)",
        "Code corrections and permit drawings",
        "GC coordination from preconstruction through inspection",
      ]}
      whenThisFits={[
        "Retail and restaurant rollouts where speed-to-open matters",
        "Office reconfigurations between leases",
        "Warehouse-to-office or office-to-flex space conversions",
        "Multi-suite buildings cycling through tenants",
      ]}
      whyUs={[
        "18+ years of TI experience across Southern California",
        "C-10 Electrical Contractor — CSLB License #902374",
        "Trusted by Amazon, Chipotle, Hyatt, Toyo Tires",
        "ABC member, in-house estimating and project management",
      ]}
      faqs={[
        {
          q: "Can you handle fast-track schedules?",
          a: "Yes — we've delivered TI scope on tight turnarounds for retail rollouts. The earlier we're looped in for preconstruction, the cleaner the close-out.",
        },
        {
          q: "Do you work as a sub to general contractors?",
          a: "That's our primary role. We coordinate with GCs from preconstruction through final inspection, with in-house estimating to support bid packages.",
        },
        {
          q: "What's your service area?",
          a: "Southern California — Riverside, Orange, Los Angeles, and San Bernardino counties most often.",
        },
      ]}
    />
  );
}
