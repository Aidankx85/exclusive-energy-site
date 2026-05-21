import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lighting & Energy Efficiency",
  description:
    "LED retrofits, Title 24 commissioning, lighting controls, and rebate-driven energy upgrades for commercial buildings across Southern California.",
  alternates: { canonical: "/service-details/efficiency" },
  openGraph: {
    title: "Lighting & Energy Efficiency | Exclusive Energy & Electric",
    description:
      "Cut energy spend with LED retrofits, controls, and Title 24 commissioning — rebate-routed by a C-10 contractor.",
    url: "/service-details/efficiency",
  },
};

export default function EfficiencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
