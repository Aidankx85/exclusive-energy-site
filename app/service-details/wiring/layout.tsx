import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant Improvements",
  description:
    "Commercial electrical buildouts and tenant improvements — feeders, panels, lighting, low-voltage. Inspection-ready coordination with general contractors across Southern California.",
  alternates: { canonical: "/service-details/wiring" },
  openGraph: {
    title: "Tenant Improvements | Exclusive Energy & Electric",
    description:
      "Commercial TI electrical work for offices, retail, and warehouses across Southern California.",
    url: "/service-details/wiring",
  },
};

export default function WiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
