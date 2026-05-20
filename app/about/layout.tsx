import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded 2007, Exclusive Energy & Electric is a Southern California commercial electrical contractor — projects for Amazon, Chipotle, Hyatt, Toyo Tires and more. Locally owned and operated in Corona, CA. License #902374.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Exclusive Energy & Electric",
    description:
      "Reliable, precise commercial electrical contracting since 2007. Tenant improvements, ground-up builds, design-build, lighting retrofits.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
