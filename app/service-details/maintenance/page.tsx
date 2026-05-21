import ServiceDetail from "../../components/ServiceDetail";

export default function MaintenancePage() {
  return (
    <ServiceDetail
      number="04"
      title="Service & Maintenance"
      subtitle="One number to call when something goes dark."
      heroImage="/what4.jpg"
      intro="We service the buildings we've wired — and plenty we haven't. Preventive maintenance keeps systems running; when something fails, our techs respond. Most service calls land an electrician on site the same day."
      scope={[
        "Preventive maintenance programs for panels, breakers, and switchgear",
        "Lighting service and ballast/driver replacements",
        "Emergency response — outages, tripped equipment, panel failures",
        "Tenant-specific and portfolio-wide service contracts",
        "Troubleshooting and code corrections",
        "Generator testing and emergency-lighting compliance",
      ]}
      whenThisFits={[
        "Property managers running multiple sites",
        "Owners who want scheduled inspections instead of break-fix surprises",
        "Tenants without on-site facilities staff",
        "After-hours emergencies — lighting out, partial outages, tripped panels",
      ]}
      whyUs={[
        "Same C-10 contractor since 2007 — your service tech is also the company that wired the buildings",
        "Service area covers Riverside, Orange, Los Angeles, San Bernardino counties",
        "Direct line to a real estimator/dispatcher — not a national call center",
        "Known to the buildings we wired, fast to learn the ones we didn't",
      ]}
      faqs={[
        {
          q: "Do you offer service contracts?",
          a: "Yes — monthly, quarterly, or annual visits depending on the portfolio. We scope a program that fits your budget and risk tolerance.",
        },
        {
          q: "Response time on emergencies?",
          a: "Most calls land a tech on site the same day. Call 951-299-7505 and you'll reach a real dispatcher.",
        },
        {
          q: "Do you service buildings you didn't install?",
          a: "Yes — roughly half our service calls are on buildings other contractors built. We document what we find and bring it up to code where needed.",
        },
      ]}
    />
  );
}
