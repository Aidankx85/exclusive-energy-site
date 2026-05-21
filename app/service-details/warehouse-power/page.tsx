import ServiceDetail from "../../components/ServiceDetail";

export default function WarehousePowerPage() {
  return (
    <ServiceDetail
      number="03"
      title="Warehouse Power"
      subtitle="High-load distribution built for 24/7 operations."
      heroImage="/what3.jpg"
      intro="Warehouses, distribution centers, and manufacturing floors don't tolerate downtime. We design and install electrical infrastructure that holds up to heavy equipment, conveyors, EV charging fleets, and process loads — sized right, routed cleanly, and ready for the demands of round-the-clock operations."
      scope={[
        "Service entrances, switchgear, and main distribution",
        "Forklift and material-handling power",
        "Conveyor and process feeds",
        "Dock-area receptacles and lighting",
        "EV charging stations (Level 2 and DC fast charging)",
        "Cold storage and refrigeration power",
        "Generator and standby power coordination",
      ]}
      whenThisFits={[
        "Ground-up warehouse and distribution center builds",
        "Tenant fitouts for logistics, 3PL, and cold-chain operators",
        "EV fleet electrification for last-mile delivery",
        "Process additions in existing buildings",
        "Cold storage and refrigerated facility expansions",
      ]}
      whyUs={[
        "Major-client warehouse experience (Amazon, Toyo Tires)",
        "Heavy-equipment and high-load power expertise",
        "C-10 licensed since 2007",
        "In-house estimating and design-assist for general contractors",
      ]}
      faqs={[
        {
          q: "Can you work in 24/7 operating environments?",
          a: "Yes — most of our warehouse work is on active facilities. We coordinate around production windows and stage work to minimize downtime.",
        },
        {
          q: "EV charging — Level 2 or DC fast charging?",
          a: "Both. We've installed everything from small Level 2 fleets to commercial DC fast charging hubs.",
        },
        {
          q: "Do you do switchgear and main distribution work?",
          a: "Yes — main switchgear, transformers, and distribution down to subpanels. We coordinate utility cut-overs with SCE and other providers.",
        },
      ]}
    />
  );
}
