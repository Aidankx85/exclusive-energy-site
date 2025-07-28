"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroImages = [
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887002/heroweb2_tryzvi.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887034/heroweb3_b7oqrn.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750888911/heroweb4_hckujj.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750888772/webhero2_xpj64z.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887046/heroweb5_jjw3vm.jpg"
];

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent"
      >
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={128} height={128} className="mt-2 cursor-pointer" />
          </Link>
          <span className="text-4xl font-bold -mt-1 text-white">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {navLinks.map(({ text, href }) => (
            <Link key={text} href={href}>
              <span className="hover:text-blue-400 relative group cursor-pointer text-white">
                {text}
                <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </Link>
          ))}
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
      </motion.nav>

      {/* Hero Section */}
      <section className="relative w-full h-[100vh]">
        <Image
          src={heroImages[currentImageIndex]}
          alt="Hero Background"
          fill
          className="object-cover brightness-70 transition-opacity duration-1000 z-0"
          priority
        />

        {/* Who We Are Box Centered Over Hero */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[98vw] max-w-7xl"
        >
          <div className="flex flex-col md:flex-row items-center bg-white p-10 md:p-16 rounded-xl shadow-2xl min-h-[410px] md:min-h-[350px]">
            {/* Picture with faded logo behind */}
            <div className="relative mb-8 md:mb-0 md:mr-14 flex-shrink-0 w-[350px] h-[350px]">
              {/* Faded Logo Behind */}
              <Image
                src="/exclusive-logo.png"
                alt="Logo Watermark"
                fill
                className="object-contain opacity-10 pointer-events-none select-none z-0"
                style={{ filter: 'blur(2px)' }}
              />
              {/* Foreground About Team Picture */}
              <Image
                src="https://res.cloudinary.com/dtqxebti9/image/upload/v1751326764/ChatGPT_Image_Jun_30_2025_04_38_52_PM_rraggs.png"
                alt="About Us Team"
                fill
                className="rounded-lg object-cover shadow-md z-10"
                priority
              />
            </div>
            <div className="border-l border-gray-200 pl-0 md:pl-14 text-left max-w-3xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-5">Who We Are</h2>
              <p className="text-xl font-semibold mb-3 text-gray-900">Where Energy Meets Excellence.</p>
              <p className="text-lg mb-4 text-gray-800">
                Founded as a partnership in 2007, Exclusive Energy & Electric has built a reputation for reliability and precision in commercial electrical contracting. We specialize in real estate developments, retail stores, warehouse infrastructure, government buildings, religious centers, and major clients such as Amazon, Chipotle, and Toyo Tires.
              </p>
              <p className="text-lg text-gray-800">
                Locally owned and operated in Southern California, we’ve served the region for over two decades with expertise in tenant improvements, ground-up builds, design-build projects, lighting retrofits, and energy-efficient applications. Whether powering a logistics center or retrofitting a modern retail chain, we deliver excellence at every stage.
              </p>
            </div>
          </div>
        </motion.section>
      </section>
      {/* Footer will automatically stay below */}
    </div>
  );
}
