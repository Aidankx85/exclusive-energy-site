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

export default function ServicesPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      img: "/what1.jpeg",
      title: "Electrical Wiring & Control",
      desc: "Expertly installed electrical infrastructure to support safe and reliable systems.",
      href: "/service-details/wiring",
    },
    {
      img: "/what2.jpeg",
      title: "Energy Efficient Solutions",
      desc: "Lighting and automation upgrades designed to save energy and reduce costs.",
      href: "/service-details/efficiency",
    },
    {
      img: "/what3.jpg",
      title: "Warehouse Power Solutions",
      desc: "High-load electrical solutions customized for safe and efficient warehouse operations.",
      href: "/service-details/warehouse-power",
    },
    {
      img: "/what4.jpg",
      title: "Service & Maintenance",
      desc: "Scheduled inspections, maintenance, and emergency repairs for lasting system health.",
      href: "/service-details/maintenance",
    },
  ];

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

      {/* Hero Section with Services Cards */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-10 transition-all duration-1000 ease-in-out relative pt-48"
        style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 animate-fadeInUp w-full max-w-7xl bg-white/10 backdrop-blur-md pt-10 pb-20 px-6 rounded-2xl">
          <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-white">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
            {services.map((item, idx) => (
              <div key={idx} className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
                <div className="bg-white text-black p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
                    <p className="text-sm mb-4">{item.desc}</p>
                  </div>
                  <Link href={item.href}>
                    <span className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-blue-700 text-center block w-fit cursor-pointer">
                      READ MORE
                    </span>
                  </Link>
                </div>
              </div>
            ))}
            {/* Warehouse Automation Card */}
            <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden">
              <video autoPlay muted loop playsInline className="w-full h-60 object-cover">
                <source src="/warehouse-robot-.mp4" type="video/mp4" />
              </video>
              <div className="bg-white text-black p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blue-600 mb-2">Warehouse Automation</h3>
                  <p className="text-sm mb-4">Turnkey automation systems including autonomous forklifts and smart controls — engineered to streamline operations.</p>
                </div>
                <Link href="/service-details/warehouse-automation">
                  <span className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-blue-700 text-center block w-fit cursor-pointer">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
