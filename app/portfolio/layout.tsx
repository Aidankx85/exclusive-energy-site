import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Commercial electrical projects across Southern California — warehouse, retail, EV charging, government, hospitality, offices. Real work for real clients including Amazon, Chipotle, Hyatt, and Toyo Tires.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Exclusive Energy & Electric",
    description:
      "Browse commercial electrical projects across warehouse, retail, EV charging, government, hospitality, and office sectors.",
    url: "/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
