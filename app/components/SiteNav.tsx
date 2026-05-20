"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Contact", href: "/contact" },
];

export default function SiteNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 hidden md:flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent"
    >
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={64} height={64} className="mt-2 cursor-pointer" />
        </Link>
        <span className="text-3xl font-bold text-white -mt-1">Exclusive Energy & Electric</span>
      </div>
      <div className="flex items-center gap-12 text-xl font-semibold">
        {navLinks.map((link) => (
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
  );
}
