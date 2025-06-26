"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden flex justify-between items-center px-6 py-4 bg-black text-white">
        <Link href="/">
          <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={50} height={50} />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 text-xl">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-3xl"
          >
            ✕
          </button>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/exclusiveenergyinc/" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} className="filter invert" />
            </a>
            <a href="https://www.instagram.com/exclusive_energy_electric/reels/" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={30} height={30} className="filter invert" />
            </a>
            <a href="https://www.linkedin.com/company/exclusive-energy-inc-" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} className="filter invert" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
