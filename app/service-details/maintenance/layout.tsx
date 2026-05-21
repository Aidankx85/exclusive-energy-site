import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service & Maintenance",
  description:
    "Scheduled inspections, panel maintenance, troubleshooting, and emergency electrical repairs across Southern California. Call 951-299-7505 when something goes dark.",
  alternates: { canonical: "/service-details/maintenance" },
  openGraph: {
    title: "Service & Maintenance | Exclusive Energy & Electric",
    description:
      "Preventive maintenance, emergency repairs, and ongoing electrical service for commercial buildings.",
    url: "/service-details/maintenance",
  },
};

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
