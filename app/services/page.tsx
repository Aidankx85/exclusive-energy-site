"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SiteNav from "../components/SiteNav";

type Capability = {
  number: string;
  title: string;
  body: string;
  bullets: string[];
  img: string;
  href: string;
};

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Tenant Improvements",
    body: "We power buildouts and upgrades for offices, warehouses, and retail. Feeders, panels, branch circuits, lighting, and low-voltage — wired clean and inspection-ready so our general-contractor partners can close out on schedule.",
    bullets: [
      "New service & panel installs",
      "Lighting & power for offices, retail, restaurants",
      "Low-voltage rough-in & device trim",
      "Coordination with GC schedules and inspectors",
    ],
    img: "/what1.jpeg",
    href: "/service-details/wiring",
  },
  {
    number: "02",
    title: "Lighting & Energy Efficiency",
    body: "LED retrofits, Title 24 commissioning, lighting controls, and rebate-driven upgrades. We help owners and tenants cut energy spend while hitting the foot-candle, aesthetics, and code targets each space actually needs.",
    bullets: [
      "Interior, exterior, industrial & retail lighting",
      "LED retrofits and controls upgrades",
      "Title 24 commissioning",
      "Utility rebates & tax-incentive routing",
    ],
    img: "/what2.jpeg",
    href: "/service-details/efficiency",
  },
  {
    number: "03",
    title: "Warehouse Power",
    body: "High-load distribution, dock power, EV charging, and process feeds for logistics, manufacturing, and cold storage. Sized right, routed cleanly, and built for the demands of 24/7 operations.",
    bullets: [
      "Service entrances & switchgear",
      "EV charging stations (Level 2 / DCFC)",
      "Forklift & material-handling power",
      "Cold storage and process feeds",
    ],
    img: "/what3.jpg",
    href: "/service-details/warehouse-power",
  },
  {
    number: "04",
    title: "Service & Maintenance",
    body: "Scheduled inspections, panel maintenance, troubleshooting, and emergency repairs for the buildings we wired — and the ones we didn't. One number to call when something goes dark.",
    bullets: [
      "Preventive maintenance programs",
      "Panel & breaker servicing",
      "Lighting & ballast replacements",
      "Emergency response across SoCal",
    ],
    img: "/what4.jpg",
    href: "/service-details/maintenance",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SiteNav />

      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/what3.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold mb-5">
            Capabilities
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-4xl">
            We power the buildings other contractors deliver.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Exclusive Energy & Electric is a C-10 commercial electrical
            subcontractor based in Corona, California. We wire, light, and
            maintain the spaces that Southern California&apos;s leading general
            contractors and owners build — from ground-up warehouses to tenant
            improvements for Amazon, Chipotle, Hyatt, and Toyo Tires.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold">
            License #902374 · ABC Member · Founded 2007
          </p>
        </div>
      </section>

      {/* Capabilities — alternating split layout */}
      {CAPABILITIES.map((cap, idx) => {
        const imageOnRight = idx % 2 === 1;
        return (
          <motion.section
            key={cap.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`py-20 md:py-24 px-6 ${
              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl ${
                  imageOnRight ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={cap.img}
                  alt={cap.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className={imageOnRight ? "md:order-1" : ""}>
                <p className="text-sm font-bold text-blue-600 tracking-[0.2em] mb-3">
                  {cap.number}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                  {cap.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {cap.body}
                </p>
                <ul className="space-y-2 mb-8">
                  {cap.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-gray-700"
                    >
                      <span className="text-blue-600 font-bold mt-1">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={cap.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition group"
                >
                  Learn more
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Sectors band */}
      <section className="bg-zinc-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-5">
            Where We Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Commercial · Industrial · Government · Hospitality
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-10">
            Warehouses, retail chains, offices, EV charging stations, religious
            centers, and government buildings — across Southern California.
          </p>
          <Link
            href="/portfolio"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-zinc-900 transition"
          >
            See our portfolio
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Have a project in mind?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Send us your plans, scope, or timeline. You&apos;ll get a real
            estimate from people who&apos;ve been wiring Southern California
            since 2007.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            Get a free estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
