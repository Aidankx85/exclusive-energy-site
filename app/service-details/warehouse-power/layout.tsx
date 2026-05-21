import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse Power",
  description:
    "High-load electrical distribution, dock power, EV charging, and process feeds for logistics, manufacturing, and cold storage facilities across Southern California.",
  alternates: { canonical: "/service-details/warehouse-power" },
  openGraph: {
    title: "Warehouse Power | Exclusive Energy & Electric",
    description:
      "Switchgear, dock power, EV charging, and process feeds built for 24/7 operations.",
    url: "/service-details/warehouse-power",
  },
};

export default function WarehousePowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
