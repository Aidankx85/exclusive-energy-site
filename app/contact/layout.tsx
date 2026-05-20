import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a project estimate from Exclusive Energy & Electric. Call 951-299-7505 or visit 102 E Grand Blvd, Corona, CA 92879. Mon–Fri 7AM–4PM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Exclusive Energy & Electric",
    description:
      "Call 951-299-7505 for a commercial electrical estimate. Located in Corona, CA — serving all of Southern California.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
