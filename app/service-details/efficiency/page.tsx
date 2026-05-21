import ServiceDetail from "../../components/ServiceDetail";

export default function EnergyEfficiencyPage() {
  return (
    <ServiceDetail
      number="02"
      title="Lighting & Energy Efficiency"
      subtitle="LED retrofits, controls, and rebate-driven upgrades."
      heroImage="/what2.jpeg"
      intro="We help building owners and tenants cut energy spend without compromising aesthetics or code requirements. From a single-tenant office to a 200,000 sq ft warehouse, we engineer and install lighting and controls that pay for themselves."
      scope={[
        "LED retrofits and full lighting replacements (interior, exterior, parking lot)",
        "Lighting controls — occupancy, daylight harvesting, scheduling",
        "Title 24 commissioning and acceptance testing",
        "Utility rebate paperwork and routing (SCE, LADWP, others)",
        "Energy audits and ROI projections",
        "Industrial high-bay and warehouse lighting upgrades",
      ]}
      whenThisFits={[
        "Aging fluorescent systems eating maintenance hours",
        "New leases with tenant build-out lighting allowances",
        "Properties chasing LEED or Title 24 compliance",
        "Owners pursuing utility rebates and tax incentives",
      ]}
      whyUs={[
        "Specialty in commercial lighting since 2007",
        "Direct manufacturer relationships for fixture pricing",
        "Title 24 commissioning handled in-house",
        "Rebate experience across major Southern California utilities",
      ]}
      faqs={[
        {
          q: "Can you guarantee energy savings?",
          a: "We provide projected savings based on photometric layout and your utility rate. Actual savings depend on usage, but most projects see meaningful lighting energy reductions — often 50% or more.",
        },
        {
          q: "Will rebates cover part of the project cost?",
          a: "Often a meaningful chunk — sometimes 30–50% depending on equipment and your utility's current program. We route the paperwork as part of the project.",
        },
        {
          q: "What about controls?",
          a: "We design controls strategy alongside the fixtures. For many properties, the controls deliver the bigger savings — fixtures cut watts, controls cut runtime.",
        },
      ]}
    />
  );
}
