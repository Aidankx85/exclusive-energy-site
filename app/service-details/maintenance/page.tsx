"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/heroweb1.jpeg",
  "/heroweb2.jpeg",
  "/heroweb3.jpeg",
  "/heroweb4.jpeg",
  "/heroweb5.jpeg",
];

export default function ServiceMaintenancePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-6">
          <Link href="/">
            <img src="/exclusive-logo.png" alt="Exclusive Logo" className="h-32 w-auto mt-2 cursor-pointer" />
          </Link>
          <span className="text-4xl font-bold -mt-1">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {["Home", "About Us", "Services", "Portfolio", "Contact"].map((text, index) => {
            const hrefs = ["/", "/about", "/services", "/portfolio", "/contact"];
            return (
              <Link href={hrefs[index]} key={index}>
                <span className="hover:text-blue-400 relative group cursor-pointer">
                  {text}
                  <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
            );
          })}
          <div className="flex items-center gap-5 ml-10">
            <a href="https://www.facebook.com/exclusiveenergyinc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/facebook.png" alt="Facebook" className="h-10 w-10 filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.instagram.com/exclusive_energy_electric/reels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagram.png" alt="Instagram" className="h-10 w-10 filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.linkedin.com/company/exclusive-energy-inc-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/linkedin.png" alt="LinkedIn" className="h-10 w-10 filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-10 transition-all duration-1000 ease-in-out relative pt-48 pb-40"
        style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-4xl bg-white/90 backdrop-blur-md p-10 rounded-xl text-black">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Service & Maintenance</h1>
          <p className="text-lg mb-6 text-center font-bold text-red-600">Coming Soon</p>
          <p className="text-lg mb-6">
            Our service & maintenance offerings provide the backbone for safe, long-term operation of your electrical systems. We offer routine inspections,
            diagnostics, repairs, and 24/7 emergency support to ensure uninterrupted productivity for your commercial facilities.
          </p>
        </div>
      </section>
    </div>
  );
}
