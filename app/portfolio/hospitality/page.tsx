"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403403/Hyatt_Irvine_-_1_prjoof.heic",
    caption: "Hyatt Irvine – Lobby Lighting Upgrade"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403404/Hyatt_Irvine_-_2_prjoof.heic",
    caption: "Hyatt Irvine – Conference Room AV"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403405/Hyatt_Irvine_-_3_prjoof.heic",
    caption: "Hyatt Irvine – Guest Room LED Retrofit"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403406/Hyatt_Irvine_-_4_prjoof.heic",
    caption: "Hyatt Irvine – Pool Area Lighting"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403407/Hyatt_Irvine_-_5_prjoof.heic",
    caption: "Hyatt Irvine – Exterior Uplighting"
  },
];

export default function HospitalityPortfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
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
          <span className="text-3xl font-bold -mt-1 text-white">Exclusive Energy & Electric</span>
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
              <span className="hover:text-blue-400 relative group cursor-pointer text-white">
                {link.text}
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

      {/* Hero Section */}
      <section className="min-h-[40vh] w-full bg-cover bg-center flex items-end justify-start pt-32 pb-10 px-10"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dtqxebti9/image/upload/v1750887002/heroweb2_tryzvi.jpg')` }}>
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">Hospitality Projects</h1>
      </section>

      {/* Gallery */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="rounded-xl shadow-lg bg-white overflow-hidden hover:shadow-blue-300 transition-all group"
            >
              <div className="relative w-full h-72">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 600px) 90vw, (max-width: 1200px) 40vw, 400px"
                  priority={idx === 0}
                />
              </div>
              <div className="p-4 group-hover:bg-blue-50 transition-all">
                <p className="font-semibold text-base">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
