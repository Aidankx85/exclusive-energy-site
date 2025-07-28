"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EVChargePortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
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

      <section
        className="relative min-h-screen flex flex-col justify-center items-center pt-44 pb-20 px-6"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dtqxebti9/image/upload/v1750887002/heroweb2_tryzvi.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-4xl w-full mx-auto flex bg-white/90 rounded-3xl shadow-2xl overflow-hidden flex-col md:flex-row">
          <div className="md:w-1/2 flex items-center justify-center p-8">
            <Image
              src="https://res.cloudinary.com/dtqxebti9/image/upload/f_auto/v1751402873/Toyo_Ev_GOAT_chargers-1_hs2njc.jpg"
              alt="EV Charging Stations"
              width={450}
              height={350}
              className="rounded-2xl object-cover w-full"
            />
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">EV Charging Stations</h2>
            <p className="text-gray-800 text-lg mb-2 font-semibold">Powering a Greener Future.</p>
            <p className="text-gray-800 text-md">
              Exclusive Energy & Electric installs, integrates, and maintains electric vehicle charging stations for commercial, public, and private clients across Southern California. 
              We ensure code compliance, safety, and seamless integration with your property.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
