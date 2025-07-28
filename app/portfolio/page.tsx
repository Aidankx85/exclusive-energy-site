"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Government",
    href: "/portfolio/goverment", // your route spelling!
    img: "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751398014/Firesttion_8_1_1_w4h2go.jpg"
  },
  {
    name: "Warehouse",
    href: "/portfolio/warehouse",
    img: "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751401471/Ca_Greenhouse-1_ffz9cb.heic"
  },
  {
    name: "Offices",
    href: "/portfolio/offices",
    img: "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751402017/Sysparo-1_z7iuxc.jpg"
  },
  {
    name: "Retail / Food Chain",
    href: "/portfolio/retail",
    img: "https://res.cloudinary.com/dtqxebti9/image/upload/v1753735143/IMG_3945_n42ciu.jpg"
  },
  {
    name: "Hospitality",
    href: "/portfolio/hospitality",
    img: "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751403403/Hyatt_Irvine_-_1_prjoof.heic"
  },
  {
    name: "EV Charging Stations",
    href: "/portfolio/evcharge",
    img: "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751402873/Toyo_Ev_GOAT_chargers-1_hs2njc.jpg"
  },
  {
    name: "Miscellaneous",
    href: "/portfolio/miscellaneous",
    img: "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751402525/Rexford_ps3tuq.heic"
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent"
      >
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={64} height={64} className="mt-2 cursor-pointer" />
          </Link>
          <span className="text-3xl font-bold -mt-1">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {[
            { text: "Home", href: "/" },
            { text: "About Us", href: "/about" },
            { text: "Services", href: "/services" },
            { text: "Portfolio", href: "/portfolio" },
            { text: "Contact", href: "/contact" },
          ].map((link) => (
            <Link key={link.text} href={link.href}>
              <span className="hover:text-blue-400 relative group cursor-pointer">{link.text}
                <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </Link>
          ))}
          <div className="flex items-center gap-5 ml-10">
            <a href="https://www.facebook.com/exclusiveenergyinc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} className="filter invert" />
            </a>
            <a href="https://www.instagram.com/exclusive_energy_electric/reels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={30} height={30} className="filter invert" />
            </a>
            <a href="https://www.linkedin.com/company/exclusive-energy-inc-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} className="filter invert" />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero & Projects */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-start items-center px-10 pt-44 pb-20"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dtqxebti9/image/upload/v1750887002/heroweb2_tryzvi.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-6xl font-extrabold mb-16 mt-4 text-white drop-shadow-lg"
          style={{ letterSpacing: "2px" }}
        >
          Projects
        </motion.h1>

        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white/90 flex flex-col items-center justify-center min-h-[370px] hover:scale-105 hover:shadow-blue-400/50 transition-all"
            >
              <Link href={proj.href} className="block w-full h-full">
                <div className="relative w-full h-[240px] rounded-t-2xl overflow-hidden">
                  <Image
                    src={proj.img}
                    alt={proj.name}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                    sizes="(max-width: 600px) 90vw, (max-width: 1200px) 40vw, 400px"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center p-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-1 text-center group-hover:text-blue-700 transition">
                    {proj.name}
                  </h2>
                  {/* Optional: Add a line or animated bar below */}
                  <span className="block w-12 h-1 rounded-full bg-blue-600 mx-auto my-3 group-hover:w-20 transition-all"></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
