import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Services",
  description:
    "Tenant improvements, lighting & energy efficiency, warehouse power, and 24/7 service & maintenance. Licensed C-10 commercial electrical subcontractor serving Southern California since 2007.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Exclusive Energy & Electric",
    description:
      "Commercial electrical capabilities across Southern California — tenant improvements, lighting retrofits, warehouse power, and ongoing service.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
