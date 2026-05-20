import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Services",
  description:
    "Tenant improvements, energy-efficient lighting, warehouse power, EV charging, warehouse automation, and 24/7 service & maintenance. Licensed commercial electrical contractor serving Southern California.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Exclusive Energy & Electric",
    description:
      "Commercial & industrial electrical services across Southern California — tenant improvements, EV charging, warehouse power, energy-efficient lighting, automation.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
