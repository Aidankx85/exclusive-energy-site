"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const hyattPhotos = [
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403403/Hyatt_Irvine_-_1_prjoof.heic",
    caption: "Lobby Lighting Upgrade"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403404/Hyatt_Irvine_-_2_prjoof.heic",
    caption: "Conference Room AV"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403405/Hyatt_Irvine_-_3_prjoof.heic",
    caption: "Guest Room LED Retrofit"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403406/Hyatt_Irvine_-_4_prjoof.heic",
    caption: "Pool Area Lighting"
  },
  {
    src: "https://res.cloudinary.com/dtqxebti9/image/upload/v1751403407/Hyatt_Irvine_-_5_prjoof.heic",
    caption: "Exterior Uplighting"
  },
];

export default function HyattIrvinePortfolio() {
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

      {/* Header */}
      <section className="min-h-[30vh] w-full bg-cover bg-center flex items-end justify-start pt-32 pb-10 px-10"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dtqxebti9/image/upload/v1751403403/Hyatt_Irvine_-_1_prjoof.heic')` }}>
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">Hyatt Irvine – Portfolio</h1>
      </section>

      {/* About Project */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 mb-14"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-3">Project: Hyatt Irvine Renovation</h2>
            <p className="text-lg mb-3">
              Exclusive Energy & Electric completed a comprehensive electrical and lighting renovation for the Hyatt Irvine, transforming hospitality spaces for guests and staff. Projects included advanced lighting upgrades, audio/visual installations, energy-efficient guest room retrofits, and elegant outdoor lighting for comfort and security.
            </p>
            <ul className="list-disc ml-6 text-base text-gray-700">
              <li>Lobby and conference center LED retrofits</li>
              <li>Guest room automation and AV installs</li>
              <li>Outdoor pool and landscape lighting</li>
              <li>Custom solutions for energy efficiency</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[250px]">
            <Image
              src="https://res.cloudinary.com/dtqxebti9/image/upload/v1751403403/Hyatt_Irvine_-_1_prjoof.heic"
              alt="Hyatt Irvine Cover"
              width={420}
              height={340}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </motion.div>

        {/* Animated Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {hyattPhotos.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="rounded-lg overflow-hidden shadow-md bg-white group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 600px) 90vw, (max-width: 1200px) 40vw, 400px"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-center text-gray-700">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
