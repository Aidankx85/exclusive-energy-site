"use client";

import Link from "next/link";
import Image from "next/image";
import RotatingHero from "../components/RotatingHero";
import { HERO_IMAGES } from "../lib/site";

export default function ServicesPage() {

  const services = [
    {
      img: "/what1.jpeg",
      title: "Tenant Improvements", // CHANGED TITLE HERE
      desc: "Expertly installed electrical infrastructure to support safe and reliable systems.",
      href: "/service-details/wiring",
    },
    {
      img: "/what2.jpeg",
      title: "Energy Efficient Solutions",
      desc: "Lighting and automation upgrades designed to save energy and reduce costs.",
      href: "/service-details/efficiency", // ENSURED CORRECT LINK HERE
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
    {
      img: "/warehouse-robot-cover.jpg",
      title: "Warehouse Automation",
      desc: "Turnkey automation systems including autonomous forklifts and smart controls — engineered to streamline operations.",
      href: "/service-details/warehouse-automation",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={128} height={128} className="mt-2 cursor-pointer" />
          </Link>
          <span className="text-4xl font-bold -mt-1">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {["Home", "About Us", "Services", "Portfolio", "Contact"].map((text, index) => {
            const hrefs = ["/", "/about", "/services", "/portfolio", "/contact"];
            return (
              <Link href={hrefs[index]} key={index} className="hover:text-blue-400 relative group cursor-pointer">
                <span>
                  {text}
                  <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
            );
          })}
          <div className="flex items-center gap-5 ml-10">
            <a href="https://www.facebook.com/exclusiveenergyinc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.instagram.com/exclusive_energy_electric/reels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.linkedin.com/company/exclusive-energy-inc-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Services Cards */}
      <RotatingHero images={HERO_IMAGES} className="min-h-screen" overlayClassName="bg-black/40">
        <div className="flex flex-col justify-center items-center px-10 pt-48 pb-20 min-h-screen">
          <div className="w-full max-w-7xl bg-white/10 backdrop-blur-md pt-10 pb-20 px-6 rounded-2xl">
            <h1 className="text-5xl font-bold mb-12 text-center tracking-wider text-white">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
              {services.map((item, idx) => (
                <div key={idx} className="group flex flex-col h-full rounded-lg shadow-lg overflow-hidden bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-400/30">
                  <div className="overflow-hidden">
                    {item.href === "/service-details/warehouse-automation" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/warehouse-robot-cover.jpg"
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                      >
                        <source src="/warehouse-robot-.mp4" type="video/mp4" />
                      </video>
                    ) : (
                      <Image src={item.img} alt={item.title} width={500} height={240} sizes="(max-width: 600px) 90vw, (max-width: 1200px) 30vw, 240px" className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />
                    )}
                  </div>
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
            </div>
          </div>
        </div>
      </RotatingHero>
    </div>
  );
}
