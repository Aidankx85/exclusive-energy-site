"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SiteNav from "../components/SiteNav";
import { cld } from "../lib/cloudinary";
import { SECTORS } from "./sectors";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SiteNav />

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={cld(SECTORS[0].coverImage, { width: 1920 })}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-4xl">
            The buildings we&apos;ve powered across Southern California.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From warehouse builds for Amazon to lighting retrofits for retail
            chains, Hyatt hotels, Toyo Tires, and government facilities — we
            power commercial projects across every sector.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold text-center mb-3">
            Sectors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Browse by Sector
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SECTORS.map((sector, idx) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link
                  href={`/portfolio/${sector.slug}`}
                  className="group block relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-gray-200"
                >
                  <Image
                    src={cld(sector.coverImage, { width: 800 })}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                      {sector.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/85 line-clamp-2">
                      {sector.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-blue-300 transition-all group-hover:translate-x-1">
                      View work →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Have a project to add to the portfolio?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Send us your scope, timeline, or drawings. We&apos;ll get back with
            a real estimate from people who&apos;ve been wiring Southern
            California since 2007.
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
